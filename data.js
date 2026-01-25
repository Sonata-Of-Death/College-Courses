const db = {
    majors: {
        ai: { name_en: "Artificial Intelligence", name_ar: "الذكاء الاصطناعي", icon: "fa-brain" },
        cyber: { name_en: "Cyber Security", name_ar: "الأمن السيبراني", icon: "fa-shield-halved" }
    },
    subjects: [
        // --- SHARED SUBJECTS (TERM 1) ---

        // 1. Business Administration (جاهز)
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

        // 2. English (جاهز)
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

        // 3. Creative Thinking (جاهز)
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
                        { title: "Creative Thinking SS", link: "https://drive.google.com/file/d/1UufaftTaieq9rw3UrgfYhhmMmD6SWLfW/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only. Use full summaries for complete study." },
                        { title: "Creative Thinking All comparisons", link: "https://drive.google.com/file/d/1mjrbQ24jGC-yf3YnDls2Kw2FYay6gkhJ/view?usp=drive_link", type: "PDF", note: "Useful: Collection of all course comparisons." }
                    ] 
                },
                quiz: []
            } 
        },

        // 4. Math 0 (UPDATED WITH REAL DATA)
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
            content: { lecs: [], summary: { ar: [], en: [] }, quiz: [] } 
        },
        
        // 6. Math 1 (UPDATED WITH REAL DATA)
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

        // 7. Programming
        { 
            id: "prog", name_en: "Programming", name_ar: "برمجة", 
            type: "shared", year: 1, term: 1, material: ["chapters", "summary", "labs_interactive", "quiz"], 
            content: { chapters: [], summary: { ar: [], en: [] }, labs_interactive: [], quiz: [] } 
        },

        // --- AI SPECIFIC ---

        // 8. Networks (جاهز)
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

        // 9. Electronics (جاهز)
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
                        { title: "Electronics Lecture 5", link: "https://drive.google.com/file/d/1YneDbeaXo_zZB7PZvYMD42ROSXvUiMdn/view?usp=drive_link", type: "PDF" },
                        { title: "Electronics Lecture 6", link: "https://drive.google.com/file/d/1djoN9AciHheLMIv-XuuOICBDCiAih-SR/view?usp=drive_link", type: "PDF" },
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
