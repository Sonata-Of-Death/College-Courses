// ======================================================
// PART 1: SETUP, STATE, TRANSLATIONS & ROUTING
// ======================================================

// --- DOM Elements ---
const container = document.getElementById('app-container');
const themeBtn = document.getElementById('theme-toggle');
const langBtn = document.querySelector('.lang-switch');

// --- Global State ---
let appState = {
    view: 'home', 
    major: null,
    year: null,
    term: null,
    currentSubjectId: null,
    activeTab: null,
    subFilter: null, 
    lang: 'en',
    // Lab State
    lab: { 
        active: false, 
        id: null, 
        questions: [], 
        currentQIndex: 0, 
        time: 0, 
        userCode: "", 
        surrendered: false 
    },
    // Quiz State
    quiz: { 
        active: false, 
        questions: [], 
        currentQuestionIndex: 0, 
        time: 0, 
        userAnswers: {}, 
        flagged: new Set() 
    }
};

// --- Dictionary (Translations) ---
const translations = {
    en: {
        welcomeTitle: "Welcome to", welcomeSpan: "DNU Computer Science", welcomeSub: "Knowledge Base", 
        selectTrack: "Select your academic track to proceed", back: "Back", 
        selectYear: "Select Academic Year", selectTerm: "Select Semester", 
        year: "Year", term1: "First Semester", term2: "Second Semester", 
        t1Range: "Sep - Jan", t2Range: "Feb - Jun", clickAccess: "Click to access material",
        lecs: "Lectures", summary: "Summaries", quiz: "Quiz", labs: "Labs", 
        chapters: "Chapters", core_material: "Core Material",
        
        // Sub-sections
        arSec: "Arabic Section", enSec: "English Section", backToSelection: "Back to Selection",
        lecsMain: "Lectures", lecsSol: "Solutions",
        labsMaterial: "Lab Slides", labsQuestions: "Interactive Challenges",
        
        // Interactive Lab UI
        startLab: "Start Challenge", runCode: "Run Code", surrender: "Show Solution", 
        nextQ: "Next Question", understood: "I Understood",
        solving: "Compiling...", showHint: "💡 Show Hint", hideHint: "🚫 Hide Hint",
        
        // Alerts & Prompts
        mainClassAlertTitle: "⚠️ Naming Convention", 
        mainClassAlertBody: "For this compiler, your class <b>MUST</b> be public and named <code>Main</code>.<br>Example: <code>public class Main { ... }</code>",
        inputPrompt: "Program requires Input (Scanner).\nEnter values separated by spaces:",
        
        // Admin
        adminAccess: "Admin Access", login: "LOGIN", accessDenied: "Access Denied"
    },
    ar: {
        welcomeTitle: "مرحباً بك في", welcomeSpan: "قاعدة معرفة حاسبات DNU", welcomeSub: "", 
        selectTrack: "اختر المسار الأكاديمي للمتابعة", back: "رجوع", 
        selectYear: "اختر السنة الدراسية", selectTerm: "اختر الفصل الدراسي", 
        year: "السنة", term1: "الترم الأول", term2: "الترم الثاني", 
        t1Range: "سبتمبر - يناير", t2Range: "فبراير - يونيو", clickAccess: "اضغط للوصول للمحتوى",
        lecs: "محاضرات", summary: "ملخصات", quiz: "اختبار", labs: "لابات", 
        chapters: "فصول الكتاب", core_material: "المحتوى الأساسي",
        
        // Sub-sections
        arSec: "القسم العربي", enSec: "القسم الإنجليزي", backToSelection: "العودة للاختيار",
        lecsMain: "شرح المحاضرات", lecsSol: "حلول الأسئلة",
        labsMaterial: "ملفات الشرح", labsQuestions: "تحديات برمجية",
        
        // Interactive Lab UI
        startLab: "بدء التحدي", runCode: "تشغيل الكود", surrender: "إظهار الحل", 
        nextQ: "السؤال التالي", understood: "فهمت الفكرة",
        solving: "جاري المعالجة...", showHint: "💡 تلميح", hideHint: "🚫 إخفاء",
        
        // Alerts & Prompts
        mainClassAlertTitle: "⚠️ تنبيه هام", 
        mainClassAlertBody: "عشان الكود يشتغل هنا، لازم اسم الكلاس يكون <code>Main</code>.<br>مثال: <code>public class Main { ... }</code>",
        inputPrompt: "البرنامج يحتاج مدخلات (Input).\nادخل القيم هنا (افصل بمسافة):",
        
        // Admin
        adminAccess: "دخول المشرفين", login: "دخول", accessDenied: "بيانات خاطئة"
    }
};

function t(key) { return translations[appState.lang][key] || key; }

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Safety check for data.js
    if (typeof db === 'undefined') {
        container.innerHTML = `<div style="color:red; text-align:center; padding:50px;">
            <h1>⚠️ Error Loading Data</h1>
            <p>File <code>data.js</code> contains syntax errors or is missing.</p>
        </div>`;
        return;
    }
    
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
    if(logo) {
        logo.addEventListener('click', () => {
            // Reset timers if active
            if(typeof labTimerInterval !== 'undefined') clearInterval(labTimerInterval);
            if(typeof quizTimerInterval !== 'undefined') clearInterval(quizTimerInterval);
            
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
            // Re-fetch subject to ensure data integrity
            if(appState.currentSubjectId) {
                const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
                if(sub) renderSubjectView(sub, appState.activeTab);
            } else renderDashboard();
            break;
        case 'lab':
            if (appState.lab.active) renderLabQuestion();
            else renderCurrentView('subject');
            break;
        case 'quiz':
            if (appState.quiz.active) renderQuestion(appState.quiz.currentQuestionIndex);
            else renderCurrentView('subject'); 
            break;
        case 'quizResult': renderQuizResult(); break;
        case 'admin': renderAdminLogin(); break;
        default: renderHome();
    }
}

// --- Core Views ---
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

function selectMajor(major) { appState.major = major; renderYearSelect(); }

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

function selectYear(year) { appState.year = year; renderTermSelect(); }

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

function selectTerm(term) { appState.term = term; renderDashboard(); }

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
// ======================================================
// PART 2: SUBJECT VIEW & FILE HANDLING
// ======================================================

function openSubject(id) { 
    appState.currentSubjectId = id; 
    // Default to first tab
    const sub = db.subjects.find(s => s.id === id);
    if (sub) {
        appState.activeTab = sub.material[0]; 
        appState.subFilter = null; 
        renderSubjectView();
    }
}

function renderSubjectView() {
    appState.view = 'subject';
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
    if(!sub) return;
    
    // Generate Tabs
    let tabs = sub.material.map(m => `
        <button class="tab-btn ${m === appState.activeTab ? 'active' : ''}" 
                onclick="appState.activeTab='${m}'; appState.subFilter=null; renderSubjectView()">
            ${t(m)}
        </button>
    `).join('');
    
    // Content Logic based on Active Tab
    let content = "";
    
    // 1. LABS LOGIC (Split into Material vs Questions)
    if(appState.activeTab === 'labs') {
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
        } else if(appState.subFilter === 'material') {
            content = renderFileList(sub.content.labs.material);
        } else {
            content = renderLabList(sub.content.labs.questions.labs_list);
        }
    } 
    // 2. SUMMARY LOGIC (Split AR/EN)
    else if(appState.activeTab === 'summary' && !Array.isArray(sub.content.summary)) {
        if(!appState.subFilter) {
            content = `
                <div class="grid-center">
                    <div class="selection-card" onclick="appState.subFilter='ar'; renderSubjectView()">
                        <i class="fas fa-language card-icon"></i>
                        <h3>${t('arSec')}</h3>
                    </div>
                    <div class="selection-card" onclick="appState.subFilter='en'; renderSubjectView()">
                        <i class="fas fa-globe card-icon"></i>
                        <h3>${t('enSec')}</h3>
                    </div>
                </div>`;
        } else {
            content = renderFileList(appState.subFilter === 'ar' ? sub.content.summary.ar : sub.content.summary.en);
        }
    }
    // 3. LECTURES LOGIC (Split Main/Solutions)
    else if(appState.activeTab === 'lecs' && !Array.isArray(sub.content.lecs)) {
        if(!appState.subFilter) {
            content = `
                <div class="grid-center">
                    <div class="selection-card" onclick="appState.subFilter='main'; renderSubjectView()">
                        <i class="fas fa-chalkboard-teacher card-icon"></i>
                        <h3>${t('lecsMain')}</h3>
                    </div>
                    <div class="selection-card" onclick="appState.subFilter='solutions'; renderSubjectView()">
                        <i class="fas fa-check-circle card-icon"></i>
                        <h3>${t('lecsSol')}</h3>
                    </div>
                </div>`;
        } else {
            content = renderFileList(appState.subFilter === 'main' ? sub.content.lecs.main : sub.content.lecs.solutions);
        }
    }
    // 4. QUIZ LOGIC
    else if (appState.activeTab === 'quiz') {
        content = `
            <div style="text-align:center; padding:3rem;">
                <h2 style="margin-bottom:1rem;">${t('quizReady')}</h2>
                <button class="login-btn" style="max-width:200px;" onclick="startQuiz()">${t('startQuiz')}</button>
            </div>`;
    }
    // 5. STANDARD FILE LIST (Chapters, Core Material, etc.)
    else {
        content = renderFileList(sub.content[appState.activeTab]);
    }

    // Render Full View
    container.innerHTML = `
        <button class="btn-back" onclick="${appState.subFilter ? 'appState.subFilter=null; renderSubjectView()' : 'renderDashboard()'}">
            <i class="fas fa-arrow-left"></i> ${t('back')}
        </button>
        
        <div class="subject-header">
            <h1>${appState.lang === 'en' ? sub.name_en : sub.name_ar}</h1>
        </div>
        
        <div class="tabs-container">${tabs}</div>
        
        <div class="file-list" style="margin-top:20px;">
            ${content}
        </div>
    `;
}

// --- Helper: Render File List ---
function renderFileList(list) {
    if(!list || list.length === 0) return '<p style="text-align:center; color:var(--text-secondary);">Empty.</p>';
    return list.map(f => {
        // Determine icon based on type
        let icon = 'fa-file-pdf';
        let color = 'var(--text-primary)';
        if(f.type === 'PPT' || (f.link && f.link.includes('presentation'))) {
            icon = 'fa-file-powerpoint';
            color = 'var(--ppt-color)';
        }

        // Format Link for viewing
        let viewLink = f.link;
        if(f.link.includes('drive.google.com') && f.link.includes('/view')) {
            viewLink = f.link.replace('/view', '/preview');
        }
        
        return `
        <div class="file-item">
            <div class="file-info">
                <h3><i class="fas ${icon}" style="color:${color};"></i> ${f.title}</h3>
                ${f.note ? `<div class="warning-box"><i class="fas fa-exclamation-triangle"></i> ${f.note}</div>` : ''}
            </div>
            <div class="file-actions">
                ${f.link !== '#' ? `<button class="btn-view" onclick="openPdf('${viewLink}')"><i class="fas fa-eye"></i> ${t('view')}</button>` : ''}
                ${f.link !== '#' ? `<a href="${f.link}" target="_blank" class="btn-download"><i class="fas fa-download"></i></a>` : ''}
            </div>
        </div>`;
    }).join('');
}

// --- Helper: Render Lab List (Grid) ---
function renderLabList(list) {
    if(!list || list.length === 0) return '<p style="text-align:center; margin-top:2rem;">Coming Soon.</p>';
    return `
        <div class="dashboard-grid">
            ${list.map(l => `
                <div class="subject-card" onclick="initLab(${l.id})">
                    <div style="margin-bottom:10px; font-size:2rem; color:var(--accent);"><i class="fas fa-code"></i></div>
                    <h3>${l.title}</h3>
                    <p style="color:var(--text-secondary); font-size:0.9rem;">${l.qCount} Questions</p>
                    <button class="btn-start-lab">${t('startLab')}</button>
                </div>
            `).join('')}
        </div>`;
}

// ======================================================
// PART 3: LAB ARENA SYSTEM (UI RENDER)
// ======================================================

let labInterval;

function initLab(id) {
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
    if (!sub || !sub.content.labs.questions['lab_'+id]) return;

    appState.lab = { 
        active: true, 
        id: id, 
        questions: sub.content.labs.questions['lab_'+id], 
        currentQIndex: 0, 
        time: 0, 
        userCode: "", 
        surrendered: false 
    };

    // Start Timer
    if(labInterval) clearInterval(labInterval);
    labInterval = setInterval(() => { 
        appState.lab.time++; 
        const timerEl = document.getElementById('timer');
        if(timerEl) timerEl.innerText = formatTime(appState.lab.time); 
    }, 1000);

    renderLab();
}

function renderLab() {
    appState.view = 'lab';
    const q = appState.lab.questions[appState.lab.currentQIndex];
    const total = appState.lab.questions.length;
    
    // Ensure code editor starts empty
    if(typeof appState.lab.userCode === 'undefined') appState.lab.userCode = ""; 

    container.innerHTML = `
        <div class="lab-arena">
            <div class="lab-header">
                <h3>Lab ${appState.lab.id} - Question ${appState.lab.currentQIndex + 1} / ${total}</h3>
                <div class="timer-box" id="timer">${formatTime(appState.lab.time)}</div>
                <button class="btn-back" style="margin:0;" onclick="exitLab()">
                    <i class="fas fa-times"></i> Exit
                </button>
            </div>
            
            <div class="lab-workspace" id="workspace">
                <div class="problem-pane">
                    <h4 style="color:var(--accent); margin-bottom:1rem;">Task Requirement:</h4>
                    <p style="color:var(--text-primary); line-height:1.6; font-size:1.1rem;">${q.prompt}</p>
                    
                    <div style="margin-top:2rem;">
                        <button class="btn-view" style="width:100%; justify-content:center;" onclick="toggleHint()" id="hint-btn">
                            ${t('showHint')}
                        </button>
                        <div id="hint-box" style="display:none; margin-top:10px; background:rgba(0,0,0,0.2); padding:1rem; border-radius:5px;">
                            <strong style="color:var(--text-secondary);">Hint:</strong> <br>
                            <span style="color:var(--text-secondary);">${q.hint}</span>
                        </div>
                    </div>
                </div>
                
                <div class="editor-pane">
                    <textarea class="code-editor" id="code-input" spellcheck="false" 
                        placeholder="// Write your Java code here... \n// Don't forget: public class Main { ... }" 
                        oninput="appState.lab.userCode = this.value">${appState.lab.userCode}</textarea>
                    
                    <div class="lab-controls">
                        <button class="btn-surrender" onclick="surrender()">
                            <i class="fas fa-flag"></i> ${t('surrender')}
                        </button>
                        <button class="btn-run" onclick="runLabCode()">
                            <i class="fas fa-play"></i> ${t('runCode')}
                        </button>
                    </div>
                    
                    <div class="console-output" id="console-out">// Console Output will appear here...</div>
                </div>
            </div>
            
            <div class="compare-container" id="compare-view">
                <div class="solution-view">
                    <h4 style="color:var(--success); margin-bottom:10px;">Model Solution:</h4>
                    <pre>${q.solutionCode}</pre>
                </div>
                <div class="user-view">
                    <h4 style="color:var(--danger); margin-bottom:10px;">Your Code:</h4>
                    <pre id="static-user-code"></pre>
                </div>
                <div style="text-align:center; width:100%;">
                    <button class="btn-run" style="background:var(--accent);" onclick="understood()">
                        ${t('understood')} <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <div id="input-modal" class="modal-overlay">
            <div class="input-modal-content">
                <h3 style="color:var(--white); margin-bottom:1rem;">Input Required ⌨️</h3>
                <p style="color:var(--text-secondary);">${t('inputPrompt')}</p>
                <input type="text" id="custom-stdin" class="custom-input-field" placeholder="e.g. 10 20">
                <button class="btn-run" onclick="resolveInput()" style="width:100%;">Submit & Run</button>
            </div>
        </div>

        <div id="main-class-alert" class="modal-overlay">
            <div class="alert-content warning-modal">
                <h2 style="color:var(--warning); margin-bottom:1rem;">${t('mainClassAlertTitle')}</h2>
                <p style="color:var(--text-primary); margin-bottom:1.5rem; line-height:1.5;">${t('mainClassAlertBody')}</p>
                <button class="btn-confirm" onclick="document.getElementById('main-class-alert').style.display='none'">OK, I'll Fix it</button>
            </div>
        </div>
    `;
}
// ======================================================
// PART 3: LOGIC, COMPILER & QUIZ SYSTEM
// ======================================================

function toggleHint() {
    const box = document.getElementById('hint-box');
    const btn = document.getElementById('hint-btn');
    if (box.style.display === 'none') {
        box.style.display = 'block';
        btn.innerHTML = t('hideHint');
    } else {
        box.style.display = 'none';
        btn.innerHTML = t('showHint');
    }
}

// --- Input Handling ---
let inputResolve = null;

function getInputFromUser() {
    return new Promise((resolve) => {
        document.getElementById('input-modal').style.display = 'flex';
        // Focus on input for better UX
        setTimeout(() => document.getElementById('custom-stdin').focus(), 100);
        inputResolve = resolve;
    });
}

function resolveInput() {
    const val = document.getElementById('custom-stdin').value;
    document.getElementById('input-modal').style.display = 'none';
    if(inputResolve) inputResolve(val);
}

// --- Piston API Compiler Logic ---
async function runLabCode() {
    const userCode = document.getElementById('code-input').value;
    const consoleOut = document.getElementById('console-out');
    const q = appState.lab.questions[appState.lab.currentQIndex];

    // 1. Validation: Class Main
    if (!userCode.match(/class\s+Main\b/)) {
        document.getElementById('main-class-alert').style.display = 'flex';
        return;
    }

    // 2. Validation: Input Requirement
    let stdin = "";
    if (userCode.includes("Scanner") || userCode.includes("System.in")) {
        stdin = await getInputFromUser();
    }

    // 3. UI Update
    consoleOut.innerHTML = `<span style="color:yellow;">⏳ ${t('solving')}</span>`;

    // 4. API Request
    try {
        const response = await fetch('https://emkc.org/api/v2/piston/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                language: "java",
                version: "15.0.2",
                files: [{ name: "Main.java", content: userCode }],
                stdin: stdin
            })
        });

        const result = await response.json();

        // 5. Result Handling
        if (result.run) {
            let output = result.run.output || "";
            let cleanOutput = output.trim();
            
            // Expected Output Check (Soft Check)
            let isCorrect = true;
            if (q.expectedOutput) {
                // Remove spaces/newlines for looser comparison
                const normUser = cleanOutput.replace(/\s+/g, ' ').toLowerCase();
                const normExp = q.expectedOutput.trim().replace(/\s+/g, ' ').toLowerCase();
                isCorrect = normUser.includes(normExp);
            }

            if (result.run.stderr) {
                consoleOut.innerHTML = `<span style="color:#f87171;">❌ Runtime Error:\n${result.run.stderr}</span>`;
            } else if (isCorrect) {
                consoleOut.innerHTML = `<span style="color:#4ade80;">✅ Correct Output:\n${output}</span>`;
                celebrateSuccess();
                // Auto-advance after 5 seconds
                setTimeout(() => {
                    if (appState.lab.active) nextLabQ();
                }, 5000);
            } else {
                consoleOut.innerHTML = `<span style="color:#f87171;">⚠️ Output Mismatch.\n\nYour Output:\n${output}\n\nExpected to contain:\n${q.expectedOutput}</span>`;
            }
        } else {
            consoleOut.innerHTML = `<span style="color:#f87171;">⚠️ Server Error. Try again.</span>`;
        }

    } catch (error) {
        consoleOut.innerHTML = `<span style="color:#f87171;">❌ Connection Failed: ${error.message}</span>`;
    }
}

// --- Celebration Animation ---
function celebrateSuccess() {
    for(let i=0; i<30; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = Math.random() * 100 + 'vw';
        p.style.backgroundColor = ['#f00', '#0f0', '#00f', '#ff0', '#0ff'][Math.floor(Math.random()*5)];
        p.style.width = Math.random() * 10 + 5 + 'px';
        p.style.height = p.style.width;
        p.style.animationDuration = Math.random() * 2 + 2 + 's'; // 2-4s fall
        document.body.appendChild(p);
        
        // Cleanup
        setTimeout(() => p.remove(), 4000);
    }
}

// --- Navigation & State ---
function surrender() {
    appState.lab.surrendered = true;
    document.getElementById('workspace').style.display = 'none';
    const compareView = document.getElementById('compare-view');
    compareView.style.display = 'flex';
    document.getElementById('static-user-code').innerText = appState.lab.userCode || "// No code written";
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
        alert("🎉 Lab Completed! Returning to subject view.");
        exitLab();
    }
}

function exitLab() {
    if (labTimerInterval) clearInterval(labTimerInterval);
    appState.lab.active = false;
    renderSubjectView();
}

// ======================================================
// PART 4: QUIZ SYSTEM
// ======================================================

function startQuiz() { 
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId); 
    if(!sub.content.quiz || sub.content.quiz.length === 0) {
        alert("No quiz available for this subject yet.");
        return;
    }
    
    appState.view = 'quiz'; 
    appState.quiz = { 
        active: true, 
        questions: sub.content.quiz, 
        currentQuestionIndex: 0, 
        time: 0, 
        userAnswers: {}, 
        flagged: new Set() 
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
    
    container.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-top-bar">
                <span style="color:var(--white);">${t('qNum')} ${index + 1} / ${appState.quiz.questions.length}</span>
                <span id="timer-display" class="timer-box">${formatTime(appState.quiz.time)}</span>
            </div>
            <button class="btn-view ${isFlagged ? 'active' : ''}" onclick="toggleFlag(${index})" style="margin-bottom:1rem;">
                <i class="fas fa-flag"></i> ${t('flag')}
            </button>
            <div class="file-item" style="display:block; cursor:default;">
                <h3 style="margin-bottom:1rem; color:var(--white);">${q.question}</h3>
                <div class="options-grid">
                    ${q.options.map((opt, i) => `
                        <label class="option-label">
                            <input type="radio" name="q${q.id}" value="${i}" 
                                ${appState.quiz.userAnswers[index] === i ? 'checked' : ''} 
                                onchange="saveAnswer(${index}, ${i})"> 
                            <span style="margin-left:10px;">${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-footer">
                ${index > 0 ? `<button class="btn-nav" onclick="renderQuestion(${index - 1})">${t('prev')}</button>` : '<div></div>'}
                ${index < appState.quiz.questions.length - 1 
                    ? `<button class="btn-nav" onclick="renderQuestion(${index + 1})">${t('next')}</button>` 
                    : `<button class="btn-submit" onclick="attemptSubmit()">${t('submit')}</button>`}
            </div>
        </div>
        <div id="alert-modal" class="modal-overlay"></div>
    `; 
}

function toggleFlag(index) { 
    if(appState.quiz.flagged.has(index)) appState.quiz.flagged.delete(index); 
    else appState.quiz.flagged.add(index); 
    renderQuestion(index); 
}

function saveAnswer(qIndex, ansIndex) { appState.quiz.userAnswers[qIndex] = ansIndex; }

function attemptSubmit() { 
    const flags = Array.from(appState.quiz.flagged).map(i => i + 1); 
    if (flags.length > 0) showFlagAlert(flags); 
    else finalizeQuiz(); 
}

function showFlagAlert(flags) { 
    const modal = document.getElementById('alert-modal'); 
    modal.innerHTML = `
        <div class="input-modal-content warning-modal">
            <h2 style="color:var(--warning);">${t('flagAlertTitle')}</h2>
            <p>${t('flagAlertMsg')} <b>${flags.join(', ')}</b></p>
            <div style="display:flex; gap:10px; justify-content:center; margin-top:1rem;">
                <button class="btn-back" onclick="document.getElementById('alert-modal').style.display='none'">${t('flagAlertBack')}</button>
                <button class="btn-confirm" onclick="finalizeQuiz()">${t('flagAlertAction')}</button>
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
        const isCorrect = appState.quiz.userAnswers[index] === q.answer; 
        if(isCorrect) score++; 
        
        // Show details for wrong answers
        if(!isCorrect) { 
            reportHtml += `
                <div class="file-item" style="display:block; border-color:var(--danger);">
                    <h4>Q${index+1}: ${q.question}</h4>
                    <p style="color:var(--danger);">Your Answer: ${q.options[appState.quiz.userAnswers[index]] || 'None'}</p>
                    <p style="color:var(--success);">Correct Answer: ${q.options[q.answer]}</p>
                    <small style="color:var(--text-secondary);">${t('reason')}: ${appState.lang === 'ar' ? (q.explanation_ar||q.explanation_en) : q.explanation_en}</small>
                </div>`; 
        } 
    }); 
    
    const percentage = Math.round((score / questions.length) * 100); 
    container.innerHTML = `
        <div class="quiz-container" style="text-align:center;">
            <h2>${t('resultTitle')}</h2>
            <div style="font-size:4rem; color:${percentage >= 50 ? 'var(--success)' : 'var(--danger)'}; margin:1rem 0;">${percentage}%</div>
            <p>${t('timeTaken')}: ${formatTime(appState.quiz.time)}</p>
            <button class="btn-back" onclick="exitQuiz()" style="margin-top:1rem;">${t('backCourse')}</button>
            <div style="text-align:left; margin-top:2rem;">${reportHtml}</div>
        </div>`; 
}

function exitQuiz() { 
    renderSubjectView(); 
}

// ======================================================
// PART 5: UTILITIES & ADMIN
// ======================================================

function openPdf(link) { 
    const modal = document.getElementById('app-modal'); 
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Document Viewer</h3>
                <button class="close-modal" onclick="document.getElementById('app-modal').style.display='none'">&times;</button>
            </div>
            <iframe class="pdf-frame" src="${link}"></iframe>
        </div>`; 
    modal.style.display = 'flex'; 
}

function formatTime(seconds) { 
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0'); 
    const s = (seconds % 60).toString().padStart(2, '0'); 
    return `${m}:${s}`; 
}

function renderAdminLogin() { 
    appState.view = 'admin'; 
    container.innerHTML = `
        <div class="login-box">
            <h2>${t('adminAccess')}</h2>
            <input type="text" id="user" class="login-input" placeholder="Username">
            <input type="password" id="pass" class="login-input" placeholder="Password">
            <button class="login-btn" onclick="checkAdmin()">${t('login')}</button>
            <p id="error-msg" style="color:var(--danger); margin-top:10px; display:none;">${t('accessDenied')}</p>
        </div>`; 
}

function checkAdmin() { 
    const u = document.getElementById('user').value; 
    const p = document.getElementById('pass').value; 
    if (u === "Adham_Mohamed_SOD_CODA" && p === "Adham@SOD_CODA@5564") { 
        alert("Welcome Admin. Panel functionality coming soon."); 
        renderHome();
    } else { 
        document.getElementById('error-msg').style.display = 'block'; 
    } 
}
