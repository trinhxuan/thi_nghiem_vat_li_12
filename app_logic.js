/**
 * T-PHYSICS PRO - HỆ THỐNG QUẢN LÝ TIẾN ĐỘ & HỌC TẬP
 * Cấu trúc module chuyên nghiệp, dễ dàng mở rộng và tích hợp Firebase sau này.
 */

const TPhysicsPro = (function () {
    // KHOÁ LƯU TRỮ (LOCAL STORAGE KEYS)
    const KEYS = {
        USER_TOKEN: 'tphysics_user_token',
        USER_PROFILE: 'tphysics_user_profile',
        QUIZ_PROGRESS: 'tphysics_quiz_progress',
        MISTAKES_LOG: 'tphysics_mistakes_log'
    };

    // ==========================================
    // 1. MODULE XÁC THỰC (AUTHENTICATION)
    // ==========================================
    class Auth {
        /**
         * Xử lý đăng nhập và lưu trạng thái (Remember Me)
         * Trong thực tế, nên kết nối hàm này với Firebase Auth
         */
        static login(username, password, rememberMe) {
            // Giả lập gọi API kiểm tra tài khoản
            if (username && password) {
                // Tạo một token giả lập (Thực tế sẽ do server/Firebase cấp)
                const mockToken = btoa(username + new Date().getTime());
                const userProfile = { username: username, role: 'student', lastLogin: new Date().toISOString() };

                if (rememberMe) {
                    localStorage.setItem(KEYS.USER_TOKEN, mockToken);
                    localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(userProfile));
                } else {
                    sessionStorage.setItem(KEYS.USER_TOKEN, mockToken);
                    sessionStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(userProfile));
                }
                console.log("T-Physics Pro: Đăng nhập thành công!");
                return true;
            }
            return false;
        }

        static logout() {
            localStorage.removeItem(KEYS.USER_TOKEN);
            localStorage.removeItem(KEYS.USER_PROFILE);
            sessionStorage.removeItem(KEYS.USER_TOKEN);
            console.log("T-Physics Pro: Đã đăng xuất!");
        }

        static isLoggedIn() {
            return localStorage.getItem(KEYS.USER_TOKEN) || sessionStorage.getItem(KEYS.USER_TOKEN);
        }
    }

    // ==========================================
    // 2. MODULE QUẢN LÝ TIẾN ĐỘ (PROGRESS TRACKER)
    // ==========================================
    class Progress {
        /**
         * Lưu trạng thái bài làm hiện tại để học sinh có thể thoát ra và làm tiếp
         */
        static saveProgress(topicId, currentQuestionIndex, userAnswers) {
            let allProgress = JSON.parse(localStorage.getItem(KEYS.QUIZ_PROGRESS)) || {};
            
            allProgress[topicId] = {
                lastUpdated: new Date().toISOString(),
                currentIndex: currentQuestionIndex,
                answers: userAnswers // Ví dụ: { 'q1_a': true, 'q1_b': false... }
            };

            localStorage.setItem(KEYS.QUIZ_PROGRESS, JSON.stringify(allProgress));
        }

        /**
         * Tải lại tiến độ đang làm dở
         */
        static loadProgress(topicId) {
            let allProgress = JSON.parse(localStorage.getItem(KEYS.QUIZ_PROGRESS)) || {};
            return allProgress[topicId] || null; // Trả về null nếu chưa làm
        }

        static clearProgress(topicId) {
            let allProgress = JSON.parse(localStorage.getItem(KEYS.QUIZ_PROGRESS)) || {};
            delete allProgress[topicId];
            localStorage.setItem(KEYS.QUIZ_PROGRESS, JSON.stringify(allProgress));
        }
    }

    // ==========================================
    // 3. MODULE PHÂN TÍCH SAI LẦM (MISTAKE ANALYZER)
    // ==========================================
    class MistakeLog {
        /**
         * Ghi nhận câu hỏi học sinh làm sai để ôn tập lại
         * @param {string} questionId - ID câu hỏi (VD: 'q21')
         * @param {object} mistakeDetails - Chi tiết lỗi sai
         */
        static logMistake(questionId, mistakeDetails) {
            let mistakes = JSON.parse(localStorage.getItem(KEYS.MISTAKES_LOG)) || {};
            
            // Nếu đã sai câu này trước đó, tăng biến đếm (failCount)
            if (mistakes[questionId]) {
                mistakes[questionId].failCount += 1;
                mistakes[questionId].lastFailed = new Date().toISOString();
                mistakes[questionId].details = mistakeDetails;
            } else {
                mistakes[questionId] = {
                    failCount: 1,
                    lastFailed: new Date().toISOString(),
                    details: mistakeDetails
                };
            }

            localStorage.setItem(KEYS.MISTAKES_LOG, JSON.stringify(mistakes));
        }

        /**
         * Lấy danh sách các câu sai nhiều nhất để tạo đề "Khắc phục yếu kém"
         */
        static getMistakesReport() {
            let mistakes = JSON.parse(localStorage.getItem(KEYS.MISTAKES_LOG)) || {};
            let report = Object.keys(mistakes).map(qId => {
                return {
                    questionId: qId,
                    failCount: mistakes[qId].failCount,
                    lastFailed: mistakes[qId].lastFailed,
                    details: mistakes[qId].details
                };
            });

            // Sắp xếp ưu tiên những câu sai nhiều nhất lên đầu
            return report.sort((a, b) => b.failCount - a.failCount);
        }

        /**
         * Xóa lịch sử sai lầm sau khi học sinh đã ôn tập và làm đúng
         */
        static resolveMistake(questionId) {
            let mistakes = JSON.parse(localStorage.getItem(KEYS.MISTAKES_LOG)) || {};
            if (mistakes[questionId]) {
                delete mistakes[questionId];
                localStorage.setItem(KEYS.MISTAKES_LOG, JSON.stringify(mistakes));
            }
        }
    }

    // Export các module để sử dụng ở file giao diện (UI)
    return {
        Auth: Auth,
        Progress: Progress,
        MistakeLog: MistakeLog
    };

})();