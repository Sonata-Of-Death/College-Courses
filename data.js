const db = {
    majors: {
        ai: { name_en: "Artificial Intelligence", name_ar: "الذكاء الاصطناعي", icon: "fa-brain" },
        cyber: { name_en: "Cyber Security", name_ar: "الأمن السيبراني", icon: "fa-shield-halved" }
    },
    subjects: [
        // ... (كل المواد الأخرى كما هي في الرد السابق - انسخها من هناك لو محتاجها) ...
        
        // 7. Programming (UPDATED with Expected Outputs for validation)
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
                        { title: "Lab 1: Introduction", link: "#", type: "Note", note: "لاب تعريفي فقط." },
                        { title: "Lab 2: Java Basics", link: "https://docs.google.com/presentation/d/1i8nkiAftO_OuGSb54YDjtAbqKTJJ8yeQ/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                        { title: "Lab 3: Java", link: "https://drive.google.com/file/d/1MEhitevpKrENiG8_MOWVcRIw3fH5WmG4/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 4: Java", link: "https://drive.google.com/file/d/1Ox0vduZfyf4sneobRfEQjAvPKJHMpEzq/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 5: Java", link: "https://drive.google.com/file/d/1kgMBGD9vXxTsmnLhJWh04zLjqR8PD2JB/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 6: Java", link: "https://docs.google.com/presentation/d/19f1u9T1lFCgsPcHj6526X--Q1VCjOTjL/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                        { title: "Lab 7: Java", link: "https://docs.google.com/presentation/d/1WYSt-Pj1w-8iuYAGgCbhDw4TBH6lgge-/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" },
                        { title: "Lab 8: Java", link: "https://docs.google.com/presentation/d/1GsJ4zD546IQGxaDd8lFUcsQvVB3kpOEb/edit?usp=drive_link&ouid=115492288787328928533&rtpof=true&sd=true", type: "PPT" }
                    ],
                    questions: {
                        labs_list: [
                            { id: 2, title: "Lab 2: Variables & Math", qCount: 3 },
                            { id: 3, title: "Lab 3: Conditionals (If/Else)", qCount: 2 },
                            { id: 4, title: "Lab 4: Switch & String", qCount: 3 },
                            { id: 5, title: "Lab 5: Advanced Conditions", qCount: 2 },
                            { id: 6, title: "Lab 6: Loops (For)", qCount: 3 },
                            { id: 7, title: "Lab 7: Loops (While/Do-While)", qCount: 2 },
                            { id: 8, title: "Lab 8: Arrays", qCount: 3 }
                        ],
                        
                        lab_2: [
                            {
                                id: 1,
                                type: "code",
                                prompt: "Write a Java program that converts Fahrenheit to Celsius. (Enter 68)",
                                hint: "C = 5 * (F - 32) / 9",
                                expectedOutput: "Temp 68.0 in Fahrenheit = 20.0 Celsius",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        //System.out.print("Enter temp in Fahrenheit: ");\n        double f = input.nextDouble();\n        double c = 5.0 * (f - 32) / 9.0;\n        System.out.println("Temp " + f + " in Fahrenheit = " + c + " Celsius");\n    }\n}`
                            },
                            // بقية الأسئلة هنا.. (نفس اللي في الرد السابق بس تأكد من وجود expectedOutput لكل سؤال عشان التصحيح يشتغل)
                        ]
                    }
                },
                quiz: []
            } 
        }
        // ... باقي المواد
    ]
};
