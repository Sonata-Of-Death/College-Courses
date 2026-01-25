// DOM Elements
const container = document.getElementById('app-container');
const themeBtn = document.getElementById('theme-toggle');
const langBtn = document.querySelector('.lang-switch');

// Global State
let appState = {
    view: 'home', 
    major: null,
    year: null,
    term: null,
    currentSubjectId: null,
    activeTab: null,
    subFilter: null, 
    lang: 'en',
    quiz: { active: false, questions: [], currentQuestionIndex: 0, time: 0, userAnswers: {}, flagged: new Set() },
    lab: { active: false, id: null, questions: [], currentQIndex: 0, time: 0, userCode: "", surrendered: false }
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
        flagAlertTitle: "Review Required", flagAlertMsg: "You have flagged questions: ", flagAlertAction: "Submit Anyway", flagAlertBack: "Return to Quiz",
        arSec: "Arabic Section", enSec: "English Section", backToSelection: "Back to Selection",
        lecsMain: "Lectures", lecsSol: "Solutions",
        labsMaterial: "Material", labsQuestions: "Interactive Questions",
        startLab: "Start Lab", runCode: "Run Code", surrender: "Show Solution", nextQ: "Next Question", understood: "I Understood",
        solving: "Compiling..."
    },
    ar: {
        welcomeTitle: "مرحباً بك في", welcomeSpan: "قاعدة معرفة حاسبات DNU", welcomeSub: "", selectTrack: "اختر المسار الأكاديمي للمتابعة", back: "رجوع", selectYear: "اختر السنة الدراسية", selectTerm: "اختر الفصل الدراسي", year: "السنة", term1: "الترم الأول", term2: "الترم الثاني", t1Range: "سبتمبر - يناير", t2Range: "فبراير - يونيو", clickAccess: "اضغط للوصول للمحتوى", noSubjects: "لا توجد مواد متاحة.", adminAccess: "دخول المشرفين", login: "دخول", accessDenied: "بيانات خاطئة",
        lecs: "محاضرات", summary: "ملخصات", quiz: "اختبار", labs: "تجارب معملية", core_material: "المحتوى الأساسي", chapters: "الفصول", labs_interactive: "معمل تفاعلي",
        view: "عرض", download: "تحميل", startQuiz: "بدء الاختبار", quizReady: "جاهز للتحدي؟",
        qNum: "سؤال", flag: "تحديد للمراجعة", prev: "السابق", next: "التالي", submit: "تسليم",
        resultTitle: "تم إنهاء الاختبار!", timeTaken: "الوقت المستغرق", backCourse: "عودة للمادة",
        yourAns: "إجابتك", correctAns: "الإجابة الصحيحة", reason: "السبب",
        flagAlertTitle: "تنبيه مراجعة", flagAlertMsg: "لديك أسئلة محددة للمراجعة أرقام: ", flagAlertAction: "تسليم على أي حال", flagAlertBack: "عودة للاختبار",
        arSec: "القسم العربي", enSec: "القسم الإنجليزي", backToSelection: "العودة للاختيار",
        lecsMain: "شرح المحاضرات", lecsSol: "حلول الأسئلة",
        labsMaterial: "شرح اللابات", labsQuestions: "أسئلة تفاعلية",
        startLab: "بدء اللاب", runCode: "تشغيل الكود", surrender: "إظهار الحل", nextQ: "السؤال التالي", understood: "فهمت",
        solving: "جاري المعالجة..."
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
        appState.lang = appState.lang === 'en' ? 'ar' : 'en';
        langBtn.textContent = appState.lang.toUpperCase();
        document.body.dir = appState.lang === 'ar' ? 'rtl' : 'ltr';
        renderCurrentView(); 
    });

    const logo = document.getElementById('app-logo');
    if(logo) {
        logo.addEventListener('click', () => {
            if(typeof quizTimerInterval !== 'undefined' && quizTimerInterval) clearInterval(quizTimerInterval);
            if(typeof labTimerInterval !== 'undefined' && labTimerInterval) clearInterval(labTimerInterval);
            appState.quiz.active = false;
            appState.lab.active = false;
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
        case 'lab':
            if (appState.lab.active) renderLabQuestion();
            else renderCurrentView('subject');
            break;
        case 'quizResult': renderQuizResult(); break;
        case 'admin': renderAdminLogin(); break;
        default: renderHome();
    }
}

// --- Standard Views ---
function renderHome() { appState.view = 'home'; container.innerHTML = `<section class="hero"><h1>${t('welcomeTitle')} <span class="highlight">${t('welcomeSpan')}</span> ${t('welcomeSub')}</h1><p>${t('selectTrack')}</p><div class="grid-center"><div class="selection-card" onclick="selectMajor('ai')"><i class="fas fa-brain card-icon"></i><h2>${appState.lang === 'en' ? db.majors.ai.name_en : db.majors.ai.name_ar}</h2></div><div class="selection-card" onclick="selectMajor('cyber')"><i class="fas fa-shield-halved card-icon"></i><h2>${appState.lang === 'en' ? db.majors.cyber.name_en : db.majors.cyber.name_ar}</h2></div></div></section>`; }
function selectMajor(major) { appState.major = major; renderYearSelect(); }
function renderYearSelect() { appState.view = 'year'; container.innerHTML = `<button class="btn-back" onclick="renderHome()"><i class="fas fa-arrow-left"></i> ${t('back')}</button><h2 class="section-title">${t('selectYear')}</h2><div class="grid-center">${[1, 2, 3, 4].map(y => `<div class="selection-card" onclick="selectYear(${y})"><div style="font-size: 2.5rem; font-weight: bold; color: var(--accent); margin-bottom: 1rem;">0${y}</div><h3>${t('year')} ${y}</h3></div>`).join('')}</div>`; }
function selectYear(year) { appState.year = year; renderTermSelect(); }
function renderTermSelect() { appState.view = 'term'; container.innerHTML = `<button class="btn-back" onclick="renderYearSelect()"><i class="fas fa-arrow-left"></i> ${t('back')}</button><h2 class="section-title">${t('selectTerm')}</h2><div class="grid-center"><div class="selection-card" onclick="selectTerm(1)"><div style="font-size: 4rem; color: var(--accent); margin-bottom: 0.5rem;"><i class="fas fa-calendar-check"></i></div><h3>${t('term1')}</h3><div style="margin-top: 10px; color: var(--text-secondary); background: rgba(255,255,255,0.05); padding: 5px; border-radius: 5px;">${t('t1Range')}</div></div><div class="selection-card" onclick="selectTerm(2)"><div style="font-size: 4rem; color: var(--accent); margin-bottom: 0.5rem;"><i class="fas fa-calendar-check"></i></div><h3>${t('term2')}</h3><div style="margin-top: 10px; color: var(--text-secondary); background: rgba(255,255,255,0.05); padding: 5px; border-radius: 5px;">${t('t2Range')}</div></div></div>`; }
function selectTerm(term) { appState.term = term; renderDashboard(); }
function renderDashboard() { appState.view = 'dashboard'; const filteredSubjects = db.subjects.filter(sub => (sub.type === 'shared' || sub.type === appState.major) && sub.year === appState.year && sub.term === appState.term); const majorName = appState.lang === 'en' ? db.majors[appState.major].name_en : db.majors[appState.major].name_ar; container.innerHTML = `<button class="btn-back" onclick="renderTermSelect()"><i class="fas fa-arrow-left"></i> ${t('back')}</button><h2 class="section-title">${majorName} - ${t('year')} ${appState.year} / ${t('term'+appState.term)}</h2><div class="dashboard-grid">${filteredSubjects.map(sub => `<div class="subject-card" onclick="openSubject('${sub.id}')"><div class="subject-title">${appState.lang === 'en' ? sub.name_en : sub.name_ar}</div><small style="color:var(--text-secondary)">${t('clickAccess')}</small></div>`).join('')}</div>`; }
function openSubject(id) { appState.currentSubjectId = id; appState.subFilter = null; const sub = db.subjects.find(s => s.id === id); if(sub) renderSubjectView(sub, sub.material[0]); }

function renderSubjectView(subject, activeTab) {
    appState.view = 'subject'; appState.activeTab = activeTab; const subName = appState.lang === 'en' ? subject.name_en : subject.name_ar; const tabsHtml = subject.material.map(mat => `<button class="tab-btn ${mat === activeTab ? 'active' : ''}" onclick="switchTab('${subject.id}', '${mat}')">${t(mat) || mat}</button>`).join(''); container.innerHTML = `<button class="btn-back" onclick="renderDashboard()"><i class="fas fa-arrow-left"></i> ${t('back')}</button><div class="subject-header"><h1>${subName}</h1></div><div class="tabs-container">${tabsHtml}</div><div id="tab-content" class="content-area">${getTabContent(subject, activeTab)}</div><div id="app-modal" class="modal-overlay"></div>`;
}
function switchTab(id, tab) { appState.subFilter = null; renderSubjectViewWithId(id, tab); }
function renderSubjectViewWithId(id, tab) { const sub = db.subjects.find(s => s.id === id); renderSubjectView(sub, tab); }
function setSubFilter(filter) { appState.subFilter = filter; const sub = db.subjects.find(s => s.id === appState.currentSubjectId); renderSubjectView(sub, appState.activeTab); }

function getTabContent(subject, type) {
    if (!subject.content || !subject.content[type]) return `<p style="text-align:center;">Empty.</p>`;
    // Split Summaries
    if (type === 'summary' && !Array.isArray(subject.content.summary)) {
        if (appState.subFilter === null) return `<div class="grid-center" style="margin-top:0;"><div class="selection-card" onclick="setSubFilter('ar')" style="width:200px; padding:1.5rem;"><i class="fas fa-book-open card-icon"></i><h3>${t('arSec')}</h3></div><div class="selection-card" onclick="setSubFilter('en')" style="width:200px; padding:1.5rem;"><i class="fas fa-book-open card-icon"></i><h3>${t('enSec')}</h3></div></div>`;
        const files = appState.subFilter === 'ar' ? (subject.content.summary.ar || []) : (subject.content.summary.en || []);
        return `<button class="btn-back" style="background:var(--accent); color:white; border:none;" onclick="setSubFilter(null)"><i class="fas fa-arrow-up"></i> ${t('backToSelection')}</button><h3 style="color:var(--text-primary); margin: 1rem 0; padding-bottom: 5px;">${appState.subFilter === 'ar' ? t('arSec') : t('enSec')}</h3><div class="file-list">${renderFileList(files)}</div>`;
    }
    // Split Lectures
    if (type === 'lecs' && !Array.isArray(subject.content.lecs)) {
        if (appState.subFilter === null) return `<div class="grid-center" style="margin-top:0;"><div class="selection-card" onclick="setSubFilter('main')" style="width:200px; padding:1.5rem;"><i class="fas fa-chalkboard-teacher card-icon"></i><h3>${t('lecsMain')}</h3></div><div class="selection-card" onclick="setSubFilter('solutions')" style="width:200px; padding:1.5rem;"><i class="fas fa-check-circle card-icon"></i><h3>${t('lecsSol')}</h3></div></div>`;
        const files = appState.subFilter === 'main' ? (subject.content.lecs.main || []) : (subject.content.lecs.solutions || []);
        return `<button class="btn-back" style="background:var(--accent); color:white; border:none;" onclick="setSubFilter(null)"><i class="fas fa-arrow-up"></i> ${t('backToSelection')}</button><h3 style="color:var(--text-primary); margin: 1rem 0; padding-bottom: 5px;">${appState.subFilter === 'main' ? t('lecsMain') : t('lecsSol')}</h3><div class="file-list">${renderFileList(files)}</div>`;
    }
    // Split Labs
    if (type === 'labs' && !Array.isArray(subject.content.labs)) {
        if (appState.subFilter === null) return `<div class="grid-center" style="margin-top:0;"><div class="selection-card" onclick="setSubFilter('material')" style="width:200px; padding:1.5rem;"><i class="fas fa-laptop-code card-icon"></i><h3>${t('labsMaterial')}</h3></div><div class="selection-card" onclick="setSubFilter('questions')" style="width:200px; padding:1.5rem;"><i class="fas fa-question-circle card-icon"></i><h3>${t('labsQuestions')}</h3></div></div>`;
        if (appState.subFilter === 'material') {
            return `<button class="btn-back" style="background:var(--accent); color:white; border:none;" onclick="setSubFilter(null)"><i class="fas fa-arrow-up"></i> ${t('backToSelection')}</button><h3 style="color:var(--text-primary); margin: 1rem 0; padding-bottom: 5px;">${t('labsMaterial')}</h3><div class="file-list">${renderFileList(subject.content.labs.material || [])}</div>`;
        }
        // Interactive Labs Selection
        const labList = subject.content.labs.questions.labs_list || [];
        if (labList.length === 0) return `<button class="btn-back" style="background:var(--accent); color:white; border:none;" onclick="setSubFilter(null)"><i class="fas fa-arrow-up"></i> ${t('backToSelection')}</button><p style="text-align:center; margin-top:2rem;">Interactive Questions Coming Soon...</p>`;
        
        return `<button class="btn-back" style="background:var(--accent); color:white; border:none;" onclick="setSubFilter(null)"><i class="fas fa-arrow-up"></i> ${t('backToSelection')}</button><h3 style="color:var(--text-primary); margin: 1rem 0; padding-bottom: 5px;">${t('labsQuestions')}</h3>
        <div class="dashboard-grid">${labList.map(l => `<div class="subject-card" onclick="startLab(${l.id})"><div class="subject-title">${l.title}</div><small style="color:var(--text-secondary)">${l.qCount} Questions</small><button class="btn-start-lab">${t('startLab')}</button></div>`).join('')}</div>`;
    }
    // Standard
    if (['lecs', 'summary', 'core_material', 'chapters', 'labs_interactive', 'labs'].includes(type)) return `<div class="file-list">${renderFileList(subject.content[type])}</div>`;
    if (type === 'quiz') return `<div style="text-align:center;"><h2 style="color:var(--white); margin-bottom:1rem;">${t('quizReady')}</h2><button class="login-btn" style="max-width:200px;" onclick="startQuiz()">${t('startQuiz')}</button></div>`;
    return `<p>Coming Soon.</p>`;
}

function renderFileList(files) {
    if (!files || files.length === 0) return '<p style="text-align:center; color:var(--text-secondary);">No files available.</p>';
    return files.map(file => {
        let downloadLink = file.link;
        let iconClass = 'fa-file-pdf';
        let iconStyle = 'color:var(--text-primary)';
        let viewButton = `<button class="btn-view" onclick="openPdf('${file.link}')"><i class="fas fa-eye"></i> ${t('view')}</button>`;
        if (file.link === "#") { downloadLink = "#"; viewButton = ""; } 
        const isPPT = file.type === 'PPT' || (file.link && file.link.includes('presentation'));
        const idMatch = file.link && file.link.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if(idMatch && idMatch[1]) {
            if (isPPT) { downloadLink = `https://docs.google.com/presentation/d/${idMatch[1]}/export/pptx`; iconClass = 'fa-file-powerpoint'; iconStyle = 'color:var(--ppt-color)'; } 
            else { downloadLink = `https://drive.google.com/uc?export=download&id=${idMatch[1]}`; }
        }
        return `<div class="file-item"><div class="file-info"><h3><i class="fas ${iconClass}" style="${iconStyle}"></i> ${file.title}</h3><span class="file-type">${file.type}</span>${file.note ? `<div class="warning-box"><i class="fas fa-exclamation-triangle"></i><span dir="auto">${file.note}</span></div>` : ''}</div><div class="file-actions">${viewButton}${file.link !== "#" ? `<a href="${downloadLink}" class="btn-download"><i class="fas fa-download"></i> ${t('download')}</a>` : ''}</div></div>`;
    }).join('');
}

// --- Interactive Lab Logic (REAL COMPILER via API) ---
let labTimerInterval = null;

function startLab(labId) {
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
    if (!sub || !sub.content.labs.questions['lab_'+labId]) return;
    appState.view = 'lab';
    appState.lab = {
        active: true,
        id: labId,
        questions: sub.content.labs.questions['lab_'+labId],
        currentQIndex: 0,
        time: 0,
        userCode: "",
        surrendered: false
    };
    if (labTimerInterval) clearInterval(labTimerInterval);
    labTimerInterval = setInterval(() => {
        appState.lab.time++;
        const td = document.getElementById('lab-timer');
        if(td) td.innerText = formatTime(appState.lab.time);
    }, 1000);
    renderLabQuestion();
}

function renderLabQuestion() {
    const q = appState.lab.questions[appState.lab.currentQIndex];
    const total = appState.lab.questions.length;
    if (!appState.lab.userCode) appState.lab.userCode = `public class Main {
    public static void main(String[] args) {
        // Write your code here
        
    }
}`;

    container.innerHTML = `
        <div class="lab-arena">
            <div class="lab-header">
                <h3 style="color:var(--white);">Lab ${appState.lab.id} - Q${appState.lab.currentQIndex + 1}/${total}</h3>
                <div id="lab-timer" class="timer-box">${formatTime(appState.lab.time)}</div>
                <button class="btn-back" style="margin:0;" onclick="exitLab()"><i class="fas fa-times"></i> Exit</button>
            </div>
            
            <div class="lab-workspace" id="workspace">
                <div class="problem-pane">
                    <h4 style="color:var(--accent); margin-bottom:1rem;">Task:</h4>
                    <p style="color:var(--text-primary); line-height:1.6; font-size:1.1rem;">${q.prompt}</p>
                    <div style="margin-top:2rem; background:rgba(0,0,0,0.2); padding:1rem; border-radius:5px;">
                        <strong style="color:var(--text-secondary);">Hint:</strong> <br>
                        <span style="color:var(--text-secondary);">${q.hint}</span>
                    </div>
                </div>
                
                <div class="editor-pane">
                    <div class="info-note">⚠️ Important: Your class must be named <b>Main</b> (e.g., public class Main { ... })</div>
                    <textarea class="code-editor" id="code-input" spellcheck="false" oninput="appState.lab.userCode = this.value">${appState.lab.userCode}</textarea>
                    <div class="lab-controls">
                        <button class="btn-surrender" onclick="surrender()"><i class="fas fa-flag"></i> ${t('surrender')}</button>
                        <button class="btn-run" onclick="runLabCode()"><i class="fas fa-play"></i> ${t('runCode')}</button>
                    </div>
                    <div class="console-output" id="console-out">// Output logs...</div>
                </div>
            </div>
            
            <div class="compare-container" id="compare-view">
                <div class="solution-view">
                    <h4 style="color:var(--success); margin-bottom:10px;">Solution Model:</h4>
                    <pre>${q.solutionCode}</pre>
                </div>
                <div class="user-view">
                    <h4 style="color:var(--danger); margin-bottom:10px;">Your Attempt:</h4>
                    <pre id="static-user-code"></pre>
                </div>
                <div style="position:absolute; bottom:20px; right:20px;">
                    <button class="btn-run" style="background:var(--accent);" onclick="understood()">${t('understood')} <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    `;
}

async function runLabCode() {
    const userCode = document.getElementById('code-input').value;
    const consoleOut = document.getElementById('console-out');
    
    // 1. Display loading message
    consoleOut.innerHTML = `<span style="color:yellow;">⏳ Compiling & Running via Piston API...</span>`;
    
    // 2. Prepare data for server
    const data = {
        language: "java",
        version: "15.0.2",
        files: [
            {
                name: "Main.java",
                content: userCode
            }
        ]
    };

    try {
        // 3. Call Piston API
        const response = await fetch('https://emkc.org/api/v2/piston/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        // 4. Handle result
        if (result.run && result.run.output) {
            let output = result.run.output;
            
            if (result.run.stderr) {
                consoleOut.innerHTML = `<span style="color:#f87171;">❌ Error:\n${result.run.stderr}</span>`;
            } else {
                consoleOut.innerHTML = `<span style="color:#4ade80;">✅ Output:\n${output}</span>`;
            }
        } else {
            consoleOut.innerHTML = `<span style="color:#f87171;">⚠️ Connection Error or Unknown Response.</span>`;
        }

    } catch (error) {
        consoleOut.innerHTML = `<span style="color:#f87171;">❌ API Error: ${error.message}</span>`;
    }
}

function surrender() {
    appState.lab.surrendered = true;
    document.getElementById('workspace').style.display = 'none';
    const compareView = document.getElementById('compare-view');
    compareView.style.display = 'flex';
    document.getElementById('static-user-code').innerText = appState.lab.userCode;
}

function understood() {
    nextLabQ();
}

function nextLabQ() {
    if (appState.lab.currentQIndex < appState.lab.questions.length - 1) {
        appState.lab.currentQIndex++;
        appState.lab.userCode = ""; 
        appState.lab.surrendered = false;
        renderLabQuestion();
    } else {
        alert("Lab Completed!");
        exitLab();
    }
}

function exitLab() {
    clearInterval(labTimerInterval);
    appState.lab.active = false;
    renderCurrentView('subject');
}

// --- Quiz Logic (Standard) ---
function startQuiz() { const sub = db.subjects.find(s => s.id === appState.currentSubjectId); if(!sub.content.quiz) return; appState.view = 'quiz'; appState.quiz = { active: true, questions: sub.content.quiz, currentQuestionIndex: 0, time: 0, userAnswers: {}, flagged: new Set() }; if(quizTimerInterval) clearInterval(quizTimerInterval); quizTimerInterval = setInterval(() => { appState.quiz.time++; const td = document.getElementById('timer-display'); if(td) td.innerText = formatTime(appState.quiz.time); }, 1000); renderQuestion(0); }
function renderQuestion(index) { appState.view = 'quiz'; appState.quiz.currentQuestionIndex = index; const q = appState.quiz.questions[index]; const isFlagged = appState.quiz.flagged.has(index); container.innerHTML = `<div class="quiz-container"><div class="quiz-top-bar"><span style="color:var(--white);">${t('qNum')} ${index + 1} / ${appState.quiz.questions.length}</span><span id="timer-display" class="timer-box">${formatTime(appState.quiz.time)}</span></div><button class="btn-flag ${isFlagged ? 'active' : ''}" onclick="toggleFlag(${index})"><i class="fas fa-flag"></i> ${t('flag')}</button><div class="question-box force-ltr"><div class="question-text" style="color:var(--white);">${q.question}</div><div class="options-grid">${q.options.map((opt, i) => `<label class="option-label"><input type="radio" name="q${q.id}" class="option-input" value="${i}" ${appState.quiz.userAnswers[index] === i ? 'checked' : ''} onchange="saveAnswer(${index}, ${i})"> ${opt}</label>`).join('')}</div></div><div class="quiz-footer">${index > 0 ? `<button class="btn-nav btn-prev" onclick="renderQuestion(${index - 1})">${t('prev')}</button>` : '<div></div>'}${index < appState.quiz.questions.length - 1 ? `<button class="btn-nav btn-next" onclick="renderQuestion(${index + 1})">${t('next')}</button>` : `<button class="btn-nav btn-submit" onclick="attemptSubmit()">${t('submit')}</button>`}</div></div><div id="alert-modal" class="modal-overlay"></div>`; }
function toggleFlag(index) { if(appState.quiz.flagged.has(index)) appState.quiz.flagged.delete(index); else appState.quiz.flagged.add(index); renderQuestion(index); }
function saveAnswer(qIndex, ansIndex) { appState.quiz.userAnswers[qIndex] = ansIndex; }
function attemptSubmit() { const flags = Array.from(appState.quiz.flagged).map(i => i + 1); if (flags.length > 0) showFlagAlert(flags); else finalizeQuiz(); }
function showFlagAlert(flags) { const modal = document.getElementById('alert-modal'); if(!modal) return; modal.innerHTML = `<div class="alert-content"><h2 style="color:var(--warning); margin-bottom:1rem;">${t('flagAlertTitle')}</h2><p style="color:var(--text-primary); margin-bottom:1rem;">${t('flagAlertMsg')} <br><strong style="font-size:1.2rem;">${flags.join(', ')}</strong></p><div style="display:flex; justify-content:center; gap:10px;"><button class="btn-cancel" onclick="closeFlagAlert()">${t('flagAlertBack')}</button><button class="btn-confirm" onclick="forceSubmit()">${t('flagAlertAction')}</button></div></div>`; modal.style.display = 'flex'; }
function closeFlagAlert() { const modal = document.getElementById('alert-modal'); if(modal) { modal.style.display = 'none'; modal.innerHTML = ''; } }
function forceSubmit() { closeFlagAlert(); finalizeQuiz(); }
function finalizeQuiz() { clearInterval(quizTimerInterval); appState.quiz.active = false; appState.view = 'quizResult'; renderQuizResult(); }
function renderQuizResult() { const questions = appState.quiz.questions; let score = 0; let reportHtml = ''; questions.forEach((q, index) => { const isCorrect = appState.quiz.userAnswers[index] === q.answer; if(isCorrect) score++; if(!isCorrect) { const explanation = appState.lang === 'ar' ? (q.explanation_ar || q.explanation_en) : q.explanation_en; reportHtml += `<div class="result-card force-ltr"><h4 style="color:var(--white); margin-bottom:5px;">Q${index+1}: ${q.question}</h4><p style="color:#f87171;">${t('yourAns')}: ${q.options[appState.quiz.userAnswers[index]] || 'Not Answered'}</p><div class="correct-answer-box"><strong>${t('correctAns')}:</strong> ${q.options[q.answer]}<br><div class="result-explanation" style="direction: ${appState.lang==='ar'?'rtl':'ltr'}; text-align: ${appState.lang==='ar'?'right':'left'}; margin-top:5px; border-top:1px solid rgba(0,0,0,0.1); padding-top:5px;"><strong>${t('reason')}:</strong> ${explanation}</div></div></div>`; } }); const percentage = Math.round((score / questions.length) * 100); container.innerHTML = `<div class="quiz-container" style="text-align:center;"><h2 style="color:var(--white);">${t('resultTitle')}</h2><div style="font-size:3rem; color:${percentage >= 50 ? '#10b981' : '#dc2626'}; margin:1rem 0;">${percentage}%</div><p style="color:gray;">${t('timeTaken')}: ${formatTime(appState.quiz.time)}</p><button class="btn-back" onclick="exitQuiz()" style="margin-top:1rem;">${t('backCourse')}</button><div style="text-align:left; margin-top:2rem;">${reportHtml}</div></div>`; }
function exitQuiz() { const sub = db.subjects.find(s => s.id === appState.currentSubjectId); if(sub) renderSubjectView(sub, sub.material[0]); else renderDashboard(); }

// --- PDF & Admin Logic ---
function openPdf(link) { const modal = document.getElementById('app-modal'); let embedLink = link; if(link.includes('drive.google.com') && link.includes('/view')) embedLink = link.replace('/view', '/preview'); modal.innerHTML = `<div class="modal-content"><div class="modal-header"><h3 style="color:var(--text-primary)">Document Viewer</h3><button class="close-modal" onclick="closeAppModal()">&times;</button></div><iframe class="pdf-frame" src="${embedLink}"></iframe></div>`; modal.style.display = 'flex'; }
function closeAppModal() { const modal = document.getElementById('app-modal'); modal.style.display = 'none'; modal.innerHTML = ''; }
function formatTime(seconds) { const h = Math.floor(seconds / 3600).toString().padStart(2, '0'); const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0'); const s = (seconds % 60).toString().padStart(2, '0'); return `${h}:${m}:${s}`; }
function renderAdminLogin() { appState.view = 'admin'; container.innerHTML = `<div class="login-box"><h2 style="color:var(--white); margin-bottom:1rem;">${t('adminAccess')}</h2><input type="text" id="user" class="login-input" placeholder="Username"><input type="password" id="pass" class="login-input" placeholder="Password"><button class="login-btn" onclick="checkAdmin()">${t('login')}</button><p id="error-msg" style="color:red; margin-top:10px; display:none;">${t('accessDenied')}</p></div>`; }
function checkAdmin() { const u = document.getElementById('user').value; const p = document.getElementById('pass').value; if (u === "Adham_Mohamed_SOD_CODA" && p === "Adham@SOD_CODA@5564") { alert("Welcome Admin. Panel opening..."); } else { document.getElementById('error-msg').style.display = 'block'; } }

document.addEventListener('DOMContentLoaded', init);
