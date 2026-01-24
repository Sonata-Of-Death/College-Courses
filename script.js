// DOM Elements
const container = document.getElementById('app-container');
const themeBtn = document.getElementById('theme-toggle');
const langBtn = document.querySelector('.lang-switch');

// Global State (The Brain)
let appState = {
    view: 'home', // home, year, term, dashboard, subject, quiz, quizResult
    major: null,
    year: null,
    term: null,
    currentSubjectId: null,
    activeTab: null,
    lang: 'en',
    // Quiz State Persistence
    quiz: {
        active: false,
        questions: [],
        currentQuestionIndex: 0,
        time: 0,
        userAnswers: {},
        flagged: new Set()
    }
};

// Dictionary
const translations = {
    en: {
        welcomeTitle: "Welcome to", welcomeSpan: "DNU Computer Science", welcomeSub: "Knowledge Base", selectTrack: "Select your academic track to proceed", back: "Back", selectYear: "Select Academic Year", selectTerm: "Select Semester", year: "Year", term1: "First Semester", term2: "Second Semester", t1Range: "Sep - Jan", t2Range: "Feb - Jun", clickAccess: "Click to access material", noSubjects: "No subjects found.", adminAccess: "Admin Access", login: "LOGIN", accessDenied: "Access Denied",
        lecs: "Lectures", summary: "Summaries", quiz: "Quiz", labs: "Labs", core_material: "Core Material", chapters: "Chapters", labs_interactive: "Interactive Labs",
        view: "View", download: "Download", startQuiz: "Start Quiz", quizReady: "Ready for the Challenge?",
        qNum: "Question", flag: "Flag for Review", prev: "Prev", next: "Next", submit: "Submit",
        resultTitle: "Quiz Completed!", timeTaken: "Time Taken", backCourse: "Back to Course",
        yourAns: "Your Answer", correctAns: "Correct Answer", reason: "Reason",
        flagAlertTitle: "Review Required", flagAlertMsg: "You have flagged questions: ", flagAlertAction: "Submit Anyway", flagAlertBack: "Return to Quiz"
    },
    ar: {
        welcomeTitle: "مرحباً بك في", welcomeSpan: "قاعدة معرفة حاسبات DNU", welcomeSub: "", selectTrack: "اختر المسار الأكاديمي للمتابعة", back: "رجوع", selectYear: "اختر السنة الدراسية", selectTerm: "اختر الفصل الدراسي", year: "السنة", term1: "الترم الأول", term2: "الترم الثاني", t1Range: "سبتمبر - يناير", t2Range: "فبراير - يونيو", clickAccess: "اضغط للوصول للمحتوى", noSubjects: "لا توجد مواد متاحة.", adminAccess: "دخول المشرفين", login: "دخول", accessDenied: "بيانات خاطئة",
        lecs: "محاضرات", summary: "ملخصات", quiz: "اختبار", labs: "تجارب معملية", core_material: "المحتوى الأساسي", chapters: "الفصول", labs_interactive: "معمل تفاعلي",
        view: "عرض", download: "تحميل", startQuiz: "بدء الاختبار", quizReady: "جاهز للتحدي؟",
        qNum: "سؤال", flag: "تحديد للمراجعة", prev: "السابق", next: "التالي", submit: "تسليم",
        resultTitle: "تم إنهاء الاختبار!", timeTaken: "الوقت المستغرق", backCourse: "عودة للمادة",
        yourAns: "إجابتك", correctAns: "الإجابة الصحيحة", reason: "السبب",
        flagAlertTitle: "تنبيه مراجعة", flagAlertMsg: "لديك أسئلة محددة للمراجعة أرقام: ", flagAlertAction: "تسليم على أي حال", flagAlertBack: "عودة للاختبار"
    }
};

function t(key) { return translations[appState.lang][key] || key; }

// --- Initialization ---
function init() {
    setupEventListeners();
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('admin')) renderAdminLogin();
    else renderHome();
}

function setupEventListeners() {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        themeBtn.innerHTML = document.body.classList.contains('light-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    langBtn.addEventListener('click', () => {
        // Toggle Language
        appState.lang = appState.lang === 'en' ? 'ar' : 'en';
        langBtn.textContent = appState.lang.toUpperCase();
        document.body.dir = appState.lang === 'ar' ? 'rtl' : 'ltr';
        
        // Re-render based on EXACT current state
        renderCurrentView(); 
    });

    // NEW: Logo Click -> Home Logic
    const logo = document.getElementById('app-logo');
    if(logo) {
        logo.addEventListener('click', () => {
            // Safety: Stop any running quiz timer
            if(typeof quizTimerInterval !== 'undefined' && quizTimerInterval) {
                clearInterval(quizTimerInterval);
            }
            // Reset State
            appState.quiz.active = false;
            // Go Home
            renderHome();
        });
    }
}

// --- Smart Router ---
function renderCurrentView() {
    switch(appState.view) {
        case 'home': renderHome(); break;
        case 'year': renderYearSelect(); break;
        case 'term': renderTermSelect(); break;
        case 'dashboard': renderDashboard(); break;
        case 'subject': 
            const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
            if(sub) renderSubjectView(sub, appState.activeTab);
            else renderDashboard();
            break;
        case 'quiz':
            if (appState.quiz.active) renderQuestion(appState.quiz.currentQuestionIndex);
            else renderCurrentView('subject'); 
            break;
        case 'quizResult': // NEW STATE: Handles Result Page persistence
            renderQuizResult(); 
            break;
        default: renderHome();
    }
}

// --- Views ---

function renderHome() {
    appState.view = 'home';
    container.innerHTML = `
        <section class="hero">
            <h1>${t('welcomeTitle')} <span class="highlight">${t('welcomeSpan')}</span> ${t('welcomeSub')}</h1>
            <p>${t('selectTrack')}</p>
            <div class="grid-center">
                <div class="selection-card" onclick="selectMajor('ai')">
                    <i class="fas fa-brain card-icon"></i>
                    <h2>${appState.lang === 'en' ? db.majors.ai.name_en : db.majors.ai.name_ar}</h2>
                </div>
                <div class="selection-card" onclick="selectMajor('cyber')">
                    <i class="fas fa-shield-halved card-icon"></i>
                    <h2>${appState.lang === 'en' ? db.majors.cyber.name_en : db.majors.cyber.name_ar}</h2>
                </div>
            </div>
        </section>
    `;
}

function selectMajor(major) {
    appState.major = major;
    renderYearSelect();
}

function renderYearSelect() {
    appState.view = 'year';
    container.innerHTML = `
        <button class="btn-back" onclick="renderHome()"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
        <h2 class="section-title">${t('selectYear')}</h2>
        <div class="grid-center">
            ${[1, 2, 3, 4].map(y => `
                <div class="selection-card" onclick="selectYear(${y})">
                    <div style="font-size: 2.5rem; font-weight: bold; color: var(--accent); margin-bottom: 1rem;">0${y}</div>
                    <h3>${t('year')} ${y}</h3>
                </div>
            `).join('')}
        </div>
    `;
}

function selectYear(year) {
    appState.year = year;
    renderTermSelect();
}

function renderTermSelect() {
    appState.view = 'term';
    container.innerHTML = `
        <button class="btn-back" onclick="renderYearSelect()"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
        <h2 class="section-title">${t('selectTerm')}</h2>
        <div class="grid-center">
            <div class="selection-card" onclick="selectTerm(1)">
                <div style="font-size: 4rem; color: var(--accent); margin-bottom: 0.5rem;"><i class="fas fa-calendar-check"></i></div>
                <h3>${t('term1')}</h3>
                <div style="margin-top: 10px; color: var(--text-secondary); background: rgba(255,255,255,0.05); padding: 5px; border-radius: 5px;">${t('t1Range')}</div>
            </div>
            <div class="selection-card" onclick="selectTerm(2)">
                <div style="font-size: 4rem; color: var(--accent); margin-bottom: 0.5rem;"><i class="fas fa-calendar-check"></i></div>
                <h3>${t('term2')}</h3>
                <div style="margin-top: 10px; color: var(--text-secondary); background: rgba(255,255,255,0.05); padding: 5px; border-radius: 5px;">${t('t2Range')}</div>
            </div>
        </div>
    `;
}

function selectTerm(term) {
    appState.term = term;
    renderDashboard();
}

function renderDashboard() {
    appState.view = 'dashboard';
    const filteredSubjects = db.subjects.filter(sub => 
        (sub.type === 'shared' || sub.type === appState.major) && 
        sub.year === appState.year && 
        sub.term === appState.term
    );
    const majorName = appState.lang === 'en' ? db.majors[appState.major].name_en : db.majors[appState.major].name_ar;

    container.innerHTML = `
        <button class="btn-back" onclick="renderTermSelect()"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
        <h2 class="section-title">${majorName} - ${t('year')} ${appState.year} / ${t('term'+appState.term)}</h2>
        <div class="dashboard-grid">
            ${filteredSubjects.map(sub => `
                <div class="subject-card" onclick="openSubject('${sub.id}')">
                    <div class="subject-title">${appState.lang === 'en' ? sub.name_en : sub.name_ar}</div>
                    <small style="color:var(--text-secondary)">${t('clickAccess')}</small>
                </div>
            `).join('')}
        </div>
    `;
}

function openSubject(id) {
    appState.currentSubjectId = id;
    const sub = db.subjects.find(s => s.id === id);
    if(sub) renderSubjectView(sub, sub.material[0]);
}

function renderSubjectView(subject, activeTab) {
    appState.view = 'subject';
    appState.activeTab = activeTab;
    
    const subName = appState.lang === 'en' ? subject.name_en : subject.name_ar;
    const tabsHtml = subject.material.map(mat => `
        <button class="tab-btn ${mat === activeTab ? 'active' : ''}" onclick="renderSubjectViewWithId('${subject.id}', '${mat}')">
            ${t(mat) || mat}
        </button>
    `).join('');

    container.innerHTML = `
        <button class="btn-back" onclick="renderDashboard()"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
        <div class="subject-header"><h1>${subName}</h1></div>
        <div class="tabs-container">${tabsHtml}</div>
        <div id="tab-content" class="content-area">${getTabContent(subject, activeTab)}</div>
        
        <!-- Modal Placeholders -->
        <div id="app-modal" class="modal-overlay"></div>
    `;
}

function renderSubjectViewWithId(id, tab) {
    const sub = db.subjects.find(s => s.id === id);
    renderSubjectView(sub, tab);
}

function getTabContent(subject, type) {
    if (!subject.content || !subject.content[type]) return `<p style="text-align:center;">Empty.</p>`;

    if (['lecs', 'summary', 'core_material', 'chapters'].includes(type)) {
        return `
            <div class="file-list">
                ${subject.content[type].map(file => `
                    <div class="file-item">
                        <div class="file-info">
                            <h3><i class="fas fa-file-pdf" style="color:var(--text-primary); margin-right:10px;"></i> ${file.title}</h3>
                            <span>${file.type}</span>
                        </div>
                        <div>
                            <button class="btn-view" onclick="openPdf('${file.link}')"><i class="fas fa-eye"></i> ${t('view')}</button>
                            <a href="${file.link}" target="_blank" class="btn-download"><i class="fas fa-download"></i> ${t('download')}</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    if (type === 'quiz') {
        return `<div style="text-align:center;">
            <h2 style="color:var(--white); margin-bottom:1rem;">${t('quizReady')}</h2>
            <button class="login-btn" style="max-width:200px;" onclick="startQuiz()">${t('startQuiz')}</button>
        </div>`;
    }
    return `<p>Coming Soon.</p>`;
}

// --- Quiz Logic ---
let quizTimerInterval = null;

function startQuiz() {
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
    if(!sub.content.quiz) return;

    // Force Quiz State
    appState.view = 'quiz';
    appState.quiz = {
        active: true,
        questions: sub.content.quiz,
        currentQuestionIndex: 0,
        time: 0,
        userAnswers: {},
        flagged: new Set()
    };

    if(quizTimerInterval) clearInterval(quizTimerInterval);
    quizTimerInterval = setInterval(() => {
        appState.quiz.time++;
        const timerDisplay = document.getElementById('timer-display');
        if(timerDisplay) timerDisplay.innerText = formatTime(appState.quiz.time);
    }, 1000);

    renderQuestion(0);
}

function renderQuestion(index) {
    appState.view = 'quiz';
    appState.quiz.currentQuestionIndex = index;
    
    const questions = appState.quiz.questions;
    const q = questions[index];
    const isFlagged = appState.quiz.flagged.has(index);
    
    // UPDATED: Replaced inline "color:white" with "color:var(--white)"
    const html = `
        <div class="quiz-container">
            <div class="quiz-top-bar">
                <span style="color:var(--white);">${t('qNum')} ${index + 1} / ${questions.length}</span>
                <span id="timer-display" class="timer-box">${formatTime(appState.quiz.time)}</span>
            </div>
            
            <button class="btn-flag ${isFlagged ? 'active' : ''}" onclick="toggleFlag(${index})">
                <i class="fas fa-flag"></i> ${t('flag')}
            </button>

            <div class="question-box force-ltr">
                <div class="question-text" style="color:var(--white);">${q.question}</div>
                <div class="options-grid">
                    ${q.options.map((opt, i) => `
                        <label class="option-label">
                            <input type="radio" name="q${q.id}" class="option-input" value="${i}" 
                            ${appState.quiz.userAnswers[index] === i ? 'checked' : ''} 
                            onchange="saveAnswer(${index}, ${i})"> 
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            </div>

            <div class="quiz-footer">
                ${index > 0 ? `<button class="btn-nav btn-prev" onclick="renderQuestion(${index - 1})">${t('prev')}</button>` : '<div></div>'}
                ${index < questions.length - 1 
                    ? `<button class="btn-nav btn-next" onclick="renderQuestion(${index + 1})">${t('next')}</button>` 
                    : `<button class="btn-nav btn-submit" onclick="attemptSubmit()">${t('submit')}</button>`}
            </div>
        </div>
        
        <div id="alert-modal" class="modal-overlay"></div>
    `;
    
    container.innerHTML = html;
}

function toggleFlag(index) {
    if(appState.quiz.flagged.has(index)) appState.quiz.flagged.delete(index);
    else appState.quiz.flagged.add(index);
    renderQuestion(index);
}

function saveAnswer(qIndex, ansIndex) {
    appState.quiz.userAnswers[qIndex] = ansIndex;
}

// --- Submit Logic ---
function attemptSubmit() {
    const flags = Array.from(appState.quiz.flagged).map(i => i + 1);
    if (flags.length > 0) {
        showFlagAlert(flags);
    } else {
        finalizeQuiz();
    }
}

function showFlagAlert(flags) {
    const modal = document.getElementById('alert-modal');
    if(!modal) return;
    
    modal.innerHTML = `
        <div class="alert-content">
            <h2 style="color:var(--warning); margin-bottom:1rem;">${t('flagAlertTitle')}</h2>
            <p style="color:var(--text-primary); margin-bottom:1rem;">
                ${t('flagAlertMsg')} <br>
                <strong style="font-size:1.2rem;">${flags.join(', ')}</strong>
            </p>
            <div style="display:flex; justify-content:center; gap:10px;">
                <button class="btn-cancel" onclick="closeFlagAlert()">${t('flagAlertBack')}</button>
                <button class="btn-confirm" onclick="forceSubmit()">${t('flagAlertAction')}</button>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

function closeFlagAlert() {
    const modal = document.getElementById('alert-modal');
    if(modal) {
        modal.style.display = 'none';
        modal.innerHTML = '';
    }
}

function forceSubmit() {
    closeFlagAlert();
    finalizeQuiz();
}

function finalizeQuiz() {
    clearInterval(quizTimerInterval);
    appState.quiz.active = false;
    appState.view = 'quizResult'; // Lock View State to Result
    renderQuizResult();
}

function renderQuizResult() {
    const questions = appState.quiz.questions;
    let score = 0;
    let reportHtml = '';

    questions.forEach((q, index) => {
        const isCorrect = appState.quiz.userAnswers[index] === q.answer;
        if(isCorrect) score++;
        
        if(!isCorrect) {
            const explanation = appState.lang === 'ar' ? (q.explanation_ar || q.explanation_en) : q.explanation_en;
            // UPDATED: Replaced inline "color:white" with "color:var(--white)" in result card
            reportHtml += `
                <div class="result-card force-ltr">
                    <h4 style="color:var(--white); margin-bottom:5px;">Q${index+1}: ${q.question}</h4>
                    <p style="color:#f87171;">${t('yourAns')}: ${q.options[appState.quiz.userAnswers[index]] || 'Not Answered'}</p>
                    <div class="correct-answer-box">
                        <strong>${t('correctAns')}:</strong> ${q.options[q.answer]}<br>
                        <div class="result-explanation" style="direction: ${appState.lang==='ar'?'rtl':'ltr'}; text-align: ${appState.lang==='ar'?'right':'left'}; margin-top:5px; border-top:1px solid rgba(0,0,0,0.1); padding-top:5px;">
                             <strong>${t('reason')}:</strong> ${explanation}
                        </div>
                    </div>
                </div>
            `;
        }
    });

    const percentage = Math.round((score / questions.length) * 100);
    
    // UPDATED: Replaced inline "color:white" with "color:var(--white)" in results header
    container.innerHTML = `
        <div class="quiz-container" style="text-align:center;">
            <h2 style="color:var(--white);">${t('resultTitle')}</h2>
            <div style="font-size:3rem; color:${percentage >= 50 ? '#10b981' : '#dc2626'}; margin:1rem 0;">${percentage}%</div>
            <p style="color:gray;">${t('timeTaken')}: ${formatTime(appState.quiz.time)}</p>
            
            <button class="btn-back" onclick="exitQuiz()" style="margin-top:1rem;">${t('backCourse')}</button>
            
            <div style="text-align:left; margin-top:2rem;">${reportHtml}</div>
        </div>
    `;
}

function exitQuiz() {
    // Manually route back to subject
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
    if(sub) renderSubjectView(sub, sub.material[0]);
    else renderDashboard();
}

// --- PDF Logic ---
function openPdf(link) {
    const modal = document.getElementById('app-modal');
    let embedLink = link;
    if(link.includes('drive.google.com') && link.includes('/view')) embedLink = link.replace('/view', '/preview');
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3 style="color:var(--text-primary)">Document Viewer</h3>
                <button class="close-modal" onclick="closeAppModal()">&times;</button>
            </div>
            <iframe class="pdf-frame" src="${embedLink}"></iframe>
        </div>
    `;
    modal.style.display = 'flex';
}

function closeAppModal() {
    const modal = document.getElementById('app-modal');
    modal.style.display = 'none';
    modal.innerHTML = '';
}

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
}

// Admin Logic
function renderAdminLogin() {
    // UPDATED: Replaced inline "color:white" with "color:var(--white)"
    container.innerHTML = `
        <div class="login-box">
            <h2 style="color:var(--white); margin-bottom:1rem;">${t('adminAccess')}</h2>
            <input type="text" id="user" class="login-input" placeholder="Username">
            <input type="password" id="pass" class="login-input" placeholder="Password">
            <button class="login-btn" onclick="checkAdmin()">${t('login')}</button>
            <p id="error-msg" style="color:red; margin-top:10px; display:none;">${t('accessDenied')}</p>
        </div>
    `;
}

function checkAdmin() {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;
    if (u === "Adham_Mohamed_SOD_CODA" && p === "Adham@SOD_CODA@5564") {
        alert("Welcome Admin. Panel opening...");
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// Run
document.addEventListener('DOMContentLoaded', init);
