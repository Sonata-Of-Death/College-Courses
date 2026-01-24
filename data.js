const db = {
    majors: {
        ai: { name_en: "Artificial Intelligence", name_ar: "الذكاء الاصطناعي", icon: "fa-brain" },
        cyber: { name_en: "Cyber Security", name_ar: "الأمن السيبراني", icon: "fa-shield-halved" }
    },
    subjects: [
        // --- SHARED SUBJECTS (TERM 1) ---

        // 1. Business Administration
        { 
            id: "bus", name_en: "Business Administration", name_ar: "إدارة أعمال", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"],
            content: {
                lecs: [
                    { title: "Lecture 1: Intro", link: "PUT_LINK_HERE", type: "PDF" }
                ],
                // التعديل الجديد: تقسيم الملخصات
                summary: {
                    ar: [
                        { title: "ملخص الفصل الأول (عربي)", link: "PUT_LINK_HERE", type: "PDF" }
                    ],
                    en: [
                        { title: "Chapter 1 Summary (English)", link: "PUT_LINK_HERE", type: "PDF" }
                    ]
                },
                quiz: []
            }
        },

        // 2. English (EXCEPTED - Stays as Array)
        { 
            id: "eng", name_en: "English", name_ar: "لغة إنجليزية", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: {
                lecs: [],
                summary: [], // مصفوفة عادية لأنها لغة واحدة
                quiz: []
            } 
        },

        // 3. Creative Thinking
        { 
            id: "cre", name_en: "Creative Thinking", name_ar: "تفكير إبداعي", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: {
                lecs: [],
                summary: { ar: [], en: [] }, // مقسمة
                quiz: []
            } 
        },

        // 4. Math 0
        { 
            id: "m0", name_en: "Math 0", name_ar: "رياضيات 0", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: {
                lecs: [],
                summary: { ar: [], en: [] }, // مقسمة
                quiz: []
            } 
        },

        // 5. Physics
        { 
            id: "phy", name_en: "Physics", name_ar: "فيزياء", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: {
                lecs: [],
                summary: { ar: [], en: [] }, // مقسمة
                quiz: []
            } 
        },
        
        // 6. Math 1
        { 
            id: "m1", name_en: "Math 1", name_ar: "رياضيات 1", 
            type: "shared", year: 1, term: 1, material: ["core_material", "quiz"], 
            sections: ["Differentiation", "Integration"],
            content: {
                core_material: [], // هنا المحاضرات هي الملخصات فمش محتاجين تقسيم
                quiz: []
            } 
        },

        // 7. Programming
        { 
            id: "prog", name_en: "Programming", name_ar: "برمجة", 
            type: "shared", year: 1, term: 1, material: ["chapters", "summary", "labs_interactive", "quiz"], 
            content: {
                chapters: [],
                summary: { ar: [], en: [] }, // مقسمة
                labs_interactive: [],
                quiz: []
            } 
        },

        // --- AI SPECIFIC ---

        // 8. Networks
        { 
            id: "net", name_en: "Networks", name_ar: "شبكات", 
            type: "ai", year: 1, term: 1, material: ["lecs", "summary", "labs", "quiz"], 
            content: {
                lecs: [],
                summary: { ar: [], en: [] }, // مقسمة
                labs: [],
                quiz: []
            } 
        },

        // --- CYBER SPECIFIC ---

        // 9. Electronics
        { 
            id: "elec", name_en: "Electronics", name_ar: "كهربية", 
            type: "cyber", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: {
                lecs: [],
                summary: { ar: [], en: [] }, // مقسمة
                quiz: []
            } 
        }
    ]
};
