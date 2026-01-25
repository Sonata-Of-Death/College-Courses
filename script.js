// --- CONFIG & STATE ---
const container = document.getElementById('app-container');
const themeBtn = document.getElementById('theme-toggle');
const langBtn = document.querySelector('.lang-switch');

let appState = {
    view: 'home', major: null, year: null, term: null, currentSubjectId: null, activeTab: null, subFilter: null, lang: 'en',
    lab: { active: false, id: null, questions: [], currentQIndex: 0, time: 0, userCode: "", surrendered: false }
};

// --- TRANSLATIONS ---
const translations = {
    en: {
        welcome: "Welcome to DNU CS Knowledge Base", select: "Select your track", back: "Back", 
        lecs: "Lectures", summary: "Summaries", labs: "Labs", quiz: "Quiz", chapters: "Chapters",
        lecsMain: "Lectures", lecsSol: "Solutions", labsMaterial: "Material", labsQuestions: "Interactive Questions",
        startLab: "Start Lab", run: "Run Code", surrender: "Show Solution", understood: "I Understood",
        hintShow: "💡 Show Hint", hintHide: "🚫 Hide Hint", compiling: "Compiling...",
        alertMain: "⚠️ Error: Your class must be named 'Main'.",
        inputReq: "Input Required: Enter values separated by spaces:"
    },
    ar: {
        welcome: "مرحباً بك في قاعدة معرفة حاسبات DNU", select: "اختر مسارك", back: "رجوع",
        lecs: "محاضرات", summary: "ملخصات", labs: "لابات", quiz: "كويز", chapters: "فصول",
        lecsMain: "شرح", lecsSol: "حلول", labsMaterial: "شرح اللاب", labsQuestions: "أسئلة تفاعلية",
        startLab: "بدء اللاب", run: "تشغيل", surrender: "عرض الحل", understood: "فهمت",
        hintShow: "💡 تلميح", hintHide: "🚫 إخفاء", compiling: "جاري التشغيل...",
        alertMain: "⚠️ تنبيه: لازم اسم الكلاس يكون 'Main'.",
        inputReq: "مطلوب مدخلات: ادخل القيم مفصولة بمسافات:"
    }
};
function t(key) { return translations[appState.lang][key] || key; }

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    if(typeof db === 'undefined') return alert("Critical: data.js failed to load!");
    renderHome();
    themeBtn.onclick = () => document.body.classList.toggle('light-mode');
    langBtn.onclick = () => { appState.lang = appState.lang==='en'?'ar':'en'; langBtn.innerText = appState.lang.toUpperCase(); renderCurrentView(); };
});

function renderCurrentView() {
    if(appState.view === 'home') renderHome();
    else if(appState.view === 'dashboard') renderDashboard();
    else if(appState.view === 'subject') renderSubjectView();
    else if(appState.view === 'lab') renderLab();
}

// --- VIEWS ---
function renderHome() {
    appState.view = 'home';
    container.innerHTML = `
        <div class="hero"><h1>${t('welcome')}</h1><p>${t('select')}</p></div>
        <div class="grid-center">
            <div class="selection-card" onclick="selectMajor('ai')"><i class="fas fa-brain card-icon"></i><h2>AI</h2></div>
            <div class="selection-card" onclick="selectMajor('cyber')"><i class="fas fa-shield-halved card-icon"></i><h2>Cyber</h2></div>
        </div>`;
}

function selectMajor(m) { appState.major = m; appState.year = 1; appState.term = 1; renderDashboard(); }

function renderDashboard() {
    appState.view = 'dashboard';
    const subs = db.subjects.filter(s => (s.type === 'shared' || s.type === appState.major));
    container.innerHTML = `
        <button class="btn-back" onclick="renderHome()">${t('back')}</button>
        <div class="dashboard-grid" style="margin-top:2rem;">
            ${subs.map(s => `<div class="subject-card" onclick="openSubject('${s.id}')"><h3>${appState.lang==='en'?s.name_en:s.name_ar}</h3></div>`).join('')}
        </div>`;
}

function openSubject(id) { appState.currentSubjectId = id; appState.activeTab = db.subjects.find(s=>s.id===id).material[0]; appState.subFilter = null; renderSubjectView(); }

function renderSubjectView() {
    appState.view = 'subject';
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
    if(!sub) return;
    
    // Tabs
    let tabs = sub.material.map(m => `<button class="tab-btn ${m===appState.activeTab?'active':''}" onclick="appState.activeTab='${m}'; appState.subFilter=null; renderSubjectView()">${t(m)}</button>`).join('');
    
    // Content Logic
    let content = "";
    // 1. Labs Split
    if(appState.activeTab === 'labs') {
        if(!appState.subFilter) content = `<div class="grid-center"><div class="selection-card" onclick="appState.subFilter='material'; renderSubjectView()"><h3>${t('labsMaterial')}</h3></div><div class="selection-card" onclick="appState.subFilter='questions'; renderSubjectView()"><h3>${t('labsQuestions')}</h3></div></div>`;
        else if(appState.subFilter === 'material') content = renderFileList(sub.content.labs.material);
        else content = renderLabList(sub.content.labs.questions.labs_list);
    } 
    // 2. Summary Split
    else if(appState.activeTab === 'summary' && !Array.isArray(sub.content.summary)) {
        if(!appState.subFilter) content = `<div class="grid-center"><div class="selection-card" onclick="appState.subFilter='ar'; renderSubjectView()"><h3>Arabic</h3></div><div class="selection-card" onclick="appState.subFilter='en'; renderSubjectView()"><h3>English</h3></div></div>`;
        else content = renderFileList(appState.subFilter === 'ar' ? sub.content.summary.ar : sub.content.summary.en);
    }
    // 3. Lectures Split (English Course)
    else if(appState.activeTab === 'lecs' && !Array.isArray(sub.content.lecs)) {
        if(!appState.subFilter) content = `<div class="grid-center"><div class="selection-card" onclick="appState.subFilter='main'; renderSubjectView()"><h3>${t('lecsMain')}</h3></div><div class="selection-card" onclick="appState.subFilter='solutions'; renderSubjectView()"><h3>${t('lecsSol')}</h3></div></div>`;
        else content = renderFileList(appState.subFilter === 'main' ? sub.content.lecs.main : sub.content.lecs.solutions);
    }
    // 4. Standard
    else {
        content = renderFileList(sub.content[appState.activeTab]);
    }

    container.innerHTML = `
        <button class="btn-back" onclick="${appState.subFilter ? 'appState.subFilter=null; renderSubjectView()' : 'renderDashboard()'}">${t('back')}</button>
        <div class="subject-header"><h1>${appState.lang==='en'?sub.name_en:sub.name_ar}</h1></div>
        <div class="tabs-container">${tabs}</div>
        <div class="file-list">${content}</div>
    `;
}

function renderFileList(list) {
    if(!list || list.length === 0) return '<p style="text-align:center">Empty</p>';
    return list.map(f => `
        <div class="file-item">
            <div><strong>${f.title}</strong><br><small>${f.note || ''}</small></div>
            <div class="file-actions">
                ${f.link!=='#'?`<a href="${f.link}" target="_blank" class="btn-view">View</a>`:''}
            </div>
        </div>`).join('');
}

function renderLabList(list) {
    if(!list || list.length === 0) return '<p style="text-align:center">Coming Soon</p>';
    return `<div class="dashboard-grid">${list.map(l => `
        <div class="subject-card" onclick="initLab(${l.id})">
            <h3>${l.title}</h3><p>${l.qCount} Questions</p><button class="btn-start-lab">${t('startLab')}</button>
        </div>`).join('')}</div>`;
}

// --- LAB SYSTEM ---
let labInterval;
function initLab(id) {
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId);
    appState.lab = { active: true, id: id, questions: sub.content.labs.questions['lab_'+id], currentQIndex: 0, time: 0, userCode: "", surrendered: false };
    if(labInterval) clearInterval(labInterval);
    labInterval = setInterval(() => { appState.lab.time++; document.getElementById('timer').innerText = formatTime(appState.lab.time); }, 1000);
    renderLab();
}

function renderLab() {
    appState.view = 'lab';
    const q = appState.lab.questions[appState.lab.currentQIndex];
    if(!appState.lab.userCode) appState.lab.userCode = ""; // Empty start

    container.innerHTML = `
        <div class="lab-arena">
            <div class="lab-header">
                <h3>Lab ${appState.lab.id} - Q${appState.lab.currentQIndex+1}</h3>
                <div class="timer-box" id="timer">${formatTime(appState.lab.time)}</div>
                <button class="btn-back" onclick="appState.lab.active=false; renderSubjectView()">Exit</button>
            </div>
            
            <div class="lab-workspace" id="workspace">
                <div class="problem-pane">
                    <h4>Task:</h4><p style="line-height:1.6">${q.prompt}</p>
                    <div style="margin-top:20px">
                        <button class="btn-view" id="hint-btn" onclick="toggleHint()">💡 Hint</button>
                        <div id="hint-box" style="display:none; margin-top:10px; background:rgba(0,0,0,0.3); padding:10px; border-radius:5px">${q.hint}</div>
                    </div>
                </div>
                <div class="editor-pane">
                    <textarea class="code-editor" id="code" spellcheck="false" placeholder="// Write code here (class Main)..." oninput="appState.lab.userCode=this.value">${appState.lab.userCode}</textarea>
                    <div class="lab-controls">
                        <button class="btn-surrender" onclick="surrender()">${t('surrender')}</button>
                        <button class="btn-run" onclick="runCode()">${t('run')}</button>
                    </div>
                    <div class="console-output" id="console">// Output...</div>
                </div>
            </div>

            <div class="compare-container" id="compare">
                <div class="solution-view"><h4>Solution:</h4><pre>${q.solutionCode}</pre></div>
                <div class="user-view"><h4>Your Code:</h4><pre id="static-code"></pre></div>
                <button class="btn-run" onclick="nextQ()" style="align-self:center">${t('understood')}</button>
            </div>
        </div>

        <div id="alert-modal" class="modal-overlay">
            <div class="modal-content warning-modal">
                <h3 style="color:var(--warning)">${t('alertMain')}</h3>
                <button class="btn-run" onclick="document.getElementById('alert-modal').style.display='none'">OK</button>
            </div>
        </div>

        <div id="input-modal" class="modal-overlay">
            <div class="modal-content">
                <h3>${t('inputReq')}</h3>
                <input type="text" id="stdin-val" class="custom-input">
                <button class="btn-run" onclick="submitInput()">Submit</button>
            </div>
        </div>
    `;
}

function toggleHint() {
    const box = document.getElementById('hint-box');
    box.style.display = box.style.display==='none'?'block':'none';
}

// Compiler Logic
let inputCallback = null;
async function runCode() {
    const code = document.getElementById('code').value;
    const cons = document.getElementById('console');
    const q = appState.lab.questions[appState.lab.currentQIndex];

    if(!code.includes("class Main")) { document.getElementById('alert-modal').style.display='flex'; return; }
    
    let stdin = "";
    if(code.includes("Scanner") || code.includes("System.in")) {
        stdin = await new Promise(r => { 
            document.getElementById('input-modal').style.display='flex'; 
            inputCallback = r; 
        });
    }

    cons.innerHTML = t('compiling');

    try {
        const res = await fetch('https://emkc.org/api/v2/piston/execute', {
            method: 'POST', headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ language: "java", version: "15.0.2", files:[{name:"Main.java", content:code}], stdin: stdin })
        });
        const data = await res.json();
        
        let out = data.run.stdout || "";
        let err = data.run.stderr || "";

        if(err) {
            cons.innerHTML = `<span style="color:#f87171">${err}</span>`;
        } else {
            // Validation
            const correct = q.expectedOutput ? out.includes(q.expectedOutput.trim()) : true;
            if(correct) {
                cons.innerHTML = `<span style="color:#4ade80">✅ Correct Output:\n${out}</span>`;
                celebrate();
                setTimeout(nextQ, 4000);
            } else {
                cons.innerHTML = `<span style="color:#f87171">❌ Output Mismatch:\n${out}\n\nExpected:\n${q.expectedOutput}</span>`;
            }
        }
    } catch(e) { cons.innerText = "Error: " + e.message; }
}

function submitInput() {
    const val = document.getElementById('stdin-val').value;
    document.getElementById('input-modal').style.display='none';
    if(inputCallback) inputCallback(val);
}

function surrender() {
    appState.lab.surrendered = true;
    document.getElementById('workspace').style.display='none';
    document.getElementById('compare').style.display='flex';
    document.getElementById('static-code').innerText = appState.lab.userCode;
}

function nextQ() {
    if(appState.lab.currentQIndex < appState.lab.questions.length-1) {
        appState.lab.currentQIndex++;
        appState.lab.userCode = "";
        renderLab();
    } else {
        alert("Lab Finished!");
        appState.lab.active=false; renderSubjectView();
    }
}

function celebrate() {
    for(let i=0; i<30; i++) {
        const p = document.createElement('div'); p.className='particle';
        p.style.left = Math.random()*100+'vw'; p.style.backgroundColor=['red','gold','lime'][Math.floor(Math.random()*3)];
        document.body.appendChild(p); setTimeout(()=>p.remove(),3000);
    }
}

function formatTime(s) { return new Date(s*1000).toISOString().substr(14,5); }
