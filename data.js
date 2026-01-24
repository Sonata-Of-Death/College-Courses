const db = {
    majors: {
        ai: { name_en: "Artificial Intelligence", name_ar: "الذكاء الاصطناعي", icon: "fa-brain" },
        cyber: { name_en: "Cyber Security", name_ar: "الأمن السيبراني", icon: "fa-shield-halved" }
    },
    subjects: [
        // --- SHARED SUBJECTS (TERM 1) ---
        { 
            id: "bus", name_en: "Business Administration", name_ar: "إدارة أعمال", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"],
            content: {
                lecs: [{ title: "Lecture 1: Intro", link: "PUT_LINK_HERE", type: "PDF" }],
                summary: {
                    ar: [{ title: "ملخص الفصل الأول (عربي)", link: "PUT_LINK_HERE", type: "PDF" }],
                    en: [{ title: "Chapter 1 Summary (English)", link: "PUT_LINK_HERE", type: "PDF" }]
                },
                quiz: []
            }
        },
        { 
            id: "eng", name_en: "English", name_ar: "لغة إنجليزية", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: { lecs: [], summary: [], quiz: [] } 
        },
        { 
            id: "cre", name_en: "Creative Thinking", name_ar: "تفكير إبداعي", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: { lecs: [], summary: { ar: [], en: [] }, quiz: [] } 
        },
        { 
            id: "m0", name_en: "Math 0", name_ar: "رياضيات 0", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: { lecs: [], summary: { ar: [], en: [] }, quiz: [] } 
        },
        { 
            id: "phy", name_en: "Physics", name_ar: "فيزياء", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: { lecs: [], summary: { ar: [], en: [] }, quiz: [] } 
        },
        { 
            id: "m1", name_en: "Math 1", name_ar: "رياضيات 1", 
            type: "shared", year: 1, term: 1, material: ["core_material", "quiz"], 
            sections: ["Differentiation", "Integration"],
            content: { core_material: [], quiz: [] } 
        },
        { 
            id: "prog", name_en: "Programming", name_ar: "برمجة", 
            type: "shared", year: 1, term: 1, material: ["chapters", "summary", "labs_interactive", "quiz"], 
            content: { chapters: [], summary: { ar: [], en: [] }, labs_interactive: [], quiz: [] } 
        },

        // --- AI SPECIFIC ---

        // 8. Networks
        { 
            id: "net", name_en: "Networks", name_ar: "شبكات", 
            type: "ai", year: 1, term: 1, material: ["lecs", "summary", "labs", "quiz"], 
            content: {
                lecs: [
                    { title: "Lecture 1", link: "https://docs.google.com/presentation/d/1Te8QEuxjnyCLTs0d2pZuMYejLt7e5Cbd/edit?usp=sharing&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                    { title: "Lecture 2", link: "https://docs.google.com/presentation/d/1EcWeTsnpxSB9JcBa1Jlwr8vDTeBKc5o2/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                    { title: "Lecture 3", link: "https://docs.google.com/presentation/d/1dPuF6UI-6U9YmUWkJdN1grFAVlX2Vx4N/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                    { title: "Lecture 4", link: "https://docs.google.com/presentation/d/1_VNa5k-HCJVh-zsxNG5sVjKc8f15ipSz/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                    { title: "Lecture 5", link: "https://docs.google.com/presentation/d/12S4xmrMlHvdQOkE002x2eXBcnxpe8t8l/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" }
                ],
                summary: { 
                    ar: [
                        { title: "شبكات المحاضرة 1", link: "https://drive.google.com/file/d/1C8_m8MQQJV1n4aqBvOKdFYNINqT0Wzk_/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الصور والمخططات (Topology) غير موجودة. راجع المصدر الأصلي." },
                        { title: "شبكات المحاضرة 2", link: "https://drive.google.com/file/d/1xsk0lZeRZ3k4pHs32GeR5qrAN99NZn4k/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الصور والمخططات (Topology) غير موجودة. راجع المصدر الأصلي." },
                        { title: "شبكات المحاضرة 3", link: "https://drive.google.com/file/d/1TWKtPnZgu4Nc6VBXaz4mNEiYr1NyPbpO/view?usp=sharing", type: "PDF", note: "تنبيه: الملخص نصي. الصور والمخططات (Topology) غير موجودة. راجع المصدر الأصلي." },
                        { title: "شبكات المحاضرة 4", link: "https://drive.google.com/file/d/1FMrUzrt7K_QlnCaTzpPVgwxGl4W2bd0z/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الصور والمخططات (Topology) غير موجودة. راجع المصدر الأصلي." },
                        { title: "شبكات المحاضرة 5", link: "https://drive.google.com/file/d/1dYvQwHeqzdpq_gh20gomQHEO05gm8Drx/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الصور والمخططات (Topology) غير موجودة. راجع المصدر الأصلي." },
                        { title: "شبكات ملخص الملخص (SS)", link: "https://drive.google.com/file/d/16aCw9uQbCHKaAjxegsiHw5lRIzF25cKw/view?usp=drive_link", type: "PDF", note: "تحذير: للمراجعة السريعة فقط. اعتمد على الملخصات الكاملة للفهم." }
                    ], 
                    en: [
                        { title: "Networks Lecture 1", link: "https://drive.google.com/file/d/1tnt9cif76xzK6YOBaflEERK4qqqIDhEJ/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING. Check original slides." },
                        { title: "Networks Lecture 2", link: "https://drive.google.com/file/d/1a0UEC1yn6_v7hUPE3pN1TYFerX4MFqHN/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING. Check original slides." },
                        { title: "Networks Lecture 3", link: "https://drive.google.com/file/d/1EDcCnvBu0S7WdJQnjL9zeJeDM5_5UO1O/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING. Check original slides." },
                        { title: "Networks Lecture 4", link: "https://drive.google.com/file/d/1pHEA3vROWC8OiRo9yP07F2HiVsU4OxIm/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING. Check original slides." },
                        { title: "Networks Lecture 5", link: "https://drive.google.com/file/d/1XlVGdokQcLOyUpniZIW2AdgNoW5VFPT-/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING. Check original slides." },
                        { title: "Networks SS (Super Summary)", link: "https://drive.google.com/file/d/1q4cW05CPcMLkpehTUFwRF4sgB_CayR8f/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only. Use full summaries for complete study." }
                    ] 
                },
                labs: [
                    { title: "Lab 1: Intro to computer networks", link: "https://drive.google.com/file/d/1nNT2uzJOnBayXl9htfU56U370jWNbBQH/view?usp=drive_link", type: "PDF" },
                    { title: "Lab 2: Switch & Routers", link: "https://drive.google.com/file/d/1NRA3qyaWDTm0hZOz_QKdXqPexdjAFrT8/view?usp=drive_link", type: "PDF" },
                    { title: "Lab 2,3,4: Cisco Packet Tracer", link: "https://drive.google.com/file/d/1xmq-Jik3keXaoG5ksRGwGZ78ilMmNOoX/view?usp=drive_link", type: "PDF" },
                    { title: "Lab 5: IP Routing", link: "https://drive.google.com/file/d/1akN64N8jjL57VkbjUd2FPcHaqjlUko6S/view?usp=drive_link", type: "PDF" },
                    { title: "Labs 2,3,4,5 Combined", link: "https://drive.google.com/file/d/1ucOZ1OIQrwbxyuo312V2V-WLcJgaI4jX/view?usp=drive_link", type: "PDF" },
                    { title: "Lab 6,7: IP Addressing", link: "https://drive.google.com/file/d/1XzdvoBdfhT3exRf6nzPLoulauy7ew6AZ/view?usp=drive_link", type: "PDF" },
                    { title: "Lab 8: Cisco Packet Tracer DHCP", link: "https://drive.google.com/file/d/16UrpAW2CR5oagCKd6RIQSZRXWYSUH4LF/view?usp=drive_link", type: "PDF" }
                ],
                quiz: []
            } 
        },

        // --- CYBER SPECIFIC ---
        { 
            id: "elec", name_en: "Electronics", name_ar: "كهربية", 
            type: "cyber", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: { lecs: [], summary: { ar: [], en: [] }, quiz: [] } 
        }
    ]
};
