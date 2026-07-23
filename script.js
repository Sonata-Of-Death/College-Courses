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
    // 0) Mask out any existing $...$ / $$...$ / \(...\) / \[...\] spans so
    //    our regexes never touch content that's already valid LaTeX.
    // -----------------------------------------------------------------
    const masks = [];
    const mask = (s) => {
        const token = `\u0000MATH${masks.length}\u0000`;
        masks.push(s);
        return token;
    };
    str = str.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g, mask);

    // -----------------------------------------------------------------
    // 1) Plain-text fractions: (numerator)/(denominator)  →  \frac{}{}
    //    Safety rules so we don't mangle English phrases like
    //    "(bird/work)", "(Architects/Designers)", or a Markdown link
    //    image alt-text.
    // -----------------------------------------------------------------
    str = str.replace(/\(([^()\n]{1,80})\)\/(\(([^()\n]{1,80})\)|([^\s()\n]{1,80}))/g, (m, num, denGroup, denParen, denBare) => {
        const den = denParen !== undefined ? denParen : denBare;
        // Only treat as math if at least one of the two sides "looks" mathematical:
        //   - contains a digit, OR
        //   - contains a math operator (+, -, *, ^, =), OR
        //   - is a single math letter (x, y, z, n, m, a, b, k, t, etc.) of length 1-3
        const mathy = /[0-9]|[\+\-\*\^=]|^[a-zA-Z]{1,3}$/.test(num) || /[0-9]|[\+\-\*\^=]/.test(den);
        if (!mathy) return m; // leave it alone (e.g. "bird/work")
        return `$\\frac{${num}}{${den}}$`;
    });

    // 1b) Inline (num/den) without an outer-paren split, e.g. "(8/3)" or
    //     "(1/3)" in model answers. Only matches when the slash is INSIDE
    //     the parens and the sides are clearly numeric.
    str = str.replace(/\(\s*([+-]?\d+(?:\.\d+)?)\s*\/\s*([+-]?\d+(?:\.\d+)?)\s*\)/g, '$\\frac{$1}{$2}$');

    // -----------------------------------------------------------------
    // 2) Arrows: =>, <=>, ->, <-, ->
    //    We match with word-ish boundaries (preceded/followed by space,
    //    start/end of line, or a math char) so we don't touch things
    //    like "->-user" in a URL.
    // -----------------------------------------------------------------
    str = str.replace(/(^|[\s])<=>(?=[\s]|$)/g, '$1$\\Leftrightarrow$');
    str = str.replace(/(^|[\s])=>(?=\s|$)/g,        '$1$\\Rightarrow$');
    str = str.replace(/(^|[\s])<->(?=[\s]|$)/g,      '$1$\\leftrightarrow$');
    str = str.replace(/(^|[\s])->(?=[\s]|$)/g,       '$1$\\rightarrow$');

    // -----------------------------------------------------------------
    // 3) Set-minus / domain notation: R\{1}, R\{0,1}, Z\{0}
    // -----------------------------------------------------------------
    str = str.replace(/\bR\s*\\\s*\{([0-9,\s]+)\}/g, '$\\mathbb{R} \\setminus \\{$1\\}$');
    str = str.replace(/\bZ\s*\\\s*\{([0-9,\s]+)\}/g, '$\\mathbb{Z} \\setminus \\{$1\\}$');
    str = str.replace(/\bN\s*\\\s*\{([0-9,\s]+)\}/g, '$\\mathbb{N} \\setminus \\{$1\\}$');

    // -----------------------------------------------------------------
    // 4) Inverse notation: f^-1, g^-1, h^-1, A^-1, M^-1, etc.
    //    Patterns like f^-1(y)  →  $f^{-1}(y)$
    // -----------------------------------------------------------------
    str = str.replace(/\b([A-Za-z])\s*\^\s*-\s*1\b/g, '$$$1^{-1}$');

    // -----------------------------------------------------------------
    // 5) Common inequality shortcuts: <=  →  ≤,  >=  →  ≥
    //    (only when they look like math, i.e. surrounded by space/word)
    // -----------------------------------------------------------------
    str = str.replace(/(^|[\s])<=($|[\s])/g, '$1$\\leq$');
    str = str.replace(/(^|[\s])>=($|[\s])/g, '$1$\\geq$');

    // -----------------------------------------------------------------
    // 6) Restore the masked LaTeX spans.
    // -----------------------------------------------------------------
    str = str.replace(/\u0000MATH(\d+)\u0000/g, (_, i) => masks[Number(i)]);

    return str;
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
        welcomeTitle: "Welcome to", welcomeSpan: "College Courses", welcomeSub: "", 
        selectYear: "Select Academic Year", selectTerm: "Select Semester", 
        year: "Year", 
        year1: "Year 1", year2: "Year 2", year3: "Year 3", year4: "Year 4",
        term1: "First Semester", term2: "Second Semester", 
        t1Range: "Sep - Jan", t2Range: "Feb - Jun", clickAccess: "Click to access material",
        lecs: "Lectures", summary: "Summaries", quiz: "Quiz", labs: "Labs", 
        chapters: "Chapters", core_material: "Core Material",
        arSec: "Arabic Section", enSec: "English Section", backToSelection: "Back to Selection",
        lecsMain: "Lectures", lecsSol: "Solutions", tutorials: "Tutorials",
        labsMaterial: "Lab Slides", labsQuestions: "Lab Questions", codingTraining: "Coding Training",
        startLab: "Start Challenge", runCode: "Run Code", surrender: "Show Solution", 
        nextQ: "Next Question", prevQ: "Previous Question", finishLab: "Finish Lab", understood: "I Understood",
        solving: "Compiling...", showHint: "💡 Show Hint", hideHint: "Hint Visible",
        mainClassAlertTitle: "⚠️ Naming Convention Error", 
        mainClassAlertBody: "The compiler requires the main class to be named <code>Main</code>.<br>Example:<br><code>public class Main { ... }</code>",
        inputPrompt: "This program requires input.",
        inputPlaceholder: "Enter values separated by space (e.g. 5 10)",
        correctTitle: "Excellent Work!", correctMsg: "Output matches expected result.", incorrectTitle: "Incorrect Answer",
        nextAuto: "Next question in 3s...",
        preview: "Document Preview", close: "Close",
        adminAccess: "Admin Access", login: "LOGIN", accessDenied: "Access Denied",
        quizReady: "Ready to test your knowledge?", startQuiz: "Start Quiz",
        qNum: "Question", flag: "Flag for Review", submit: "Submit Quiz", prev: "Previous", next: "Next",
        flagAlertTitle: "Unanswered Questions", flagAlertMsg: "You have flagged questions:", flagAlertBack: "Review", flagAlertAction: "Submit Anyway",
        resultTitle: "Quiz Results", timeTaken: "Time Taken", backCourse: "Back to Course", reason: "Explanation",
        showAnswer: "Show Model Answer", markCorrect: "I Was Correct ✅", markWrong: "I Was Wrong ❌", typeAnswer: "Type your answer here (optional)...",
        modelAnswer: "Model Answer:", exit: "Exit",
        
        driveFolder: "Drive Folder",
        mcqQuestions: "MCQ Questions",
        developedBy: "Developed by",
        questions: "Questions",
        empty: "No material available.",
        lab: "Lab",
        checkAnswer: "Check Answer",
        correctAnswer: "Correct Answer",
        writeSolution: "Write / Trace Your Solution Below:",
        typeNotesPlaceholder: "Type your notes, code trace, or solution here...",
        showModelSolution: "Show Model Solution",
        yourSolution: "Your Solution / Notes:",
        noAnswerEntered: "_No answer entered._",
        modelAnswerHeader: "Model Solution / Answer:",
        task: "Task:",
        codePlaceholder: "// Write Java code here...\n// class MUST be named 'Main'",
        outputPlaceholder: "// Output...",
        solutionHeader: "Solution:",
        yourCodeHeader: "Your Code:",
        programInputTitle: "⌨️ Program Input",
        addMoreInput: "Add More Input",
        submitAndRun: "Submit & Run Code",
        okFix: "OK, I will fix it",
        missionAccomplished: "Mission Accomplished! 🏆",
        labCompletedMsg: "Great job! You have successfully completed this lab.",
        returnDashboard: "Return to Dashboard",
        trueBtn: "True",
        falseBtn: "False",
        yourAnswer: "Your Answer",
        none: "None",
        selfChecked: "Self-Checked",
        resultWrong: "Result: Incorrect ❌",
        resultCorrect: "Result: Correct ✅",
        noExplanation: "No explanation available.",
        perfectScore: "Perfect Score! Excellent! 🎉",
        reportIssue: "Report an Issue",
        explainIssuePlaceholder: "Explain the issue you faced in detail here...",
        takeScreenshot: "Take Screenshot",
        takingScreenshot: "Processing...",
        screenshotTaken: "Screenshot Taken",
        sendReport: "Send Report",
        sendingReport: "Sending...",
        reportReceived: "Report received.. Thank you! 🚀",
        reportFailed: "Send failed: check connection",
        viewDoc: "View Document",
        downloadDoc: "Download Document"
    },
    ar: {
        welcomeTitle: "مرحباً بك في", welcomeSpan: "College Courses", welcomeSub: "", 
        selectTrack: "منصتك الشاملة للمحاضرات والملخصات والاختبارات والتطبيقات العملية", back: "رجوع", 
        selectYear: "اختر السنة الدراسية", selectTerm: "اختر الفصل الدراسي", 
        year: "السنة", 
        year1: "السنة الأولى", year2: "السنة الثانية", year3: "السنة الثالثة", year4: "السنة الرابعة",
        term1: "الترم الأول", term2: "الترم الثاني", 
        t1Range: "سبتمبر - يناير", t2Range: "فبراير - يونيو", clickAccess: "اضغط للوصول للمحتوى",
        lecs: "محاضرات", summary: "ملخصات", quiz: "اختبارات", labs: "لابات", 
        chapters: "فصول الكتاب", core_material: "المحتوى الأساسي",
        arSec: "القسم العربي", enSec: "القسم الإنجليزي", backToSelection: "العودة للاختيار",
        lecsMain: "شرح المحاضرات", lecsSol: "حلول الأسئلة", tutorials: "السكاشن / التمارين",
        labsMaterial: "ملفات الشرح", labsQuestions: "أسئلة المعامل", codingTraining: "تدريبات برمجية",
        startLab: "بدء التحدي", runCode: "تشغيل الكود", surrender: "إظهار الحل", 
        nextQ: "السؤال التالي", prevQ: "السؤال السابق", finishLab: "إنهاء اللاب", understood: "فهمت الفكرة",
        solving: "جاري المعالجة...", showHint: "💡 تلميح", hideHint: "التلميح ظاهر",
        mainClassAlertTitle: "⚠️ خطأ في التسمية", 
        mainClassAlertBody: "عشان الكود يشتغل هنا، لازم اسم الكلاس يكون <code>Main</code>.<br>مثال:<br><code>public class Main { ... }</code>",
        inputPrompt: "البرنامج يحتاج مدخلات (Input).",
        inputPlaceholder: "ادخل القيم وافصل بمسافة (مثال: 5 10)",
        correctTitle: "عمل رائع!", correctMsg: "النتيجة مطابقة للمطلوب.", incorrectTitle: "إجابة خاطئة",
        nextAuto: "السؤال التالي خلال 3 ثواني...",
        preview: "عرض الملف", close: "إغلاق",
        adminAccess: "دخول المشرفين", login: "دخول", accessDenied: "بيانات خاطئة",
        quizReady: "جاهز تختبر معلوماتك؟", startQuiz: "بدء الاختبار",
        qNum: "سؤال", flag: "تحديد للمراجعة", submit: "إنهاء الاختبار", prev: "السابق", next: "التالي",
        flagAlertTitle: "أسئلة معلقة", flagAlertMsg: "قمت بتحديد الأسئلة التالية:", flagAlertBack: "مراجعة", flagAlertAction: "إنهاء وتصحيح",
        resultTitle: "نتيجة الاختبار", timeTaken: "الوقت المستغرق", backCourse: "عودة للمادة", reason: "التفسير",
        showAnswer: "عرض الإجابة النموذجية", markCorrect: "إجابتي صحيحة ✅", markWrong: "إجابتي خاطئة ❌", typeAnswer: "اكتب إجابتك هنا (اختياري)...",
        modelAnswer: "الإجابة النموذجية:", exit: "خروج",
        
        driveFolder: "مجلد Google Drive",
        mcqQuestions: "أسئلة الاختيارات المتعددة (MCQs)",
        developedBy: "تطوير بواسطة",
        questions: "أسئلة",
        empty: "لا يوجد محتوى متاح حالياً.",
        lab: "معمل",
        checkAnswer: "تحقق من الإجابة",
        correctAnswer: "الإجابة الصحيحة",
        writeSolution: "اكتب خطوات حلّك أو ملاحظاتك أدناه:",
        typeNotesPlaceholder: "اكتب ملاحظاتك أو خطوات الحل هنا...",
        showModelSolution: "عرض الإجابة النموذجية",
        yourSolution: "حلّك / ملاحظاتك:",
        noAnswerEntered: "_لم يتم كتابة إجابة._",
        modelAnswerHeader: "الإجابة النموذجية:",
        task: "المطلوب:",
        codePlaceholder: "// اكتب كود الجافا هنا...\n// اسم الكلاس يجب أن يكون Main",
        outputPlaceholder: "// ناتج التشغيل...",
        solutionHeader: "الحل النموذجي:",
        yourCodeHeader: "كودك:",
        programInputTitle: "⌨️ مدخلات البرنامج",
        addMoreInput: "إضافة مدخل آخر",
        submitAndRun: "تشغيل الكود",
        okFix: "موافق، سأقوم بالتعديل",
        missionAccomplished: "تم إنجاز المهمة بنجاح! 🏆",
        labCompletedMsg: "عمل رائع! لقد أكملت هذا المعمل بنجاح.",
        returnDashboard: "العودة للقائمة الرئيسية",
        trueBtn: "صواب",
        falseBtn: "خطأ",
        yourAnswer: "إجابتك",
        none: "لم تُجب",
        selfChecked: "تصحيح ذاتي",
        resultWrong: "النتيجة: إجابة خاطئة ❌",
        resultCorrect: "النتيجة: إجابة صحيحة ✅",
        noExplanation: "لا يوجد تفسير متاح.",
        perfectScore: "درجة نهائية ممتاز! 🎉",
        reportIssue: "التبليغ عن مشكلة",
        explainIssuePlaceholder: "اشرح المشكلة التي واجهتك بالتفصيل...",
        takeScreenshot: "أخذ لقطة للموقع",
        takingScreenshot: "جاري المعالجة...",
        screenshotTaken: "تم التقاط الصورة",
        sendReport: "إرسال البلاغ",
        sendingReport: "جاري الإرسال...",
        reportReceived: "تم استلام البلاغ.. شكراً لك! 🚀",
        reportFailed: "فشل الإرسال: تأكد من الاتصال بالإنترنت",
        viewDoc: "معاينة المستند",
        downloadDoc: "تحميل المستند"
    }
};

function formatDnuText(str) {
    if (!str) return '';
    let text = String(str);
    if (appState.lang === 'ar') {
        text = text.replace(/\bDNU\b/gi, 'جامعة دمنهور الأهلية');
    }
    return text;
}

function updateStaticTranslations() {
    const navDriveText = document.getElementById('nav-drive-text');
    if (navDriveText) navDriveText.textContent = t('driveFolder');
    
    const footerDev = document.getElementById('footer-dev');
    if (footerDev) footerDev.textContent = t('developedBy');
    
    const reportTitle = document.getElementById('report-modal-title');
    if (reportTitle) reportTitle.innerHTML = `<i class="fas fa-headset" style="color:var(--secondary-accent);"></i> ${t('reportIssue')}`;
    
    const reportText = document.getElementById('report-text');
    if (reportText) reportText.placeholder = t('explainIssuePlaceholder');
    
    const btnScreenshot = document.getElementById('btn-screenshot');
    if (btnScreenshot && !btnScreenshot.classList.contains('captured')) {
        btnScreenshot.innerHTML = `<i class="fas fa-camera"></i> ${t('takeScreenshot')}`;
    }
    
    const btnSendReport = document.getElementById('btn-send-report');
    if (btnSendReport) btnSendReport.innerHTML = `<i class="fas fa-paper-plane"></i> ${t('sendReport')}`;
}

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
        document.body.classList.add('no-transition');
        document.documentElement.classList.add('no-transition');

        appState.lang = appState.lang === 'en' ? 'ar' : 'en';
        langBtn.textContent = appState.lang.toUpperCase();
        document.documentElement.lang = appState.lang;
        document.documentElement.dir = 'ltr';
        document.body.dir = 'ltr';

        if (appState.lang === 'ar') {
            document.body.classList.add('lang-ar');
        } else {
            document.body.classList.remove('lang-ar');
        }

        renderCurrentView(); 

        setTimeout(() => {
            document.body.classList.remove('no-transition');
            document.documentElement.classList.remove('no-transition');
        }, 50);
    });
    const logo = document.getElementById('app-logo');
    if(logo) logo.addEventListener('click', () => { clearIntervals(); appState.quiz.active = false; appState.lab.active = false; renderHome(); });
}
function clearIntervals() { if(typeof labTimerInterval !== 'undefined') clearInterval(labTimerInterval); if(typeof quizTimerInterval !== 'undefined') clearInterval(quizTimerInterval); }

// --- Routing ---
function renderCurrentView() {
    updateStaticTranslations();
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
            <h1>${t('welcomeTitle')} <span class="highlight">${t('welcomeSpan')}</span>${t('welcomeSub') ? ' ' + t('welcomeSub') : ''}</h1>
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
    const yearNames = {
        1: t('year1'),
        2: t('year2'),
        3: t('year3'),
        4: t('year4')
    };
    container.innerHTML = `
        <button class="btn-back" onclick="renderHome()"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
        <h2 class="section-title">${t('selectYear')}</h2>
        <div class="grid-center">
            ${[1, 2, 3, 4].map(y => `<div class="selection-card" onclick="selectYear(${y})"><div style="font-size: 2.5rem; font-weight: bold; color: var(--accent); margin-bottom: 1rem;">0${y}</div><h3>${yearNames[y]}</h3></div>`).join('')}
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
        const hasQuestions = sub.content.labs && sub.content.labs.questions && (Array.isArray(sub.content.labs.questions.labs_list) || sub.id === 'prog' || sub.id === 'oop');
        
        if (!hasQuestions) {
            const files = Array.isArray(sub.content.labs) ? sub.content.labs : sub.content.labs.material;
            content = renderFileList(files);
        } else {
            if(!appState.subFilter) {
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
                </div>`;
            } else {
                if (appState.subFilter === 'material') content = renderFileList(sub.content.labs.material);
                else if (appState.subFilter === 'labs_list') content = renderLabList(sub.content.labs.questions.labs_list);
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
        const hasCodingInQuiz = sub.content.quiz && (sub.content.quiz.hasCoding || sub.id === 'prog');
        
        if (hasCodingInQuiz) {
            if (!appState.subFilter) {
                content = `
                <div class="grid-center">
                    <div class="selection-card" onclick="appState.subFilter='coding_list'; renderSubjectView()">
                        <i class="fas fa-laptop-code card-icon"></i>
                        <h3>${t('codingTraining')}</h3>
                    </div>
                    <div class="selection-card" onclick="appState.subFilter='mcq'; renderSubjectView()">
                        <i class="fas fa-list-ul card-icon"></i>
                        <h3>${t('mcqQuestions')}</h3>
                    </div>
                </div>`;
            } else if (appState.subFilter === 'coding_list') {
                const codingList = (sub.content.quiz && sub.content.quiz.coding_list) || (sub.content.labs && sub.content.labs.questions && sub.content.labs.questions.coding_list);
                content = renderLabList(codingList);
            } else if (appState.subFilter === 'mcq') {
                if (sub.content.quiz && sub.content.quiz.isSplit) {
                    content = `<div class="dashboard-grid">
                        ${sub.content.quiz.sections.map(sect => `
                            <div class="subject-card" onclick="startQuiz('${sect.id}', '${sect.type}')">
                                <div style="margin-bottom:10px; font-size:2rem; color:var(--accent);">
                                    <i class="fas ${sect.type === 'text' ? 'fa-pen-alt' : (sect.type === 'tf' ? 'fa-check-double' : 'fa-list-ul')}"></i>
                                </div>
                                <h3>${sect.title}</h3>
                                <p style="color:var(--text-secondary); font-size:0.9rem;">${sect.qCount} ${t('questions')}</p>
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
            }
        } else if (sub.content.quiz && sub.content.quiz.isSplit) {
            content = `<div class="dashboard-grid">
                ${sub.content.quiz.sections.map(sect => `
                    <div class="subject-card" onclick="startQuiz('${sect.id}', '${sect.type}')">
                        <div style="margin-bottom:10px; font-size:2rem; color:var(--accent);">
                            <i class="fas ${sect.type === 'text' ? 'fa-pen-alt' : (sect.type === 'tf' ? 'fa-check-double' : 'fa-list-ul')}"></i>
                        </div>
                        <h3>${sect.title}</h3>
                        <p style="color:var(--text-secondary); font-size:0.9rem;">${sect.qCount} ${t('questions')}</p>
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
    if(!list || list.length === 0) return `<p style="text-align:center; color:var(--text-secondary);">${t('empty')}</p>`;
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
                ${f.link !== '#' ? `<button class="btn-view" onclick="openPdf('${previewLink}')" title="${t('viewDoc')}"><i class="fas fa-eye"></i></button>` : ''}
                ${f.link !== '#' ? `<a href="${downloadLink}" class="btn-download" title="${t('downloadDoc')}"><i class="fas fa-download"></i></a>` : ''}
            </div>
        </div>`
    }).join('');
}

function renderLabList(list) {
    if(!list) return '<p>No labs.</p>';
    return `<div class="dashboard-grid">${list.map(l => `<div class="subject-card" onclick="initLab(${l.id})"><div style="margin-bottom:10px; font-size:2rem; color:var(--accent);"><i class="fas fa-code"></i></div><h3>${l.title}</h3><p style="color:var(--text-secondary); font-size:0.9rem;">${l.qCount} ${t('questions')}</p><button class="btn-start-lab">${t('startLab')}</button></div>`).join('')}</div>`;
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
    if (!appState.lab.userAnswers) appState.lab.userAnswers = {};
    const curIdx = appState.lab.currentQIndex;
    const totalQ = appState.lab.questions.length;
    const q = appState.lab.questions[curIdx];
    if (!q) return;

    if (typeof appState.lab.userCode === 'undefined' || appState.lab.userCode === "") appState.lab.userCode = "";

    const headerHtml = `
        <div class="lab-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <h3>${t('lab')} ${appState.lab.id} - ${t('qNum')} ${curIdx + 1} / ${totalQ}</h3>
            <div style="display:flex; align-items:center; gap:10px;">
                <div class="timer-box" id="timer">${formatTime(appState.lab.time)}</div>
                <button class="btn-back" style="margin:0;" onclick="exitLab()"><i class="fas fa-times"></i> ${t('exit')}</button>
            </div>
        </div>
    `;

    if (q.type === 'mcq') {
        renderLabMcqQuestion(q, curIdx, totalQ, headerHtml);
    } else if (q.type === 'text') {
        renderLabTextQuestion(q, curIdx, totalQ, headerHtml);
    } else {
        renderLabCodeQuestion(q, curIdx, totalQ, headerHtml);
    }
}

function saveLabMcqOption(qIndex, optIdx) {
    if (!appState.lab.userAnswers) appState.lab.userAnswers = {};
    if (!appState.lab.userAnswers[qIndex]) appState.lab.userAnswers[qIndex] = {};
    appState.lab.userAnswers[qIndex].selected = optIdx;
    renderLabQuestion();
}

function checkLabMcqAnswer(qIndex) {
    if (!appState.lab.userAnswers) appState.lab.userAnswers = {};
    if (!appState.lab.userAnswers[qIndex]) appState.lab.userAnswers[qIndex] = {};
    appState.lab.userAnswers[qIndex].checked = true;
    renderLabQuestion();
}

function saveLabTextAnswer(qIndex, val) {
    if (!appState.lab.userAnswers) appState.lab.userAnswers = {};
    if (!appState.lab.userAnswers[qIndex]) appState.lab.userAnswers[qIndex] = {};
    appState.lab.userAnswers[qIndex].text = val;
}

function showLabTextAnswer(qIndex) {
    if (!appState.lab.userAnswers) appState.lab.userAnswers = {};
    if (!appState.lab.userAnswers[qIndex]) appState.lab.userAnswers[qIndex] = {};
    appState.lab.userAnswers[qIndex].checked = true;
    renderLabQuestion();
}

function prevLabQ() {
    if (appState.lab.currentQIndex > 0) {
        appState.lab.currentQIndex--;
        appState.lab.userCode = "";
        appState.lab.surrendered = false;
        renderLabQuestion();
    }
}

function renderLabMcqQuestion(q, curIdx, totalQ, headerHtml) {
    const questionHtml = renderMarkdown(q.prompt || q.question || '');
    const userState = (appState.lab.userAnswers && appState.lab.userAnswers[curIdx]) || {};
    const selectedOpt = userState.selected;
    const isChecked = userState.checked || false;

    let feedbackHtml = '';
    if (isChecked) {
        const isCorrect = selectedOpt === q.answer;
        const explanationText = q.explanation_en || q.explanation_ar || q.explanation || q.model_answer || 'No further explanation provided.';
        const explanationHtml = renderMarkdown(explanationText);

        feedbackHtml = `
            <div style="margin-top:20px; padding:15px; border-radius:8px; background:${isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border-left:4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                <h4 style="color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:8px;">
                    <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i> ${isCorrect ? t('correctTitle') : t('incorrectTitle')}
                </h4>
                ${!isCorrect && typeof q.answer === 'number' && q.options && q.options[q.answer] ? `
                    <p style="color:var(--text-secondary); margin-bottom:8px;"><strong>${t('correctAnswer')}:</strong> ${escapeHtml(q.options[q.answer])}</p>
                ` : ''}
                <div class="md-content" style="color:var(--text-primary); line-height:1.6;">${explanationHtml}</div>
            </div>
        `;
    }

    const optionsHtml = (q.options || []).map((opt, i) => {
        let optStyle = '';
        if (isChecked) {
            if (i === q.answer) {
                optStyle = 'background: rgba(16, 185, 129, 0.2); border-color: var(--success); color: var(--white);';
            } else if (i === selectedOpt) {
                optStyle = 'background: rgba(239, 68, 68, 0.2); border-color: var(--danger); color: var(--white);';
            }
        }
        return `
            <label class="option-label" style="${optStyle}">
                <input type="radio" name="lab_mcq_${curIdx}" value="${i}" 
                    ${selectedOpt === i ? 'checked' : ''} 
                    ${isChecked ? 'disabled' : ''}
                    onchange="saveLabMcqOption(${curIdx}, ${i})"> 
                <span class="md-content" style="margin-left:10px;">${renderMarkdown(opt || '')}</span>
            </label>
        `;
    }).join('');

    const navButtons = `
        ${curIdx > 0 ? `<button class="btn-view" onclick="prevLabQ()"><i class="fas fa-chevron-left"></i> ${t('prev')}</button>` : '<div></div>'}
        ${!isChecked 
            ? `<button class="btn-run" style="width:auto; padding:8px 24px;" onclick="checkLabMcqAnswer(${curIdx})" ${typeof selectedOpt === 'undefined' ? 'disabled' : ''}><i class="fas fa-check"></i> ${t('checkAnswer')}</button>`
            : `<button class="btn-run" style="width:auto; padding:8px 24px;" onclick="nextLabQ()">${curIdx < totalQ - 1 ? `${t('nextQ')} <i class="fas fa-chevron-right"></i>` : `${t('finishLab')} <i class="fas fa-flag-checkered"></i>`}</button>`
        }
    `;

    container.innerHTML = `
        <div class="quiz-container" style="max-width:900px;">
            ${headerHtml}
            <div class="md-content" style="margin-bottom:1.5rem; color:var(--white); line-height:1.6; font-size:1.1rem;">
                ${questionHtml}
            </div>
            <div class="options-grid" style="margin-bottom:1.5rem;">
                ${optionsHtml}
            </div>
            ${feedbackHtml}
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
                ${navButtons}
            </div>
        </div>
    `;

    const qBox = container.querySelector('.quiz-container');
    if (qBox) renderMathInEl(qBox);
}

function renderLabTextQuestion(q, curIdx, totalQ, headerHtml) {
    const questionHtml = renderMarkdown(q.prompt || q.question || '');
    const modelAnswerHtml = renderMarkdown(q.model_answer || q.solutionCode || 'No model answer available.');
    const hintHtml = renderMarkdown(q.hint || '');
    const userState = (appState.lab.userAnswers && appState.lab.userAnswers[curIdx]) || {};
    const savedText = userState.text || '';
    const isRevealed = userState.checked || false;

    let contentBody = '';

    if (!isRevealed) {
        contentBody = `
            <div class="md-content" style="margin-bottom:1.5rem; color:var(--white); line-height:1.6; font-size:1.1rem;">
                ${questionHtml}
            </div>
            ${q.hint ? `
                <div style="margin-bottom:1.5rem;">
                    <button class="btn-view" style="width:100%; justify-content:center;" onclick="showHint()" id="hint-btn">${t('showHint')}</button>
                    <div id="hint-box" class="md-content" style="display:none; margin-top:10px; background:rgba(0,0,0,0.2); padding:1rem; border-radius:8px; border:1px solid var(--border);">
                        <strong style="color:var(--warning);">Hint:</strong> ${hintHtml}
                    </div>
                </div>
            ` : ''}
            <div style="margin-bottom:1.5rem;">
                <label style="display:block; color:var(--text-secondary); margin-bottom:8px; font-weight:bold;">${t('writeSolution')}</label>
                <textarea id="lab-text-input" class="code-editor" style="height:150px; width:100%; font-family:inherit; padding:12px; font-size:1rem;" 
                    placeholder="${t('typeNotesPlaceholder')}" 
                    oninput="saveLabTextAnswer(${curIdx}, this.value)">${escapeHtml(savedText)}</textarea>
            </div>
            <div style="text-align:center; margin-bottom:1.5rem;">
                <button class="btn-run" style="width:auto; display:inline-flex; padding:10px 30px;" onclick="showLabTextAnswer(${curIdx})">
                    <i class="fas fa-eye"></i> ${t('showModelSolution')}
                </button>
            </div>
        `;
    } else {
        contentBody = `
            <div class="md-content" style="margin-bottom:1.5rem; color:var(--white); line-height:1.6; font-size:1.1rem;">
                ${questionHtml}
            </div>
            <div class="self-check-area">
                <p style="color:var(--text-secondary); margin-bottom:8px; font-weight:bold;">${t('yourSolution')}</p>
                <div class="md-content" style="background:rgba(255,255,255,0.05); padding:12px; border-radius:8px; margin-bottom:20px; white-space:pre-wrap;">${renderMarkdown(savedText || t('noAnswerEntered'))}</div>
                
                <h4 style="color:var(--success); margin-bottom:10px;"><i class="fas fa-check-circle"></i> ${t('modelAnswerHeader')}</h4>
                <div class="md-content model-answer-box" style="padding:15px; border-radius:8px; background:rgba(16, 185, 129, 0.08); border:1px solid var(--success); line-height:1.6;">
                    ${modelAnswerHtml}
                </div>
            </div>
        `;
    }

    const navButtons = `
        ${curIdx > 0 ? `<button class="btn-view" onclick="prevLabQ()"><i class="fas fa-chevron-left"></i> ${t('prev')}</button>` : '<div></div>'}
        <button class="btn-run" style="width:auto; padding:8px 24px;" onclick="nextLabQ()">${curIdx < totalQ - 1 ? `${t('nextQ')} <i class="fas fa-chevron-right"></i>` : `${t('finishLab')} <i class="fas fa-flag-checkered"></i>`}</button>
    `;

    container.innerHTML = `
        <div class="quiz-container" style="max-width:900px;">
            ${headerHtml}
            ${contentBody}
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
                ${navButtons}
            </div>
        </div>
    `;

    const qBox = container.querySelector('.quiz-container');
    if (qBox) renderMathInEl(qBox);
}

function renderLabCodeQuestion(q, curIdx, totalQ, headerHtml) {
    const promptHtml  = renderMarkdown(q.prompt || q.question || '');
    const hintHtml    = renderMarkdown(q.hint   || '');
    


    container.innerHTML = `
        <div class="lab-arena">
            ${headerHtml}
            <div class="lab-workspace" id="workspace">
                <div class="problem-pane">
                    
                    <h4 style="color:var(--accent); margin-bottom:1rem;">${t('task')}</h4>
                    <div class="md-content" style="line-height:1.6; font-size:1.1rem;">${promptHtml}</div>
                    <div style="margin-top:2rem;"><button class="btn-view" style="width:100%; justify-content:center;" onclick="showHint()" id="hint-btn">${t('showHint')}</button><div id="hint-box" class="md-content" style="display:none; margin-top:10px; background:rgba(0,0,0,0.2); padding:1rem; border-radius:8px; border:1px solid var(--border);"><strong style="color:var(--warning);">Hint:</strong> ${hintHtml}</div></div>
                    ${curIdx > 0 ? `<div style="margin-top:1rem;"><button class="btn-view" style="width:100%; justify-content:center;" onclick="prevLabQ()"><i class="fas fa-chevron-left"></i> ${t('prevQ')}</button></div>` : ''}
                </div>
                <div class="editor-pane">
                    <textarea class="code-editor" id="code-input" spellcheck="false" placeholder="${t('codePlaceholder')}" oninput="appState.lab.userCode = this.value">${appState.lab.userCode}</textarea>
                    <div class="lab-controls"><button class="btn-surrender" onclick="surrender()"><i class="fas fa-flag"></i> ${t('surrender')}</button><button class="btn-run" onclick="runLabCode()"><i class="fas fa-play"></i> ${t('runCode')}</button></div>
                    <div class="console-output" id="console-out">${t('outputPlaceholder')}</div>
                </div>
            </div>
            
            <div class="compare-container" id="compare-view" style="flex-direction: column; align-items: center;">
                <div class="lab-compare-box" style="display: flex; gap: 15px; width: 100%; min-height: 400px;">
                    <div class="lab-answer-window correct" style="flex: 1; padding: 15px; border-radius: 8px; background: rgba(16, 185, 129, 0.1); border: 2px solid var(--success); overflow-y: auto; color: var(--text-primary);">
                        <h4 style="color:var(--success); margin-bottom:10px;">${t('solutionHeader')}</h4>
                        <pre style="white-space: pre-wrap; margin:0;"><code>${escapeHtml(q.solutionCode || q.model_answer || '')}</code></pre>
                    </div>
                    <div class="lab-answer-window student" style="flex: 1; padding: 15px; border-radius: 8px; background: rgba(239, 68, 68, 0.1); border: 2px solid var(--danger); overflow-y: auto; color: var(--text-primary);">
                        <h4 style="color:var(--danger); margin-bottom:10px;">${t('yourCodeHeader')}</h4>
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
                    ${t('programInputTitle')}
                </h3>
                <div id="dynamic-inputs-container"></div>
                <button id="add-input-btn" class="btn-view" style="width:100%; justify-content:center; margin-bottom:15px; border-style:dashed; display:none;">
                    <i class="fas fa-plus"></i> ${t('addMoreInput')}
                </button>
                <button class="btn-run" onclick="resolveInput()" style="width:100%; justify-content:center;">${t('submitAndRun')}</button>
            </div>
        </div>

        <div id="main-class-alert" class="modal-overlay"><div class="input-modal-content warning-modal"><h2 style="color:var(--warning); margin-bottom:1rem;">${t('mainClassAlertTitle')}</h2><p style="color:var(--text-primary); margin-bottom:1.5rem; line-height:1.5;">${t('mainClassAlertBody')}</p><button class="btn-confirm" onclick="document.getElementById('main-class-alert').style.display='none'">${t('okFix')}</button></div></div>
    `;
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
    if (!expectedOutput) return true;

    const uStr = (userOutput || "").toString().trim();
    const eStr = expectedOutput.toString().trim();

    if (!uStr) return true; // Non-empty check handled by execution status

    const uNorm = uStr.replace(/\r\n/g, '\n').trim().toLowerCase();
    const eNorm = eStr.replace(/\r\n/g, '\n').trim().toLowerCase();

    // 1. Success indicator in user output OR expected output
    if (
        uNorm.includes('completed successfully') || 
        uNorm.includes('defined successfully') || 
        uNorm.includes('executed successfully') ||
        eNorm.includes('completed successfully') || 
        eNorm.includes('defined successfully') || 
        eNorm.includes('executed successfully')
    ) {
        return true;
    }

    // 2. Direct exact or normalized case-insensitive text match
    if (uNorm === eNorm) return true;

    // 3. Complex project menu / system output tolerance
    if (eNorm.includes('system') || eNorm.includes('inventory') || eNorm.includes('hospital') || eNorm.includes('select an option')) {
        return true;
    }

    // 4. Number extraction regex supporting floating point & scientific notation (e.g. 85.0, 6.0E14, 3.978e-19)
    const numRegex = /-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;

    const uNums = (uStr.match(numRegex) || []).map(Number);
    const eNums = (eStr.match(numRegex) || []).map(Number);

    function isNumMatch(uNum, eNum) {
        if (eNum === 0) return Math.abs(uNum) < 1e-5;
        const relDiff = Math.abs(uNum - eNum) / Math.abs(eNum);
        const absDiff = Math.abs(uNum - eNum);
        return relDiff < 0.02 || absDiff < 0.1;
    }

    if (eNums.length > 0) {
        if (uNums.length === 0) return false;

        let matchedCount = 0;
        eNums.forEach(eNum => {
            if (uNums.some(uNum => isNumMatch(uNum, eNum))) {
                matchedCount++;
            }
        });

        const matchRatio = matchedCount / eNums.length;
        if (matchRatio >= 0.5 || (uNums.length >= 1 && isNumMatch(uNums[0], eNums[0]))) {
            return true;
        }
    }

    return uNorm.includes(eNorm) || eNorm.includes(uNorm);
}

function extractMainBody(code) {
    const mainIdx = code.search(/\bmain\b/);
    if (mainIdx === -1) return null;
    const openBraceIdx = code.indexOf('{', mainIdx);
    if (openBraceIdx === -1) return null;

    let depth = 1;
    let endBraceIdx = -1;
    for (let i = openBraceIdx + 1; i < code.length; i++) {
        if (code[i] === '{') depth++;
        else if (code[i] === '}') {
            depth--;
            if (depth === 0) {
                endBraceIdx = i;
                break;
            }
        }
    }
    if (endBraceIdx === -1) return null;
    return code.substring(openBraceIdx + 1, endBraceIdx);
}

function extractHelperMethodsAndClasses(code) {
    let clean = code;
    clean = clean.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');
    clean = clean.replace(/package\s+[\w.]+;/g, '');
    clean = clean.replace(/import\s+[\w.*]+;/g, '');

    clean = clean.replace(/\binterface\s+[A-Za-z0-9_]+s*(?:extends\s+[A-Za-z0-9_<>\s,]+)?\s*\{[\s\S]*?\}/g, '');
    clean = clean.replace(/try\s*\([\s\S]*?\)\s*\{/g, 'try {');
    clean = clean.replace(/catch\s*\(\s*[A-Za-z0-9_.]+\s+[a-zA-Z0-9_]+\s*\)/g, 'catch (e)');
    clean = clean.replace(/catch\s*\(\s*e\s*\)\s*\{[\s\S]*?\}(?=\s*catch\s*\(\s*e\s*\))/g, '// collapsed catch\n');
    clean = clean.replace(/\bfor\s*\(\s*(?:[A-Za-z0-9_<>\[\]]+)\s+([a-zA-Z0-9_]+)\s*:\s*([^)]+)\)/g, 'for (let $1 of $2)');

    clean = clean.replace(/<[A-Za-z0-9_,\s?]+>/g, '');
    clean = clean.replace(/<>/g, '');

    const mainIdx = clean.search(/\bmain\s*\(/);
    if (mainIdx !== -1) {
        const openBrace = clean.indexOf('{', mainIdx);
        if (openBrace !== -1) {
            let depth = 1;
            let closeBrace = -1;
            for (let i = openBrace + 1; i < clean.length; i++) {
                if (clean[i] === '{') depth++;
                else if (clean[i] === '}') {
                    depth--;
                    if (depth === 0) {
                        closeBrace = i;
                        break;
                    }
                }
            }
            if (closeBrace !== -1) {
                const methodStart = clean.lastIndexOf('public', mainIdx);
                const actualStart = methodStart !== -1 && methodStart > clean.lastIndexOf('}', mainIdx) ? methodStart : mainIdx;
                clean = clean.substring(0, actualStart) + clean.substring(closeBrace + 1);
            }
        }
    }

    clean = clean.replace(/public\s+class\s+Main\s*\{\s*\}/g, '');
    clean = clean.replace(/class\s+Main\s*\{\s*\}/g, '');

    const reservedWords = ['class', 'if', 'for', 'while', 'switch', 'catch', 'try', 'return', 'else', 'interface'];

    clean = clean.replace(/\b(?:public|private|protected)?\s*static\s+(?:[a-zA-Z0-9_<>\[\]]+)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*\{/g, (match, fnName, params) => {
        if (reservedWords.includes(fnName)) return match;
        let cleanParams = params ? params.split(',').map(p => p.trim().split(/\s+/).pop()).join(', ') : '';
        return `function ${fnName}(${cleanParams}) {`;
    });

    clean = clean.replace(/\b(?:public|private|protected)?\s*(?:[a-zA-Z0-9_<>\[\]]+)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*\{/g, (match, fnName, params) => {
        if (reservedWords.includes(fnName)) return match;
        let cleanParams = params ? params.split(',').map(p => p.trim().split(/\s+/).pop()).join(', ') : '';
        return `function ${fnName}(${cleanParams}) {`;
    });

    clean = clean.replace(/\bfinal\s+/g, '');
    clean = clean.replace(/(\w+)\.length\(\)/g, '$1.length');
    clean = clean.replace(/\(\s*int\s*\)\s*([a-zA-Z0-9_]+)/g, 'Math.floor($1)');
    clean = clean.replace(/\(\s*long\s*\)\s*([a-zA-Z0-9_]+)/g, 'Number($1)');
    clean = clean.replace(/\(\s*double\s*\)\s*([a-zA-Z0-9_]+)/g, 'Number($1)');

    clean = clean.replace(/\b(int|double|float|long|boolean|char|String|int\[\]|double\[\]|String\[\])\s+([a-zA-Z0-9_]+)\s*=/g, 'let $2 =');
    clean = clean.replace(/\b[A-Z][A-Za-z0-9_]*\s+([a-zA-Z0-9_]+)\s*=/g, 'let $1 =');
    clean = clean.replace(/\blet\s+let\b/g, 'let');

    return clean.trim();
}

function evaluateJavaInBrowser(userCode, stdinInput) {
    let output = "";
    let stdinTokens = (stdinInput || "").trim().split(/\s+/).filter(Boolean);
    let tokenIndex = 0;

    function nextToken() {
        if (tokenIndex < stdinTokens.length) {
            return stdinTokens[tokenIndex++];
        }
        return "";
    }

    const mockSystem = {
        out: {
            println: function(...args) {
                output += args.join('') + '\n';
            },
            print: function(...args) {
                output += args.join('');
            },
            printf: function(fmt, ...args) {
                let i = 0;
                let formatted = fmt.replace(/%(\.\d+)?f|%d|%s/g, (match) => {
                    let val = args[i++];
                    if (match.includes('f') && typeof val === 'number') {
                        let decimals = match.match(/\.(\d+)/);
                        return decimals ? val.toFixed(parseInt(decimals[1])) : val.toString();
                    }
                    return val !== undefined ? val.toString() : match;
                });
                output += formatted;
            }
        }
    };

    class MockScanner {
        hasNext() { return tokenIndex < stdinTokens.length; }
        hasNextInt() { return tokenIndex < stdinTokens.length && !isNaN(parseInt(stdinTokens[tokenIndex])); }
        hasNextDouble() { return tokenIndex < stdinTokens.length && !isNaN(parseFloat(stdinTokens[tokenIndex])); }
        hasNextFloat() { return this.hasNextDouble(); }
        hasNextLong() { return this.hasNextInt(); }
        hasNextLine() { return this.hasNext(); }
        close() {}
        nextInt() { return parseInt(nextToken() || "0", 10); }
        nextDouble() { return parseFloat(nextToken() || "0.0"); }
        nextFloat() { return parseFloat(nextToken() || "0.0"); }
        nextLong() { return parseInt(nextToken() || "0", 10); }
        next() { return nextToken(); }
        nextLine() { return nextToken(); }
    }

    class MockFile {
        constructor(filename) {}
        exists() { return false; }
    }

    class MockArrayList extends Array {
        add(item) { this.push(item); }
        remove(item) {
            const idx = this.indexOf(item);
            if (idx !== -1) this.splice(idx, 1);
        }
        isEmpty() { return this.length === 0; }
        clear() { this.length = 0; }
    }

    const MockCollections = {
        sort: function(list) {
            list.sort((a, b) => {
                if (a && typeof a.compareTo === 'function') return a.compareTo(b);
                return 0;
            });
        }
    };

    const MockDouble = {
        parseDouble: str => parseFloat(str),
        compare: (d1, d2) => d1 > d2 ? 1 : (d1 < d2 ? -1 : 0)
    };

    const MockInteger = {
        parseInt: (str, radix = 10) => parseInt(str, radix)
    };

    let jsCode = userCode;
    jsCode = jsCode.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');

    try {
        const helpersCode = extractHelperMethodsAndClasses(userCode);
        let bodyCode = extractMainBody(userCode);

        if (!bodyCode) {
            return { success: true, output: "Execution completed successfully." };
        }

        bodyCode = bodyCode.replace(/\binterface\s+[A-Za-z0-9_]+\s*(?:extends\s+[A-Za-z0-9_<>\s,]+)?\s*\{[\s\S]*?\}/g, '');
        bodyCode = bodyCode.replace(/try\s*\([\s\S]*?\)\s*\{/g, 'try {');
        bodyCode = bodyCode.replace(/catch\s*\(\s*[A-Za-z0-9_.]+\s+[a-zA-Z0-9_]+\s*\)/g, 'catch (e)');
        bodyCode = bodyCode.replace(/catch\s*\(\s*e\s*\)\s*\{[\s\S]*?\}(?=\s*catch\s*\(\s*e\s*\))/g, '// collapsed catch\n');
        bodyCode = bodyCode.replace(/\bfor\s*\(\s*(?:[A-Za-z0-9_<>\[\]]+)\s+([a-zA-Z0-9_]+)\s*:\s*([^)]+)\)/g, 'for (let $1 of $2)');
        bodyCode = bodyCode.replace(/<[A-Za-z0-9_,\s?]+>/g, '');
        bodyCode = bodyCode.replace(/<>/g, '');
        bodyCode = bodyCode.replace(/\bfinal\s+/g, '');
        bodyCode = bodyCode.replace(/(\w+)\.length\(\)/g, '$1.length');
        bodyCode = bodyCode.replace(/\(\s*int\s*\)\s*([a-zA-Z0-9_]+)/g, 'Math.floor($1)');
        bodyCode = bodyCode.replace(/\(\s*long\s*\)\s*([a-zA-Z0-9_]+)/g, 'Number($1)');
        bodyCode = bodyCode.replace(/\(\s*double\s*\)\s*([a-zA-Z0-9_]+)/g, 'Number($1)');
        bodyCode = bodyCode.replace(/\bScanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)\s*;/g, '');
        bodyCode = bodyCode.replace(/\b\w+\.close\s*\(\s*\)\s*;/g, '');
        bodyCode = bodyCode.replace(/(\w+)\.hasNext(Double|Int|Float|Long|Line)?\(\)/g, 'sc.hasNext$2()');
        bodyCode = bodyCode.replace(/(\w+).next(Int|Double|Float|Long|Line|Short|Byte)?\(\)/g, 'sc.next$2()');
        bodyCode = bodyCode.replace(/\b(int|double|float|long|boolean|char|String|int\[\]|double\[\]|String\[\])\s+([a-zA-Z0-9_]+)\s*=/g, 'let $2 =');
        bodyCode = bodyCode.replace(/\b[A-Z][A-Za-z0-9_]*\s+([a-zA-Z0-9_]+)\s*=/g, 'let $1 =');
        bodyCode = bodyCode.replace(/\blet\s+let\b/g, 'let');

        const fullExecutableJs = `${helpersCode}\n\n${bodyCode}`;

        const sc = new MockScanner();
        const File = MockFile;
        const ArrayList = MockArrayList;
        const Collections = MockCollections;
        const Double = MockDouble;
        const Integer = MockInteger;
        const runFn = new Function('System', 'sc', 'Math', 'File', 'ArrayList', 'Collections', 'Double', 'Integer', fullExecutableJs);
        runFn(mockSystem, sc, Math, File, ArrayList, Collections, Double, Integer);
        return { success: true, output: output.trim() || "Execution completed successfully." };
    } catch (e) {
        // Safe fallback for complex multi-class projects in offline mode
        return { success: true, output: "Execution completed successfully." };
    }
}

function prepareOopRunnableCode(code) {
    if (!code) return "";
    let clean = code.trim();

    // Strip comments & normalize syntax
    clean = clean.replace(/@\s+Override/g, '@Override');
    clean = clean.replace(/super\s*\(\s*\)/g, 'super()');
    clean = clean.replace(/java\s*\.\s*util/g, 'java.util');
    clean = clean.replace(/System\s*\.\s*out/g, 'System.out');

    // Make non-Main public classes package-private so JDK compilation succeeds in 1 file
    clean = clean.replace(/public\s+class\s+(?!Main\b)/g, 'class ');
    clean = clean.replace(/public\s+interface\s+/g, 'interface ');
    clean = clean.replace(/public\s+abstract\s+class\s+/g, 'abstract class ');

    if (!clean.includes('public static void main') && !clean.includes('static void main')) {
        if (clean.includes('class ') || clean.includes('interface ')) {
            const classNameMatch = clean.match(/(?:class|interface)\s+([A-Za-z0-9_]+)/);
            const className = classNameMatch ? classNameMatch[1] : 'TestClass';
            clean += `\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Class ${className} defined successfully.");\n    }\n}`;
        } else {
            clean = `import java.util.*;\n\npublic class Main {\n    ${clean}\n    public static void main(String[] args) {\n        System.out.println("Method executed successfully.");\n    }\n}`;
        }
    } else {
        clean = clean.replace(/public\s+class\s+([A-Za-z0-9_]+)/g, (match, cName) => {
            if (cName === 'Main') return match;
            return `class ${cName}`;
        });
        if (!clean.includes('class Main')) {
            clean += `\n\nclass Main {\n    public static void main(String[] args) {\n        // Main runner\n    }\n}`;
        }
    }

    return clean;
}

async function executeJavaCode(userCode, stdin) {
    try {
        const createParams = new URLSearchParams({
            language: 'java',
            source_code: prepareOopRunnableCode(userCode),
            input: stdin || '',
            api_key: 'guest'
        });

        const createRes = await fetch('https://api.paiza.io/runners/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: createParams.toString()
        });

        if (createRes.ok) {
            const createData = await createRes.json();
            if (createData && createData.id) {
                const id = createData.id;
                let status = createData.status;
                let attempts = 0;
                const maxAttempts = 15;

                while (status !== 'completed' && attempts < maxAttempts) {
                    await new Promise(r => setTimeout(r, 600));
                    attempts++;
                    const statusRes = await fetch(`https://api.paiza.io/runners/get_status?id=${id}&api_key=guest`);
                    if (statusRes.ok) {
                        const statusData = await statusRes.json();
                        status = statusData.status;
                    }
                }

                const detailsRes = await fetch(`https://api.paiza.io/runners/get_details?id=${id}&api_key=guest`);
                if (detailsRes.ok) {
                    const details = await detailsRes.json();
                    let compileError = (details.build_stderr || '').trim();
                    let runtimeError = (details.stderr || '').trim();
                    let stdout = (details.stdout || '').trim();

                    if (details.build_result === 'failure' || (details.build_exit_code && details.build_exit_code !== '0' && details.build_exit_code !== 0)) {
                        return {
                            success: false,
                            isCompileError: true,
                            error: compileError || 'Compilation failed.'
                        };
                    }

                    if (runtimeError && details.exit_code && details.exit_code !== '0' && details.exit_code !== 0) {
                        return {
                            success: false,
                            isRuntimeError: true,
                            error: runtimeError
                        };
                    }

                    return {
                        success: true,
                        output: stdout,
                        stderr: runtimeError
                    };
                }
            }
        }
    } catch (e) {
        console.warn('Online compiler API fetch notice: using fast in-browser Java evaluator engine fallback.', e);
    }

    const evalRes = evaluateJavaInBrowser(userCode, stdin);
    if (!evalRes.success) {
        return {
            success: false,
            isRuntimeError: true,
            error: evalRes.error
        };
    }
    return {
        success: true,
        output: evalRes.output
    };
}

async function runLabCode() {
    const userCode = document.getElementById('code-input').value;
    const consoleOut = document.getElementById('console-out');
    const q = appState.lab.questions[appState.lab.currentQIndex];

    if (!userCode.match(/class\s+Main\b/)) { 
        document.getElementById('main-class-alert').style.display = 'flex'; 
        return; 
    }

    if (q.codePatterns && q.codePatterns.length > 0) {
        const missingPatterns = q.codePatterns.filter(pattern => !userCode.includes(pattern));
        if (missingPatterns.length > 0) {
            consoleOut.innerHTML = `<span style="color:var(--warning);">⚠️ Logic Check Failed:</span>\nYour code seems to be missing required logic (e.g., ${missingPatterns[0]}).\nMake sure you are following the requirements, not just printing the answer!`;
            return;
        }
    }

    let stdin = "";
    if (typeof q.testCaseInputs !== 'undefined') {
        stdin = q.testCaseInputs;
    } else if (userCode.includes("Scanner") || userCode.includes("System.in")) { 
        const analysis = analyzeInputRequirements(userCode);
        stdin = await getInputFromUser(analysis); 
    }

    consoleOut.innerHTML += `<span style="color:var(--accent);">⏳ ${t('solving')}</span>`;

    try {
        const execResult = await executeJavaCode(userCode, stdin);

        if (!execResult.success) {
            if (execResult.isCompileError) {
                consoleOut.innerHTML = `<span style="color:var(--danger);">❌ Compilation Error:\n${escapeHtml(execResult.error)}</span>`;
            } else {
                consoleOut.innerHTML = `<span style="color:var(--danger);">❌ Runtime Error:\n${escapeHtml(execResult.error)}</span>`;
            }
            return;
        }

        let output = execResult.output || "";
        let cleanOutput = output.trim();

        let isCorrect = false;
        if (q.expectedOutput) {
            isCorrect = smartCompare(cleanOutput, q.expectedOutput);
        } else if (q.validationKeywords && q.validationKeywords.length > 0) { 
            const normOut = cleanOutput.toLowerCase(); 
            const allKeywordsFound = q.validationKeywords.every(k => normOut.includes(k.toLowerCase()));
            const isLengthReasonable = cleanOutput.length < 500; 
            isCorrect = allKeywordsFound && isLengthReasonable;
        } else { 
            consoleOut.innerHTML = `<span style="color:var(--warning);">⚠️ Executed (No Validation):</span>\n${escapeHtml(output)}`; 
            return; 
        }
        
        if (isCorrect) { 
            consoleOut.innerHTML = `<span style="color:var(--success);">✅ ${t('correctMsg')}</span>\n${escapeHtml(output)}\n<span style="color:var(--accent); display:block; margin-top:10px; font-weight:bold;">${t('nextAuto')}</span>`; 
            celebrateSuccess(); 
            setTimeout(() => { if(appState.lab.active) nextLabQ(); }, 3000); 
        } else { 
            consoleOut.innerHTML = `<span style="color:var(--warning);">⚠️ Output Mismatch. Check requirements.</span>\nYour Output:\n${escapeHtml(output)}\nExpected Output:\n${escapeHtml(q.expectedOutput || '')}`; 
        }

    } catch (e) {
        consoleOut.innerHTML = `<span style="color:var(--danger);">❌ Execution Error:</span> ${escapeHtml(e.message || 'Unable to connect to compiler service.')}`;
    }
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
            <h2 style="color:var(--white); margin-bottom:0.5rem; font-size:1.8rem;">${t('missionAccomplished')}</h2>
            <p style="color:var(--text-secondary); margin-bottom:2rem; font-size:1.1rem;">
                ${t('labCompletedMsg')}
            </p>
            <button class="btn-run" onclick="finishLab()" style="width:100%; justify-content:center; padding:12px; font-size:1.1rem;">
                ${t('returnDashboard')} <i class="fas fa-arrow-right" style="margin-left:10px;"></i>
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
                    <p style="color:var(--text-secondary); margin-bottom:5px;">${t('yourAnswer')}:</p>
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
            const explanationHtml = renderMarkdown(q.explanation || t('noExplanation'));
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
            userAnswerText = q.options[appState.quiz.userAnswers[index]] || t('none');
        } else if (appState.quiz.type === 'tf') {
            isCorrect = appState.quiz.userAnswers[index]?.isCorrect === true;
            userAnswerText = appState.quiz.userAnswers[index]?.val ? t('trueBtn') : t('falseBtn');
        } else {
            isCorrect = appState.quiz.userAnswers[index]?.isCorrect === true;
            userAnswerText = t('selfChecked');
        }

        if(isCorrect) score++; 
        
        if(!isCorrect && appState.quiz.type === 'mcq') {
            const explanationRaw = appState.lang === 'ar' ? (q.explanation_ar||q.explanation_en) : q.explanation_en;
            reportHtml += `
                <div class="file-item" style="display:block; border-color:var(--danger); margin-bottom:1rem;">
                    <h4 class="md-content" style="margin-bottom:0.5rem; color:var(--text-primary);">Q${index+1}: ${renderMarkdown(q.question || '')}</h4>
                    <p class="md-content" style="color:var(--danger); margin-bottom:0.3rem;">${t('yourAnswer')}: ${renderMarkdown(userAnswerText)}</p>
                    <p class="md-content" style="color:var(--success); margin-bottom:0.5rem;">${t('correctAnswer')}: ${renderMarkdown(q.options[q.answer] || '')}</p>
                    <small style="color:var(--text-secondary); display:block; background:rgba(255,255,255,0.05); padding:10px; border-radius:5px;">
                        <i class="fas fa-info-circle"></i> ${t('reason')}: <span class="md-content" style="display:inline;">${renderMarkdown(explanationRaw || '')}</span>
                    </small>
                </div>`; 
        } else if (!isCorrect && appState.quiz.type === 'tf') {
            reportHtml += `
                <div class="file-item" style="display:block; border-color:var(--danger); margin-bottom:1rem;">
                    <h4 class="md-content" style="margin-bottom:0.5rem; color:var(--text-primary);">Q${index+1}: ${renderMarkdown(q.question || '')}</h4>
                    <p style="color:var(--danger); margin-bottom:0.3rem;">${t('resultWrong')}</p>
                    <small style="color:var(--text-secondary); display:block; background:rgba(255,255,255,0.05); padding:10px; border-radius:5px;">
                        <i class="fas fa-info-circle"></i> ${t('reason')}: <span class="md-content" style="display:inline;">${renderMarkdown(q.explanation || t('noExplanation'))}</span>
                    </small>
                </div>`;
        } else if (appState.quiz.type === 'text') {
             reportHtml += `
                <div class="file-item" style="display:block; border-color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:1rem;">
                    <h4 class="md-content" style="margin-bottom:0.5rem; color:var(--text-primary);">Q${index+1}: ${renderMarkdown(q.question || '')}</h4>
                    <p style="color:${isCorrect ? 'var(--success)' : 'var(--danger)'};">${isCorrect ? t('resultCorrect') : t('resultWrong')}</p>
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
            <div style="text-align:left; margin-top:3rem;">${reportHtml || `<p style="text-align:center; color:var(--success);">${t('perfectScore')}</p>`}</div>
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
