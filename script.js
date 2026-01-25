// ... (الجزء الأول من الكود: Global State و Translations كما هو) ...

// --- Interactive Lab Logic (Piston API + Input Handling + Celebration) ---
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
    appState.lab.userCode = ""; // Always start empty

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
                    <textarea class="code-editor" id="code-input" spellcheck="false" placeholder="// Write your Java code here... (Start with: public class Main)" oninput="appState.lab.userCode = this.value"></textarea>
                    <div class="lab-controls">
                        <button class="btn-surrender" onclick="surrender()"><i class="fas fa-flag"></i> ${t('surrender')}</button>
                        <button class="btn-run" onclick="runLabCode()"><i class="fas fa-play"></i> ${t('runCode')}</button>
                    </div>
                    <div class="console-output" id="console-out">// Logs...</div>
                </div>
            </div>
            
            <div class="compare-container" id="compare-view">
                <div class="solution-view">
                    <h4 style="color:var(--success);">Solution:</h4>
                    <pre>${q.solutionCode}</pre>
                </div>
                <div class="user-view">
                    <h4 style="color:var(--danger);">Your Code:</h4>
                    <pre id="static-user-code"></pre>
                </div>
                <div style="position:absolute; bottom:20px; right:20px;">
                    <button class="btn-run" style="background:var(--accent);" onclick="understood()">${t('understood')} <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
        
        <div id="input-modal" class="modal-overlay">
            <div class="input-modal-content">
                <h3 style="color:var(--white); margin-bottom:1rem;">Input Required</h3>
                <p style="color:var(--text-secondary);">Enter values for Scanner (separated by spaces):</p>
                <input type="text" id="custom-stdin" class="custom-input-field" placeholder="e.g. 10 20">
                <button class="btn-run" onclick="resolveInput()" style="width:100%;">Submit & Run</button>
            </div>
        </div>

        <div id="main-class-alert" class="modal-overlay">
            <div class="alert-content warning-modal">
                <h2 style="color:var(--warning);">⚠️ Naming Error</h2>
                <p style="color:var(--text-primary);">Your class MUST be named <b>Main</b>.<br>Ex: <code>public class Main { ... }</code></p>
                <button class="btn-confirm" onclick="document.getElementById('main-class-alert').style.display='none'">Fix it</button>
            </div>
        </div>
    `;
}

function toggleHint() {
    const box = document.getElementById('hint-box');
    const btn = document.getElementById('hint-btn');
    if(box.style.display === 'none') { box.style.display = 'block'; btn.innerText = t('hideHint'); }
    else { box.style.display = 'none'; btn.innerText = t('showHint'); }
}

// Promise to handle Custom Input Modal
let inputResolve = null;
function getInputFromUser() {
    return new Promise((resolve) => {
        document.getElementById('input-modal').style.display = 'flex';
        inputResolve = resolve;
    });
}
function resolveInput() {
    const val = document.getElementById('custom-stdin').value;
    document.getElementById('input-modal').style.display = 'none';
    if(inputResolve) inputResolve(val);
}

async function runLabCode() {
    const userCode = document.getElementById('code-input').value;
    const consoleOut = document.getElementById('console-out');
    const q = appState.lab.questions[appState.lab.currentQIndex];

    // 1. Validate 'class Main'
    if (!userCode.match(/class\s+Main\b/)) {
        document.getElementById('main-class-alert').style.display = 'flex';
        return;
    }

    // 2. Handle Input (Scanner)
    let stdin = "";
    if (userCode.includes("Scanner") || userCode.includes("System.in")) {
        stdin = await getInputFromUser();
    }

    consoleOut.innerHTML = `<span style="color:yellow;">⏳ ${t('solving')}</span>`;

    // 3. API Call
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

        // 4. Validate Output Logic
        if (result.run) {
            let output = result.run.output || "";
            let cleanOutput = output.trim();
            // Optional: If you provided expectedOutput in data.js, verify it
            let isCorrect = q.expectedOutput ? cleanOutput.includes(q.expectedOutput.trim()) : true;

            if (result.run.stderr) {
                consoleOut.innerHTML = `<span style="color:#f87171;">❌ Error:\n${result.run.stderr}</span>`;
            } else if (isCorrect) {
                consoleOut.innerHTML = `<span style="color:#4ade80;">✅ Correct!\n${output}</span>`;
                celebrateSuccess();
                setTimeout(nextLabQ, 5000); // Auto next after 5s
            } else {
                consoleOut.innerHTML = `<span style="color:#f87171;">❌ Output Mismatch.\nYour Output:\n${output}\n\nExpected contains:\n${q.expectedOutput}</span>`;
            }
        }
    } catch (e) {
        consoleOut.innerHTML = `<span style="color:red;">API Error: ${e.message}</span>`;
    }
}

function celebrateSuccess() {
    for(let i=0; i<30; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = Math.random() * 100 + 'vw';
        p.style.backgroundColor = ['#f00', '#0f0', '#00f', '#ff0'][Math.floor(Math.random()*4)];
        p.style.width = Math.random() * 10 + 5 + 'px';
        p.style.height = p.style.width;
        p.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 3000);
    }
}

// ... (Rest of functions: surrender, understood, nextLabQ, exitLab, etc. from previous response)
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
        alert("Lab Completed! Great job.");
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
function renderAdminLogin() { appState.view = 'admin'; container.innerHTML = `<div class="login-box"><h2 style="color:var(--white); margin-bottom:1rem;">${t('adminAccess')}</h2><input type=\"text\" id=\"user\" class=\"login-input\" placeholder=\"Username\"><input type=\"password\" id=\"pass\" class=\"login-input\" placeholder=\"Password\"><button class=\"login-btn\" onclick=\"checkAdmin()\">${t('login')}</button><p id=\"error-msg\" style=\"color:red; margin-top:10px; display:none;\">${t('accessDenied')}</p></div>`; }
function checkAdmin() { const u = document.getElementById('user').value; const p = document.getElementById('pass').value; if (u === "Adham_Mohamed_SOD_CODA" && p === "Adham@SOD_CODA@5564") { alert("Welcome Admin. Panel opening..."); } else { document.getElementById('error-msg').style.display = 'block'; } }

document.addEventListener('DOMContentLoaded', init);
