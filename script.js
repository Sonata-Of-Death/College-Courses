// ======================================================
// PART 1: SETUP, STATE, TRANSLATIONS & ROUTING
// ======================================================

// ======================================================
// MARKDOWN + KATEX RENDERING PIPELINE
// ======================================================
// The correct order is:
//   Raw text  →  preprocessMathText (plain-text math → LaTeX)
//              →  Marked (MD → HTML)  →  DOMPurify (sanitize)
//              →  innerHTML  →  renderMathInElement (KaTeX, skipping code blocks)
//
// This replaces the previous "raw template literal → innerHTML" approach which
// caused Markdown tables, headings, lists, bold/italic, links, and code blocks
// to appear as plain text. KaTeX could never format them because the content
// was never parsed into HTML in the first place.
//
// Bug-fix audit (round 2):
//   1) Markdown tables in quiz options/questions are now routed through
//      renderMarkdown() everywhere (q.question, q.options, q.model_answer,
//      q.explanation, q.explanation_ar, q.explanation_en). No call site uses
//      textContent/innerText for these fields. See renderQuestion(),
//      renderQuizResult(), and the lab prompt renderMarkdown calls.
//   2) Plain-text math from data.js (e.g. "(2x+3)/(x-1)", "=>", "f^-1(y)",
//      "R\{1}") is normalized into LaTeX by preprocessMathText() BEFORE
//      Marked sees it, so KaTeX picks it up correctly.
// ======================================================

// Configure Marked once (GFM enables tables, strikethrough, autolinks, task lists).
if (window.marked) {
    marked.setOptions({
        gfm: true,
        breaks: true,
        headerIds: false,
        mangle: false
    });
}

/**
 * Smart pre-parser: converts plain-text math (as written in data.js) into
 * LaTeX wrapped in $...$ delimiters so KaTeX can format it.
 *
 * This runs BEFORE Marked, so it never touches the HTML that Marked produces.
 * It also deliberately avoids touching anything that sits inside an existing
 * $...$ or $$...$$ block (to avoid double-wrapping).
 *
 * Supported patterns:
 *   - Fractions:   (num)/(den)        →  $\frac{num}{den}$
 *                  (with safety check so "(bird/work)" is left alone)
 *   - Arrows:      =>  /  <=>         →  $\Rightarrow$ / $\Leftrightarrow$
 *                  ->  /  <->         →  $\rightarrow$ / $\leftrightarrow$
 *   - Set minus:   R\{1}              →  $\mathbb{R} \setminus \{1\}$
 *   - Inverses:    f^-1(y)            →  $f^{-1}(y)$
 *   - Other:       <=                 →  $\leq$   (very common in our DB)
 *                  >=                 →  $\geq$
 */
function preprocessMathText(text) {
    if (text === null || text === undefined) return '';
    let str = String(text);

    // -----------------------------------------------------------------
    // 0) Masking Phase: Mask URLs, code blocks, HTML tags, and existing LaTeX delimiters
    //    so math regexes never corrupt URLs, code blocks, HTML, or existing LaTeX.
    // -----------------------------------------------------------------
    const masks = [];
    const mask = (s) => {
        const token = `\u0000MATH${masks.length}\u0000`;
        masks.push(s);
        return token;
    };

    str = str.replace(/https?:\/\/[^\s<>()]+/g, mask);
    str = str.replace(/```[\s\S]*?```|`[^`\n]+`/g, mask);
    str = str.replace(/<[^>]+>/g, mask);
    str = str.replace(/\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g, mask);
    str = str.replace(/\$([^$\n]+?)\$/g, mask);

    // -----------------------------------------------------------------
    // 0.5) Un-delimited Raw LaTeX Detection Phase
    //      Detect plain-text strings containing raw backslash LaTeX commands
    //      (e.g., \int, \frac, \sqrt, \ln, \sin, \cos, \tan, \sec, \lim, \sum, \implies, etc.)
    //      and automatically wrap them in $...$ delimiters for KaTeX.
    // -----------------------------------------------------------------
    const rawLatexRegex = /(?:[^\n]*?\\(?:int|frac|sqrt|lim|sum|prod|sin|cos|tan|sec|csc|cot|ln|log|theta|alpha|beta|gamma|delta|pi|implies|rightarrow|leftarrow|cdot|left|right|partial|infty|iint|iiint|oint|quad|gcd|in|langle|rangle|circ|pm|omega|varphi|lambda|mu|approx|hat|le|ge|neq|ne|cup|sinh|cosh|tanh|arccos|arcsin|vec)\b[^\n]*|^\s*[a-zA-Z0-9_]+\s*=\s*[^\n]*\\[a-zA-Z]+[^\n]*)/gi;

    str = str.replace(rawLatexRegex, (m) => {
        const prefixMatch = m.match(/^(.*?(?:integral|equation|formula|evaluate|find|simplify|solve|where|let)\s*:\s*)(.*\\.*)$/i);
        if (prefixMatch) {
            return prefixMatch[1] + mask(`$${prefixMatch[2].trim()}$`);
        }
        return mask(`$${m.trim()}$`);
    });

    // Helper to format math operators (e.g. converting bare * to \times inside math)
    const formatMathOperators = (expr) => {
        return expr
            .replace(/\s*\*\s*/g, ' \\times ')
            .trim();
    };

    const formatExponent = (exp) => {
        const clean = exp.trim();
        return (clean.startsWith('(') && clean.endsWith(')')) ? clean.slice(1, -1) : clean;
    };

    const isMathy = (s) => /[0-9\+\-\*\^\=\\]|^[a-zA-Z]{1,3}$/.test(s.trim());

    // -----------------------------------------------------------------
    // 1) Fractions Phase
    // -----------------------------------------------------------------
    // 1a) Parenthesized Numerator AND Parenthesized Denominator: (2x+3)/(x-1), (9*8)/(9)
    str = str.replace(/\(([^()\n]{1,100})\)\/\(([^()\n]{1,100})\)/g, (m, num, den) => {
        if (!isMathy(num) && !isMathy(den)) return m;
        return mask(`$\\frac{${formatMathOperators(num.trim())}}{${formatMathOperators(den.trim())}}$`);
    });

    // 1b) Parenthesized Numerator with Bare Denominator: (2x+3)/9, (9*8)/9
    str = str.replace(/\(([^()\n]{1,100})\)\/([a-zA-Z0-9_\^\-]+)/g, (m, num, den) => {
        if (!isMathy(num) && !isMathy(den)) return m;
        return mask(`$\\frac{${formatMathOperators(num.trim())}}{${formatMathOperators(den.trim())}}$`);
    });

    // 1c) Bare Numerator with Parenthesized Denominator: 9/(x-1), 3^2/(x-1)
    str = str.replace(/([a-zA-Z0-9_\^\+\-\*\.\s]+)\/\(([^()\n]{1,100})\)/g, (m, num, den) => {
        if (!isMathy(num) && !isMathy(den)) return m;
        return mask(`$\\frac{${formatMathOperators(num.trim())}}{${formatMathOperators(den.trim())}}$`);
    });

    // 1d) Arithmetic products or powers in unparenthesized fraction: 9*8/9, 8*9/3, 3^2/9
    str = str.replace(/((?:[a-zA-Z0-9_\.]+\s*[\*\^]\s*)+[a-zA-Z0-9_\.]+)\/([a-zA-Z0-9_\^]+)/g, (m, num, den) => {
        return mask(`$\\frac{${formatMathOperators(num.trim())}}{${formatMathOperators(den.trim())}}$`);
    });

    // 1e) Inline parenthesized numeric fractions like (8/9) or (1/3)
    str = str.replace(/\(\s*([+-]?\d+(?:\.\d+)?)\s*\/\s*([+-]?\d+(?:\.\d+)?)\s*\)/g, (m, num, den) => {
        return mask(`$\\frac{${num}}{${den}}$`);
    });

    // 1f) Bare numeric fractions: 8/9, 1/3, 9/3
    str = str.replace(/\b(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\b/g, (m, num, den) => {
        return mask(`$\\frac{${num}}{${den}}$`);
    });

    // -----------------------------------------------------------------
    // 2) Exponents / Powers Phase
    // -----------------------------------------------------------------
    // 2a) Inverse function notation: f^-1, g^-1, f^-1(y)
    str = str.replace(/\b([a-zA-Z])\s*\^\s*-\s*1(\([a-zA-Z0-9_]+\))?/g, (m, fn, arg) => {
        return mask(`$${fn}^{-1}${arg || ''}$`);
    });

    // 2b) General powers: 3^2, x^2, y^3, (x+1)^2, 2^n
    str = str.replace(/(\([a-zA-Z0-9_\+\-\s]+\)|\b[a-zA-Z0-9_]+\b)\s*\^\s*(-?\d+|[a-zA-Z]|\([a-zA-Z0-9_\+\-]+\))/g, (m, base, exp) => {
        const cleanExp = formatExponent(exp);
        const expStr = (cleanExp.length === 1 && /^\d|[a-zA-Z]$/.test(cleanExp)) ? cleanExp : `{${cleanExp}}`;
        return mask(`$${base}^${expStr}$`);
    });

    // -----------------------------------------------------------------
    // 3) Bare Multiplication Phase (e.g. 9*8, 8*9, 2 * 3 * 4, a*b)
    // -----------------------------------------------------------------
    str = str.replace(/(?:\b|\d)[a-zA-Z0-9_\.]+(?:\s*\*\s*[a-zA-Z0-9_\.]+)+/g, (m) => {
        return mask(`$${formatMathOperators(m.trim())}$`);
    });

    // -----------------------------------------------------------------
    // 4) Set notation / Domain constraints: R\{1}, Z\{0}, N\{0}
    // -----------------------------------------------------------------
    str = str.replace(/\bR\s*\\\s*\{([0-9,\s]+)\}/g, (m, p) => mask(`$\\mathbb{R} \\setminus \\{${p}\\}$`));
    str = str.replace(/\bZ\s*\\\s*\{([0-9,\s]+)\}/g, (m, p) => mask(`$\\mathbb{Z} \\setminus \\{${p}\\}$`));
    str = str.replace(/\bN\s*\\\s*\{([0-9,\s]+)\}/g, (m, p) => mask(`$\\mathbb{N} \\setminus \\{${p}\\}$`));

    // -----------------------------------------------------------------
    // 5) Arrows & Inequalities Phase: <=>, =>, <->, ->, <=, >=
    // -----------------------------------------------------------------
    str = str.replace(/<=>/g, () => mask('$\\Leftrightarrow$'));
    str = str.replace(/=>/g,  () => mask('$\\Rightarrow$'));
    str = str.replace(/<->/g, () => mask('$\\leftrightarrow$'));
    str = str.replace(/->/g,  () => mask('$\\rightarrow$'));
    str = str.replace(/<=/g,  () => mask('$\\leq$'));
    str = str.replace(/>=/g,  () => mask('$\\geq$'));

    // -----------------------------------------------------------------
    // 6) Unmasking Phase
    // Restore all masked tokens recursively
    // -----------------------------------------------------------------
    let result = str;
    while (result.includes('\u0000MATH')) {
        result = result.replace(/\u0000MATH(\d+)\u0000/g, (_, i) => masks[Number(i)]);
    }

    return result;
}

/**
 * Small helper: escape a raw string so it is safe to put inside HTML.
 * Used for things that should NEVER be parsed as Markdown (Java source code,
 * user input, etc.) so KaTeX and the browser treat them as text.
 */
function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Convert raw Markdown text into safe HTML.
 * - Normalizes plain-text math (e.g. "(2x+3)/(x-1)", "=>", "R\{1}") into
 *   LaTeX delimiters via preprocessMathText().
 * - Parses Markdown via Marked (tables, headings, lists, code, etc.)
 * - Sanitizes via DOMPurify to prevent XSS.
 * - Falls back to escaped HTML if the libraries failed to load.
 *
 * Bug-fix audit: every question / option / model answer / explanation in the
 * quiz, lab, and result views flows through this function. No call site uses
 * textContent / innerText to render those fields, so Markdown tables and
 * other rich syntax will always reach the browser as HTML.
 */
function renderMarkdown(text) {
    if (text === null || text === undefined) return '';
    const raw = String(text);

    if (window.marked && window.DOMPurify) {
        try {
            // 1) plain-text math → LaTeX delimiters
            const withMath = preprocessMathText(raw);
            // 2) Markdown → HTML (this is what makes tables/headings render)
            const rawHtml  = marked.parse(withMath);
            // 3) sanitize against XSS
            return DOMPurify.sanitize(rawHtml, {
                ADD_ATTR: ['target', 'rel'],
                ADD_TAGS: ['iframe'] // not used by us, but allowed for completeness
            });
        } catch (e) {
            console.error('Markdown render error:', e);
        }
    }

    // Fallback: escape HTML so user content is at least safe.
    const div = document.createElement('div');
    div.textContent = raw;
    return div.innerHTML;
}

/**
 * Run KaTeX on the given element, but SKIP code/pre blocks so that `$` inside
 * fenced code is not interpreted as a math delimiter. The previous implementation
 * scanned the entire document body which meant `$` in a code sample could break
 * rendering.
 */
function renderMathInEl(el) {
    if (!el || !window.renderMathInElement) return;
    renderMathInElement(el, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$",  right: "$",  display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false,
        // Critical: ignore text inside <code> and <pre> elements.
        ignoreSelector: 'pre, code, .no-math'
    });
}

/**
 * Re-render math inside the whole app container (kept for backwards-compat
 * with existing call sites in script.js).
 */
function renderMath() {
    renderMathInEl(document.getElementById('app-container'));
}

/**
 * One-shot helper: render a markdown string into a target element, then run
 * KaTeX on that element. Use this whenever you want to display rich content.
 */
function renderRich(targetEl, markdownText) {
    if (!targetEl) return;
    targetEl.innerHTML = renderMarkdown(markdownText);
    renderMathInEl(targetEl);
}

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
        type: 'mcq', 
        selfCheckState: 'input'
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
        lecsMain: "Lectures", lecsSol: "Solutions", tutorials: "Tutorials",
        // --- TABS TRANSLATIONS ---
        labsMaterial: "Lab Slides", 
        labsQuestions: "Lab Questions", 
        codingTraining: "Coding Training",
        // -------------------------
        startLab: "Start Challenge", runCode: "Run Code", surrender: "Show Solution", 
        nextQ: "Next Question", understood: "I Understood",
        solving: "Compiling...", showHint: "💡 Show Hint", hideHint: "Hint Visible",
        mainClassAlertTitle: "⚠️ Naming Convention Error", 
        mainClassAlertBody: "The compiler requires the main class to be named <code>Main</code>.<br>Example:<br><code>public class Main { ... }</code>",
        inputPrompt: "This program requires input.",
        inputPlaceholder: "Enter values separated by space (e.g. 5 10)",
        correctTitle: "Excellent Work!", correctMsg: "Output matches expected result.",
        nextAuto: "Next question in 3s...",
        preview: "Document Preview", close: "Close",
        adminAccess: "Admin Access", login: "LOGIN", accessDenied: "Access Denied",
        quizReady: "Ready to test your knowledge?", startQuiz: "Start Quiz",
        qNum: "Question", flag: "Flag for Review", submit: "Submit Quiz", prev: "Previous", next: "Next",
        flagAlertTitle: "Unanswered Questions", flagAlertMsg: "You have flagged questions:", flagAlertBack: "Review", flagAlertAction: "Submit Anyway",
        resultTitle: "Quiz Results", timeTaken: "Time Taken", backCourse: "Back to Course", reason: "Explanation",
        showAnswer: "Show Model Answer", markCorrect: "I Was Correct ✅", markWrong: "I Was Wrong ❌", typeAnswer: "Type your answer here (optional)...",
        modelAnswer: "Model Answer:", exit: "Exit", questionsPalette: "Question Palette"
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
        lecsMain: "شرح المحاضرات", lecsSol: "حلول الأسئلة", tutorials: "السكاشن / التمارين",
        // --- TABS TRANSLATIONS ---
        labsMaterial: "ملفات الشرح", 
        labsQuestions: "أسئلة المعامل", 
        codingTraining: "تدريبات برمجية",
        // -------------------------
        startLab: "بدء التحدي", runCode: "تشغيل الكود", surrender: "إظهار الحل", 
        nextQ: "السؤال التالي", understood: "فهمت الفكرة",
        solving: "جاري المعالجة...", showHint: "💡 تلميح", hideHint: "التلميح ظاهر",
        mainClassAlertTitle: "⚠️ خطأ في التسمية", 
        mainClassAlertBody: "عشان الكود يشتغل هنا، لازم اسم الكلاس يكون <code>Main</code>.<br>مثال:<br><code>public class Main { ... }</code>",
        inputPrompt: "البرنامج يحتاج مدخلات (Input).",
        inputPlaceholder: "ادخل القيم وافصل بمسافة (مثال: 5 10)",
        correctTitle: "عمل رائع!", correctMsg: "النتيجة مطابقة للمطلوب.",
        nextAuto: "السؤال التالي خلال 3 ثواني...",
        preview: "عرض الملف", close: "إغلاق",
        adminAccess: "دخول المشرفين", login: "دخول", accessDenied: "بيانات خاطئة",
        quizReady: "جاهز تختبر معلوماتك؟", startQuiz: "بدء الاختبار",
        qNum: "سؤال", flag: "تحديد للمراجعة", submit: "إنهاء الاختبار", prev: "السابق", next: "التالي",
        flagAlertTitle: "أسئلة معلقة", flagAlertMsg: "قمت بتحديد الأسئلة التالية:", flagAlertBack: "مراجعة", flagAlertAction: "إنهاء وتصحيح",
        resultTitle: "نتيجة الاختبار", timeTaken: "الوقت المستغرق", backCourse: "عودة للمادة", reason: "التفسير",
        showAnswer: "عرض الإجابة النموذجية", markCorrect: "إجابتي صحيحة ✅", markWrong: "إجابتي خاطئة ❌", typeAnswer: "اكتب إجابتك هنا (اختياري)...",
        modelAnswer: "الإجابة النموذجية:", exit: "خروج", questionsPalette: "لوحة التنقل بين الأسئلة"
    }
};

function t(key) { 
    const val = translations[appState.lang][key];
    return val !== undefined ? val : key; 
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
    
    // ⧈ NEW: Smart Filtering System supporting multiple placements
    const filteredSubjects = db.subjects.filter(sub => {
        if (sub.placements) {
            return sub.placements.some(p => 
                (p.major === 'shared' || p.major === appState.major) && 
                p.year === appState.year && 
                p.term === appState.term
            );
        }
        return (sub.type === 'shared' || sub.type === appState.major) && 
               sub.year === appState.year && 
               sub.term === appState.term;
    });

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
    
    let tabs = sub.material.map(m => `<button class="tab-btn ${m === appState.activeTab ? 'active' : ''}" onclick="appState.activeTab='${m}'; appState.subFilter=null; renderSubjectView()">${t(m)}</button>`).join('');
    
    let content = "";

    // ⧈ START: NEW SPLIT LAB LOGIC
    if(appState.activeTab === 'labs') {
        const hasQuestions = sub.content.labs.questions && Object.keys(sub.content.labs.questions).length > 0;
        
        if (!hasQuestions) {
            const files = Array.isArray(sub.content.labs) ? sub.content.labs : sub.content.labs.material;
            content = renderFileList(files);
        } else {
            if(!appState.subFilter) {
                // Determine if coding exercises exist
                const hasCoding = sub.content.labs.questions.coding_list && sub.content.labs.questions.coding_list.length > 0;
                
                content = `
                <div class="grid-center">
                    <div class="selection-card" onclick="appState.subFilter='material'; renderSubjectView()">
                        <i class="fas fa-book-reader card-icon"></i>
                        <h3>${t('labsMaterial')}</h3>
                    </div>
                    <div class="selection-card" onclick="appState.subFilter='labs_list'; renderSubjectView()">
                        <i class="fas fa-flask card-icon"></i>
                        <h3>${t('labsQuestions')}</h3>
                    </div>
                    ${hasCoding ? `
                    <div class="selection-card" onclick="appState.subFilter='coding_list'; renderSubjectView()">
                        <i class="fas fa-laptop-code card-icon"></i>
                        <h3>${t('codingTraining')}</h3>
                    </div>` : ''}
                </div>`;
            } else {
                if (appState.subFilter === 'material') content = renderFileList(sub.content.labs.material);
                else if (appState.subFilter === 'labs_list') content = renderLabList(sub.content.labs.questions.labs_list);
                else if (appState.subFilter === 'coding_list') content = renderLabList(sub.content.labs.questions.coding_list);
            }
        }
    } else if(appState.activeTab === 'summary' && !Array.isArray(sub.content.summary)) {
        const hasEnSummary = sub.content.summary.en && sub.content.summary.en.length > 0;
        if (!hasEnSummary) {
            content = renderFileList(sub.content.summary.ar);
        } else {
            if(!appState.subFilter) content = `<div class="grid-center"><div class="selection-card" onclick="appState.subFilter='ar'; renderSubjectView()"><i class="fas fa-language card-icon"></i><h3>${t('arSec')}</h3></div><div class="selection-card" onclick="appState.subFilter='en'; renderSubjectView()"><i class="fas fa-globe card-icon"></i><h3>${t('enSec')}</h3></div></div>`;
            else content = renderFileList(appState.subFilter === 'ar' ? sub.content.summary.ar : sub.content.summary.en);
        }
    } else if(appState.activeTab === 'lecs' && !Array.isArray(sub.content.lecs)) {
        if(!appState.subFilter) content = `<div class="grid-center"><div class="selection-card" onclick="appState.subFilter='main'; renderSubjectView()"><i class="fas fa-chalkboard-teacher card-icon"></i><h3>${t('lecsMain')}</h3></div><div class="selection-card" onclick="appState.subFilter='solutions'; renderSubjectView()"><i class="fas fa-check-circle card-icon"></i><h3>${t('lecsSol')}</h3></div></div>`;
        else content = renderFileList(appState.subFilter === 'main' ? sub.content.lecs.main : sub.content.lecs.solutions);
    } else if (appState.activeTab === 'quiz') { 
        if (sub.content.quiz && sub.content.quiz.isSplit) {
            content = `<div class="dashboard-grid">
                ${sub.content.quiz.sections.map(sect => `
                    <div class="subject-card" onclick="startQuiz('${sect.id}', '${sect.type}')">
                        <div style="margin-bottom:10px; font-size:2rem; color:var(--accent);">
                            <i class="fas ${sect.type === 'text' ? 'fa-pen-alt' : (sect.type === 'tf' ? 'fa-check-double' : 'fa-list-ul')}"></i>
                        </div>
                        <h3>${sect.title}</h3>
                        <p style="color:var(--text-secondary); font-size:0.9rem;">${sect.qCount} Questions</p>
                        <button class="btn-start-lab">${t('startQuiz')}</button>
                    </div>`).join('')}
            </div>`;
        } else if (Array.isArray(sub.content.quiz) && sub.content.quiz.length > 0 && sub.content.quiz[0].link) {
            content = renderFileList(sub.content.quiz);
        } else {
            content = `<div style="text-align:center; padding:3rem;">
                <h2 style="margin-bottom:1rem; color:var(--white);">${t('quizReady')}</h2>
                <button class="btn-start-lab" style="max-width:200px;" onclick="startQuiz()">${t('startQuiz')}</button>
            </div>`; 
        }
    } else {
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
        let iconClass = 'fa-file-pdf';
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
    if (!sub) return;

    // ⧈ NEW: Determine where the questions are coming from (lab_X)
    let questions = sub.content.labs.questions['lab_'+id];
    
    // Safety check
    if (!questions) return;

    appState.lab = { active: true, id: id, questions: questions, currentQIndex: 0, time: 0, userCode: "", surrendered: false };
    if(labTimerInterval) clearInterval(labTimerInterval);
    labTimerInterval = setInterval(() => { appState.lab.time++; const tEl = document.getElementById('timer'); if(tEl) tEl.innerText = formatTime(appState.lab.time); }, 1000);
    renderLabQuestion();
}

function renderLabQuestion() {
    appState.view = 'lab';
    const q = appState.lab.questions[appState.lab.currentQIndex];
    if(typeof appState.lab.userCode === 'undefined' || appState.lab.userCode === "") appState.lab.userCode = ""; 
    
    // Render the prompt and hint as Markdown + sanitized HTML so that tables,
    // math, code blocks, bold/italic etc. all show up formatted.
    const promptHtml  = renderMarkdown(q.prompt || '');
    const hintHtml    = renderMarkdown(q.hint   || '');
    
    // ⧈ NEW: Test Case Instruction Block
    let instructionHtml = '';
    if (q.testCaseInputs) {
        // ⧈ USER UX: Show the student what's happening without confusing them ⧈
        instructionHtml = `
            <div style="background: rgba(0, 169, 255, 0.1); border-left: 3px solid var(--accent); padding: 10px; margin-bottom: 15px; font-size: 0.9em; color: var(--text-primary); border-radius: 4px;">
                <i class="fas fa-robot" style="margin-right:8px; color:var(--accent);"></i>
                <strong>Automated Test:</strong> The system will automatically inject this input:<br>
                <span style="color:var(--white); font-family:monospace; background:rgba(0,0,0,0.3); padding:2px 6px; border-radius:3px; display:inline-block; margin-top:5px;">${q.testCaseInputs}</span>
                <div style="margin-top:5px; font-size:0.85em; color:var(--text-secondary);">
                    <em>(You don't need to type this yourself when running the code)</em>
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="lab-arena">
            <div class="lab-header"><h3>Lab ${appState.lab.id} - Q ${appState.lab.currentQIndex + 1} / ${appState.lab.questions.length}</h3><div class="timer-box" id="timer">${formatTime(appState.lab.time)}</div><button class="btn-back" style="margin:0;" onclick="exitLab()"><i class="fas fa-times"></i> Exit</button></div>
            <div class="lab-workspace" id="workspace">
                <div class="problem-pane">
                    ${instructionHtml}
                    <h4 style="color:var(--accent); margin-bottom:1rem;">Task:</h4>
                    <div class="md-content" style="line-height:1.6; font-size:1.1rem;">${promptHtml}</div>
                    <div style="margin-top:2rem;"><button class="btn-view" style="width:100%; justify-content:center;" onclick="showHint()" id="hint-btn">${t('showHint')}</button><div id="hint-box" class="md-content" style="display:none; margin-top:10px; background:rgba(0,0,0,0.2); padding:1rem; border-radius:8px; border:1px solid var(--border);"><strong style="color:var(--warning);">Hint:</strong> ${hintHtml}</div></div>
                </div>
                <div class="editor-pane">
                    <textarea class="code-editor" id="code-input" spellcheck="false" placeholder="// Write Java code here...\n// class MUST be named 'Main'" oninput="appState.lab.userCode = this.value">${appState.lab.userCode}</textarea>
                    <div class="lab-controls"><button class="btn-surrender" onclick="surrender()"><i class="fas fa-flag"></i> ${t('surrender')}</button><button class="btn-run" onclick="runLabCode()"><i class="fas fa-play"></i> ${t('runCode')}</button></div>
                    <div class="console-output" id="console-out">// Output...</div>
                </div>
            </div>
            
            <div class="compare-container" id="compare-view" style="flex-direction: column; align-items: center;">
                <div class="lab-compare-box" style="display: flex; gap: 15px; width: 100%; min-height: 400px;">
                    <div class="lab-answer-window correct" style="flex: 1; padding: 15px; border-radius: 8px; background: rgba(16, 185, 129, 0.1); border: 2px solid var(--success); overflow-y: auto; color: var(--text-primary);">
                        <h4 style="color:var(--success); margin-bottom:10px;">Solution:</h4>
                        <pre style="white-space: pre-wrap; margin:0;"><code>${escapeHtml(q.solutionCode || '')}</code></pre>
                    </div>
                    <div class="lab-answer-window student" style="flex: 1; padding: 15px; border-radius: 8px; background: rgba(239, 68, 68, 0.1); border: 2px solid var(--danger); overflow-y: auto; color: var(--text-primary);">
                        <h4 style="color:var(--danger); margin-bottom:10px;">Your Code:</h4>
                        <pre id="static-user-code" style="white-space: pre-wrap; margin:0;"></pre>
                    </div>
                </div>
                <div style="margin-top: 20px; width: 100%; text-align: center;">
                    <button class="btn-run" style="width:auto; padding: 10px 30px;" onclick="nextLabQ()">
                        ${t('understood')} <i class="fas fa-check"></i>
                    </button>
                </div>
            </div>

        </div>
        
        <div id="input-modal" class="modal-overlay">
            <div class="input-modal-content" style="max-height: 80vh; overflow-y: auto;">
                <h3 style="color:var(--white); margin-bottom:1rem; border-bottom:1px solid var(--border); padding-bottom:10px;">
                    ⌨️ Program Input
                </h3>
                <div id="dynamic-inputs-container"></div>
                <button id="add-input-btn" class="btn-view" style="width:100%; justify-content:center; margin-bottom:15px; border-style:dashed; display:none;">
                    <i class="fas fa-plus"></i> Add More Input
                </button>
                <button class="btn-run" onclick="resolveInput()" style="width:100%; justify-content:center;">Submit & Run</button>
            </div>
        </div>

        <div id="main-class-alert" class="modal-overlay"><div class="input-modal-content warning-modal"><h2 style="color:var(--warning); margin-bottom:1rem;">${t('mainClassAlertTitle')}</h2><p style="color:var(--text-primary); margin-bottom:1.5rem; line-height:1.5;">${t('mainClassAlertBody')}</p><button class="btn-confirm" onclick="document.getElementById('main-class-alert').style.display='none'">OK, I'll Fix it</button></div></div>
    `;
    // Run KaTeX on the freshly inserted prompt and hint areas only (the rest
    // of the page has nothing to render and the solution code is inside <pre>
    // so KaTeX will correctly skip it).
    const problemPane = container.querySelector('.problem-pane');
    if (problemPane) renderMathInEl(problemPane);
}

// ⧈ GENIUS INPUT SYSTEM
function analyzeInputRequirements(code) {
    const cleanCode = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "");
    let inputFields = [];
    const regex = /(?:(\w+)\s*=\s*)?[\w.]+\.next(Int|Double|Line|Float|Boolean|Long|Short|Byte)\s*\(/g;
    let match;
    while ((match = regex.exec(cleanCode)) !== null) {
        inputFields.push({
            label: match[1] || `Input ${inputFields.length + 1}`, 
            type: match[2] 
        });
    }
    const hasLoop = /\b(for|while|do)\b/.test(cleanCode);

    return { inputs: inputFields, hasLoop: hasLoop };
}

function getInputFromUser(analysis) { 
    return new Promise((resolve) => { 
        const modal = document.getElementById('input-modal');
        const container = document.getElementById('dynamic-inputs-container');
        const addBtn = document.getElementById('add-input-btn');
        container.innerHTML = '';
        
        let fieldsToRender = analysis && analysis.inputs.length > 0 ? analysis.inputs : [{label: 'Input', type: 'Value'}];
        fieldsToRender.forEach((field, index) => {
            addInputField(container, field.label, field.type, index === 0);
        });

        if (analysis && analysis.hasLoop) {
            addBtn.style.display = 'inline-block';
            addBtn.onclick = () => addInputField(container, 'Next Iteration', 'Value', false);
        } else {
            addBtn.style.display = 'none';
        }

        modal.style.display = 'flex'; 
        inputResolve = resolve; 
    }); 
}

function addInputField(container, labelText, type, focus) {
    const div = document.createElement('div');
    div.className = 'input-group';
    div.style.marginBottom = '10px';
    div.style.textAlign = 'left';
    
    const label = document.createElement('label');
    label.innerText = `Enter ${labelText} (${type}):`;
    label.style.display = 'block';
    label.style.color = 'var(--text-secondary)';
    label.style.fontSize = '0.9rem';
    label.style.marginBottom = '5px';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'custom-input-field dynamic-input';
    input.style.width = '100%';
    input.placeholder = `e.g. ${type === 'Line' ? 'Hello World' : '10'}`;
    
    if(focus) setTimeout(() => input.focus(), 100);

    div.appendChild(label);
    div.appendChild(input);
    container.appendChild(div);
}

let inputResolve = null;
function resolveInput() { 
    const inputs = document.querySelectorAll('.dynamic-input');
    let values = [];
    inputs.forEach(input => {
        if(input.value.trim() !== "") values.push(input.value.trim());
    });
    const finalStdin = values.join('\n');
    document.getElementById('input-modal').style.display = 'none'; 
    if(inputResolve) inputResolve(finalStdin); 
}

function showHint() { document.getElementById('hint-box').style.display = 'block'; const btn = document.getElementById('hint-btn'); btn.innerHTML = t('hideHint'); btn.disabled = true; btn.style.opacity = "0.7"; }

/**
 * ⧈ Smart Judge System
 * Helper function to validate numerical or text answers flexibly.
 */
function smartCompare(userOutput, expectedOutput) {
    if (!expectedOutput) return true; // No requirement check
    
    // Clean inputs
    let uClean = userOutput ? userOutput.toString() : "";
    let eClean = expectedOutput.toString().trim();

    // 1. Text Check (if expected is not a number)
    if (isNaN(parseFloat(eClean))) {
        return uClean.toLowerCase().includes(eClean.toLowerCase());
    }

    // 2. Numeric Check (Regex to find all numbers)
    let expectedNum = parseFloat(eClean);
    let userNumbers = uClean.match(/-?\d+(\.\d+)?/g);

    if (!userNumbers) return false;

    // Tolerance (0.1 for float differences)
    const EPSILON = 0.1;
    return userNumbers.some(numStr => {
        let detectedNum = parseFloat(numStr);
        return Math.abs(detectedNum - expectedNum) < EPSILON;
    });
}

async function runLabCode() {
    const userCode = document.getElementById('code-input').value;
    const consoleOut = document.getElementById('console-out');
    const q = appState.lab.questions[appState.lab.currentQIndex];

    if (!userCode.match(/class\s+Main\b/)) { document.getElementById('main-class-alert').style.display = 'flex'; return; }

    // ⧈ Anti-Cheat: Source Code Analysis (NEW 🛡️)
    if (q.codePatterns && q.codePatterns.length > 0) {
        const missingPatterns = q.codePatterns.filter(pattern => !userCode.includes(pattern));
        if (missingPatterns.length > 0) {
            consoleOut.innerHTML = `<span style="color:var(--warning);">⚠️ Logic Check Failed:</span>\nYour code seems to be missing required logic (e.g., ${missingPatterns[0]}).\nMake sure you are following the requirements, not just printing the answer!`;
            return;
        }
    }

    let stdin = "";
    // ⧈ AUTO-INJECTION LOGIC ⧈
    if (q.testCaseInputs) {
         stdin = q.testCaseInputs;
         consoleOut.innerHTML = `<span style="color:var(--text-secondary); font-size:0.85em;">> Auto-injecting test inputs...</span>\n`;
    } 
    else if (userCode.includes("Scanner") || userCode.includes("System.in")) { 
        const analysis = analyzeInputRequirements(userCode);
        stdin = await getInputFromUser(analysis); 
    }

    consoleOut.innerHTML += `<span style="color:var(--accent);">⏳ ${t('solving')}</span>`;
    try {
        const response = await fetch('https://emkc.org/api/v2/piston/execute', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ language: "java", version: "15.0.2", files: [{ name: "Main.java", content: userCode }], stdin: stdin }) });
        const result = await response.json();
        if (result.run) {
            let output = result.run.output || "";
            let cleanOutput = output.trim();

            if (result.run.stderr) { consoleOut.innerHTML = `<span style="color:var(--danger);">❌ Error:\n${result.run.stderr}</span>`; } 
            else {
                // ⧈ NEW: Use Smart Judge Logic
                let isCorrect = false;
                
                if (q.expectedOutput) {
                    isCorrect = smartCompare(cleanOutput, q.expectedOutput);
                } 
                else if (q.validationKeywords && q.validationKeywords.length > 0) { 
                    const normOut = cleanOutput.toLowerCase(); 
                    const allKeywordsFound = q.validationKeywords.every(k => normOut.includes(k.toLowerCase()));
                    const isLengthReasonable = cleanOutput.length < 500; 
                    isCorrect = allKeywordsFound && isLengthReasonable;
                } 
                else { 
                    consoleOut.innerHTML = `<span style="color:var(--warning);">⚠️ Executed (No Validation):</span>\n${output}`; return; 
                }
                
                if (isCorrect) { 
                    consoleOut.innerHTML = `<span style="color:var(--success);">✅ ${t('correctMsg')}</span>\n${output}\n<span style="color:var(--accent); display:block; margin-top:10px; font-weight:bold;">${t('nextAuto')}</span>`; 
                    celebrateSuccess(); 
                    // Auto-Next Logic
                    setTimeout(() => { if(appState.lab.active) nextLabQ(); }, 3000); 
                } 
                else { 
                    consoleOut.innerHTML = `<span style="color:var(--warning);">⚠️ Output Mismatch. Check requirements.</span>\nYour Output:\n${output}`; 
                }
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

// ⧈ NEW LAB COMPLETION LOGIC
function nextLabQ() { 
    if (appState.lab.currentQIndex < appState.lab.questions.length - 1) { 
        appState.lab.currentQIndex++; 
        appState.lab.userCode = ""; 
        appState.lab.surrendered = false; 
        renderLabQuestion(); 
    } else { 
        showLabCompletionModal(); 
    } 
}

function showLabCompletionModal() {
    celebrateSuccess();
    setTimeout(celebrateSuccess, 500);
    const modal = document.createElement('div');
    modal.id = 'completion-modal';
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    modal.style.animation = 'fadeIn 0.3s ease-out';
    modal.innerHTML = `
        <div class="input-modal-content" style="text-align:center; border-top: 5px solid var(--success);">
            <div style="font-size: 4rem; margin-bottom: 10px;">🏆</div>
            <h2 style="color:var(--white); margin-bottom:0.5rem; font-size:1.8rem;">Mission Accomplished!</h2>
            <p style="color:var(--text-secondary); margin-bottom:2rem; font-size:1.1rem;">
                Excellent work. You have successfully completed this lab module.
            </p>
            <button class="btn-run" onclick="finishLab()" style="width:100%; justify-content:center; padding:12px; font-size:1.1rem;">
                Return to Dashboard <i class="fas fa-arrow-right" style="margin-left:10px;"></i>
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function finishLab() {
    const modal = document.getElementById('completion-modal');
    if(modal) modal.remove();
    exitLab();
}

// ⧈ FIXED: Proper Exit Function to reset state
function exitLab() { 
    clearIntervals(); 
    appState.lab.active = false; 
    // We don't reset subFilter here so user goes back to the list they were in
    renderSubjectView(); 
}

// ⧈ FIXED: Added exitQuiz function which was missing
function exitQuiz() {
    if(typeof quizTimerInterval !== 'undefined') clearInterval(quizTimerInterval);
    appState.quiz.active = false;
    appState.quiz.currentQuestionIndex = 0;
    appState.quiz.userAnswers = {};
    appState.quiz.flagged = new Set();
    renderSubjectView();
}

// --- Enhanced Quiz System ---
let quizTimerInterval;
function startQuiz(sectionId, type = 'mcq') { 
    const sub = db.subjects.find(s => s.id === appState.currentSubjectId); 
    let questions = [];

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
        type: type, 
        selfCheckState: 'input'
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
    
    let contentBody = '';
    let navButtons = '';

    if (appState.quiz.type === 'mcq') {
        const questionHtml = renderMarkdown(q.question || '');
        contentBody = `
            <div class="md-content" style="margin-bottom:1rem; color:var(--white); line-height:1.5;">${questionHtml}</div>
            <div class="options-grid">
                ${q.options.map((opt, i) => `
                    <label class="option-label">
                        <input type="radio" name="q${q.id}" value="${i}" 
                            ${appState.quiz.userAnswers[index] === i ? 'checked' : ''} 
                            onchange="saveAnswer(${index}, ${i})"> 
                        <span class="md-content" style="margin-left:10px;">${renderMarkdown(opt || '')}</span>
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
        const savedAnswer = appState.quiz.userAnswers[index]?.text || "";
        const isChecked = appState.quiz.userAnswers[index]?.checked || false;
        const questionHtml = renderMarkdown(q.question || '');
        const modelAnswerHtml = renderMarkdown(q.model_answer || '');
        
        if (!isChecked) {
            contentBody = `
                <div class="md-content" style="margin-bottom:1rem; color:var(--white); line-height:1.5;">${questionHtml}</div>
                <textarea id="text-answer" class="code-editor" style="height:150px; width:100%;" placeholder="${t('typeAnswer')}">${escapeHtml(savedAnswer)}</textarea>
                <div style="text-align:center; margin-top:20px;">
                    <button class="btn-run" style="width:auto; display:inline-flex;" onclick="showModelAnswer(${index})">${t('showAnswer')}</button>
                </div>
            `;
        } else {
            contentBody = `
                <div class="md-content" style="margin-bottom:1rem; color:var(--white); line-height:1.5;">${questionHtml}</div>
                <div class="self-check-area">
                    <p style="color:var(--text-secondary); margin-bottom:5px;">Your Answer:</p>
                    <div class="md-content" style="background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; margin-bottom:15px;">${renderMarkdown(savedAnswer || 'No answer typed.')}</div>
                    
                    <p style="color:var(--success); margin-bottom:5px;">${t('modelAnswer')}</p>
                    <div class="md-content model-answer-box">${modelAnswerHtml}</div>
                    
                    <div class="action-buttons">
                        <button class="btn-wrong" onclick="markSelfCheck(${index}, false)">${t('markWrong')}</button>
                        <button class="btn-correct" onclick="markSelfCheck(${index}, true)">${t('markCorrect')}</button>
                    </div>
                </div>
            `;
        }
        navButtons = '';

    } else if (appState.quiz.type === 'tf') {
        const userAnswer = appState.quiz.userAnswers[index]; 
        const isAnswered = userAnswer && userAnswer.checked;
        
        let feedbackHtml = '';
        if (isAnswered) {
            const isCorrect = userAnswer.isCorrect;
            const explanationHtml = renderMarkdown(q.explanation || 'No explanation available.');
            feedbackHtml = `
                <div class="tf-feedback ${isCorrect ? 'success' : 'error'}" style="margin-top:20px; padding:15px; border-radius:8px; background:${isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border-left:4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                    <h4 style="color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:5px;">
                        ${isCorrect ? t('correctTitle') : t('markWrong')}
                    </h4>
                    <div class="md-content" style="color:var(--text-primary); line-height:1.6;">${explanationHtml}</div>
                </div>
            `;
        }

        const tfQuestionHtml = renderMarkdown(q.question || '');
        contentBody = `
            <div class="md-content" style="margin-bottom:1.5rem; color:var(--white); line-height:1.5;">${tfQuestionHtml}</div>
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
            
            <div id="quiz-palette-wrapper">${renderQuestionPalette()}</div>
            
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
    // Run KaTeX on the quiz content area only (so we don't accidentally re-process
    // modals, buttons, or the answer <textarea>).
    const quizContent = container.querySelector('.quiz-container');
    if (quizContent) renderMathInEl(quizContent);
}

function showModelAnswer(index) {
    const userText = document.getElementById('text-answer').value;
    appState.quiz.userAnswers[index] = { text: userText, checked: true };
    renderQuestion(index); 
}

function markSelfCheck(index, isCorrect) {
    appState.quiz.userAnswers[index].isCorrect = isCorrect;
    if (isCorrect) celebrateSuccess(); 
    
    if (index < appState.quiz.questions.length - 1) {
        renderQuestion(index + 1);
    } else {
        appState.quiz.active = false;
        renderQuizResult();
    }
}

function handleTFAnswer(index, val) {
    const q = appState.quiz.questions[index];
    const isCorrect = (val === q.answer);
    appState.quiz.userAnswers[index] = { val: val, checked: true, isCorrect: isCorrect };
    if(isCorrect) celebrateSuccess();
    renderQuestion(index);
}

function toggleFlag(index) { 
    if(appState.quiz.flagged.has(index)) appState.quiz.flagged.delete(index); else appState.quiz.flagged.add(index); 
    renderQuestion(index); 
}
function saveAnswer(qIndex, ansIndex) { 
    appState.quiz.userAnswers[qIndex] = ansIndex; 
    updatePaletteDOM();
}
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
        
        if(!isCorrect && appState.quiz.type === 'mcq') {
            const explanationRaw = appState.lang === 'ar' ? (q.explanation_ar||q.explanation_en) : q.explanation_en;
            reportHtml += `
                <div class="file-item" style="display:block; border-color:var(--danger); margin-bottom:1rem;">
                    <h4 class="md-content" style="margin-bottom:0.5rem; color:var(--text-primary);">Q${index+1}: ${renderMarkdown(q.question || '')}</h4>
                    <p class="md-content" style="color:var(--danger); margin-bottom:0.3rem;">Your Answer: ${renderMarkdown(userAnswerText)}</p>
                    <p class="md-content" style="color:var(--success); margin-bottom:0.5rem;">Correct Answer: ${renderMarkdown(q.options[q.answer] || '')}</p>
                    <small style="color:var(--text-secondary); display:block; background:rgba(255,255,255,0.05); padding:10px; border-radius:5px;">
                        <i class="fas fa-info-circle"></i> ${t('reason')}: <span class="md-content" style="display:inline;">${renderMarkdown(explanationRaw || '')}</span>
                    </small>
                </div>`; 
        } else if (!isCorrect && appState.quiz.type === 'tf') {
            reportHtml += `
                <div class="file-item" style="display:block; border-color:var(--danger); margin-bottom:1rem;">
                    <h4 class="md-content" style="margin-bottom:0.5rem; color:var(--text-primary);">Q${index+1}: ${renderMarkdown(q.question || '')}</h4>
                    <p style="color:var(--danger); margin-bottom:0.3rem;">Result: Wrong ❌</p>
                    <small style="color:var(--text-secondary); display:block; background:rgba(255,255,255,0.05); padding:10px; border-radius:5px;">
                        <i class="fas fa-info-circle"></i> ${t('reason')}: <span class="md-content" style="display:inline;">${renderMarkdown(q.explanation || 'No explanation')}</span>
                    </small>
                </div>`;
        } else if (appState.quiz.type === 'text') {
             reportHtml += `
                <div class="file-item" style="display:block; border-color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:1rem;">
                    <h4 class="md-content" style="margin-bottom:0.5rem; color:var(--text-primary);">Q${index+1}: ${renderMarkdown(q.question || '')}</h4>
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
    // Run KaTeX over the whole result area (questions, options, explanations).
    const resultArea = container.querySelector('.quiz-container');
    if (resultArea) renderMathInEl(resultArea);
}

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

// ======================================================
// PART: BUG REPORTING & TELEGRAM INTEGRATION (FIXED)
// ======================================================
// ⚠️ استبدل القيم دي ببياناتك الحقيقية
const TELEGRAM_BOT_TOKEN = '8661536097:AAGU5-xthbxD_rfEaKT145QzwdlSIBYUqak'; 
const TELEGRAM_CHAT_ID = '1158505343'; 

let currentScreenshotBlob = null;

// --- 1. Custom Notification System (Toast) ---
function showToast(message, type = 'success') {
    // لو فيه توست قديم نشيله
    const oldToast = document.getElementById('custom-toast');
    if(oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? 'var(--success)' : 'var(--danger)'};
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: inherit;
        display: flex;
        align-items: center;
        gap: 10px;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
    `;
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> <span>${message}</span>`;
    
    document.body.appendChild(toast);

    // Animation
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(-10px)';
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- 2. Modal Functions ---
function openReportModal() { document.getElementById('report-modal').style.display = 'flex'; }
function closeReportModal() {
    document.getElementById('report-modal').style.display = 'none';
    document.getElementById('report-text').value = '';
    document.getElementById('screenshot-preview').style.display = 'none';
    currentScreenshotBlob = null;
    const btn = document.getElementById('btn-screenshot');
    btn.innerHTML = '<i class="fas fa-camera"></i> أخذ لقطة للموقع';
    btn.classList.remove('btn-disabled'); // Reset style if needed
}

// --- 3. Screenshot Logic (Fixed) ---
async function takeScreenshot() {
    const btn = document.getElementById('btn-screenshot');
    if(typeof html2canvas === 'undefined') {
        showToast("خطأ: مكتبة التصوير غير محملة", "error");
        return;
    }

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري المعالجة...';
    
    try {
        document.getElementById('report-modal').style.display = 'none'; // Hide modal
        
        // التغيير هنا: بنصور الكونتينر الأساسي بدل الـ body كله لتجنب المشاكل
        const target = document.getElementById('app-container') || document.body;
        
        const canvas = await html2canvas(target, {
            useCORS: true,       // عشان الصور الخارجية
            allowTaint: true,
            logging: false,
            scale: 0.8,          // تقليل الجودة قليلاً للسرعة
            backgroundColor: '#0a192f' // لون الخلفية عشان لو ظهرت شفافة
        });
        
        document.getElementById('report-modal').style.display = 'flex'; // Show modal back

        canvas.toBlob((blob) => {
            if(!blob) throw new Error("فشل تحويل الصورة");
            currentScreenshotBlob = blob;
            const url = URL.createObjectURL(blob);
            document.getElementById('screenshot-img').src = url;
            document.getElementById('screenshot-preview').style.display = 'block';
            btn.innerHTML = '<i class="fas fa-check"></i> تم الالتقاط';
            showToast("تم التقاط الصورة بنجاح");
        }, 'image/jpeg', 0.7);

    } catch (error) {
        console.error(error);
        document.getElementById('report-modal').style.display = 'flex';
        btn.innerHTML = '<i class="fas fa-times"></i> إعادة المحاولة';
        showToast("فشل التقاط الصورة.. جرب مرة أخرى", "error");
    }
}

// --- 4. Sending Logic (Enhanced) ---
async function sendReport() {
    const text = document.getElementById('report-text').value.trim();
    if (!text && !currentScreenshotBlob) {
        showToast("اكتب المشكلة أو خد سكرين شوت الأول!", "error");
        return;
    }

    const btn = document.getElementById('btn-send-report');
    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    btn.disabled = true;

    const currentPath = `View: ${appState.view} | Subject: ${appState.currentSubjectId || 'N/A'}`;
    const caption = `🚨 <b>بلاغ جديد</b>\n\n📝 <b>الوصف:</b> ${text || 'بدون'}\n📍 <b>المكان:</b> <code>${currentPath}</code>`;

    try {
        let response;
        
        if (currentScreenshotBlob) {
            const formData = new FormData();
            formData.append('chat_id', TELEGRAM_CHAT_ID);
            formData.append('photo', currentScreenshotBlob, 'screenshot.jpg');
            formData.append('caption', caption);
            formData.append('parse_mode', 'HTML');

            response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
                method: 'POST',
                body: formData
            });
        } else {
            response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: caption,
                    parse_mode: 'HTML'
                })
            });
        }

        const data = await response.json();
        
        if (data.ok) {
            showToast("تم استلام البلاغ.. شكراً لك! 🚀");
            setTimeout(closeReportModal, 1500);
        } else {
            throw new Error(data.description || "خطأ من تيليجرام");
        }

    } catch (error) {
        console.error("Telegram Error:", error);
        showToast("فشل الإرسال: تأكد من الإنترنت", "error");
    } finally {
        btn.innerHTML = originalBtnText;
        btn.disabled = false;
    }
}

// --- Question Navigation Palette Helpers ---
function renderQuestionPalette() {
    let totalQuestions = 0;
    let currentIndex = 0;
    let userAnswers = {};
    let flaggedSet = new Set();
    let isLab = false;

    if (appState.view === 'quiz' && appState.quiz && appState.quiz.active) {
        totalQuestions = appState.quiz.questions.length;
        currentIndex = appState.quiz.currentQuestionIndex;
        userAnswers = appState.quiz.userAnswers || {};
        flaggedSet = appState.quiz.flagged || new Set();
    } else if (appState.view === 'lab' && appState.lab && appState.lab.active) {
        totalQuestions = appState.lab.questions.length;
        currentIndex = appState.lab.currentQIndex;
        userAnswers = appState.lab.userAnswers || {};
        isLab = true;
    }

    if (totalQuestions <= 1) return '';

    let badgesHtml = '';
    for (let i = 0; i < totalQuestions; i++) {
        let isCurrent = (i === currentIndex);
        let isFlagged = flaggedSet.has(i);
        let isAnswered = false;

        if (isLab) {
            isAnswered = (userAnswers[i] !== undefined && userAnswers[i] !== null && userAnswers[i] !== "");
        } else {
            const ans = userAnswers[i];
            if (ans !== undefined && ans !== null) {
                if (typeof ans === 'object') {
                    isAnswered = ans.checked || (ans.text && ans.text.trim().length > 0) || (ans.val !== undefined);
                } else {
                    isAnswered = true;
                }
            }
        }

        let stateClass = 'badge-unanswered';
        if (isCurrent) {
            stateClass = 'badge-current';
        } else if (isFlagged) {
            stateClass = 'badge-flagged';
        } else if (isAnswered) {
            stateClass = 'badge-answered';
        }

        const onClickAttr = isLab ? `onclick="goToLabQuestion(${i})"` : `onclick="renderQuestion(${i})"`;

        badgesHtml += `
            <div class="palette-badge ${stateClass}" ${onClickAttr} title="${t('qNum')} ${i + 1}">
                ${i + 1}
                ${isFlagged ? '<i class="fas fa-flag palette-flag-icon"></i>' : ''}
            </div>
        `;
    }

    return `
        <div class="quiz-palette-container">
            <div class="quiz-palette-grid">
                ${badgesHtml}
            </div>
        </div>
    `;
}

function updatePaletteDOM() {
    const wrapper = document.getElementById('quiz-palette-wrapper');
    if (wrapper) {
        wrapper.innerHTML = renderQuestionPalette();
    }
}

function goToLabQuestion(index) {
    if (appState.lab && appState.lab.active) {
        appState.lab.currentQIndex = index;
        renderLabQuestion();
    }
}
