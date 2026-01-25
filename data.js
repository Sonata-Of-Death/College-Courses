const db = {
    majors: { ai: { name_en: "AI", name_ar: "ذكاء" }, cyber: { name_en: "Cyber", name_ar: "أمن" } },
    subjects: [
        // ... (ضيف باقي المواد هنا - Bus, Eng, Math0, etc. من الردود السابقة) ...
        
        // 7. Programming
        { 
            id: "prog", name_en: "Programming", name_ar: "برمجة", 
            type: "shared", year: 1, term: 1, material: ["chapters", "lecs", "summary", "labs", "quiz"], 
            content: {
                chapters: [], lecs: [], summary: {ar:[], en:[]}, 
                labs: {
                    material: [],
                    questions: {
                        labs_list: [ {id: 2, title: "Lab 2: Variables", qCount: 3} ],
                        lab_2: [
                            {
                                id: 1, type: "code", prompt: "Convert Fahrenheit to Celsius (Input 68)", hint: "C = 5*(F-32)/9", expectedOutput: "20.0",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n Scanner s = new Scanner(System.in);\n double f = s.nextDouble();\n System.out.println(5.0*(f-32)/9.0);\n }\n}`
                            }
                        ]
                    }
                }, quiz: []
            }
        }
    ]
};
