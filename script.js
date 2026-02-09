// ======================================================
// PART 1: SETUP, STATE, TRANSLATIONS & ROUTING
// ======================================================

const container = document.getElementById('app-container');
const themeBtn = document.getElementById('theme-toggle');
const langBtn = document.querySelector('.lang-switch');
const footer = document.getElementById('main-footer');

let appState = {
    view: 'home', 
    major: null,
    year: null,
    term: null,
    currentSubjectId: null,
    activeTab: null,
    subFilter: null, 
    lang: 'en',
    lab: { active: false, id: null, questions: [], currentQIndex: 0, time: 0, userCode: "", surrendered: false },
    quiz: { 
        active: false, 
        questions: [], 
        currentQuestionIndex: 0, 
        time: 0, 
        userAnswers: {}, 
        flagged: new Set(),
        type: 'mcq', // 'mcq', 'text', or 'tf'
        selfCheckState: 'input' // 'input' or 'check'
    }
};

const translations = {
    en: {
        welcomeTitle: "Welcome to", welcomeSpan: "DNU Computer Science", welcomeSub: "Knowledge Base", 
        selectTrack: "Select your academic track to proceed", back: "Back", 
        selectYear: "Select Academic Year", selectTerm: "Select Semester", 
        year: "Year", term1: "First Semester", term2: "Second Semester", 
        t1Range: "Sep - Jan", t2Range: "Feb - Jun", clickAccess: "Click to access material",
        lecs: "Lectures", summary: "Summaries", quiz: "Quiz", labs: "Labs", 
        chapters: "Chapters", core_material: "Core Material",
        arSec: "Arabic Section", enSec: "English Section", backToSelection: "Back to Selection",
        lecsMain: "Lectures", lecsSol: "Solutions", labsMaterial: "Lab Slides", labsQuestions: "Interactive Labs",
        startLab: "Start Challenge", runCode: "Run Code", surrender: "Show Solution", 
        nextQ: "Next Question", understood: "I Understood",
        solving: "Compiling...", showHint: "💡 Show Hint", hideHint: "Hint Visible",
        mainClassAlertTitle: "⚠️ Naming Convention Error", 
        mainClassAlertBody: "The compiler requires the main class to be named <code>Main</code>.<br>Example:<br><code>public class Main { ... }</code>",
        inputPrompt: "This program requires input.",
        inputPlaceholder: "Enter values separated by space (e.g. 5 10)",
        correctTitle: "Excellent Work!", correctMsg: "Output matches expected result.",
        nextAuto: "Next question in 5s...",
        preview: "Document Preview", close: "Close",
        adminAccess: "Admin Access", login: "LOGIN", accessDenied: "Access Denied",
        quizReady: "Ready to test your knowledge?", startQuiz: "Start Quiz",
        qNum: "Question", flag: "Flag for Review", submit: "Submit Quiz", prev: "Previous", next: "Next",
        flagAlertTitle: "Unanswered Questions", flagAlertMsg: "You have flagged questions:", flagAlertBack: "Review", flagAlertAction: "Submit Anyway",
        resultTitle: "Quiz Results", timeTaken: "Time Taken", backCourse: "Back to Course", reason: "Explanation",
        showAnswer: "Show Model Answer", markCorrect: "I Was Correct ✅", markWrong: "I Was Wrong ❌", typeAnswer: "Type your answer here (optional)...",
        modelAnswer: "Model Answer:", exit: "Exit"
    },
    ar: {
        welcomeTitle: "مرحباً بك في", welcomeSpan: "قاعدة معرفة حاسبات DNU", welcomeSub: "", 
        selectTrack: "اختر المسار الأكاديمي للمتابعة", back: "رجوع", 
        selectYear: "اختر السنة الدراسية", selectTerm: "اختر الفصل الدراسي", 
        year: "السنة", term1: "الترم الأول", term2: "الترم الثاني", 
        t1Range: "سبتمبر - يناير", t2Range: "فبراير - يونيو", clickAccess: "اضغط للوصول للمحتوى",
        lecs: "محاضرات", summary: "ملخصات", quiz: "اختبار", labs: "لابات", 
        chapters: "فصول الكتاب", core_material: "المحتوى الأساسي",
        arSec: "القسم العربي", enSec: "القسم الإنجليزي", backToSelection: "العودة للاختيار",
        lecsMain: "شرح المحاضرات", lecsSol: "حلول الأسئلة", labsMaterial: "ملفات الشرح", labsQuestions: "معامل تفاعلية",
        startLab: "بدء التحدي", runCode: "تشغيل الكود", surrender: "إظهار الحل", 
        nextQ: "السؤال التالي", understood: "فهمت الفكرة",
        solving: "جاري المعالجة...", showHint: "💡 تلميح", hideHint: "التلميح ظاهر",
        mainClassAlertTitle: "⚠️ خطأ في التسمية", 
        mainClassAlertBody: "عشان الكود يشتغل هنا، لازم اسم الكلاس يكون <code>Main</code>.<br>مثال:<br><code>public class Main { ... }</code>",
        inputPrompt: "البرنامج يحتاج مدخلات (Input).",
        inputPlaceholder: "ادخل القيم وافصل بمسافة (مثال: 5 10)",
        correctTitle: "عمل رائع!", correctMsg: "النتيجة مطابقة للمطلوب.",
        nextAuto: "السؤال التالي خلال 5 ثواني...",
        preview: "عرض الملف", close: "إغلاق",
        adminAccess: "دخول المشرفين", login: "دخول", accessDenied: "بيانات خاطئة",
        quizReady: "جاهز تختبر معلوماتك؟", startQuiz: "بدء الاختبار",
        qNum: "سؤال", flag: "تحديد للمراجعة", submit: "إنهاء الاختبار", prev: "السابق", next: "التالي",
        flagAlertTitle: "أسئلة معلقة", flagAlertMsg: "قمت بتحديد الأسئلة التالية:", flagAlertBack: "مراجعة", flagAlertAction: "إنهاء وتصحيح",
        resultTitle: "نتيجة الاختبار", timeTaken: "الوقت المستغرق", backCourse: "عودة للمادة", reason: "التفسير",
        showAnswer: "عرض الإجابة النموذجية", markCorrect: "إجابتي صحيحة ✅", markWrong: "إجابتي خاطئة ❌", typeAnswer: "اكتب إجابتك هنا (اختياري)...",
        modelAnswer: "الإجابة النموذجية:", exit: "خروج"
    }
};

function t(key) { 
    const val = translations[appState.lang][key];
    return val !== undefined ? val : key; 
}

// --- KaTeX Helper (Enhanced) ---
function renderMath() {
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                {left: "$$", right: "$$", display: true},  // Block Math
                {left: "$", right: "$", display: false},   // Inline Math
                {left: "\\(", right: "\\)", display: false},
                {left: "\\[", right: "\\]", display: true}
            ],
            throwOnError: false
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof db === 'undefined') { container.innerHTML = `<div style="color:red; text-align:center; padding:50px;"><h1>⚠️ Error</h1><p>Data file missing.</p></div>`; return; }
    setupEventListeners();
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('admin')) renderAdminLogin();
    else renderHome();
});

function setupEventListeners() {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        themeBtn.innerHTML = document.body.classList.contains('light-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
    langBtn.addEventListener('click', () => {
        appState.lang = appState.lang === 'en' ? 'ar' : 'en';
        langBtn.textContent = appState.lang.toUpperCase();
        document.body.dir = appState.lang === 'ar' ? 'rtl' : 'ltr';
        renderCurrentView(); 
    });
    const logo = document.getElementById('app-logo');
    if(logo) logo.addEventListener('click', () => { clearIntervals(); appState.quiz.active = false; appState.lab.active = false; renderHome(); });
}
function clearIntervals() { if(typeof labTimerInterval !== 'undefined') clearInterval(labTimerInterval); if(typeof quizTimerInterval !== 'undefined') clearInterval(quizTimerInterval); }

// --- Routing ---
function renderCurrentView() {
    if (appState.view === 'home') footer.classList.add('home-footer'); else footer.classList.remove('home-footer');
    switch(appState.view) {
        case 'home': renderHome(); break;
        case 'year': renderYearSelect(); break;
        case 'term': renderTermSelect(); break;
        case 'dashboard': renderDashboard(); break;
        case 'subject': 
            if(appState.currentSubjectId) { const sub = db.subjects.find(s => s.id === appState.currentSubjectId); if(sub) renderSubjectView(sub, appState.activeTab); } else renderDashboard();
            break;
        case 'lab': appState.lab.active ? renderLabQuestion() : renderCurrentView('subject'); break;
        case 'quiz': appState.quiz.active ? renderQuestion(appState.quiz.currentQuestionIndex) : renderCurrentView('subject'); break;
        case 'quizResult': renderQuizResult(); break;
        case 'admin': renderAdminLogin(); break;
        default: renderHome();
    }
}

// --- Views ---
function renderHome() {
    appState.view = 'home';
    footer.classList.add('home-footer');
    container.innerHTML = `
        <section class="hero">
            <h1>${t('welcomeTitle')} <span class="highlight">${t('welcomeSpan')}</span> ${t('welcomeSub')}</h1>
            <p>${t('selectTrack')}</p>
            <div class="grid-center">
                <div class="selection-card" onclick="selectMajor('ai')"><i class="fas fa-brain card-icon"></i><h2>${appState.lang === 'en' ? db.majors.ai.name_en : db.majors.ai.name_ar}</h2></div>
                <div class="selection-card" onclick="selectMajor('cyber')"><i class="fas fa-shield-halved card-icon"></i><h2>${appState.lang === 'en' ? db.majors.cyber.name_en : db.majors.cyber.name_ar}</h2></div>
            </div>
        </section>`;
}
function selectMajor(major) { appState.major = major; renderYearSelect(); }
function renderYearSelect() {
    appState.view = 'year';
    footer.classList.remove('home-footer');
    container.innerHTML = `
        <button class="btn-back" onclick="renderHome()"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
        <h2 class="section-title">${t('selectYear')}</h2>
        <div class="grid-center">
            ${[1, 2, 3, 4].map(y => `<div class="selection-card" onclick="selectYear(${y})"><div style="font-size: 2.5rem; font-weight: bold; color: var(--accent); margin-bottom: 1rem;">0${y}</div><h3>${t('year')} ${y}</h3></div>`).join('')}
        </div>`;
}
function selectYear(year) { appState.year = year; renderTermSelect(); }
function renderTermSelect() {
    appState.view = 'term';
    container.innerHTML = `
        <button class="btn-back" onclick="renderYearSelect()"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
        <h2 class="section-title">${t('selectTerm')}</h2>
        <div class="grid-center">
            <div class="selection-card" onclick="selectTerm(1)"><div style="font-size: 3rem; color: var(--accent); margin-bottom: 0.5rem;"><i class="fas fa-calendar-check"></i></div><h3>${t('term1')}</h3><small style="color:var(--text-secondary)">${t('t1Range')}</small></div>
            <div class="selection-card" onclick="selectTerm(2)"><div style="font-size: 3rem; color: var(--accent); margin-bottom: 0.5rem;"><i class="fas fa-calendar-check"></i></div><h3>${t('term2')}</h3><small style="color:var(--text-secondary)">${t('t2Range')}</small></div>
        </div>`;
}
function selectTerm(term) { appState.term = term; renderDashboard(); }
function renderDashboard() {
    appState.view = 'dashboard';
    const filteredSubjects = db.subjects.filter(sub => (sub.type === 'shared' || sub.type === appState.major) && sub.year === appState.year && sub.term === appState.term);
    const majorName = appState.lang === 'en' ? db.majors[appState.major].name_en : db.majors[appState.major].name_ar;
    container.innerHTML = `
        <button class="btn-back" onclick="renderTermSelect()"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
        <h2 class="section-title">${majorName}</h2>
        <div class="dashboard-grid">
            ${filteredSubjects.map(sub => `<div class="subject-card" onclick="openSubject('${sub.id}')"><div class="subject-title">${appState.lang === 'en' ? sub.name_en : sub.name_ar}</div><small style="color:var(--text-secondary)">${t('clickAccess')}</small></div>`).join('')}
        </div>`;
}

// --- Subject View ---
function openSubject(id) { appState.currentSubjectId = id; const sub = db.subjects.find(s => s.id === id); if(sub) { appState.activeTab = sub.material[0]; appState.subFilter = null; renderSubjectView(); } }

function renderSubjectView() {
    appState.view = 'subject';
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
    
    // Create Tabs
    let tabs = sub.material.map(m => `<button class="tab-btn ${m === appState.activeTab ? 'active' : ''}" onclick="appState.activeTab='${m}'; appState.subFilter=null; renderSubjectView()">${t(m)}</button>`).join('');
    
    let content = "";

    // ⧈ START: Smart Lab Logic
    if(appState.activeTab === 'labs') {
        // Check if "questions" exist and are not empty
        const hasQuestions = sub.content.labs.questions && Object.keys(sub.content.labs.questions).length > 0;

        if (!hasQuestions) {
            // CASE 1: No Interactive Labs (e.g., Networks) -> Show files directly
            const files = Array.isArray(sub.content.labs) ? sub.content.labs : sub.content.labs.material;
            content = renderFileList(files);
        } else {
            // CASE 2: Has Interactive Labs (e.g., Programming) -> Show Split View
            if(!appState.subFilter) {
                content = `
                <div class="grid-center">
                    <div class="selection-card" onclick="appState.subFilter='material'; renderSubjectView()">
                        <i class="fas fa-book-reader card-icon"></i>
                        <h3>${t('labsMaterial')}</h3>
                    </div>
                    <div class="selection-card" onclick="appState.subFilter='questions'; renderSubjectView()">
                        <i class="fas fa-laptop-code card-icon"></i>
                        <h3>${t('labsQuestions')}</h3>
                    </div>
                </div>`;
            } else {
                content = appState.subFilter === 'material' ? renderFileList(sub.content.labs.material) : renderLabList(sub.content.labs.questions.labs_list);
            }
        }
    // ⧈ END: Smart Lab Logic

    } else if(appState.activeTab === 'summary' && !Array.isArray(sub.content.summary)) {
        if(!appState.subFilter) content = `<div class="grid-center"><div class="selection-card" onclick="appState.subFilter='ar'; renderSubjectView()"><i class="fas fa-language card-icon"></i><h3>${t('arSec')}</h3></div><div class="selection-card" onclick="appState.subFilter='en'; renderSubjectView()"><i class="fas fa-globe card-icon"></i><h3>${t('enSec')}</h3></div></div>`;
        else content = renderFileList(appState.subFilter === 'ar' ? sub.content.summary.ar : sub.content.summary.en);

    } else if(appState.activeTab === 'lecs' && !Array.isArray(sub.content.lecs)) {
        if(!appState.subFilter) content = `<div class="grid-center"><div class="selection-card" onclick="appState.subFilter='main'; renderSubjectView()"><i class="fas fa-chalkboard-teacher card-icon"></i><h3>${t('lecsMain')}</h3></div><div class="selection-card" onclick="appState.subFilter='solutions'; renderSubjectView()"><i class="fas fa-check-circle card-icon"></i><h3>${t('lecsSol')}</h3></div></div>`;
        else content = renderFileList(appState.subFilter === 'main' ? sub.content.lecs.main : sub.content.lecs.solutions);
    
    // ⧈ START: Smart Quiz Logic (Updated)
    } else if (appState.activeTab === 'quiz') { 
        if (sub.content.quiz && sub.content.quiz.isSplit) {
            // Case 1: Split Quizzes (Categorized)
            content = `<div class="dashboard-grid">
                ${sub.content.quiz.sections.map(sect => `
                    <div class="subject-card" onclick="startQuiz('${sect.id}', '${sect.type}')">
                        <div style="margin-bottom:10px; font-size:2rem; color:var(--accent);"><i class="fas ${sect.type === 'text' ? 'fa-pen-alt' : (sect.type === 'tf' ? 'fa-check-double' : 'fa-list-ul')}"></i></div>
                        <h3>${sect.title}</h3>
                        <p style="color:var(--text-secondary); font-size:0.9rem;">${sect.qCount} Questions</p>
                        <button class="btn-start-lab">${t('startQuiz')}</button>
                    </div>`).join('')}
            </div>`;
        } else if (Array.isArray(sub.content.quiz) && sub.content.quiz.length > 0 && sub.content.quiz[0].link) {
            // Case 2: PDF List (Electronics Style)
            // If the array items have a 'link' property, render as File List
            content = renderFileList(sub.content.quiz);
        } else {
            // Case 3: Single Interactive Quiz
            content = `<div style="text-align:center; padding:3rem;">
                <h2 style="margin-bottom:1rem; color:var(--white);">${t('quizReady')}</h2>
                <button class="btn-start-lab" style="max-width:200px;" onclick="startQuiz()">${t('startQuiz')}</button>
            </div>`; 
        }
    } 
    // ⧈ END: Smart Quiz Logic
    
    else {
        content = renderFileList(sub.content[appState.activeTab]);
    }

    container.innerHTML = `<button class="btn-back" onclick="${appState.subFilter ? 'appState.subFilter=null; renderSubjectView()' : 'renderDashboard()'}"><i class="fas fa-arrow-left"></i> ${t('back')}</button><div class="subject-header"><h1>${appState.lang === 'en' ? sub.name_en : sub.name_ar}</h1></div><div class="tabs-container">${tabs}</div><div class="file-list" style="margin-top:20px;">${content}</div>`;
    renderMath(); 
}

// --- Direct Download Helper ---
function convertDriveToDirectLink(link) {
    if (!link) return '#';
    if (link.includes('drive.google.com') && link.includes('/file/d/')) {
        const match = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
            return `https://drive.google.com/uc?export=download&id=${match[1]}`;
        }
    }
    return link;
}

function renderFileList(list) {
    if(!list || list.length === 0) return '<p style="text-align:center; color:var(--text-secondary);">Empty.</p>';
    return list.map(f => {
        const downloadLink = convertDriveToDirectLink(f.link);
        const previewLink = f.link.includes('view') ? f.link.replace('/view', '/preview') : f.link;
        
        // Define Icon Logic (Supports standard and custom types)
        let iconClass = 'fa-file-pdf'; // default
        if (f.type === 'PPT') iconClass = 'fa-file-powerpoint';
        else if (f.type === 'Book') iconClass = 'fa-book';
        else if (f.type === 'Solution') iconClass = 'fa-file-signature';
        else if (f.type === 'Sheet') iconClass = 'fa-file-lines';

        return `
        <div class="file-item">
            <div class="file-info">
                <h3><i class="fas ${iconClass}" style="color:${f.type === 'PPT' ? 'var(--ppt-color)' : 'var(--text-primary)'};"></i> ${f.title}</h3>
                ${f.note ? `<div class="warning-box" style="margin-top:5px; color:var(--warning); font-size:0.8rem;"><i class="fas fa-exclamation-triangle"></i> ${f.note}</div>` : ''}
            </div>
            <div class="file-actions">
                ${f.link !== '#' ? `<button class="btn-view" onclick="openPdf('${previewLink}')"><i class="fas fa-eye"></i></button>` : ''}
                ${f.link !== '#' ? `<a href="${downloadLink}" class="btn-download"><i class="fas fa-download"></i></a>` : ''}
            </div>
        </div>`
    }).join('');
}

function renderLabList(list) {
    if(!list) return '<p>No labs.</p>';
    return `<div class="dashboard-grid">${list.map(l => `<div class="subject-card" onclick="initLab(${l.id})"><div style="margin-bottom:10px; font-size:2rem; color:var(--accent);"><i class="fas fa-code"></i></div><h3>${l.title}</h3><p style="color:var(--text-secondary); font-size:0.9rem;">${l.qCount} Questions</p><button class="btn-start-lab">${t('startLab')}</button></div>`).join('')}</div>`;
}

// --- Lab & Validation ---
let labTimerInterval;
function initLab(id) {
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
    if (!sub || !sub.content.labs.questions['lab_'+id]) return;
    appState.lab = { active: true, id: id, questions: sub.content.labs.questions['lab_'+id], currentQIndex: 0, time: 0, userCode: "", surrendered: false };
    if(labTimerInterval) clearInterval(labTimerInterval);
    labTimerInterval = setInterval(() => { appState.lab.time++; const tEl = document.getElementById('timer'); if(tEl) tEl.innerText = formatTime(appState.lab.time); }, 1000);
    renderLabQuestion();
}
function renderLabQuestion() {
    appState.view = 'lab';
    const q = appState.lab.questions[appState.lab.currentQIndex];
    if(typeof appState.lab.userCode === 'undefined' || appState.lab.userCode === "") appState.lab.userCode = ""; 
    container.innerHTML = `
        <div class="lab-arena">
            <div class="lab-header"><h3>Lab ${appState.lab.id} - Q ${appState.lab.currentQIndex + 1} / ${appState.lab.questions.length}</h3><div class="timer-box" id="timer">${formatTime(appState.lab.time)}</div><button class="btn-back" style="margin:0;" onclick="exitLab()"><i class="fas fa-times"></i> Exit</button></div>
            <div class="lab-workspace" id="workspace">
                <div class="problem-pane">
                    <h4 style="color:var(--accent); margin-bottom:1rem;">Task:</h4><p style="line-height:1.6; font-size:1.1rem;">${q.prompt}</p>
                    <div style="margin-top:2rem;"><button class="btn-view" style="width:100%; justify-content:center;" onclick="showHint()" id="hint-btn">${t('showHint')}</button><div id="hint-box" style="display:none; margin-top:10px; background:rgba(0,0,0,0.2); padding:1rem; border-radius:8px; border:1px solid var(--border);"><strong style="color:var(--warning);">Hint:</strong> <br><span>${q.hint}</span></div></div>
                </div>
                <div class="editor-pane">
                    <textarea class="code-editor" id="code-input" spellcheck="false" placeholder="// Write Java code here...\n// class MUST be named 'Main'" oninput="appState.lab.userCode = this.value">${appState.lab.userCode}</textarea>
                    <div class="lab-controls"><button class="btn-surrender" onclick="surrender()"><i class="fas fa-flag"></i> ${t('surrender')}</button><button class="btn-run" onclick="runLabCode()"><i class="fas fa-play"></i> ${t('runCode')}</button></div>
                    <div class="console-output" id="console-out">// Output...</div>
                </div>
            </div>
            <div class="compare-container" id="compare-view">
                <div class="solution-view"><h4>Solution:</h4><pre>${q.solutionCode}</pre></div><div class="user-view"><h4>Your Code:</h4><pre id="static-user-code"></pre></div><div style="text-align:center; width:100%;"><button class="btn-run" style="width:auto; margin:0 auto;" onclick="nextLabQ()">${t('understood')} <i class="fas fa-arrow-right"></i></button></div>
            </div>
        </div>
        <div id="input-modal" class="modal-overlay"><div class="input-modal-content"><h3 style="color:var(--white); margin-bottom:0.5rem;">⌨️ Input Required</h3><p style="color:var(--text-secondary);">${t('inputPrompt')}</p><input type="text" id="custom-stdin" class="custom-input-field" placeholder="${t('inputPlaceholder')}"><button class="btn-run" onclick="resolveInput()" style="width:100%; justify-content:center;">Submit & Run</button></div></div>
        <div id="main-class-alert" class="modal-overlay"><div class="input-modal-content warning-modal"><h2 style="color:var(--warning); margin-bottom:1rem;">${t('mainClassAlertTitle')}</h2><p style="color:var(--text-primary); margin-bottom:1.5rem; line-height:1.5;">${t('mainClassAlertBody')}</p><button class="btn-confirm" onclick="document.getElementById('main-class-alert').style.display='none'">OK, I'll Fix it</button></div></div>
    `;
    renderMath(); // Render Math in Labs
}
function showHint() { document.getElementById('hint-box').style.display = 'block'; const btn = document.getElementById('hint-btn'); btn.innerHTML = t('hideHint'); btn.disabled = true; btn.style.opacity = "0.7"; }
let inputResolve = null;
function getInputFromUser() { return new Promise((resolve) => { document.getElementById('input-modal').style.display = 'flex'; setTimeout(() => document.getElementById('custom-stdin').focus(), 100); inputResolve = resolve; }); }
function resolveInput() { const val = document.getElementById('custom-stdin').value; document.getElementById('input-modal').style.display = 'none'; if(inputResolve) inputResolve(val); }
async function runLabCode() {
    const userCode = document.getElementById('code-input').value;
    const consoleOut = document.getElementById('console-out');
    const q = appState.lab.questions[appState.lab.currentQIndex];
    if (!userCode.match(/class\s+Main\b/)) { document.getElementById('main-class-alert').style.display = 'flex'; return; }
    let stdin = "";
    if (userCode.includes("Scanner") || userCode.includes("System.in")) { stdin = await getInputFromUser(); }
    consoleOut.innerHTML = `<span style="color:var(--accent);">⏳ ${t('solving')}</span>`;
    try {
        const response = await fetch('https://emkc.org/api/v2/piston/execute', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ language: "java", version: "15.0.2", files: [{ name: "Main.java", content: userCode }], stdin: stdin }) });
        const result = await response.json();
        if (result.run) {
            let output = result.run.output || "";
            if (result.run.stderr) { consoleOut.innerHTML = `<span style="color:var(--danger);">❌ Error:\n${result.run.stderr}</span>`; } 
            else {
                let isCorrect = false;
                if (q.validationKeywords && q.validationKeywords.length > 0) { const normOut = output.toLowerCase(); if (q.validationKeywords.every(k => normOut.includes(k.toLowerCase()))) isCorrect = true; } 
                else { consoleOut.innerHTML = `<span style="color:var(--warning);">⚠️ Executed (No Validation):</span>\n${output}`; return; }
                if (isCorrect) { consoleOut.innerHTML = `<span style="color:var(--success);">✅ ${t('correctMsg')}</span>\n${output}\n<span style="color:var(--accent); display:block; margin-top:10px;">${t('nextAuto')}</span>`; celebrateSuccess(); setTimeout(() => { if(appState.lab.active) nextLabQ(); }, 5000); } 
                else { consoleOut.innerHTML = `<span style="color:var(--warning);">⚠️ Output Mismatch. Check requirements.</span>\nYour Output:\n${output}`; }
            }
        }
    } catch (e) { consoleOut.innerHTML = `❌ Connection Error`; }
}
function celebrateSuccess() {
    for(let i=0; i<50; i++) {
        const p = document.createElement('div'); p.classList.add('particle');
        p.style.left = Math.random() * 100 + 'vw'; p.style.backgroundColor = ['#00A9FF', '#FF6F00', '#10b981', '#ffffff'][Math.floor(Math.random()*4)];
        p.style.width = Math.random() * 8 + 4 + 'px'; p.style.height = p.style.width; p.style.animationDuration = Math.random() * 2 + 1.5 + 's';
        document.body.appendChild(p); setTimeout(() => p.remove(), 3500);
    }
}
function surrender() { appState.lab.surrendered = true; document.getElementById('workspace').style.display = 'none'; document.getElementById('compare-view').style.display = 'flex'; document.getElementById('static-user-code').innerText = appState.lab.userCode || "// No code"; }
function nextLabQ() { if (appState.lab.currentQIndex < appState.lab.questions.length - 1) { appState.lab.currentQIndex++; appState.lab.userCode = ""; appState.lab.surrendered = false; renderLabQuestion(); } else { alert("🎉 Lab Completed!"); exitLab(); } }
function exitLab() { clearIntervals(); appState.lab.active = false; renderSubjectView(); }

// --- Enhanced Quiz System ---
let quizTimerInterval;
function startQuiz(sectionId, type = 'mcq') { 
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId); 
    let questions = [];

    // Select correct data source
    if (sectionId && sub.content.quiz && sub.content.quiz.isSplit) {
        questions = sub.content.quiz.data[sectionId];
    } else {
        questions = sub.content.quiz;
    }

    if(!questions || questions.length === 0) { alert("No questions available."); return; }
    
    appState.view = 'quiz'; 
    appState.quiz = { 
        active: true, 
        questions: questions, 
        currentQuestionIndex: 0, 
        time: 0, 
        userAnswers: {}, 
        flagged: new Set(),
        type: type, // Store quiz type
        selfCheckState: 'input' // State for writing Qs
    }; 
    
    if(typeof quizTimerInterval !== 'undefined') clearInterval(quizTimerInterval); 
    quizTimerInterval = setInterval(() => { 
        appState.quiz.time++; 
        const td = document.getElementById('timer-display'); 
        if(td) td.innerText = formatTime(appState.quiz.time); 
    }, 1000); 
    
    renderQuestion(0); 
}

function renderQuestion(index) { 
    appState.view = 'quiz'; 
    appState.quiz.currentQuestionIndex = index; 
    const q = appState.quiz.questions[index]; 
    const isFlagged = appState.quiz.flagged.has(index); 
    
    // DIFFERENT RENDER LOGIC BASED ON TYPE
    let contentBody = '';
    let navButtons = '';

    if (appState.quiz.type === 'mcq') {
        // --- MCQ Layout ---
        contentBody = `
            <h3 style="margin-bottom:1rem; color:var(--white); line-height:1.5;">${q.question}</h3>
            <div class="options-grid">
                ${q.options.map((opt, i) => `
                    <label class="option-label">
                        <input type="radio" name="q${q.id}" value="${i}" 
                            ${appState.quiz.userAnswers[index] === i ? 'checked' : ''} 
                            onchange="saveAnswer(${index}, ${i})"> 
                        <span style="margin-left:10px;">${opt}</span>
                    </label>
                `).join('')}
            </div>`;
            
        navButtons = `
            ${index > 0 ? `<button class="btn-view" onclick="renderQuestion(${index - 1})">${t('prev')}</button>` : '<div></div>'}
            ${index < appState.quiz.questions.length - 1 
                ? `<button class="btn-view" onclick="renderQuestion(${index + 1})">${t('next')}</button>` 
                : `<button class="btn-run" onclick="attemptSubmit()">${t('submit')}</button>`}
        `;

    } else if (appState.quiz.type === 'text') {
        // --- Writing / Self-Check Layout ---
        const savedAnswer = appState.quiz.userAnswers[index]?.text || "";
        const isChecked = appState.quiz.userAnswers[index]?.checked || false;
        
        if (!isChecked) {
            // State 1: Input
            contentBody = `
                <h3 style="margin-bottom:1rem; color:var(--white); line-height:1.5;">${q.question}</h3>
                <textarea id="text-answer" class="code-editor" style="height:150px; width:100%;" placeholder="${t('typeAnswer')}">${savedAnswer}</textarea>
                <div style="text-align:center; margin-top:20px;">
                    <button class="btn-run" style="width:auto; display:inline-flex;" onclick="showModelAnswer(${index})">${t('showAnswer')}</button>
                </div>
            `;
        } else {
            // State 2: Comparison
            contentBody = `
                <h3 style="margin-bottom:1rem; color:var(--white); line-height:1.5;">${q.question}</h3>
                <div class="self-check-area">
                    <p style="color:var(--text-secondary); margin-bottom:5px;">Your Answer:</p>
                    <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; margin-bottom:15px; white-space: pre-wrap;">${savedAnswer || "No answer typed."}</div>
                    
                    <p style="color:var(--success); margin-bottom:5px;">${t('modelAnswer')}</p>
                    <div class="model-answer-box">${q.model_answer}</div>
                    
                    <div class="action-buttons">
                        <button class="btn-wrong" onclick="markSelfCheck(${index}, false)">${t('markWrong')}</button>
                        <button class="btn-correct" onclick="markSelfCheck(${index}, true)">${t('markCorrect')}</button>
                    </div>
                </div>
            `;
        }
        navButtons = '';

    } else if (appState.quiz.type === 'tf') {
        // --- True/False Immediate Feedback Layout ---
        const userAnswer = appState.quiz.userAnswers[index]; // { val: boolean, checked: boolean }
        const isAnswered = userAnswer && userAnswer.checked;
        
        let feedbackHtml = '';
        if (isAnswered) {
            const isCorrect = userAnswer.isCorrect;
            feedbackHtml = `
                <div class="tf-feedback ${isCorrect ? 'success' : 'error'}" style="margin-top:20px; padding:15px; border-radius:8px; background:${isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border-left:4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                    <h4 style="color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:5px;">
                        ${isCorrect ? t('correctTitle') : t('markWrong')}
                    </h4>
                    <p style="color:var(--text-primary); line-height:1.6;">${q.explanation || 'No explanation available.'}</p>
                </div>
            `;
        }

        contentBody = `
            <h3 style="margin-bottom:1.5rem; color:var(--white); line-height:1.5;">${q.question}</h3>
            <div class="tf-options" style="display:flex; gap:20px; justify-content:center; margin-bottom:20px;">
                <button class="btn-tf ${isAnswered && userAnswer.val === true ? (q.answer === true ? 'correct-btn' : 'wrong-btn') : ''}" 
                        style="padding:15px 40px; font-size:1.2rem; border-radius:12px; border:2px solid var(--border); background:var(--card-bg); color:var(--text-primary); cursor:pointer; transition:0.3s; width:150px;"
                        onclick="handleTFAnswer(${index}, true)" ${isAnswered ? 'disabled' : ''}>
                    True
                </button>
                <button class="btn-tf ${isAnswered && userAnswer.val === false ? (q.answer === false ? 'correct-btn' : 'wrong-btn') : ''}" 
                        style="padding:15px 40px; font-size:1.2rem; border-radius:12px; border:2px solid var(--border); background:var(--card-bg); color:var(--text-primary); cursor:pointer; transition:0.3s; width:150px;"
                        onclick="handleTFAnswer(${index}, false)" ${isAnswered ? 'disabled' : ''}>
                    False
                </button>
            </div>
            ${feedbackHtml}
        `;
        
        // Navigation for TF (Hide Submit until end, show Next only after answer)
        navButtons = `
            ${index > 0 ? `<button class="btn-view" onclick="renderQuestion(${index - 1})">${t('prev')}</button>` : '<div></div>'}
            ${index < appState.quiz.questions.length - 1 
                ? (isAnswered ? `<button class="btn-run" onclick="renderQuestion(${index + 1})">${t('next')}</button>` : '') 
                : (isAnswered ? `<button class="btn-run" onclick="finalizeQuiz()">${t('submit')}</button>` : '')}
        `;
    }

    container.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-top-bar">
                <span style="color:var(--white);">${t('qNum')} ${index + 1} / ${appState.quiz.questions.length}</span>
                <div style="display:flex; align-items:center; gap:10px;">
                    <span id="timer-display" class="timer-box">${formatTime(appState.quiz.time)}</span>
                    <button class="btn-view" style="padding:5px 10px; font-size:0.8rem;" onclick="exitQuiz()">
                        <i class="fas fa-times"></i> ${t('exit')}
                    </button>
                </div>
            </div>
            
            ${appState.quiz.type === 'mcq' ? `
            <button class="btn-view ${isFlagged ? 'flag-active' : ''}" onclick="toggleFlag(${index})" style="margin-bottom:1rem;">
                <i class="fas fa-flag"></i> ${t('flag')}
            </button>` : ''}
            
            <div class="file-item" style="display:block; cursor:default; border:none; padding:0; background:transparent;">
                ${contentBody}
            </div>
            
            <div class="quiz-footer" style="display:flex; justify-content:space-between; margin-top:20px;">
                ${navButtons}
            </div>
        </div>
        <div id="alert-modal" class="modal-overlay"></div>
    `; 
    renderMath(); // TRIGGER MATH RENDER
}

// --- Logic for Text/Self-Check Quizzes ---
function showModelAnswer(index) {
    const userText = document.getElementById('text-answer').value;
    appState.quiz.userAnswers[index] = { text: userText, checked: true };
    renderQuestion(index); // Re-render in "Comparison" state
}

function markSelfCheck(index, isCorrect) {
    appState.quiz.userAnswers[index].isCorrect = isCorrect;
    if (isCorrect) celebrateSuccess(); // Encouragement only on success
    
    // Auto move to next question or finish
    if (index < appState.quiz.questions.length - 1) {
        renderQuestion(index + 1);
    } else {
        // Finish Quiz
        appState.quiz.active = false;
        renderQuizResult();
    }
}

// --- Logic for True/False Quizzes ---
function handleTFAnswer(index, val) {
    const q = appState.quiz.questions[index];
    const isCorrect = (val === q.answer);
    appState.quiz.userAnswers[index] = { val: val, checked: true, isCorrect: isCorrect };
    if(isCorrect) celebrateSuccess();
    renderQuestion(index);
}

// --- Logic for MCQ Quizzes ---
function toggleFlag(index) { 
    if(appState.quiz.flagged.has(index)) appState.quiz.flagged.delete(index); else appState.quiz.flagged.add(index); 
    renderQuestion(index); 
}
function saveAnswer(qIndex, ansIndex) { appState.quiz.userAnswers[qIndex] = ansIndex; }
function attemptSubmit() { 
    const flags = Array.from(appState.quiz.flagged).map(i => i + 1); 
    if (flags.length > 0) showFlagAlert(flags); else finalizeQuiz(); 
}
function showFlagAlert(flags) { 
    const modal = document.getElementById('alert-modal'); 
    modal.innerHTML = `
        <div class="input-modal-content warning-modal">
            <h2 style="color:var(--warning); margin-bottom:1rem;">${t('flagAlertTitle')}</h2>
            <p style="color:var(--text-primary); margin-bottom:1.5rem;">${t('flagAlertMsg')} <b>${flags.join(', ')}</b></p>
            <div style="display:flex; gap:10px; justify-content:center;">
                <button class="btn-view" onclick="document.getElementById('alert-modal').style.display='none'">${t('flagAlertBack')}</button>
                <button class="btn-run" onclick="finalizeQuiz()">${t('flagAlertAction')}</button>
            </div>
        </div>`; 
    modal.style.display = 'flex'; 
}
function finalizeQuiz() { 
    if(typeof quizTimerInterval !== 'undefined') clearInterval(quizTimerInterval); 
    appState.quiz.active = false; 
    appState.view = 'quizResult'; 
    renderQuizResult(); 
}

function renderQuizResult() { 
    const questions = appState.quiz.questions; 
    let score = 0; 
    let reportHtml = ''; 
    
    questions.forEach((q, index) => { 
        let isCorrect = false;
        let userAnswerText = "";
        
        if (appState.quiz.type === 'mcq') {
            isCorrect = appState.quiz.userAnswers[index] === q.answer;
            userAnswerText = q.options[appState.quiz.userAnswers[index]] || 'None';
        } else if (appState.quiz.type === 'tf') {
            isCorrect = appState.quiz.userAnswers[index]?.isCorrect === true;
            userAnswerText = appState.quiz.userAnswers[index]?.val ? "True" : "False";
        } else {
            isCorrect = appState.quiz.userAnswers[index]?.isCorrect === true;
            userAnswerText = "Self-Checked";
        }

        if(isCorrect) score++; 
        
        // Build report
        if(!isCorrect && appState.quiz.type === 'mcq') { 
            reportHtml += `
                <div class="file-item" style="display:block; border-color:var(--danger); margin-bottom:1rem;">
                    <h4 style="margin-bottom:0.5rem; color:var(--text-primary);">Q${index+1}: ${q.question}</h4>
                    <p style="color:var(--danger); margin-bottom:0.3rem;">Your Answer: ${userAnswerText}</p>
                    <p style="color:var(--success); margin-bottom:0.5rem;">Correct Answer: ${q.options[q.answer]}</p>
                    <small style="color:var(--text-secondary); display:block; background:rgba(255,255,255,0.05); padding:10px; border-radius:5px;">
                        <i class="fas fa-info-circle"></i> ${t('reason')}: ${appState.lang === 'ar' ? (q.explanation_ar||q.explanation_en) : q.explanation_en}
                    </small>
                </div>`; 
        } else if (!isCorrect && appState.quiz.type === 'tf') {
            reportHtml += `
                <div class="file-item" style="display:block; border-color:var(--danger); margin-bottom:1rem;">
                    <h4 style="margin-bottom:0.5rem; color:var(--text-primary);">Q${index+1}: ${q.question}</h4>
                    <p style="color:var(--danger); margin-bottom:0.3rem;">Result: Wrong ❌</p>
                    <small style="color:var(--text-secondary); display:block; background:rgba(255,255,255,0.05); padding:10px; border-radius:5px;">
                        <i class="fas fa-info-circle"></i> ${t('reason')}: ${q.explanation || 'No explanation'}
                    </small>
                </div>`;
        } else if (appState.quiz.type === 'text') {
             reportHtml += `
                <div class="file-item" style="display:block; border-color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:1rem;">
                    <h4 style="margin-bottom:0.5rem; color:var(--text-primary);">Q${index+1}: ${q.question}</h4>
                    <p style="color:${isCorrect ? 'var(--success)' : 'var(--danger)'};">Result: ${isCorrect ? 'Correct ✅' : 'Wrong ❌'}</p>
                </div>`;
        }
    }); 
    
    const percentage = Math.round((score / questions.length) * 100); 
    container.innerHTML = `
        <div class="quiz-container" style="text-align:center;">
            <h2 style="color:var(--white); margin-bottom:1rem;">${t('resultTitle')}</h2>
            <div style="font-size:4rem; color:${percentage >= 50 ? 'var(--success)' : 'var(--danger)'}; margin:1rem 0; font-weight:bold;">${percentage}%</div>
            <p style="color:var(--text-secondary);">${t('timeTaken')}: ${formatTime(appState.quiz.time)}</p>
            <button class="btn-back" onclick="exitQuiz()" style="margin-top:2rem;">${t('backCourse')}</button>
            <div style="text-align:left; margin-top:3rem;">${reportHtml || '<p style="text-align:center; color:var(--success);">Perfect Score! 🎉</p>'}</div>
        </div>`; 
    renderMath(); // Render Math in Results
}
function exitQuiz() { renderSubjectView(); }

// --- Enhanced Preview Modal ---
function openPdf(link) { 
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="large-modal-content">
            <div class="large-modal-header">
                <h3 style="color:var(--text-primary); margin:0; display:flex; align-items:center; gap:10px;">
                    <i class="fas fa-file-pdf" style="color:var(--accent);"></i> ${t('preview')}
                </h3>
                <button class="btn-close-modal" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <iframe src="${link}" style="flex:1; border:none; width:100%; height:100%; background:white;"></iframe>
        </div>`;
    document.body.appendChild(modal);
}

function formatTime(s) { return new Date(s * 1000).toISOString().substr(14, 5); }
function renderAdminLogin() { container.innerHTML = `<div class="input-modal-content" style="margin:5rem auto;"><h2 style="color:white; margin-bottom:1rem;">Admin</h2><input type="password" class="custom-input-field" placeholder="Password"><button class="btn-run" onclick="renderHome()">Login</button></div>`; }
