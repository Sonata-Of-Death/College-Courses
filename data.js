const db = {
    majors: {
        ai: { name_en: "Artificial Intelligence", name_ar: "الذكاء الاصطناعي", icon: "fa-brain" },
        cyber: { name_en: "Cyber Security", name_ar: "الأمن السيبراني", icon: "fa-shield-halved" }
    },
    subjects: [
        { 
            id: "bus", name_en: "Business Administration", name_ar: "إدارة أعمال", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"],
            content: {
                lecs: [
                    { title: "Intro to Management", link: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing", type: "PDF" },
                    { title: "Organizational Structure", link: "#", type: "PDF" }
                ],
                summary: [
                    { title: "Chapter 1 Summary", link: "#", type: "PDF" }
                ],
                quiz: [
                    {
                        id: 1, type: "mcq", question: "What is the first function of management?",
                        options: ["Planning", "Organizing", "Leading", "Controlling"], answer: 0,
                        explanation_en: "Planning is the base of all other functions.",
                        explanation_ar: "التخطيط هو الأساس الذي تبنى عليه باقي الوظائف الإدارية."
                    },
                    {
                        id: 2, type: "tf", question: "Managers do not need technical skills.",
                        options: ["True", "False"], answer: 1,
                        explanation_en: "Managers need technical skills especially at lower levels.",
                        explanation_ar: "المديرون يحتاجون لمهارات تقنية خصوصاً في المستويات الإدارية الدنيا."
                    }
                ]
            }
        },
        { id: "eng", name_en: "English", name_ar: "لغة إنجليزية", type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], content: {} },
        { id: "cre", name_en: "Creative Thinking", name_ar: "تفكير إبداعي", type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], content: {} },
        { id: "m0", name_en: "Math 0", name_ar: "رياضيات 0", type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], content: {} },
        { id: "phy", name_en: "Physics", name_ar: "فيزياء", type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], content: {} },
        { id: "m1", name_en: "Math 1", name_ar: "رياضيات 1", type: "shared", year: 1, term: 1, material: ["core_material", "quiz"], sections: ["Differentiation", "Integration"], content: {} },
        { id: "prog", name_en: "Programming", name_ar: "برمجة", type: "shared", year: 1, term: 1, material: ["chapters", "summary", "labs_interactive", "quiz"], content: {} },
        { id: "net", name_en: "Networks", name_ar: "شبكات", type: "ai", year: 1, term: 1, material: ["lecs", "summary", "labs", "quiz"], content: {} },
        { id: "elec", name_en: "Electronics", name_ar: "كهربية", type: "cyber", year: 1, term: 1, material: ["lecs", "summary", "quiz"], content: {} }
    ]
};