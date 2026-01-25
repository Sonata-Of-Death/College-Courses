const db = {
    majors: {
        ai: { name_en: "Artificial Intelligence", name_ar: "الذكاء الاصطناعي", icon: "fa-brain" },
        cyber: { name_en: "Cyber Security", name_ar: "الأمن السيبراني", icon: "fa-shield-halved" }
    },
    subjects: [
        // ... (كل المواد السابقة كما هي: Business, English, Creative Thinking, Math 0, Physics, Math 1) ...
        // (تأكد من نسخ الأكواد الخاصة بهم من الردود السابقة إذا لم تكن موجودة هنا لتوفير المساحة)
        // سأضع هنا مادة البرمجة بالكامل بعد التصحيح

        // 7. Programming (CORRECTED & COMPLETE)
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
                                prompt: "Write a Java program that returns the Celsius value 'C' for a given temperature measured in Fahrenheit 'F'. Use the formula: C = 5 * (F - 32) / 9.",
                                hint: "Use Scanner to read double input.",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print("Enter temp in Fahrenheit: ");\n        double f = input.nextDouble();\n        double c = 5.0 * (f - 32) / 9.0;\n        System.out.println("Temp " + f + " in Fahrenheit = " + c + " Celsius");\n    }\n}`
                            },
                            {
                                id: 2,
                                type: "code",
                                prompt: "Write a Java program to evaluate the distance S in vertical motion under gravity given S = ut - 0.5*g*t^2. (g=9.8)",
                                hint: "Read u (velocity) and t (time).",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print("Enter u and t: ");\n        double u = input.nextDouble();\n        double t = input.nextDouble();\n        double g = 9.8;\n        double s = (u*t) - (0.5 * g * Math.pow(t, 2));\n        System.out.println("Distance = " + s);\n    }\n}`
                            },
                            {
                                id: 3,
                                type: "code",
                                prompt: "Write a program to calculate the volume and surface area of a sphere given its radius r.",
                                hint: "Vol = (4/3)*pi*r^3, Area = 4*pi*r^2",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        double r = input.nextDouble();\n        double vol = (4.0/3.0) * Math.PI * Math.pow(r, 3);\n        double area = 4.0 * Math.PI * Math.pow(r, 2);\n        System.out.println("Volume: " + vol + "\\nArea: " + area);\n    }\n}`
                            }
                        ],

                        lab_3: [
                            {
                                id: 1,
                                type: "code",
                                prompt: "Write a program to solve a quadratic equation ax^2 + bx + c = 0. Print roots or 'No real roots'.",
                                hint: "Calculate discriminant: b^2 - 4ac",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double a = sc.nextDouble(), b = sc.nextDouble(), c = sc.nextDouble();\n        double d = Math.pow(b, 2) - 4*a*c;\n        if (d > 0) System.out.println("Two roots");\n        else if (d == 0) System.out.println("One root");\n        else System.out.println("No real roots");\n    }\n}`
                            },
                            {
                                id: 2,
                                type: "code",
                                prompt: "Write a program to characterize an earthquake based on Richter scale number n. (<5: Little, 5-5.5: Some, 5.5-6.5: Serious, 6.5-7.5: Disaster, >7.5: Catastrophe)",
                                hint: "Use if-else if ladder.",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double n = sc.nextDouble();\n        if (n < 5.0) System.out.println("Little damage");\n        else if (n < 5.5) System.out.println("Some damage");\n        else if (n < 6.5) System.out.println("Serious damage");\n        else if (n < 7.5) System.out.println("Disaster");\n        else System.out.println("Catastrophe");\n    }\n}`
                            }
                        ],

                        lab_4: [
                            {
                                id: 1,
                                type: "code",
                                prompt: "Write a program that asks for a number (1-7) and prints the weekday name (1=Saturday) using switch.",
                                hint: "switch(day) { case 1: ... }",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int day = sc.nextInt();\n        switch(day) {\n            case 1: System.out.println("Saturday"); break;\n            case 2: System.out.println("Sunday"); break;\n            case 3: System.out.println("Monday"); break;\n            case 4: System.out.println("Tuesday"); break;\n            case 5: System.out.println("Wednesday"); break;\n            case 6: System.out.println("Thursday"); break;\n            case 7: System.out.println("Friday"); break;\n            default: System.out.println("Invalid");\n        }\n    }\n}`
                            },
                            {
                                id: 2,
                                type: "code",
                                prompt: "Write a program that reads a month number (1-12) and prints the Season (Winter, Spring, Summer, Fall).",
                                hint: "Winter: 12,1,2 - Spring: 3,4,5 ...",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        switch(m) {\n            case 12: case 1: case 2: System.out.println("Winter"); break;\n            case 3: case 4: case 5: System.out.println("Spring"); break;\n            case 6: case 7: case 8: System.out.println("Summer"); break;\n            case 9: case 10: case 11: System.out.println("Fall"); break;\n            default: System.out.println("Invalid");\n        }\n    }\n}`
                            },
                            {
                                id: 3,
                                type: "code",
                                prompt: "Generate two random integer numbers between a and b.",
                                hint: "Math.random()",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        int r1 = a + (int)(Math.random() * ((b - a) + 1));\n        System.out.println(r1);\n    }\n}`
                            }
                        ],

                        lab_5: [
                            {
                                id: 1,
                                type: "code",
                                prompt: "Read a character and print if it is Digit, Uppercase, Lowercase, or Other.",
                                hint: "Use char comparison (c >= '0' && c <= '9')",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        char c = sc.next().charAt(0);\n        if (c >= '0' && c <= '9') System.out.println("Digit");\n        else if (c >= 'A' && c <= 'Z') System.out.println("Uppercase");\n        else if (c >= 'a' && c <= 'z') System.out.println("Lowercase");\n        else System.out.println("Other");\n    }\n}`
                            },
                            {
                                id: 2,
                                type: "code",
                                prompt: "Write a simple calculator that reads two numbers and an operator (+, -) and prints the result.",
                                hint: "Check operator char",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double n1 = sc.nextDouble(), n2 = sc.nextDouble();\n        char op = sc.next().charAt(0);\n        if (op == '+') System.out.println(n1 + n2);\n        else if (op == '-') System.out.println(n1 - n2);\n    }\n}`
                            }
                        ],

                        lab_6: [
                            {
                                id: 1,
                                type: "code",
                                prompt: "Read number of students n, then n grades. Print Average and Highest grade.",
                                hint: "Use a for loop.",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double sum = 0, max = -1;\n        for(int i=0; i<n; i++) {\n            double g = sc.nextDouble();\n            sum += g;\n            if(g > max) max = g;\n        }\n        System.out.println("Avg: " + (sum/n) + " Max: " + max);\n    }\n}`
                            },
                            {
                                id: 2,
                                type: "code",
                                prompt: "Calculate the sum of even numbers from 1 to n.",
                                hint: "Loop with i+=2 or if(i%2==0)",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sum = 0;\n        for(int i=2; i<=n; i+=2) sum += i;\n        System.out.println("Sum: " + sum);\n    }\n}`
                            },
                            {
                                id: 3,
                                type: "code",
                                prompt: "Print numbers from 100 down to 0, decreasing by 7 each step.",
                                hint: "for(int i=100; i>=0; i-=7)",
                                solutionCode: `public class Main {\n    public static void main(String[] args) {\n        for(int i=100; i>=0; i-=7) System.out.print(i + " ");\n    }\n}`
                            }
                        ],

                        lab_7: [
                            {
                                id: 1,
                                type: "code",
                                prompt: "Write a program to display a table of n vs n^3 for numbers from 1 to user input n.",
                                hint: "Loop 1 to n, print i and i*i*i",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println("N\\tCube");\n        for(int i=1; i<=n; i++) System.out.println(i + "\\t" + (i*i*i));\n    }\n}`
                            },
                            {
                                id: 2,
                                type: "code",
                                prompt: "Read n real numbers and display their Average, Max, and Min.",
                                hint: "Initialize max/min with first number.",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double val = sc.nextDouble();\n        double min = val, max = val, sum = val;\n        for(int i=1; i<n; i++) {\n            val = sc.nextDouble();\n            sum += val;\n            if(val > max) max = val;\n            if(val < min) min = val;\n        }\n        System.out.println("Avg: " + (sum/n) + " Max: " + max + " Min: " + min);\n    }\n}`
                            }
                        ],

                        lab_8: [
                            {
                                id: 1,
                                type: "code",
                                prompt: "Write a program to read an array of 10 integers (0-50) and display a bar chart using '*' characters.",
                                hint: "Nested loop: Outer for array, inner for printing *",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[] arr = new int[10];\n        for(int i=0; i<10; i++) arr[i] = sc.nextInt();\n        for(int x : arr) {\n            System.out.print(x + ": ");\n            for(int j=0; j<x; j++) System.out.print("*");\n            System.out.println();\n        }\n    }\n}`
                            },
                            {
                                id: 2,
                                type: "code",
                                prompt: "Read an array of n elements and find the Maximum value and its Index.",
                                hint: "Loop through array, track max and index.",
                                solutionCode: `import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0; i<n; i++) arr[i] = sc.nextInt();\n        int max = arr[0], idx = 0;\n        for(int i=1; i<n; i++) {\n            if(arr[i] > max) { max = arr[i]; idx = i; }\n        }\n        System.out.println("Max: " + max + " at index " + idx);\n    }\n}`
                            },
                            {
                                id: 3,
                                type: "code",
                                prompt: "Read an array of n elements and Reverse it into another array.",
                                hint: "New array rev[i] = arr[n-1-i]",
                                solutionCode: `import java.util.Scanner;\nimport java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0; i<n; i++) arr[i] = sc.nextInt();\n        int[] rev = new int[n];\n        for(int i=0; i<n; i++) rev[i] = arr[n-1-i];\n        System.out.println(Arrays.toString(rev));\n    }\n}`
                            }
                        ]
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
                        { title: "Electronics Lecture 7", link: "https://drive.google.com/file/d/12Ud-GCkLenOTWmzmwpRCAsvfQKMnfu1f/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams are MISSING. Check original slides." },
                        { title: "Electronics Lecture 8", link: "https://drive.google.com/file/d/1SGl6uMC_OJO1QhnVYrPjeiHYzQvOBKKW/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams are MISSING. Check original slides." },
                        { title: "Electronics SS", link: "https://drive.google.com/file/d/1Vb9nSkoJ0gev4tw_jqd1W-bhMULABDw6/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only. Use full summaries for complete study." }
                    ] 
                },
                quiz: []
            } 
        }
    ]
};
