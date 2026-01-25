const db = {
    majors: {
        ai: { name_en: "Artificial Intelligence", name_ar: "الذكاء الاصطناعي", icon: "fa-brain" },
        cyber: { name_en: "Cyber Security", name_ar: "الأمن السيبراني", icon: "fa-shield-halved" }
    },
    subjects: [
        { 
            id: "bus", name_en: "Business Administration", name_ar: "إدارة أعمال", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"],
            content: { lecs: Array.from({length:10}, (_,i)=>({ title: `Business Administration ${i+1}`, link: "#", type: "PDF" })), summary: { ar: [], en: [] }, quiz: [] }
        },
        { 
            id: "eng", name_en: "English", name_ar: "لغة إنجليزية", 
            type: "shared", year: 1, term: 1, material: ["lecs", "summary", "quiz"], 
            content: { lecs: { main: [], solutions: [] }, summary: [], quiz: [] }
        },
        { 
            id: "prog", name_en: "Programming", name_ar: "برمجة", 
            type: "shared", year: 1, term: 1, material: ["chapters", "lecs", "summary", "labs", "quiz"], 
            content: {
                chapters: [ { title: "Chapter 1", link: "https://docs.google.com/presentation/d/1PjzHemUz7MqObYZ8PbYAaVYQwG10qvzk/edit?usp=drive_link", type: "PPT" } ],
                lecs: [ { title: "Lecture 1", link: "https://drive.google.com/file/d/1PWNAoSdtyGmDlmhL5CN7A9dutxr4zMda/view", type: "PDF" } ],
                summary: { ar: [], en: [] },
                labs: {
                    material: [ { title: "Lab 2: Java Basics", link: "https://docs.google.com/presentation/d/1i8nkiAftO_OuGSb54YDjtAbqKTJJ8yeQ/edit", type: "PPT" } ],
                    questions: {
                        labs_list: [ { id: 2, title: "Lab 2: Variables & Math", qCount: 3 } ],
                        lab_2: [
                            {
                                id: 1, type: "code",
                                prompt: "Write a Java program to convert Fahrenheit to Celsius.",
                                hint: "C = 5 * (F - 32) / 9",
                                expectedOutput: "Celsius",
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n System.out.println(\"Result\");\n }\n}"
                            }
                        ]
                    }
                },
                quiz: []
            } 
        }
    ]
};
// ملاحظة: قمت بتبسيط الملف للتجربة، لو اشتغل معاك هبعتلك النسخة الكاملة فوراً.
