/**
 * T-PHYSICS PRO - HỆ THỐNG QUẢN LÝ TIẾN ĐỘ & HỌC TẬP CORE
 */
const TPhysicsPro = (function () {
    // KHOÁ LƯU TRỮ (LOCAL STORAGE KEYS)
    const KEYS = {
        USER_TOKEN: 'tphysics_user_token',
        USER_PROFILE: 'tphysics_user_profile',
        QUIZ_PROGRESS: 'tphysics_quiz_progress',
        MISTAKES_LOG: 'tphysics_mistakes_log',
        HISTORY_LOG: 'tphysics_history_log'
    };

    // ==========================================
    // 1. MODULE XÁC THỰC (AUTHENTICATION)
    // ==========================================
    class Auth {
        static login(username, password, rememberMe) {
            if (username && password) {
                const mockToken = btoa(username + new Date().getTime());
                const userProfile = { username: username, role: 'student', lastLogin: new Date().toISOString() };
                if (rememberMe) {
                    localStorage.setItem(KEYS.USER_TOKEN, mockToken);
                    localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(userProfile));
                }
                return { success: true, profile: userProfile };
            }
            return { success: false, message: 'Sai tài khoản hoặc mật khẩu!' };
        }
        static checkSession() {
            return localStorage.getItem(KEYS.USER_TOKEN) !== null;
        }
        static logout() {
            localStorage.removeItem(KEYS.USER_TOKEN);
            localStorage.removeItem(KEYS.USER_PROFILE);
        }
    }

    // ==========================================
    // 2. MODULE QUẢN LÝ LỊCH SỬ (HISTORY LOG)
    // ==========================================
    class HistoryLog {
        static saveRecord(topicName, score, totalQuestions) {
            let history = JSON.parse(localStorage.getItem(KEYS.HISTORY_LOG)) || [];
            const record = {
                id: 'hist_' + new Date().getTime(),
                topicName: topicName,
                score: score,
                total: totalQuestions,
                date: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN')
            };
            history.unshift(record); 
            localStorage.setItem(KEYS.HISTORY_LOG, JSON.stringify(history));
        }

        static getHistory() {
            return JSON.parse(localStorage.getItem(KEYS.HISTORY_LOG)) || [];
        }

        static clearHistory() {
            localStorage.removeItem(KEYS.HISTORY_LOG);
        }
    }

    // ==========================================
    // 3. MODULE GHI NHẬN LỖI SAI (MISTAKE LOG)
    // ==========================================
    class MistakeLog {
        static logMistake(questionId, mistakeDetails) {
            let mistakes = JSON.parse(localStorage.getItem(KEYS.MISTAKES_LOG)) || {};
            if (mistakes[questionId]) {
                mistakes[questionId].failCount += 1;
                mistakes[questionId].lastFailed = new Date().toISOString();
                mistakes[questionId].details = mistakeDetails;
            } else {
                mistakes[questionId] = { failCount: 1, lastFailed: new Date().toISOString(), details: mistakeDetails };
            }
            localStorage.setItem(KEYS.MISTAKES_LOG, JSON.stringify(mistakes));
        }

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
            return report.sort((a, b) => b.failCount - a.failCount);
        }

        static resolveMistake(questionId) {
            let mistakes = JSON.parse(localStorage.getItem(KEYS.MISTAKES_LOG)) || {};
            if (mistakes[questionId]) {
                delete mistakes[questionId];
                localStorage.setItem(KEYS.MISTAKES_LOG, JSON.stringify(mistakes));
            }
        }
    }

    // ==========================================
    // 4. MODULE TIẾN ĐỘ BÀI LÀM DỞ (PROGRESS LOG)
    // ==========================================
    class Progress {
        static saveProgress(topic, answers) {
            const progressData = {
                subjectKey: topic,
                userAnswers: answers,
                savedAt: new Date().getTime()
            };
            localStorage.setItem(KEYS.QUIZ_PROGRESS, JSON.stringify(progressData));
        }
        static loadProgress(topic) {
            const saved = localStorage.getItem(KEYS.QUIZ_PROGRESS);
            if (!saved) return null;
            const data = JSON.parse(saved);
            if (data.subjectKey === topic) return { answers: data.userAnswers };
            return null;
        }
        static clearProgress() {
            localStorage.removeItem(KEYS.QUIZ_PROGRESS);
        }
    }

    return {
        Auth,
        HistoryLog,
        MistakeLog,
        Progress,
        KEYS
    };
})();