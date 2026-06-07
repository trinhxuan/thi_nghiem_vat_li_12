// ĐƯA CÁC BIẾN TOÀN CỤC VÀ ĐỊNH NGHĨA HÀM RA NGOÀI ĐỂ TRÁNH BỊ TRÌNH DUYỆT CHẶN KHI CHẠY OFFLINE
let currentTopic = 'nhiet';
const CORRECT_PASSWORD = '123';

// Bộ lọc tự động chuyển đổi dấu $ đơn thành \( \) để MathJax nhận diện chuẩn
function autoFormatMathJax(text) {
    if (!text) return '';
    return text.replace(/\$([^\$]+)\$/g, '\\($1\\)');
}

// 5. HÀM HIỂN THỊ BÀI TẬP CAO CẤP (Đã đưa ra global để index.html luôn gọi được)
window.renderQuizzes = function() {
    const contentArea = document.getElementById('contentArea');
    const loginOverlay = document.getElementById('login-overlay');
    if (!contentArea || (loginOverlay && loginOverlay.style.display !== 'none')) return;

    let currentQuizzes = [];
    let isMistakeTab = (currentTopic === 'khac-phuc-loi');

    if (isMistakeTab) {
        if (typeof TPhysicsPro === 'undefined') {
            contentArea.innerHTML = '<div class="question-card"><p>Hệ thống lõi TPhysicsPro chưa sẵn sàng...</p></div>';
            return;
        }
        
        const mistakesReport = TPhysicsPro.MistakeLog.getMistakesReport();
        if (!mistakesReport || mistakesReport.length === 0) {
            contentArea.innerHTML = `
                <div class="question-card" style="text-align: center; border-top: 4px solid #22c55e; padding: 40px 20px;">
                    <h2 style="color: #22c55e; margin-bottom: 10px;">🎉 TUYỆT VỜI! KHÔNG CÓ LỖI SAI NÀO</h2>
                    <p style="color: #64748b;">Học sinh chưa làm sai ý trắc nghiệm nào hoặc đã xuất sắc khắc phục hết các lỗi trước đó!</p>
                </div>
            `;
            return;
        }

        let uniqueQuizIds = [...new Set(mistakesReport.map(m => m.questionId.split('_')[0]))];
        
        uniqueQuizIds.forEach(qId => {
            for (let topic in practiceData) {
                let foundQuiz = practiceData[topic].find(q => q.id === qId);
                if (foundQuiz) {
                    let quizCopy = JSON.parse(JSON.stringify(foundQuiz));
                    let failedStmtIds = mistakesReport.filter(m => m.questionId.startsWith(qId)).map(m => m.questionId.split('_')[1]);
                    
                    quizCopy.statements = quizCopy.statements.filter(s => failedStmtIds.includes(s.id));
                    
                    quizCopy.statements.forEach(s => {
                        let log = mistakesReport.find(m => m.questionId === `${qId}_${s.id}`);
                        s.failCount = log ? log.failCount : 1;
                    });

                    currentQuizzes.push(quizCopy);
                    break;
                }
            }
        });
    } else {
        if (typeof practiceData === 'undefined' || !practiceData[currentTopic]) {
            contentArea.innerHTML = '<div class="question-card"><p>Dữ liệu chuyên đề đang được cập nhật...</p></div>';
            return;
        }
        currentQuizzes = practiceData[currentTopic];
        if (!window.currentUserAnswers) window.currentUserAnswers = {};
    }

    let headerTitle = isMistakeTab ? `<h2 style="color: #dc2626; margin-bottom: 20px; font-size: 1.3rem; font-weight:700;">🎯 ĐỀ ÔN TẬP CÁ NHÂN HÓA (${currentQuizzes.length} câu hỏi có ý làm sai)</h2>` : '';
    
  contentArea.innerHTML = headerTitle + currentQuizzes.map((quiz, index) => {
        let contextText = quiz.context;
        contextText = contextText.replace(/(<strong[^>]*>)\s*Câu\s*\d+\s*[:\-\.]*\s*/i, '$1');
        contextText = contextText.replace(/^Câu\s*\d+\s*[:\-\.]*\s*/i, '');
        contextText = autoFormatMathJax(contextText);

        let imageHtml = quiz.image ? `<img src="${quiz.image}" class="question-img" alt="Sơ đồ minh họa">` : '';

        // --- CẤU HÌNH MÀU SẮC DỰA TRÊN CHUYÊN ĐỀ (Đã đồng bộ CSS) ---
        let borderTopColor = 'var(--primary)'; // Màu mặc định
        if (isMistakeTab) {
borderTopColor = '#ff003c'; // Đỏ Neon rực rỡ và cảnh báo mạnh hơn
        } else if (currentTopic === 'nhiet') {
            borderTopColor = 'var(--color-nhiet)'; // Cam đỏ (Nhiệt học)
        } else if (currentTopic === 'khili-tuong') {
            borderTopColor = 'var(--color-khi)'; // Cyan ngọc (Khí lý tưởng)
        } else if (currentTopic === 'tu-truong') {
            borderTopColor = 'var(--color-tu)'; // Tím neon (Từ trường)
        } else if (currentTopic === 'hat-nhan') {
            borderTopColor = 'var(--color-hatnhan)'; // Xanh lục (Hạt nhân)
        }

        return `
            <div class="question-card" id="card_${quiz.id}" style="border-top-color: ${borderTopColor}">
                <div class="question-context">
                    <strong>Câu ${index + 1}: </strong>${contextText}
                </div>
                ${imageHtml}
                <div class="statements-container">
                    ${quiz.statements.map(s => {
                        let cleanText = s.text.replace(/^[a-d]\s*[)\.]\s*/i, '');
                        cleanText = autoFormatMathJax(cleanText);
                        
                        const savedAnswers = window.currentUserAnswers[quiz.id];
                        const isTrueChecked = savedAnswers && savedAnswers[s.id] === true ? 'checked' : '';
                        const isFalseChecked = savedAnswers && savedAnswers[s.id] === false ? 'checked' : '';

                        let alertBadge = isMistakeTab ? `<span style="background: #fef2f2; color: #ef4444; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; border: 1px solid #fca5a5; margin-left: 8px;">Sai ${s.failCount} lần</span>` : '';

                        return `
                        <div class="statement" id="stmt_${quiz.id}_${s.id}">
                            <div class="stmt-row">
                                <div class="statement-text"><strong>${s.id})</strong> ${cleanText} ${alertBadge}</div>
                                <div class="options">
                                    <label class="opt-btn">
                                        <input type="radio" name="${quiz.id}-${s.id}" value="true" ${isTrueChecked} onclick="selectAnswer('${quiz.id}', '${s.id}', true)"> Đúng
                                    </label>
                                    <label class="opt-btn">
                                        <input type="radio" name="${quiz.id}-${s.id}" value="false" ${isFalseChecked} onclick="selectAnswer('${quiz.id}', '${s.id}', false)"> Sai
                                    </label>
                                </div>
                            </div>
                            <div class="stmt-explanation" id="exp_${quiz.id}_${s.id}"></div>
                        </div>
                        `;
                    }).join('')}
                </div>
                <button class="btn-check" style="${isMistakeTab ? 'background-color: #dc2626;' : ''}" onclick="checkAnswers('${quiz.id}')">Kiểm tra kết quả</button>
            </div>
        `;
    }).join('');

    if (!isMistakeTab) {
        contentArea.innerHTML += `
            <div style="text-align: center; margin: 40px 0 20px 0;">
                <button class="submit-btn-global" onclick="submitAndScore()">
                     🚀 Nộp bài và xem kết quả toàn diện
                </button>
            </div>
        `;
    }

    setTimeout(() => {
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
            MathJax.typesetPromise([contentArea]).catch((err) => console.log(err));
        }
    }, 100);
};

// 6. CẬP NHẬT KHI CHỌN ĐÁP ÁN
window.selectAnswer = function(questionId, statementId, isTrueSelected) {
    if (!window.currentUserAnswers) window.currentUserAnswers = {};
    if (!window.currentUserAnswers[questionId]) window.currentUserAnswers[questionId] = {};
    
    window.currentUserAnswers[questionId][statementId] = isTrueSelected;

    try {
        if (typeof TPhysicsPro !== 'undefined' && currentTopic !== 'khac-phuc-loi') {
            TPhysicsPro.Progress.saveProgress(currentTopic, 0, window.currentUserAnswers);
        }
    } catch (e) { console.log("Giao thức file:// hạn chế LocalStorage khi lưu tiến độ"); }
};

// 7. HÀM CHUYỂN CHUYÊN ĐỀ
window.switchTopic = function(topic, element) {
    currentTopic = topic;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    
    if (topic !== 'khac-phuc-loi') {
        try {
            if (typeof TPhysicsPro !== 'undefined') {
                let savedState = TPhysicsPro.Progress.loadProgress(currentTopic);
                window.currentUserAnswers = savedState ? savedState.answers || {} : {};
            } else { window.currentUserAnswers = {}; }
        } catch (e) { window.currentUserAnswers = {}; }
    } else {
        window.currentUserAnswers = {};
    }

    renderQuizzes();
};

// 8. HÀM KIỂM TRA ĐÁP ÁN CỤC BỘ
window.checkAnswers = function(quizId) {
    const contentArea = document.getElementById('contentArea');
    let quizData = null;
    for (let topic in practiceData) {
        let found = practiceData[topic].find(q => q.id === quizId);
        if (found) { quizData = found; break; }
    }
    if (!quizData) return;

    quizData.statements.forEach(stmt => {
        const selected = document.querySelector(`input[name="${quizId}-${stmt.id}"]:checked`);
        const stmtDiv = document.getElementById(`stmt_${quizId}_${stmt.id}`);
        const expDiv = document.getElementById(`exp_${quizId}_${stmt.id}`);
        
        if (stmtDiv && expDiv) {
            stmtDiv.classList.remove('correct', 'wrong');

            if (!selected) {
                expDiv.innerHTML = `<span style="color: #e67e22; font-weight: 500;">⚠️ Bạn chưa chọn đáp án cho ý này!</span>`;
                expDiv.classList.add('show');
            } else {
                const isUserTrue = selected.value === 'true';
                const isCorrect = (isUserTrue === stmt.isTrue);

                let statusText = isCorrect 
                    ? '<strong style="color: #155724; font-size: 0.95rem;">✔ Chính xác!</strong>' 
                    : '<strong style="color: #721c24; font-size: 0.95rem;">✘ Không chính xác!</strong>';

                if (isCorrect) {
                    stmtDiv.classList.add('correct');
                    try { if (typeof TPhysicsPro !== 'undefined') TPhysicsPro.MistakeLog.resolveMistake(`${quizId}_${stmt.id}`); } catch(e){}
                } else {
                    stmtDiv.classList.add('wrong');
                    try {
                        if (typeof TPhysicsPro !== 'undefined') {
                            TPhysicsPro.MistakeLog.logMistake(`${quizId}_${stmt.id}`, {
                                topic: currentTopic,
                                userChoice: isUserTrue,
                                correctInterpretation: stmt.isTrue
                            });
                        }
                    } catch(e){}
                }
                
                let cleanExp = autoFormatMathJax(stmt.exp || "Chưa có lời giải chi tiết.");
                expDiv.innerHTML = `${statusText} <br> <strong>💡 Giải thích:</strong> ${cleanExp}`;
                expDiv.classList.add('show');
            }
        }
    });

    if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
        MathJax.typesetPromise([contentArea]).catch((err) => console.log("MathJax Error: ", err));
    }
};

// 9. HÀM NỘP BÀI TỔNG HỢP TOÀN ĐỀ
window.submitAndScore = function() {
    if (typeof practiceData === 'undefined' || !practiceData[currentTopic]) {
        alert("Không tìm thấy dữ liệu để chấm điểm!");
        return;
    }

    const currentQuizzes = practiceData[currentTopic];
    let totalQuestions = currentQuizzes.length;
    let totalStatements = 0;
    let correctStatementsCount = 0;
    let perfectQuestionsCount = 0;
    let reportDetailsHtml = '';

    currentQuizzes.forEach((quiz, index) => {
        let quizCorrectStatements = 0;
        let quizTotalStatements = quiz.statements.length;
        totalStatements += quizTotalStatements;

        quiz.statements.forEach(stmt => {
            const savedAnswers = window.currentUserAnswers?.[quiz.id];
            const userChoice = savedAnswers?.[stmt.id];
            if (userChoice !== undefined && userChoice === stmt.isTrue) {
                correctStatementsCount++;
                quizCorrectStatements++;
            }
        });

        let isPerfect = (quizCorrectStatements === quizTotalStatements);
        if (isPerfect) perfectQuestionsCount++;

        let quizScore = 0;
        if (quizCorrectStatements === 1) quizScore = 0.1;
        else if (quizCorrectStatements === 2) quizScore = 0.25;
        else if (quizCorrectStatements === 3) quizScore = 0.5;
        else if (quizCorrectStatements === 4) quizScore = 1.0;

        reportDetailsHtml += `
            <tr>
                <td><strong>Câu ${index + 1}</strong></td>
                <td><span class="badge-info">${quizCorrectStatements}/${quizTotalStatements} ý</span></td>
                <td>${isPerfect ? '<span style="color: #22c55e; font-weight: bold;">✔ Tuyệt đối</span>' : '<span style="color: #64748b;">Chưa trọn vẹn</span>'}</td>
                <td><strong>${quizScore.toFixed(2)}đ</strong></td>
            </tr>
        `;
    });

    let finalScore = (perfectQuestionsCount / totalQuestions) * 10;

    let modalHtml = `
        <div id="score-modal" class="score-modal-overlay">
            <div class="score-modal-box">
                <div class="modal-header">
                    <h2>📊 KẾT QUẢ BÀI LÀM CHUYÊN ĐỀ</h2>
                    <button class="close-modal-btn" onclick="document.getElementById('score-modal').remove()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="score-summary-grid">
                        <div class="summary-card primary">
                            <span class="summary-title">Điểm Số (Thang 10)</span>
                            <span class="summary-value">${finalScore.toFixed(2)}</span>
                        </div>
                        <div class="summary-card success">
                            <span class="summary-title">Câu Đúng Trọn Vẹn</span>
                            <span class="summary-value">${perfectQuestionsCount} / ${totalQuestions}</span>
                        </div>
                        <div class="summary-card info">
                            <span class="summary-title">Tổng Lệnh Ý Đúng</span>
                            <span class="summary-value">${correctStatementsCount} / ${totalStatements}</span>
                        </div>
                    </div>
                    <div class="score-table-wrapper">
                        <h3>📋 Bảng thống kê chi tiết</h3>
                        <table class="score-report-table">
                            <thead>
                                <tr>
                                    <th>Nội dung câu</th>
                                    <th>Số ý trả lời đúng</th>
                                    <th>Trạng thái</th>
                                    <th>Điểm đạt được</th>
                                    </tr>
                            </thead>
                            <tbody>
                                ${reportDetailsHtml}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-modal-close" onclick="document.getElementById('score-modal').remove()">Đóng bảng điểm</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
};

// ĐỂ ĐẢM BẢO AN TOÀN TRUY CẬP ĐÁP ỨNG CHO CẢ DOM KHỞI TẠO CHẬM
document.addEventListener('DOMContentLoaded', () => {
    const loginOverlay = document.getElementById('login-overlay');
    const passInput = document.getElementById('passInput');
    const userInput = document.getElementById('userInput');
    const loginError = document.getElementById('login-error');

    // 1. KIỂM TRA ĐĂNG NHẬP TỰ ĐỘNG
    try {
        if (typeof TPhysicsPro !== 'undefined' && TPhysicsPro.Auth.isLoggedIn()) {
            if (loginOverlay) loginOverlay.style.display = 'none';
            initApp(); 
        }
    } catch (e) { initApp(); }

    // 2. ĐĂNG NHẬP BAN ĐẦU
    window.handleLogin = function() {
        if (!passInput) return;
        const user = userInput ? userInput.value.trim() : "Học sinh";
        const pass = passInput.value.trim();
        const isRemember = document.getElementById('chkRememberMe')?.checked || false;

        if (pass === CORRECT_PASSWORD) {
            try {
                if (typeof TPhysicsPro !== 'undefined') TPhysicsPro.Auth.login(user, pass, isRemember);
            } catch(e){}
            if (loginOverlay) loginOverlay.style.display = 'none';
            initApp();
        } else {
            if (loginError) {
                loginError.textContent = '❌ Mật khẩu không chính xác, vui lòng thử lại!';
                loginError.style.display = 'block';
            }
            passInput.value = '';
            passInput.focus();
        }
    };

    if (passInput) {
        passInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleLogin(); });
    }
    if (userInput) {
        userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') passInput.focus(); });
    }

    function initApp() {
        window.currentUserAnswers = {};
        try {
            if (typeof TPhysicsPro !== 'undefined' && currentTopic !== 'khac-phuc-loi') {
                let savedState = TPhysicsPro.Progress.loadProgress(currentTopic);
                if (savedState && savedState.answers) {
                    if (confirm("Bạn có bài tập đang làm dở. Bạn có muốn tiếp tục không?")) {
                        window.currentUserAnswers = savedState.answers;
                    } else {
                        TPhysicsPro.Progress.clearProgress(currentTopic);
                    }
                }
            }
        } catch (e) { console.log("Chạy offline file:// - Bỏ qua nạp bộ nhớ tạm"); }
        
        window.renderQuizzes(); 
    }
});