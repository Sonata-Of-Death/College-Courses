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
                    { title: "Business Administration 1", link: "https://drive.google.com/file/d/1SfIG8hN63n4TRZhapxoW80s7ne18_BuM/view?usp=drive_link", type: "PDF" },
                    { title: "Business Administration 2", link: "https://drive.google.com/file/d/1fnKpjoeIOtT6CHmDIrJdDWX2yvKxxQzY/view?usp=drive_link", type: "PDF" },
                    { title: "Business Administration 3", link: "https://drive.google.com/file/d/1n2iWy6kfiirCuavxrLY6-pOOC63K4sue/view?usp=drive_link", type: "PDF" },
                    { title: "Business Administration 4", link: "https://drive.google.com/file/d/1uW_9OA5UN_nvCSk_xZHiYhQLMA1zO9RW/view?usp=drive_link", type: "PDF" },
                    { title: "Business Administration 5", link: "https://drive.google.com/file/d/14YyXXbXpHhpSKCQbgtW8okePfUFlGoNc/view?usp=drive_link", type: "PDF" },
                    { title: "Business Administration 6", link: "https://drive.google.com/file/d/1dh7CHKscRTSv1e2HbYextQ9-zOXWgrIz/view?usp=drive_link", type: "PDF" },
                    { title: "Business Administration 7", link: "https://drive.google.com/file/d/1eyPLzNI_C0si8xS3C-fWPvX-bfWqWPyT/view?usp=drive_link", type: "PDF" },
                    { title: "Business Administration 8", link: "https://drive.google.com/file/d/11T-BBEpOu5pLMu_3zek7lysdjJWQshvg/view?usp=drive_link", type: "PDF" },
                    { title: "Business Administration 9", link: "https://drive.google.com/file/d/17gb6z07pY-DZMIzCaqMQ2SxRT4pXtzGt/view?usp=drive_link", type: "PDF" },
                    { title: "Business Administration 10", link: "https://drive.google.com/file/d/1JVhV_Iwv5jK0Rwdyu5Le0bfEEaWEp2lS/view?usp=drive_link", type: "PDF" }
                ],
                summary: {
                    ar: [
                        { title: "إدارة أعمال 1", link: "https://drive.google.com/file/d/1F7vo3hHUeVoKyKYd3hf2QvzrU9fcibEP/view?usp=drive_link", type: "PDF" },
                        { title: "إدارة أعمال 2", link: "https://drive.google.com/file/d/1fXgIFsZAlQ13aYqvSt9kk3GqUDVj9Os7/view?usp=drive_link", type: "PDF" },
                        { title: "إدارة أعمال 3", link: "https://drive.google.com/file/d/1AgIYA9M_s6tuDp5IOQ0H1lUG7WAGFtXS/view?usp=drive_link", type: "PDF" },
                        { title: "إدارة أعمال 4", link: "https://drive.google.com/file/d/14R1v4D7BlohNxBSlz8uAbg6Fukm1_ImB/view?usp=drive_link", type: "PDF" },
                        { title: "إدارة أعمال 5", link: "https://drive.google.com/file/d/1VgPijMCRHEvB0-yjMHssyq9NI4O-EMs8/view?usp=drive_link", type: "PDF" },
                        { title: "إدارة أعمال 6", link: "https://drive.google.com/file/d/1MZSKby2X94M-6tP09S12X5SKPkR2WF8Y/view?usp=drive_link", type: "PDF" },
                        { title: "إدارة أعمال 7", link: "https://drive.google.com/file/d/1HQBVZ7BUesp5jhgYN95CdsOH0Iyo-o6R/view?usp=drive_link", type: "PDF" },
                        { title: "إدارة أعمال 8", link: "https://drive.google.com/file/d/1J7kmP7F8Rg4tZyumreLYeJ4t6U-QN1TK/view?usp=drive_link", type: "PDF" },
                        { title: "إدارة أعمال 9", link: "https://drive.google.com/file/d/1zcgI44mTv_ft35Wab5LOk58HEd2AB8hD/view?usp=drive_link", type: "PDF" },
                        { title: "إدارة أعمال 10", link: "https://drive.google.com/file/d/128SJ9xZAH0LajAHx6I5EvKqHuJK-hpcu/view?usp=drive_link", type: "PDF" },
                        { title: "إدارة أعمال ملخص الملخص", link: "https://drive.google.com/file/d/1Ap6jMKv1pq4AYlTp0O9feqS2p3ffhwA8/view?usp=drive_link", type: "PDF", note: "تحذير: للمراجعة السريعة فقط. اعتمد على الملخصات الكاملة للفهم." },
                        { title: "بصمج البزنس (ليلة الامتحان)", link: "https://drive.google.com/file/d/1y-txIdmxIYRG9EV0dB9vtfzxadEflEJ2/view?usp=drive_link", type: "PDF", note: "طوارئ: لمن لم يذاكر شيئاً. هذا الملف للإنقاذ فقط ولا يغني عن الفهم." }
                    ],
                    en: [
                        { title: "Business Administration L1", link: "https://drive.google.com/file/d/1hPUW1jwImNGhT3ZRV6c1ufMr7Rx3V5lT/view?usp=drive_link", type: "PDF" },
                        { title: "Business Administration L2", link: "https://drive.google.com/file/d/1zlOuPy-m5HypvweMxyP4VSsl8viy9smZ/view?usp=drive_link", type: "PDF" },
                        { title: "Business Administration L3", link: "https://drive.google.com/file/d/17tE6NuyglH5a_W-0rKBDOhaJM0pxpuPl/view?usp=drive_link", type: "PDF" },
                        { title: "Business Administration L4", link: "https://drive.google.com/file/d/1a4EkOkmXRS4UxrDMTxt57jEWZjQVfOBa/view?usp=drive_link", type: "PDF" }, 
                        { title: "Business Administration L5", link: "https://drive.google.com/file/d/1J65Y68JWi_dgQxyAJL9jtXlM8RyhSxyA/view?usp=drive_link", type: "PDF" },
                        { title: "Business Administration L6", link: "https://drive.google.com/file/d/1BhrQg6fQEJabFp5BySLgbU9GrlFXhIes/view?usp=drive_link", type: "PDF" },
                        { title: "Business Administration L7", link: "https://drive.google.com/file/d/1K3dK_xSkSggdvqbh-r5rTe0H8K5BMKo3/view?usp=drive_link", type: "PDF" },
                        { title: "Business Administration L8", link: "https://drive.google.com/file/d/1Je9TGB2naO45_1VRh4wYug3lU2MBj0EJ/view?usp=drive_link", type: "PDF" },
                        { title: "Business Administration L9", link: "https://drive.google.com/file/d/1vmY5ZC6V-2RanIWGjhUw85gYZnYDGypZ/view?usp=drive_link", type: "PDF" },
                        { title: "Business Administration L10", link: "https://drive.google.com/file/d/1ZileiSN1eoJVdR_6b6BFR2r-SOPJMSz7/view?usp=drive_link", type: "PDF" },
                        { title: "Business Administration SS", link: "https://drive.google.com/file/d/1HFkIab0EAqFD_yQGz7tqOLv_qUorgZIi/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only. Use full summaries for complete study." },
                        { title: "Finish BA in Exam Night", link: "https://drive.google.com/file/d/1zjUQ8LIPDvhWe8hERxnJ6lQ5bvDwBO4C/view?usp=drive_link", type: "PDF", note: "EMERGENCY: Ultra-condensed for zero-prep students. Use only if you haven't studied." }
                    ]
                },
                quiz: []
            }
        },

        // 2. English
        { 
            id: "eng", name_en: "English", name_ar: "لغة إنجليزية", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: {
                lecs: {
                    main: [
                        { title: "Lecture 1", link: "https://drive.google.com/file/d/1FiX8j3z2Xu2Mnp6q_sS2MCIILg8wg5Zr/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 2", link: "https://drive.google.com/file/d/1AbCUjmHlQR0Ny79x0SybVlqY3x8Curmc/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 3", link: "https://drive.google.com/file/d/1wcar7lhIwpk6KN8xOH-wlp6vpz3tymlk/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 4", link: "https://drive.google.com/file/d/1MULMksYxmsxZ7199QBmd8eaLNxanAGP9/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 5", link: "https://drive.google.com/file/d/1LBLJUnPN25DDsFeqFcL7Bemlw8lRrEHD/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 6", link: "https://drive.google.com/file/d/1LpcKBTJUor-jZb4W-JVz79HOrw6wTqU0/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 7", link: "https://drive.google.com/file/d/1noT5w343ZPdh5CsXg0cIyMeqXEnbb3fE/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 8", link: "https://drive.google.com/file/d/1nE9prljNFDrNHp3NTwpV3fBUqctySldz/view?usp=drive_link", type: "PDF" },
                        { title: "Glossary", link: "https://drive.google.com/file/d/1xTDinSc4KRZ3gtUvrbgw_nnqzQHcatwU/view?usp=drive_link", type: "PDF" }
                    ],
                    solutions: [
                        { title: "Lecture 1 Solutions", link: "https://drive.google.com/file/d/1P-JSc4jmb3P0pimH9iDaVnBtjvdc1Q8M/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 2 Solutions", link: "https://drive.google.com/file/d/1t-id7IaWRfGUnf4H3etnylk3UCHilpMq/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 3 Solutions", link: "https://drive.google.com/file/d/18fKe6qX8Of5JIwFc-lssExu4wrvNUSEO/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 4 Solutions", link: "https://drive.google.com/file/d/1C8wLDNR_SkWoUDdAdvhM7apo9QoGhPqB/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 5 Solutions", link: "https://drive.google.com/file/d/1sjuj1oAHZapjJ71HU7AO6qsnCe7oYa-u/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 6 Solutions", link: "https://drive.google.com/file/d/1m_8Djw2p2iEqyOI6-Nl9tpbQG8emCdoC/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 7 Solutions", link: "https://drive.google.com/file/d/1eO9eAjA_ObAbSEBAcejjQBWskQXKGFWv/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 8 Solutions", link: "https://drive.google.com/file/d/1RgREzEiAKWxYpz3Sso4zaC6NtpizjxKs/view?usp=drive_link", type: "PDF" }
                    ]
                },
                summary: [
                    { title: "English L1 Summary", link: "https://drive.google.com/file/d/1_FPxe3GK0Ewr8rTvMxeVYmL-4ih6vHGB/view?usp=drive_link", type: "PDF" },
                    { title: "English L2 Summary", link: "https://drive.google.com/file/d/1kEn6tbw5EMGOX3YgnMJ4au6g26x3i-El/view?usp=sharing", type: "PDF" },
                    { title: "English L3 Summary", link: "https://drive.google.com/file/d/1RNBLcjXGr4j9dC3y1EqwI4lyt5JDPtCW/view?usp=drive_link", type: "PDF" },
                    { title: "English L4 Summary", link: "https://drive.google.com/file/d/19g2aFDI66XVduvIvxeVzlnOswgtNA_m8/view?usp=drive_link", type: "PDF" },
                    { title: "English L5 Summary", link: "https://drive.google.com/file/d/1ndB_03EUYvKoAfqP5NaH0OTHDug7Sl_3/view?usp=drive_link", type: "PDF" },
                    { title: "English L6 Summary", link: "https://drive.google.com/file/d/10jA8M_Q0_akVXOLgRL8hyDxx0CQWBI13/view?usp=drive_link", type: "PDF" },
                    { title: "English L7 Summary", link: "https://drive.google.com/file/d/1KR7pu94TL29hE3jqhXdRcaOiuPpxybKQ/view?usp=drive_link", type: "PDF" },
                    { title: "English L8 Summary", link: "https://drive.google.com/file/d/1UhZo5NfsovbXWewJcdiAhT28nm_e8jKK/view?usp=drive_link", type: "PDF" },
                    { title: "English SS", link: "https://drive.google.com/file/d/1M1Jd3Afrxpjo5BWsGJJNvh27QNfRI6bj/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only. Use full summaries for complete study." }
                ],
                quiz: []
            } 
        },

        // 3. Creative Thinking
        { 
            id: "cre", name_en: "Creative Thinking", name_ar: "تفكير إبداعي", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: {
                lecs: [
                    { title: "Lecture 1", link: "https://drive.google.com/file/d/1J2rI-iDRSMIDB_Uw-V15PXgpFPwpZNCP/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 2", link: "https://drive.google.com/file/d/1mjTGYV2fxLSr7oh3haFz4QiwghbOSLck/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 3", link: "https://drive.google.com/file/d/17q9-9qNUPyC0SdR7qnLKHqz9c_qhRDBc/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 4", link: "https://drive.google.com/file/d/1cWXu3tpCsDfg6Z0oBo64HEkpJeU24rgw/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 5", link: "https://drive.google.com/file/d/1NxEhJvW7iWYyfaqiT1vr5g0Vl9Y6yH5M/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 6", link: "https://drive.google.com/file/d/1sUquE7zldkBz9B94ifmtaW89Xq75UBNg/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 7", link: "https://drive.google.com/file/d/1bPFlw4VgILE5hDsXcg7a3A3Tph6tAFSR/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 8", link: "https://drive.google.com/file/d/11HHkIyLxph1zsY5li4OUoD2iUWOb7U26/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 9", link: "https://drive.google.com/file/d/1Mchmdp9nQK1XTTz5HeGIIajXiFvQTcBw/view?usp=drive_link", type: "PDF" }
                ],
                summary: { 
                    ar: [
                        { title: "تفكير ابداعي 1", link: "https://drive.google.com/file/d/1qvHujkUvLBbckgs9dOjF0JCtvNCbahN3/view?usp=drive_link", type: "PDF" },
                        { title: "تفكير ابداعي 2", link: "https://drive.google.com/file/d/1pGXk277k-nfZvgCdOBqbXJwJUtVLu0Z4/view?usp=drive_link", type: "PDF" },
                        { title: "تفكير ابداعي 3", link: "https://drive.google.com/file/d/1LS-XMS-cGAHMGV6d67lE0ImsgFmZSQEz/view?usp=drive_link", type: "PDF" },
                        { title: "تفكير ابداعي 4", link: "https://drive.google.com/file/d/10pfMpOwP-u5iaKI6-rOfH8JkQFFnVJK3/view?usp=drive_link", type: "PDF" },
                        { title: "تفكير ابداعي 5", link: "https://drive.google.com/file/d/1GUN70YDuRC9UVpJAd_6S3ASIwWJoNsdl/view?usp=drive_link", type: "PDF" },
                        { title: "تفكير ابداعي 6", link: "https://drive.google.com/file/d/1MpGcKDKtQPnvS_PSQqo3Tas6wCkxFp9W/view?usp=drive_link", type: "PDF" },
                        { title: "تفكير ابداعي 7", link: "https://drive.google.com/file/d/1FVwHgg_SYMs-yqY-NcQkOeb3zXAsCwKC/view?usp=drive_link", type: "PDF" },
                        { title: "تفكير ابداعي 8", link: "https://drive.google.com/file/d/1pQVgeTF414Hyc64C8KUuVfOGxvdNl2xK/view?usp=drive_link", type: "PDF" },
                        { title: "تفكير ابداعي 9", link: "https://drive.google.com/file/d/1GKxkzjWolAalkOpy47lcAQOMeWWfR-vj/view?usp=drive_link", type: "PDF" },
                        { title: "تفكير ابداعي ملخص الملخص", link: "https://drive.google.com/file/d/1WXSB18Uy6cvDMtk7kN21Re3PCW2YoEKR/view?usp=drive_link", type: "PDF", note: "تحذير: للمراجعة السريعة فقط. اعتمد على الملخصات الكاملة للفهم." },
                        { title: "تفكير ابداعي كل المقارنات", link: "https://drive.google.com/file/d/14G5xHl-Fhub8MJvX_lqRYPHitoyDV2q7/view?usp=drive_link", type: "PDF", note: "مفيد: تجميع شامل لكل مقارنات المنهج." }
                    ], 
                    en: [
                        { title: "Creative Thinking Lecture 1", link: "https://drive.google.com/file/d/1_OXUkRvaXZJ46N4hEWeNyP6BxsM2xAkp/view?usp=drive_link", type: "PDF" },
                        { title: "Creative Thinking Lecture 2", link: "https://drive.google.com/file/d/1VtCUOpxNjXcNs4d624HCkLdLo0fKGTz3/view?usp=drive_link", type: "PDF" },
                        { title: "Creative Thinking Lecture 3", link: "https://drive.google.com/file/d/1PaBw6TPm68oCYAN8bZlaES3nEgXyKxNN/view?usp=drive_link", type: "PDF" },
                        { title: "Creative Thinking Lecture 4", link: "https://drive.google.com/file/d/16SMiUK0y-cXUS3VdH2DVw7T-Ym8FpBAw/view?usp=drive_link", type: "PDF" },
                        { title: "Creative Thinking Lecture 5", link: "https://drive.google.com/file/d/1e3YO_S6npn5sF7Dhs5ARUbbG5o-zF0-R/view?usp=drive_link", type: "PDF" },
                        { title: "Creative Thinking Lecture 6", link: "https://drive.google.com/file/d/1XHRPmjhqny_eibgDcQ_peaorsiYc-sFW/view?usp=drive_link", type: "PDF" },
                        { title: "Creative Thinking Lecture 7", link: "https://drive.google.com/file/d/1g1TDUL2wE2wqNaaimRUrgtOEmItSNiEa/view?usp=drive_link", type: "PDF" },
                        { title: "Creative Thinking Lecture 8", link: "https://drive.google.com/file/d/1Mqik26GmfdB0MteTOiBgYPGXVSitLPkN/view?usp=drive_link", type: "PDF" },
                        { title: "Creative Thinking Lecture 9", link: "https://drive.google.com/file/d/1st4-iYTnGrI5F5X9DWhKftsOzlDV_X8R/view?usp=drive_link", type: "PDF" },
                        { title: "Creative Thinking SS", link: "https://drive.google.com/file/d/1UufaftTaieq9rw3UrgfYhhmMmD6SWLfW/view?usp=drive_link", type: "PDF" }, note: "Warning: For quick review only. Use full summaries for complete study." },
                        { title: "Creative Thinking All comparisons", link: "https://drive.google.com/file/d/1mjrbQ24jGC-yf3YnDls2Kw2FYay6gkhJ/view?usp=drive_link", type: "PDF", note: "Useful: Collection of all course comparisons." }
                    ] 
                },
                quiz: []
            } 
        },

        // 4. Math 0
        { 
            id: "m0", name_en: "Math 0", name_ar: "رياضيات 0", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: {
                lecs: [
                    { title: "lecture 1", link: "https://drive.google.com/file/d/1RF1eThH4_fohT3gEWFPINHBkm_7z6A-Z/view?usp=drive_link", type: "PDF" },
                    { title: "lecture 2", link: "https://drive.google.com/file/d/1avLGvuiYa21ukYin_8EMUbq1pEagMh7r/view?usp=drive_link", type: "PDF" },
                    { title: "lecture 3", link: "https://drive.google.com/file/d/1mkPPuSPF8Anaapw2kLNZiPW1vS6z2kOE/view?usp=drive_link", type: "PDF" },
                    { title: "lecture 4", link: "https://drive.google.com/file/d/1bBBRsvbFlMlCOOvYI0H8ybistFGhtUVI/view?usp=drive_link", type: "PDF" },
                    { title: "lecture 5", link: "https://drive.google.com/file/d/15uoMggAVOOVpTIOHAzvEDQHZzUiY5dhp/view?usp=drive_link", type: "PDF" },
                    { title: "lecture 6", link: "https://drive.google.com/file/d/1miskxqRU9r-iQxH5xnjcVDTyf6kPo5bC/view?usp=drive_link", type: "PDF" },
                    { title: "lecture 7", link: "https://drive.google.com/file/d/1NQB_Vhcdrr9zYta5AfZgqQRzcodJM6-N/view?usp=drive_link", type: "PDF" },
                    { title: "lecture 8", link: "https://drive.google.com/file/d/1UPRQo-1sGdfDSoSeIorr5KQQnNh56swv/view?usp=drive_link", type: "PDF" }
                ],
                summary: { 
                    ar: [
                        { title: "ماث0 محاضرة 1", link: "https://drive.google.com/file/d/1tGxGUk82VcOM_4M-ETT5ZyO0hXYPU9ZF/view?usp=drive_link", type: "PDF" },
                        { title: "ماث0 محاضرة 2", link: "https://drive.google.com/file/d/1KUgt_v833k0KA4x8ryunnAFlHvVaoJol/view?usp=drive_link", type: "PDF" },
                        { title: "ماث0 محاضرة 3", link: "https://drive.google.com/file/d/1VJ9Mnss4STN7YG2wuHGIsetr0tYLrItI/view?usp=drive_link", type: "PDF" },
                        { title: "ماث0 محاضرة 4", link: "https://drive.google.com/file/d/1G9zIRSIqBaZ4-QADcR0LfOG_YyK6yxS1/view?usp=drive_link", type: "PDF" },
                        { title: "ماث0 محاضرة 5", link: "https://drive.google.com/file/d/1ipKOpcdoIRirtz75KFffCU79tJjnZo7B/view?usp=drive_link", type: "PDF" },
                        { title: "ماث0 محاضرة 6", link: "https://drive.google.com/file/d/1NSKAzMVwbSw3ReBQkISnRuCJx_9G1Dr4/view?usp=drive_link", type: "PDF" },
                        { title: "ماث0 محاضرة 7", link: "https://drive.google.com/file/d/1ZmKHoHi54DJ-7ug1_QFRze0JDijEqWxh/view?usp=drive_link", type: "PDF" },
                        { title: "ماث0 محاضرة 8", link: "https://drive.google.com/file/d/1XrVzFBdq5dqtb5x4LHSoREXr8zPpHHQ_/view?usp=drive_link", type: "PDF" }
                    ], 
                    en: [
                        { title: "Math0 Lecture 1", link: "https://drive.google.com/file/d/1YdUOYKQUCwwLkmzM5NKLQA8vnnLqrAkh/view?usp=drive_link", type: "PDF" },
                        { title: "Math0 Lecture 2", link: "https://drive.google.com/file/d/1VHPjHjtBxoGgM9vU3dc4X_eX1OssXbfq/view?usp=drive_link", type: "PDF" },
                        { title: "Math0 Lecture 3", link: "https://drive.google.com/file/d/1iMdRNRQuw498w3lF_e5O3Nnu6vRYQnCg/view?usp=drive_link", type: "PDF" },
                        { title: "Math0 Lecture 4", link: "https://drive.google.com/file/d/1NrYxfLOGdSKqEPcto9JBXDMg11r_r0AM/view?usp=drive_link", type: "PDF" },
                        { title: "Math0 Lecture 5", link: "https://drive.google.com/file/d/1FsoawJyuZgQsYHqOXXoSEe5JlLi6zM55/view?usp=drive_link", type: "PDF" },
                        { title: "Math0 Lecture 6", link: "https://drive.google.com/file/d/1wEz1Zz6J1Xd_C8NdwV8a2YHyAI3dsHV2/view?usp=drive_link", type: "PDF" },
                        { title: "Math0 Lecture 7", link: "https://drive.google.com/file/d/1JzBAV7MW24dxudMEngpZxLHBy9nUGVHl/view?usp=drive_link", type: "PDF" },
                        { title: "Math0 Lecture 8", link: "https://drive.google.com/file/d/1OqLTjArZnG2VFBnA9ykoUDz1xsyA1ssD/view?usp=drive_link", type: "PDF" }
                    ] 
                },
                quiz: []
            } 
        },

        // 5. Physics
        { 
            id: "phy", name_en: "Physics", name_ar: "فيزياء", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: {
                lecs: [
                    { title: "Lecture 1", link: "https://drive.google.com/file/d/1gbMIrNAc2_4E2c6Bj6F4tL1Ysdo2cwAx/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 2", link: "https://drive.google.com/file/d/1J1_sRlrTXjMGCibD3EjhZ224iZ3mspvo/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 3", link: "https://drive.google.com/file/d/1pOHMpk7aQpBd1VlSDsMG2KnqHZCqTVv4/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 4", link: "https://drive.google.com/file/d/1JKkNkf-y0ENXzjJyhWgamaP9zTrzu8vd/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 5", link: "https://drive.google.com/file/d/1dk9oaEPIRQjjS8fRv3Ci9JFmheUFfdJh/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 6", link: "https://drive.google.com/file/d/1h7tWkMu57YQiPqA6vddoZc9YyWMzDqxU/view?usp=drive_link", type: "PDF" },
                    { title: "Vectors", link: "https://drive.google.com/file/d/1jhN3LhAH9KjTj7onXIn6zDXXlL9Jxp6Y/view?usp=drive_link", type: "PDF" }
                ],
                summary: {
                    ar: [
                        { title: "المحاضرة 1", link: "https://drive.google.com/file/d/1EGP5d2n9bFaPvH37FALF4aa8_w3L38is/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "المحاضرة 2", link: "https://drive.google.com/file/d/1QEygYZdvzlf9TfknBBUAdZweZgOx_o-t/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "المحاضرة 3", link: "https://drive.google.com/file/d/1fcmpHMT_0fuc3u--rESlcPnyi5wykkXz/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "المحاضرة 4", link: "https://drive.google.com/file/d/1SXUdzzJBTbleOsFq9Wt9kRE7Q3_XL7rV/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "المحاضرة 5", link: "https://drive.google.com/file/d/1LDqbAocoUpPWmC3SpwyheelE1hxj8mRA/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "المحاضرة 6", link: "https://drive.google.com/file/d/1qweIXNJ7mpZ1y5uOXVYvIN_2IOia2tsd/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "المتجهات", link: "https://drive.google.com/file/d/1KfxA4HersIlEIGVDxkosVpQZFeyJW8Kg/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات والمخططات غير موجودة. راجع المحاضرة الأصلية." }
                    ],
                    en: [
                        { title: "Lecture 1", link: "https://drive.google.com/file/d/1748GcEmPY7HHI6tlvQ-gNFPFxWzqQQm9/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and graphs are MISSING. Check original slides." },
                        { title: "Lecture 2", link: "https://drive.google.com/file/d/1DcZOHWti5fRrSGpIcXO8u6tnh9Vs16T_/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and graphs are MISSING. Check original slides." },
                        { title: "Lecture 3", link: "https://drive.google.com/file/d/1jl8O9I7RhR6QTF81_B0Jeufd0K9pf9rt/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and graphs are MISSING. Check original slides." },
                        { title: "Lecture 4", link: "https://drive.google.com/file/d/1OSFgPS3aO9A8j9D0BPQjWt4A8ARzq_bY/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and graphs are MISSING. Check original slides." },
                        { title: "Lecture 5", link: "https://drive.google.com/file/d/1utMmZao8ruskEwtg4WteYnujcRYsEn7W/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 6", link: "https://drive.google.com/file/d/1fIgFMU8C-rwPrnsuwSbkMzXhJNmO3GdO/view?usp=drive_link", type: "PDF" },
                        { title: "Vectors", link: "https://drive.google.com/file/d/17vYwS9RyFQq-Enf-B_JPIJdkYtubmix6/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and graphs are MISSING. Check original slides." }
                    ]
                },
                quiz: []
            } 
        },
        
        // 6. Math 1
        { 
            id: "m1", name_en: "Math 1", name_ar: "رياضيات 1", 
            type: "shared", year: 1, term: 1, material: ["core_material", "quiz"], 
            sections: ["Differentiation", "Integration"],
            content: { 
                core_material: [
                    { title: "Calculus 1", link: "https://drive.google.com/file/d/1OVzzy8gWm-hDzm9ZwolnRDjDRYZznAsZ/view?usp=drive_link", type: "PDF" },
                    { title: "Calculus 2", link: "https://drive.google.com/file/d/1jYS3wEBKfKEW0hTa8fHCcP4rNHvTVD2m/view?usp=drive_link", type: "PDF" },
                    { title: "Calculus 3", link: "https://drive.google.com/file/d/1kz_Oggf6WaRuxZ7_fnNajgJNX9uImRZ7/view?usp=drive_link", type: "PDF" },
                    { title: "Calculus 4", link: "https://drive.google.com/file/d/18kP88qP_Xz51f2CbRmJCXunhbk1b4BDz/view?usp=drive_link", type: "PDF" },
                    { title: "Calculus 5", link: "https://drive.google.com/file/d/1Qt6NMQBU5P4tmzkRZN0xqpsUbnTgpkTL/view?usp=drive_link", type: "PDF" },
                    { title: "Calculus 6", link: "https://drive.google.com/file/d/1Wa0eNcvjD7nWpa3885XiIJWThT9UR8De/view?usp=drive_link", type: "PDF" },
                    { title: "Integration 1", link: "https://drive.google.com/file/d/1hvb9knJdiy1QZQ-yYPVDhT1vQlG22edA/view?usp=drive_link", type: "PDF" },
                    { title: "Integration 2", link: "https://drive.google.com/file/d/1HR_n_kRKomqB7fgf8hNHlfjMVkYHE3wn/view?usp=drive_link", type: "PDF" },
                    { title: "Integration 3", link: "https://drive.google.com/file/d/1G1QgtfpKgOSX2aUU1_CRnROjJlDf3AT9/view?usp=drive_link", type: "PDF" }
                ],
                quiz: []
            } 
        },

        // 7. Programming (UPDATED)
        { 
            id: "prog", name_en: "Programming", name_ar: "برمجة", 
            type: "shared", year: 1, term: 1, material: ["chapters", "lecs", "summary", "labs", "quiz"], 
            content: {
                chapters: [
                    { title: "Chapter 1", link: "https://docs.google.com/presentation/d/1PjzHemUz7MqObYZ8PbYAaVYQwG10qvzk/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                    { title: "Chapter 2", link: "https://docs.google.com/presentation/d/1Cs74GdSiAcYSU_vYYSWe20cVXNAUQol6/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                    { title: "Chapter 3", link: "https://docs.google.com/presentation/d/1flWKpymJTJW8G2zHv5IxOTzghKXPBLgv/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                    { title: "Chapter 4", link: "https://docs.google.com/presentation/d/1DadEiGuBeEM1axw6Gpb5eKrqD-QWQZLm/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" }
                ],
                lecs: [
                    { title: "Lecture 1", link: "https://drive.google.com/file/d/1PWNAoSdtyGmDlmhL5CN7A9dutxr4zMda/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 2", link: "https://drive.google.com/file/d/1tbiHFwoHuAcemOc_vTpXDOuTwHhOz-t2/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 3", link: "https://drive.google.com/file/d/1m7UK3SAL5_QgHqhm04e3nOozWtyI5wr5/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 4", link: "https://drive.google.com/file/d/1yTqVRlC4zJVixZebP0wlNXH0dxI1tX3B/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 5", link: "https://drive.google.com/file/d/1Ix2OQXPaCLO0-RVHfLOhFSkSnx0Q5O8e/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 6", link: "https://drive.google.com/file/d/1zhKADp-UY9hOFpohVzAXZVVUQoNq-xt5/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 7", link: "https://drive.google.com/file/d/1yr4Vfpw1b6J4202D8kqz-6qSAvr-cqGj/view?usp=drive_link", type: "PDF" },
                    { title: "Lecture 8", link: "https://drive.google.com/file/d/1wbN4ehAJfQkEgGKDnIs48pJ2N9UfHowc/view?usp=drive_link", type: "PDF" }
                ],
                summary: {
                    ar: [
                        { title: "البرمجة المحاضرة 1", link: "https://drive.google.com/file/d/1VV_LjImh0ylWSp6gz-KPc92b1svS4-wE/view?usp=drive_link", type: "PDF" },
                        { title: "البرمجة المحاضرة 2", link: "https://drive.google.com/file/d/11dQ4DV3dfr5kH3CPCe4PNOOnDD6539aQ/view?usp=drive_link", type: "PDF" },
                        { title: "البرمجة المحاضرة 3", link: "https://drive.google.com/file/d/1Hrm25_Oz7wArg1FVCo1uZrC-MQu_71i_/view?usp=drive_link", type: "PDF" },
                        { title: "البرمجة المحاضرة 4", link: "https://drive.google.com/file/d/1yNAevuslVyEJ0VyGLTgWWsDOJTa-UlmJ/view?usp=drive_link", type: "PDF" },
                        { title: "البرمجة المحاضرة 5", link: "https://drive.google.com/file/d/19lF3lj0rx5F1ehWuof4DyGZGxQuZIx-N/view?usp=drive_link", type: "PDF" },
                        { title: "البرمجة المحاضرة 6", link: "https://drive.google.com/file/d/1BPCRn9gUOx0GG77vD0tRVDsJgjdCY7fG/view?usp=drive_link", type: "PDF" },
                        { title: "البرمجة المحاضرة 7", link: "https://drive.google.com/file/d/10gogUFaaUZ4VRxAvajmYdzJ4Xmzeg54j/view?usp=drive_link", type: "PDF" },
                        { title: "البرمجة المحاضرة 8", link: "https://drive.google.com/file/d/1nNvemZD5p0G-jXfvcm9ufw0lvRI3ViPh/view?usp=drive_link", type: "PDF" }
                    ],
                    en: [
                        { title: "Programming Lecture 1", link: "https://drive.google.com/file/d/15-_PmcrpBK8B7ozY4lIyfXvjVRo0r4Wh/view?usp=drive_link", type: "PDF" },
                        { title: "Programming Lecture 2", link: "https://drive.google.com/file/d/1Wb7bZs1DTvle4DhXPavPzWhrgY_lzVJG/view?usp=drive_link", type: "PDF" },
                        { title: "Programming Lecture 3", link: "https://drive.google.com/file/d/18PjxFP-n3jMSf-yKzkDLBBgTBaHCWChA/view?usp=drive_link", type: "PDF" },
                        { title: "Programming Lecture 4", link: "https://drive.google.com/file/d/15zTRy4pvR4tzHi3bFHRjL6NDrWV7ow4O/view?usp=drive_link", type: "PDF" },
                        { title: "Programming Lecture 5", link: "https://drive.google.com/file/d/179X_qjjw-8O_8XTdDV9HPxWhRWaOAEC0/view?usp=drive_link", type: "PDF" },
                        { title: "Programming Lecture 6", link: "https://drive.google.com/file/d/1Tk6TJELmKgrWiif-B22ZLQzXJzcoiKre/view?usp=drive_link", type: "PDF" },
                        { title: "Programming Lecture 7", link: "https://drive.google.com/file/d/1hVPfRZZtwlWzhUtDQqzsZmREU1vUzjgs/view?usp=drive_link", type: "PDF" },
                        { title: "Programming Lecture 8", link: "https://drive.google.com/file/d/16l8BIg3cfjQyB3255tUo5m2qfLEh76lx/view?usp=drive_link", type: "PDF" }
                    ]
                },
                labs: {
                    material: [
                        { title: "Lab 1: Introduction", link: "#", type: "Note", note: "لاب تعريفي فقط لا يوجد ملفات شرح." },
                        { title: "Lab 2: Java Basics", link: "https://docs.google.com/presentation/d/1i8nkiAftO_OuGSb54YDjtAbqKTJJ8yeQ/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                        { title: "Lab 3: Java", link: "https://drive.google.com/file/d/1MEhitevpKrENiG8_MOWVcRIw3fH5WmG4/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 4: Java", link: "https://drive.google.com/file/d/1Ox0vduZfyf4sneobRfEQjAvPKJHMpEzq/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 5: Java", link: "https://drive.google.com/file/d/1kgMBGD9vXxTsmnLhJWh04zLjqR8PD2JB/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 6: Java", link: "https://docs.google.com/presentation/d/19f1u9T1lFCgsPcHj6526X--Q1VCjOTjL/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                        { title: "Lab 7: Java", link: "https://docs.google.com/presentation/d/1WYSt-Pj1w-8iuYAGgCbhDw4TBH6lgge-/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                        { title: "Lab 8: Java", link: "https://docs.google.com/presentation/d/1GsJ4zD546IQGxaDd8lFUcsQvVB3kpOEb/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" }
                    ],
                    questions: {
                        labs_list: [], // Waiting for questions
                    }
                },
                quiz: []
            } 
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
                        { title: "شبكات ملخص الملخص", link: "https://drive.google.com/file/d/16aCw9uQbCHKaAjxegsiHw5lRIzF25cKw/view?usp=drive_link", type: "PDF", note: "تحذير: للمراجعة السريعة فقط. اعتمد على الملخصات الكاملة للفهم." }
                    ], 
                    en: [
                        { title: "Networks Lecture 1", link: "https://drive.google.com/file/d/1tnt9cif76xzK6YOBaflEERK4qqqIDhEJ/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING. Check original slides." },
                        { title: "Networks Lecture 2", link: "https://drive.google.com/file/d/1a0UEC1yn6_v7hUPE3pN1TYFerX4MFqHN/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING. Check original slides." },
                        { title: "Networks Lecture 3", link: "https://drive.google.com/file/d/1EDcCnvBu0S7WdJQnjL9zeJeDM5_5UO1O/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING. Check original slides." },
                        { title: "Networks Lecture 4", link: "https://drive.google.com/file/d/1pHEA3vROWC8OiRo9yP07F2HiVsU4OxIm/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING. Check original slides." },
                        { title: "Networks Lecture 5", link: "https://drive.google.com/file/d/1XlVGdokQcLOyUpniZIW2AdgNoW5VFPT-/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING. Check original slides." },
                        { title: "Networks SS", link: "https://drive.google.com/file/d/1q4cW05CPcMLkpehTUFwRF4sgB_CayR8f/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only. Use full summaries for complete study." }
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

        // 9. Electronics
        { 
            id: "elec", name_en: "Electronics", name_ar: "كهربية", 
            type: "cyber", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: { 
                lecs: [
                    { title: "Electronics Lecture 1", link: "https://drive.google.com/file/d/1h3EAM3KkMCAOR_ABzFxO7XdoLsCOo_3K/view?usp=drive_link", type: "PDF" },
                    { title: "Electronics Lecture 2", link: "https://drive.google.com/file/d/1NzdvlkEp8PeAtscwO6uIltO96_0qxG9h/view?usp=drive_link", type: "PDF" },
                    { title: "Electronics Lecture 3", link: "https://drive.google.com/file/d/1aKwBkKopAJDPp88W9wALaJ-epzDm-lfx/view?usp=drive_link", type: "PDF" },
                    { title: "Electronics Lecture 4", link: "https://drive.google.com/file/d/1ncdz3nEe1M5eyPkXpBM-zkwYq8U3aHLz/view?usp=drive_link", type: "PDF" },
                    { title: "Electronics Lecture 5", link: "https://drive.google.com/file/d/1OQtjXV6fH6xRnnwWEyv-3v3W2Ynk_l-y/view?usp=drive_link", type: "PDF" },
                    { title: "Electronics Lecture 6", link: "https://drive.google.com/file/d/1qT8Uld2FeEeCD7A7pCUf-KyNXe-8aVB9/view?usp=drive_link", type: "PDF" },
                    { title: "Electronics Lecture 7", link: "https://drive.google.com/file/d/1EOVcnYKuA98s684zCsEOEwxXAdy3ToCh/view?usp=drive_link", type: "PDF" },
                    { title: "Electronics Lecture 8", link: "https://drive.google.com/file/d/16WUVpM46vniRitvAbOTPgK__PIdRQFND/view?usp=drive_link", type: "PDF" }
                ],
                summary: { 
                    ar: [
                        { title: "كهربية المحاضرة 1", link: "https://drive.google.com/file/d/1v4g3B7lU-dNErIa-i3tzNenEMnCxtV2a/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "كهربية المحاضرة 2", link: "https://drive.google.com/file/d/1x0FWpgHXWgUqyTO4WBkCDWiV2P_54TX8/view?usp=sharing", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "كهربية المحاضرة 3", link: "https://drive.google.com/file/d/1XINSocJZpcLygRp5oAMh17fzsbu2xCPv/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "كهربية المحاضرة 4", link: "https://drive.google.com/file/d/1D8nNq3xN3iKdR3AHpr34pb0ZVx-rid8j/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "كهربية المحاضرة 5", link: "https://drive.google.com/file/d/1WKeRRwFBE5QOA4qCsGXW-_Yae9Gzk_RK/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "كهربية المحاضرة 6", link: "https://drive.google.com/file/d/13czvxtWAAQaQCblzVsnfs53EPFAsdGJN/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "كهربية المحاضرة 7", link: "https://drive.google.com/file/d/1Kfu8qjNEd1qKtP-x7m2PsheiestUtEJJ/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "كهربية المحاضرة 8", link: "https://drive.google.com/file/d/1GN9cpDjPadIojMaCqFWXJxRyOLhW3knt/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر والمخططات غير موجودة. راجع المحاضرة الأصلية." },
                        { title: "كهربية ملخص الملخص", link: "https://drive.google.com/file/d/1s-ue1jES-u7bfKzGyOBKG2fTiyTpXPYN/view?usp=drive_link", type: "PDF", note: "تحذير: للمراجعة السريعة فقط. اعتمد على الملخصات الكاملة للفهم." }
                    ], 
                    en: [
                        { title: "Electronics Lecture 1", link: "https://drive.google.com/file/d/1k2JjGNtbZdNmlhAjpoUT2A0WP7qpMQLo/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams are MISSING. Check original slides." },
                        { title: "Electronics Lecture 2", link: "https://drive.google.com/file/d/1-fMz12nTw8iu3S-HdEpI8furpT02Z3eu/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams are MISSING. Check original slides." },
                        { title: "Electronics Lecture 3", link: "https://drive.google.com/file/d/1jeG_hZ9QsnC7oK10ZFzFk9flF0Y1CLDK/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams are MISSING. Check original slides." },
                        { title: "Electronics Lecture 4", link: "https://drive.google.com/file/d/1G2h24fZDec-rcO_Ko1IsYr3g3HO2ZOfK/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams are MISSING. Check original slides." },
                        { title: "Electronics Lecture 5", link: "https://drive.google.com/file/d/1YneDbeaXo_zZB7PZvYMD42ROSXvUiMdn/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams are MISSING. Check original slides." },
                        { title: "Electronics Lecture 6", link: "https://drive.google.com/file/d/1djoN9AciHheLMIv-XuuOICBDCiAih-SR/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams are MISSING. Check original slides." },
                        { title: "Electronics Lecture 7", link: "https://drive.google.com/file/d/12Ud-GCkLenOTWmzmwpRCAsvfQKMnfu1f/view?usp=drive_link", type: "PDF" },
                        { title: "Electronics Lecture 8", link: "https://drive.google.com/file/d/1SGl6uMC_OJO1QhnVYrPjeiHYzQvOBKKW/view?usp=drive_link", type: "PDF" },
                        { title: "Electronics SS", link: "https://drive.google.com/file/d/1Vb9nSkoJ0gev4tw_jqd1W-bhMULABDw6/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only. Use full summaries for complete study." }
                    ] 
                },
                quiz: []
            } 
        }
    ]
};

}

{
type: uploaded file
fileName: script.js
fullContent:
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

// --- Standard Views (Home, Year, Term, Dashboard) ---
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

}
