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

        // VÁ LỖI: Sử dụng '---' làm dải phân cách thay vì '_'
        let uniqueQuizIds = [...new Set(mistakesReport.map(m => m.questionId.split('---')[0]))];
        
        uniqueQuizIds.forEach(qId => {
            for (let topic in practiceData) {
                let foundQuiz = practiceData[topic].find(q => q.id === qId);
                if (foundQuiz) {
                    let quizCopy = JSON.parse(JSON.stringify(foundQuiz));
                    
                    // VÁ LỖI: Sử dụng '---' làm dải phân cách
                    let failedStmtIds = mistakesReport.filter(m => m.questionId.startsWith(qId)).map(m => m.questionId.split('---')[1]);
                    
                    quizCopy.statements = quizCopy.statements.filter(s => failedStmtIds.includes(s.id));
                    
                    quizCopy.statements.forEach(s => {
                        // VÁ LỖI: Sử dụng '---' làm dải phân cách
                        let log = mistakesReport.find(m => m.questionId === `${qId}---${s.id}`);
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

        // CẤU HÌNH MÀU SẮC DỰA TRÊN CHUYÊN ĐỀ
        let borderTopColor = 'var(--primary)'; 
        if (isMistakeTab) {
            borderTopColor = '#ff003c'; 
        } else if (currentTopic === 'nhiet') {
            borderTopColor = 'var(--color-nhiet)'; 
        } else if (currentTopic === 'khili-tuong') {
            borderTopColor = 'var(--color-khi)'; 
        } else if (currentTopic === 'tu-truong') {
            borderTopColor = 'var(--color-tu)'; 
        } else if (currentTopic === 'hat-nhan') {
            borderTopColor = 'var(--color-hatnhan)'; 
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
                    // VÁ LỖI: Đổi '_' thành '---'
                    try { if (typeof TPhysicsPro !== 'undefined') TPhysicsPro.MistakeLog.resolveMistake(`${quizId}---${stmt.id}`); } catch(e){}
                } else {
                    stmtDiv.classList.add('wrong');
                    try {
                        if (typeof TPhysicsPro !== 'undefined') {
                            // VÁ LỖI: Đổi '_' thành '---'
                            TPhysicsPro.MistakeLog.logMistake(`${quizId}---${stmt.id}`, {
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
if (typeof TPhysicsPro !== 'undefined') {
        let topicName = "Chuyên đề Nhiệt Học";
        if (currentTopic === 'khili-tuong') topicName = "Chuyên đề Khí Lý Tưởng";
        if (currentTopic === 'tu-truong') topicName = "Chuyên đề Từ Trường";
        if (currentTopic === 'hat-nhan') topicName = "Chuyên đề Vật Lý Hạt Nhân";
        
        TPhysicsPro.HistoryLog.saveRecord(topicName, perfectQuestionsCount, totalQuestions);
        TPhysicsPro.Progress.clearProgress();
        if (typeof checkResumeCardGlobal === 'function') checkResumeCardGlobal();
    }
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
// ===================================================================
// HỆ THỐNG QUẢN LÝ DỮ LIỆU (LOCAL STORAGE) - BẢNG ĐIỀU KHIỂN ĐỒNG BỘ CORE
// ===================================================================

const StorageManager = {
    // 1. Lưu trạng thái bài đang làm dở - Đồng bộ thẳng với Core Progress
    saveProgress: function(subjectKey, subjectName, currentIndex, userAnswers) {
        if (typeof TPhysicsPro !== 'undefined') {
            TPhysicsPro.Progress.saveProgress(subjectKey, currentIndex, userAnswers);
        } else {
            // Cơ chế dự phòng (Fallback) nếu chạy độc lập
            const progressData = { subjectKey, subjectName, currentIndex, userAnswers, savedAt: Date.now() };
            localStorage.setItem('tphysics_quiz_progress', JSON.stringify(progressData));
        }
        this.checkResumeCard();
    },

    // 2. Hiển thị nút "Tiếp tục" nếu phát hiện có bài dở dang
    checkResumeCard: function() {
        const key = (typeof TPhysicsPro !== 'undefined') ? TPhysicsPro.KEYS.QUIZ_PROGRESS : 'tphysics_quiz_progress';
        const saved = localStorage.getItem(key);
        const resumeCard = document.getElementById('resumeCard');
        
        if (saved && resumeCard) {
            const data = JSON.parse(saved);
            // Tự động nhận diện tên chuyên đề thân thiện nếu thiếu dữ liệu truyền vào
            let displaySubject = data.subjectName;
            if (!displaySubject && data.subjectKey) {
                const topicNames = { 'nhiet': 'Nhiệt học', 'khili-tuong': 'Khí lý tưởng', 'tu-truong': 'Từ trường', 'hat-nhan': 'Vật lý hạt nhân' };
                displaySubject = topicNames[data.subjectKey] || data.subjectKey;
            }
            const displayIndex = data.currentIndex !== undefined ? data.currentIndex + 1 : 1;
            
            const resumeText = document.getElementById('resumeText');
            if (resumeText) {
                resumeText.innerText = `Bài: ${displaySubject} - Đang làm dở câu số ${displayIndex}`;
            }
            resumeCard.style.display = 'flex';
        } else if (resumeCard) {
            resumeCard.style.display = 'none';
        }
    },

    // 3. Ghi nhận kết quả thi, nạp lỗi sai vào Sổ tay và dọn dẹp tiến độ bài làm
    submitQuiz: function(subjectName, score, totalQuestions, mistakesArray) {
        if (typeof TPhysicsPro !== 'undefined') {
            // A. Đẩy bản ghi vào lịch sử hệ thống lõi
            TPhysicsPro.HistoryLog.saveRecord(subjectName, score, totalQuestions, 0);

            // B. Duyệt mảng lỗi phát sinh để đẩy vào kho MistakeLog đếm số lần sai
            if (mistakesArray && mistakesArray.length > 0) {
                mistakesArray.forEach(mistake => {
                    if (mistake.questionId) {
                        TPhysicsPro.MistakeLog.logMistake(mistake.questionId, mistake.details || mistake);
                    }
                });
            }
            // C. Giải phóng trạng thái nháp vì bài thi đã nộp thành công
            TPhysicsPro.Progress.clearProgress();
        } else {
            // Cơ chế dự phòng khi không tìm thấy core logic
            let history = JSON.parse(localStorage.getItem('tphysics_history_log')) || [];
            const dateStr = new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN');
            history.unshift({ date: dateStr, subject: subjectName, score: score, total: totalQuestions });
            localStorage.setItem('tphysics_history_log', JSON.stringify(history));
            localStorage.removeItem('tphysics_quiz_progress');
        }
        this.checkResumeCard();
    }
};

const App = {
    // 1. Phục hồi trạng thái bài thi, đồng bộ mượt mà với bộ dựng UI của app.js
    resumeQuiz: function() {
        const key = (typeof TPhysicsPro !== 'undefined') ? TPhysicsPro.KEYS.QUIZ_PROGRESS : 'tphysics_quiz_progress';
        const savedStr = localStorage.getItem(key);
        
        if (savedStr) {
            const saved = JSON.parse(savedStr);
            
            // Móc nối biến trạng thái và đáp án vào luồng chạy chính của app.js
            currentTopic = saved.subjectKey;
            window.currentUserAnswers = saved.userAnswers || {};
            
            // Đồng bộ trạng thái Active trên thanh Menu Chuyên đề
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${currentTopic}'`)) {
                    btn.classList.add('active');
                }
            });
            
            // Gọi hàm dựng lại bộ đề trắc nghiệm đã được global hóa
            if (typeof window.renderQuizzes === 'function') {
                window.renderQuizzes();
            }
            
            if (document.getElementById('resumeCard')) {
                document.getElementById('resumeCard').style.display = 'none';
            }
            const contentArea = document.getElementById('contentArea');
            if (contentArea) contentArea.scrollIntoView({ behavior: 'smooth' });
        }
    },

    // 2. Kết xuất dữ liệu lịch sử thi từ kho lưu trữ trung tâm
    showHistory: function() {
        let history = [];
        if (typeof TPhysicsPro !== 'undefined') {
            history = TPhysicsPro.HistoryLog.getHistory();
        } else {
            history = JSON.parse(localStorage.getItem('tphysics_history_log')) || [];
        }
        
        const modal = document.getElementById('statsModal');
        document.getElementById('modalTitle').innerText = "LỊCH SỬ LÀM BÀI";
        
        let html = '';
        if (history.length === 0) {
            html = '<p style="text-align:center; color: #94a3b8; margin-top:20px;">Bạn chưa hoàn thành bài thi nào.</p>';
        } else {
            history.forEach(item => {
                const name = item.topicName || item.subject;
                let percent = Math.round((item.score / item.total) * 100);
                let color = percent >= 80 ? '#34d399' : (percent >= 50 ? '#fbbf24' : '#f87171');
                html += `
                <div class="history-item" style="background: rgba(15, 23, 42, 0.4); border: 1px solid #334155; border-radius: 8px; padding: 15px; margin-bottom: 15px;">
                    <strong style="color: #e2e8f0; font-size:1.1rem;">${name}</strong> 
                    <span style="color:#94a3b8; font-size: 0.9em; float:right;">${item.date}</span><br>
                    <div style="margin-top:10px;">
                        Điểm số: <strong style="color: ${color}; font-size: 20px;">${item.score}/${item.total}</strong> 
                        <span style="color: ${color};">(${percent}%)</span>
                    </div>
                </div>`;
            });
        }
        document.getElementById('modalBody').innerHTML = html;
        modal.style.display = 'flex';
    },

    // 3. Đọc dữ liệu từ Sổ lỗi sai thông minh (Hỗ trợ đếm lượt sai và re-render MathJax)
    showMistakes: function() {
        let mistakesReport = [];
        if (typeof TPhysicsPro !== 'undefined') {
            mistakesReport = TPhysicsPro.MistakeLog.getMistakesReport();
        }

        const modal = document.getElementById('statsModal');
        document.getElementById('modalTitle').innerText = "SỔ TAY LỖI SAI CHỦ ĐỘNG";

        let html = '';
        if (mistakesReport.length === 0) {
            html = '<p style="text-align:center; color: #34d399; margin-top:20px; font-weight:500;">🎉 Thật tuyệt vời! Bạn chưa có câu hỏi nào bị sai.</p>';
        } else {
            mistakesReport.forEach((item, index) => {
                const details = item.details || {}; 
                const failCountBadge = item.failCount > 1 ? `<span style="float:right; background:rgba(248,113,113,0.15); color:#f87171; padding:2px 8px; border-radius:12px; font-size:0.8em;">Sai ${item.failCount} lần</span>` : '';
                
                html += `
                <div class="mistake-item" style="background: rgba(15, 23, 42, 0.4); border: 1px solid #334155; border-radius: 8px; padding: 15px; margin-bottom: 15px;">
                    <div style="color: #cbd5e1; margin-bottom: 10px; font-weight: 500;">
                        <span style="color: #60a5fa;">[Lỗi ${index + 1}]</span> ${details.contextSnippet || item.questionId}
                        ${failCountBadge}
                    </div>
                    <div style="color: #f87171; text-decoration: line-through; margin-bottom: 5px;">
                        <i class="fas fa-times"></i> Bạn chọn: ${details.userWrongAns || 'Không xác định'}
                    </div>
                    <div style="color: #34d399;">
                        <i class="fas fa-check"></i> Giải thích đúng: ${details.correctExp || 'Chưa có giải thích'}
                    </div>
                </div>`;
            });
        }
        document.getElementById('modalBody').innerHTML = html;
        modal.style.display = 'flex';
        
        // Quét lại toàn bộ Pop-up để render chuẩn hóa công thức Vật lý (MathJax) nếu có phát sinh
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
            MathJax.typesetPromise([document.getElementById('modalBody')]).catch((err) => console.log(err));
        }
    }
};

// Đảm bảo quét trạng thái tiến độ ngay khi khởi động ứng dụng
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { StorageManager.checkResumeCard(); }, 200);
});