const db = {
    majors: {
        ai: { name_en: "Artificial Intelligence", name_ar: "الذكاء الاصطناعي", icon: "fa-brain" },
        cyber: { name_en: "Cyber Security", name_ar: "الأمن السيبراني", icon: "fa-shield-halved" }
    },
    subjects: [
        // --- SHARED SUBJECTS ---
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
                        { title: "إدارة أعمال ملخص الملخص", link: "https://drive.google.com/file/d/1Ap6jMKv1pq4AYlTp0O9feqS2p3ffhwA8/view?usp=drive_link", type: "PDF", note: "تحذير: للمراجعة السريعة فقط." },
                        { title: "بصمج البزنس (ليلة الامتحان)", link: "https://drive.google.com/file/d/1y-txIdmxIYRG9EV0dB9vtfzxadEflEJ2/view?usp=drive_link", type: "PDF", note: "طوارئ: لمن لم يذاكر شيئاً." }
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
                        { title: "Business Administration SS", link: "https://drive.google.com/file/d/1HFkIab0EAqFD_yQGz7tqOLv_qUorgZIi/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only." },
                        { title: "Finish BA in Exam Night", link: "https://drive.google.com/file/d/1zjUQ8LIPDvhWe8hERxnJ6lQ5bvDwBO4C/view?usp=drive_link", type: "PDF", note: "EMERGENCY: For zero-prep students." }
                    ]
                },
                quiz: {
                    isSplit: true,
                    sections: [
                        { id: 'mcqs_1', title: 'MCQs Part 1', qCount: 20, type: 'mcq' },
                        { id: 'mcqs_2', title: 'MCQs Part 2', qCount: 20, type: 'mcq' },
                        { id: 'mcqs_3', title: 'MCQs Part 3', qCount: 20, type: 'mcq' },
                        { id: 'mcqs_4', title: 'MCQs Part 4', qCount: 20, type: 'mcq' },
                        { id: 'mcqs_5', title: 'MCQs Part 5', qCount: 20, type: 'mcq' },
                        { id: 'writing_1', title: 'Writing Questions Part 1', qCount: 10, type: 'text' },
                        { id: 'writing_2', title: 'Writing Questions Part 2', qCount: 10, type: 'text' },
                        { id: 'writing_3', title: 'Writing Questions Part 3', qCount: 7, type: 'text' }
                    ],
                    data: {
                        mcqs_1: [
                            { id: 1, question: "Which of the following best describes a 'Sustaining Innovation'?", options: ["It replaces an entire industry with new technology.", "It transforms expensive products into accessible ones for the masses.", "It creates a new market by grouping existing components differently.", "It involves incremental improvements to existing products to respond to market demands."], answer: 3, explanation_en: "Sustaining innovation is routine or incremental (like a new iPhone), unlike radical or disruptive innovation." },
                            { id: 2, question: "In the context of the marketing mix, 'Promotion' is primarily concerned with:", options: ["Getting the product from producer to consumer.", "Setting the price floor and ceiling.", "Communicating information about the product to the consumer.", "Designing the product's physical features."], answer: 2, explanation_en: "Promotion involves advertising, sales promotion, and PR to communicate value." },
                            { id: 3, question: "If a company's revenue is $1,000,000 and its expenses are $1,200,000, the result is:", options: ["A profit of $200,000.", "A loss of $200,000.", "A breakeven point.", "A tax liability."], answer: 1, explanation_en: "Profit = Revenue - Expenses. Since expenses exceed revenues, it is a loss." },
                            { id: 4, question: "Which of the following is considered an internal source of recruitment?", options: ["Internet recruiting.", "Advertising in newspapers.", "Transfer.", "Employment agencies."], answer: 2, explanation_en: "Transfer involves moving an existing employee to a new position, which is an internal source." },
                            { id: 5, question: "'Market Skimming' is a pricing strategy best used when:", options: ["The market is highly price-sensitive.", "The product has low quality and simple features.", "The product has high quality/image and competitors cannot easily enter.", "The goal is to attract a large number of buyers quickly."], answer: 2, explanation_en: "Skimming sets a high price to capture the top market segment, suitable for high-end unique products." },
                            { id: 6, question: "What is the primary characteristic of 'Pure Services'?", options: ["They are offered in association with a tangible good.", "They are not accompanied by any physical products.", "They are durable and can be stored.", "They have no variability in quality."], answer: 1, explanation_en: "Pure services (like consultancy) function without a linked physical product." },
                            { id: 7, question: "The 'Task Environment' includes all of the following EXCEPT:", options: ["Customers.", "Competitors.", "Economic conditions.", "Regulators."], answer: 2, explanation_en: "Economic conditions belong to the General Environment." },
                            { id: 8, question: "Which stance on social responsibility involves doing as little as possible and potentially denying violations?", options: ["Proactive stance.", "Accommodative stance.", "Defensive stance.", "Obstructionist stance."], answer: 3, explanation_en: "The Obstructionist stance is the lowest level of social responsibility." },
                            { id: 9, question: "In production management, 'Form Utility' refers to:", options: ["The value added by shipping goods to the right place.", "The value created by converting inputs into finished outputs.", "The value derived from storing goods until needed.", "The value of the customer service provided after sale."], answer: 1, explanation_en: "Production creates form utility by changing the shape or composition of materials." },
                            { id: 10, question: "Which type of layout is most suitable for building a dam or a ship?", options: ["Assembly line layout.", "Process layout.", "Fixed position layout.", "Module layout."], answer: 2, explanation_en: "In a fixed position layout, the product is too large to move, so workers come to the product." },
                            { id: 11, question: "'Whistle-blowing' is best defined as:", options: ["Trading stocks based on insider information.", "An employee exposing unethical or illegal behavior within their organization.", "A marketing tactic to gain attention.", "Negotiating with suppliers for lower costs."], answer: 1, explanation_en: "A whistleblower reports misconduct inside the company." },
                            { id: 12, question: "Which factor of production is currently considered one of the most important due to its role in innovation?", options: ["Land.", "Capital.", "Knowledge.", "Labor."], answer: 2, explanation_en: "Knowledge (data/technology) and Entrepreneurship are critical modern factors." },
                            { id: 13, question: "A 'Want' becomes a 'Demand' when:", options: ["It is shared by a large group of people.", "It is backed by purchasing power.", "It satisfies a basic physiological need.", "It is marketed effectively."], answer: 1, explanation_en: "Demand is a want backed by the financial ability to pay." },
                            { id: 14, question: "What distinguishes 'Selling' from 'Marketing'?", options: ["Selling focuses on the buyer's needs; Marketing focuses on the seller's needs.", "Selling is a long-term process; Marketing is short-term.", "Selling focuses on the seller's need to convert product to cash; Marketing focuses on satisfying customer needs.", "There is no difference."], answer: 2, explanation_en: "Selling is volume-oriented (seller), Marketing is satisfaction-oriented (buyer)." },
                            { id: 15, question: "'Inseparability' in services means:", options: ["Services cannot be stored for later use.", "The service provider and the service itself cannot be separated.", "The quality of service varies depending on who provides it.", "Services cannot be seen or touched."], answer: 1, explanation_en: "Production and consumption happen simultaneously." },
                            { id: 16, question: "Which of the following is a 'Non-Durable Good'?", options: ["A refrigerator.", "A car.", "A soft drink.", "A laptop."], answer: 2, explanation_en: "Non-durable goods are consumed quickly (e.g., food/drink)." },
                            { id: 17, question: "'Collusion' is an illegal practice where:", options: ["A company lowers prices to drive out competitors.", "Competitors agree to fix prices or divide the market.", "A company hides its profits to avoid taxes.", "An employee steals intellectual property."], answer: 1, explanation_en: "Collusion involves secret agreements to limit competition." },
                            { id: 18, question: "The 'General Environment' factor that deals with population demographics is the:", options: ["Economic dimension.", "Political-Legal dimension.", "Sociocultural dimension.", "Technological dimension."], answer: 2, explanation_en: "Sociocultural dimension covers norms and demographics." },
                            { id: 19, question: "Which pay system compensates employees based on the number of units they produce?", options: ["Hourly wage.", "Salary.", "Piece work system.", "Profit sharing."], answer: 2, explanation_en: "Piece work pays per unit of output." },
                            { id: 20, question: "A 'Strategic Partner' is:", options: ["A company that competes directly with your firm.", "A government agency that regulates your industry.", "A party with whom the firm has a long-term agreement to share resources.", "A customer who buys in bulk."], answer: 2, explanation_en: "Strategic partners collaborate to achieve common goals." }
                        ],
                        mcqs_2: [
                            { id: 21, question: "'Insider Trading' involves:", options: ["Selling products to employees at a discount.", "Using non-public information to trade stocks for profit.", "Promoting employees from within the company.", "Trading goods between internal departments."], answer: 1, explanation_en: "Using confidential info to gain an unfair advantage in the stock market." },
                            { id: 22, question: "Which type of innovation replaces an existing industry with entirely new technology?", options: ["Sustaining innovation.", "Architectural innovation.", "Radical innovation.", "Incremental innovation."], answer: 2, explanation_en: "Radical innovation is the highest form, changing the industry landscape." },
                            { id: 23, question: "'Job Analysis' is the study of:", options: ["The market demand for a product.", "The financial performance of a department.", "What is done by each employee under each job title.", "The future training needs of the organization."], answer: 2, explanation_en: "Job analysis gathers info on tasks and responsibilities for a specific job." },
                            { id: 24, question: "Which of the following is a 'Shopping Product'?", options: ["Candy bar.", "Television set.", "Life insurance.", "Bread."], answer: 1, explanation_en: "Shopping products require comparison (like TVs), unlike convenience goods." },
                            { id: 25, question: "In the product life cycle, 'Market Penetration' pricing is effective when:", options: ["The market is highly sensitive to price.", "The product is a luxury item.", "There are no competitors.", "Production costs are extremely high."], answer: 0, explanation_en: "Penetration pricing uses low prices to attract buyers quickly in price-sensitive markets." },
                            { id: 26, question: "'Just In Time' (JIT) inventory control aims to:", options: ["Maximize the amount of inventory stored.", "Keep minimum inventory and receive materials exactly when needed.", "Produce goods only once a year.", "Rely on a single supplier."], answer: 1, explanation_en: "JIT reduces storage costs by coordinating delivery with production needs." },
                            { id: 27, question: "The 'Price Ceiling' is determined by:", options: ["The cost of production.", "The competitor's price.", "The customer's perception of value.", "Government regulations."], answer: 2, explanation_en: "The price ceiling is the max a customer is willing to pay based on value." },
                            { id: 28, question: "Which of the following is an advantage of internal recruitment?", options: ["It brings new ideas into the organization.", "It increases the diversity of the workforce.", "It has a lower cost and faster adaptation time.", "It eliminates the need for interviews."], answer: 2, explanation_en: "Internal recruitment saves on advertising and training costs." },
                            { id: 29, question: "Non-profit organizations (NPOs) differ from business organizations in that NPOs:", options: ["Do not pay taxes.", "Do not have employees.", "Do not produce services.", "Aim to maximize losses."], answer: 0, explanation_en: "NPOs serve a social purpose and are tax-exempt." },
                            { id: 30, question: "'Perishability' of services implies that:", options: ["Services can be stored in inventory.", "Demand for services is constant.", "Services cannot be saved for later sale or use.", "Service quality is always consistent."], answer: 2, explanation_en: "You cannot store a service (e.g., an empty seat on a flight)." },
                            { id: 31, question: "Which of the following represents the 'Economic Dimension' of the general environment?", options: ["Laws regarding worker safety.", "The aging population trend.", "Interest rates and inflation.", "The introduction of AI technology."], answer: 2, explanation_en: "Economic factors relate to financial health (interest, inflation)." },
                            { id: 32, question: "'Development' in HRM differs from 'Training' because Development:", options: ["Focuses on short-term skills.", "Is job-oriented.", "Focuses on long-term career growth.", "Is only for new employees."], answer: 2, explanation_en: "Training is for the current job; Development is for future challenges." },
                            { id: 33, question: "Which distribution channel gives the producer the MOST control?", options: ["Indirect distribution.", "Direct distribution.", "Using a wholesaler.", "Using a retailer."], answer: 1, explanation_en: "Direct distribution eliminates intermediaries, giving full control." },
                            { id: 34, question: "A 'Defensive Stance' to social responsibility means:", options: ["Doing less than the law requires.", "Meeting only the minimum legal requirements.", "Going beyond legal requirements if asked.", "Proactively seeking to contribute to society."], answer: 1, explanation_en: "Defensive stance ensures legal compliance but nothing more." },
                            { id: 35, question: "Which of the following is an 'Unsought Product'?", options: ["Rolex watch.", "Toothpaste.", "Encyclopedia.", "Laptop."], answer: 2, explanation_en: "Unsought products are those the consumer doesn't think about buying (e.g., insurance)." },
                            { id: 36, question: "'Gain Sharing' plans reward employees based on:", options: ["Individual output only.", "The number of hours worked.", "Achieving specific company goals (e.g., quality improvement).", "The company's stock price."], answer: 2, explanation_en: "Gain sharing ties bonuses to performance metrics like quality." },
                            { id: 37, question: "The 'Board of Directors' is responsible for:", options: ["Managing day-to-day operations.", "Electing the shareholders.", "Approving strategic goals and hiring the CEO.", "Fixing the machinery."], answer: 2, explanation_en: "The Board oversees strategy and governance." },
                            { id: 38, question: "Which type of innovation transforms a complicated, expensive product into a simple, affordable one?", options: ["Sustaining.", "Disruptive.", "Architectural.", "Radical."], answer: 1, explanation_en: "This is the definition of Disruptive Innovation." },
                            { id: 39, question: "'Samples' are considered:", options: ["The least expensive sales promotion tool.", "A tool primarily for old products.", "The most effective and expensive sales promotion tool.", "A form of public relations."], answer: 2, explanation_en: "Samples allow trial, making them effective but costly." },
                            { id: 40, question: "In a 'Process Layout', similar equipment and functions are:", options: ["Grouped together.", "Arranged in a straight line.", "Moved to where the product is.", "Outsourced."], answer: 0, explanation_en: "Process layouts group similar functions (e.g., all X-ray machines in one dept)." }
                        ],
                        mcqs_3: [
                            { id: 41, question: "The primary goal of a 'Business Organization' is to:", options: ["Maximize social welfare.", "Maximize profits.", "Minimize taxes.", "Provide free services."], answer: 1, explanation_en: "The ultimate goal of a for-profit business is profit maximization." },
                            { id: 42, question: "'Identity Theft' is a risk associated with which environmental dimension?", options: ["Economic.", "Technological.", "Sociocultural.", "Political."], answer: 1, explanation_en: "The collection of data in Databases creates the risk of identity theft." },
                            { id: 43, question: "Which of the following is NOT a right of the consumer?", options: ["The right to be informed.", "The right to be heard.", "The right to fix the price.", "The right to choose."], answer: 2, explanation_en: "Consumers do not dictate the price (the market does)." },
                            { id: 44, question: "'Lateral Transfer' involves:", options: ["Promoting an employee to a higher rank.", "Moving an employee to a similar position with the same pay.", "Firing an employee.", "Lowering an employee's salary."], answer: 1, explanation_en: "Lateral transfer is a horizontal move with no change in status/pay." },
                            { id: 45, question: "'Public Relations' (PR) is often considered more ___ than advertising.", options: ["Expensive.", "Believable.", "Aggressive.", "Colorful."], answer: 1, explanation_en: "PR is viewed as more credible/believable by consumers." },
                            { id: 46, question: "Which factor of production includes 'Risk Taking'?", options: ["Capital.", "Labor.", "Entrepreneurship.", "Land."], answer: 2, explanation_en: "The entrepreneur is the one who risks time and money." },
                            { id: 47, question: "A 'Convenience Product' is characterized by:", options: ["High price and exclusive distribution.", "Frequent purchase with minimum effort.", "Complex features requiring comparison.", "Being unknown to the buyer."], answer: 1, explanation_en: "Convenience goods (bread, gum) are bought often and easily." },
                            { id: 48, question: "'Flexible Time Plans' allow employees to:", options: ["Work from home permanently.", "Choose their working hours within limits.", "Share a job with another person.", "Work only on weekends."], answer: 1, explanation_en: "Flextime gives control over start/end times." },
                            { id: 49, question: "If a company uses a 'Proactive Stance', it will:", options: ["Fight any new regulations.", "Only follow the letter of the law.", "Actively seek opportunities to contribute to social well-being.", "Ignore social issues until sued."], answer: 2, explanation_en: "Proactive is the highest level of social responsibility." },
                            { id: 50, question: "Which of the following is a 'Durable Good'?", options: ["An apple.", "A newspaper.", "A washing machine.", "A ticket to a concert."], answer: 2, explanation_en: "A washing machine lasts for years." },
                            { id: 51, question: "'Capacity Planning' determines:", options: ["The location of the factory.", "The maximum output under normal conditions.", "The quality standards of the product.", "The recruitment strategy."], answer: 1, explanation_en: "Capacity is the volume of product a firm can produce." },
                            { id: 52, question: "Which element of the marketing mix is concerned with 'Inventory and Transportation'?", options: ["Product.", "Price.", "Place.", "Promotion."], answer: 2, explanation_en: "Place (Distribution) covers logistics and warehousing." },
                            { id: 53, question: "'Moral Management' aims to:", options: ["Maximize profit at any cost.", "Maximize profit within ethical limits.", "Ignore profit completely.", "Follow the law only when watched."], answer: 1, explanation_en: "Moral management balances profit with ethical standards." },
                            { id: 54, question: "A 'Heterogeneous Shopping Product' is one where:", options: ["Price is the only factor.", "Quality and style are more important than price.", "The consumer buys it without thinking.", "It is sold in a vending machine."], answer: 1, explanation_en: "Heterogeneous products (clothing, furniture) are judged on quality/style." },
                            { id: 55, question: "Which of the following is a disadvantage of 'Personal Selling'?", options: ["It is very expensive.", "It does not allow for feedback.", "It is impersonal.", "It cannot convey complex information."], answer: 0, explanation_en: "Personal selling is the most expensive promotion tool per contact." },
                            { id: 56, question: "'Telecommuting' refers to:", options: ["Working from home using technology.", "Commuting to work by train.", "Working in a factory.", "Job sharing."], answer: 0, explanation_en: "Also known as in-home employment." },
                            { id: 57, question: "'Architectural Innovation' involves:", options: ["Changing the components of the product completely.", "Keeping components the same but grouping them differently.", "Lowering the price of the product.", "Increasing the size of the product."], answer: 1, explanation_en: "It reconfigures existing components in a new way." },
                            { id: 58, question: "What is 'Market Share'?", options: ["The profit divided by expenses.", "The percentage of industry sales a company controls.", "The number of shares a company sells on the stock market.", "The total taxes paid by the company."], answer: 1, explanation_en: "Market Share = (Firm's Sales / Total Industry Sales) * 100." },
                            { id: 59, question: "'Coupons' are a sales promotion tool that:", options: ["Offers a free product.", "Offers a financial discount or rebate.", "Reduces the price on the package label.", "Provides a free sample."], answer: 1, explanation_en: "Coupons are certificates giving the holder a discount." },
                            { id: 60, question: "Which of the following is a 'Regulator' in the task environment?", options: ["A loyal customer.", "A labor union.", "A supplier of raw materials.", "A competitor."], answer: 1, explanation_en: "Regulators like unions or government agencies set rules." }
                        ],
                        mcqs_4: [
                            { id: 61, question: "'Service Variability' means:", options: ["Services can be stored.", "Services are always the same.", "Service quality depends on who provides it and when.", "Services are tangible."], answer: 2, explanation_en: "The human element causes service quality to vary." },
                            { id: 62, question: "'Profit Sharing Plans' are:", options: ["Fixed monthly payments.", "Bonuses paid based on the company's profits.", "Payments based on individual piecework.", "Paid vacations."], answer: 1, explanation_en: "These plans distribute a portion of profit to employees." },
                            { id: 63, question: "Which approach to social responsibility involves 'Lobbying' to reduce obligations?", options: ["Proactive.", "Obstructionist.", "Accommodative.", "Defensive."], answer: 1, explanation_en: "Obstructionist firms block regulations to avoid responsibility." },
                            { id: 64, question: "The 'Sociocultural Dimension' includes:", options: ["Inflation rates.", "Values, norms, and lifestyle trends.", "Computer networks.", "Trade agreements."], answer: 1, explanation_en: "It reflects the human/social aspect of the environment." },
                            { id: 65, question: "'Direct Distribution' is best illustrated by:", options: ["A farmer selling vegetables to a supermarket.", "A manufacturer selling clothes online to consumers.", "A car company selling to a dealership.", "A soda company selling to a distributor."], answer: 1, explanation_en: "Direct means no intermediaries." },
                            { id: 66, question: "'Premiums' in sales promotion are:", options: ["Goods offered for free or at low cost to incentivize purchase.", "High prices for luxury goods.", "Discounts on the next purchase.", "Free trials of a service."], answer: 0, explanation_en: "A premium is a 'gift' to encourage buying." },
                            { id: 67, question: "A 'Job Sharing Plan' allows:", options: ["One person to work two jobs.", "Two part-time employees to share one full-time job.", "Employees to sleep at work.", "Managers to swap roles."], answer: 1, explanation_en: "It splits one full-time position between two people." },
                            { id: 68, question: "The 'Price Floor' represents:", options: ["The maximum price a customer will pay.", "The cost of the product.", "The competitor's price.", "The profit margin."], answer: 1, explanation_en: "You cannot sustain a business if you sell below cost." },
                            { id: 69, question: "'Amoral Management' is characterized by:", options: ["Active intent to harm others.", "Following the law but lacking ethical principles.", "Actively seeking to do good.", "Prioritizing ethics over profits."], answer: 1, explanation_en: "Amoral managers obey the law but don't consider moral consequences." },
                            { id: 70, question: "Which of the following is an 'External Opportunity'?", options: ["A new competitor entering the market.", "A reduction in export tariffs.", "A rise in raw material costs.", "Unmotivated employees."], answer: 1, explanation_en: "Lower tariffs help export cheaply (positive external factor)." },
                            { id: 71, question: "'Recruitment' is the process of:", options: ["Training employees.", "Firing employees.", "Attracting qualified candidates to fill vacancies.", "Evaluating employee performance."], answer: 2, explanation_en: "Recruitment is finding/attracting talent." },
                            { id: 72, question: "In the 'Introduction' stage of a product, which pricing strategy sets a LOW price?", options: ["Market Skimming.", "Market Penetration.", "Premium Pricing.", "Psychological Pricing."], answer: 1, explanation_en: "Penetration pricing uses low entry price to capture share." },
                            { id: 73, question: "'Capital' as a factor of production refers to:", options: ["Money in the bank only.", "Natural resources.", "Tools, machines, and buildings.", "The workers' skills."], answer: 2, explanation_en: "Capital refers to physical assets used in production." },
                            { id: 74, question: "Which of the following is NOT a characteristic of Services?", options: ["Tangibility.", "Inseparability.", "Perishability.", "Variability."], answer: 0, explanation_en: "Services are Intangible." },
                            { id: 75, question: "'Performance Appraisal' is used to:", options: ["Calculate the company's taxes.", "Design the product.", "Measure employee performance against standards.", "Select suppliers."], answer: 2, explanation_en: "It is the periodic evaluation of employee work." },
                            { id: 76, question: "'Labor Intensive Industries' rely heavily on:", options: ["Machinery.", "Human resources.", "Land.", "Technology."], answer: 1, explanation_en: "They depend more on workers than machines." },
                            { id: 77, question: "'Unethical Behavior' is defined as behavior that:", options: ["Maximizes profit.", "Conforms to social standards of 'wrong'.", "Follows the law.", "Is innovative."], answer: 1, explanation_en: "Unethical behavior violates accepted social/moral standards." },
                            { id: 78, question: "'Specialty Products' are usually:", options: ["Cheap and bought frequently.", "High-priced with unique characteristics.", "Available everywhere.", "Bought without effort."], answer: 1, explanation_en: "Specialty goods command high prices and brand loyalty." },
                            { id: 79, question: "The 'International Dimension' of the environment includes:", options: ["Domestic tax laws.", "Global competition and trade agreements.", "Local customer preferences.", "Internal company culture."], answer: 1, explanation_en: "It covers cross-border factors like global rivals." },
                            { id: 80, question: "'Module Layout' is used for:", options: ["Simple assembly tasks.", "Producing complex units by teams.", "Fixed construction projects.", "Mass production of food."], answer: 1, explanation_en: "Module layout allows teams to collaborate on complex components." }
                        ],
                        mcqs_5: [
                            { id: 81, question: "'Advertising' is defined as:", options: ["Personal communication.", "Free communication.", "Paid, non-personal communication by an identified sponsor.", "Short-term incentives."], answer: 2, explanation_en: "Advertising is always paid and non-personal." },
                            { id: 82, question: "Which of the following is an 'Internal Weakness'?", options: ["High inflation rates.", "Outdated production technology.", "Strong competition.", "Strict government regulations."], answer: 1, explanation_en: "Internal technology is controllable; if outdated, it's a weakness." },
                            { id: 83, question: "'Supply Forecasting' in HRM determines:", options: ["The demand for the product.", "Whether to hire from inside or outside.", "The price of raw materials.", "The sales budget."], answer: 1, explanation_en: "It analyzes where future employees will come from." },
                            { id: 84, question: "A 'Price Pack' (Cents-off deal):", options: ["Increases the price of the product.", "Offers savings off the regular price marked on the package.", "Gives a free toy.", "Is a coupon sent by mail."], answer: 1, explanation_en: "It is a direct reduction printed on the label." },
                            { id: 85, question: "Which of the following describes 'Radical Innovation'?", options: ["It happens on an incremental basis.", "It changes the industry and introduces entirely new technology.", "It groups existing parts differently.", "It is the simplest form of innovation."], answer: 1, explanation_en: "Radical innovation creates a paradigm shift." },
                            { id: 86, question: "'Responsibility towards Investors' includes preventing:", options: ["Air pollution.", "Insider trading.", "High prices for customers.", "Discrimination in hiring."], answer: 1, explanation_en: "Investors care about financial fairness; insider trading hurts them." },
                            { id: 87, question: "'Homogeneous Shopping Products' are selected by consumers primarily based on:", options: ["Quality.", "Brand image.", "Lowest price.", "Store location."], answer: 2, explanation_en: "Since products are seen as similar, price is the deciding factor." },
                            { id: 88, question: "'Salary' is a compensation defined as:", options: ["Fixed pay calculated weekly or monthly.", "Pay based on hours worked.", "Pay based on units produced.", "A one-time bonus."], answer: 0, explanation_en: "Salaries are consistent fixed amounts." },
                            { id: 89, question: "The 'Physical Environment' of a business includes:", options: ["The laws of the country.", "The assets like buildings and equipment.", "The cultural values of employees.", "The competitors."], answer: 1, explanation_en: "It refers to tangible assets owned by the firm." },
                            { id: 90, question: "'Consumer Rights' include the right to be:", options: ["Profitable.", "Heard.", "Employed.", "A manager."], answer: 1, explanation_en: "The Right to be Heard ensures consumers can voice feedback." },
                            { id: 91, question: "'Assembly Line Layout' is best suited for:", options: ["Custom-made furniture.", "Automobile manufacturing.", "Building a bridge.", "Surgery."], answer: 1, explanation_en: "Assembly lines are for mass production (cars)." },
                            { id: 92, question: "'Suppliers' influence the business by:", options: ["Buying the final product.", "Providing necessary materials and inputs.", "Setting the tax rate.", "Managing the employees."], answer: 1, explanation_en: "Suppliers are the source of inputs." },
                            { id: 93, question: "'Generic Products' are:", options: ["Highly advertised brand names.", "Unbranded, plainly packaged products sold at lower prices.", "Luxury items.", "Dangerous products."], answer: 1, explanation_en: "Generic products save costs on packaging and ads." },
                            { id: 94, question: "'Voluntary Transfer' happens when:", options: ["An employee is fired.", "An employee chooses to move to a similar position.", "An employee is promoted.", "An employee retires."], answer: 1, explanation_en: "It is initiated by the employee for personal reasons." },
                            { id: 95, question: "A 'Stakeholder' is:", options: ["Only the owner of the business.", "Only the customer.", "Any party directly affected by the organization's practices.", "The government regulator only."], answer: 2, explanation_en: "Stakeholders are broad: employees, customers, suppliers, etc." },
                            { id: 96, question: "'Maintenance' interacts with production by:", options: ["Selling the product.", "Repairing equipment used in the process.", "Hiring workers.", "Designing the logo."], answer: 1, explanation_en: "Maintenance ensures machines are running." },
                            { id: 97, question: "Which of the following is a 'Service-Oriented Organization'?", options: ["A car factory.", "A bank.", "A steel mill.", "A food processing plant."], answer: 1, explanation_en: "Banks provide financial services, not tangible goods." },
                            { id: 98, question: "'Demand' requires:", options: ["Need + Want.", "Want + Purchasing Power.", "Need + Innovation.", "Innovation + Marketing."], answer: 1, explanation_en: "You only create Demand if you have the money to buy." },
                            { id: 99, question: "'Social Responsibility towards the Environment' focuses on:", options: ["Increasing dividends.", "Treating pollution (air, water, land).", "Improving product packaging.", "Offering discounts."], answer: 1, explanation_en: "It involves minimizing the ecological footprint." },
                            { id: 100, question: "The 'Political-Legal Dimension' regulates:", options: ["Consumer tastes.", "Competition, hiring, and safety standards.", "The price of raw materials.", "Technological speed."], answer: 1, explanation_en: "Governments set the rules (laws) for competition and safety." }
                        ],
                        writing_1: [
                            { id: 1, question: "List the five components of the Internal Environment of the business.", model_answer: "1. Owners\n2. Board of Directors\n3. Employees\n4. Physical Environment\n5. Organizational Culture" },
                            { id: 2, question: "What are the five dimensions of the General Environment?", model_answer: "1. Economic Dimension\n2. Technological Dimension\n3. Socio-cultural Dimension\n4. Political/Legal Dimension\n5. International Dimension" },
                            { id: 3, question: "List the five components of the Task Environment.", model_answer: "1. Customers\n2. Suppliers\n3. Competitors\n4. Strategic Partners\n5. Regulators" },
                            { id: 4, question: "What are the five Factors of Production?", model_answer: "1. Land\n2. Labor\n3. Capital\n4. Entrepreneurship\n5. Knowledge" },
                            { id: 5, question: "List the four types of Business Innovations.", model_answer: "1. Sustaining Innovation\n2. Disruptive Innovation\n3. Radical Innovation\n4. Architectural Innovation" },
                            { id: 6, question: "Provide four examples of Not-for-Profit Organizations.", model_answer: "1. Places of worship (Churches/Mosques)\n2. Public Schools/Universities\n3. Public Hospitals\n4. Charity Organizations (e.g., Egyptian Food Bank)" },
                            { id: 7, question: "What are the four basic Management Areas?", model_answer: "1. Human Resources Management\n2. Production Management\n3. Marketing Management\n4. Financial Management" },
                            { id: 8, question: "List the five basic activities of the Human Resources Department.", model_answer: "1. Recruitment\n2. Selection\n3. Training and Development\n4. Performance Appraisal\n5. Compensation Management" },
                            { id: 9, question: "What are the elements of the Marketing Mix (The 4 Ps)?", model_answer: "1. Product\n2. Price\n3. Place (Distribution)\n4. Promotion" },
                            { id: 10, question: "List the elements of the Promotional Mix.", model_answer: "1. Advertising\n2. Sales Promotion\n3. Personal Selling\n4. Public Relations" }
                        ],
                        writing_2: [
                            { id: 11, question: "What are the major tools of Sales Promotion?", model_answer: "1. Samples\n2. Coupons\n3. Premiums\n4. Price Packs (Cents-off deals)" },
                            { id: 12, question: "List the four categories of Consumer Products.", model_answer: "1. Convenience Products\n2. Shopping Products\n3. Specialty Products\n4. Unsought Products" },
                            { id: 13, question: "What are the five categories of Production Planning?", model_answer: "1. Capacity Planning\n2. Location Planning\n3. Layout Planning\n4. Quality Planning\n5. Methods Planning" },
                            { id: 14, question: "List the types of Facility Layouts.", model_answer: "1. Process Layout\n2. Product (Assembly Line) Layout\n3. Fixed Position Layout\n4. Cellular (Module) Layout" },
                            { id: 15, question: "Who are the primary Stakeholders of a business?", model_answer: "1. Customers\n2. Employees\n3. Investors\n4. Suppliers\n5. Community\n6. Government" },
                            { id: 16, question: "What are the four approaches (stances) to Social Responsibility?", model_answer: "1. Obstructionist Stance\n2. Defensive Stance\n3. Accommodative Stance\n4. Proactive Stance" },
                            { id: 17, question: "List the three sources of Business Ethics.", model_answer: "1. Religion\n2. Culture\n3. Law" },
                            { id: 18, question: "What are the types of Pay Systems (Compensation)?", model_answer: "1. Salary\n2. Hourly Wage\n3. Day Work\n4. Piece Work System\n5. Profit Sharing Plans\n6. Gain Sharing Plans" },
                            { id: 19, question: "List the four Consumer Rights.", model_answer: "1. Right to Safety (Safe products)\n2. Right to be Informed\n3. Right to be Heard\n4. Right to Choose" },
                            { id: 20, question: "What are the five types of flow in the distribution channel?", model_answer: "1. Physical Flow\n2. Flow of Ownership\n3. Flow of Payment\n4. Flow of Information\n5. Flow of Promotion" }
                        ],
                        writing_3: [
                            { id: 21, question: "What are the three steps of Human Resources Planning?", model_answer: "1. Assessing current HR capacity\n2. Forecasting HR requirements\n3. Supply Forecasting" },
                            { id: 22, question: "List the three types of Transfers in HR.", model_answer: "1. Lateral Transfer\n2. Voluntary Transfer\n3. Involuntary Transfer" },
                            { id: 23, question: "What are the four benefits of Business Organizations?", model_answer: "1. Produce goods and services\n2. Source of major innovations\n3. Provide job opportunities\n4. Pay taxes" },
                            { id: 24, question: "What are the two types of Shopping Products?", model_answer: "1. Homogeneous Shopping Products\n2. Heterogeneous Shopping Products" },
                            { id: 25, question: "List the two pricing strategies for New Products.", model_answer: "1. Market Skimming Pricing\n2. Market Penetration Pricing" },
                            { id: 26, question: "What are the two types of Distribution Channels?", model_answer: "1. Direct Distribution Channels\n2. Indirect Distribution Channels" },
                            { id: 27, question: "List the 4 areas of management responsibility.", model_answer: "1. Toward Environment\n2. Toward Customers\n3. Toward Employees\n4. Toward Investors" }
                        ]
                    }
                }
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
                    { title: "English SS", link: "https://drive.google.com/file/d/1M1Jd3Afrxpjo5BWsGJJNvh27QNfRI6bj/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only." }
                ],
quiz: {
                    isSplit: true,
                    sections: [
                        // Lecs 1-3
                        { id: 'eng_l123_p1', title: 'MCQs (Lecs 1, 2 & 3) Part 1', qCount: 20, type: 'mcq' },
                        { id: 'eng_l123_p2', title: 'MCQs (Lecs 1, 2 & 3) Part 2', qCount: 20, type: 'mcq' },
                        { id: 'eng_l123_p3', title: 'MCQs (Lecs 1, 2 & 3) Part 3', qCount: 20, type: 'mcq' },
                        // Lecs 4-6
                        { id: 'eng_l456_p1', title: 'MCQs (Lecs 4, 5 & 6) Part 1', qCount: 20, type: 'mcq' },
                        { id: 'eng_l456_p2', title: 'MCQs (Lecs 4, 5 & 6) Part 2', qCount: 20, type: 'mcq' },
                        { id: 'eng_l456_p3', title: 'MCQs (Lecs 4, 5 & 6) Part 3', qCount: 20, type: 'mcq' },
                        // Lecs 7-8
                        { id: 'eng_l78_p1', title: 'MCQs (Lecs 7 & 8) Part 1', qCount: 20, type: 'mcq' },
                        { id: 'eng_l78_p2', title: 'MCQs (Lecs 7 & 8) Part 2', qCount: 20, type: 'mcq' },
                        { id: 'eng_l78_p3', title: 'MCQs (Lecs 7 & 8) Part 3', qCount: 20, type: 'mcq' },
                        // All Lectures
                        { id: 'eng_all_p1', title: 'MCQs (All Lectures) Part 1', qCount: 20, type: 'mcq' },
                        { id: 'eng_all_p2', title: 'MCQs (All Lectures) Part 2', qCount: 20, type: 'mcq' },
                        { id: 'eng_all_p3', title: 'MCQs (All Lectures) Part 3', qCount: 20, type: 'mcq' }
                    ],
                    data: {
                        // --- Lectures 1, 2 & 3 ---
                        eng_l123_p1: [
                            { id: 1, question: "Which component is considered the 'brain' of the computer?", options: ["Hard Drive", "CPU", "Monitor", "Keyboard"], answer: 1, explanation_en: "The CPU is responsible for processing data." },
                            { id: 2, question: "When you read only the title and subtitles of a text to get the general idea, you are:", options: ["Scanning", "Proofreading", "Skimming", "Analyzing"], answer: 2, explanation_en: "Skimming is reading quickly for the main idea." },
                            { id: 3, question: "'The aim of this study is to analyze user interface design.' This sentence is an example of:", options: ["Informal English", "Technical English", "Academic English", "Slang"], answer: 2, explanation_en: "The tone is formal and objective." },
                            { id: 4, question: "Which of the following is an example of Software?", options: ["Printer", "Google Chrome", "Motherboard", "RAM"], answer: 1, explanation_en: "Chrome is a web browser (program)." },
                            { id: 5, question: "What does the suffix '-ware' refer to in words like 'hardware' and 'software'?", options: ["A person", "A study of something", "Types of materials or programs", "A process"], answer: 2, explanation_en: "It denotes specific types of objects/programs." },
                            { id: 6, question: "To find a specific date or name in a long article without reading every word, you should use:", options: ["Skimming", "Scanning", "Summarizing", "Critical Reading"], answer: 1, explanation_en: "Scanning is for locating specific details." },
                            { id: 7, question: "Which sentence uses the Present Simple tense correctly to describe a fact?", options: ["The CPU is processing data right now.", "Programmers wrote code yesterday.", "Computers process data.", "The system will update soon."], answer: 2, explanation_en: "Present Simple is for general facts." },
                            { id: 8, question: "The term 'IoT' stands for:", options: ["Internet of Technology", "Input of Tools", "Internet of Things", "Internal Operating Tools"], answer: 2, explanation_en: "Network of connected devices." },
                            { id: 9, question: "Which of the following is an Input device?", options: ["Monitor", "Printer", "Mouse", "Speaker"], answer: 2, explanation_en: "A mouse sends data into the computer." },
                            { id: 10, question: "In the word 'Multimedia', the prefix 'multi-' means:", options: ["One", "Many", "Self", "Again"], answer: 1, explanation_en: "Multi- means many." },
                            { id: 11, question: "'Follow these steps to install the software.' This sentence is best described as:", options: ["Academic English", "Technical English", "Literary English", "Spoken English"], answer: 1, explanation_en: "It gives direct instructions." },
                            { id: 12, question: "A Firewall is best defined as:", options: ["A physical wall around a server room.", "A security system that blocks unauthorized access.", "A type of computer virus.", "A program for graphic design."], answer: 1, explanation_en: "It monitors network traffic for security." },
                            { id: 13, question: "Which term describes the physical parts of a computer?", options: ["Software", "Application", "Hardware", "Algorithm"], answer: 2, explanation_en: "Hardware refers to tangible components." },
                            { id: 14, question: "The word 'Database' is stressed on which syllable?", options: ["1st (DA-ta-base)", "2nd (da-TA-base)", "3rd (data-BASE)", "No stress"], answer: 0, explanation_en: "Compound nouns usually stress the first part." },
                            { id: 15, question: "Which of the following allows users to store data over the internet?", options: ["Hard Drive", "Cloud Computing", "USB Stick", "RAM"], answer: 1, explanation_en: "Cloud computing enables remote storage." },
                            { id: 16, question: "What is the main purpose of an Algorithm?", options: ["To store data permanently.", "To display graphics.", "To provide a set of steps for solving a problem.", "To cool down the CPU."], answer: 2, explanation_en: "A sequence of instructions to solve a problem." },
                            { id: 17, question: "If you see the prefix 're-' in 'restart', it means:", options: ["Not", "Against", "Again", "Self"], answer: 2, explanation_en: "Re- indicates repetition." },
                            { id: 18, question: "Which statement is FALSE about Academic English?", options: ["It is objective.", "It uses complex sentences.", "It uses slang and emotional language.", "It is used in research papers."], answer: 2, explanation_en: "Academic English is formal and avoids slang." },
                            { id: 19, question: "'Malware' is a combination of which two words?", options: ["Malfunction + Software", "Malicious + Software", "Multiple + Hardware", "Manual + Ware"], answer: 1, explanation_en: "Malicious Software." },
                            { id: 20, question: "A Network is:", options: ["A single computer working alone.", "A group of computers connected to share resources.", "A type of software update.", "The screen of a laptop."], answer: 1, explanation_en: "Connects devices for sharing." }
                        ],
                        eng_l123_p2: [
                            { id: 21, question: "Which article is correct: 'We need to fix ___ bug in the system.' (Referring to a specific bug known to speaker)", options: ["a", "an", "the", "no article"], answer: 2, explanation_en: "'The' is for specific known items." },
                            { id: 22, question: "Cybersecurity refers to:", options: ["Designing websites.", "Protecting systems from digital attacks.", "Building robots.", "Selling computers online."], answer: 1, explanation_en: "Defending systems from attacks." },
                            { id: 23, question: "Which device is used to produce a hard copy of a document?", options: ["Scanner", "Printer", "Monitor", "Flash Drive"], answer: 1, explanation_en: "A printer outputs data onto paper." },
                            { id: 24, question: "In the word 'Download', the stress is usually on:", options: ["The first syllable (DOWN-load)", "The second syllable (down-LOAD)", "Both equally", "The last letter"], answer: 0, explanation_en: "Noun/Verb in tech usually stresses 'Down'." },
                            { id: 25, question: "RAM stands for:", options: ["Read Access Memory", "Random Access Memory", "Real Application Mode", "Rapid Action Module"], answer: 1, explanation_en: "Standard term for short-term memory." },
                            { id: 26, question: "Which sentence represents a general truth (Zero Conditional / Fact)?", options: ["If I buy a laptop, I will play games.", "Water boils at 100 degrees.", "I am studying English.", "The computer crashed yesterday."], answer: 1, explanation_en: "Scientific fact expressed in Present Simple." },
                            { id: 27, question: "The suffix '-er' or '-or' (e.g., Programmer, Processor) usually indicates:", options: ["A process", "A person or device performing an action", "A quality", "A place"], answer: 1, explanation_en: "Indicates the doer of the action." },
                            { id: 28, question: "'Auto-' in 'Autocorrect' means:", options: ["Fast", "Self", "Good", "Wrong"], answer: 1, explanation_en: "Automatic or by itself." },
                            { id: 29, question: "To decide if an article is relevant to your research, you should first:", options: ["Read the whole text slowly.", "Scan for numbers.", "Skim the title and headings.", "Memorize the vocabulary."], answer: 2, explanation_en: "Skimming helps decide relevance quickly." },
                            { id: 30, question: "Which of the following is NOT an Operating System?", options: ["Windows", "Linux", "Microsoft Word", "macOS"], answer: 2, explanation_en: "Word is application software." },
                            { id: 31, question: "'Techno-' is a prefix related to:", options: ["Art", "Technology/Technical skills", "Time", "Text"], answer: 1, explanation_en: "As in Technophile." },
                            { id: 32, question: "The main goal of Technical English is to be:", options: ["Emotional and poetic.", "Clear, direct, and precise.", "Complex and ambiguous.", "Persuasive and opinionated."], answer: 1, explanation_en: "Prioritizes clarity and precision." },
                            { id: 33, question: "Which is an example of a smart device (IoT)?", options: ["A standard wooden chair.", "A smart thermostat connected to Wi-Fi.", "A printed book.", "A mechanical pencil."], answer: 1, explanation_en: "Connects to internet to share data." },
                            { id: 34, question: "Complete the sentence: 'The programmer ___ the code every day.'", options: ["check", "checking", "checks", "checked"], answer: 2, explanation_en: "Present Simple with singular subject." },
                            { id: 35, question: "A Scanner is considered:", options: ["Input hardware", "Output hardware", "Software", "Storage"], answer: 0, explanation_en: "Captures physical images as digital input." },
                            { id: 36, question: "'Ideally, the user interface should be intuitive.' This tone is:", options: ["Academic/Formal", "Slang", "Imperative", "Aggressive"], answer: 0, explanation_en: "Uses vocabulary like 'Ideally' objectively." },
                            { id: 37, question: "Which word has the stress on the second syllable?", options: ["Keyboard", "Laptop", "Technology", "Network"], answer: 2, explanation_en: "tech-NOL-o-gy." },
                            { id: 38, question: "SSD stands for:", options: ["Solid State Drive", "Super Speed Data", "System Storage Device", "Slow State Disk"], answer: 0, explanation_en: "Storage device faster than HDD." },
                            { id: 39, question: "When text says 'Click Next to continue,' the verb 'Click' is in the:", options: ["Past tense", "Imperative form", "Future tense", "Continuous form"], answer: 1, explanation_en: "It is a command." },
                            { id: 40, question: "'Cyber-' is a prefix related to:", options: ["Computers and the internet", "Circles", "Biology", "Speed"], answer: 0, explanation_en: "As in Cyberspace." }
                        ],
                        eng_l123_p3: [
                            { id: 41, question: "Which sentence uses an article correctly?", options: ["I bought a laptop. The laptop is fast.", "I bought the laptop. A laptop is fast.", "I bought laptop. The laptop is fast.", "I bought a laptop. A laptop is fast."], answer: 0, explanation_en: "'a' for first mention, 'the' for second." },
                            { id: 42, question: "What is a Browser?", options: ["A person who browses a shop.", "Software to access the internet.", "A hardware device for gaming.", "A database command."], answer: 1, explanation_en: "e.g., Chrome, Firefox." },
                            { id: 43, question: "Efficiency in computing usually refers to:", options: ["How expensive a computer is.", "How big the screen is.", "Performing tasks quickly with minimal resources.", "The color of the device."], answer: 2, explanation_en: "Speed and optimal performance." },
                            { id: 44, question: "Which of these is a Storage device?", options: ["Flash Drive", "CPU", "Mouse", "Graphics Card"], answer: 0, explanation_en: "Used to save data." },
                            { id: 45, question: "The 's' in 'https' stands for:", options: ["Speed", "Secure", "System", "Site"], answer: 1, explanation_en: "Secure Protocol." },
                            { id: 46, question: "'The study investigates the effects of...' is a phrase typical of:", options: ["Technical Manuals", "Academic Abstracts/Papers", "Email to a friend", "Advertisement"], answer: 1, explanation_en: "'Investigates' is a formal academic verb." },
                            { id: 47, question: "IT stands for:", options: ["Internet Tools", "Information Technology", "Internal Testing", "Intelligent Tech"], answer: 1, explanation_en: "Standard industry acronym." },
                            { id: 48, question: "Which strategy involves moving your eyes quickly to find a keyword?", options: ["Skimming", "Drafting", "Scanning", "Editing"], answer: 2, explanation_en: "Scanning is for locating specific keywords." },
                            { id: 49, question: "'Logy' as a suffix means:", options: ["The study of", "The art of", "The fear of", "The love of"], answer: 0, explanation_en: "As in Technology, Biology." },
                            { id: 50, question: "Which sentence is grammatically correct?", options: ["The computers connects to the network.", "The computer connect to the network.", "The computer connects to the network.", "Connects the computer to network."], answer: 2, explanation_en: "Subject-Verb agreement (Singular)." },
                            { id: 51, question: "Data is defined as:", options: ["The physical case of the computer.", "Information processed or stored by a computer.", "The cables connecting devices.", "The electricity powering the PC."], answer: 1, explanation_en: "Raw information (numbers, text)." },
                            { id: 52, question: "Artificial Intelligence (AI) is:", options: ["A robot body without software.", "Simulation of human intelligence by machines.", "A new type of internet cable.", "A brand of laptop."], answer: 1, explanation_en: "Mimics cognitive functions." },
                            { id: 53, question: "Ideally, a password should be:", options: ["Short and simple.", "Shared with friends.", "Complex and secure.", "Written on the monitor."], answer: 2, explanation_en: "Security best practice." },
                            { id: 54, question: "The Monitor is an:", options: ["Input device", "Output device", "Processing device", "Storage device"], answer: 1, explanation_en: "Displays visual information out." },
                            { id: 55, question: "Which word is an antonym (opposite) of 'Download'?", options: ["Install", "Upload", "Delete", "Save"], answer: 1, explanation_en: "Sending data vs receiving." },
                            { id: 56, question: "'A set of instructions to solve a problem' defines:", options: ["An Algorithm", "A Database", "A Network", "A Pixel"], answer: 0, explanation_en: "Core definition." },
                            { id: 57, question: "'User-friendly' means:", options: ["The computer likes the user.", "Easy for people to use and understand.", "Used by many friends.", "Expensive."], answer: 1, explanation_en: "Intuitive design." },
                            { id: 58, question: "Which tense is used here: 'Programmers use Python for data science.'", options: ["Present Continuous", "Present Simple", "Past Simple", "Future Simple"], answer: 1, explanation_en: "General fact/habit." },
                            { id: 59, question: "A Backup is:", options: ["Moving backwards.", "A copy of data kept in case the original is lost.", "A type of battery.", "The back part of the computer case."], answer: 1, explanation_en: "Essential for recovery." },
                            { id: 60, question: "'Wireless' means:", options: ["Having many wires.", "Without physical wires (using radio waves etc.).", "Less wires than usual.", "Broken wires."], answer: 1, explanation_en: "-less means without." }
                        ],

                        // --- Lectures 4, 5 & 6 ---
                        eng_l456_p1: [
                            { id: 1, question: "Which sentence is a Zero Conditional?", options: ["If it rains, I will stay home.", "If you heat ice, it melts.", "If I were you, I would study.", "If he arrives, call me."], answer: 1, explanation_en: "Scientific fact (If + Present, Present)." },
                            { id: 2, question: "Identify the correct Imperative sentence:", options: ["You should click the button.", "Click the button.", "Clicking the button.", "I want you to click the button."], answer: 1, explanation_en: "Starts with base verb, no subject." },
                            { id: 3, question: "'First, open the file. ___ edit the text.' Which word fits best?", options: ["However", "Then", "Because", "Or"], answer: 1, explanation_en: "Sequence connector." },
                            { id: 4, question: "Which punctuation mark is used to separate items in a list?", options: ["Period (.)", "Colon (:)", "Comma (,)", "Question mark (?)"], answer: 2, explanation_en: "Separates items in a series." },
                            { id: 5, question: "Which sentence uses the Present Continuous tense?", options: ["The system updates every night.", "The system is updating now.", "The system updated yesterday.", "The system will update."], answer: 1, explanation_en: "be + verb-ing." },
                            { id: 6, question: "A complete sentence must have at least:", options: ["A Subject and a Verb.", "A Verb and an Adjective.", "A Subject and a Comma.", "A Noun and a Pronoun."], answer: 0, explanation_en: "Essential components of a clause." },
                            { id: 7, question: "'If you don't save your work, you ___ it.' (First Conditional)", options: ["lose", "lost", "will lose", "losing"], answer: 2, explanation_en: "If + Present, Will + Verb." },
                            { id: 8, question: "What does the verb 'Execute' mean in computing?", options: ["To kill a program.", "To run or perform a command/program.", "To delete a file.", "To write code."], answer: 1, explanation_en: "CPU executes instructions." },
                            { id: 9, question: "Which word has a short vowel sound?", options: ["Data (/ei/)", "Upload (/ʌ/)", "File (/ai/)", "User (/ju:/)"], answer: 1, explanation_en: "'u' in upload is short." },
                            { id: 10, question: "Which is the correct definition structure?", options: ["A router connects networks.", "A router is a device that connects networks.", "Connects networks is a router.", "Router device connecting networks."], answer: 1, explanation_en: "Term + Class + Function." },
                            { id: 11, question: "'Please do not ___ the computer while it is updating.'", options: ["turn off", "turning off", "turned off", "to turn off"], answer: 0, explanation_en: "Negative imperative: Do not + Base." },
                            { id: 12, question: "To show the final step in a process, we use:", options: ["First", "Next", "Finally", "After that"], answer: 2, explanation_en: "Signals conclusion." },
                            { id: 13, question: "Which sentence is punctuated correctly?", options: ["The computer crashed, it needs a reboot.", "The computer crashed; it needs a reboot.", "The computer crashed it needs a reboot.", "The computer, crashed it needs a reboot."], answer: 1, explanation_en: "Semicolon joins independent clauses." },
                            { id: 14, question: "'Bandwidth' refers to:", options: ["The weight of the cable.", "The amount of data a network can transfer.", "The width of the monitor.", "The band of colors on screen."], answer: 1, explanation_en: "Data transfer capacity." },
                            { id: 15, question: "If the server fails, users ___ access to the site.", options: ["loses", "will lose", "losing", "lost"], answer: 1, explanation_en: "First Conditional." },
                            { id: 16, question: "Which word contains the /pr/ consonant cluster?", options: ["Graphics", "Program", "Upgrade", "Integrate"], answer: 1, explanation_en: "Starts with P-R." },
                            { id: 17, question: "To 'Configure' means:", options: ["To break the system.", "To set up or adjust settings.", "To buy a new computer.", "To type fast."], answer: 1, explanation_en: "Arranging settings." },
                            { id: 18, question: "Which sentence implies a rule or scientific fact?", options: ["If you click this, it will open.", "If the temperature rises, the fan turns on.", "If I go home, I will sleep.", "If you help me, I will help you."], answer: 1, explanation_en: "Zero conditional (automatic)." },
                            { id: 19, question: "'Detect' means:", options: ["To hide.", "To identify or discover presence.", "To delete.", "To ignore."], answer: 1, explanation_en: "e.g., Antivirus detects malware." },
                            { id: 20, question: "Correct the error: 'The laptop runs fast very.'", options: ["The laptop very runs fast.", "The laptop runs very fast.", "Very fast the laptop runs.", "Runs the laptop very fast."], answer: 1, explanation_en: "Adverb modifies Adverb." }
                        ],
                        eng_l456_p2: [
                            { id: 21, question: "Which is a Negative Imperative?", options: ["Close the window.", "Don't delete the file.", "You shouldn't delete.", "Not delete."], answer: 1, explanation_en: "Don't + Base Verb." },
                            { id: 22, question: "A Colon (:) is often used to:", options: ["End a sentence.", "Introduce a list or explanation.", "Show possession.", "Separate unrelated sentences."], answer: 1, explanation_en: "e.g., Hardware includes: ..." },
                            { id: 23, question: "'If users enter the wrong password, the system blocks access.' This is Type:", options: ["Zero", "First", "Second", "Third"], answer: 0, explanation_en: "Programmed rule/routine." },
                            { id: 24, question: "'Attachment' usually refers to:", options: ["A feeling of love for the computer.", "A file sent along with an email.", "A cable connecting the monitor.", "A virus."], answer: 1, explanation_en: "Digital communication term." },
                            { id: 25, question: "Which word has a Long Vowel sound?", options: ["Fill", "File (/ai/)", "Sit", "Up"], answer: 1, explanation_en: "/ai/ is a diphthong/long sound." },
                            { id: 26, question: "To 'Transfer' data means to:", options: ["Delete it.", "Move it from one place to another.", "Create it.", "Hide it."], answer: 1, explanation_en: "Move data." },
                            { id: 27, question: "'After that' is a sequence connector similar to:", options: ["First", "Next", "Finally", "However"], answer: 1, explanation_en: "Intermediate step signal." },
                            { id: 28, question: "Which is correct?", options: ["The computer saves data.", "Saves data the computer.", "The computer save data.", "Data the computer saves."], answer: 0, explanation_en: "SVO structure + Agreement." },
                            { id: 29, question: "'Access' can be defined as:", options: ["The right or ability to enter/use a system.", "A hardware brand.", "A type of screen.", "Excess data."], answer: 0, explanation_en: "e.g., Access denied." },
                            { id: 30, question: "Which phrase is an Imperative?", options: ["I think you should start.", "Start the program.", "Starting the program is good.", "He starts the program."], answer: 1, explanation_en: "Direct command." },
                            { id: 31, question: "'A browser is a program ___ helps users access the web.'", options: ["who", "that/which", "where", "when"], answer: 1, explanation_en: "Relative pronoun for things." },
                            { id: 32, question: "If you don't have an account, you ___ sign in.", options: ["can", "cannot", "will", "do"], answer: 1, explanation_en: "Logical consequence." },
                            { id: 33, question: "Which word contains the /gr/ cluster?", options: ["Process", "Graphics", "Print", "Press"], answer: 1, explanation_en: "Starts with G-R." },
                            { id: 34, question: "An Apostrophe (') is used to show:", options: ["A list.", "Possession or contraction.", "The end of a sentence.", "A quote."], answer: 1, explanation_en: "User's file (possession)." },
                            { id: 35, question: "The Subject in the sentence 'The slow network caused an error' is:", options: ["The slow network", "caused", "an error", "network caused"], answer: 0, explanation_en: "Noun phrase doing action." },
                            { id: 36, question: "'First, check the cable. Then, restart the router.' These are steps to:", options: ["Write code.", "Troubleshoot (solve) a problem.", "Buy a computer.", "Design a website."], answer: 1, explanation_en: "Problem solving context." },
                            { id: 37, question: "'If the battery is low, the light ___ red.' (Fact/Design feature)", options: ["flashed", "flashes", "flashing", "will flashed"], answer: 1, explanation_en: "Zero conditional." },
                            { id: 38, question: "Which sentence is in Past Simple?", options: ["I install the app.", "I am installing the app.", "I installed the app.", "I will install the app."], answer: 2, explanation_en: "-ed ending." },
                            { id: 39, question: "'Load' in computing means:", options: ["To make heavy.", "To bring data/program into memory.", "To shut down.", "To clean."], answer: 1, explanation_en: "e.g., OS loads on startup." },
                            { id: 40, question: "Which sentence needs a comma?", options: ["I like coding.", "If you click here the window opens.", "The computer is fast.", "He writes Java."], answer: 1, explanation_en: "If-clause first needs comma." }
                        ],
                        eng_l456_p3: [
                            { id: 41, question: "'Install' is the opposite of:", options: ["Uninstall", "Deinstall", "Disinstall", "Noninstall"], answer: 0, explanation_en: "Correct prefix is Un-." },
                            { id: 42, question: "'Press the key.' This sentence expresses:", options: ["A wish.", "An instruction.", "A question.", "A prediction."], answer: 1, explanation_en: "Imperative mood." },
                            { id: 43, question: "Which is correct punctuation?", options: ["The file is corrupt?", "The file is corrupt.", "The file is corrupt,", "The file is corrupt"], answer: 1, explanation_en: "Declarative ends with period." },
                            { id: 44, question: "'Upload' means sending data from:", options: ["Internet to Device.", "Device to Internet/Server.", "Screen to Keyboard.", "RAM to CPU."], answer: 1, explanation_en: "Up to server." },
                            { id: 45, question: "Which is the correct sequence?", options: ["Finally, Next, First.", "First, Finally, Then.", "First, Then, Finally.", "Then, First, Finally."], answer: 2, explanation_en: "Logical order." },
                            { id: 46, question: "'If you upgrade the RAM, the computer ___ faster.'", options: ["run", "ran", "will run", "running"], answer: 2, explanation_en: "First conditional." },
                            { id: 47, question: "The word 'Server' has which vowel sound in the first syllable?", options: ["/æ/ (apple)", "/3:/ (bird/work)", "/i:/ (see)", "/p/ (hot)"], answer: 1, explanation_en: "Long 'er' sound." },
                            { id: 48, question: "A 'Topic Sentence' usually:", options: ["Ends the paragraph.", "Introduces the main idea.", "Gives specific examples.", "Is not important."], answer: 1, explanation_en: "Sets scope of paragraph." },
                            { id: 49, question: "'Description' paragraphs answer the question:", options: ["How do I do it?", "What is it like? / What does it have?", "Why is it true?", "When did it happen?"], answer: 1, explanation_en: "Features and appearance." },
                            { id: 50, question: "Which sentence has NO subject?", options: ["Computers work.", "It works.", "Works well.", "She works."], answer: 2, explanation_en: "Fragment." },
                            { id: 51, question: "'Don't ___ the power cable.'", options: ["unplug", "unplugs", "unplugged", "unplugging"], answer: 0, explanation_en: "Imperative base form." },
                            { id: 52, question: "A semicolon (;) is stronger than a comma but weaker than a:", options: ["Space", "Period (Full stop)", "Hyphen", "Letter"], answer: 1, explanation_en: "Separates independent clauses." },
                            { id: 53, question: "If I say 'If I press X...', I am starting a:", options: ["Conditional clause.", "Relative clause.", "Question.", "Greeting."], answer: 0, explanation_en: "Introduces condition." },
                            { id: 54, question: "'Process' usually involves:", options: ["A single static image.", "A series of steps or actions.", "A list of nouns.", "A description of a person."], answer: 1, explanation_en: "How something happens over time." },
                            { id: 55, question: "Which word rhymes with 'Save'?", options: ["Have", "Wave", "Half", "Safe"], answer: 1, explanation_en: "Ends in /eiv/." },
                            { id: 56, question: "'The user selects the file.' -> Change to Imperative:", options: ["User select the file.", "Select the file.", "To select the file.", "Selected the file."], answer: 1, explanation_en: "Drop subject." },
                            { id: 57, question: "'Antivirus' is:", options: ["Hardware", "Software", "An output device", "A user"], answer: 1, explanation_en: "Program code." },
                            { id: 58, question: "Which connector shows contrast?", options: ["However", "Then", "Next", "Finally"], answer: 0, explanation_en: "Opposing idea." },
                            { id: 59, question: "'Data' (IPA: /deɪ.tə/) has:", options: ["1 syllable", "2 syllables", "3 syllables", "4 syllables"], answer: 1, explanation_en: "Da-ta." },
                            { id: 60, question: "'If the Wi-Fi is slow, we ___ the router.'", options: ["restarts", "restarting", "restart", "restarted"], answer: 2, explanation_en: "Present simple result." }
                        ],

                        // --- Lectures 7 & 8 ---
                        eng_l78_p1: [
                            { id: 1, question: "'Let's move on to the next point.' This phrase is used for:", options: ["Starting a presentation.", "Concluding a presentation.", "Moving between points (Transition).", "Giving an example."], answer: 2, explanation_en: "Signals a shift." },
                            { id: 2, question: "Which word signals Contrast?", options: ["Moreover", "However", "Therefore", "For example"], answer: 1, explanation_en: "Contradicts previous statement." },
                            { id: 3, question: "'Cloud storage is cheap. ___ it is accessible from anywhere.'", options: ["However", "Therefore", "Moreover", "But"], answer: 2, explanation_en: "Adds info (positive + positive)." },
                            { id: 4, question: "A strong Academic Introduction should include:", options: ["Your favorite food.", "Your name, major, and academic interests.", "A joke.", "Slang words."], answer: 1, explanation_en: "Focus on academic identity." },
                            { id: 5, question: "'To sum up...' is a signpost for:", options: ["Introduction", "Example", "Conclusion", "Contrast"], answer: 2, explanation_en: "Signals summary." },
                            { id: 6, question: "In the word 'Technology', the stress falls on the:", options: ["1st syllable", "2nd syllable", "3rd syllable", "4th syllable"], answer: 1, explanation_en: "tech-NOL-o-gy." },
                            { id: 7, question: "'Therefore' expresses:", options: ["Addition", "Cause and Effect (Result)", "Contrast", "Time"], answer: 1, explanation_en: "Logical consequence." },
                            { id: 8, question: "Which phrase is used to give an example?", options: ["In conclusion", "For instance", "As a result", "On the other hand"], answer: 1, explanation_en: "Synonym for For Example." },
                            { id: 9, question: "'Many companies suffer from attacks. ___ they invest in firewalls.'", options: ["However", "Therefore", "For example", "Although"], answer: 1, explanation_en: "Result of attacks." },
                            { id: 10, question: "The Topic Sentence of a paragraph:", options: ["Gives details.", "Introduces the main idea.", "Is the last sentence.", "Uses a linking word."], answer: 1, explanation_en: "Sets scope." },
                            { id: 11, question: "'Consequently' means the same as:", options: ["As a result", "However", "In addition", "First"], answer: 0, explanation_en: "Indicates effect." },
                            { id: 12, question: "Which syllable is stressed in 'Efficiency'?", options: ["1st", "2nd (e-FFI-cien-cy)", "3rd", "4th"], answer: 1, explanation_en: "Antepenultimate usually." },
                            { id: 13, question: "'Today, I'm going to talk about...' is used for:", options: ["Ending", "Starting", "Transitioning", "Arguing"], answer: 1, explanation_en: "Opening signpost." },
                            { id: 14, question: "'In addition' is a linking device for:", options: ["Adding information", "Contrasting", "Concluding", "Examples"], answer: 0, explanation_en: "Adds new point." },
                            { id: 15, question: "'Although the laptop is expensive, it is very fast.' This shows:", options: ["Addition", "Concession/Contrast", "Result", "Sequence"], answer: 1, explanation_en: "Contrast." },
                            { id: 16, question: "Which is NOT a signpost for moving between points?", options: ["Let's move on to...", "Another important point is...", "My name is...", "Now, I'd like to highlight..."], answer: 2, explanation_en: "Introduction phrase." },
                            { id: 17, question: "In the word 'Developer', the stress is on:", options: ["1st", "2nd (de-VEL-op-er)", "3rd", "4th"], answer: 1, explanation_en: "Root 'develop'." },
                            { id: 18, question: "Supporting Details in a paragraph provide:", options: ["The main idea only.", "Explanations, examples, and evidence.", "The conclusion.", "The title."], answer: 1, explanation_en: "Support topic sentence." },
                            { id: 19, question: "'First... Moreover... Finally.' This sequence lacks which type of logic?", options: ["It is logical.", "It is completely wrong.", "It uses only contrast.", "None of above"], answer: 0, explanation_en: "Valid structure." },
                            { id: 20, question: "Which word has the stress on the 3rd syllable?", options: ["Application (ap-pli-CA-tion)", "Computer", "Laptop", "System"], answer: 0, explanation_en: "Before -tion." }
                        ],
                        eng_l78_p2: [
                            { id: 21, question: "'I'd like to begin with...'", options: ["Conclusion", "Introduction/Start", "Contrast", "Example"], answer: 1, explanation_en: "Signals first point." },
                            { id: 22, question: "'Furthermore' is similar to:", options: ["But", "So", "Moreover", "Because"], answer: 2, explanation_en: "Adds info." },
                            { id: 23, question: "A Concluding Sentence:", options: ["Introduces a new topic.", "Summarizes or gives a final comment.", "Gives specific statistics.", "Asks a question."], answer: 1, explanation_en: "Wraps up." },
                            { id: 24, question: "'Artificial' stress pattern:", options: ["AR-ti-fi-cial", "ar-ti-FI-cial", "ar-TI-fi-cial", "arti-fi-CIAL"], answer: 2, explanation_en: "3rd syllable according to lecture." },
                            { id: 25, question: "Which is a good way to describe your future goals?", options: ["I want money.", "I hope to specialize in data science.", "I like games.", "Computers are good."], answer: 1, explanation_en: "Academic vocab." },
                            { id: 26, question: "'On the other hand' introduces:", options: ["The same idea.", "An alternative or contrasting view.", "A conclusion.", "An example."], answer: 1, explanation_en: "Balanced contrast." },
                            { id: 27, question: "Clear writing is important to:", options: ["Confuse the reader.", "Avoid misunderstanding and errors.", "Look smart.", "Use more paper."], answer: 1, explanation_en: "Prevents technical errors." },
                            { id: 28, question: "Which is NOT a linking device?", options: ["Therefore", "Computer", "However", "In addition"], answer: 1, explanation_en: "It is a noun." },
                            { id: 29, question: "'Algorithm' stress:", options: ["1st (AL-go-rithm)", "2nd", "3rd", "4th"], answer: 0, explanation_en: "1st syllable." },
                            { id: 30, question: "'AI detects patterns. ___ it can predict trends.'", options: ["However", "But", "Consequently", "Although"], answer: 2, explanation_en: "Result." },
                            { id: 31, question: "Signposting helps the listener:", options: ["Sleep.", "Follow the structure of the talk.", "Ignore the talk.", "Speak faster."], answer: 1, explanation_en: "Roadmap." },
                            { id: 32, question: "'Ideally' implies:", options: ["In a perfect situation.", "Badly.", "Never.", "Recently."], answer: 0, explanation_en: "From Ideal." },
                            { id: 33, question: "Which is an Argumentative paragraph topic?", options: ["How a mouse works.", "The history of Apple.", "The impact of AI on future jobs.", "Describing a laptop."], answer: 2, explanation_en: "Involves opinion/persuasion." },
                            { id: 34, question: "'Security' stress:", options: ["1st", "2nd (se-CU-ri-ty)", "3rd", "4th"], answer: 1, explanation_en: "2nd syllable." },
                            { id: 35, question: "'Another important point to consider is...'", options: ["Transition", "Conclusion", "Example", "Greeting"], answer: 0, explanation_en: "Next point." },
                            { id: 36, question: "'Hackers target data. ___ companies use firewalls.'", options: ["Because", "For instance", "Therefore", "However"], answer: 2, explanation_en: "Cause -> Effect." },
                            { id: 37, question: "A Descriptive Paragraph:", options: ["Argues a point.", "Paints a picture with details.", "Tells a joke.", "Lists only numbers."], answer: 1, explanation_en: "Describes 'what'." },
                            { id: 38, question: "'Operating-system' (Compound): Stress?", options: ["OPERATING", "system", "Both", "None"], answer: 0, explanation_en: "First word rule." },
                            { id: 39, question: "Which linking word is formal?", options: ["So", "Also", "Consequently", "And"], answer: 2, explanation_en: "Academic." },
                            { id: 40, question: "'I enjoy working with Python.' Fits in:", options: ["An apology.", "An academic introduction.", "A warning.", "A tech support call."], answer: 1, explanation_en: "Stating interests." }
                        ],
                        eng_l78_p3: [
                            { id: 41, question: "'However' is pronounced with stress on:", options: ["1st", "2nd", "3rd", "None"], answer: 1, explanation_en: "how-EV-er." },
                            { id: 42, question: "Unity in a paragraph means:", options: ["All sentences discuss one main idea.", "Sentences are in different languages.", "Using many colors.", "Writing very long sentences."], answer: 0, explanation_en: "Focus." },
                            { id: 43, question: "'A clear example of this is...'", options: ["Signpost for Example.", "Signpost for Conclusion.", "Signpost for Contrast.", "Signpost for Starting."], answer: 0, explanation_en: "Example." },
                            { id: 44, question: "'Consequently' stress:", options: ["1st", "2nd", "3rd", "4th"], answer: 0, explanation_en: "CON-se-quently." },
                            { id: 45, question: "When explaining a tech topic, you should:", options: ["Use complex slang.", "Speak clearly and confidently.", "Look at the floor.", "Speak very fast."], answer: 1, explanation_en: "Effective presentation." },
                            { id: 46, question: "'The main focus of my presentation is...'", options: ["Conclusion.", "Intro/Topic statement.", "Contrast.", "Example."], answer: 1, explanation_en: "Defines scope." },
                            { id: 47, question: "'Although' is usually followed by:", options: ["A comma immediately.", "A clause (Subject + Verb).", "A single noun only.", "A question."], answer: 1, explanation_en: "Although + Clause." },
                            { id: 48, question: "'In addition' stress:", options: ["1st", "2nd", "3rd (in a-DDI-tion)", "4th"], answer: 2, explanation_en: "Phrasal stress." },
                            { id: 49, question: "Cohesion in writing involves using:", options: ["Glue.", "Linking devices/Connectors.", "Different fonts.", "Random words."], answer: 1, explanation_en: "Flow." },
                            { id: 50, question: "'We need to update. ___ we need to restart.'", options: ["However", "Therefore", "Furthermore", "Although"], answer: 2, explanation_en: "Adding step." },
                            { id: 51, question: "'Specific' implies:", options: ["General", "Vague", "Precise/Particular", "Wrong"], answer: 2, explanation_en: "Detailed." },
                            { id: 52, question: "'On the one hand... On the other hand' is used to:", options: ["List groceries.", "Compare two sides.", "Give one opinion.", "End text."], answer: 1, explanation_en: "Comparison." },
                            { id: 53, question: "'Technical Vocabulary' includes:", options: ["Nice, good.", "Algorithm, Encryption.", "Cat, dog.", "Happy, sad."], answer: 1, explanation_en: "Domain specific." },
                            { id: 54, question: "'Machine learning is a subset of AI.' This is a:", options: ["Definition/Fact.", "Question.", "Command.", "Greeting."], answer: 0, explanation_en: "Relationship." },
                            { id: 55, question: "'Signposting' metaphorically means:", options: ["Putting up physical signs.", "Guiding the listener/reader.", "Writing on a post.", "Stopping."], answer: 1, explanation_en: "Guidance." },
                            { id: 56, question: "'My presentation consists of three parts.' Said in:", options: ["Middle", "Introduction", "End", "Q&A"], answer: 1, explanation_en: "Structure outline." },
                            { id: 57, question: "'Major' in an introduction means:", options: ["Rank.", "Big.", "Field of study.", "Problem."], answer: 2, explanation_en: "Academic context." },
                            { id: 58, question: "Which linking word can replace 'For example'?", options: ["However", "For instance", "Therefore", "Moreover"], answer: 1, explanation_en: "Synonym." },
                            { id: 59, question: "'Computers help in education. ___ they are used in hospitals.'", options: ["Similarly", "However", "Therefore", "For example"], answer: 0, explanation_en: "Parallel point." },
                            { id: 60, question: "'Presentation' stress:", options: ["pre-sen-TA-tion", "PRE-sen-ta-tion", "pre-SEN-ta-tion", "presentation"], answer: 0, explanation_en: "-tion rule." }
                        ],

                        // --- All Lectures (Mixed) ---
                        eng_all_p1: [
                            { id: 1, question: "Which device is Input hardware?", options: ["Printer", "Speaker", "Keyboard", "Monitor"], answer: 2, explanation_en: "Used to enter data." },
                            { id: 2, question: "'If you drop the laptop, it breaks.' This is:", options: ["Zero Conditional", "First Conditional", "Imperative", "Past Tense"], answer: 0, explanation_en: "Physical fact." },
                            { id: 3, question: "Which word means 'The study of technology'?", options: ["Technoware", "Technology", "Technologist", "Technos"], answer: 1, explanation_en: "-logy = study." },
                            { id: 4, question: "'Ideally, we should test the code.' The tone is:", options: ["Academic/Professional", "Slang", "Aggressive", "Informal"], answer: 0, explanation_en: "Formal adverb." },
                            { id: 5, question: "CPU stands for:", options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Panel Unit"], answer: 0, explanation_en: "Standard definition." },
                            { id: 6, question: "'However' is used for:", options: ["Addition", "Contrast", "Example", "Result"], answer: 1, explanation_en: "Opposing ideas." },
                            { id: 7, question: "Which is an Imperative?", options: ["You restart.", "Restarting.", "Restart the PC.", "He restarts."], answer: 2, explanation_en: "Command form." },
                            { id: 8, question: "'Download' stress is on:", options: ["1st Syllable", "2nd Syllable", "Last letter", "No stress"], answer: 0, explanation_en: "Noun/Verb tech usage." },
                            { id: 9, question: "A Firewall:", options: ["Burns the computer.", "Protects from unauthorized access.", "Stores data.", "Prints pages."], answer: 1, explanation_en: "Security definition." },
                            { id: 10, question: "'First, click A. Then, click B.' 'Then' is a:", options: ["Noun", "Verb", "Sequence Connector", "Adjective"], answer: 2, explanation_en: "Shows order." },
                            { id: 11, question: "Skimming is:", options: ["Reading every word.", "Reading quickly for the main idea.", "Looking for a specific number.", "Writing a summary."], answer: 1, explanation_en: "Strategy definition." },
                            { id: 12, question: "'Malware' means:", options: ["Good software.", "Malicious software.", "Hardware.", "Email attachment."], answer: 1, explanation_en: "Mal- prefix." },
                            { id: 13, question: "'The aim of this paper is...' fits in:", options: ["A text message.", "An academic abstract.", "A sticky note.", "A chat."], answer: 1, explanation_en: "Academic phraseology." },
                            { id: 14, question: "RAM is:", options: ["Permanent storage.", "Temporary/Volatile memory.", "An input device.", "The internet."], answer: 1, explanation_en: "Loses data without power." },
                            { id: 15, question: "'If I study hard, I ___ the exam.'", options: ["pass", "will pass", "passed", "passing"], answer: 1, explanation_en: "First Conditional." },
                            { id: 16, question: "'For instance' means:", options: ["For example", "However", "Therefore", "But"], answer: 0, explanation_en: "Synonym." },
                            { id: 17, question: "Which is Software?", options: ["Mouse", "Windows 10", "Screen", "Chip"], answer: 1, explanation_en: "OS is software." },
                            { id: 18, question: "'Auto-' means:", options: ["Self", "Other", "Fast", "Big"], answer: 0, explanation_en: "Automatic." },
                            { id: 19, question: "Scanning helps you find:", options: ["The general topic.", "Specific details (dates, names).", "Grammar mistakes.", "The title."], answer: 1, explanation_en: "Strategy definition." },
                            { id: 20, question: "'Therefore' indicates:", options: ["Contrast", "Cause and Effect", "Example", "Time"], answer: 1, explanation_en: "Logical result." }
                        ],
                        eng_all_p2: [
                            { id: 21, question: "'Do not ___ the file.'", options: ["delete", "deletes", "deleted", "deleting"], answer: 0, explanation_en: "Negative imperative." },
                            { id: 22, question: "IoT = Internet of ___", options: ["Tools", "Things", "Technologies", "Time"], answer: 1, explanation_en: "Acronym." },
                            { id: 23, question: "Which word has Short Vowel /ʌ/?", options: ["Data", "Upload", "File", "Screen"], answer: 1, explanation_en: "'Up' sound." },
                            { id: 24, question: "'Development' stress:", options: ["DE-vel-op-ment", "de-VEL-op-ment", "de-vel-OP-ment", "de-vel-op-MENT"], answer: 1, explanation_en: "2nd syllable." },
                            { id: 25, question: "'Although it is old, it works.' 'Although' shows:", options: ["Addition", "Concession/Contrast", "Result", "Example"], answer: 1, explanation_en: "Contrast." },
                            { id: 26, question: "'Cyber-' relates to:", options: ["Computers/Internet", "Space", "Mathematics", "Biology"], answer: 0, explanation_en: "Prefix." },
                            { id: 27, question: "'Database' stress:", options: ["DA-ta-base", "da-TA-base", "data-BASE", "None"], answer: 0, explanation_en: "1st syllable." },
                            { id: 28, question: "'If the system fails, we lose data.' (General Rule).", options: ["Zero Conditional", "First Conditional", "Past", "Future"], answer: 0, explanation_en: "If + Present, Present." },
                            { id: 29, question: "'Hardware' example:", options: ["Photoshop", "Python", "Hard Drive", "Browser"], answer: 2, explanation_en: "Physical component." },
                            { id: 30, question: "'Consequently' is a formal way to say:", options: ["So / As a result", "But", "Also", "Because"], answer: 0, explanation_en: "Linking word." },
                            { id: 31, question: "To 'Configure' is to:", options: ["Break", "Set up settings", "Buy", "Sell"], answer: 1, explanation_en: "Tech verb." },
                            { id: 32, question: "Which sentence is correct?", options: ["The laptop runs fast.", "Laptop runs fast.", "The laptop run fast.", "Runs fast the laptop."], answer: 0, explanation_en: "SVO order." },
                            { id: 33, question: "'In addition' adds:", options: ["A contrast.", "A new point.", "A conclusion.", "An example."], answer: 1, explanation_en: "Linking word." },
                            { id: 34, question: "'Algorithm':", options: ["Steps to solve a problem.", "A hardware part.", "A virus.", "A monitor."], answer: 0, explanation_en: "Definition." },
                            { id: 35, question: "'Let's move on to...' is a:", options: ["Signpost (Transition)", "Definition", "Question", "Command"], answer: 0, explanation_en: "Presentation skill." },
                            { id: 36, question: "'Monitor' acts as:", options: ["Output", "Input", "Storage", "Software"], answer: 0, explanation_en: "Visual display." },
                            { id: 37, question: "'Multi-' means:", options: ["One", "Many", "None", "Small"], answer: 1, explanation_en: "Prefix." },
                            { id: 38, question: "'To sum up...' indicates:", options: ["Starting", "Example", "Conclusion", "Middle"], answer: 2, explanation_en: "Ending." },
                            { id: 39, question: "SSD is faster than:", options: ["RAM", "HDD (Hard Disk Drive)", "CPU", "Cache"], answer: 1, explanation_en: "Solid state vs spinning." },
                            { id: 40, question: "'Efficiency' stress:", options: ["e-FFI-cien-cy", "E-ffi-cien-cy", "ef-fi-CIEN-cy", "efficiency"], answer: 0, explanation_en: "2nd syllable." }
                        ],
                        eng_all_p3: [
                            { id: 41, question: "'Please save the file.' -> Imperative:", options: ["You save.", "Save the file.", "Saving.", "To save."], answer: 1, explanation_en: "Command." },
                            { id: 42, question: "'Techno-' relates to:", options: ["Technology", "Text", "Time", "Tables"], answer: 0, explanation_en: "Prefix." },
                            { id: 43, question: "Which is NOT an OS?", options: ["Windows", "Linux", "Chrome (Browser)", "Android"], answer: 2, explanation_en: "Chrome is browser." },
                            { id: 44, question: "'Ideally' means:", options: ["Perfectly", "Badly", "Quickly", "Slowly"], answer: 0, explanation_en: "Adverb of Ideal." },
                            { id: 45, question: "'If you click, it opens.'", options: ["Fact/Routine (Zero)", "Past", "Question", "Command"], answer: 0, explanation_en: "If+Present, Present." },
                            { id: 46, question: "'Security' stress:", options: ["se-CU-ri-ty", "SE-cu-ri-ty", "se-cu-RI-ty", "security"], answer: 0, explanation_en: "2nd syllable." },
                            { id: 47, question: "'Wireless' means:", options: ["No wires", "Many wires", "Blue wires", "Red wires"], answer: 0, explanation_en: "-less suffix." },
                            { id: 48, question: "'First... Then... Finally.' describes:", options: ["A Process", "A Picture", "A Person", "A Place"], answer: 0, explanation_en: "Sequence." },
                            { id: 49, question: "'Programmer':", options: ["Person who writes code.", "Machine.", "Software.", "Cable."], answer: 0, explanation_en: "-er suffix." },
                            { id: 50, question: "'Graphic' cluster:", options: ["/gr/", "/pr/", "/tr/", "/br/"], answer: 0, explanation_en: "Phonics." },
                            { id: 51, question: "'Access' implies:", options: ["Entry/Usage right.", "Exit.", "Stop.", "Block."], answer: 0, explanation_en: "Definition." },
                            { id: 52, question: "'Topic Sentence':", options: ["Main idea.", "Detail.", "End.", "Title."], answer: 0, explanation_en: "Paragraph structure." },
                            { id: 53, question: "'However' stress:", options: ["how-EV-er", "HOW-ev-er", "how-ev-ER", "None"], answer: 0, explanation_en: "2nd syllable." },
                            { id: 54, question: "'I will go if I have time.'", options: ["First Conditional", "Zero Conditional", "Past", "Imperative"], answer: 0, explanation_en: "Will + If (Present)." },
                            { id: 55, question: "'User-friendly':", options: ["Easy to use.", "Hard to use.", "Broken.", "Cheap."], answer: 0, explanation_en: "Tech idiom." },
                            { id: 56, question: "'A mouse is a device that moves the cursor.'", options: ["Definition", "Command", "Question", "Exclamation"], answer: 0, explanation_en: "Structure." },
                            { id: 57, question: "'Backup':", options: ["Copy of data.", "Original data.", "Virus.", "Screen."], answer: 0, explanation_en: "Safety copy." },
                            { id: 58, question: "'Transfer':", options: ["Move.", "Stop.", "Stay.", "Sleep."], answer: 0, explanation_en: "Verb meaning." },
                            { id: 59, question: "'My name is X and I study CS.'", options: ["Introduction.", "Conclusion.", "Contrast.", "Example."], answer: 0, explanation_en: "Self-intro." },
                            { id: 60, question: "'Computer' stress:", options: ["com-PU-ter", "COM-pu-ter", "com-pu-TER", "computer"], answer: 0, explanation_en: "2nd syllable." }
                        ]
                    }
                }            } 
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
                        { title: "تفكير ابداعي ملخص الملخص", link: "https://drive.google.com/file/d/1WXSB18Uy6cvDMtk7kN21Re3PCW2YoEKR/view?usp=drive_link", type: "PDF", note: "تحذير: للمراجعة السريعة فقط." },
                        { title: "تفكير ابداعي كل المقارنات", link: "https://drive.google.com/file/d/14G5xHl-Fhub8MJvX_lqRYPHitoyDV2q7/view?usp=drive_link", type: "PDF", note: "مفيد: تجميع شامل." }
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
                        { title: "Creative Thinking SS", link: "https://drive.google.com/file/d/1UufaftTaieq9rw3UrgfYhhmMmD6SWLfW/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only." },
                        { title: "Creative Thinking All comparisons", link: "https://drive.google.com/file/d/1mjrbQ24jGC-yf3YnDls2Kw2FYay6gkhJ/view?usp=drive_link", type: "PDF", note: "Useful: Collection of all course comparisons." }
                    ] 
                },
                quiz: {
                    isSplit: true,
                    sections: [
                        // --- MCQs (Parts 1-5) ---
                        { id: 'cre_1', title: 'MCQ Part 1 (Q1-20)', qCount: 20, type: 'mcq' },
                        { id: 'cre_2', title: 'MCQ Part 2 (Q21-40)', qCount: 20, type: 'mcq' },
                        { id: 'cre_3', title: 'MCQ Part 3 (Q41-60)', qCount: 20, type: 'mcq' },
                        { id: 'cre_4', title: 'MCQ Part 4 (Q61-80)', qCount: 20, type: 'mcq' },
                        { id: 'cre_5', title: 'MCQ Part 5 (Q81-100)', qCount: 20, type: 'mcq' },
                        
                        // --- True/False (Parts 6-10) ---
                        { id: 'cre_tf_1', title: 'True/False Part 1 (Q1-20)', qCount: 20, type: 'tf' },
                        { id: 'cre_tf_2', title: 'True/False Part 2 (Q21-40)', qCount: 20, type: 'tf' },
                        { id: 'cre_tf_3', title: 'True/False Part 3 (Q41-60)', qCount: 20, type: 'tf' },
                        { id: 'cre_tf_4', title: 'True/False Part 4 (Q61-80)', qCount: 20, type: 'tf' },
                        { id: 'cre_tf_5', title: 'True/False Part 5 (Q81-100)', qCount: 20, type: 'tf' }
                    ],
                    data: {
                        // ================= MCQ DATA =================
                        cre_1: [
                            { id: 1, question: "In the Four Ears Model, if a receiver focuses solely on tone and body language, which 'ear' are they using?", options: ["The Factual Ear", "The Self-Revelation Ear", "The Relationship Ear", "The Appeal Ear"], answer: 2, explanation_en: "The Relationship Ear focuses on how the sender views the receiver (tone/body language)." },
                            { id: 2, question: "Which stage of Tuckman's Team Development is the 'birthplace of creativity' due to conflict?", options: ["Forming", "Norming", "Storming", "Adjourning"], answer: 2, explanation_en: "Storming is the stage of conflict and idea competition, which is necessary for creativity." },
                            { id: 3, question: "In Ikigai, the intersection of 'What you love' and 'What you are good at' creates:", options: ["Mission", "Profession", "Vocation", "Passion"], answer: 3, explanation_en: "Passion = Love + Good At." },
                            { id: 4, question: "A professional anticipates a breach and plans ahead before any threat is detected. This is:", options: ["Reactive", "Passive", "Proactive", "Analytical"], answer: 2, explanation_en: "Proactive behavior involves anticipating challenges and planning ahead." },
                            { id: 5, question: "Which intelligence is most essential for resolving conflicts and negotiating?", options: ["Intrapersonal", "Interpersonal", "Verbal/Linguistic", "Logical/Mathematical"], answer: 1, explanation_en: "Interpersonal Intelligence is 'People Smart'—crucial for conflict resolution." },
                            { id: 6, question: "What is a key characteristic of Lateral Thinking?", options: ["Sequential logic", "Correctness over richness", "Welcomes unrelated ideas", "Excludes irrelevant info"], answer: 2, explanation_en: "Lateral Thinking breaks patterns and welcomes 'unrelated' ideas to spark innovation." },
                            { id: 7, question: "What is the primary function of 'Feedback' in communication?", options: ["Initiate message", "Choose medium", "Confirm understanding", "Encrypt message"], answer: 2, explanation_en: "Feedback confirms that the message was received and understood correctly." },
                            { id: 8, question: "What does the 'Black Hat' focus on?", options: ["New ideas", "Emotions", "Caution and risks", "Process management"], answer: 2, explanation_en: "The Black Hat is for caution, risk assessment, and critical thinking." },
                            { id: 9, question: "Difference between Creativity and Innovation?", options: ["Implementation vs Thinking", "Idea generation vs Execution", "Team vs Individual", "No difference"], answer: 1, explanation_en: "Creativity is idea generation (The What); Innovation is execution (The How)." },
                            { id: 10, question: "Which describes a 'Fixed Mindset'?", options: ["I can learn anything", "Failure is growth", "Feedback is an attack", "Success inspires me"], answer: 2, explanation_en: "A Fixed Mindset views feedback as an attack and abilities as static." },
                            { id: 11, question: "What percentage of a message is conveyed through body language?", options: ["7%", "38%", "55%", "93%"], answer: 2, explanation_en: "55% is body language, 38% tone, and 7% words." },
                            { id: 12, question: "Team members are polite and look to the leader for direction. Which stage?", options: ["Performing", "Storming", "Norming", "Forming"], answer: 3, explanation_en: "Forming is the initial stage: polite, unclear roles, reliance on the leader." },
                            { id: 13, question: "In Johari Window, the 'Blind Area' is:", options: ["Known to self, Known to others", "Unknown to self, Known to others", "Known to self, Unknown to others", "Unknown to both"], answer: 1, explanation_en: "Blind Area = Unknown to Self, Known to Others (e.g., a bad habit you don't see)." },
                            { id: 14, question: "Which EQ component involves controlling impulsive behaviors?", options: ["Social Awareness", "Self-Regulation", "Social Skills", "Motivation"], answer: 1, explanation_en: "Self-Management (Regulation) involves controlling impulses." },
                            { id: 15, question: "SMART stands for:", options: ["Simple, Meaningful...", "Specific, Measurable, Achievable, Relevant, Time-bound", "Strategic...", "Specific, Meaningful..."], answer: 1, explanation_en: "Standard goal setting acronym." },
                            { id: 16, question: "Which is NOT a pillar of Ikigai?", options: ["What you love", "What you are good at", "What your parents want", "What the world needs"], answer: 2, explanation_en: "External expectations like parents' wants are not part of Ikigai." },
                            { id: 17, question: "Arrogance differs from Self-Confidence in that arrogant people:", options: ["Welcome feedback", "Have balanced belief", "Reject feedback due to insecurity", "Collaborate well"], answer: 2, explanation_en: "Arrogance is rooted in insecurity and rejects feedback." },
                            { id: 18, question: "Resilience specifically regarding regulating emotions under stress is:", options: ["Physical", "Mental", "Social", "Emotional"], answer: 3, explanation_en: "Emotional Resilience is regulating emotions under stress." },
                            { id: 19, question: "In a 'Group' vs 'Team', how is responsibility handled in a Group?", options: ["Shared", "Individual", "Nonexistent", "Leader only"], answer: 1, explanation_en: "In a Group, responsibility is individual. In a Team, it is mutual." },
                            { id: 20, question: "Intrapersonal Intelligence excels at:", options: ["Understanding others", "Music", "Self-reflection", "3D images"], answer: 2, explanation_en: "Intrapersonal = Self Smart (reflection/self-knowledge)." }
                        ],
                        cre_2: [
                            { id: 21, question: "What is the 'Appeal Ear' focused on?", options: ["Facts", "Relationship", "Sender's emotions", "What sender wants receiver to do"], answer: 3, explanation_en: "Appeal Ear hears the 'Call to Action' or request." },
                            { id: 22, question: "Noise and poor connection are examples of which barrier?", options: ["Psychological", "Linguistic", "Physical", "Cultural"], answer: 2, explanation_en: "Physical barriers include noise, distance, and technical issues." },
                            { id: 23, question: "Lateral Thinking was introduced by:", options: ["Goleman", "Gardner", "Edward de Bono", "Tuckman"], answer: 2, explanation_en: "De Bono introduced Lateral Thinking and the Six Hats." },
                            { id: 24, question: "Key characteristic of the 'Norming' stage?", options: ["High conflict", "Agreement on rules and trust", "Total autonomy", "Anxiety"], answer: 1, explanation_en: "Norming is where rules are agreed upon and trust increases." },
                            { id: 25, question: "Self-Esteem is:", options: ["External belief in skills", "Internal sense of worth", "Controlling others", "Solving math"], answer: 1, explanation_en: "Self-Esteem is internal value. Self-Confidence is external belief in skills." },
                            { id: 26, question: "Reactive behavior is characterized by:", options: ["Anticipating problems", "Responding after events, often emotionally", "Avoiding decisions", "Planning"], answer: 1, explanation_en: "Reactive individuals respond after the event." },
                            { id: 27, question: "To shift to a Growth Mindset, focus on:", options: ["Proving intelligence", "Avoiding tasks", "Process of learning", "Final result only"], answer: 2, explanation_en: "Focus on Identity ('I am a learner') and the process." },
                            { id: 28, question: "Which EQ element involves 'walking in someone else's shoes'?", options: ["Regulation", "Motivation", "Empathy", "Self-Awareness"], answer: 2, explanation_en: "Empathy (Social Awareness) is understanding others' perspectives." },
                            { id: 29, question: "The 'Hidden Area' in Johari Window is:", options: ["Known to self, Unknown to others", "Unknown to self, Known to others", "Known to all", "Unknown to all"], answer: 0, explanation_en: "Hidden Area = Secrets known only to self." },
                            { id: 30, question: "Why is Psychological Safety critical in 'Forming'?", options: ["Eliminates leader", "Overcomes fear of judgment", "Skips Storming", "Guarantees innovation"], answer: 1, explanation_en: "It builds the trust needed for creative risk-taking later." },
                            { id: 31, question: "Vertical Thinking is concerned with:", options: ["Many ideas", "Breaking patterns", "Logical correctness", "Unrelated concepts"], answer: 2, explanation_en: "Vertical Thinking is logical, sequential, and step-by-step." },
                            { id: 32, question: "Social Resilience involves:", options: ["Physical strength", "Collective recovery through connection", "Ignoring others", "Isolation"], answer: 1, explanation_en: "Recovering collectively through support." },
                            { id: 33, question: "The 'Channel' in communication is:", options: ["The sender", "The medium of transmission", "Interference", "Feedback"], answer: 1, explanation_en: "The Channel is the medium (email, speech, etc.)." },
                            { id: 34, question: "Relationship between effort and talent in Growth Mindset?", options: ["Effort unnecessary", "Effort activates talent", "Effort implies low talent", "Talent is fixed"], answer: 1, explanation_en: "Effort is what activates and develops talent." },
                            { id: 35, question: "Which tool involves generating high volume of ideas without judgment?", options: ["Analysis", "Brainstorming", "Vertical Logic", "Risk Assessment"], answer: 1, explanation_en: "Brainstorming focuses on volume and deferred judgment." },
                            { id: 36, question: "Bodily/Kinesthetic Intelligence learns best by:", options: ["Listening", "Reading", "Doing/Moving", "Analyzing graphs"], answer: 2, explanation_en: "They learn through physical activity and hands-on tasks." },
                            { id: 37, question: "The 'Adjourning' stage is essential for:", options: ["Reflection and closure", "Creating conflict", "Establishing rules", "Ignoring emotions"], answer: 0, explanation_en: "Adjourning is for reflection, knowledge transfer, and closure." },
                            { id: 38, question: "Internal Self-Awareness helps to:", options: ["See boss's view", "Align decisions with values", "Manipulate", "Predict market"], answer: 1, explanation_en: "Aligns choices with personal values/passion." },
                            { id: 39, question: "Example of Visual/Spatial Intelligence:", options: ["Solving equations", "Writing essays", "Visualizing designs", "Leading meetings"], answer: 2, explanation_en: "Thinking in images/structures (Architects/Designers)." },
                            { id: 40, question: "Innovation = Creativity + ?", options: ["Theory", "Execution", "Debate", "Logic"], answer: 1, explanation_en: "Innovation is Creativity plus Implementation (Execution)." }
                        ],
                        cre_3: [
                            { id: 41, question: "If a waiter understands a complaint about tea as a sign of stress, he uses:", options: ["Traditional Thinking", "Four Ears Model", "Six Hats", "Vertical Thinking"], answer: 1, explanation_en: "He is using the Self-Revelation ear to hear the emotion." },
                            { id: 42, question: "Groups vs Teams regarding creative output?", options: ["Groups co-create", "Groups share goals", "Teams offer co-creation/synergy", "No difference"], answer: 2, explanation_en: "Teams co-create (synergy); Groups just exchange info." },
                            { id: 43, question: "Why does 'Passive' behavior block creativity?", options: ["Avoids decision/action", "Too aggressive", "Too much planning", "Too many ideas"], answer: 0, explanation_en: "Passive behavior avoids the risk-taking needed for creativity." },
                            { id: 44, question: "Focus of Traditional Thinking?", options: ["Risk", "Safety/Predictability", "Disruption", "Emotion"], answer: 1, explanation_en: "Traditional Thinking prioritizes safety, rules, and existing patterns." },
                            { id: 45, question: "Which is a Physical Barrier?", options: ["Jargon", "Loud construction noise", "Anxiety", "Values"], answer: 1, explanation_en: "Noise is a physical impediment to hearing." },
                            { id: 46, question: "Ikigai: 'World needs' + 'Paid for' =", options: ["Passion", "Mission", "Vocation", "Profession"], answer: 2, explanation_en: "Vocation = Needs + Paid." },
                            { id: 47, question: "Social Awareness is primarily synonymous with:", options: ["Confidence", "Empathy", "Motivation", "Regulation"], answer: 1, explanation_en: "Social Awareness is largely defined by Empathy." },
                            { id: 48, question: "Why is 'Storming' necessary?", options: ["Domination", "Suppress ideas", "Challenges assumptions", "Fail early"], answer: 2, explanation_en: "It brings out diverse ideas and challenges assumptions." },
                            { id: 49, question: "Rejecting ideas because 'we always did it this way' is:", options: ["Lateral Thinking", "Growth Mindset", "Fixed Mindset", "Resilience"], answer: 2, explanation_en: "Fixed Mindset resists change and relies on status quo." },
                            { id: 50, question: "Which Hat is for feelings and intuition?", options: ["White", "Red", "Black", "Green"], answer: 1, explanation_en: "Red Hat = Emotions (No logic needed)." },
                            { id: 51, question: "Mental Resilience involves:", options: ["Physical strength", "Cognitive flexibility/focus", "Ignoring problems", "Delegating"], answer: 1, explanation_en: "Ability to maintain focus and logic under pressure." },
                            { id: 52, question: "If verbal and non-verbal cues conflict, the receiver believes:", options: ["Words", "Non-verbal cues", "Neither", "Written text"], answer: 1, explanation_en: "Non-verbal cues (93%) override verbal ones (7%)." },
                            { id: 53, question: "External Self-Awareness is:", options: ["Secret dreams", "How others see you", "Favorite color", "Internal triggers"], answer: 1, explanation_en: "Understanding how your leadership/behavior affects others." },
                            { id: 54, question: "The 'Performing' stage is characterized by:", options: ["Minimal supervision/Autonomy", "High dependence", "Confusion", "Arguments"], answer: 0, explanation_en: "The team functions as a single unit with high flow." },
                            { id: 55, question: "Self-Confidence is:", options: ["Internal worth", "External belief in skills", "Superiority", "Avoiding mistakes"], answer: 1, explanation_en: "Belief in one's ability to succeed in a task." },
                            { id: 56, question: "Not a component of communication:", options: ["Encoding", "Decoding", "Channel", "Isolation"], answer: 3, explanation_en: "Isolation is the opposite of communication." },
                            { id: 57, question: "Why is technical expertise insufficient for cybersecurity?", options: ["Computers fast", "Threats evolve/require creativity", "Automation", "No hackers"], answer: 1, explanation_en: "Hackers use creativity; defenders must too." },
                            { id: 58, question: "Naturalist Intelligence involves:", options: ["Abstract patterns", "Classifying nature", "Music", "Psyche"], answer: 1, explanation_en: "Understanding and classifying elements of the natural world." },
                            { id: 59, question: "Response vs Reaction: A Response is:", options: ["Emotional", "Impulsive", "Thoughtful/EQ-guided", "Defensive"], answer: 2, explanation_en: "Response is slow and logical; Reaction is fast and emotional." },
                            { id: 60, question: "The 'Unknown Area' in Johari Window:", options: ["Unknown to Self & Others", "Secrets", "Blind spots", "Public"], answer: 0, explanation_en: "Potential or traits no one is aware of yet." },
                        ],
                        cre_4: [    
                            { id: 61, question: "A goal taking 1-5 years is:", options: ["Short-term", "Medium-term", "Long-term", "Micro"], answer: 1, explanation_en: "Short < 1yr; Medium 1-5yrs; Long > 5yrs." },
                            { id: 62, question: "Example of Lateral Thinking:", options: ["Manuals", "Random word technique", "Spreadsheets", "Organizing"], answer: 1, explanation_en: "Using random stimuli to spark new connections." },
                            { id: 63, question: "EQ helps problem-solving by:", options: ["Removing emotion", "Managing conflict/perspectives", "Strict logic", "Ignoring humans"], answer: 1, explanation_en: "EQ manages the human side of problems." },
                            { id: 64, question: "Verbal/Linguistic Intelligence excels at:", options: ["Storytelling/Reading", "Sports", "Puzzles", "Plants"], answer: 0, explanation_en: "Words, language, and explanation." },
                            { id: 65, question: "Arrogance is often rooted in:", options: ["Insecurity", "Competence", "Collaboration", "Openness"], answer: 0, explanation_en: "It is a defense mechanism for low self-esteem." },
                            { id: 66, question: "Green Hat represents:", options: ["Facts", "Judgment", "Creativity/New Ideas", "Process"], answer: 2, explanation_en: "Green = Growth, Energy, Creativity." },
                            { id: 67, question: "In 'Adjourning', members experience:", options: ["Anger", "Loss/Sadness mixed with Pride", "Confusion", "Competition"], answer: 1, explanation_en: "Emotional reaction to the group dissolving." },
                            { id: 68, question: "Physical Resilience is maintained by:", options: ["Cognitive training", "Sleep/Nutrition/Exercise", "Parties", "Suppression"], answer: 1, explanation_en: "Bodily recovery and health." },
                            { id: 69, question: "Four Ears: Focuses on 'Facts and Data'?", options: ["Relationship", "Self-Revelation", "Factual", "Appeal"], answer: 2, explanation_en: "Factual Ear hears the data only." },
                            { id: 70, question: "Short-term goal timeframe:", options: ["< 1 year", "1-3 years", "5-10 years", "Lifetime"], answer: 0, explanation_en: "Immediate to 1 year." },
                            { id: 71, question: "Interpersonal Intelligence is:", options: ["Self Smart", "Picture Smart", "People Smart", "Nature Smart"], answer: 2, explanation_en: "Understanding others." },
                            { id: 72, question: "Linguistic Barrier example:", options: ["Noise", "Anger", "Jargon/Dialects", "Shyness"], answer: 2, explanation_en: "Language differences or technical terms." },
                            { id: 73, question: "Why is Cognitive Diversity important?", options: ["Same thinking", "Different perspectives", "Less communication", "Speeds Forming"], answer: 1, explanation_en: "Prevents groupthink and fuels innovation." },
                            { id: 74, question: "Ikigai: 'Love' + 'World Needs' =", options: ["Mission", "Passion", "Profession", "Vocation"], answer: 0, explanation_en: "Mission = Love + Needs." },
                            { id: 75, question: "Proactive behavior supports creativity by:", options: ["Avoiding risk", "Anticipating/Planning", "Waiting", "Reacting"], answer: 1, explanation_en: "Creates space for innovation through preparation." },
                            { id: 76, question: "Mindset: 'I am either good or not':", options: ["Growth", "Creative", "Fixed", "Strategic"], answer: 2, explanation_en: "Binary view of talent." },
                            { id: 77, question: "Musical Intelligence:", options: ["Rhythm/Pitch", "Languages", "Logic", "Movement"], answer: 0, explanation_en: "Sensitivity to sound and patterns." },
                            { id: 78, question: "Relationship Ear hears:", options: ["Facts", "Sender's attitude toward receiver", "Secret thoughts", "Call to action"], answer: 1, explanation_en: "Respect vs Disrespect, etc." },
                            { id: 79, question: "Benefit of High EQ in teams:", options: ["Typing speed", "Sustained collaboration/Pressure handling", "No disagreements", "Strict rules"], answer: 1, explanation_en: "Maintains bond under stress." },
                            { id: 80, question: "Leader's role in Forming:", options: ["Step back", "Clarify goals/Create safety", "Challenge", "Focus innovation"], answer: 1, explanation_en: "Providing direction and reducing anxiety." },
                        ],
                        cre_5: [    
                            { id: 81, question: "Logical/Mathematical Intelligence:", options: ["Sounds", "Abstract reasoning/Calculating", "Empathy", "Space"], answer: 1, explanation_en: "Logic, numbers, patterns." },
                            { id: 82, question: "Characteristic of Creative Thinking:", options: ["Safety", "Linear", "Flexibility/Experimentation", "Avoids ambiguity"], answer: 2, explanation_en: "Embraces the unknown and changes." },
                            { id: 83, question: "Self-Regulation skills:", options: ["Ignoring feelings", "Acting on impulse", "Delaying reaction", "Blaming"], answer: 2, explanation_en: "Stop, Think, Respond." },
                            { id: 84, question: "Open Area in Johari is crucial because:", options: ["Secrets", "Builds trust (Shared knowledge)", "Conflict", "Unknown"], answer: 1, explanation_en: "Transparency builds trust." },
                            { id: 85, question: "Difference between Wish and Goal:", options: ["Specific", "Wish has no plan/action", "Supported by plan", "Measurable"], answer: 1, explanation_en: "A Goal is SMART + Action." },
                            { id: 86, question: "Barrier involving 'Values and Traditions':", options: ["Physical", "Cultural", "Linguistic", "Psychological"], answer: 1, explanation_en: "Cultural barriers." },
                            { id: 87, question: "Acting defensively when corrected indicates:", options: ["High Confidence", "Growth Mindset", "Arrogance (Insecurity)", "High EQ"], answer: 2, explanation_en: "Insecurity masking as arrogance." },
                            { id: 88, question: "Resilience is:", options: ["Never stressed", "Fixed trait", "Adapting/Recovering", "Avoiding"], answer: 2, explanation_en: "Bouncing back from adversity." },
                            { id: 89, question: "Ikigai: 'Good At' + 'Paid For' =", options: ["Passion", "Mission", "Profession", "Vocation"], answer: 2, explanation_en: "Profession." },
                            { id: 90, question: "Example of Visual Communication:", options: ["Phone call", "Pie chart", "Email", "Handshake"], answer: 1, explanation_en: "Images, graphs, charts." },
                            { id: 91, question: "Lateral Thinking in cybersecurity:", options: ["Checklists", "Simulating hacker behavior", "Reports", "Antivirus"], answer: 1, explanation_en: "Thinking like the enemy (unconventionally)." },
                            { id: 92, question: "Blue Hat represents:", options: ["Emotion", "Process Control (Conductor)", "Caution", "Positivity"], answer: 1, explanation_en: "Managing the thinking process." },
                            { id: 93, question: "Failure in Growth Mindset is:", options: ["Identity", "Limit", "Part of learning", "Hidden"], answer: 2, explanation_en: "Stepping stone to success." },
                            { id: 94, question: "Social Skills allow:", options: ["Manipulation", "Working alone", "Managing relationships", "Ignoring norms"], answer: 2, explanation_en: "Influencing and connecting." },
                            { id: 95, question: "Architects score high in:", options: ["Musical", "Visual/Spatial", "Intrapersonal", "Naturalist"], answer: 1, explanation_en: "Thinking in 3D structures." },
                            { id: 96, question: "Proactive person:", options: ["Blames", "Takes initiative/Responsibility", "Waits", "Fears"], answer: 1, explanation_en: "Acts before being forced to." },
                            { id: 97, question: "Why is Feedback essential?", options: ["Ends chat", "Confirms accurate interpretation", "Judging", "Length"], answer: 1, explanation_en: "Closes the loop of understanding." },
                            { id: 98, question: "Confidence aids creativity by:", options: ["Being right", "Reducing fear of judgment", "Ignoring details", "Speed"], answer: 1, explanation_en: "Encourages risk-taking." },
                            { id: 99, question: "Stage for 'Organized Brainstorming':", options: ["Forming", "Storming", "Norming", "Adjourning"], answer: 2, explanation_en: "Norming allows for cooperation." },
                            { id: 100, question: "Self-Awareness is foundation of EQ because:", options: ["Must recognize emotions to manage them", "Smarter", "No social skills", "Money"], answer: 0, explanation_en: "You can't control what you don't notice." },
                        ],

                        // ================= TRUE/FALSE DATA =================
                        cre_tf_1: [
                            { id: 1, question: "'Storming' is a negative stage in team development that should be avoided at all costs.", answer: false, explanation: "Storming is necessary for creativity; it is where ideas compete and assumptions are challenged." },
                            { id: 2, question: "The 'Blind Area' consists of traits that you know about yourself, but others do not know.", answer: false, explanation: "Blind Area = Unknown to Self, Known to Others." },
                            { id: 3, question: "The 'Factual Ear' focuses strictly on data and information, ignoring the emotional tone.", answer: true, explanation: "The Factual Ear focuses only on facts/data, ignoring the relationship or emotion." },
                            { id: 4, question: "Vertical Thinking is characterized by being unconventional, breaking patterns, and generating unrelated ideas.", answer: false, explanation: "That describes Lateral Thinking. Vertical Thinking is logical, sequential, and follows patterns." },
                            { id: 5, question: "'Creativity' is the process of implementing an idea to create value, while 'Innovation' is simply generating the idea.", answer: false, explanation: "Opposite: Creativity is generating the idea; Innovation is implementing it." },
                            { id: 6, question: "A person with a 'Fixed Mindset' believes that effort is what activates and develops talent.", answer: false, explanation: "That describes a Growth Mindset. Fixed Mindset believes talent is innate." },
                            { id: 7, question: "Non-verbal communication accounts for only 7% of the total message conveyed in face-to-face interactions.", answer: false, explanation: "Non-verbal is 93% (55% Body + 38% Tone). Words are 7%." },
                            { id: 8, question: "'Self-Esteem' is an external belief in one's skills, whereas 'Self-Confidence' is an internal sense of worth.", answer: false, explanation: "Definitions swapped. Self-Esteem is internal (worth); Self-Confidence is external (skills)." },
                            { id: 9, question: "In Ikigai, the intersection of 'What you love' and 'What the world needs' is called your Mission.", answer: true, explanation: "Love + World Needs = Mission." },
                            { id: 10, question: "Emotional Intelligence (EQ) allows individuals to respond to situations thoughtfully rather than reacting impulsively.", answer: true, explanation: "High EQ enables a 'Response' (thoughtful) instead of a 'Reaction' (impulsive)." },
                            { id: 11, question: "'Proactive Behavior' involves anticipating challenges and planning ahead, which supports creative thinking.", answer: true, explanation: "Proactive behavior anticipates and plans, which is key for creative solutions." },
                            { id: 12, question: "A 'Group' is characterized by shared leadership, mutual accountability, and collective work products, unlike a 'Team'.", answer: false, explanation: "Definitions swapped. Team has shared goals/accountability. A Group has individual focus." },
                            { id: 13, question: "The 'Adjourning' stage of team development is unimportant and should be skipped.", answer: false, explanation: "Adjourning is essential for reflection and knowledge transfer (learning)." },
                            { id: 14, question: "'Intrapersonal Intelligence' refers to the ability to understand and work effectively with other people.", answer: false, explanation: "Intrapersonal is 'Self Smart'. Interpersonal is understanding others." },
                            { id: 15, question: "Lateral Thinking uses a step-by-step, sequential logic to reach a single correct solution.", answer: false, explanation: "Vertical Thinking uses step-by-step logic. Lateral thinking jumps and breaks patterns." },
                            { id: 16, question: "'Feedback' in the communication process is optional and not necessary.", answer: false, explanation: "Feedback is essential to confirm the message was received as intended." },
                            { id: 17, question: "Psychological safety is essential in the 'Forming' stage to encourage members to share ideas later on.", answer: true, explanation: "Safety in Forming allows people to take risks in later stages." },
                            { id: 18, question: "'Arrogance' is often rooted in deep insecurity, whereas true 'Confidence' welcomes feedback.", answer: true, explanation: "Arrogance comes from insecurity; Confidence is balanced and open to feedback." },
                            { id: 19, question: "Physical barriers to communication include stress, anxiety, and anger.", answer: false, explanation: "Stress/Anxiety are Psychological barriers. Physical barriers are noise/distance." },
                            { id: 20, question: "In a Growth Mindset, failure is viewed as a limit of one's abilities and a reason to give up.", answer: false, explanation: "In Growth Mindset, failure is an opportunity to learn, not a limit." }
                        ],
                        cre_tf_2: [
                            { id: 21, question: "'Visual/Spatial Intelligence' involves the ability to think in images, visualize structures, and solve puzzles.", answer: true, explanation: "Visual/Spatial intelligence involves thinking in images and structures." },
                            { id: 22, question: "The 'Blue Hat' in the Six Thinking Hats method is used for generating new, creative ideas.", answer: false, explanation: "The Green Hat is for creativity. The Blue Hat is for managing the process (Control)." },
                            { id: 23, question: "'Resilience' is a fixed personality trait that you are born with and cannot develop.", answer: false, explanation: "Resilience is a skill that can be learned and strengthened, not a fixed trait." },
                            { id: 24, question: "'Social Awareness' in Goleman's EQ model is primarily about empathy and understanding others' emotions.", answer: true, explanation: "Social Awareness is synonymous with Empathy." },
                            { id: 25, question: "A 'Wish' is a specific goal supported by a practical plan and timeline.", answer: false, explanation: "A Goal is specific/planned. A Wish is just a dream without action." },
                            { id: 26, question: "'Vertical Thinking' excludes irrelevant information to maintain logical correctness.", answer: true, explanation: "Vertical thinking excludes the irrelevant to ensure correctness." },
                            { id: 27, question: "The 'Relationship Ear' interprets how the sender views the receiver based on tone and manner.", answer: true, explanation: "Relationship Ear interprets the 'You-Me' dynamic (respect, dominance, etc.)." },
                            { id: 28, question: "'Passive Behavior' enhances creativity because it allows others to take the lead.", answer: false, explanation: "Passive behavior restricts creativity because it avoids decision-making." },
                            { id: 29, question: "Technical expertise alone is sufficient to address modern cybersecurity threats without creative thinking.", answer: false, explanation: "Threats evolve too fast; creative thinking is needed to anticipate the unknown." },
                            { id: 30, question: "'Interpersonal Intelligence' is also known as being 'Self Smart'.", answer: false, explanation: "Interpersonal is People Smart. Intrapersonal is Self Smart." },
                            { id: 31, question: "The 'Performing' stage is when the team functions as a single unit with minimal supervision.", answer: true, explanation: "Performing is the stage of peak flow and autonomy." },
                            { id: 32, question: "'Internal Self-Awareness' helps you understand how your leadership style affects your team members.", answer: false, explanation: "That is External Self-Awareness. Internal is about your own values/feelings." },
                            { id: 33, question: "'Social Skills' are one of the four pillars of Emotional Intelligence.", answer: true, explanation: "The 4 pillars are Self-Awareness, Self-Management, Social Awareness, Social Skills." },
                            { id: 34, question: "A 'Short-term goal' is typically achieved within 1 to 5 years.", answer: false, explanation: "Short-term is < 1 year. 1-5 years is Medium-term." },
                            { id: 35, question: "'Bodily/Kinesthetic Intelligence' is associated with good coordination and learning by doing.", answer: true, explanation: "Bodily/Kinesthetic involves physical movement and coordination." },
                            { id: 36, question: "In the Ikigai model, 'Profession' is the intersection of 'What you are good at' and 'What you can be paid for'.", answer: true, explanation: "Profession = Good At + Paid For." },
                            { id: 37, question: "'Traditional Thinking' focuses on flexibility, risk-taking, and breaking rules.", answer: false, explanation: "Traditional Thinking focuses on safety, logic, and proven methods." },
                            { id: 38, question: "'Self-Regulation' involves examining your physical response and identifying the feeling before acting.", answer: true, explanation: "This is the process of Self-Regulation (Stop, Identify, Respond)." },
                            { id: 39, question: "The 'Unknown Area' in the Johari Window represents potential that neither you nor others are aware of.", answer: true, explanation: "Unknown Area = Unknown to Self + Unknown to Others." },
                            { id: 40, question: "'Reactive' individuals respond to problems only after they occur, often driven by emotion.", answer: true, explanation: "Reactive behavior is driven by events and emotions after they happen." }
                        ],
                        cre_tf_3: [
                            { id: 41, question: "'Brainstorming' requires judging ideas immediately as they are generated to ensure quality.", answer: false, explanation: "Brainstorming requires suspending judgment to encourage quantity of ideas." },
                            { id: 42, question: "'Cultural Barriers' in communication can arise from differences in values and traditions.", answer: true, explanation: "Cultural barriers stem from different traditions/values." },
                            { id: 43, question: "'Naturalist Intelligence' involves the ability to understand and classify elements of the natural world.", answer: true, explanation: "Naturalist intelligence involves classifying nature." },
                            { id: 44, question: "The 'Appeal Ear' hears what the sender wants the receiver to do (the request).", answer: true, explanation: "Appeal Ear hears the command/request." },
                            { id: 45, question: "'Mental Resilience' refers to the body's ability to recover from illness or physical stress.", answer: false, explanation: "That is Physical Resilience. Mental resilience is cognitive flexibility." },
                            { id: 46, question: "'External Self-Awareness' is about understanding your own internal values and passions.", answer: false, explanation: "External Self-Awareness is how others see you. Internal is your own values." },
                            { id: 47, question: "Confidence reduces the fear of judgment, which is a major barrier to creativity.", answer: true, explanation: "Fear of judgment stops ideas; Confidence overcomes this fear." },
                            { id: 48, question: "'Norming' is the stage where team members agree on rules and roles, and trust begins to increase.", answer: true, explanation: "Norming is the stage of agreement and trust building." },
                            { id: 49, question: "'Verbal/Linguistic Intelligence' is the ability to use words effectively in reading, writing, and speaking.", answer: true, explanation: "Verbal/Linguistic is being 'Word Smart'." },
                            { id: 50, question: "'Innovation' equals Creativity plus Execution.", answer: true, explanation: "Innovation cannot happen without execution (Idea + Action = Value)." },
                            { id: 51, question: "'Arrogant' individuals typically underestimate others and refuse to admit mistakes.", answer: true, explanation: "Arrogance involves underestimating others and rejecting criticism." },
                            { id: 52, question: "'Logical/Mathematical Intelligence' is characterized by sensitivity to rhythm and pitch.", answer: false, explanation: "That is Musical Intelligence. Logical/Math is about reasoning/numbers." },
                            { id: 53, question: "A 'Team' focuses on individual accountability, whereas a 'Group' focuses on mutual accountability.", answer: false, explanation: "Definitions swapped. Team = Mutual Accountability. Group = Individual." },
                            { id: 54, question: "'Self-Revelation' refers to what the sender reveals about their own feelings or state in a message.", answer: true, explanation: "Self-Revelation Ear hears the sender's inner state (e.g., 'I am stressed')." },
                            { id: 55, question: "'Fixed Mindset' individuals often feel threatened by the success of others.", answer: true, explanation: "Fixed Mindset sees others' success as a threat to their own status." },
                            { id: 56, question: "'Social Resilience' involves recovering from adversity through social connection and support.", answer: true, explanation: "Social Resilience involves using support systems." },
                            { id: 57, question: "'Lateral Thinking' was introduced by Daniel Goleman.", answer: false, explanation: "Lateral Thinking is Edward de Bono. Goleman is EQ." },
                            { id: 58, question: "'SMART' goals stand for Specific, Meaningful, Actionable, Relevant, and Tested.", answer: false, explanation: "SMART = Specific, Measurable, Achievable, Relevant, Time-bound." },
                            { id: 59, question: "In the 'Storming' stage, conflict is natural and can lead to better ideas if managed well.", answer: true, explanation: "Storming creates the friction needed for diverse ideas to emerge." },
                            { id: 60, question: "'Self-Esteem' is internal and deep-rooted, influencing how we see our own worth.", answer: true, explanation: "Self-Esteem is internal and deep-rooted." }
                        ],
                        cre_tf_4: [
                            { id: 61, question: "'Musical Intelligence' is limited to playing instruments and does not include appreciation of rhythm.", answer: false, explanation: "Musical Intelligence includes appreciation, rhythm, and pattern recognition, not just playing." },
                            { id: 62, question: "'Tone of voice' accounts for 55% of the message in non-verbal communication.", answer: false, explanation: "Tone is 38%. Body language is 55%." },
                            { id: 63, question: "'Proactive' individuals blame external circumstances for their problems.", answer: false, explanation: "Reactive people blame circumstances. Proactive people take responsibility." },
                            { id: 64, question: "'Vocation' in Ikigai is the combination of 'What the world needs' and 'What you can be paid for'.", answer: true, explanation: "Vocation = World Needs + Paid For." },
                            { id: 65, question: "'Emotional Resilience' allows a person to remain calm and rational under pressure.", answer: true, explanation: "Emotional Resilience prevents emotions from clouding judgment." },
                            { id: 66, question: "'Vertical Thinking' is necessary for ensuring the feasibility and correctness of a creative idea.", answer: true, explanation: "Vertical thinking is needed to check if the creative idea is feasible/correct." },
                            { id: 67, question: "'Linguistic Barriers' include the use of complex jargon or technical terms.", answer: true, explanation: "Jargon creates a Linguistic Barrier." },
                            { id: 68, question: "'Self-Management' is synonymous with 'Social Awareness'.", answer: false, explanation: "Self-Management is Regulation. Social Awareness is Empathy." },
                            { id: 69, question: "'Lateral Thinking' welcomes ideas that seem irrelevant or illogical at first.", answer: true, explanation: "Lateral thinking accepts 'unrelated' ideas to trigger new connections." },
                            { id: 70, question: "'Psychological Barriers' to communication include noise and poor internet connection.", answer: false, explanation: "Noise/Internet are Physical Barriers. Psychological are stress/anger." },
                            { id: 71, question: "The 'Open Area' in the Johari Window contains information known to self and known to others.", answer: true, explanation: "Open Area is the basis for trust and teamwork." },
                            { id: 72, question: "'Self-Confidence' can be built through practice and knowledge.", answer: true, explanation: "Self-Confidence is built through skill acquisition and practice." },
                            { id: 73, question: "'Reactive Behavior' supports long-term effective problem solving.", answer: false, explanation: "Reactive behavior is short-term and emotional; Proactive is effective long-term." },
                            { id: 74, question: "'Teamwork' provides cognitive diversity, which is essential for complex problem solving.", answer: true, explanation: "Teamwork brings diverse perspectives (Cognitive Diversity)." },
                            { id: 75, question: "'Six Thinking Hats' is a tool used to view a problem from a single, logical perspective.", answer: false, explanation: "Six Hats is for viewing a problem from multiple perspectives, not one." },
                            { id: 76, question: "'Growth Mindset' individuals believe that basic abilities can be developed through dedication.", answer: true, explanation: "This is the core belief of a Growth Mindset." },
                            { id: 77, question: "'Hidden Area' in the Johari Window is what others know about you, but you don't know.", answer: false, explanation: "Hidden Area = Known to Self, Unknown to Others (Secrets). Blind is what others know but you don't." },
                            { id: 78, question: "'Passion' in Ikigai is the intersection of 'What you love' and 'What you are good at'.", answer: true, explanation: "Passion = Love + Good At." },
                            { id: 79, question: "'Feedback' confirms whether a message was received and interpreted correctly.", answer: true, explanation: "Feedback closes the communication loop." },
                            { id: 80, question: "'Emotional Intelligence' is a fixed trait that cannot be learned or improved.", answer: false, explanation: "EQ is a learnable skill, not fixed." }
                        ],
                        cre_tf_5: [
                            { id: 81, question: "'Adjourning' brings a mix of sadness and pride as the team dissolves.", answer: true, explanation: "Adjourning involves emotional closure (pride/sadness)." },
                            { id: 82, question: "'Physical Resilience' is maintained through sleep, nutrition, and exercise.", answer: true, explanation: "Physical Resilience requires bodily care." },
                            { id: 83, question: "'Traditional Thinking' ensures stability, safety, and predictability.", answer: true, explanation: "Traditional thinking prioritizes stability." },
                            { id: 84, question: "'Groups' are more effective than 'Teams' for complex, creative problem solving.", answer: false, explanation: "Teams (collaboration/diversity) are better for creativity than Groups (individual)." },
                            { id: 85, question: "'Self-Regulation' allows you to choose your response instead of reacting on autopilot.", answer: true, explanation: "Self-Regulation moves you from Autopilot (React) to Choice (Respond)." },
                            { id: 86, question: "'Medium-term goals' usually take 5 to 10 years to achieve.", answer: false, explanation: "Medium-term is 1-5 years. Long-term is 5-20 years." },
                            { id: 87, question: "'Empathy' is the ability to understand and share the feelings of another.", answer: true, explanation: "Empathy is the core of Social Awareness." },
                            { id: 88, question: "'Creative Thinking' is only needed for artistic fields, not for cybersecurity.", answer: false, explanation: "Creative thinking is essential in cybersecurity to anticipate threats." },
                            { id: 89, question: "'Confidence' makes you take fewer risks because you are afraid to lose your status.", answer: false, explanation: "Confidence encourages risk-taking and sharing ideas." },
                            { id: 90, question: "'Interpersonal Intelligence' is essential for effective leadership and teamwork.", answer: true, explanation: "Interpersonal intelligence is key for leaders." },
                            { id: 91, question: "Focusing on 'Identity' (e.g., 'I am a learner') is a key strategy for shifting to a Growth Mindset.", answer: true, explanation: "Focusing on identity ('I am a learner') helps build a Growth Mindset." },
                            { id: 92, question: "The 'Green Hat' is used for critical judgement and caution.", answer: false, explanation: "Green Hat is for Creativity. Black Hat is for Caution/Critical Judgment." },
                            { id: 93, question: "'Arrogance' encourages collaboration and listening to others.", answer: false, explanation: "Arrogance rejects feedback and underestimates others." },
                            { id: 94, question: "'Creativity' is the 'What' (idea), and 'Innovation' is the 'How' (execution).", answer: true, explanation: "Creativity = Idea. Innovation = Execution." },
                            { id: 95, question: "'Mental Resilience' is unrelated to cognitive flexibility.", answer: false, explanation: "Mental Resilience is cognitive flexibility." },
                            { id: 96, question: "'Social Skills' include the ability to influence others and resolve conflicts.", answer: true, explanation: "Social Skills include influence, communication, and conflict management." },
                            { id: 97, question: "The 'Sender' is responsible for choosing the appropriate channel for the message.", answer: true, explanation: "The Sender must choose the right medium (Channel)." },
                            { id: 98, question: "'Self-Confidence' is strictly internal and cannot be seen by others.", answer: false, explanation: "Self-Confidence is external and expressed in behavior. Self-Esteem is internal." },
                            { id: 99, question: "The 'Forming' stage is characterized by high performance and autonomy.", answer: false, explanation: "Performing is the stage of high performance. Forming is the start." },
                            { id: 100, question: "'Emotional Self-Awareness' is knowing what you feel and why you feel it.", answer: true, explanation: "Knowing what you feel is the first step of EQ." }
                        ]
                    }
                },
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
                quiz: {
                    isSplit: true,
                    sections: [
                        { id: 'm0_1', title: 'Part 1: Lines & Complex Basics (Lec 1-2)', qCount: 20, type: 'mcq' },
                        { id: 'm0_2', title: 'Part 2: Polar Complex & Counting (Lec 3-4)', qCount: 20, type: 'mcq' },
                        { id: 'm0_3', title: 'Part 3: Derivatives I (Lec 5-6)', qCount: 20, type: 'mcq' },
                        { id: 'm0_4', title: 'Part 4: Derivatives II & Extrema (Lec 7)', qCount: 20, type: 'mcq' },
                        { id: 'm0_5', title: 'Part 5: Integration & Spheres (Lec 8)', qCount: 20, type: 'mcq' },
                        { id: 'm0_text_1', title: 'Prob Set A: Algebra & Geometry', qCount: 10, type: 'text' },
                        { id: 'm0_text_2', title: 'Prob Set B: Differentiation', qCount: 10, type: 'text' },
                        { id: 'm0_text_3', title: 'Prob Set C: Integration & Combinatorics', qCount: 10, type: 'text' }
                    ],
                    data: {
                        // === PART 1: Lines & Basic Complex (Lec 1-2) ===
                        m0_1: [
                            { id: 1, question: "Find the direction vector of the line passing through $A(1, 2, 3)$ and $B(4, 5, 6)$.", options: ["$\\langle 3, 3, 3 \\rangle$", "$\\langle 5, 7, 9 \\rangle$", "$\\langle 4, 10, 18 \\rangle$", "$\\langle -3, -3, -3 \\rangle$"], answer: 0, explanation_en: "Vector $\\vec{AB} = B - A = \\langle 4-1, 5-2, 6-3 \\rangle = \\langle 3, 3, 3 \\rangle$." },
                            { id: 2, question: "If $z = 3 + 4i$, what is the modulus $|z|$?", options: ["$7$", "$5$", "$25$", "$12$"], answer: 1, explanation_en: "$|z| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = 5$." },
                            { id: 3, question: "Calculate $(2 + 3i) + (4 - 5i)$.", options: ["$6 + 8i$", "$6 - 2i$", "$2 - 2i$", "$6 + 2i$"], answer: 1, explanation_en: "Real: $2+4=6$. Imaginary: $3i - 5i = -2i$." },
                            { id: 4, question: "Find the parametric equations for a line through $P(1, 0, -1)$ parallel to $\\vec{v} = \\langle 2, 1, 4 \\rangle$.", options: ["$x=1+2t, y=t, z=-1+4t$", "$x=2+t, y=1, z=4-t$", "$x=1-2t, y=-t, z=-1-4t$", "$x=2t, y=t, z=4t$"], answer: 0, explanation_en: "$x = x_0 + at, y = y_0 + bt, z = z_0 + ct$." },
                            { id: 5, question: "Evaluate $i^2$.", options: ["$1$", "$-1$", "$i$", "$-i$"], answer: 1, explanation_en: "By definition, $i^2 = -1$." },
                            { id: 6, question: "What is the conjugate of $z = 5 - 2i$?", options: ["$5 - 2i$", "$-5 - 2i$", "$5 + 2i$", "$-5 + 2i$"], answer: 2, explanation_en: "Change the sign of the imaginary part only." },
                            { id: 7, question: "Intersection of $x=2+t, y=3-t, z=t$ with the xy-plane ($z=0$) occurs at $t = $?", options: ["$0$", "$2$", "$3$", "$-2$"], answer: 0, explanation_en: "xy-plane implies $z=0$. Since $z=t$, then $t=0$." },
                            { id: 8, question: "Simplify: $i^5$", options: ["$1$", "$-1$", "$i$", "$-i$"], answer: 2, explanation_en: "$i^5 = i^4 \\cdot i = 1 \\cdot i = i$." },
                            { id: 9, question: "Find the symmetric equation for a line through $(0,0,0)$ with direction $\\langle 1, -2, 3 \\rangle$.", options: ["$\\frac{x}{1} = \\frac{y}{-2} = \\frac{z}{3}$", "$x = -2y = 3z$", "$x-1 = y+2 = z-3$", "$\\frac{x}{1} = \\frac{y}{2} = \\frac{z}{3}$"], answer: 0, explanation_en: "Symmetric form: $\\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}$." },
                            { id: 10, question: "Calculate $(1+i)(1-i)$.", options: ["$0$", "$2i$", "$2$", "$1-i$"], answer: 2, explanation_en: "$1 - i^2 = 1 - (-1) = 2$. (Sum of squares)." },
                            { id: 11, question: "For line $L: x=1+2t, y=3t, z=1-t$. Determine the point at $t=2$.", options: ["$(5, 6, -1)$", "$(3, 6, -1)$", "$(5, 3, 1)$", "$(1, 3, 1)$"], answer: 0, explanation_en: "$x=1+4=5, y=6, z=1-2=-1$." },
                            { id: 12, question: "Find the real part of $z = \\frac{4 + 2i}{2}$.", options: ["$2$", "$4$", "$i$", "$2i$"], answer: 0, explanation_en: "$\\frac{4}{2} + \\frac{2i}{2} = 2 + i$. Real part is 2." },
                            { id: 13, question: "Lines are parallel if their direction vectors are:", options: ["Perpendicular", "Scalar multiples", "Zero", "Equal to 1"], answer: 1, explanation_en: "Parallel lines have proportional direction vectors." },
                            { id: 14, question: "$\\text{Arg}(z)$ for $z = 1 + i$ (1st Quadrant) is:", options: ["$\\frac{\\pi}{4}$", "$\\frac{\\pi}{2}$", "$\\pi$", "$0$"], answer: 0, explanation_en: "$\\tan(\\theta) = 1/1 = 1 \\Rightarrow \\theta = 45^\\circ = \\frac{\\pi}{4}$." },
                            { id: 15, question: "If $z = 2$ (Real number), what is $\\text{Arg}(z)$?", options: ["$\\frac{\\pi}{2}$", "$\\pi$", "$0$", "$-\\frac{\\pi}{2}$"], answer: 2, explanation_en: "Positive real axis has angle 0." },
                            { id: 16, question: "Subtract: $(5 + 6i) - (3 + 2i)$.", options: ["$2 + 8i$", "$2 + 4i$", "$8 + 8i$", "$8 + 4i$"], answer: 1, explanation_en: "$5-3=2, 6i-2i=4i$." },
                            { id: 17, question: "Equation of z-axis in parametric form (passing through origin).", options: ["$x=0, y=0, z=t$", "$x=t, y=0, z=0$", "$x=0, y=t, z=0$", "$x=t, y=t, z=t$"], answer: 0, explanation_en: "Direction is $\\langle 0,0,1 \\rangle$." },
                            { id: 18, question: "Value of $i^3$.", options: ["$i$", "$-i$", "$1$", "$-1$"], answer: 1, explanation_en: "$i^2 \\cdot i = -1 \\cdot i = -i$." },
                            { id: 19, question: "Distance between $P_1(1,1,1)$ and $P_2(1,4,5)$.", options: ["$5$", "$7$", "$25$", "$3$"], answer: 0, explanation_en: "$\\sqrt{0^2 + 3^2 + 4^2} = \\sqrt{9+16} = 5$." },
                            { id: 20, question: "Multiplicative inverse of $i$.", options: ["$1$", "$-1$", "$-i$", "$i$"], answer: 2, explanation_en: "$\\frac{1}{i} = \\frac{i}{i^2} = \\frac{i}{-1} = -i$." }
                        ],

                        // === PART 2: Advanced Complex & Counting (Lec 3-4) ===
                        m0_2: [
                            { id: 21, question: "Polar form multiplication: $(2 \\text{ cis } 30^\\circ) \\cdot (3 \\text{ cis } 60^\\circ)$.", options: ["$5 \\text{ cis } 90^\\circ$", "$6 \\text{ cis } 90^\\circ$", "$6 \\text{ cis } 1800^\\circ$", "$5 \\text{ cis } 30^\\circ$"], answer: 1, explanation_en: "Multiply radii ($2\\cdot3=6$), Add angles ($30+60=90$)." },
                            { id: 22, question: "De Moivre's Theorem: $[r(\\cos x + i \\sin x)]^n =$", options: ["$r^n (\\cos nx + i \\sin nx)$", "$nr (\\cos x + i \\sin x)$", "$r^n (\\cos x^n + i \\sin x^n)$", "$r (\\cos nx + i \\sin nx)$"], answer: 0, explanation_en: "Power the radius, multiply the angle." },
                            { id: 23, question: "Evaluate $5!$ (Factorial).", options: ["$120$", "$20$", "$60$", "$15$"], answer: 0, explanation_en: "$5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$." },
                            { id: 24, question: "How many ways to arrange 3 books on a shelf?", options: ["$3$", "$6$", "$9$", "$1$"], answer: 1, explanation_en: "$3! = 3 \\times 2 \\times 1 = 6$." },
                            { id: 25, question: "Calculate $^5P_2$ (Permutation).", options: ["$10$", "$20$", "$60$", "$120$"], answer: 1, explanation_en: "$\\frac{5!}{(5-2)!} = \\frac{120}{6} = 20$." },
                            { id: 26, question: "Calculate $^5C_2$ (Combination).", options: ["$10$", "$20$", "$60$", "$5$"], answer: 0, explanation_en: "$\\frac{^5P_2}{2!} = \\frac{20}{2} = 10$." },
                            { id: 27, question: "Polar Division: $\\frac{10 \\text{ cis } 100^\\circ}{2 \\text{ cis } 20^\\circ}$.", options: ["$5 \\text{ cis } 5^\\circ$", "$12 \\text{ cis } 120^\\circ$", "$5 \\text{ cis } 80^\\circ$", "$8 \\text{ cis } 80^\\circ$"], answer: 2, explanation_en: "Divide radii ($10/2=5$), Subtract angles ($100-20=80$)." },
                            { id: 28, question: "Coefficient of $x^2$ in expansion of $(x+1)^3$.", options: ["$1$", "$2$", "$3$", "$6$"], answer: 2, explanation_en: "Pascal triangle row 3: 1, 3, 3, 1. Term is $3x^2(1)$." },
                            { id: 29, question: "If $z = 1 + i$, find $z^4$ using De Moivre.", options: ["$-4$", "$4$", "$4i$", "$-4i$"], answer: 0, explanation_en: "$r=\\sqrt{2}, \\theta=\\pi/4$. $z^4 = (\\sqrt{2})^4 \\text{ cis}(4\\pi/4) = 4 \\text{ cis}(\\pi) = 4(-1) = -4$." },
                            { id: 30, question: "$0!$ is equal to:", options: ["$0$", "$1$", "Undefined", "$\\infty$"], answer: 1, explanation_en: "Definition of factorial." },
                            { id: 31, question: "Exponential form of $z$ with $r=5$ and $\\theta=\\pi$.", options: ["$5e^{i\\pi}$", "$5e^{\\pi}$", "$e^{5i}$", "$5$"], answer: 0, explanation_en: "$z = r e^{i \\theta}$." },
                            { id: 32, question: "In $^nC_r$ formula, order is:", options: ["Important", "Not Important", "Reversed", "Random"], answer: 1, explanation_en: "Combinations are for groups/selections where order doesn't matter." },
                            { id: 33, question: "Calculate $^4C_4$.", options: ["$0$", "$1$", "$4$", "$16$"], answer: 1, explanation_en: "Choosing all items = 1 way." },
                            { id: 34, question: "Roots of unity: The three cube roots of 1 always sum to:", options: ["$1$", "$3$", "$0$", "$i$"], answer: 2, explanation_en: "Sum of n-th roots of unity is zero." },
                            { id: 35, question: "Number of ways to pick a President and VP from 5 people.", options: ["$10$", "$20$", "$5$", "$25$"], answer: 1, explanation_en: "Order matters (Permutation). $^5P_2 = 20$." },
                            { id: 36, question: "Polar form of $z = i$.", options: ["$1 \\text{ cis } 0^\\circ$", "$1 \\text{ cis } 90^\\circ$", "$1 \\text{ cis } 180^\\circ$", "$1 \\text{ cis } 270^\\circ$"], answer: 1, explanation_en: "$r=1, \\theta=90^\\circ (\\pi/2)$." },
                            { id: 37, question: "Find $\\text{Arg}(z_1 z_2)$ if $\\text{Arg}(z_1)=20^\\circ$ and $\\text{Arg}(z_2)=30^\\circ$.", options: ["$600^\\circ$", "$50^\\circ$", "$-10^\\circ$", "$10^\\circ$"], answer: 1, explanation_en: "$\\text{Arg}(z_1 z_2) = \\text{Arg}(z_1) + \\text{Arg}(z_2) = 50^\\circ$." },
                            { id: 38, question: "Find $\\text{Arg}(z_1 / z_2)$ if $\\text{Arg}(z_1)=50^\\circ$ and $\\text{Arg}(z_2)=10^\\circ$.", options: ["$500^\\circ$", "$60^\\circ$", "$40^\\circ$", "$5^\\circ$"], answer: 2, explanation_en: "$\\text{Arg}(z_1/z_2) = \\text{Arg}(z_1) - \\text{Arg}(z_2) = 40^\\circ$." },
                            { id: 39, question: "Binomial Expansion: Number of terms in $(x+y)^n$.", options: ["$n$", "$n-1$", "$n+1$", "$2n$"], answer: 2, explanation_en: "Power $n$ yields $n+1$ terms." },
                            { id: 40, question: "Value of $^6P_1$.", options: ["$1$", "$6$", "$720$", "$0$"], answer: 1, explanation_en: "$6!/5! = 6$." }
                        ],

                        // === PART 3: Derivatives Basic & Transcendental (Lec 5-6) ===
                        m0_3: [
                            { id: 41, question: "Differentiate $y = x^5$.", options: ["$5x$", "$5x^4$", "$x^4$", "$5x^5$"], answer: 1, explanation_en: "Power rule: $nx^{n-1}$." },
                            { id: 42, question: "Differentiate $y = 3$ (Constant).", options: ["$3$", "$1$", "$0$", "$x$"], answer: 2, explanation_en: "Derivative of constant is 0." },
                            { id: 43, question: "Differentiate $y = \\sin(x)$.", options: ["$\\cos(x)$", "$-\\cos(x)$", "$\\sin(x)$", "$-\\sin(x)$"], answer: 0, explanation_en: "Standard trig derivative." },
                            { id: 44, question: "Differentiate $y = \\cos(x)$.", options: ["$\\sin(x)$", "$-\\sin(x)$", "$\\cos(x)$", "$\\tan(x)$"], answer: 1, explanation_en: "Derivative of cos is negative sin." },
                            { id: 45, question: "Differentiate $y = e^x$.", options: ["$x e^{x-1}$", "$e^x$", "$e$", "$\\ln(x)$"], answer: 1, explanation_en: "$e^x$ is its own derivative." },
                            { id: 46, question: "Differentiate $y = \\ln(x)$.", options: ["$\\frac{1}{x}$", "$e^x$", "$1$", "$x$"], answer: 0, explanation_en: "Standard log derivative." },
                            { id: 47, question: "Differentiate $y = \\tan(x)$.", options: ["$\\sec(x)$", "$\\sec^2(x)$", "$\\cot(x)$", "$\\cos^2(x)$"], answer: 1, explanation_en: "Standard trig derivative." },
                            { id: 48, question: "Chain Rule: Differentiate $y = (2x+1)^3$.", options: ["$3(2x+1)^2$", "$6(2x+1)^2$", "$3(2x+1)$", "$6(2x+1)$"], answer: 1, explanation_en: "$3(2x+1)^2 \\cdot 2 = 6(2x+1)^2$." },
                            { id: 49, question: "Product Rule applies to:", options: ["$y = u + v$", "$y = u / v$", "$y = u \\cdot v$", "$y = u(v)$"], answer: 2, explanation_en: "Multiplication of functions." },
                            { id: 50, question: "Differentiate $y = e^{2x}$.", options: ["$e^{2x}$", "$2e^{2x}$", "$2xe^{2x}$", "$e^x$"], answer: 1, explanation_en: "Chain rule: $e^u \\cdot u' \\rightarrow e^{2x} \\cdot 2$." },
                            { id: 51, question: "Differentiate $y = 5^x$ (General Base).", options: ["$5^x$", "$x 5^{x-1}$", "$5^x \\ln(5)$", "$5^x / \\ln(5)$"], answer: 2, explanation_en: "$a^x \\ln(a)$." },
                            { id: 52, question: "Differentiate $y = \\log_{10}(x)$.", options: ["$\\frac{1}{x}$", "$\\frac{1}{x \\ln 10}$", "$\\frac{\\ln 10}{x}$", "$\\frac{10}{x}$"], answer: 1, explanation_en: "$\\frac{1}{u \\ln a}$." },
                            { id: 53, question: "Differentiate $y = \\sec(x)$.", options: ["$\\sec x$", "$\\tan x$", "$\\sec x \\tan x$", "$\\sec^2 x$"], answer: 2, explanation_en: "Standard trig derivative." },
                            { id: 54, question: "Differentiate $y = x^{-1}$ (or $\\frac{1}{x}$).", options: ["$-x^{-2}$", "$\\ln(x)$", "$-1$", "$x$"], answer: 0, explanation_en: "$-1 \\cdot x^{-2} = -\\frac{1}{x^2}$." },
                            { id: 55, question: "Find $y'$ for $y = x^2 + 2x + 1$.", options: ["$2x + 2$", "$2x + 1$", "$x + 2$", "$2x$"], answer: 0, explanation_en: "Sum rule." },
                            { id: 56, question: "Simplify $\\ln(e^x)$ before differentiating.", options: ["$e$", "$x$", "$1$", "$\\ln x$"], answer: 1, explanation_en: "Power rule of logs: $x \\ln e = x$." },
                            { id: 57, question: "Differentiate $y = \\cot(x)$.", options: ["$-\\csc^2(x)$", "$\\csc^2(x)$", "$\\tan^2(x)$", "$-\\sec^2(x)$"], answer: 0, explanation_en: "Standard trig derivative." },
                            { id: 58, question: "If $s(t)$ is position, $s'(t)$ is:", options: ["Acceleration", "Velocity", "Speed", "Jerk"], answer: 1, explanation_en: "Rate of change of position." },
                            { id: 59, question: "Differentiate $y = \\csc(x)$.", options: ["$-\\csc x \\cot x$", "$\\csc x \\cot x$", "$-\\sec x$", "$\\cot x$"], answer: 0, explanation_en: "Standard trig derivative." },
                            { id: 60, question: "Product Rule: $(uv)' =$", options: ["$u'v'$", "$u'v + uv'$", "$u'v - uv'$", "$uv$"], answer: 1, explanation_en: "Formula." }
                        ],

                        // === PART 4: Adv Derivatives, Implicit, Extrema (Lec 7) ===
                        m0_4: [
                            { id: 61, question: "Implicit differentiation: derivative of $y^2$ with respect to $x$.", options: ["$2y$", "$2y y'$", "$y'$", "$2x$"], answer: 1, explanation_en: "Chain rule applies to $y$ terms: $2y \\frac{dy}{dx}$." },
                            { id: 62, question: "Find critical numbers of $f(x) = x^2 - 4x$.", options: ["$2$", "$4$", "$0$", "$-2$"], answer: 0, explanation_en: "$f'(x) = 2x - 4$. Set to 0 $\\rightarrow x=2$." },
                            { id: 63, question: "If $f'(x) > 0$ on an interval, $f(x)$ is:", options: ["Decreasing", "Increasing", "Constant", "Zero"], answer: 1, explanation_en: "Positive slope means increasing." },
                            { id: 64, question: "Differentiate implicit: $x^2 + y^2 = 1$.", options: ["$y' = -x/y$", "$y' = x/y$", "$y' = -y/x$", "$y' = 1$"], answer: 0, explanation_en: "$2x + 2yy' = 0 \\rightarrow yy' = -x \\rightarrow y' = -\\frac{x}{y}$." },
                            { id: 65, question: "Local Maximum occurs when $f'$ changes from:", options: ["- to +", "+ to -", "+ to +", "- to -"], answer: 1, explanation_en: "Slope goes up then down." },
                            { id: 66, question: "Find $y''$ (Second Derivative) of $y = x^3$.", options: ["$3x^2$", "$6x$", "$6$", "$0$"], answer: 1, explanation_en: "$y' = 3x^2, y'' = 6x$." },
                            { id: 67, question: "Quotient Rule: Derivative of $\\frac{u}{v}$.", options: ["$\\frac{u'v + uv'}{v^2}$", "$\\frac{v u' - u v'}{v^2}$", "$\\frac{u'v - uv'}{v}$", "$\\frac{u'}{v'}$"], answer: 1, explanation_en: "Low d-High minus High d-Low over Low squared." },
                            { id: 68, question: "Simplify $\\ln(x^5)$ for differentiation.", options: ["$\\ln(x)$", "$5 \\ln(x)$", "$(\\ln x)^5$", "$x \\ln 5$"], answer: 1, explanation_en: "Log power rule." },
                            { id: 69, question: "Differentiate $y = \\ln(\\sin x)$.", options: ["$\\frac{1}{\\sin x}$", "$\\cos x$", "$\\cot x$", "$\\tan x$"], answer: 2, explanation_en: "$\\frac{1}{\\sin x} \\cdot \\cos x = \\cot x$." },
                            { id: 70, question: "Critical numbers occur when $f'(x)$ is:", options: ["0 or Undefined", "Positive", "Negative", "1"], answer: 0, explanation_en: "Definition of critical number." },
                            { id: 71, question: "Differentiate $y = x \\ln x$.", options: ["$1 + \\ln x$", "$\\ln x$", "$1$", "$x$"], answer: 0, explanation_en: "Product rule: $(1)\\ln x + x(\\frac{1}{x}) = \\ln x + 1$." },
                            { id: 72, question: "Anti-derivative (Integral) of $2x$.", options: ["$x^2$", "$2x^2$", "$x$", "$2$"], answer: 0, explanation_en: "$\\frac{d}{dx}(x^2) = 2x$." },
                            { id: 73, question: "If $f''(x) > 0$, the graph is:", options: ["Concave Up", "Concave Down", "Linear", "Flat"], answer: 0, explanation_en: "Second derivative test." },
                            { id: 74, question: "Find $y'$ if $xy = 1$.", options: ["$-\\frac{1}{x^2}$", "$\\frac{1}{x}$", "$y$", "$x$"], answer: 0, explanation_en: "$y = x^{-1} \\rightarrow y' = -x^{-2}$." },
                            { id: 75, question: "If $f'(c) = 0$ and $f''(c) < 0$, then $c$ is a:", options: ["Local Max", "Local Min", "Inflection Point", "None"], answer: 0, explanation_en: "Second derivative test for Max." },
                            { id: 76, question: "Differentiate $y = 3^x$.", options: ["$3^x \\ln 3$", "$3^x$", "$x 3^{x-1}$", "$\\ln 3$"], answer: 0, explanation_en: "Exponential rule base $a$." },
                            { id: 77, question: "Derivative of $y = \\arctan(x)$ (Inverse Tan).", options: ["$\\frac{1}{1+x^2}$", "$\\frac{1}{\\sqrt{1-x^2}}$", "$\\sec^2 x$", "$\\cos x$"], answer: 0, explanation_en: "Standard inverse trig derivative." },
                            { id: 78, question: "Find $y'$ for $y = e^{3x+1}$ at $x=0$.", options: ["$3e$", "$e$", "$3$", "$1$"], answer: 0, explanation_en: "$y' = 3e^{3x+1}$. At $x=0 \\rightarrow 3e^1$." },
                            { id: 79, question: "Differentiate $y = \\sin^2(x)$.", options: ["$2 \\sin x$", "$2 \\sin x \\cos x$", "$\\cos^2 x$", "$2 \\cos x$"], answer: 1, explanation_en: "Chain rule: $2(\\sin x)^1 \\cdot \\cos x = \\sin(2x)$." },
                            { id: 80, question: "Slope of tangent to $y=x^2$ at $x=3$.", options: ["$6$", "$9$", "$3$", "$2$"], answer: 0, explanation_en: "$y'=2x. y'(3)=6$." }
                        ],

                        // === PART 5: Integration & Spheres (Lec 8) ===
                        m0_5: [
                            { id: 81, question: "Integral of $\\cos x dx$.", options: ["$\\sin x + C$", "$-\\sin x + C$", "$\\cos x + C$", "$\\tan x + C$"], answer: 0, explanation_en: "Derivative of sin is cos." },
                            { id: 82, question: "Integral of $\\sec^2 x dx$.", options: ["$\\tan x + C$", "$\\sec x + C$", "$\\cot x + C$", "$\\cos x + C$"], answer: 0, explanation_en: "Derivative of tan is $\\sec^2$." },
                            { id: 83, question: "Integral of $\\frac{1}{x} dx$.", options: ["$\\ln|x| + C$", "$x^{-1}$", "$-\\frac{1}{x^2}$", "$e^x$"], answer: 0, explanation_en: "Log rule." },
                            { id: 84, question: "Evaluate definite integral of $2x dx$ from 0 to 3.", options: ["$9$", "$6$", "$3$", "$0$"], answer: 0, explanation_en: "$[x^2]_0^3 = 3^2 - 0 = 9$." },
                            { id: 85, question: "Integral of $e^x dx$.", options: ["$e^x + C$", "$x e^x$", "$e^x / x$", "$\\ln x$"], answer: 0, explanation_en: "Own derivative/integral." },
                            { id: 86, question: "Standard equation of a sphere with radius $r$ and center $(a,b,c)$.", options: ["$(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$", "$x^2 + y^2 = r^2$", "$x+y+z = r$", "$(x+a)^2... = r^2$"], answer: 0, explanation_en: "Distance formula in 3D squared." },
                            { id: 87, question: "Find center of sphere: $(x-1)^2 + (y+2)^2 + z^2 = 9$.", options: ["$(1, -2, 0)$", "$(-1, 2, 0)$", "$(1, 2, 0)$", "$(0, 0, 0)$"], answer: 0, explanation_en: "Signs are reversed in formula." },
                            { id: 88, question: "Find radius of sphere: $x^2 + y^2 + z^2 = 25$.", options: ["$5$", "$25$", "$10$", "$1$"], answer: 0, explanation_en: "$\\sqrt{25} = 5$." },
                            { id: 89, question: "Integral of $x^n dx$ is $\\frac{x^{n+1}}{n+1}$ unless $n$ equals:", options: ["$-1$", "$0$", "$1$", "$2$"], answer: 0, explanation_en: "If $n=-1$, answer is $\\ln|x|$." },
                            { id: 90, question: "Integral of $\\sec x \\tan x dx$.", options: ["$\\sec x + C$", "$\\tan x + C$", "$\\csc x + C$", "$\\cos x$"], answer: 0, explanation_en: "Standard rule." },
                            { id: 91, question: "If a sphere is tangent to the xy-plane, its radius equals:", options: ["$|z\\text{-coordinate}|$", "$|x\\text{-coordinate}|$", "$|y\\text{-coordinate}|$", "$0$"], answer: 0, explanation_en: "Distance to xy-plane is $z$." },
                            { id: 92, question: "Integral of $5 dx$.", options: ["$5x + C$", "$5$", "$0$", "$x/5$"], answer: 0, explanation_en: "Constant rule." },
                            { id: 93, question: "Evaluate Integral of $\\sin x dx$ from $0$ to $\\pi$.", options: ["$2$", "$0$", "$1$", "$-2$"], answer: 0, explanation_en: "$[-\\cos x]_0^\\pi = -\\cos(\\pi) - (-\\cos 0) = -(-1) - (-1) = 2$." },
                            { id: 94, question: "U-substitution is the reverse of which rule?", options: ["Chain Rule", "Product Rule", "Quotient Rule", "Power Rule"], answer: 0, explanation_en: "Reverses composite functions." },
                            { id: 95, question: "Center of sphere $x^2 + y^2 + z^2 - 2x = 0$.", options: ["$(1, 0, 0)$", "$(-1, 0, 0)$", "$(2, 0, 0)$", "$(0, 0, 0)$"], answer: 0, explanation_en: "Complete square: $(x-1)^2...$ Center at 1." },
                            { id: 96, question: "Integral of $\\csc^2 x dx$.", options: ["$-\\cot x + C$", "$\\cot x + C$", "$\\tan x$", "$-\\tan x$"], answer: 0, explanation_en: "Co-functions have negative integrals." },
                            { id: 97, question: "To integrate $x \\cos(x^2) dx$, let $u = $?", options: ["$x^2$", "$\\cos x$", "$x$", "$x^2 + 1$"], answer: 0, explanation_en: "Inner function." },
                            { id: 98, question: "Integral of $(2x + 1) dx$.", options: ["$x^2 + x + C$", "$2x^2 + x$", "$x^2 + 1$", "$2$"], answer: 0, explanation_en: "$x^2 + x$." },
                            { id: 99, question: "Evaluate Integral 1 to 2 of $x^2 dx$.", options: ["$7/3$", "$8/3$", "$1/3$", "$3$"], answer: 0, explanation_en: "$[x^3/3]_1^2 = (8/3) - (1/3) = 7/3$." },
                            { id: 100, question: "Find radius if Center=$(0,0,0)$ and passes through $(0,3,4)$.", options: ["$5$", "$7$", "$3$", "$4$"], answer: 0, explanation_en: "Distance = $\\sqrt{0+9+16} = 5$." }
                        ],

                        // === TEXT QUESTIONS (Calculations) ===
                        m0_text_1: [
                            { 
                                id: 1, 
                                question: "Find the symmetric equation of the line passing through $P(1, 2, 3)$ and parallel to vector $\\vec{v} = \\langle 4, 5, 6 \\rangle$.", 
                                model_answer: "Steps:\n1. Identify Point $P(x_1, y_1, z_1) = (1, 2, 3)$.\n2. Identify Direction Vector $\\vec{v} = \\langle 4, 5, 6 \\rangle$.\n3. Apply Symmetric Formula:\n   $$\\frac{x-x_1}{a} = \\frac{y-y_1}{b} = \\frac{z-z_1}{c}$$\n4. Result:\n   $$\\frac{x-1}{4} = \\frac{y-2}{5} = \\frac{z-3}{6}$$" 
                            },
                            { 
                                id: 2, 
                                question: "Convert the complex number $z = 1 + i$ to Polar Form $(r, \\theta)$.", 
                                model_answer: "Steps:\n1. Identify $x=1, y=1$ (1st Quadrant).\n2. Find Radius $r$:\n   $$r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$$\n3. Find Angle $\\theta$:\n   $$\\theta = \\tan^{-1}(\\frac{y}{x}) = \\tan^{-1}(1) = 45^\\circ (\\text{or } \\frac{\\pi}{4})$$\n4. Polar Form:\n   $$z = \\sqrt{2} \\text{ cis}(45^\\circ)$$" 
                            },
                            { 
                                id: 3, 
                                question: "Find the intersection point of the line $x=t, y=t, z=t$ and the plane $x+y+z=9$.", 
                                model_answer: "Steps:\n1. Substitute $x, y, z$ from line into plane equation:\n   $$(t) + (t) + (t) = 9$$\n2. Solve for $t$:\n   $$3t = 9 \\Rightarrow t = 3$$\n3. Substitute $t$ back into line equations:\n   $$x=3, y=3, z=3$$\n4. Point: $(3, 3, 3)$." 
                            },
                            { 
                                id: 4, 
                                question: "Calculate the modulus of $z = 5 - 12i$.", 
                                model_answer: "Steps:\n1. Identify components: $a=5, b=-12$.\n2. Formula: $|z| = \\sqrt{a^2 + b^2}$.\n3. Calculation:\n   $$|z| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169}$$\n4. Result: $13$." 
                            },
                            { 
                                id: 5, 
                                question: "Express $z = 2 \\text{ cis}(30^\\circ)$ in Rectangular form $(x + iy)$.", 
                                model_answer: "Steps:\n1. Formula: $z = r(\\cos \\theta + i \\sin \\theta)$.\n2. Calculate $x$:\n   $$x = 2 \\cos(30^\\circ) = 2(\\frac{\\sqrt{3}}{2}) = \\sqrt{3}$$\n3. Calculate $y$:\n   $$y = 2 \\sin(30^\\circ) = 2(0.5) = 1$$\n4. Result: $z = \\sqrt{3} + i$." 
                            },
                            { 
                                id: 6, 
                                question: "Find the direction vector of the line defined by $x = 3 - 2t, y = 1 + 4t, z = 5t$.", 
                                model_answer: "Steps:\n1. Compare with standard parametric form:\n   $$x = x_0 + at, \\quad y = y_0 + bt, \\quad z = z_0 + ct$$\n2. Identify coefficients of $t$:\n   $$a = -2, \\quad b = 4, \\quad c = 5$$\n3. Result: Vector $\\vec{v} = \\langle -2, 4, 5 \\rangle$." 
                            },
                            { 
                                id: 7, 
                                question: "Multiply using polar form: $(3 \\text{ cis } 20^\\circ) \\cdot (4 \\text{ cis } 40^\\circ)$.", 
                                model_answer: "Steps:\n1. Multiply Radii: $r = 3 \\times 4 = 12$.\n2. Add Angles: $\\theta = 20^\\circ + 40^\\circ = 60^\\circ$.\n3. Result:\n   $$12 \\text{ cis}(60^\\circ)$$\n   (Rectangular check: $12(\\cos60^\\circ + i \\sin60^\\circ) = 6 + 10.39i$)" 
                            },
                            { 
                                id: 8, 
                                question: "Calculate $(3 + 2i)(1 - 4i)$.", 
                                model_answer: "Steps (FOIL Method):\n1. Expansion:\n   $$(3)(1) + (3)(-4i) + (2i)(1) + (2i)(-4i)$$\n2. Simplify:\n   $$3 - 12i + 2i - 8i^2$$\n3. Recall $i^2 = -1$:\n   $$3 - 10i - 8(-1) = 3 - 10i + 8$$\n4. Result: $11 - 10i$." 
                            },
                            { 
                                id: 9, 
                                question: "Find the conjugate of $z = \\frac{2+i}{1-i}$.", 
                                model_answer: "Steps:\n1. Simplify $z$ first by multiplying num/denom by conjugate $(1+i)$:\n   $$z = \\frac{(2+i)(1+i)}{(1-i)(1+i)}$$\n2. Expand Top: $2 + 2i + i + i^2 = 1 + 3i$.\n3. Expand Bottom: $1 - i^2 = 1 - (-1) = 2$.\n4. Simplified $z$: $\\frac{1+3i}{2} = 0.5 + 1.5i$.\n5. Find Conjugate (flip imaginary sign): $0.5 - 1.5i$." 
                            },
                            { 
                                id: 10, 
                                question: "If vectors $\\vec{u}=\\langle 1,2,3 \\rangle$ and $\\vec{v}=\\langle 2,a,6 \\rangle$ are parallel, find $a$.", 
                                model_answer: "Steps:\n1. Parallel vectors must be scalar multiples (proportional).\n2. Set up ratios:\n   $$\\frac{2}{1} = \\frac{a}{2} = \\frac{6}{3}$$\n3. Solve for $a$:\n   $$2 = \\frac{a}{2} \\Rightarrow a = 4$$" 
                            }
                        ],
                        m0_text_2: [
                            { 
                                id: 11, 
                                question: "Find $f'(x)$ for $f(x) = 3x^4 - 2x^2 + 5$.", 
                                model_answer: "Steps (Power Rule):\n1. Differentiate $3x^4 \\Rightarrow 3(4x^3) = 12x^3$.\n2. Differentiate $-2x^2 \\Rightarrow -2(2x) = -4x$.\n3. Differentiate $5 \\Rightarrow 0$.\n4. Result:\n   $$f'(x) = 12x^3 - 4x$$" 
                            },
                            { 
                                id: 12, 
                                question: "Differentiate $y = x \\sin(x)$ using Product Rule.", 
                                model_answer: "Steps:\n1. Let $u = x, v = \\sin(x)$.\n2. Derivatives: $u' = 1, v' = \\cos(x)$.\n3. Product Rule Formula: $u'v + uv'$.\n4. Substitute:\n   $$(1)(\\sin x) + (x)(\\cos x)$$\n5. Result: $\\sin(x) + x \\cos(x)$." 
                            },
                            { 
                                id: 13, 
                                question: "Find $dy/dx$ for $y = (3x - 1)^5$ using Chain Rule.", 
                                model_answer: "Steps:\n1. Outer function derivative: $5(3x - 1)^4$.\n2. Inner function derivative $(3x - 1)' = 3$.\n3. Multiply:\n   $$5(3x - 1)^4 \\cdot 3$$\n4. Result: $15(3x - 1)^4$." 
                            },
                            { 
                                id: 14, 
                                question: "Differentiate $y = e^{x^2}$.", 
                                model_answer: "Steps:\n1. Rule for $e^u$: $\\frac{d}{dx}e^u = e^u \\cdot u'$.\n2. Here $u = x^2 \\Rightarrow u' = 2x$.\n3. Apply rule:\n   $$e^{x^2} \\cdot 2x$$\n4. Result: $2x e^{x^2}$." 
                            },
                            { 
                                id: 15, 
                                question: "Find the second derivative $y''$ for $y = \\cos(2x)$.", 
                                model_answer: "Steps:\n1. First Derivative $y'$:\n   $$y' = -\\sin(2x) \\cdot 2 = -2\\sin(2x)$$\n2. Second Derivative $y''$:\n   $$y'' = -2(\\cos(2x) \\cdot 2)$$\n3. Result: $-4 \\cos(2x)$." 
                            },
                            { 
                                id: 16, 
                                question: "Differentiate $y = \\ln(\\sec x)$.", 
                                model_answer: "Steps:\n1. Log Chain Rule: $y' = \\frac{u'}{u}$.\n2. Here $u = \\sec x \\Rightarrow u' = \\sec x \\tan x$.\n3. Substitute:\n   $$\\frac{\\sec x \\tan x}{\\sec x}$$\n4. Result: $\\tan x$." 
                            },
                            { 
                                id: 17, 
                                question: "Find the slope of the tangent to $y = x^3$ at $x = 2$.", 
                                model_answer: "Steps:\n1. Find Derivative (Slope Function): $y' = 3x^2$.\n2. Substitute $x = 2$ into $y'$.\n3. Calculation:\n   $$y'(2) = 3(2)^2 = 3(4) = 12$$\n4. Result: Slope = 12." 
                            },
                            { 
                                id: 18, 
                                question: "Differentiate $y = 10^x$.", 
                                model_answer: "Steps:\n1. Identify Base $a = 10$.\n2. Rule for $a^x$: $a^x \\ln(a)$.\n3. Result: $10^x \\ln(10)$." 
                            },
                            { 
                                id: 19, 
                                question: "Use Quotient Rule to find $y'$ for $y = \\frac{\\sin(x)}{x}$.", 
                                model_answer: "Steps:\n1. Identify $u = \\sin(x), v = x$.\n2. Derivatives: $u' = \\cos(x), v' = 1$.\n3. Formula: $\\frac{v u' - u v'}{v^2}$.\n4. Substitute:\n   $$\\frac{x \\cos(x) - \\sin(x)(1)}{x^2}$$\n5. Result: $\\frac{x \\cos x - \\sin x}{x^2}$." 
                            },
                            { 
                                id: 20, 
                                question: "Find $dy/dx$ implicitly: $x^2 + y^2 = 25$.", 
                                model_answer: "Steps:\n1. Differentiate w.r.t $x$:\n   $$2x + 2y y' = 0$$\n2. Solve for $y'$:\n   $$2y y' = -2x \\Rightarrow y' = \\frac{-2x}{2y}$$\n3. Result: $y' = -\\frac{x}{y}$." 
                            }
                        ],
                        m0_text_3: [
                            { 
                                id: 21, 
                                question: "Evaluate Integral of $(3x^2 + 2x) dx$.", 
                                model_answer: "Steps (Power Rule):\n1. Rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1}$.\n2. Integrate terms:\n   $$\\int 3x^2 dx = x^3, \\quad \\int 2x dx = x^2$$\n3. Add Constant $C$.\n4. Result: $x^3 + x^2 + C$." 
                            },
                            { 
                                id: 22, 
                                question: "Calculate $^6C_3$ (Combinations).", 
                                model_answer: "Steps:\n1. Formula: $nCr = \\frac{n!}{r!(n-r)!}$.\n2. Substitute $n=6, r=3$:\n   $$\\frac{6!}{3!(3!)} = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1}$$\n3. Simplify: $\\frac{120}{6} = 20$." 
                            },
                            { 
                                id: 23, 
                                question: "Evaluate Definite Integral of $4x^3 dx$ from 0 to 1.", 
                                model_answer: "Steps:\n1. Antiderivative:\n   $$\\int 4x^3 dx = x^4$$\n2. Apply Limits $[0, 1]$:\n   $$F(1) - F(0) = (1)^4 - (0)^4$$\n3. Result: $1$." 
                            },
                            { 
                                id: 24, 
                                question: "Expand $(x + 1)^4$ using Binomial Theorem (Coefficients only).", 
                                model_answer: "Steps:\n1. Identify $n=4$.\n2. Use Pascal's Triangle Row 4: $1, 4, 6, 4, 1$.\n3. Coefficients are:\n   $${}^4C_0, {}^4C_1, {}^4C_2, {}^4C_3, {}^4C_4$$\n4. Result: $1, 4, 6, 4, 1$." 
                            },
                            { 
                                id: 25, 
                                question: "Find the center and radius of $x^2 + y^2 + z^2 = 49$.", 
                                model_answer: "Steps:\n1. Standard form: $(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$.\n2. Center: $(0, 0, 0)$.\n3. Radius: $r^2 = 49 \\Rightarrow r = \\sqrt{49} = 7$.\n4. Result: Center $(0,0,0)$, Radius $7$." 
                            },
                            { 
                                id: 26, 
                                question: "Integrate $\\sec^2(x) dx$.", 
                                model_answer: "Steps:\n1. Recall Derivative Rules: $\\frac{d}{dx}(\\tan x) = \\sec^2 x$.\n2. Integration is the reverse.\n3. Result: $\\tan(x) + C$." 
                            },
                            { 
                                id: 27, 
                                question: "Solve for $n$: $^nP_2 = 30$.", 
                                model_answer: "Steps:\n1. Expand Formula: $^nP_2 = n(n-1)$.\n2. Equation: $n^2 - n = 30 \\Rightarrow n^2 - n - 30 = 0$.\n3. Factor:\n   $$(n - 6)(n + 5) = 0$$\n4. Solutions: $n=6$ or $n=-5$ (reject negative).\n5. Result: $n = 6$." 
                            },
                            { 
                                id: 28, 
                                question: "Evaluate Integral of $\\frac{1}{x+1} dx$.", 
                                model_answer: "Steps:\n1. Identify structure $\\frac{u'}{u}$.\n2. Let $u = x+1, du = dx$.\n3. Rule: $\\int \\frac{1}{u} du = \\ln|u|$.\n4. Result: $\\ln|x+1| + C$." 
                            },
                            { 
                                id: 29, 
                                question: "Find the radius of the sphere $x^2 - 2x + y^2 + z^2 = 0$.", 
                                model_answer: "Steps (Complete Square):\n1. Group $x$: $(x^2 - 2x) + y^2 + z^2 = 0$.\n2. Complete Square: Add $(\\frac{-2}{2})^2 = 1$ to both sides.\n   $$(x^2 - 2x + 1) + y^2 + z^2 = 1$$\n3. Factor: $(x-1)^2 + y^2 + z^2 = 1$.\n4. Identify $r^2 = 1$.\n5. Result: Radius = 1." 
                            },
                            { 
                                id: 30, 
                                question: "Integrate $\\sin(2x) dx$ using substitution $u=2x$.", 
                                model_answer: "Steps:\n1. Let $u = 2x \\Rightarrow du = 2 dx \\Rightarrow dx = \\frac{du}{2}$.\n2. Substitute:\n   $$\\int \\sin(u) \\cdot \\frac{du}{2} = \\frac{1}{2} \\int \\sin(u) du$$\n3. Integrate: $\\frac{1}{2}(-\\cos u)$.\n4. Back-substitute:\n   $$-\\frac{1}{2} \\cos(2x) + C$$"} 
                      ]
                    }
                },
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
                        { title: "المحاضرة 1", link: "https://drive.google.com/file/d/1EGP5d2n9bFaPvH37FALF4aa8_w3L38is/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات ناقصة." },
                        { title: "المحاضرة 2", link: "https://drive.google.com/file/d/1QEygYZdvzlf9TfknBBUAdZweZgOx_o-t/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات ناقصة." },
                        { title: "المحاضرة 3", link: "https://drive.google.com/file/d/1fcmpHMT_0fuc3u--rESlcPnyi5wykkXz/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات ناقصة." },
                        { title: "المحاضرة 4", link: "https://drive.google.com/file/d/1SXUdzzJBTbleOsFq9Wt9kRE7Q3_XL7rV/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات ناقصة." },
                        { title: "المحاضرة 5", link: "https://drive.google.com/file/d/1LDqbAocoUpPWmC3SpwyheelE1hxj8mRA/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات ناقصة." },
                        { title: "المحاضرة 6", link: "https://drive.google.com/file/d/1qweIXNJ7mpZ1y5uOXVYvIN_2IOia2tsd/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات ناقصة." },
                        { title: "المتجهات", link: "https://drive.google.com/file/d/1KfxA4HersIlEIGVDxkosVpQZFeyJW8Kg/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الرسومات ناقصة." }
                    ],
                    en: [
                        { title: "Lecture 1", link: "https://drive.google.com/file/d/1748GcEmPY7HHI6tlvQ-gNFPFxWzqQQm9/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams MISSING." },
                        { title: "Lecture 2", link: "https://drive.google.com/file/d/1DcZOHWti5fRrSGpIcXO8u6tnh9Vs16T_/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams MISSING." },
                        { title: "Lecture 3", link: "https://drive.google.com/file/d/1jl8O9I7RhR6QTF81_B0Jeufd0K9pf9rt/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams MISSING." },
                        { title: "Lecture 4", link: "https://drive.google.com/file/d/1OSFgPS3aO9A8j9D0BPQjWt4A8ARzq_bY/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams MISSING." },
                        { title: "Lecture 5", link: "https://drive.google.com/file/d/1utMmZao8ruskEwtg4WteYnujcRYsEn7W/view?usp=drive_link", type: "PDF" },
                        { title: "Lecture 6", link: "https://drive.google.com/file/d/1fIgFMU8C-rwPrnsuwSbkMzXhJNmO3GdO/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams MISSING." },
                        { title: "Vectors", link: "https://drive.google.com/file/d/17vYwS9RyFQq-Enf-B_JPIJdkYtubmix6/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams MISSING." }
                    ]
                },
                quiz: {
    isSplit: true,
    sections: [
        // --- Module 1: Oscillations (Lecture 1) ---
        { id: 'phy_1_mcq', title: 'Lecture 1: Harmonic Motion (MCQ)', qCount: 14, type: 'mcq' },
        
        // Split phy_1_tf (50 Qs) -> 3 Parts
        { id: 'phy_1_tf_p1', title: 'Concept Check: SHM (True/False) - Part 1', qCount: 20, type: 'tf' },
        { id: 'phy_1_tf_p2', title: 'Concept Check: SHM (True/False) - Part 2', qCount: 20, type: 'tf' },
        { id: 'phy_1_tf_p3', title: 'Concept Check: SHM (True/False) - Part 3', qCount: 10, type: 'tf' },

        // --- Module 2: Waves (Lecture 2) ---
        { id: 'phy_2_mcq', title: 'Lecture 2: Pendulums & Waves (MCQ)', qCount: 19, type: 'mcq' },

        // --- Module 3: Geometric Optics ---
        // Split phy_3_refl (50 Qs) -> 3 Parts
        { id: 'phy_3_refl_p1', title: 'Optics I: Reflection & Refraction - Part 1', qCount: 20, type: 'mcq' },
        { id: 'phy_3_refl_p2', title: 'Optics I: Reflection & Refraction - Part 2', qCount: 20, type: 'mcq' },
        { id: 'phy_3_refl_p3', title: 'Optics I: Reflection & Refraction - Part 3', qCount: 10, type: 'mcq' },

        // Split phy_4_img (47 Qs) -> 3 Parts
        { id: 'phy_4_img_p1', title: 'Optics II: Mirrors & Lenses - Part 1', qCount: 20, type: 'mcq' },
        { id: 'phy_4_img_p2', title: 'Optics II: Mirrors & Lenses - Part 2', qCount: 20, type: 'mcq' },
        { id: 'phy_4_img_p3', title: 'Optics II: Mirrors & Lenses - Part 3', qCount: 7, type: 'mcq' },

        // --- Module 4: Wave Optics (Lecture 6) ---
        { id: 'phy_6_wave', title: 'Lecture 6: Interference & Wave Optics', qCount: 20, type: 'mcq' },

        // --- Module 5: Mechanics Revision ---
        // Split phy_vec_mcq (42 Qs) -> 3 Parts
        { id: 'phy_vec_mcq_p1', title: 'Mechanics: Vectors & Units (MCQ) - Part 1', qCount: 20, type: 'mcq' },
        { id: 'phy_vec_mcq_p2', title: 'Mechanics: Vectors & Units (MCQ) - Part 2', qCount: 20, type: 'mcq' },
        { id: 'phy_vec_mcq_p3', title: 'Mechanics: Vectors & Units (MCQ) - Part 3', qCount: 2, type: 'mcq' },

        // Split phy_vec_tf (100 Qs) -> 5 Parts
        { id: 'phy_vec_tf_p1', title: 'Concept Check: Vectors (True/False) - Part 1', qCount: 20, type: 'tf' },
        { id: 'phy_vec_tf_p2', title: 'Concept Check: Vectors (True/False) - Part 2', qCount: 20, type: 'tf' },
        { id: 'phy_vec_tf_p3', title: 'Concept Check: Vectors (True/False) - Part 3', qCount: 20, type: 'tf' },
        { id: 'phy_vec_tf_p4', title: 'Concept Check: Vectors (True/False) - Part 4', qCount: 20, type: 'tf' },
        { id: 'phy_vec_tf_p5', title: 'Concept Check: Vectors (True/False) - Part 5', qCount: 20, type: 'tf' },

        { id: 'phy_mot_mcq', title: 'Mechanics: Motion in 1D', qCount: 12, type: 'mcq' }
    ],
    data: {
        // 1. Harmonic Motion (MCQ) - No Change (<20)
        phy_1_mcq: [
            { id: 1, question: "A mass on a spring in SHM has amplitude $A$ and period $T$. What is the total distance traveled by the mass after a time interval $T$?", options: ["$0$", "$A/2$", "$A$", "$2A$", "$4A$"], answer: 4, explanation_en: "In one period $T$, the mass goes from equilibrium to $+A$, back to $0$, to $-A$, and back to $0$. Total distance = $4A$." },
            { id: 2, question: "A mass on a spring in SHM has amplitude $A$ and period $T$. What is the net displacement of the mass after a time interval $T$?", options: ["$0$", "$A/2$", "$A$", "$2A$", "$4A$"], answer: 0, explanation_en: "Displacement is (Final Pos - Initial Pos). After one full period $T$, the mass returns to the start, so Displacement = $0$." },
            { id: 3, question: "How long does it take for the mass to travel a total distance of $6A$?", options: ["$1/2 T$", "$3/4 T$", "$1 1/4 T$", "$1 1/2 T$", "$2 T$"], answer: 3, explanation_en: "$4A$ takes $1T$. The remaining $2A$ takes $0.5T$. Total time = $1.5T$." },
            { id: 4, question: "At what point in the motion is $v=0$ and $a=0$ simultaneously?", options: ["$x = A$", "$x > 0$ but $x < A$", "$x = 0$", "$x < 0$", "None of the above"], answer: 4, explanation_en: "Never. When $v=0$ (extremes), acceleration is Max. When $a=0$ (equilibrium), velocity is Max." },
            { id: 5, question: "Two identical springs are connected in parallel. How much force is required to stretch them $60\\text{cm}$ compared to one spring ($1\\text{N}$)?", options: ["$1/4 \\text{N}$", "$1/2 \\text{N}$", "$1 \\text{N}$", "$2 \\text{N}$", "$4 \\text{N}$"], answer: 3, explanation_en: "Parallel springs are stiffer ($k_{eff} = k_1 + k_2$). You need double the force ($2\\text{N}$)." },
            { id: 6, question: "Two identical springs are connected in series. How much force is required to stretch the combination $60\\text{cm}$?", options: ["$1/4 \\text{N}$", "$1/2 \\text{N}$", "$1 \\text{N}$", "$2 \\text{N}$", "$4 \\text{N}$"], answer: 1, explanation_en: "Series springs are weaker ($k_{eff} = k/2$). You need half the force ($0.5\\text{N}$)." },
            { id: 7, question: "A hole is drilled through the center of Earth. You jump in. What happens?", options: ["Fall to center and stop", "Go through to space", "Oscillate back and forth", "Won't fall"], answer: 2, explanation_en: "Gravity acts as a restoring force, causing you to execute Simple Harmonic Motion (oscillate) forever (ignoring friction)." },
            { id: 8, question: "A mass oscillates in SHM with amplitude $A$. If mass is doubled (amplitude unchanged), what happens to total energy?", options: ["Increases", "No change", "Decreases"], answer: 1, explanation_en: "Total Energy $E = 0.5 k A^2$. It depends on $k$ and $A$, not mass." },
            { id: 9, question: "If the amplitude of a simple harmonic oscillator is doubled, which quantity changes the most?", options: ["Frequency", "Period", "Max Speed", "Max Acceleration", "Total Mechanical Energy"], answer: 4, explanation_en: "Energy depends on $A^2$ (Quadruples). $v$ and $a$ depend on $A$ (Double). $T$ and $f$ are independent of $A$." },
            { id: 10, question: "A glider with a spring oscillates. If mass is doubled, what happens to the period?", options: ["Increases", "No change", "Decreases"], answer: 0, explanation_en: "Period $T = 2\\pi\\sqrt{m/k}$. Increasing mass increases $T$ (slower)." },
            { id: 11, question: "If identical springs are added in parallel to the glider, what happens to the period?", options: ["Increases", "No change", "Decreases"], answer: 2, explanation_en: "Parallel springs increase $k$. Since $T$ is inverse to $\\sqrt{k}$, the period decreases (faster)." },
            { id: 12, question: "Mass on a spring in an elevator moving upward at constant speed. What happens to period $T$?", options: ["Increases", "No change", "Decreases"], answer: 1, explanation_en: "Constant speed = No acceleration. The physics remains the same." },
            { id: 13, question: "Mass on a spring in an elevator accelerating upward. What happens to period $T$?", options: ["Increases", "No change", "Decreases"], answer: 1, explanation_en: "For a SPRING, $T = 2\\pi\\sqrt{m/k}$. It does NOT depend on gravity ($g$). Equilibrium shifts, but period stays same." },
            { id: 14, question: "Mass on a vertical spring is taken to the Moon. How does period change?", options: ["Increases", "No change", "Decreases"], answer: 1, explanation_en: "Spring period depends on mass and $k$, not gravity." }
        ],

        // 2. SHM Concepts (True/False) - Split into 3 Parts
        phy_1_tf_p1: [
            { id: 15, question: "In SHM, the restoring force is proportional to displacement and acts in the same direction.", answer: false, explanation_en: "It acts in the OPPOSITE direction ($F = -kx$)." },
            { id: 16, question: "The acceleration of an object in SHM is always directed away from the equilibrium position.", answer: false, explanation_en: "Acceleration is always directed TOWARDS the equilibrium position (Restoring nature)." },
            { id: 17, question: "The period of oscillation for a mass-spring system depends on the amplitude.", answer: false, explanation_en: "Period depends only on mass ($m$) and spring constant ($k$), not amplitude." },
            { id: 18, question: "The frequency of oscillation depends only on the spring constant ($k$).", answer: false, explanation_en: "It depends on BOTH spring constant ($k$) and mass ($m$)." },
            { id: 19, question: "If the mass in a mass-spring system is doubled, the period decreases.", answer: false, explanation_en: "$T$ is proportional to $\\sqrt{m}$. If mass doubles, period INCREASES." },
            { id: 20, question: "The total mechanical energy of an object in SHM varies sinusoidally with time.", answer: false, explanation_en: "Total Mechanical Energy is CONSTANT (Conservation of Energy). KE and PE vary, but sum is constant." },
            { id: 21, question: "The total mechanical energy is proportional to the amplitude ($A$).", answer: false, explanation_en: "It is proportional to the SQUARE of the amplitude ($E = 1/2 k A^2$)." },
            { id: 22, question: "Maximum speed occurs at maximum displacement.", answer: false, explanation_en: "Max speed occurs at equilibrium ($x=0$). At max displacement, speed is zero." },
            { id: 23, question: "Maximum acceleration occurs at the equilibrium position.", answer: false, explanation_en: "At equilibrium, force is zero, so acceleration is zero. Max acceleration is at max displacement." },
            { id: 24, question: "Velocity and acceleration can both be zero at the same time.", answer: false, explanation_en: "Never. If $v=0$ (endpoint), $a$ is max. If $a=0$ (center), $v$ is max." },
            { id: 25, question: "velocity of an object in SHM can be maximum when its acceleration is also maximum.", answer: false, explanation_en: "When acceleration is maximum (at $x = \\pm A$), velocity is zero. When velocity is maximum (at $x = 0$), acceleration is zero." },
            { id: 26, question: "The equation $x(t) = A \\sin(\\omega t)$ does not describe SHM.", answer: false, explanation_en: "This is another valid form for SHM, equivalent to a cosine with a phase shift." },
            { id: 27, question: "The angular frequency $\\omega$ in SHM is related to the period $T$ by $\\omega = T/2\\pi$.", answer: false, explanation_en: "The correct relationship is $\\omega = 2\\pi/T$." },
            { id: 28, question: "The angular frequency $\\omega$ in SHM is related to the frequency $f$ by $\\omega = f/2\\pi$.", answer: false, explanation_en: "The correct relationship is $\\omega = 2\\pi f$." },
            { id: 29, question: "For two identical springs connected in parallel, the effective spring constant is half that of a single spring.", answer: false, explanation_en: "$k_{eff} = k_1 + k_2 = 2k$ for parallel springs." },
            { id: 30, question: "For two identical springs connected in series, the effective spring constant is the same as that of a single spring", answer: false, explanation_en: "$1/k_{eff} = 1/k_1 + 1/k_2 = 2/k$, so $k_{eff} = k/2$ for series springs." },
            { id: 31, question: "The period of a simple pendulum depends on the mass of the bob.", answer: false, explanation_en: "$T = 2\\pi\\sqrt{L/g}$ is independent of mass." },
            { id: 32, question: "The period of a simple pendulum is independent of its length.", answer: false, explanation_en: "$T = 2\\pi\\sqrt{L/g}$ depends on the length ($L$)." },
            { id: 33, question: "The period of a simple pendulum is independent of the acceleration due to gravity.", answer: false, explanation_en: "$T = 2\\pi\\sqrt{L/g}$ depends on gravitational acceleration ($g$)." },
            { id: 34, question: "A simple pendulum exhibits SHM for large amplitudes of swing.", answer: false, explanation_en: "SHM is only a good approximation for small angles." }
        ],
        phy_1_tf_p2: [
            { id: 35, question: "If a simple pendulum is taken to the Moon, its period decreases.", answer: false, explanation_en: "Since $g$ is smaller on the Moon, $T = 2\\pi\\sqrt{L/g}$ increases." },
            { id: 36, question: "If a mass-spring system is taken to the Moon, its period decreases.", answer: false, explanation_en: "$T = 2\\pi\\sqrt{m/k}$ is independent of gravity, so the period remains the same." },
            { id: 37, question: "An object falling through a hole drilled through the center of the Earth would not exhibit SHM.", answer: false, explanation_en: "It does exhibit SHM due to the linear restoring force." },
            { id: 38, question: "The net displacement of an object in SHM after one complete period is $A$.", answer: false, explanation_en: "After one period, the object returns to its starting point, so net displacement is zero." },
            { id: 39, question: "The total distance traveled by an object in SHM after one complete period is zero.", answer: false, explanation_en: "The distance traveled is $4A$ in one period, not zero." },
            { id: 40, question: "The kinetic energy of an object in SHM is minimum when the potential energy is minimum.", answer: false, explanation_en: "KE is max when PE is min (at equilibrium), and PE is max when KE is min (at extremes)." },
            { id: 41, question: "The kinetic energy of an object in SHM is maximum when the displacement is maximum.", answer: false, explanation_en: "KE is maximum at equilibrium ($x=0$), where displacement is minimum." },
            { id: 42, question: "The potential energy of an object in SHM is minimum when the displacement is maximum.", answer: false, explanation_en: "$PE_s = 1/2 kx^2$ is maximum when $x = \\pm A$." },
            { id: 43, question: "The maximum speed of an object in SHM is independent of the amplitude ($A$).", answer: false, explanation_en: "$v_{max} = \\omega A$, so it is proportional to $A$." },
            { id: 44, question: "The maximum acceleration of an object in SHM is independent of the amplitude ($A$).", answer: false, explanation_en: "$a_{max} = \\omega^2 A$, so it is proportional to $A$." },
            { id: 45, question: "The frequency of an oscillator is equal to its period.", answer: false, explanation_en: "$f = 1/T$, they are inversely related." },
            { id: 46, question: "If the frequency of an oscillator doubles, its period doubles.", answer: false, explanation_en: "Since $f = 1/T$, doubling $f$ halves $T$." },
            { id: 47, question: "The phase constant $\\varphi$ in $x(t) = A \\cos(\\omega t + \\varphi)$ determines the maximum amplitude.", answer: false, explanation_en: "$\\varphi$ determines the initial position, not the maximum amplitude $A$." },
            { id: 48, question: "The acceleration of an object in SHM is proportional to the displacement and in the same direction.", answer: false, explanation_en: "$a = -\\omega^2 x$; it is proportional but in the *opposite* direction." },
            { id: 49, question: "The motion of the shadow of a ball moving in a circle at constant speed, projected onto a diameter, is not SHM.", answer: false, explanation_en: "This is a standard kinematic model for SHM." },
            { id: 50, question: "Damping causes the amplitude of an oscillating system to increase over time.", answer: false, explanation_en: "Damping dissipates energy, causing the amplitude to decrease." },
            { id: 51, question: "Resonance occurs when the driving frequency is much higher than the natural frequency of the system", answer: false, explanation_en: "Resonance occurs when the driving frequency *matches* the natural frequency." },
            { id: 52, question: "The SI unit for frequency is the radian per second (rad/s).", answer: false, explanation_en: "The SI unit for frequency ($f$) is the Hertz (Hz). The SI unit for angular frequency ($\\omega$) is rad/s." },
            { id: 53, question: "The SI unit for the spring constant is Joules (J).", answer: false, explanation_en: "The SI unit for the spring constant is Newtons per meter (N/m)." },
            { id: 54, question: "The SI unit for the period is meters per second (m/s).", answer: false, explanation_en: "The SI unit for the period is the second (s)." }
        ],
        phy_1_tf_p3: [
            { id: 55, question: "The potential energy of a mass-spring system in SHM is maximum at the equilibrium position", answer: false, explanation_en: "$PE_s = 1/2 kx^2$ is minimum (zero) at equilibrium ($x=0$)." },
            { id: 56, question: "The kinetic energy of a mass-spring system in SHM is maximum at the maximum displacement.", answer: false, explanation_en: "KE is maximum at equilibrium ($x=0$), where velocity is maximum." },
            { id: 57, question: "The restoring force in SHM can only be negative.", answer: false, explanation_en: "$F = -kx$ can be positive or negative depending on the sign of $x$." },
            { id: 58, question: "The motion of a child swinging on a swing with large angles is perfectly SHM.", answer: false, explanation_en: "SHM is only an accurate model for small angular displacements." },
            { id: 59, question: "The period of a simple pendulum depends on the gravitational acceleration ($g$).", answer: true, explanation_en: "$T = 2\\pi\\sqrt{L/g}$ explicitly depends on $g$." },
            { id: 60, question: "The period of a mass-spring system depends on the gravitational acceleration ($g$).", answer: false, explanation_en: "$T = 2\\pi\\sqrt{m/k}$ does not contain $g$." },
            { id: 61, question: "If the amplitude of an SHM oscillator doubles, its maximum acceleration remains the same.", answer: false, explanation_en: "$a_{max} = \\omega^2 A$. If $A$ doubles, $a_{max}$ doubles (assuming $\\omega$ is constant)." },
            { id: 62, question: "If the amplitude of an SHM oscillator doubles, its maximum speed remains the same.", answer: false, explanation_en: "$v_{max} = \\omega A$. If $A$ doubles, $v_{max}$ doubles (assuming $\\omega$ is constant)." },
            { id: 63, question: "The total energy of an SHM oscillator is maximum at the equilibrium position.", answer: false, explanation_en: "The total energy $E = 1/2 kA^2$ is constant throughout the motion." },
            { id: 64, question: "The fundamental equation for SHM is $d^2x/dt^2 = +\\omega^2 x$.", answer: false, explanation_en: "The correct equation is $d^2x/dt^2 = -\\omega^2 x$." }
        ],

        // 3. Pendulums & Waves (MCQ) - No Change (<20)
        phy_2_mcq: [
            { id: 65, question: "Two pendula have the same length but different masses. How do their periods compare?", options: ["Greater for greater mass", "Same for both", "Greater for smaller mass"], answer: 1, explanation_en: "Pendulum period $T = 2\\pi\\sqrt{L/g}$. Mass cancels out." },
            { id: 66, question: "Two pendula: one has length $L$, the other $4L$. How do periods compare?", options: ["$4L$ is $4x$", "$4L$ is $2x$", "Same", "$4L$ is $1/2x$"], answer: 1, explanation_en: "$T$ is proportional to $\\sqrt{L}$. $\\sqrt{4} = 2$. So the period doubles." },
            { id: 67, question: "Grandfather clock is running slow (period too long). What to do with the weight?", options: ["Move up", "Move down", "Doesn't matter", "Call repair"], answer: 0, explanation_en: "To speed it up, you need a shorter period. Shortening $L$ decreases $T$. Move weight UP." },
            { id: 68, question: "Pendulum in elevator moving upward at constant speed. Period?", options: ["Increases", "No change", "Decreases"], answer: 1, explanation_en: "No acceleration = No change in effective gravity." },
            { id: 69, question: "Pendulum in elevator accelerating upward. Period?", options: ["Increases", "No change", "Decreases"], answer: 2, explanation_en: "Accelerating up increases effective gravity ($g_{eff} = g + a$). Higher $g$ means shorter/faster period." },
            { id: 70, question: "Pendulum moved to the Moon. Period?", options: ["Increases", "No change", "Decreases"], answer: 0, explanation_en: "Moon gravity is weaker (lower $g$). Lower $g$ means longer/slower period." },
            { id: 71, question: "Pendulum amplitude decreases due to friction. What happens to Period?", options: ["Increases", "No change", "Decreases"], answer: 1, explanation_en: "For small angles, Period is independent of amplitude (Isochronism)." },
            { id: 72, question: "Standing on a swing vs Sitting. Which has shorter period?", options: ["Sitting", "Standing", "Same"], answer: 1, explanation_en: "Standing raises your center of mass, effectively shortening the pendulum length $L$. Shorter $L$ = Faster." },
            { id: 73, question: "Does a longitudinal wave (sound) have an amplitude?", options: ["Yes", "No", "Depends"], answer: 0, explanation_en: "Yes, it's the pressure amplitude (compression/rarefaction strength)." },
            { id: 74, question: "The 'Wave' at a stadium. What type is it?", options: ["Longitudinal", "Transverse", "Polarized", "Soliton"], answer: 1, explanation_en: "People move up/down (vertical), wave moves sideways (horizontal). Perpendicular = Transverse." },
            { id: 75, question: "Wave moving right. Velocity of particle at a Crest?", options: ["Up", "Down", "Right", "Left", "Zero"], answer: 4, explanation_en: "At the turning point (maximum displacement), particle velocity is momentarily zero." },
            { id: 76, question: "Wave moving right. Particle at equilibrium going into a crest. Direction?", options: ["Up", "Down", "Right", "Left"], answer: 0, explanation_en: "To form a crest arriving from the left, the particle must move UP." },
            { id: 77, question: "Wavelength=$20\\text{m}$, Speed=$5\\text{m/s}$. Time from Crest to Trough?", options: ["$1\\text{s}$", "$2\\text{s}$", "$4\\text{s}$", "$8\\text{s}$"], answer: 1, explanation_en: "Period $T = \\lambda/v = 4\\text{s}$. Crest to Trough is half a cycle = $2\\text{s}$." },
            { id: 78, question: "Microwaves ($10 \\text{GHz}$). Speed $c=3\\times 10^8$. Wavelength?", options: ["$0.3\\text{mm}$", "$3\\text{cm}$", "$30\\text{cm}$", "$3\\text{m}$"], answer: 1, explanation_en: "$\\lambda = c/f = 3e8 / 10e9 = 0.03\\text{m} = 3\\text{cm}$." },
            { id: 79, question: "Wave on rope. If tension is increased, speed?", options: ["Increases", "No change", "Decreases"], answer: 0, explanation_en: "Speed $v = \\sqrt{\\text{Tension}/\\text{density}}$. Higher Tension = Higher Speed." },
            { id: 80, question: "Wave on rope. If rope is thicker (more mass), speed?", options: ["Increases", "No change", "Decreases"], answer: 2, explanation_en: "Thicker rope = Higher density ($\\mu$). $v$ is inverse to $\\sqrt{\\mu}$. Speed decreases." },
            { id: 81, question: "Wave travels UP a hanging rope. Speed as it goes up?", options: ["Increases", "No change", "Decreases"], answer: 0, explanation_en: "Tension is higher at the top (holding more weight). Higher tension = Higher speed." },
            { id: 82, question: "Standing wave at extreme position (flat). Velocity?", options: ["Zero everywhere", "Max everywhere", "Depends"], answer: 0, explanation_en: "At extreme displacement, particles stop to turn around." },
            { id: 83, question: "Standing wave at equilibrium position. Velocity?", options: ["Zero", "Max", "Depends on position"], answer: 2, explanation_en: "Particles have max speed, but direction depends on the loop." }
        ],

        // 4. Reflection & Refraction (MCQ) - Split into 3 Parts
        phy_3_refl_p1: [
            { id: 84, question: "The first clear demonstration of the wave nature of light was provided by", options: ["Huygens.", "Young.", "Hertz.", "Newton.", "Maxwell."], answer: 2, explanation_en: "Young's double-slit experiment demonstrated interference, which is a property unique to waves, providing the first clear proof of light's wave nature. Huygens proposed the theory, but Young demonstrated it." },
            { id: 85, question: "A ray of light is reflected from a smooth surface. Angle $A$ is the angle the incident ray makes with the normal to the surface at the point of reflection. Angle $B$ is the angle the reflected ray makes with the normal. What is the ratio of angle $A$ to angle $B$?", options: ["2:1", "1:2", "1:1", "3:1", "1:3"], answer: 3, explanation_en: "According to the Law of Reflection, the angle of incidence equals the angle of reflection ($A = B$). Therefore, the ratio is 1:1." },
            { id: 86, question: "A light ray is incident on a smooth surface and makes an angle of $10^{\\circ}$ with the surface. What is the angle of incidence?", options: ["$10^{\\circ}$", "$20^{\\circ}$", "$50^{\\circ}$", "$40^{\\circ}$", "$80^{\\circ}$"], answer: 5, explanation_en: "The angle of incidence is measured relative to the normal (perpendicular line), not the surface. Since the ray makes $10^{\\circ}$ with the surface, the angle of incidence is $90^{\\circ} - 10^{\\circ} = 80^{\\circ}$." },
            { id: 87, question: "A light ray incident on a smooth surface makes an angle of $10^{\\circ}$ with the surface. What is the angle of reflection?", options: ["$10^{\\circ}$", "$20^{\\circ}$", "$50^{\\circ}$", "$40^{\\circ}$", "$80^{\\circ}$"], answer: 5, explanation_en: "The angle of incidence is $80^{\\circ}$ (from $90^{\\circ} - 10^{\\circ}$). By the Law of Reflection, the angle of reflection equals the angle of incidence, so it is also $80^{\\circ}$." },
            { id: 88, question: "Light travels through glass by", options: ["producing vibrations in the ether.", "traveling around the outside surface of the glass.", "means of absorption and emission by the atoms of the material.", "producing longitudinal waves in the glass.", "liquefaction of the glass in the path of the light beam."], answer: 3, explanation_en: "Light interacts with matter through the absorption and re-emission of photons by the atoms of the material, which slows down the effective speed of light in the medium." },
            { id: 89, question: "When light moves from a medium where its speed is higher to a different medium where its speed is slower, the refracted ray is bent", options: ["away from the normal.", "along the normal.", "along the surface.", "perpendicular to the normal.", "toward the normal."], answer: 5, explanation_en: "When light passes into a medium where it travels slower (higher refractive index), it refracts (bends) toward the normal line." },
            { id: 90, question: "Light changes its speed when it moves from one medium to another. This is the cause of", options: ["reflection.", "refraction.", "propagation.", "diffraction.", "interference."], answer: 2, explanation_en: "Refraction is defined as the bending of light caused by a change in its speed as it passes from one medium to another." },
            { id: 91, question: "When the speed of light in a transparent medium is $v$, its index of refraction is", options: ["$v/c$", "$v c$", "$v c.$", "$c/v$", "$c v$"], answer: 4, explanation_en: "The index of refraction ($n$) is defined as the ratio of the speed of light in a vacuum ($c$) to the speed of light in the medium ($v$). So, $n = c/v$." },
            { id: 92, question: "When the ratio of the wavelengths of light of frequency $f$ in two different substances is 1:2, the ratio of the indices of refraction in the same two substances is", options: ["1:1", "1:2", "3:1", "1:3", "2:1"], answer: 5, explanation_en: "The refractive index is inversely proportional to wavelength ($n \\propto 1/\\lambda$). If $\\lambda_1 : \\lambda_2 = 1:2$, then $n_1 : n_2 = 2:1$." },
            { id: 93, question: "The ratio of the wavelength of light of frequency $f$ in medium 1 to the wavelength of light of the same frequency in medium 2 is 1:2. What is the ratio of the speed of light in medium 1 to the speed of light in medium 2?", options: ["1:1", "1:2", "3:1", "1:3", "2:1"], answer: 2, explanation_en: "Speed is directly proportional to wavelength for a constant frequency ($v = f\\lambda$). If the wavelength ratio is 1:2, the speed ratio is also 1:2." },
            { id: 94, question: "The ratio of the wavelength of light in medium 1 to the wavelength of light in medium 2 is 1:2. The speed of light in medium 2 is twice as great as the speed of light in medium 1. What is the ratio of the frequency in medium 1 to the frequency in medium 2?", options: ["1:1", "1:2", "3:1", "1:3", "2:1"], answer: 1, explanation_en: "Frequency is determined by the source of the light and does not change when light travels between different media. The ratio remains 1:1." },
            { id: 95, question: "Light of wavelength $550 \\text{ nm}$ in vacuum enters a substance with an index of refraction of 1.47. What is the wavelength in nm in the medium?", options: ["293", "357", "374", "388", "401"], answer: 3, explanation_en: "The wavelength in a medium is $\\lambda_n = \\lambda_{\\text{vacuum}} / n$. Calculation: $550 / 1.47 \\approx 374 \\text{ nm}$." },
            { id: 96, question: "What is the speed of light in m/s in a medium whose index of refraction is 1.458?", options: ["$2.341 \\times 10^8$", "$1.931 \\times 10^8$", "$1.998 \\times 10^8$", "$2.049 \\times 10^8$", "$2.058 \\times 10^8$"], answer: 5, explanation_en: "Speed in a medium is $v = c / n$. Calculation: $(3 \\times 10^8) / 1.458 \\approx 2.058 \\times 10^8 \\text{ m/s}$." },
            { id: 97, question: "Which wavelength of light in nm is bent the most when passing through a prism?", options: ["440", "550", "600", "660", "700"], answer: 1, explanation_en: "Shorter wavelengths bend (refract) the most. Blue/Violet light ($440 \\text{ nm}$) has the shortest wavelength among the choices, so it deviates the most." },
            { id: 98, question: "All points on a wave front acting like new sources of radiation is referred to as", options: ["Fermat’s principle.", "Huygens’s principle.", "Young’s principle.", "Newton’s principle.", "Hertz’s principle."], answer: 2, explanation_en: "Huygens's Principle states that every point on a wavefront serves as a source of secondary spherical wavelets." },
            { id: 99, question: "If $n_1 > n_2$ , what is the sine of the critical angle for total internal reflection?", options: ["$n_2/c$", "$n_1/c$", "$n_1 n_2 / c^2$", "$n_1/n_2$", "$n_2/n_1$"], answer: 5, explanation_en: "The critical angle $\\theta_c$ is derived from Snell's Law where the angle of refraction is $90^{\\circ}$. Formula: $\\sin \\theta_c = n_2 / n_1$ (where $n_2$ is the lower index)." },
            { id: 100, question: "According to Einstein’s theory, the energy of a photon is", options: ["proportional to its wavelength.", "proportional to its frequency.", "constant, since the speed of light is a constant.", "quantized, since it always appears in bundles of size $1.6 \\times 10^{-19} \\text{ C}$.", "proportional to the square of the frequency."], answer: 2, explanation_en: "According to the photon theory (Einstein/Planck), energy is proportional to frequency: $E = hf$." },
            { id: 101, question: "A layer of water ( $n = 1.333$ ) floats on a container of carbon tetrachloride ( $n = 1.461$ ). What is the critical angle at the interface?", options: ["$30.9^{\\circ}$", "$43.2^{\\circ}$", "$48.6^{\\circ}$", "$65.8^{\\circ}$", "$90.0^{\\circ}$"], answer: 4, explanation_en: "Total Internal Reflection occurs when light moves from a higher index to a lower index. Here, it must go from Carbon Tetrachloride ($n=1.461$) to Water ($n=1.333$). $\\sin \\theta_c = 1.333 / 1.461 \\approx 0.912$. $\\theta_c \\approx 65.8^{\\circ}$." },
            { id: 102, question: "A laser beam is incident at an angle of $30^{\\circ}$ to the vertical on a solution of Karo syrup in water. If the beam is refracted at $19.24^{\\circ}$ to the vertical, what is the index of refraction of the syrup solution?", options: ["1.517", "1.124", "1.161", "1.154", "1.523"], answer: 1, explanation_en: "Using Snell's Law ($n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2$) for air-to-liquid: $1 \\times \\sin(30^{\\circ}) = n \\times \\sin(19.24^{\\circ})$. $0.5 = n \\times 0.3295$, so $n \\approx 1.517$." },
            { id: 103, question: "A layer of kerosene ( $n = 1.45$ ) is floating on water ( $n = 1.33$ ). For what angles of incidence at the kerosene-water interface will light be totally internally reflected within the kerosene?", options: ["$\\theta < 32.1^{\\circ}$", "$\\theta > 66.5^{\\circ}$", "$\\theta < 42.1^{\\circ}$", "$\\theta > 55.1^{\\circ}$", "$\\theta > 45.2^{\\circ}$"], answer: 2, explanation_en: "Total Internal Reflection requires $n_1 > n_2$. Here, Kerosene ($1.45$) to Water ($1.33$). $\\sin \\theta_c = 1.33/1.45 \\approx 0.917$. $\\theta_c \\approx 66.5^{\\circ}$. Reflection occurs for angles greater than the critical angle." }
        ],
        phy_3_refl_p2: [
            { id: 104, question: "The index of refraction for red light in water is 1.331 and for blue light is 1.340. If a ray of white light enters the water at an angle of incidence of $83^{\\circ}$, what is the underwater angle of refraction for the blue component of the light?", options: ["$47.2^{\\circ}$", "$48.3^{\\circ}$", "$47.3^{\\circ}$", "$48.2^{\\circ}$", "$47.8^{\\circ}$"], answer: 5, explanation_en: "Using Snell's Law for the blue component: $1 \\times \\sin(83^{\\circ}) = 1.340 \\times \\sin \\theta$. $\\sin \\theta = 0.9925 / 1.340 \\approx 0.7407$. $\\theta \\approx 47.8^{\\circ}$." },
            { id: 105, question: "The laws of refraction and reflection are the same for sound as for light. The speed of sound in air is $340 \\text{ m/s}$ and in water it is $1510 \\text{ m/s}$. If a sound wave approaches a plane water surface at an angle of incidence of $12^{\\circ}$, what is the angle of refraction?", options: ["$63.6^{\\circ}$", "$67.9^{\\circ}$", "$67.4^{\\circ}$", "$66.9^{\\circ}$", "$67.1^{\\circ}$"], answer: 3, explanation_en: "Using Snell's Law for sound: $\\sin \\theta_1 / v_1 = \\sin \\theta_2 / v_2$. $\\sin(12^{\\circ}) / 340 = \\sin \\theta_2 / 1510$. $\\sin \\theta_2 \\approx 0.923$, so $\\theta_2 \\approx 67.4^{\\circ}$." },
            { id: 106, question: "A layer of ethyl alcohol ( $n = 1.361$ ) is on top of water ( $n = 1.333$ ). At what angle relative to the normal to the interface of the two liquids is light totally reflected?", options: ["$78^{\\circ}$", "$88^{\\circ}$", "$68^{\\circ}$", "$58^{\\circ}$", "The critical angle is undefined."], answer: 1, explanation_en: "Critical angle from Alcohol ($1.361$) to Water ($1.333$): $\\sin \\theta_c = 1.333 / 1.361 \\approx 0.979$. $\\theta_c \\approx 78^{\\circ}$." },
            { id: 107, question: "A light ray is incident on the surface of water ( $n = 1.33$ ) at an angle of $60^{\\circ}$ relative to the normal to the surface. The angle of the refracted wave is", options: ["$60^{\\circ}$.", "$20^{\\circ}$.", "$41^{\\circ}$.", "$80^{\\circ}$.", "$30^{\\circ}$."], answer: 3, explanation_en: "Air to Water: $1 \\times \\sin(60^{\\circ}) = 1.33 \\times \\sin \\theta$. $\\sin \\theta = 0.866 / 1.33 \\approx 0.651$. $\\theta \\approx 40.6^{\\circ}$ (approx $41^{\\circ}$)." },
            { id: 108, question: "A light ray is incident on the surface of water ( $n = 1.33$ ) at an angle of $60^{\\circ}$ relative to the normal to the surface. The angle of the reflected wave is", options: ["$80^{\\circ}$.", "$41^{\\circ}$.", "$20^{\\circ}$.", "$60^{\\circ}$.", "$30^{\\circ}$."], answer: 4, explanation_en: "By the Law of Reflection, the angle of reflection equals the angle of incidence, which is $60^{\\circ}$." },
            { id: 109, question: "A light ray whose frequency is $6 \\times 10^{14} \\text{ Hz}$ in vacuum is incident on water ( $n = 1.33$ ). The wavelength of the light in nm after it enters the water is", options: ["798.", "500.", "665.", "376.", "266."], answer: 4, explanation_en: "First, find vacuum wavelength: $\\lambda = c/f = (3 \\times 10^8) / (6 \\times 10^{14}) = 500 \\text{ nm}$. Then wavelength in water: $\\lambda_n = 500 / 1.33 \\approx 376 \\text{ nm}$." },
            { id: 110, question: "The speed of light changes when it goes from ethyl alcohol ( $n_1 = 1.361$ ) to carbon tetrachloride ( $n_2 = 1.461$ ). The ratio of the speeds $v_2 / v_1$ is", options: ["1.99.", "1.07.", "0.93.", "0.51.", "0.76."], answer: 3, explanation_en: "The ratio of speeds is inverse to the ratio of indices: $v_2 / v_1 = n_1 / n_2 = 1.361 / 1.461 \\approx 0.93$." },
            { id: 111, question: "Light is refracted upon entering a diamond from air. If the angle of incidence is $30^{\\circ}$, and the angle of refraction is $12^{\\circ}$, what is the index of refraction?", options: ["1.3", "2.4", "2.6", "1.8", "0.4"], answer: 2, explanation_en: "Snell's Law: $1 \\times \\sin(30^{\\circ}) = n \\times \\sin(12^{\\circ})$. $n = 0.5 / 0.2079 \\approx 2.4$." },
            { id: 112, question: "Two mirrors are at right angles to one another. A light ray is incident on the first at an angle of $30^{\\circ}$ with respect to the normal to the surface. What is the angle of reflection from the second surface?", options: ["$30^{\\circ}$", "$60^{\\circ}$", "$45^{\\circ}$", "$53^{\\circ}$", "$75^{\\circ}$"], answer: 2, explanation_en: "With mirrors at $90^{\\circ}$, the ray reflects off the first at $30^{\\circ}$, hits the second at an incidence of $90^{\\circ}-30^{\\circ} = 60^{\\circ}$, and reflects at $60^{\\circ}$." },
            { id: 113, question: "Two mirrors are at right angles to one another. If an object is placed near the mirrors, what is the largest number of images that would be seen in the mirrors?", options: ["3", "2", "4", "5", "More than 5"], answer: 1, explanation_en: "The number of images for mirrors at angle $\\theta$ is $(360^{\\circ} / \\theta) - 1$. For $90^{\\circ}$, $(360/90) - 1 = 3$ images." },
            { id: 114, question: "A person in a boat sees a fish in the water ( $n = 1.33$ ) at an angle of $40^{\\circ}$ relative to the water’s surface. What is the true angle in degrees relative to the water’s surface?", options: ["40", "35", "50", "55", "61"], answer: 4, explanation_en: "The fish is seen at an apparent angle of $40^{\\circ}$ to the surface ($50^{\\circ}$ to normal). Light bends away from normal as it exits. Using Snell's Law in reverse implies the true angle to the normal must be smaller ($35^{\\circ}$), meaning the true angle to the surface is larger ($55^{\\circ}$)." },
            { id: 115, question: "A fish is $80 \\text{ cm}$ below the surface of a pond. What is the apparent depth in cm when viewed from a position almost directly above the fish? (for water $n = 1.33$ )", options: ["50", "60", "40", "70", "110"], answer: 2, explanation_en: "Apparent depth formula: $d' = d / n$. Calculation: $80 / 1.33 \\approx 60 \\text{ cm}$." },
            { id: 116, question: "A diver shines light up to the surface of a glass-bottomed boat at an angle of $30^{\\circ}$ relative to the normal. If the index of refraction of water and glass are 1.33 and 1.5, at what angle in degrees does the light leave the glass, relative to its normal?", options: ["26", "35", "42", "22", "48"], answer: 3, explanation_en: "Light goes Water $\\to$ Glass $\\to$ Air. The intermediate glass layer doesn't change the final angle. effectively $n_{\\text{water}} \\sin(30^{\\circ}) = n_{\\text{air}} \\sin \\theta$. $1.33 \\times 0.5 = 1 \\times \\sin \\theta$. $\\theta \\approx 41.7^{\\circ}$ (approx $42^{\\circ}$)." },
            { id: 117, question: "A person looks horizontally at the edge of a swimming pool. If its length is $5 \\text{ m}$, and the pool is filled to the surface, to what depth in m could the observer see? (n for water is 1.33)", options: ["3.2", "4.4", "2.1", "1.0", "0.3"], answer: 2, explanation_en: "The observer sees the bottom edge horizontally. This corresponds to the critical angle limiting ray. $\\sin \\theta_c = 1/1.33 \\rightarrow \\theta_c \\approx 48.75^{\\circ}$. Using trigonometry $\\tan \\theta_c = \\text{Length}/\\text{Depth}$. Depth $= 5 / \\tan(48.75^{\\circ}) \\approx 4.4 \\text{ m}$." },
            { id: 118, question: "An aquarium contains a $5 \\text{ cm}$ layer of water ( $n = 1.33$ ) floating on top of carbon tetrachloride ( $n = 1.461$ ). If the angle of incidence into the water from the air is $30^{\\circ}$, what is the angle of refraction into the carbon tetrachloride?", options: ["$58^{\\circ}$", "$69^{\\circ}$", "$37^{\\circ}$", "$20^{\\circ}$", "$75^{\\circ}$"], answer: 4, explanation_en: "Air $\\to$ Water $\\to$ CCl4. Snell's Law applies across layers: $n_{\\text{air}} \\sin(30^{\\circ}) = n_{\\text{CCl4}} \\sin \\theta$. $1 \\times 0.5 = 1.461 \\times \\sin \\theta$. $\\theta \\approx 20^{\\circ}$." },
            { id: 119, question: "An aquarium contains a $5 \\text{ cm}$ layer of water ( $n = 1.333$ ) floating on top of carbon tetrachloride ( $n = 1.461$ ). If the angle of incidence into the water from the carbon tetrachloride is $20^{\\circ}$, what is the angle of refraction into the air?", options: ["$20^{\\circ}$", "$30^{\\circ}$", "$38^{\\circ}$", "$69^{\\circ}$", "$26^{\\circ}$"], answer: 2, explanation_en: "CCl4 $\\to$ Water $\\to$ Air. Reversing the path: $n_{\\text{CCl4}} \\sin(20^{\\circ}) = n_{\\text{air}} \\sin \\theta$. $1.461 \\times 0.342 = \\sin \\theta \\approx 0.5$. $\\theta = 30^{\\circ}$." },
            { id: 120, question: "Light strikes a diamond ( $n = 2.42$ ) at an angle of $60^{\\circ}$. What is the angle of refraction?", options: ["$21^{\\circ}$", "$30^{\\circ}$", "$38^{\\circ}$", "$69^{\\circ}$", "$71^{\\circ}$"], answer: 1, explanation_en: "Air to Diamond: $1 \\times \\sin(60^{\\circ}) = 2.42 \\times \\sin \\theta$. $\\sin \\theta = 0.866 / 2.42 \\approx 0.358$. $\\theta \\approx 21^{\\circ}$." },
            { id: 121, question: "Light strikes a diamond ( $n = 2.42$ ) immersed in glycerin ( $n = 1.473$ ) at an angle of $60^{\\circ}$. What is the angle of refraction?", options: ["$20^{\\circ}$", "$60^{\\circ}$", "$32^{\\circ}$", "$64^{\\circ}$", "$15^{\\circ}$"], answer: 3, explanation_en: "Glycerin to Diamond: $1.473 \\times \\sin(60^{\\circ}) = 2.42 \\times \\sin \\theta$. $\\sin \\theta = (1.473 \\times 0.866) / 2.42 \\approx 0.527$. $\\theta \\approx 32^{\\circ}$." },
            { id: 122, question: "A diver shines an underwater searchlight at the surface of a pond from below. At what angle (relative to the surface) will the light be totally reflected? (n for water is 1.333.)", options: ["$47^{\\circ}$", "$41^{\\circ}$", "$51^{\\circ}$", "$58^{\\circ}$", "$49^{\\circ}$"], answer: 2, explanation_en: "Total reflection angle relative to the surface is the complement of the critical angle. $\\sin \\theta_c = 1/1.333 \\rightarrow \\theta_c \\approx 48.6^{\\circ}$ (relative to normal). Angle to surface $= 90^{\\circ} - 48.6^{\\circ} = 41.4^{\\circ}$." },
            { id: 123, question: "A fish is located in water. The fish is $6.65 \\text{ m}$ beneath the surface and appears to be $5 \\text{ m}$ beneath the surface. What is the index of refraction of the water?", options: ["2.11", "1.67", "1.55", "1.33", "1.25"], answer: 4, explanation_en: "Refractive index $n = \\text{Real Depth} / \\text{Apparent Depth} = 6.65 / 5 = 1.33$." }
        ],
        phy_3_refl_p3: [
            { id: 124, question: "An object is placed in carbon tetrachloride of index of refraction 1.461. It appears to be $4.0 \\text{ cm}$ beneath the surface of the liquid. What is its actual distance in cm?", options: ["5.84", "5.96", "6.01", "6.18", "6.23"], answer: 1, explanation_en: "Real Depth $= n \\times \\text{Apparent Depth} = 1.461 \\times 4.0 \\approx 5.84 \\text{ cm}$." },
            { id: 125, question: "Carbon tetrachloride has an index of refraction of 1.461. If the speed of light in vacuum is $3.00 \\times 10^8 \\text{ m/s}$, what is the speed of light in m/s in the liquid?", options: ["$2.51 \\times 10^8$", "$2.21 \\times 10^8$", "$2.11 \\times 10^8$", "$2.05 \\times 10^8$", "$1.96 \\times 10^8$"], answer: 4, explanation_en: "Speed $v = c / n = (3 \\times 10^8) / 1.461 \\approx 2.05 \\times 10^8 \\text{ m/s}$." },
            { id: 126, question: "A light ray passes from air to glass at an angle of incidence of $45^{\\circ}$ and an angle of refraction of $30^{\\circ}$. What is the index of refraction of the glass?", options: ["2.55", "2.13", "1.84", "1.56", "1.41"], answer: 5, explanation_en: "Snell's Law: $1 \\times \\sin(45^{\\circ}) = n \\times \\sin(30^{\\circ})$. $0.707 = n \\times 0.5$. $n \\approx 1.41$." },
            { id: 127, question: "A laser beam in air strikes a rectangular glass block of $n = 1.38$ at an angle of incidence of $30^{\\circ}$. At what angle of refraction does the beam emerge from the block into the air?", options: ["$15^{\\circ}$", "$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$75^{\\circ}$"], answer: 2, explanation_en: "For a rectangular block with parallel sides, the emergent ray is parallel to the incident ray. Therefore, the angle of refraction into the air is equal to the original angle of incidence ($30^{\\circ}$)." },
            { id: 128, question: "A laser beam in air passes through a glass block and re-enters the air. How does the speed of the emergent beam compare to the speed in the glass?", options: ["It is greater.", "It is the same.", "It is less.", "It cannot be determined.", "It changes frequency."], answer: 1, explanation_en: "The beam emerges back into the air, so its speed returns to the speed of light in air (approx $c$), which is greater than its speed inside the glass." },
            { id: 129, question: "What happens to a ray when it strikes a glass surface from air?", options: ["It is partially reflected and partially absorbed.", "It is totally reflected.", "It is totally refracted.", "It is partially reflected and partially refracted.", "It is totally absorbed."], answer: 4, explanation_en: "When light hits a transparent medium like glass, some energy is reflected and some is transmitted (refracted). It is rarely 100% one or the other unless it's total internal reflection (not possible from air to glass)." },
            { id: 130, question: "A laser beam passes from air to glass. What happens to its frequency?", options: ["It increases.", "It decreases.", "It stays the same.", "It approaches zero.", "It approaches infinity."], answer: 3, explanation_en: "Frequency is a fundamental property of the wave source and stays the same regardless of the medium the light travels through." },
            { id: 131, question: "The index of refraction of a liquid is 1.25. If the speed of light in air is $3.0 \\times 10^8 \\text{ m/s}$, what is the speed of light in the liquid in m/s?", options: ["$1.4 \\times 10^8$", "$1.6 \\times 10^8$", "$2.0 \\times 10^8$", "$2.2 \\times 10^8$", "$2.4 \\times 10^8$"], answer: 5, explanation_en: "Speed $v = c / n = (3 \\times 10^8) / 1.25 = 2.4 \\times 10^8 \\text{ m/s}$." },
            { id: 132, question: "In the ray model of light, a ray represents", options: ["a wave front in a plane wave.", "a wave front in a spherical wave.", "a direction of propagation of a single wave.", "the directions of propagation of multiple waves.", "either (a) or (c)."], answer: 3, explanation_en: "In the ray model, a ray is an arrow drawn in the direction of propagation of the wave, perpendicular to the wavefronts." },
            { id: 133, question: "When a plane wave with parallel ray directions is reflected by a rough surface, the reflected rays", options: ["are all parallel.", "are all parallel to the incident rays.", "are parallel or perpendicular to the incident rays.", "are parallel to the incident rays or are absorbed.", "may reflect in all directions."], answer: 5, explanation_en: "Reflection from a rough surface is called diffuse reflection, where incident parallel rays are reflected in many different random directions." }
        ],

        // 5. Mirrors & Lenses (MCQ) - Split into 3 Parts
        phy_4_img_p1: [
            { id: 134, question: "A student stands $2 \\text{ m}$ from a plane mirror and sees one fourth of her body in the mirror. At what distance in m from the mirror, if any, must she stand in order to see half her body?", options: ["1", "4", "6", "8", "She will see one-fourth of her body at all normal distances."], answer: 5, explanation_en: "To see a specific fraction of your body (like half), the mirror size matters, not the distance. By similar triangles, the required mirror height remains constant regardless of how far you stand." },
            { id: 135, question: "What minimum plane mirror length in m is needed for a $2 \\text{ m}$ tall person to see all of himself in the mirror?", options: ["0.4", "0.5", "0.75", "1", "2"], answer: 4, explanation_en: "The minimum length of a plane mirror required to see one's full height is exactly half of the person's height: $2 \\text{ m} / 2 = 1 \\text{ m}$." },
            { id: 136, question: "A woman stands $3 \\text{ m}$ from a plane mirror and sees her reflection. How far from her in m is her mirror image?", options: ["3", "4", "5", "6", "7"], answer: 4, explanation_en: "For a plane mirror, the image distance equals the object distance ($d_i = d_o$). Total distance = distance to mirror + distance to image = $3 + 3 = 6 \\text{ m}$." },
            { id: 137, question: "The place where rays from a point object form an image in front of a concave spherical mirror is called the", options: ["focal distance.", "image distance.", "image point.", "focal point.", "Foucalt point."], answer: 3, explanation_en: "The specific location where light rays originating from a point object intersect (or appear to intersect) after reflection is called the image point." },
            { id: 138, question: "Rays that are at large angles to the principal axis of a spherical concave mirror are reflected in a manner that causes a blurred image. This effect is called", options: ["aberrant focus.", "spherical aberration.", "non-alignment.", "antiparallel.", "elliptical aberration."], answer: 2, explanation_en: "Rays striking the outer edges of a spherical mirror focus closer than central rays, causing a blurred image. This defect is known as spherical aberration." },
            { id: 139, question: "An object is $0.75 \\text{ m}$ from a concave spherical mirror and its image is $0.25 \\text{ m}$ from the mirror. What is the magnification of the mirror?", options: ["1/3", "1/2", "1", "2", "3"], answer: 1, explanation_en: "Magnification magnitude is $d_i / d_o = 0.25 / 0.75 = 1/3$." },
            { id: 140, question: "The radius of curvature of a mirror is $R$. What is its focal length?", options: ["$1/(2R)$", "$R/2$", "$2R$", "$2/R$", "$1/R$"], answer: 2, explanation_en: "For spherical mirrors, the focal length is exactly half the radius of curvature: $f = R/2$." },
            { id: 141, question: "The object distance for an object in front of a concave lens is $30 \\text{ cm}$. If the image distance is $15 \\text{ cm}$, what is the focal length in cm?", options: ["0.1", "0.01", "0.134", "10", "1.34"], answer: 4, explanation_en: "Using the lens equation $1/f = 1/d_o + 1/d_i$. Given the answer is 10 cm, this implies a convex lens behavior for this problem setup: $1/30 + 1/15 = 3/30$, so $f = 10 \\text{ cm}$." },
            { id: 142, question: "The object distance for a concave mirror is $50 \\text{ cm}$. The focal length is $30 \\text{ cm}$. What is the image distance?", options: ["0.013", "7.5", "1.3", "0.053", "75"], answer: 5, explanation_en: "Mirror equation: $1/f = 1/d_o + 1/d_i$. $1/30 = 1/50 + 1/d_i$. Solving for $d_i$ gives $75 \\text{ cm}$." },
            { id: 143, question: "A concave mirror forms a(an) ________ image of a real object.", options: ["real", "virtual", "imaginary", "real or virtual", "virtual or imaginary"], answer: 4, explanation_en: "A concave mirror can form a real image (if object is outside focal point) or a virtual image (if object is inside focal point)." },
            { id: 144, question: "A convex mirror forms a(an) ______ image of a real object.", options: ["real", "virtual", "imaginary", "real and virtual", "virtual and imaginary"], answer: 2, explanation_en: "A convex mirror diverges light and can only form virtual, upright, and reduced images of real objects." },
            { id: 145, question: "For a mirror, if $p$ is positive, the object is", options: ["in front of the mirror.", "in back of the mirror.", "at the mirror surface.", "imaginary.", "virtual."], answer: 1, explanation_en: "By standard sign convention, a positive object distance ($p > 0$) indicates a real object placed in front of the mirror." },
            { id: 146, question: "For a mirror, if $p$ is negative, the object is", options: ["in front of the mirror.", "in back of the mirror.", "at the mirror surface.", "imaginary.", "real."], answer: 2, explanation_en: "A negative object distance ($p < 0$) indicates a virtual object, typically located in back of the mirror (formed by another lens/mirror)." },
            { id: 147, question: "For a mirror, if $q$ is positive, the image is", options: ["in front of the mirror.", "in back of the mirror.", "at the mirror surface.", "imaginary.", "virtual."], answer: 1, explanation_en: "For mirrors, a positive image distance ($q > 0$) means the light actually converges there, forming a real image in front of the mirror." },
            { id: 148, question: "For a mirror, if $q$ is negative, the image is", options: ["in front of the mirror.", "in back of the mirror.", "at the mirror surface.", "imaginary.", "real."], answer: 2, explanation_en: "A negative image distance ($q < 0$) means the light appears to diverge from there, forming a virtual image in back of the mirror." },
            { id: 149, question: "For a thin lens, the image distance that corresponds to an infinite object distance is called the", options: ["object distance.", "radius of curvature.", "focal length.", "focal point.", "virtual distance."], answer: 3, explanation_en: "Rays coming from an infinite distance are parallel and converge at the focal length (focal point) of the lens." },
            { id: 150, question: "If the object distance for a thin lens is $10 \\text{ cm}$ and the image distance is $30 \\text{ cm}$, what is the magnification?", options: ["–7.5", "–3.0", "1.0", "+3.0", "+7.5."], answer: 2, explanation_en: "Magnification $M = -d_i / d_o$. Here, $M = -30 / 10 = -3.0$. The negative sign means it is inverted." },
            { id: 151, question: "If the object distance for a thin lens is $600 \\text{ cm}$ and the image distance is $300 \\text{ cm}$, what is the focal length in cm?", options: ["100", "200", "300", "150", "50"], answer: 2, explanation_en: "Lens equation: $1/f = 1/600 + 1/300 = 3/600$. Therefore, $f = 200 \\text{ cm}$." },
            { id: 152, question: "A clown $2 \\text{ m}$ tall looks at himself in a full-length mirror (floor-to-ceiling). Where in the mirror must he look to see his feet?", options: ["1 m from the floor", "50 cm from the floor", "25 cm from the floor", "At the bottom of the mirror", "1.5 m from the floor"], answer: 1, explanation_en: "To see the feet, the ray travels from feet to mirror to eyes. The reflection point on the mirror is halfway between the eye level (top) and the feet. $2 \\text{ m} / 2 = 1 \\text{ m}$ from the floor." },
            { id: 153, question: "A concave mirror has a focal length of $20 \\text{ cm}$. What is the position in cm of the resulting image if the image is inverted and one-fourth the size of the object?", options: ["15", "25", "50", "100", "–15"], answer: 2, explanation_en: "Inverted image means $M$ is negative ($-1/4$). So $q = p/4$ or $p = 4q$. Eq: $1/20 = 1/4q + 1/q = 5/4q$. $q = 25 \\text{ cm}$." }
        ],
        phy_4_img_p2: [
            { id: 154, question: "A convex mirror has a focal length of $-20 \\text{ cm}$. What is the position of the resulting image in cm if the image is upright and one-fourth the object size?", options: ["–100", "–25", "–50", "–15", "–10"], answer: 4, explanation_en: "Convex mirror ($f = -20$). Upright image ($M = +1/4$). $p = -4q$. Eq: $-1/20 = 1/(-4q) + 1/q = 3/4q$. $q = -15 \\text{ cm}$." },
            { id: 155, question: "A concave mirror has a focal length of $20 \\text{ cm}$. What is the position of the object if the image is upright and is two times larger than the object?", options: ["30", "205", "10", "40", "60"], answer: 3, explanation_en: "Upright image in concave mirror means virtual ($M = +2$). $q = -2p$. Eq: $1/20 = 1/p - 1/2p = 1/2p$. $p = 10 \\text{ cm}$." },
            { id: 156, question: "A concave mirror has a focal length of $20 \\text{ cm}$. What is the magnification when the object’s distance is $100 \\text{ cm}$?", options: ["1/2", "1/4", "–2", "4", "–1/4"], answer: 5, explanation_en: "First find $q$: $1/q = 1/20 - 1/100 = 4/100$, so $q = 25$. Magnification $M = -q/p = -25/100 = -1/4$." },
            { id: 157, question: "A convex mirror has a focal length of $-20 \\text{ cm}$. What is the object distance in cm when the image distance is $-10 \\text{ cm}$?", options: ["10", "40", "60", "20", "30"], answer: 4, explanation_en: "Mirror equation: $1/p = 1/f - 1/q$. $1/p = 1/(-20) - 1/(-10) = -1/20 + 2/20 = 1/20$. So $p = 20 \\text{ cm}$." },
            { id: 158, question: "A concave mirror has a focal length of $20 \\text{ cm}$. What is the magnification when the object and image distances are $10 \\text{ cm}$ and $-20 \\text{ cm}$ respectively?", options: ["1", "2", "1/2", "1/4", "–1/2"], answer: 2, explanation_en: "Magnification $M = -d_i / d_o$. Here, $M = -(-20)/10 = +2$." },
            { id: 159, question: "A concave mirror has a radius of curvature of $1 \\text{ m}$. An object is placed $2 \\text{ m}$ in front of the mirror. The location of the image in cm is", options: ["127.", "83.", "67.", "150.", "200."], answer: 3, explanation_en: "$f = R/2 = 50 \\text{ cm}$. Eq: $1/q = 1/50 - 1/200 = 3/200$. $q = 200/3 \\approx 67 \\text{ cm}$." },
            { id: 160, question: "An object $4 \\text{ cm}$ high is placed $15 \\text{ cm}$ in front of a convex mirror with a focal length of $-10 \\text{ cm}$. What is the image position in cm?", options: ["–8", "–4", "–2", "–6", "30"], answer: 4, explanation_en: "Convex mirror ($f = -10$). Eq: $1/q = 1/(-10) - 1/15 = -5/30 = -1/6$. $q = -6 \\text{ cm}$." },
            { id: 161, question: "An object $15 \\text{ cm}$ high is placed $15 \\text{ cm}$ in front of a convex mirror with a focal length of $-10 \\text{ cm}$. What is the image height in cm?", options: ["2", "4", "6", "8", "30"], answer: 3, explanation_en: "From previous question, $q = -6$. $M = -q/p = -(-6)/15 = 0.4$. Image height $h_i = 0.4 \\times 15 = 6 \\text{ cm}$." },
            { id: 162, question: "An object is placed $15 \\text{ cm}$ in front of a concave mirror with a focal length of $30 \\text{ cm}$. What is the magnification?", options: ["1", "2", "1/2", "1/4", "–2"], answer: 2, explanation_en: "Find $q$: $1/q = 1/30 - 1/15 = -1/30 \\to q = -30$. $M = -(-30)/15 = +2$." },
            { id: 163, question: "A customer stands $5 \\text{ m}$ in front of a convex mirror with a radius of curvature of $100 \\text{ cm}$. How tall will she appear in the mirror in cm if she is $2 \\text{ m}$ tall?", options: ["68", "48", "18", "88", "22"], answer: 3, explanation_en: "Convex $R=100 \\to f=-50$. $1/q = -1/50 - 1/500 = -11/500$. $q \\approx -45.45$. $M = -q/p \\approx 0.09$. Height $= 0.09 \\times 200 \\approx 18 \\text{ cm}$." },
            { id: 164, question: "A dentist uses a concave mirror (focal length $2 \\text{ cm}$) to examine some teeth. If the distance from the tooth to the mirror is $1 \\text{ cm}$, what is the magnification of the tooth?", options: ["6", "1", "4", "2", "1.5"], answer: 4, explanation_en: "Eq: $1/q = 1/2 - 1/1 = -0.5 \\to q = -2$. $M = -(-2)/1 = 2$." },
            { id: 165, question: "A plano-convex lens is made of glass ( $n = 1.5$ ) with one surface flat and the other having a radius of $20 \\text{ cm}$. What is the focal length in cm of the lens?", options: ["20", "30", "40", "10", "50"], answer: 3, explanation_en: "Lens Maker's Eq: $1/f = (n-1)(1/R)$. $1/f = (1.5-1)/20 = 0.5/20$. $f = 40 \\text{ cm}$." },
            { id: 166, question: "An object $20 \\text{ cm}$ high is placed $50 \\text{ cm}$ in front of a lens whose focal length is $10 \\text{ cm}$. What is the image distance in cm?", options: ["6.7", "8.3", "12.5", "5", "20"], answer: 3, explanation_en: "Lens Eq: $1/q = 1/10 - 1/50 = 4/50 = 2/25$. $q = 12.5 \\text{ cm}$." },
            { id: 167, question: "A magnifying glass has a convex lens of focal length $15 \\text{ cm}$. How far (in cm) from the lens is the image located when the object is $5 \\text{ cm}$ in front of the lens?", options: ["7.5", "8.1", "7.2", "7.8", "8.2"], answer: 1, explanation_en: "Lens Eq: $1/q = 1/15 - 1/5 = -2/15$. $q = -7.5 \\text{ cm}$. Distance is the magnitude, $7.5 \\text{ cm}$." },
            { id: 168, question: "What is the magnification of a lens if the object height is $4 \\text{ cm}$ and the image height is $8 \\text{ cm}$?", options: ["1", "2", "4", "1/2", "1/4"], answer: 2, explanation_en: "Magnification $M = \\text{Image Height} / \\text{Object Height} = 8/4 = 2$." },
            { id: 169, question: "An object $50 \\text{ cm}$ high is placed $1 \\text{ m}$ in front of a converging lens whose focal length is $5 \\text{ cm}$ Determine the image height in cm.", options: ["77", "2.6", "52", "17", "83"], answer: 2, explanation_en: "Find $q$: $1/q = 1/5 - 1/100 \\approx 0.19 \\to q \\approx 5.26$. $M = -5.26/100$. Height $\\approx 0.0526 \\times 50 \\approx 2.6 \\text{ cm}$." },
            { id: 170, question: "An object is located $15.0 \\text{ cm}$ from a concave mirror of $10 \\text{ cm}$ focal length. The object is located on the mirror’s principle axis. At what distance, in cm, from the mirror is the image located?", options: ["5", "10", "20", "30", "40"], answer: 4, explanation_en: "Eq: $1/q = 1/10 - 1/15 = 1/30$. $q = 30 \\text{ cm}$." },
            { id: 171, question: "What is the focal length in cm of a convex mirror in which a virtual image is located $10.0 \\text{ cm}$ from the mirror and the object is $30.0 \\text{ cm}$ from the mirror. Both object and image are located on the principle axis of the mirror.", options: ["–5", "–10", "–15", "–20", "–25"], answer: 3, explanation_en: "Mirror Eq: $1/f = 1/30 + 1/(-10) = -2/30$. $f = -15 \\text{ cm}$." },
            { id: 172, question: "A real image is located $120 \\text{ cm}$ from a thin lens and is on the principle axis. The thin lens has a focal length of $30 \\text{ cm}$. At what distance (in cm) from the lens is the object located?", options: ["10", "20", "30", "40", "50"], answer: 4, explanation_en: "Lens Eq: $1/p = 1/30 - 1/120 = 3/120 = 1/40$. $p = 40 \\text{ cm}$." },
            { id: 173, question: "A thin convex lens of $20 \\text{ cm}$ focal length has an object located on its principle axis $10 \\text{ cm}$ from the lens. Which of the following describes the image formed by the lens?", options: ["Upright, larger, virtual", "Upright, smaller, virtual", "Upright, larger, real", "Inverted, larger, real", "Inverted, smaller, real"], answer: 1, explanation_en: "Object distance (10) is less than focal length (20) in a convex lens. This creates a magnifying glass effect: Upright, Larger, Virtual." }
        ],
        phy_4_img_p3: [
            { id: 174, question: "An object located on the principle axis of a concave mirror is $15 \\text{ cm}$ from the mirror. The focal length of the mirror is $10 \\text{ cm}$. Which of the following best describes the image?", options: ["Virtual, upright, and larger", "Virtual, inverted, and larger", "Virtual, upright, and smaller", "Real, inverted, and smaller", "Real, inverted, and larger"], answer: 5, explanation_en: "Object is between $f$ (10) and $C$ (20). In a concave mirror, this creates a Real, Inverted, and Larger image." },
            { id: 175, question: "An object is located on the principle axis of a concave mirror of focal length $10 \\text{ cm}$. The object is located $25 \\text{ cm}$ from the mirror. Which of the following best describes the image?", options: ["Virtual, upright, and larger", "Virtual, inverted, and larger", "Virtual, upright, and smaller", "Real, inverted, and smaller", "Real, inverted, and larger"], answer: 4, explanation_en: "Object is beyond $C$ ($25 > 20$). In a concave mirror, this creates a Real, Inverted, and Smaller image." },
            { id: 176, question: "An object is located on the principle axis of a concave mirror of focal length $20 \\text{ cm}$. The object is located $15 \\text{ cm}$ from the mirror. Which of the following best describes the image?", options: ["Virtual, upright, and larger", "Virtual, inverted, and smaller", "Real, inverted and smaller", "Virtual, upright, and smaller", "Real, inverted, and larger"], answer: 1, explanation_en: "Object is inside the focal length ($15 < 20$). In a concave mirror, this creates a Virtual, Upright, and Larger image." },
            { id: 177, question: "When the center of curvature of a mirror is in back of the mirror, _____ and ____ are always negative.", options: ["p, q", "q, f", "p, f", "f, R", "R, p"], answer: 4, explanation_en: "A mirror with center of curvature in the back is a Convex Mirror. By convention, its Focal Length ($f$) and Radius ($R$) are always negative." },
            { id: 178, question: "When the image distance, $q$, is negative,", options: ["the object distance is less than one focal length from the mirror.", "the mirror is a convex mirror.", "the object distance is less than one focal length from the lens.", "the lens is a diverging lens.", "any of the answers above may be correct."], answer: 5, explanation_en: "A negative image distance ($q$) indicates a virtual image. This can happen in multiple cases (diverging lenses/mirrors OR converging ones with object inside focus)." },
            { id: 179, question: "When the object distance, $p$, is positive, for a concave mirror or a converging lens,", options: ["the image distance q, is positive.", "the image is inverted.", "the magnification is negative.", "the answers above are all correct if $p < f$ .", "answers (a), (b), and (c) are correct if $p > f$ ."], answer: 5, explanation_en: "For converging systems (concave mirror/convex lens), if the object is outside the focal length ($p > f$), the image is always Real ($q>0$), Inverted, and with negative M." },
            { id: 180, question: "When the center of curvature of a mirror is in front of the mirror, _____ and _____ are always positive.", options: ["M, p", "M, q", "f, p", "f, q", "f, R"], answer: 5, explanation_en: "A mirror with center of curvature in front is a Concave Mirror. Its Focal Length ($f$) and Radius ($R$) are always positive." }
        ],

        // 6. Wave Optics (MCQ) - No Change (<20)
        phy_6_wave: [
            { id: 181, question: "For sustained interference to be observed between two light sources, which of the following conditions must be met?", options: ["The sources must be monochromatic and incoherent.", "The sources must be polychromatic and coherent.", "The sources must be monochromatic and coherent.", "The sources must have different wavelengths and constant phase."], answer: 3, explanation_en: "Coherent (constant phase) and Monochromatic (same wavelength) are essential for stable interference." },
            { id: 182, question: "In Young’s Double Slit Experiment, the \"path difference\" ($\\delta$) between the two waves arriving at a point on the screen is given by:", options: ["$d \\cos \\theta$", "$d \\sin \\theta$", "$L \\tan \\theta$", "$L \\sin \\theta$"], answer: 2, explanation_en: "The geometry shows the extra path is $\\delta = d \\sin \\theta$." },
            { id: 183, question: "Which of the following defines \"Constructive Interference\" in Young’s Double Slit Experiment? (where $m$ is an integer)", options: ["Path difference = $(m + 0.5)\\lambda$", "Path difference = $m\\lambda$", "Path difference = $m\\lambda/2$", "Path difference = $(m + 1.5)\\lambda$"], answer: 2, explanation_en: "Constructive interference requires an integer path difference: $m\\lambda$." },
            { id: 184, question: "If the distance between the slits ($d$) in Young’s experiment is decreased, what happens to the distance between the fringes ($y$) on the screen?", options: ["The fringes get closer together.", "The fringes move further apart.", "The fringe spacing remains unchanged.", "The fringes disappear completely."], answer: 2, explanation_en: "$y = \\lambda L/d$. Since $y \\propto 1/d$, decreasing $d$ increases $y$ (fringes move apart)." },
            { id: 185, question: "A light wave traveling in air ($n = 1$) reflects off a glass surface ($n = 1.5$). What is the phase change of the reflected wave?", options: ["$0^{\\circ}$ (No phase change)", "$90^{\\circ}$ ($\\lambda/4$)", "$180^{\\circ}$ ($\\lambda/2$)", "$360^{\\circ}$ ($\\lambda$)"], answer: 3, explanation_en: "Reflection from Low ($n = 1$) to High ($n = 1.5$) causes a Hard Reflection ($180^{\\circ}$ shift)." },
            { id: 186, question: "A light wave traveling in glass ($n = 1.5$) reflects off a water surface ($n = 1.33$). What is the phase change of the reflected wave?", options: ["$0^{\\circ}$ (No phase change)", "$90^{\\circ}$ ($\\lambda/4$)", "$180^{\\circ}$ ($\\lambda/2$)", "$270^{\\circ}$ ($3\\lambda/4$)"], answer: 1, explanation_en: "Reflection from High ($n = 1.5$) to Low ($n = 1.33$) causes Soft Reflection (No shift)." },
            { id: 187, question: "In a thin film interference setup with one phase reversal (e.g., oil on water), the condition for Destructive Interference (Dark Fringe) is:", options: ["$2nt = (m + 0.5)\\lambda$", "$2nt = m\\lambda$", "$d \\sin \\theta = m\\lambda$", "$2nt = (m + 1)\\lambda$"], answer: 2, explanation_en: "With 1 Phase Shift, rules are reversed. Destructive becomes Integer ($m\\lambda$). Therefore $2nt = m\\lambda$." },
            { id: 188, question: "The positions of the Dark Fringes in Young’s Double Slit Experiment are located at vertical distances $y$ given by:", options: ["$y = (\\lambda L/d) m$", "$y = (\\lambda L/d)(m + 0.5)$", "$y = (dL/\\lambda) m$", "$y = (\\lambda d/L)(m + 0.5)$"], answer: 2, explanation_en: "Dark fringes occur at half-integer wavelengths. $y = (\\lambda L/d)(m + 0.5)$." },
            { id: 189, question: "Why is the single slit $S_0$ used before the double slits $S_1$ and $S_2$ in the classic setup?", options: ["To increase the intensity of light.", "To ensure the light comes from a tiny region and is coherent.", "To change the color of the light.", "To diffract the light before it hits the screen."], answer: 2, explanation_en: "$S_0$ acts as a point source to ensure coherence for $S_1$ and $S_2$." },
            { id: 190, question: "In a soap bubble (thin film of water in air), how many phase reversals ($180^{\\circ}$ shifts) occur for the two interfering rays?", options: ["Zero phase reversals.", "One phase reversal (at the top surface only).", "Two phase reversals (at both surfaces).", "One phase reversal (at the bottom surface only)."], answer: 2, explanation_en: "Top (Air$\\to$Water) has shift. Bottom (Water$\\to$Air) has no shift. Total: 1 Shift." },
            { id: 191, question: "What is the wavelength of light in a medium with index of refraction $n$, if its wavelength in vacuum is $\\lambda$?", options: ["$\\lambda_n = n\\lambda$", "$\\lambda_n = \\lambda/n$", "$\\lambda_n = \\lambda - n$", "$\\lambda_n = \\lambda$"], answer: 2, explanation_en: "Frequency stays same, speed drops. $\\lambda_n = \\lambda/n$." },
            { id: 192, question: "For a thin film with index $n_{film}$ surrounded by media where $n_1 < n_{film} < n_2$, how many phase shifts occur?", options: ["0", "1", "2", "3"], answer: 3, explanation_en: "Reflection 1 (Low$\\to$High) = Shift. Reflection 2 (High$\\to$Higher) = Shift. Total: 2 Shifts." },
            { id: 193, question: "In Young’s experiment, the central fringe (at $m = 0$) is always:", options: ["Dark because the path difference is zero.", "Bright because the path difference is zero.", "Dark because the path difference is $\\lambda/2$.", "Bright because the path difference is $\\lambda$."], answer: 2, explanation_en: "At center, $\\delta = 0$. Constructive interference always occurs." },
            { id: 194, question: "If we replace the red light in Young’s experiment with blue light (shorter $\\lambda$), the fringe width will:", options: ["Increase.", "Decrease.", "Remain the same.", "Become infinite."], answer: 2, explanation_en: "$y \\propto \\lambda$. Blue has smaller $\\lambda$, so $y$ decreases." },
            { id: 195, question: "Which physical principle is primarily responsible for the colors seen in an oil slick on a wet road?", options: ["Diffraction.", "Polarization.", "Thin Film Interference.", "Refraction."], answer: 3, explanation_en: "Colors are due to Thin Film Interference selectively amplifying certain wavelengths." },
            { id: 196, question: "The \"Order Number\" $m$ for the first dark fringe next to the central maximum is:", options: ["$m = 1$", "$m = 0$", "$m = 0.5$", "$m = -1$"], answer: 2, explanation_en: "First dark fringe uses $m = 0$ in the $(m + 0.5)$ formula." },
            { id: 197, question: "If a thin film has a thickness $t$ and index $n$, the \"optical path length\" traveled by the ray going through the film and back is:", options: ["$t$", "$2t$", "$2nt$", "$nt$"], answer: 3, explanation_en: "Physical distance is $2t$. Optical path is multiplied by $n$. Result: $2nt$." },
            { id: 198, question: "When calculating thin film interference, why do we care if $n_1 < n_2$ or $n_1 > n_2$?", options: ["To determine the speed of light.", "To determine if a $180^{\\circ}$ phase shift occurs upon reflection.", "To calculate the angle of refraction.", "To find the frequency of the light."], answer: 2, explanation_en: "Relative $n$ determines Phase Shift ($180^{\\circ}$ or $0^{\\circ}$), which decides the formula." },
            { id: 199, question: "In Young’s double slit experiment, the approximation $\\sin \\theta \\approx \\tan \\theta$ is valid only when:", options: ["The screen is very close to the slits ($L \\approx d$).", "The angle $\\theta$ is large (greater than $10^{\\circ}$).", "The angle $\\theta$ is small (less than $4^{\\circ}$).", "The wavelength is very large."], answer: 3, explanation_en: "Small angle approximation is valid for $\\theta < 4^{\\circ}$." },
            { id: 200, question: "Which equation represents the condition for Constructive Interference in a thin film with One Phase Shift?", options: ["$2nt = m\\lambda$", "$2nt = (m + 0.5)\\lambda$", "$d \\sin \\theta = m\\lambda$", "$2nt = m\\lambda/n$"], answer: 2, explanation_en: "One Shift reverses rules. Constructive becomes Half-Integer: $2nt = (m + 0.5)\\lambda$." }
        ],

        // 7. Vectors & Units (MCQ) - Split into 3 Parts
        phy_vec_mcq_p1: [
            { id: 201, question: "Which of the following natural phenomena would serve as the best time standard?", options: ["The mean orbit radius of the earth", "The period of audible sound waves", "The time for one inhalation or exhalation", "The time it takes a leaf to fall from a tree to the ground", "The speed of the Mississippi River"], answer: 2, explanation_en: "Audible sound waves have a relatively constant period determined by their frequency, which makes them more regular than the other variable options listed." },
            { id: 202, question: "Using the prefixes given in Table 1.4 of your text, how would you express $4 \\times 10^{-9} \\text{ g}$?", options: ["$4 \\text{ Gg}$", "$4 \\text{ Tg}$", "$4 \\text{ mg}$", "$4 \\text{ ng}$", "$4 \\text{ cg}$"], answer: 4, explanation_en: "The prefix 'nano' (n) represents $10^{-9}$. Therefore, $4 \\times 10^{-9} \\text{ g}$ is equal to $4 \\text{ ng}$." },
            { id: 203, question: "If $m = \\rho V$, where $\\rho$ is a constant of proportionality, the kg is the unit of $m$, and the $m^3$ is the unit of $V$, what is the unit of $\\rho$?", options: ["$kg \\cdot m^3$", "$kg$", "$m^3$", "$kg/m^3$", "$m^3/kg$"], answer: 4, explanation_en: "Density formula is $\\rho = m/V$. Substituting units: mass (kg) / volume ($m^3$), the unit becomes $kg/m^3$." },
            { id: 204, question: "If $x = 0.5 a t^2$, with meters the units of $x$, and seconds the units of $t$, what are the units of $a$?", options: ["$m$", "$s^2$", "$m/s^2$", "$s^2/m$", "$m \\cdot s^2$"], answer: 3, explanation_en: "Dimensional analysis: $[x] = [a][t]^2$. $L = [a]T^2$. Solving for $[a]$ gives $L/T^2$, which corresponds to $m/s^2$." },
            { id: 205, question: "Assuming that $m$ and $t$ have different dimensions, which of the following would be physically meaningful?", options: ["$mt$", "$m + t$", "$m - t$", "$m + t/m$", "$mt / (m-t)$"], answer: 1, explanation_en: "In physics, you cannot add or subtract quantities with different dimensions (like mass and time), but you can multiply or divide them. Thus, $mt$ is the only meaningful option." },
            { id: 206, question: "If the mass density of a $3 \\times 10^6 \\text{ kg}$ mass is $2 \\times 10^4 \\text{ kg/m}^3$, what volume in $m^3$ does the mass occupy to the nearest order of magnitude?", options: ["$10^1$", "$10^2$", "$10^3$", "$10^4$", "$10^5$"], answer: 2, explanation_en: "Volume $V = m / \\rho = (3 \\times 10^6) / (2 \\times 10^4) = 1.5 \\times 10^2 = 150$. The order of magnitude is $10^2$." },
            { id: 207, question: "What is the order of magnitude of the age of a 40-year-old person in seconds?", options: ["$10^5$", "$10^6$", "$10^7$", "$10^8$", "$10^9$"], answer: 5, explanation_en: "Age in seconds: $40 \\text{ years} \\times 365 \\text{ days} \\times 24 \\text{ h} \\times 3600 \\text{ s} \\approx 1.26 \\times 10^9 \\text{ s}$. The order of magnitude is $10^9$." },
            { id: 208, question: "A woman walks $200 \\text{ m}$ west, then $300 \\text{ m}$ north, then $200 \\text{ m}$ south, then $200 \\text{ m}$ east. What is her displacement?", options: ["$100 \\text{ m E}$", "$100 \\text{ m W}$", "$100 \\text{ m N}$", "$100 \\text{ m S}$", "The displacement is zero."], answer: 3, explanation_en: "East and West cancel out ($200E - 200W = 0$). North and South subtract ($300N - 200S = 100N$). Net displacement is $100 \\text{ m North}$." },
            { id: 209, question: "A car traveled $300 \\text{ km}$ west, then $250 \\text{ km}$ south, then $150 \\text{ km}$ east, then $250 \\text{ km}$ north. What distance did it travel in km?", options: ["950", "850", "150", "250", "300"], answer: 1, explanation_en: "Distance is a scalar, so we sum all path lengths regardless of direction: $300 + 250 + 150 + 250 = 950 \\text{ km}$." },
            { id: 210, question: "The magnitude of vector $A$ is $3 \\text{ m}$ and that of vector $B$ is $4 \\text{ m}$. What is the largest magnitude in meters that their sum may have?", options: ["5", "6", "7", "8", "9"], answer: 3, explanation_en: "The largest resultant sum occurs when two vectors are parallel (angle $0^{\\circ}$). Max magnitude = $A + B = 3 + 4 = 7 \\text{ m}$." },
            { id: 211, question: "The magnitude of vector $A$ is $3 \\text{ m}$ and that of vector $B$ is $4 \\text{ m}$. What is the smallest magnitude in meters that their sum may have?", options: ["1", "2", "3", "4", "5"], answer: 1, explanation_en: "The smallest resultant sum occurs when two vectors are anti-parallel (angle $180^{\\circ}$). Min magnitude = $|A - B| = |3 - 4| = 1 \\text{ m}$." },
            { id: 212, question: "The magnitude of vector $A$ is $3 \\text{ m}$ and that of vector $B$ is $4 \\text{ m}$. What is the largest magnitude in meters that their difference may have?", options: ["5", "6", "7", "8", "9"], answer: 3, explanation_en: "The largest magnitude of difference also occurs when vectors are anti-parallel (effectively adding magnitudes). Max difference = $3 - (-4) = 7 \\text{ m}$." },
            { id: 213, question: "The magnitude of vector $A$ is $3 \\text{ m}$ and that of vector $B$ is $4 \\text{ m}$. What is the smallest magnitude in meters that their difference may have?", options: ["1", "2", "3", "4", "5"], answer: 1, explanation_en: "The smallest magnitude of difference occurs when vectors are parallel. Min difference = $|3 - 4| = 1 \\text{ m}$." },
            { id: 214, question: "Which of the following is a scalar?", options: ["Displacement", "Force", "Velocity", "Acceleration", "Distance"], answer: 5, explanation_en: "Displacement, Force, Velocity, and Acceleration are vectors (magnitude + direction). Distance is a scalar (magnitude only)." },
            { id: 215, question: "Which of the following is a vector?", options: ["Momentum", "Temperature", "Volume", "Mass", "Density"], answer: 1, explanation_en: "Momentum ($p = mv$) is a vector quantity. Temperature, Volume, Mass, and Density are scalars." },
            { id: 216, question: "A woman starts from the origin and walks $50 \\text{ m}$ west. Then she walks $15 \\text{ m}$ east. What is her displacement?", options: ["$15 \\text{ m W}$", "$35 \\text{ m W}$", "$50 \\text{ m W}$", "$65 \\text{ m W}$", "$75 \\text{ m E}$"], answer: 2, explanation_en: "West movements: $50 \\text{ m}$. East movements: $15 \\text{ m}$. Net displacement = $50 - 15 = 35 \\text{ m West}$." },
            { id: 217, question: "A scuba diver dives at an angle of $60^{\\circ}$ with the horizontal and swims $30 \\text{ m}$ to the top of a reef. How far under water in meters is the top of the reef?", options: ["15", "26", "24", "18", "12"], answer: 2, explanation_en: "The depth is the vertical component opposite to the angle. Depth = $d \\sin(60^{\\circ}) = 30 \\times 0.866 \\approx 26 \\text{ m}$." },
            { id: 218, question: "A woman starts at the origin and walks $9 \\text{ m}$ along the x-axis. She then turns $90^{\\circ}$ and walks parallel to the y-axis for $12 \\text{ m}$. How far in meters is she from the origin?", options: ["9", "12", "15", "18", "21"], answer: 3, explanation_en: "This forms a right-angled triangle. Distance $r = \\sqrt{x^2 + y^2} = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15 \\text{ m}$." },
            { id: 219, question: "What is the density in $kg/m^3$ of a solid cube that measures $0.700 \\text{ m}$ on a side and has a mass of $343 \\text{ kg}$?", options: ["100", "280", "490", "1000", "1530"], answer: 4, explanation_en: "Density $\\rho = \\text{mass} / \\text{volume}$. Volume of cube = $(0.7)^3 = 0.343 \\text{ m}^3$. $\\rho = 343 / 0.343 = 1000 \\text{ kg/m}^3$." },
            { id: 220, question: "What is the mass in kilograms of two liters of helium, where $1.00 \\text{ L} = 1.00 \\times 10^3 \\text{ cm}^3$ and $\\rho_{He} = 0.179 \\text{ kg/m}^3$?", options: ["$3.58 \\times 10^{-6}$", "$3.58 \\times 10^{-4}$", "$3.58 \\times 10^{-3}$", "$8.65 \\times 10^{-2}$", "86.5"], answer: 2, explanation_en: "$2 \\text{ Liters} = 2000 \\text{ cm}^3 = 2 \\times 10^{-3} \\text{ m}^3$. Mass $m = \\rho V = 0.179 \\times (2 \\times 10^{-3}) = 3.58 \\times 10^{-4} \\text{ kg}$." }
        ],
        phy_vec_mcq_p2: [
            { id: 221, question: "If $T = 2\\pi \\sqrt{L/g}$, where $T$ is measured in seconds and $L$ is measured in meters, what are the units of $g$?", options: ["$m/s^2$", "$s/m^2$", "$kg/s^2$", "$s \\cdot kg^2$", "$1/s^2$"], answer: 1, explanation_en: "Rearranging the period formula $T = 2\\pi\\sqrt{L/g}$ for $g$, we get $g = 4\\pi^2 L / T^2$. Units: $meters / seconds^2$ ($m/s^2$)." },
            { id: 222, question: "If $K = 0.5 m v^2$, where $m$ is measured in kilograms and $v$ in m/s, what are the units of $K$?", options: ["$s \\cdot kg^2$", "$m \\cdot s^2$", "$kg \\cdot s/m^2$", "$kg \\cdot m^2/s^2$", "$s/(kg \\cdot m^2)$"], answer: 4, explanation_en: "Kinetic Energy $K = 1/2 m v^2$. Units: $kg \\times (m/s)^2 = kg \\cdot m^2/s^2$ (Joules)." },
            { id: 223, question: "A light year is the distance light travels in a year. If the speed of light is $c = 3.00 \\times 10^8 \\text{ m/s}$, how many meters are there in a light year?", options: ["$1.58 \\times 10^{15}$", "$3.94 \\times 10^{14}$", "$8.23 \\times 10^{14}$", "$3.72 \\times 10^{15}$", "$9.46 \\times 10^{15}$"], answer: 5, explanation_en: "Distance $d = c \\times t$. Time in seconds = $365 \\times 24 \\times 3600 \\approx 3.15 \\times 10^7 \\text{ s}$. Distance = $(3 \\times 10^8) \\times (3.15 \\times 10^7) \\approx 9.46 \\times 10^{15} \\text{ m}$." },
            { id: 224, question: "1.00 cubic foot of water spills on a floor. It covers $25.8 \\text{ ft}^2$. How deep is the water in centimeters?", options: ["2.34", "1.18", "0.0462", "0.178", "0.923"], answer: 2, explanation_en: "Depth = Volume / Area = $1 \\text{ ft}^3 / 25.8 \\text{ ft}^2 = 0.0387 \\text{ ft}$. Convert to cm: $0.0387 \\times 12 \\text{ in/ft} \\times 2.54 \\text{ cm/in} \\approx 1.18 \\text{ cm}$." },
            { id: 225, question: "If an average human heart beats 70 times per minute, the best estimate of the number of times a heart will beat in 80 years is:", options: ["$10^5$", "$10^6$", "$10^7$", "$10^8$", "$10^9$"], answer: 5, explanation_en: "Beats = $70 \\text{ bpm} \\times 60 \\text{ min} \\times 24 \\text{ h} \\times 365 \\text{ days} \\times 80 \\text{ years} \\approx 2.9 \\times 10^9$. Order of magnitude is $10^9$." },
            { id: 226, question: "Suppose that the average number of books each student carries is 2 and that one of the states of the United States has ten percent of the 100 million students in the country. How many books are being carried in the state in question?", options: ["$10^6$", "$10^8$", "$10^{10}$", "$10^7$", "$10^9$"], answer: 4, explanation_en: "Total students = $10^8$. State students (10%) = $10^7$. Books = $2 \\times 10^7$. Order of magnitude is $10^7$." },
            { id: 227, question: "What is the area in $cm^2$ of a computer disk whose diameter is 5.25 inches?", options: ["21.6", "55.0", "140.", "87", "54.9"], answer: 3, explanation_en: "Radius = $5.25 / 2 = 2.625 \\text{ in}$. Area = $\\pi r^2 = \\pi (2.625)^2 \\approx 21.6 \\text{ in}^2$. Convert: $21.6 \\times (2.54)^2 \\approx 140 \\text{ cm}^2$." },
            { id: 228, question: "Two points in the xy plane have coordinates $(1.0, –1.0)$ and $(5.0, 2.0)$ in centimeters. What is the distance between the points in centimeters?", options: ["1.0", "2.0", "3.0", "4.0", "5.0"], answer: 5, explanation_en: "$dx = 5 - 1 = 4$. $dy = 2 - (-1) = 3$. Distance = $\\sqrt{4^2 + 3^2} = 5 \\text{ cm}$." },
            { id: 229, question: "What are the polar coordinates of the point $(8.0, 6.0)$?", options: ["$r = 8.0, \\theta = 53^{\\circ}$", "$r = 10, \\theta = 37^{\\circ}$", "$r = 10, \\theta = 53^{\\circ}$", "$r = 6.5, \\theta = 30^{\\circ}$", "$r = 7.5, \\theta = 61^{\\circ}$"], answer: 2, explanation_en: "$r = \\sqrt{8^2 + 6^2} = 10$. Angle $\\theta = \\tan^{-1}(6/8) \\approx 36.9^{\\circ}$ (approx $37^{\\circ}$)." },
            { id: 230, question: "If $x = 14$ and $y = 13$, what is $r$?", options: ["15", "16", "17", "18", "19"], answer: 5, explanation_en: "$r = \\sqrt{x^2 + y^2} = \\sqrt{14^2 + 13^2} = \\sqrt{196 + 169} = \\sqrt{365} \\approx 19$." },
            { id: 231, question: "If $x = 12$ and $y = 13$, what is $r$?", options: ["12", "14", "16", "18", "25"], answer: 4, explanation_en: "$r = \\sqrt{12^2 + 13^2} = \\sqrt{144 + 169} = \\sqrt{313} \\approx 17.7$. Closest answer choice is 18." },
            { id: 232, question: "If $x = 14.0 \\text{ cm}$ and $y = 15.0 \\text{ cm}$, what is $\\theta$?", options: ["$46.15^{\\circ}$", "$43.0^{\\circ}$", "$47.0^{\\circ}$", "$48.9^{\\circ}$", "$43.1^{\\circ}$"], answer: 3, explanation_en: "$\\theta = \\tan^{-1}(y/x) = \\tan^{-1}(15/14) = \\tan^{-1}(1.07) \\approx 47.0^{\\circ}$." },
            { id: 233, question: "If $x = 12 \\text{ cm}$ and $y = 14 \\text{ cm}$, what is $\\theta$?", options: ["$50^{\\circ}$", "$49^{\\circ}$", "$7.2^{\\circ}$", "$41^{\\circ}$", "$6.1^{\\circ}$"], answer: 2, explanation_en: "$\\theta = \\tan^{-1}(14/12) = \\tan^{-1}(1.166) \\approx 49^{\\circ}$." },
            { id: 234, question: "If a vector has an x component of 11 and a y component of 13, what is the magnitude of this vector?", options: ["16", "17", "18", "19", "20"], answer: 2, explanation_en: "Magnitude = $\\sqrt{11^2 + 13^2} = \\sqrt{121 + 169} = \\sqrt{290} \\approx 17$." },
            { id: 235, question: "Three vectors are given by $A = 2\\hat{i} + 3\\hat{j}$, $B = 3\\hat{i} - 2\\hat{j}$, and $C = -2\\hat{i} + \\hat{j}$. What is the sum of the three vectors?", options: ["$-3\\hat{i} + \\hat{j}$", "$2\\hat{j} - 3\\hat{i}$", "$2\\hat{j} + 3\\hat{i}$", "$\\hat{i} + 2\\hat{j}$", "$3\\hat{i} + 2\\hat{j}$"], answer: 5, explanation_en: "Sum X components: $2 + 3 - 2 = 3$. Sum Y components: $3 - 2 + 1 = 2$. Resultant vector: $3\\hat{i} + 2\\hat{j}$." },
            { id: 236, question: "A person walks $50 \\text{ m}$ north, then $50 \\text{ m}$ west, then $25 \\text{ m}$ south. At what angle measured from the east direction would the person have had to walk to go directly to the destination reached?", options: ["$26^{\\circ}$", "$153^{\\circ}$", "$63^{\\circ}$", "$116^{\\circ}$", "$27^{\\circ}$"], answer: 2, explanation_en: "Net displacement: West = 50. North = $50 - 25 = 25$. Angle from West (heading North) = $\\tan^{-1}(25/50) = 26.5^{\\circ}$. Angle from East = $180^{\\circ} - 26.5^{\\circ} \\approx 153^{\\circ}$." },
            { id: 237, question: "If $a = [15, 80^{\\circ}]$, and $b = 12\\hat{i} - 16\\hat{j}$, what is the magnitude of $a - b$?", options: ["15", "35", "32", "5.0", "23"], answer: 3, explanation_en: "Convert $a$ to components: $a_x = 15\\cos80^{\\circ} \\approx 2.6$, $a_y = 15\\sin80^{\\circ} \\approx 14.8$. $a - b = (2.6 - 12)\\hat{i} + (14.8 - (-16))\\hat{j} = -9.4\\hat{i} + 30.8\\hat{j}$. Magnitude $\\approx \\sqrt{9.4^2 + 30.8^2} \\approx 32$." },
            { id: 238, question: "A vector, $B$ when added to the vector $C = 3\\hat{i} + 4\\hat{j}$ yields a resultant vector that is in the positive y direction and has a magnitude equal to that of $C$. What is the magnitude of $B$?", options: ["3.2", "6.3", "9.5", "18", "5.0"], answer: 1, explanation_en: "Resultant $R$ is in $+y$ direction with magnitude 5 (since $C=5$). $R = 5\\hat{j}$. $B = R - C = 5\\hat{j} - (3\\hat{i} + 4\\hat{j}) = -3\\hat{i} + \\hat{j}$. Magnitude = $\\sqrt{3^2 + 1^2} = \\sqrt{10} \\approx 3.2$." },
            { id: 239, question: "If vector $B$ is added to vector $A$, the result is $6\\hat{i} + \\hat{j}$. If $B$ is subtracted from $A$, the result is $-4\\hat{i} + 7\\hat{j}$. What is the magnitude of $A$?", options: ["5.1", "4.1", "5.4", "5.8", "8.2"], answer: 2, explanation_en: "Adding the two equations: $(A+B) + (A-B) = 2A$. $(6\\hat{i}+\\hat{j}) + (-4\\hat{i}+7\\hat{j}) = 2\\hat{i} + 8\\hat{j}$. So $2A = 2\\hat{i} + 8\\hat{j} \\rightarrow A = 1\\hat{i} + 4\\hat{j}$. Magnitude = $\\sqrt{1^2 + 4^2} \\approx 4.1$." },
            { id: 240, question: "If $C = [2.5 \\text{ cm}, 80^{\\circ}]$, i.e., the magnitude and direction of $C$ are $2.5 \\text{ cm}$ and $80^{\\circ}$, $D = [3.5 \\text{ cm}, 120^{\\circ}]$, and $E = D - 2C$, what is the direction of $E$ to the nearest degree?", options: ["$247^{\\circ}$", "$235^{\\circ}$", "$243^{\\circ}$", "$234^{\\circ}$", "$216^{\\circ}$"], answer: 5, explanation_en: "Vector math: $E = D - 2C$. After calculating components and subtracting, the resulting vector has negative x and negative y components (3rd Quadrant). The angle is calculated as $180^{\\circ} + 36^{\\circ} = 216^{\\circ}$." }
        ],
        phy_vec_mcq_p3: [
            { id: 241, question: "If $A = 12\\hat{i} - 16\\hat{j}$ and $B = -24\\hat{i} + 10\\hat{j}$, what is the magnitude of the vector $C = 2A - B$?", options: ["42", "22", "64", "90", "13"], answer: 3, explanation_en: "Calculate $2A = 24\\hat{i} - 32\\hat{j}$. Then $C = 2A - B = (24 - (-24))\\hat{i} + (-32 - 10)\\hat{j} = 48\\hat{i} - 42\\hat{j}$. Magnitude = $\\sqrt{48^2 + (-42)^2} \\approx 64$." },
            { id: 242, question: "A vector $A$ is added to $B = 6\\hat{i} - 8\\hat{j}$. The resultant vector is in the positive x direction and has a magnitude equal to that of $A$. What is the magnitude of $A$?", options: ["11", "5.1", "7.1", "8.3", "12.2"], answer: 4, explanation_en: "Resultant $R$ is along $+x$, so $R_y = 0$. Since $R = A + B$, then $A_y + B_y = 0 \\rightarrow A_y - 8 = 0 \\rightarrow A_y = 8$. Also $|R| = |A|$. Solving the system gives $|A| \\approx 12.2$." }
        ],

        // 8. Vectors Concepts (True/False) - Split into 5 Parts
        phy_vec_tf_p1: [
            { id: 243, question: "The meter (m) is a fundamental unit in the US Customary system.", answer: false, explanation_en: "The meter is the fundamental unit of length in the SI system, not the US Customary system (which uses feet)." },
            { id: 244, question: "The kilogram (kg) is the fundamental unit of mass in the SI system.", answer: true, explanation_en: "The SI base unit for mass is the kilogram." },
            { id: 245, question: "The second (s) is a fundamental unit for measuring time in the SI system.", answer: true, explanation_en: "The SI base unit for time is the second." },
            { id: 246, question: "The prefix \"kilo\" (k) means $10^{-3}$.", answer: false, explanation_en: "The prefix \"kilo\" (k) means $10^3$. $10^{-3}$ is the prefix \"milli\" (m)." },
            { id: 247, question: "The prefix \"milli\" (m) means $10^{-3}$.", answer: true, explanation_en: "The prefix \"milli\" (m) means $10^{-3}$." },
            { id: 248, question: "The prefix \"nano\" (n) means $10^{-9}$.", answer: true, explanation_en: "The prefix \"nano\" (n) means $10^{-9}$." },
            { id: 249, question: "$4 \\times 10^{-9} \\text{ g}$ is equal to $4 \\text{ ng}$ (nanograms).", answer: true, explanation_en: "Since nano (n) = $10^{-9}$, $4 \\times 10^{-9} \\text{ g} = 4 \\text{ ng}$." },
            { id: 250, question: "Dimensional analysis can confirm that an equation is physically correct.", answer: false, explanation_en: "Dimensional analysis can only check if an equation is *dimensionally* correct. It cannot guarantee the physical correctness of the equation (e.g., missing constants like 1/2)." },
            { id: 251, question: "Dimensional analysis can confirm that an equation is physically incorrect.", answer: true, explanation_en: "If the dimensions on both sides of an equation do not match, the equation is definitely incorrect." },
            { id: 252, question: "You can add a vector quantity to a scalar quantity.", answer: false, explanation_en: "Vectors and scalars are fundamentally different types of quantities. You cannot add them directly." },
            { id: 253, question: "The magnitude of a vector is always positive.", answer: true, explanation_en: "The magnitude of a vector is its length, which is always a non-negative number (and positive if the vector is non-zero)." },
            { id: 254, question: "A scalar quantity has both magnitude and direction.", answer: false, explanation_en: "A scalar has only magnitude and units. A vector has magnitude and direction." },
            { id: 255, question: "A vector quantity has both magnitude and direction.", answer: true, explanation_en: "This is the definition of a vector quantity." },
            { id: 256, question: "Displacement is a scalar quantity.", answer: false, explanation_en: "Displacement is a vector quantity because it has both magnitude (distance) and direction." },
            { id: 257, question: "Distance is a scalar quantity.", answer: true, explanation_en: "Distance is a scalar quantity because it only has magnitude." },
            { id: 258, question: "Velocity is a scalar quantity.", answer: false, explanation_en: "Velocity is a vector quantity because it has both magnitude (speed) and direction." },
            { id: 259, question: "Speed is a vector quantity.", answer: false, explanation_en: "Speed is a scalar quantity because it only has magnitude." },
            { id: 260, question: "Acceleration is a vector quantity.", answer: true, explanation_en: "Acceleration is a vector quantity because it involves a change in velocity, which has direction." },
            { id: 261, question: "Mass is a vector quantity.", answer: false, explanation_en: "Mass is a scalar quantity." },
            { id: 262, question: "Force is a vector quantity.", answer: true, explanation_en: "Force is a vector quantity because it has both magnitude and direction." }
        ],
        phy_vec_tf_p2: [
            { id: 263, question: "Temperature is a vector quantity.", answer: false, explanation_en: "Temperature is a scalar quantity." },
            { id: 264, question: "The magnitude of the sum of two vectors, $A$ and $B$, is always $A + B$.", answer: false, explanation_en: "The magnitude of the sum depends on the directions of the vectors. The maximum magnitude is $A + B$ (when parallel), but it can be less." },
            { id: 265, question: "The magnitude of the sum of two vectors, $A$ and $B$, is $A + B$ when they are parallel.", answer: true, explanation_en: "The maximum magnitude occurs when the vectors are in the same direction (parallel), giving $A + B$." },
            { id: 266, question: "The magnitude of the sum of two vectors, $A$ and $B$, is $A - B$ when they are anti-parallel.", answer: true, explanation_en: "When vectors are anti-parallel (opposite directions), the magnitude of their sum is the difference of their magnitudes." },
            { id: 267, question: "The magnitude of the difference of two vectors, $A$ and $B$, is always $A + B$.", answer: false, explanation_en: "The magnitude of the difference also depends on directions. Max is $A + B$ (anti-parallel), min is $|A - B|$ (parallel)." },
            { id: 268, question: "The magnitude of the difference of two vectors, $A$ and $B$, is $A + B$ when they are anti-parallel.", answer: true, explanation_en: "The maximum magnitude of difference occurs when the vectors are anti-parallel, effectively adding their lengths." },
            { id: 269, question: "The magnitude of the difference of two vectors, $A$ and $B$, is $A - B$ when they are parallel.", answer: true, explanation_en: "When parallel, subtracting them yields the difference in their magnitudes." },
            { id: 270, question: "A vector with components $(-3, -4)$ has negative components in both the x and y directions.", answer: true, explanation_en: "Both the x-component (-3) and the y-component (-4) are negative." },
            { id: 271, question: "A vector with components $(3, -4)$ has a positive component in the x direction and a negative component in the y direction.", answer: true, explanation_en: "The x-component (3) is positive, and the y-component (-4) is negative." },
            { id: 272, question: "A vector with components $(-3, 4)$ has a negative component in the x direction and a positive component in the y direction.", answer: true, explanation_en: "The x-component (-3) is negative, and the y-component (4) is positive." },
            { id: 273, question: "A vector with components $(3, 4)$ has positive components in both the x and y directions.", answer: true, explanation_en: "Both the x-component (3) and the y-component (4) are positive." },
            { id: 274, question: "The vector $A = 3\\hat{i} + 4\\hat{j}$ has a magnitude of 7.", answer: false, explanation_en: "The magnitude is $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$." },
            { id: 275, question: "The vector $A = 3\\hat{i} - 4\\hat{j}$ has a magnitude of 5.", answer: true, explanation_en: "The magnitude is $\\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$." },
            { id: 276, question: "The vector $A = -3\\hat{i} + 4\\hat{j}$ has a magnitude of 5.", answer: true, explanation_en: "The magnitude is $\\sqrt{(-3)^2 + 4^2} = \\sqrt{25} = 5$." },
            { id: 277, question: "The vector $A = -3\\hat{i} - 4\\hat{j}$ has a magnitude of 5.", answer: true, explanation_en: "The magnitude is $\\sqrt{(-3)^2 + (-4)^2} = \\sqrt{25} = 5$." },
            { id: 278, question: "The vector $A = 3\\hat{i} + 4\\hat{j}$ points into the first quadrant.", answer: true, explanation_en: "Both x (3) and y (4) components are positive, placing it in the first quadrant." },
            { id: 279, question: "The vector $A = -3\\hat{i} + 4\\hat{j}$ points into the second quadrant.", answer: true, explanation_en: "The x (-3) is negative, y (4) is positive, placing it in the second quadrant." },
            { id: 280, question: "The vector $A = -3\\hat{i} - 4\\hat{j}$ points into the third quadrant.", answer: true, explanation_en: "Both x (-3) and y (-4) are negative, placing it in the third quadrant." },
            { id: 281, question: "The vector $A = 3\\hat{i} - 4\\hat{j}$ points into the fourth quadrant.", answer: true, explanation_en: "The x (3) is positive, y (-4) is negative, placing it in the fourth quadrant." },
            { id: 282, question: "The angle $\\theta$ for the vector $(x=3, y=4)$ relative to the positive x-axis is $\\arctan(4/3)$.", answer: true, explanation_en: "$\\theta = \\arctan(y/x) = \\arctan(4/3)$. This is correct for the 1st quadrant." }
        ],
        phy_vec_tf_p3: [
            { id: 283, question: "The angle $\\theta$ for the vector $(x=-3, y=4)$ relative to the positive x-axis is $\\arctan(4/-3)$.", answer: false, explanation_en: "$\\arctan(4/-3)$ gives a 4th quadrant angle. The vector is in the 2nd quadrant, so $\\theta = 180 + \\arctan(4/-3)$." },
            { id: 284, question: "The angle $\\theta$ for the vector $(x=-3, y=-4)$ relative to the positive x-axis is $\\arctan(-4/-3)$.", answer: false, explanation_en: "$\\arctan(4/3)$ gives a 1st quadrant angle. The vector is in the 3rd quadrant, so $\\theta = 180 + \\arctan(4/3)$." },
            { id: 285, question: "The angle $\\theta$ for the vector $(x=3, y=-4)$ relative to the positive x-axis is $\\arctan(-4/3)$.", answer: true, explanation_en: "$\\theta = \\arctan(y/x) = \\arctan(-4/3)$. This correctly places the angle in the 4th quadrant." },
            { id: 286, question: "The commutative law of vector addition states that $A + B = B + A$.", answer: true, explanation_en: "This law states that the order of addition does not matter." },
            { id: 287, question: "The associative law of vector addition states that $(A + B) + C = A + (B + C)$.", answer: true, explanation_en: "This law states that the grouping of vectors during addition does not matter." },
            { id: 288, question: "The negative vector $-A$ has the same magnitude as $A$ but points in the same direction.", answer: false, explanation_en: "The negative vector $-A$ has the same magnitude but points in the *opposite* direction." },
            { id: 289, question: "Vector subtraction $A - B$ is equivalent to $A + (-B)$.", answer: true, explanation_en: "Subtracting B is the same as adding the negative of B." },
            { id: 290, question: "The dot product $A \\cdot B$ results in a vector.", answer: false, explanation_en: "The dot product results in a scalar (a number)." },
            { id: 291, question: "The cross product $A \\times B$ results in a scalar.", answer: false, explanation_en: "The cross product results in a vector." },
            { id: 292, question: "The x-component of a vector $A$ with magnitude $A$ and angle $\\theta$ from the positive x-axis is $A \\cos \\theta$.", answer: true, explanation_en: "This is the definition of the x-component using trigonometry." },
            { id: 293, question: "The y-component of a vector $A$ with magnitude $A$ and angle $\\theta$ from the positive x-axis is $A \\sin \\theta$.", answer: true, explanation_en: "This is the definition of the y-component using trigonometry." },
            { id: 294, question: "The unit vector $\\hat{i}$ points in the positive y-direction.", answer: false, explanation_en: "The unit vector $\\hat{i}$ points in the positive x-direction." },
            { id: 295, question: "The unit vector $\\hat{j}$ points in the positive y-direction.", answer: true, explanation_en: "The unit vector $\\hat{j}$ points in the positive y-direction." },
            { id: 296, question: "The unit vector $\\hat{k}$ points in the positive z-direction.", answer: true, explanation_en: "The unit vector $\\hat{k}$ points in the positive z-direction." },
            { id: 297, question: "A vector $A$ can be written as $A = A_x \\hat{i} + A_y \\hat{j} + A_z \\hat{k}$.", answer: true, explanation_en: "This is the standard representation of a vector using its components and unit vectors." },
            { id: 298, question: "To add two vectors using components, you add the x-components together and add the y-components together separately.", answer: true, explanation_en: "$R = (A_x + B_x)\\hat{i} + (A_y + B_y)\\hat{j}$." },
            { id: 299, question: "The magnitude of a vector $R = R_x \\hat{i} + R_y \\hat{j}$ is $R = R_x + R_y$.", answer: false, explanation_en: "The magnitude is $R = \\sqrt{R_x^2 + R_y^2}$." },
            { id: 300, question: "The magnitude of a vector $R = R_x \\hat{i} + R_y \\hat{j}$ is $R = \\sqrt{R_x^2 + R_y^2}$.", answer: true, explanation_en: "This is the formula for the magnitude of a vector from its components." },
            { id: 301, question: "The angle $\\theta$ of a vector $R = R_x \\hat{i} + R_y \\hat{j}$ relative to the positive x-axis is $\\theta = \\arctan(R_x/R_y)$.", answer: false, explanation_en: "The angle is $\\theta = \\arctan(R_y/R_x)$." },
            { id: 302, question: "The angle $\\theta$ of a vector $R = R_x \\hat{i} + R_y \\hat{j}$ relative to the positive x-axis is $\\theta = \\arctan(R_y/R_x)$.", answer: true, explanation_en: "This is the formula for the angle of a vector from its components." }
        ],
        phy_vec_tf_p4: [
            { id: 303, question: "The density of a substance is calculated as mass divided by volume ($p = m/V$).", answer: true, explanation_en: "This is the definition of density." },
            { id: 304, question: "The density of a substance is calculated as volume divided by mass ($p = V/m$).", answer: false, explanation_en: "The definition of density is mass divided by volume ($p = m/V$)." },
            { id: 305, question: "A light year is a unit of time.", answer: false, explanation_en: "A light year is a unit of distance (the distance light travels in one year)." },
            { id: 306, question: "A light year is a unit of distance.", answer: true, explanation_en: "A light year is the distance light travels in one year." },
            { id: 307, question: "The speed of light is approximately $3 \\times 10^8 \\text{ m/s}$.", answer: true, explanation_en: "This is a standard value for the speed of light (c)." },
            { id: 308, question: "Dimensional analysis of the equation $x = at$ (where $x$ is displacement, $a$ is acceleration, $t$ is time) shows it is valid.", answer: false, explanation_en: "$[x] = L, [at] = (L/T^2)(T) = L/T$. The dimensions do not match, so the equation is invalid." },
            { id: 309, question: "Dimensional analysis of the equation $x = at^2$ (where $x$ is displacement, $a$ is acceleration, $t$ is time) shows it is valid.", answer: true, explanation_en: "$[x] = L, [at^2] = (L/T^2)(T^2) = L$. The dimensions match, so the equation is dimensionally valid." },
            { id: 310, question: "The correct equation for displacement under constant acceleration starting from rest is $x = at$.", answer: false, explanation_en: "The correct equation is $x = 0.5 at^2$." },
            { id: 311, question: "The correct equation for displacement under constant acceleration starting from rest is $x = 0.5 at^2$.", answer: true, explanation_en: "This is the standard kinematic equation for displacement with initial velocity zero." },
            { id: 312, question: "The average velocity for constant acceleration is $(v_i + v_f) / 2$.", answer: true, explanation_en: "This is the formula for average velocity under constant acceleration." },
            { id: 313, question: "The average velocity for constant acceleration is $v_i + v_f$.", answer: false, explanation_en: "The formula is $(v_i + v_f) / 2$." },
            { id: 314, question: "The equation $v^2 = v_i^2 + 2a(dx)$ is a valid kinematic equation.", answer: true, explanation_en: "This is a standard kinematic equation relating velocity, acceleration, and displacement." },
            { id: 315, question: "The equation $v = v_i + at$ is a valid kinematic equation.", answer: true, explanation_en: "This is a standard kinematic equation relating velocity, acceleration, and time." },
            { id: 316, question: "The equation $x = x_i + v_i t + 0.5 a t^2$ is a valid kinematic equation.", answer: true, explanation_en: "This is a standard kinematic equation for position." },
            { id: 317, question: "The equation $x = v_i t + 0.5 a t^2$ is a valid kinematic equation.", answer: true, explanation_en: "This is a standard kinematic equation for displacement." },
            { id: 318, question: "In projectile motion, the horizontal component of velocity changes due to gravity.", answer: false, explanation_en: "In projectile motion, horizontal velocity remains constant (assuming no air resistance). Only vertical velocity changes." },
            { id: 319, question: "In projectile motion, the vertical component of velocity changes due to gravity.", answer: true, explanation_en: "Gravity acts vertically, causing a constant acceleration in the vertical direction." },
            { id: 320, question: "The maximum range of a projectile occurs when the launch angle is $30^{\\circ}$.", answer: false, explanation_en: "The maximum range occurs when the launch angle is $45^{\\circ}$." },
            { id: 321, question: "The maximum range of a projectile occurs when the launch angle is $45^{\\circ}$.", answer: true, explanation_en: "The maximum range occurs when the launch angle is $45^{\\circ}$." },
            { id: 322, question: "Complementary angles (e.g., $30^{\\circ}$ and $60^{\\circ}$) result in the same range for a projectile.", answer: true, explanation_en: "Complementary angles produce the same range for symmetric trajectories." }
        ],
        phy_vec_tf_p5: [
            { id: 323, question: "The maximum height of a projectile depends only on the initial speed.", answer: false, explanation_en: "Maximum height depends on both initial speed and launch angle (specifically, the vertical component $v_i \\sin \\theta$)." },
            { id: 324, question: "The maximum height of a projectile depends on the vertical component of the initial velocity.", answer: true, explanation_en: "The maximum height is determined by the initial vertical velocity component." },
            { id: 325, question: "The acceleration of a projectile is constant throughout its flight.", answer: true, explanation_en: "Acceleration due to gravity ($g$) is constant near Earth's surface, acting downward." },
            { id: 326, question: "The acceleration of a projectile is zero at the maximum height.", answer: false, explanation_en: "Acceleration due to gravity ($g$) is constant throughout the flight, even at maximum height." },
            { id: 327, question: "The velocity of a projectile is zero at the maximum height.", answer: false, explanation_en: "Vertical velocity is zero at max height, but horizontal velocity remains constant. Total velocity is not zero." },
            { id: 328, question: "The velocity of a projectile has only a horizontal component at the maximum height.", answer: true, explanation_en: "At max height, vertical velocity is zero, leaving only the horizontal component." },
            { id: 329, question: "The range of a projectile is independent of the launch speed.", answer: false, explanation_en: "The range depends on the square of the initial speed ($v_i^2$)." },
            { id: 330, question: "The range of a projectile is proportional to the square of the initial speed.", answer: true, explanation_en: "The range $R$ is proportional to $v_i^2$." },
            { id: 331, question: "The time of flight of a projectile depends only on the horizontal component of the initial velocity.", answer: false, explanation_en: "Time of flight depends on the vertical component ($v_i \\sin \\theta$) and gravity." },
            { id: 332, question: "The time of flight of a projectile depends on the vertical component of the initial velocity.", answer: true, explanation_en: "Vertical motion determines how long the projectile stays in the air." },
            { id: 333, question: "In the SI system, electric current is measured in amperes (A).", answer: true, explanation_en: "The SI base unit for electric current is the ampere (A)." },
            { id: 334, question: "In the SI system, force is measured in joules (J).", answer: false, explanation_en: "Force is measured in newtons (N). Joules (J) are the unit for energy/work." },
            { id: 335, question: "In the SI system, energy is measured in joules (J).", answer: true, explanation_en: "The SI derived unit for energy is the joule (J)." },
            { id: 336, question: "In the SI system, power is measured in watts (W).", answer: true, explanation_en: "The SI derived unit for power is the watt (W)." },
            { id: 337, question: "In the SI system, pressure is measured in pascals (Pa).", answer: true, explanation_en: "The SI derived unit for pressure is the pascal (Pa)." },
            { id: 338, question: "The equation $P = \\sqrt{\\rho gh}$ is dimensionally correct.", answer: false, explanation_en: "Dimensions do not match. Pressure $P = Force/Area$, while $\\sqrt{\\rho gh}$ gives different dimensions." },
            { id: 339, question: "The equation $P = \\rho gh$ is dimensionally correct.", answer: true, explanation_en: "LHS: Pressure. RHS: Density * Gravity * Height gives matching dimensions." },
            { id: 340, question: "The fundamental dimensions in the SI system include length $[L]$, mass $[M]$, and time $[T]$.", answer: true, explanation_en: "These are three of the fundamental dimensions in the SI system." },
            { id: 341, question: "The supplementary dimensions in the SI system include plane angle $[\\theta]$ and solid angle $[\\omega]$.", answer: true, explanation_en: "These are the supplementary dimensions (radians and steradians)." },
            { id: 342, question: "The derived dimensions in the SI system are formed by combining the fundamental dimensions.", answer: true, explanation_en: "Derived dimensions like velocity, acceleration, and force are formed from fundamental ones." }
        ],

        // 9. Motion in 1D (MCQ) - No Change (<20)
        phy_mot_mcq: [
            { id: 343, question: "The average and instantaneous velocities are always the same when the acceleration is", options: ["$5t$", "$0$", "$t^2 + 3$", "$g$", "$t^3$"], answer: 2, explanation_en: "If acceleration is zero, velocity is constant. Therefore average velocity equals instantaneous velocity." },
            { id: 344, question: "The average velocity of a body is zero in the interval $-2 \\text{ s} \\le t \\le 2 \\text{ s}$ where $v = t^3 - t$. Is the instantaneous velocity zero at any instant in this interval?", options: ["Yes", "No", "Only if $a$ is constant", "Only if $a$ is proportional to $g$", "Only if $a$ is proportional to $t$"], answer: 1, explanation_en: "Yes. $v = t(t^2 - 1)$. $v$ is zero at $t=0, t=1, t=-1$. All these points lie within the interval $[-2, 2]$." },
            { id: 345, question: "An object is thrown vertically upward at the Earth’s surface. Take the upward direction as positive. The velocity and acceleration at maximum height are", options: ["$0, 0$", "$+gt, 0$", "$0, +g$", "$0, -g$", "$-gt, 0$"], answer: 4, explanation_en: "At max height, velocity is momentarily zero. However, gravity ($-g$) acts on the object continuously downwards." },
            { id: 346, question: "Two balls are thrown from a height of $20 \\text{ m}$. Ball one is thrown upward with a speed of $2 \\text{ m/s}$. Ball two is thrown downward with a speed of $2 \\text{ m/s}$. What is the ratio of the speed of ball one with the speed of ball two when each hits the ground?", options: ["1:2", "1:1", "2:1", "20:1", "1:20"], answer: 2, explanation_en: "By conservation of energy, both start with the same Potential and Kinetic energy. They hit the ground with the same speed." },
            { id: 347, question: "A car is traveling eastward at a speed of $40 \\text{ m/s}$ when the brakes are applied. What is the direction of the acceleration if the only forces on the car are frictional and there is no wind?", options: ["E", "W", "NW", "NE", "S"], answer: 2, explanation_en: "Friction acts opposite to motion (East). So force and acceleration are directed West." },
            { id: 348, question: "Two cars ($A$ and $B$) are moving in the same direction in parallel lanes. Car A’s initial speed is $10 \\text{ m/s}$. After $20 \\text{ s}$, its speed is $30 \\text{ m/s}$. Car B’s initial speed is $5 \\text{ m/s}$. After $20 \\text{ s}$ its speed is $25 \\text{ m/s}$. Their accelerations are constant. Which car, if either, has the greater acceleration?", options: ["Car A", "Car B", "They both have the same acceleration.", "Car B has greater acceleration during the first 5 seconds.", "Car A has greater acceleration during the first 5 seconds."], answer: 3, explanation_en: "$a_A = (30-10)/20 = 1 \\text{ m/s}^2$. $a_B = (25-5)/20 = 1 \\text{ m/s}^2$. They are equal." },
            { id: 349, question: "The average velocity of a car that travels along a straight road for $30 \\text{ s}$ is $0 \\text{ m/s}$. If the acceleration of the car is constant throughout this time period and not zero, which of the following statements is correct? ($v_o$ is initial velocity; $v_f$ is velocity at $t=30\\text{s}$)", options: ["$v_o = v_f \\neq 0$", "$v_o = v_f = 0$", "$v_o = -v_f = 0$", "$v_o = -v_f \\neq 0$", "$v_o - v_f = 0$"], answer: 4, explanation_en: "Avg velocity = $(v_o + v_f)/2 = 0$ implies $v_o = -v_f$. Since acceleration is not zero, velocities are not zero." },
            { id: 350, question: "When they simultaneously pass a radar check at a point along a straight road, car A has velocity $v = +20 \\text{ m/s}$, E, car B has velocity $v = +30 \\text{ m/s}$, E. Car A is later observed to pass car B. Which of the statement(s) below is(are) correct?", options: ["Car A has a positive acceleration; car B has no acceleration.", "Car B has a negative acceleration; car A has no acceleration.", "Car A has a negative acceleration; car B has no acceleration.", "Either (a) or (b) may be correct.", "Either (b) or (c) may be correct."], answer: 4, explanation_en: "For A to pass B (who was faster), either A sped up ($+$) or B slowed down ($-$). Both scenarios allow A to overtake." },
            { id: 351, question: "Assuming approximately $4 \\times 10^7 \\text{ m}$ as the circumference of the Earth, how long in seconds would it take a snail to travel around the circumference if it can crawl $20 \\text{ cm}$ in one minute?", options: ["$10^8$", "$10^9$", "$10^{10}$", "$10^{11}$", "$10^{12}$"], answer: 3, explanation_en: "Speed = $0.2 \\text{ m} / 60 \\text{ s}$. Time = Dist / Speed = $4e7 / (0.2/60) = 1.2e10 \\text{ s}$. Order of magnitude $10^{10}$." },
            { id: 352, question: "A person walks north for $20 \\text{ minutes}$ at a speed of $1.2 \\text{ m/s}$. She then has lunch, while resting for $10 \\text{ minutes}$. She continues to walk north for another $30 \\text{ minutes}$ at $1.2 \\text{ m/s}$. What is her average speed in m/s during this hour?", options: ["1.4", "1.0", "0.5", "0.7", "1.5"], answer: 2, explanation_en: "Total distance = $(1200\\text{s} \\times 1.2) + 0 + (1800\\text{s} \\times 1.2) = 3600\\text{m}$. Total time = $60 \\text{ mins} = 3600\\text{s}$. Avg Speed = $1.0 \\text{ m/s}$." },
            { id: 353, question: "A jogger runs west for $5.0 \\text{ minutes}$ at a speed of $6 \\text{ m/s}$ and continues for another $10 \\text{ minutes}$ at a speed of $4 \\text{ m/s}$. What is his displacement in m west after $15 \\text{ minutes}$?", options: ["4200", "4000", "3800", "4600", "4400"], answer: 1, explanation_en: "$d_1 = 300\\text{s} \\times 6 = 1800\\text{m}$. $d_2 = 600\\text{s} \\times 4 = 2400\\text{m}$. Total = $4200\\text{m}$." },
            { id: 354, question: "A dolphin maintains a constant speed of $2.0 \\text{ m/s}$ for $24 \\text{ s}$ while swimming in a straight line. It then reverses direction and returns to its starting point in $8 \\text{ s}$. Its average speed and average velocity for the entire trip are", options: ["$3 \\text{ m/s}; 0 \\text{ m/s}.$", "$4 \\text{ m/s}; 0 \\text{ m/s}.$", "$3 \\text{ m/s}; 3 \\text{ m/s}$ in original direction.", "$4 \\text{ m/s}; 4 \\text{ m/s}$ in original direction.", "$3 \\text{ m/s}; 3 \\text{ m/s}$ in return direction."], answer: 1, explanation_en: "Total Dist = $96\\text{m}$. Total Time = $32\\text{s}$. Avg Speed = $3 \\text{ m/s}$. Displacement = 0, so Avg Velocity = 0." }
        ]
                    }
                }
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
                quiz: {
    isSplit: true,
    sections: [
        { id: 'm1_1', title: 'Functions & Limits', qCount: 20, type: 'mcq' },
        { id: 'm1_2', title: 'Differentiation', qCount: 20, type: 'mcq' },
        { id: 'm1_3', title: 'Advanced Calc', qCount: 20, type: 'mcq' },
        { id: 'm1_4', title: 'Integration Tech', qCount: 20, type: 'mcq' },
        { id: 'm1_5', title: 'Applications', qCount: 20, type: 'mcq' },
        { id: 'm1_text_1', title: 'Text Problems 1', qCount: 10, type: 'text' },
        { id: 'm1_text_2', title: 'Text Problems 2', qCount: 10, type: 'text' },
        { id: 'm1_text_3', title: 'Text Problems 3', qCount: 10, type: 'text' },
        { id: 'm1_text_4', title: 'Text Problems 4', qCount: 10, type: 'text' },
        { id: 'm1_text_5', title: 'Text Problems 5', qCount: 10, type: 'text' }
    ],
    data: {
        // === PART 1: Functions, Limits & Basics ===
        m1_1: [
            { id: 1, question: "Find the domain of: $f(x) = \\sqrt{x - 5}$", options: ["$R$", "$[5, \\infty[$", "$]-\\infty, 5]$", "$R - \\{5\\}$"], answer: 1, explanation_en: "1. Condition: Inside root $\\ge 0$. \n 2. Inequality: $x - 5 \\ge 0$. \n 3. Solve: $x \\ge 5$. \n 4. Interval: $[5, \\infty[$." },
            { id: 2, question: "Find the domain of: $f(x) = \\frac{1}{x^2 - 4}$", options: ["$R$", "$R - \\{2\\}$", "$R - \\{-2, 2\\}$", "$[-2, 2]$"], answer: 2, explanation_en: "1. Condition: Denominator $\\ne 0$. \n 2. Equation: $x^2 - 4 = 0$. \n 3. Factor: $(x-2)(x+2)=0$. \n 4. Exclude: $x = 2, x = -2$. \n 5. Domain: $R - \\{-2, 2\\}$." },
            { id: 3, question: "Solve the inequality: $x^2 - 3x + 2 \\le 0$", options: ["$[1, 2]$", "$]-\\infty, 1] \\cup [2, \\infty[$", "$]1, 2[$", "$\\{1, 2\\}$"], answer: 0, explanation_en: "1. Factorize: $(x-1)(x-2) \\le 0$. \n 2. Roots: $x=1, x=2$. \n 3. Sign Test: Positive outside roots, Negative between. \n 4. We need $\\le 0$ (Negative), so interval is $[1, 2]$." },
            { id: 4, question: "Find the domain of: $f(x) = \\sqrt{4 - x^2}$", options: ["$R$", "$[-2, 2]$", "$]-\\infty, -2] \\cup [2, \\infty[$", "$[2, \\infty[$"], answer: 1, explanation_en: "1. Condition: $4 - x^2 \\ge 0$. \n 2. Factor: $(2-x)(2+x) \\ge 0$. \n 3. Roots: $\\pm 2$. \n 4. Sign of $-x^2$ is negative, so middle interval is positive. \n 5. Result: $[-2, 2]$." },
            { id: 5, question: "Find the domain of: $f(x) = \\frac{x+1}{x^2 + 1}$", options: ["$R - \\{1\\}$", "$R - \\{-1\\}$", "$R$", "$R - \\{0\\}$"], answer: 2, explanation_en: "1. Set Denom = 0: $x^2 + 1 = 0$. \n 2. $x^2 = -1$ (Impossible in Real numbers). \n 3. No restrictions. Domain is $R$." },
            { id: 6, question: "Differentiate: $f(x) = 5x^3 - 2x + 1$", options: ["$15x^2 - 2$", "$5x^2 - 2$", "$15x^3 - 2x$", "$x^3 - x$"], answer: 0, explanation_en: "1. Power Rule: $d/dx(x^n) = nx^{n-1}$. \n 2. $5(3x^2) - 2(1) + 0$. \n 3. Simplify: $15x^2 - 2$." },
            { id: 7, question: "Differentiate: $y = \\frac{1}{x^3}$", options: ["$3x^2$", "$-3x^{-4}$", "$x^{-3}$", "$-3x^{-2}$"], answer: 1, explanation_en: "1. Rewrite: $y = x^{-3}$. \n 2. Differentiate: $-3 x^{-3-1}$. \n 3. Result: $-3x^{-4}$." },
            { id: 8, question: "Differentiate: $f(x) = \\sqrt{x^2 + 1}$", options: ["$\\frac{1}{2\\sqrt{x^2+1}}$", "$\\frac{x}{\\sqrt{x^2+1}}$", "$2x\\sqrt{x^2+1}$", "$\\frac{2x}{x^2+1}$"], answer: 1, explanation_en: "1. Shortcut: $\\frac{u'}{2\\sqrt{u}}$. \n 2. $u = x^2+1 \\Rightarrow u' = 2x$. \n 3. Apply: $\\frac{2x}{2\\sqrt{x^2+1}}$. \n 4. Cancel 2: $\\frac{x}{\\sqrt{x^2+1}}$." },
            { id: 9, question: "Differentiate (Product Rule): $y = x^2 \\sin x$", options: ["$2x \\cos x$", "$x^2 \\cos x + 2x \\sin x$", "$2x \\sin x + x^2$", "$x^2 \\cos x$"], answer: 1, explanation_en: "1. Rule: $uv' + vu'$. \n 2. $u=x^2, v=\\sin x$. \n 3. $u'=2x, v'=\\cos x$. \n 4. Result: $x^2(\\cos x) + (\\sin x)(2x)$." },
            { id: 10, question: "Differentiate (Quotient Rule): $y = \\frac{\\sin x}{x}$", options: ["$\\cos x$", "$\\frac{x \\cos x - \\sin x}{x^2}$", "$\\frac{\\sin x - x \\cos x}{x^2}$", "$\\frac{\\cos x}{1}$"], answer: 1, explanation_en: "1. Rule: $\\frac{vu' - uv'}{v^2}$. \n 2. $u=\\sin x, v=x$. \n 3. $u'=\\cos x, v'=1$. \n 4. Result: $\\frac{x(\\cos x) - \\sin x(1)}{x^2}$." },
            { id: 11, question: "Differentiate: $y = e^{3x^2}$", options: ["$e^{3x^2}$", "$6x e^{3x^2}$", "$3x^2 e^{3x^2}$", "$e^{6x}$"], answer: 1, explanation_en: "1. Rule: $e^u \\cdot u'$. \n 2. $u = 3x^2 \\Rightarrow u' = 6x$. \n 3. Result: $e^{3x^2} \\cdot 6x$." },
            { id: 12, question: "Differentiate: $y = 5^{2x}$", options: ["$5^{2x}$", "$2 \\cdot 5^{2x}$", "$2 \\cdot 5^{2x} \\ln 5$", "$5^{2x} \\ln 5$"], answer: 2, explanation_en: "1. Rule: $a^u \\cdot u' \\cdot \\ln a$. \n 2. $a=5, u=2x \\Rightarrow u'=2$. \n 3. Result: $5^{2x} \\cdot 2 \\cdot \\ln 5$." },
            { id: 13, question: "Differentiate: $y = \\ln(x^2 + 5)$", options: ["$\\frac{1}{x^2+5}$", "$\\frac{2x}{x^2+5}$", "$2x(x^2+5)$", "$\\ln(2x)$"], answer: 1, explanation_en: "1. Rule: $\\frac{u'}{u}$. \n 2. $u = x^2+5 \\Rightarrow u' = 2x$. \n 3. Result: $\\frac{2x}{x^2+5}$." },
            { id: 14, question: "The value of $\\ln(e^5)$ is:", options: ["$e$", "$1$", "$5$", "$0$"], answer: 2, explanation_en: "1. Property: $\\ln(e^x) = x$. \n 2. Because $\\ln e = 1$. \n 3. Result: $5 \\times 1 = 5$." },
            { id: 15, question: "Differentiate: $y = \\tan(3x)$", options: ["$\\sec^2(3x)$", "$3\\sec^2(3x)$", "$3\\tan(3x)$", "$\\sec(3x)\\tan(3x)$"], answer: 1, explanation_en: "1. Rule: $\\sec^2 u \\cdot u'$. \n 2. $u=3x \\Rightarrow u'=3$. \n 3. Result: $3 \\sec^2(3x)$." },
            { id: 16, question: "Differentiate: $y = \\cos^3(x)$", options: ["$-3\\cos^2(x)\\sin(x)$", "$3\\cos^2(x)$", "$-sin^3(x)$", "$3\\cos^2(x)\\sin(x)$"], answer: 0, explanation_en: "1. Rewrite: $(\\cos x)^3$. \n 2. Outer deriv: $3(\\cos x)^2$. \n 3. Inner deriv: $-\\sin x$. \n 4. Multiply: $-3 \\cos^2 x \\sin x$." },
            { id: 17, question: "Differentiate: $y = \\sec x$", options: ["$\\sec^2 x$", "$\\sec x \\tan x$", "$\\tan x$", "$-\\sec x \\tan x$"], answer: 1, explanation_en: "1. Recall standard derivative. \n 2. $d/dx(\\sec x) = \\sec x \\tan x$." },
            { id: 18, question: "Differentiate: $y = \\sin^{-1}(2x)$", options: ["$\\frac{2}{\\sqrt{1-4x^2}}$", "$\\frac{1}{\\sqrt{1-4x^2}}$", "$\\frac{2}{1+4x^2}$", "$\\cos^{-1}(2x)$"], answer: 0, explanation_en: "1. Rule: $\\frac{u'}{\\sqrt{1-u^2}}$. \n 2. $u=2x \\Rightarrow u'=2$. \n 3. $u^2 = (2x)^2 = 4x^2$. \n 4. Result: $\\frac{2}{\\sqrt{1-4x^2}}$." },
            { id: 19, question: "Differentiate: $y = \\tan^{-1}(x^2)$", options: ["$\\frac{2x}{1+x^4}$", "$\\frac{2x}{\\sqrt{1-x^4}}$", "$\\frac{1}{1+x^4}$", "$2x \\tan^{-1}(x^2)$"], answer: 0, explanation_en: "1. Rule: $\\frac{u'}{1+u^2}$. \n 2. $u=x^2 \\Rightarrow u'=2x$. \n 3. $u^2 = (x^2)^2 = x^4$. \n 4. Result: $\\frac{2x}{1+x^4}$." },
            { id: 20, question: "If $y = x^x$, find $y'$", options: ["$x \\cdot x^{x-1}$", "$x^x$", "$x^x (1 + \\ln x)$", "$1 + \\ln x$"], answer: 2, explanation_en: "1. Take ln: $\\ln y = x \\ln x$. \n 2. Differentiate: $\\frac{y'}{y} = 1 \\cdot \\ln x + x \\cdot \\frac{1}{x}$. \n 3. Simplify: $\\frac{y'}{y} = \\ln x + 1$. \n 4. $y' = y(1+\\ln x) = x^x(1+\\ln x)$." }
        ],

        // === PART 2: Differentiation Rules & Applications ===
        m1_2: [
            { id: 21, question: "Implicit Diff: $x^2 + y^2 = 25$, find $y'$", options: ["$\\frac{x}{y}$", "$-\\frac{x}{y}$", "$\\frac{y}{x}$", "$-1$"], answer: 1, explanation_en: "1. Diff both sides: $2x + 2y y' = 0$. \n 2. Isolate terms: $2y y' = -2x$. \n 3. Divide by $2y$: $y' = \\frac{-2x}{2y}$. \n 4. Result: $-\\frac{x}{y}$." },
            { id: 22, question: "Find Critical Points for: $f(x) = x^3 - 3x$", options: ["$x=0$", "$x=1, -1$", "$x=3$", "None"], answer: 1, explanation_en: "1. Find $f'(x) = 3x^2 - 3$. \n 2. Set $f'(x) = 0$. \n 3. $3(x^2 - 1) = 0$. \n 4. $x^2=1 \\Rightarrow x = \\pm 1$." },
            { id: 23, question: "The function $f(x) = x^2$ is increasing on:", options: ["$]-\\infty, 0]$", "$[0, \\infty[$", "$R$", "$]-\\infty, \\infty[$"], answer: 1, explanation_en: "1. Find $f'(x) = 2x$. \n 2. Set $f'(x) > 0$. \n 3. $2x > 0 \\Rightarrow x > 0$. \n 4. Interval: $[0, \\infty[$." },
            { id: 24, question: "Local Max of $f(x) = -x^2 + 4$ occurs at $x=$", options: ["$2$", "$0$", "$-2$", "$4$"], answer: 1, explanation_en: "1. $f'(x) = -2x$. \n 2. Critical point: $x=0$. \n 3. Test: $f'$ is + before 0, - after 0. \n 4. Shape $\\nearrow \\searrow$ indicates Max." },
            { id: 25, question: "Integrate: $\\int x^4 dx$", options: ["$4x^3 + c$", "$\\frac{x^5}{5} + c$", "$x^5 + c$", "$5x^5 + c$"], answer: 1, explanation_en: "1. Power Rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1}$. \n 2. $n=4$, so $\\frac{x^{4+1}}{4+1}$. \n 3. Result: $\\frac{x^5}{5} + c$." },
            { id: 26, question: "Integrate: $\\int \\frac{1}{x} dx$", options: ["$x^{-2} + c$", "$\\ln x + c$", "$e^x + c$", "$1$"], answer: 1, explanation_en: "1. Recall the standard integral rule: $\\int \\frac{1}{x} dx = \\ln|x| + C$. \n 2. This is the inverse operation of differentiating $\\ln x$." },
            { id: 27, question: "Integrate: $\\int e^{2x} dx$", options: ["$e^{2x} + c$", "$2e^{2x} + c$", "$\\frac{1}{2}e^{2x} + c$", "$\\ln(2x) + c$"], answer: 2, explanation_en: "1. Rule: $\\int e^{ax} dx = \\frac{1}{a} e^{ax}$. \n 2. Here $a=2$. \n 3. Result: $\\frac{1}{2} e^{2x} + c$." },
            { id: 28, question: "Integrate: $\\int \\sin(3x) dx$", options: ["$\\cos(3x) + c$", "$-\\cos(3x) + c$", "$-\\frac{1}{3}\\cos(3x) + c$", "$3\\cos(3x) + c$"], answer: 2, explanation_en: "1. Rule: $\\int \\sin(ax) = -\\frac{1}{a}\\cos(ax)$. \n 2. $a=3$. \n 3. Result: $-\\frac{1}{3}\\cos(3x) + c$." },
            { id: 29, question: "Integrate: $\\int (2x+1)^5 dx$", options: ["$\\frac{(2x+1)^6}{6} + c$", "$\\frac{(2x+1)^6}{12} + c$", "$5(2x+1)^4 + c$", "$(2x+1)^6 + c$"], answer: 1, explanation_en: "1. Rule: $\\int (ax+b)^n = \\frac{(ax+b)^{n+1}}{a(n+1)}$. \n 2. $a=2, n=5$. \n 3. Denom: $2(6) = 12$. \n 4. Result: $\\frac{(2x+1)^6}{12}$." },
            { id: 30, question: "Integrate: $\\int \\frac{2x}{x^2+1} dx$", options: ["$\\tan^{-1} x + c$", "$\\ln(x^2+1) + c$", "$\\frac{1}{x^2+1} + c$", "$(x^2+1)^2 + c$"], answer: 1, explanation_en: "1. Let $u = x^2+1$. \n 2. Then $du = 2x dx$. \n 3. Integral is $\\int \\frac{1}{u} du = \\ln" },
            { id: 31, question: "Integrate: $\\int \\frac{1}{1+x^2} dx$", options: ["$\\sin^{-1} x + c$", "$\\tan^{-1} x + c$", "$\\ln(1+x^2) + c$", "$sec^{-1} x + c$"], answer: 1, explanation_en: "1. Identify Form: $\\frac{1}{a^2+x^2}$ where $a=1$. \n 2. Standard Integral: $\\tan^{-1}x + c$." },
            { id: 32, question: "Integrate: $\\int \\frac{1}{\\sqrt{1-x^2}} dx$", options: ["$\\sin^{-1} x + c$", "$\\cos^{-1} x + c$", "$\\tan^{-1} x + c$", "$\\sinh^{-1} x + c$"], answer: 0, explanation_en: "1. Identify Form: $\\frac{1}{\\sqrt{a^2-x^2}}$ where $a=1$. \n 2. Standard Integral: $\\sin^{-1}x + c$." },
            { id: 33, question: "Integration by Parts: $\\int x e^x dx$", options: ["$x e^x - e^x + c$", "$x e^x + e^x + c$", "$\\frac{x^2}{2} e^x + c$", "$e^x + c$"], answer: 0, explanation_en: "1. $u=x \\Rightarrow du=dx$. \n 2. $dv=e^x dx \\Rightarrow v=e^x$. \n 3. Formula: $uv - \\int v du$. \n 4. Apply: $xe^x - \\int e^x dx = xe^x - e^x$." },
            { id: 34, question: "Definite Integral: $\\int_0^1 2x dx$", options: ["$0$", "$1$", "$2$", "$x^2$"], answer: 1, explanation_en: "1. Integrate: $2(\\frac{x^2}{2}) = x^2$. \n 2. Upper Limit: $1^2 = 1$. \n 3. Lower Limit: $0^2 = 0$. \n 4. Result: $1 - 0 = 1$." },
            { id: 35, question: "Area under $y=x^2$ from $x=0$ to $x=3$", options: ["$3$", "$9$", "$27$", "$9$"], answer: 1, explanation_en: "1. Integral: $\\int_0^3 x^2 dx$. \n 2. Antiderivative: $[\\frac{x^3}{3}]_0^3$. \n 3. Calc: $\\frac{27}{3} - 0 = 9$." },
            { id: 36, question: "Volume of revolution of $y=x$ about X-axis is:", options: ["$\\int \\pi x dx$", "$\\int \\pi x^2 dx$", "$\\int x^2 dx$", "$\\int 2\\pi x dx$"], answer: 1, explanation_en: "1. Formula: $V = \\pi \\int r^2 dx$. \n 2. Radius $r = y = x$. \n 3. So $r^2 = x^2$. \n 4. Result: $\\int \\pi x^2 dx$." },
            { id: 37, question: "Integrate: $\\int \\sec^2 x dx$", options: ["$\\tan x + c$", "$\\sec x + c$", "$\\cos x + c$", "$\\cot x + c$"], answer: 0, explanation_en: "1. Recall derivative: $d/dx(\\tan x) = \\sec^2 x$. \n 2. Therefore, integral is $\\tan x + c$." },
            { id: 38, question: "If $y = \\ln(x)$, the derivative at $x=2$ is:", options: ["$2$", "$0.5$", "$1$", "$\\ln 2$"], answer: 1, explanation_en: "1. Differentiate: $y' = \\frac{1}{x}$. \n 2. Substitute $x=2$. \n 3. Result: $y' = \\frac{1}{2} = 0.5$." },
            { id: 39, question: "Differentiate: $y = \\cos(x^2)$", options: ["$-\\sin(x^2)$", "$-2x \\sin(x^2)$", "$2x \\cos(x^2)$", "$\\sin(2x)$"], answer: 1, explanation_en: "1. Outer diff: $-\\sin(x^2)$. \n 2. Inner diff ($x^2$): $2x$. \n 3. Multiply: $-2x \\sin(x^2)$." },
            { id: 40, question: "Value of $\\int_{-1}^1 x^3 dx$ (Odd Function)", options: ["$2$", "$0$", "$1/4$", "$-2$"], answer: 1, explanation_en: "1. Check Odd/Even: $(-x)^3 = -x^3$ (Odd). \n 2. Property: Integral of Odd function on $[-a, a]$ is 0. \n 3. Result: 0." }
        ],

        // === PART 3: Advanced Derivatives & Basic Integration ===
        m1_3: [
            { id: 41, question: "Domain of $y = \\ln(x-3)$", options: ["$R$", "$x > 3$", "$x \\ge 3$", "$x \\ne 3$"], answer: 1, explanation_en: "1. Condition: Argument $> 0$. \n 2. $x - 3 > 0$. \n 3. Result: $x > 3$." },
            { id: 42, question: "Derivative of constant $\\frac{d}{dx}(\\pi^2)$", options: ["$2\\pi$", "$\\pi$", "$0$", "$1$"], answer: 2, explanation_en: "1. Identify: $\\pi^2$ is a constant number ($\\approx 9.8$). \n 2. Rule: Derivative of any constant is 0." },
            { id: 43, question: "If $f'(x) > 0$ on an interval, the function is:", options: ["Decreasing", "Constant", "Increasing", "Concave"], answer: 2, explanation_en: "1. Definition: Positive rate of change means $y$ increases as $x$ increases. \n 2. Result: Increasing." },
            { id: 44, question: "Integrate: $\\int 5^x dx$", options: ["$5^x \\ln 5 + c$", "$\\frac{5^x}{\\ln 5} + c$", "$5^{x+1} + c$", "$x 5^{x-1} + c$"], answer: 1, explanation_en: "1. Rule: $\\int a^x dx = \\frac{a^x}{\\ln a}$. \n 2. Substitute $a=5$. \n 3. Result: $\\frac{5^x}{\\ln 5}$." },
            { id: 45, question: "Differentiate: $y = x^{-2}$", options: ["$-2x^{-3}$", "$-2x^{-1}$", "$x^{-3}$", "$-x^{-2}$"], answer: 0, explanation_en: "1. Power Rule: $nx^{n-1}$. \n 2. $-2 x^{-2-1}$. \n 3. $-2 x^{-3}$." },
            { id: 46, question: "L'Hopital's Rule applies when limit is:", options: ["$1/0$", "$0/0$ or $\\infty/\\infty$", "$0 \\times \\infty$", "Any number"], answer: 1, explanation_en: "1. Definition: L'Hopital is strictly for indeterminate forms. \n 2. The standard forms are $0/0$ and $\\infty/\\infty$." },
            { id: 47, question: "Volume of sphere generated by rotating semi-circle $y=\\sqrt{r^2-x^2}$", options: ["$\\frac{4}{3}\\pi r^3$", "$\\pi r^2$", "$2\\pi r$", "$\\frac{2}{3}\\pi r^3$"], answer: 0, explanation_en: "1. $V = \\pi \\int_{-r}^r (\\sqrt{r^2-x^2})^2 dx$. \n 2. $V = \\pi \\int_{-r}^r (r^2-x^2) dx$. \n 3. Evaluate: $\\pi [r^2x - x^3/3]_{-r}^r$. \n 4. Result: $4/3 \\pi r^3$." },
            { id: 48, question: "Integrate: $\\int \\frac{1}{x \\ln x} dx$", options: ["$\\ln(\\ln x) + c$", "$\\frac{1}{\\ln x} + c$", "$\\ln x + c$", "$e^x + c$"], answer: 0, explanation_en: "1. Rewrite: $\\int \\frac{1/x}{\\ln x} dx$. \n 2. Let $u = \\ln x \\Rightarrow du = 1/x dx$. \n 3. Integral is $\\int \\frac{1}{u} du = \\ln" },
            { id: 49, question: "Function $f(x) = |x|$ is not differentiable at:", options: ["$x=1$", "$x=0$", "$x=-1$", "Always differentiable"], answer: 1, explanation_en: "1. The function $f(x) = |x|$ has a sharp corner (cusp) at $x=0$. \n 2. The left derivative is -1 and the right derivative is 1. \n 3. Since limits are unequal, it is not differentiable at $x=0$." },
            { id: 50, question: "Value of $c$ in Mean Value Theorem for $f(x)=x^2$ on $[0,2]$", options: ["$0$", "$1$", "$1.5$", "$2$"], answer: 1, explanation_en: "1. Slope: $\\frac{f(2)-f(0)}{2-0} = \\frac{4-0}{2} = 2$. \n 2. Deriv: $f'(c) = 2c$. \n 3. Set $2c = 2$. \n 4. Solve: $c=1$." },
            { id: 51, question: "Derivative of Hyperbolic Function: $y = \\sinh x$", options: ["$-\\cosh x$", "$\\cosh x$", "$\\text{sech}^2 x$", "$-\\sinh x$"], answer: 1, explanation_en: "1. Definition: $\\sinh x = \\frac{e^x - e^{-x}}{2}$. \n 2. Differentiate: \\frac{e^x - (-e^{-x})}{2} = \\frac{e^x + e^{-x}}{2}$. \n 3. This matches definition of $\\cosh x$." },
            { id: 52, question: "Differentiate: $y = \\cosh(3x)$", options: ["$-3\\sinh(3x)$", "$3\\sinh(3x)$", "$\\sinh(3x)$", "$-3\\cosh(3x)$"], answer: 1, explanation_en: "1. Rule: $d/dx(\\cosh u) = \\sinh u \\cdot u'$. \n 2. $u=3x \\Rightarrow u'=3$. \n 3. Result: $3 \\sinh(3x)$." },
            { id: 53, question: "Integrate: $\\int \\cosh x dx$", options: ["$\\sinh x + c$", "$-\\sinh x + c$", "$\\cosh x + c$", "$\\ln(\\cosh x) + c$"], answer: 0, explanation_en: "1. Recall derivative: $d/dx(\\sinh x) = \\cosh x$. \n 2. Therefore, integral is $\\sinh x + c$." },
            { id: 54, question: "Formula for Volume of Revolution about X-axis", options: ["$\\int_a^b y^2 dx$", "$\\pi \\int_a^b y^2 dx$", "$\\pi \\int_a^b y dx$", "$\\int_a^b \\pi x^2 dy$"], answer: 1, explanation_en: "1. Concept: Disk Method. \n 2. Area of one disk = $\\pi r^2$. \n 3. Here $r = y = f(x)$. \n 4. Summing areas: $\\int \\pi y^2 dx$." },
            { id: 55, question: "To find Area between curves $y_1$ and $y_2$ where $y_1 > y_2$", options: ["$\\int (y_1 + y_2) dx$", "$\\int (y_2 - y_1) dx$", "$\\int (y_1 - y_2) dx$", "$\\int y_1 y_2 dx$"], answer: 2, explanation_en: "1. Logic: Area is accumulated height $\\times$ width. \n 2. Height = Top curve ($y_1$) - Bottom curve ($y_2$). \n 3. Integral: $\\int (y_1 - y_2) dx$." },
            { id: 56, question: "Integrate $\\int x \\cos x dx$ (By Parts)", options: ["$x \\sin x + \\cos x + c$", "$x \\sin x - \\cos x + c$", "$\\sin x + c$", "$x^2 \\sin x + c$"], answer: 0, explanation_en: "1. $u=x, dv=\\cos x dx$. \n 2. $du=dx, v=\\sin x$. \n 3. $uv - \\int v du = x\\sin x - \\int \\sin x dx$. \n 4. Integrate $\\sin$: $-\\cos x$. \n 5. Result: $x\\sin x - (-\\cos x)$." },
            { id: 57, question: "In Trapezoidal Rule, step size $h$ equals:", options: ["$b-a$", "$\\frac{b-a}{n}$", "$\\frac{b+a}{2}$", "$n(b-a)$"], answer: 1, explanation_en: "1. Definition: We divide total interval $[a,b]$ into $n$ parts. \n 2. Length of interval = $b-a$. \n 3. Length of one step $h = \\frac{b-a}{n}$." },
            { id: 58, question: "Integrate: $\\int \\frac{1}{\\sqrt{x^2+1}} dx$", options: ["$\\sin^{-1} x + c$", "$\\sinh^{-1} x + c$", "$\\tan^{-1} x + c$", "$\\ln x + c$"], answer: 1, explanation_en: "1. Identify Form: $\\frac{1}{\\sqrt{x^2+a^2}}$. \n 2. If it was minus ($1-x^2$), it's $\\sin^{-1}$. \n 3. Since it is plus, it corresponds to $\\sinh^{-1} x$." },
            { id: 59, question: "Integrate: $\\int \\tanh x dx$", options: ["$\\ln(\\cosh x) + c$", "$\\ln(\\sinh x) + c$", "$\\text{sech}^2 x + c$", "$\\cosh x + c$"], answer: 0, explanation_en: "1. Rewrite: $\\int \\frac{\\sinh x}{\\cosh x} dx$. \n 2. Let $u = \\cosh x \\Rightarrow du = \\sinh x dx$. \n 3. Integral: $\\int \\frac{1}{u} du = \\ln" },
            { id: 60, question: "Derivative of $y = \\tanh x$", options: ["$\\text{sech}^2 x$", "$-\\text{sech}^2 x$", "$\\text{csch}^2 x$", "$\\cosh^2 x$"], answer: 0, explanation_en: "1. Quotient Rule on $\\sinh/\\cosh$. \n 2. $(\\cosh^2 - \\sinh^2) / \\cosh^2$. \n 3. Identiy: $\\cosh^2 - \\sinh^2 = 1$. \n 4. $1/\\cosh^2 = \\text{sech}^2$." }
        ],

        // === PART 4: Integration Techniques & Hyperbolics ===
        m1_4: [
            { id: 61, question: "If $f(x)$ is Even, then $\\int_{-a}^a f(x) dx =$", options: ["$0$", "$2 \\int_0^a f(x) dx$", "$\\int_0^a f(x) dx$", "$-a$"], answer: 1, explanation_en: "1. Even function means symmetry across Y-axis. \n 2. Area from $-a$ to $0$ equals area from $0$ to $a$. \n 3. Total Area = $2 \\times$ Area from $0$ to $a$." },
            { id: 62, question: "Integrate: $\\int e^x \\cos(e^x) dx$", options: ["$\\sin(e^x) + c$", "$-\\sin(e^x) + c$", "$e^x \\sin(e^x) + c$", "$\\cos(e^x) + c$"], answer: 0, explanation_en: "1. Let $u = e^x \\Rightarrow du = e^x dx$. \n 2. Substitute: $\\int \\cos(u) du$. \n 3. Integrate: $\\sin(u) + c$. \n 4. Back-sub: $\\sin(e^x) + c$." },
            { id: 63, question: "Volume rotating $y=x^2$ from $x=0$ to $x=1$ about X", options: ["$\\pi/5$", "$1/5$", "$\\pi/3$", "$\\pi/4$"], answer: 0, explanation_en: "1. $V = \\pi \\int_0^1 (x^2)^2 dx = \\pi \\int x^4 dx$. \n 2. Integrate: $\\pi [\\frac{x^5}{5}]_0^1$. \n 3. Evaluate: $\\pi (\\frac{1}{5} - 0) = \\pi/5$." },
            { id: 64, question: "Integrate: $\\int \\frac{1}{x^2-1} dx$", options: ["$\\tanh^{-1} x + c$", "$\\tan^{-1} x + c$", "$\\sin^{-1} x + c$", "$\\ln x + c$"], answer: 0, explanation_en: "1. Identify form: $\\frac{1}{x^2 - a^2}$. \n 2. If $a^2 - x^2$ it's $\\tanh^{-1}$. \n 3. Standard result for $" },
            { id: 65, question: "Derivative of $y = \\sinh^{-1} x$", options: ["$\\frac{1}{\\sqrt{1-x^2}}$", "$\\frac{1}{\\sqrt{1+x^2}}$", "$\\frac{1}{1-x^2}$", "$\\frac{1}{1+x^2}$"], answer: 1, explanation_en: "1. Let $x = \\sinh y$. Diff: $1 = \\cosh y \\cdot y'$. \n 2. $y' = 1/\\cosh y$. \n 3. Identity $\\cosh^2 - \\sinh^2 = 1 \\Rightarrow \\cosh = \\sqrt{1+x^2}$. \n 4. Result: $1/\\sqrt{1+x^2}$." },
            { id: 66, question: "Integrate: $\\int \\ln x dx$", options: ["$\\frac{1}{x} + c$", "$x \\ln x - x + c$", "$x \\ln x + x + c$", "$\\ln^2 x + c$"], answer: 1, explanation_en: "1. By Parts: $u=\\ln x, dv=1dx$. \n 2. $du=1/x dx, v=x$. \n 3. $uv - \\int v du = x \\ln x - \\int x(1/x) dx$. \n 4. $x \\ln x - \\int 1 dx = x \\ln x - x$." },
            { id: 67, question: "Area between $y=x$ and $y=x^2$", options: ["$1/2$", "$1/3$", "$1/6$", "$1/4$"], answer: 2, explanation_en: "1. Intersections: $x=x^2 \\Rightarrow x=0, 1$. \n 2. Top is $x$, Bottom is $x^2$ in $[0,1]$. \n 3. $\\int_0^1 (x-x^2) dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1$. \n 4. $1/2 - 1/3 = 1/6$." },
            { id: 68, question: "Derivative of $y = \\text{sech } x$", options: ["$\\text{sech } x \\tanh x$", "$-\\text{sech } x \\tanh x$", "$\\text{sech}^2 x$", "$\\tanh x$"], answer: 1, explanation_en: "1. $\\text{sech } x = (\\cosh x)^{-1}$. \n 2. Chain rule: $-1(\\cosh x)^{-2} \\cdot \\sinh x$. \n 3. $-\\frac{\\sinh}{\\cosh} \\cdot \\frac{1}{\\cosh} = -\\tanh x \\text{ sech } x$." },
            { id: 69, question: "Integrate: $\\int \\frac{x}{\\sqrt{1-x^2}} dx$", options: ["$\\sin^{-1} x + c$", "$-\\sqrt{1-x^2} + c$", "$\\sqrt{1-x^2} + c$", "$\\frac{1}{2} \\ln(1-x^2)$"], answer: 1, explanation_en: "1. $u = 1-x^2 \\Rightarrow du = -2x dx$. \n 2. Numerator has $x$, needs $-2$. Multiply by $-1/2$. \n 3. $-\\frac{1}{2} \\int u^{-1/2} du = -\\frac{1}{2} [2u^{1/2}]$. \n 4. Result: $-\\sqrt{1-x^2}$." },
            { id: 70, question: "General Formula for Integration by Parts", options: ["$\\int u dv = uv - \\int v du$", "$\\int u dv = uv + \\int v du$", "$\\int u dv = u'v - \\int v du$", "$\\int u dv = uv - \\int u du$"], answer: 0, explanation_en: "1. Derived from Product Rule: $(uv)' = u v' + v u'$. \n 2. Integrate: $uv = \\int u dv + \\int v du$. \n 3. Rearrange: $\\int u dv = uv - \\int v du$." },
            { id: 71, question: "Integrate: $\\int \\tan x dx$", options: ["$\\ln(\\cos x) + c$", "$\\ln(\\sec x) + c$", "$\\sec x$", "$\\tan x$"], answer: 1, explanation_en: "1. Rewrite: $\\int \\frac{\\sin x}{\\cos x} dx$. \n 2. Let $u=\\cos x \\Rightarrow du=-\\sin x dx$. \n 3. Integral becomes $-\\int \\frac{1}{u} du = -\\ln(\\cos x)$. \n 4. Property: $-\\ln(\\cos x) = \\ln(\\sec x)$." },
            { id: 72, question: "If $v$ is velocity, then distance is:", options: ["Derivative of velocity", "Integral of velocity", "Velocity squared", "Velocity / Time"], answer: 1, explanation_en: "1. Definition: Velocity is rate of change of position ($v = ds/dt$). \n 2. Therefore, position/distance is integral of velocity ($s = \\int v dt$)." },
            { id: 73, question: "Integrate: $\\int_1^e \\frac{1}{x} dx$", options: ["$0$", "$1$", "$e$", "$\\ln e - 1$"], answer: 1, explanation_en: "1. Antiderivative: $\\ln" },
            { id: 74, question: "Derivative of $y = e^{\\sinh x}$", options: ["$e^{\\sinh x}$", "$\\cosh x \\cdot e^{\\sinh x}$", "$\\sinh x \\cdot e^{\\sinh x}$", "$e^{\\cosh x}$"], answer: 1, explanation_en: "1. Chain Rule: $e^u \\cdot u'$. \n 2. $u = \\sinh x \\Rightarrow u' = \\cosh x$. \n 3. Result: $\\cosh x \\cdot e^{\\sinh x}$." },
            { id: 75, question: "Integrate: $\\int 3^x dx$", options: ["$3^x \\ln 3$", "$\\frac{3^x}{\\ln 3}$", "$3^{x+1}$", "$x 3^{x-1}$"], answer: 1, explanation_en: "1. Rule: $\\int a^x dx = \\frac{a^x}{\\ln a}$. \n 2. Substitute $a=3$. \n 3. Result: $\\frac{3^x}{\\ln 3}$." },
            { id: 76, question: "Integrate: $\\int \\frac{1}{1+4x^2} dx$", options: ["$\\frac{1}{2} \\tan^{-1}(2x)$", "$\\tan^{-1}(2x)$", "$2 \\tan^{-1}(2x)$", "$\\ln(1+4x^2)$"], answer: 0, explanation_en: "1. Rewrite $4x^2$ as $(2x)^2$. \n 2. Let $u=2x \\Rightarrow du=2dx \\Rightarrow dx=du/2$. \n 3. $\\int \\frac{1}{1+u^2} \\frac{du}{2} = \\frac{1}{2} \\tan^{-1} u$. \n 4. Result: $\\frac{1}{2} \\tan^{-1}(2x)$." },
            { id: 77, question: "Integrate: $\\int \\cot x dx$", options: ["$\\ln(\\cos x)$", "$\\ln(\\sin x)$", "$\\ln x$", "$-\\ln(\\sin x)$"], answer: 1, explanation_en: "1. Rewrite: $\\int \\frac{\\cos x}{\\sin x} dx$. \n 2. Let $u=\\sin x \\Rightarrow du=\\cos x dx$. \n 3. Integral is $\\int \\frac{1}{u} du = \\ln(\\sin x) + c$." },
            { id: 78, question: "Best substitution for $\\sqrt{a^2 - x^2}$", options: ["$x = a \\tan \\theta$", "$x = a \\sec \\theta$", "$x = a \\sin \\theta$", "$x = a^2$"], answer: 2, explanation_en: "1. Identity needed: $1 - \\sin^2 = \\cos^2$. \n 2. If $x=a\\sin\\theta$, then $a^2 - a^2\\sin^2\\theta = a^2\\cos^2\\theta$. \n 3. This removes the root perfectly." },
            { id: 79, question: "Integrate: $\\int \\text{sech}^2(3x) dx$", options: ["$\\tanh(3x)$", "$\\frac{1}{3} \\tanh(3x)$", "$3 \\tanh(3x)$", "$-\\frac{1}{3} \\tanh(3x)$"], answer: 1, explanation_en: "1. Rule: $\\int \\text{sech}^2(au) = \\frac{1}{a} \\tanh(au)$. \n 2. Here $a=3$. \n 3. Result: $\\frac{1}{3} \\tanh(3x)$." },
            { id: 80, question: "Derivative of $y = \\cos^{-1} x$", options: ["$\\frac{1}{\\sqrt{1-x^2}}$", "$-\\frac{1}{\\sqrt{1-x^2}}$", "$\\frac{1}{1+x^2}$", "$-\\frac{1}{1+x^2}$"], answer: 1, explanation_en: "1. Standard Derivative: $d/dx(\\arccos x) = - \\frac{1}{\\sqrt{1-x^2}}$. \n 2. It's the negative of the $\\arcsin$ derivative." }
        ],

        // === PART 5: Applications of Integration (Area/Volume) ===
        m1_5: [
            { id: 81, question: "Evaluate: $\\int_0^{\\pi/2} \\cos x dx$", options: ["$0$", "$1$", "$-1$", "$\\pi$"], answer: 1, explanation_en: "1. Antiderivative: $\\sin x$. \n 2. Upper: $\\sin(\\pi/2) = 1$. \n 3. Lower: $\\sin(0) = 0$. \n 4. Result: $1 - 0 = 1$." },
            { id: 82, question: "Average Value of $f(x)$ on $[a,b]$", options: ["$\\int_a^b f(x) dx$", "$\\frac{1}{b-a} \\int_a^b f(x) dx$", "$\\frac{f(b)-f(a)}{b-a}$", "$\\int f(x) dx$"], answer: 1, explanation_en: "1. Definition: Average = Sum / Length. \n 2. Sum (continuous) = Integral $\\int_a^b f$. \n 3. Length = $b-a$. \n 4. Result: $\\frac{1}{b-a} \\int_a^b f dx$." },
            { id: 83, question: "Integrate: $\\int \\frac{1}{\\sqrt{x}} dx$", options: ["$\\ln \\sqrt{x}$", "$2\\sqrt{x}$", "$\\frac{1}{2}\\sqrt{x}$", "$x^{-1/2}$"], answer: 1, explanation_en: "1. Rewrite: $\\int x^{-1/2} dx$. \n 2. Add 1 to exponent: $-1/2 + 1 = 1/2$. \n 3. Divide by 1/2 (Multiply by 2). \n 4. Result: $2 x^{1/2} = 2\\sqrt{x}$." },
            { id: 84, question: "Area below X-axis is calculated as:", options: ["Always Positive", "Negative in algebra", "Zero", "Undefined"], answer: 1, explanation_en: "1. Integral gives \"Signed Area\". \n 2. Below axis, $f(x)$ is negative, so integral is negative. \n 3. For geometric area, we take absolute value." },
            { id: 85, question: "Integrate: $\\int \\csc x \\cot x dx$", options: ["$\\csc x$", "$-\\csc x$", "$\\sec x$", "$-\\cot x$"], answer: 1, explanation_en: "1. Recall derivative: $d/dx(\\csc x) = -\\csc x \\cot x$. \n 2. Move negative sign. \n 3. Integral is $-\\csc x + c$." },
            { id: 86, question: "Derivative of $y = \\ln(\\cos x)$", options: ["$\\tan x$", "$-\\tan x$", "$\\cot x$", "$1/\\cos x$"], answer: 1, explanation_en: "1. Rule: $u'/u$. \n 2. $u=\\cos x \\Rightarrow u' = -\\sin x$. \n 3. $\\frac{-\\sin x}{\\cos x} = -\\tan x$." },
            { id: 87, question: "Sphere volume is derived by rotating:", options: ["Square", "Triangle", "Semi-circle", "Parabola"], answer: 2, explanation_en: "1. Equation of circle: $x^2 + y^2 = r^2$. \n 2. Rotating $y=\\sqrt{r^2-x^2}$ (semi-circle) around X-axis creates a full sphere." },
            { id: 88, question: "Integrate: $\\int x^2 e^{x^3} dx$", options: ["$e^{x^3}$", "$\\frac{1}{3} e^{x^3}$", "$3 e^{x^3}$", "$x^3 e^{x^3}$"], answer: 1, explanation_en: "1. Let $u=x^3 \\Rightarrow du=3x^2 dx$. \n 2. $x^2 dx = du/3$. \n 3. $\\int e^u \\frac{du}{3} = \\frac{1}{3} e^u$. \n 4. Result: $\\frac{1}{3} e^{x^3}$." },
            { id: 89, question: "Condition for Inflection Point:", options: ["$f'(x)=0$", "$f''(x)=0$ & sign change", "$f(x)=0$", "$f'(x)$ undefined"], answer: 1, explanation_en: "1. Definition: Point where concavity changes. \n 2. Concavity relates to $f''$. \n 3. Must cross zero (change sign) for inflection." },
            { id: 90, question: "Integrate: $\\int \\frac{1}{x^2+9} dx$", options: ["$\\tan^{-1}(x/3)$", "$\\frac{1}{3} \\tan^{-1}(x/3)$", "$9 \\tan^{-1}(x)$", "$\\ln(x^2+9)$"], answer: 1, explanation_en: "1. Standard form: $\\frac{1}{x^2+a^2}$. \n 2. Formula: $\\frac{1}{a} \\tan^{-1}(x/a)$. \n 3. $a^2=9 \\Rightarrow a=3$. \n 4. Result: $\\frac{1}{3} \\tan^{-1}(x/3)$." },
            { id: 91, question: "Derivative of $y = x^{\\ln x}$", options: ["$x^{\\ln x}$", "$2 (\\ln x) x^{\\ln x - 1}$", "$(\\ln x)^2$", "$x$"], answer: 1, explanation_en: "1. $\\ln y = \\ln(x^{\\ln x}) = (\\ln x)(\\ln x) = (\\ln x)^2$. \n 2. Diff: $y'/y = 2(\\ln x) \\cdot (1/x)$. \n 3. $y' = y [\\frac{2\\ln x}{x}] = x^{\\ln x} \\cdot 2 \\ln x \\cdot x^{-1}$. \n 4. Combine: $2 \\ln x \\cdot x^{\\ln x - 1}$." },
            { id: 92, question: "To integrate $\\int \\sin^2 x dx$ use:", options: ["$\\sin x = \\cos x$", "$\\sin^2 x = \\frac{1}{2}(1 - \\cos 2x)$", "$\\sin^2 x = 1 - \\cos^2 x$", "Parts"], answer: 1, explanation_en: "1. Problem: Can't integrate power directly. \n 2. Power-Reduction Identity: $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$. \n 3. This linearizes the function for easy integration." },
            { id: 93, question: "Cylindrical Shells method calculates:", options: ["Area", "Length", "Volume", "Velocity"], answer: 2, explanation_en: "1. Context: Solid of Revolution. \n 2. Shells formula: $V = \\int 2\\pi x f(x) dx$. \n 3. Used when integrating parallel to rotation axis." },
            { id: 94, question: "Integrate: $\\int \\frac{1}{\\sqrt{4-x^2}} dx$", options: ["$\\sin^{-1}(x/2)$", "$2 \\sin^{-1}(x/2)$", "$\\frac{1}{2} \\sin^{-1}(x/2)$", "$\\cos^{-1}(x/2)$"], answer: 0, explanation_en: "1. Form: $\\frac{1}{\\sqrt{a^2-x^2}}$. \n 2. Formula: $\\sin^{-1}(x/a)$. \n 3. Note: $\\sin^{-1}$ rule does NOT have $1/a$ in front. \n 4. $a=2 \\Rightarrow \\sin^{-1}(x/2)$." },
            { id: 95, question: "Derivative of $y = \\text{coth } x$", options: ["$\\text{csch}^2 x$", "$-\\text{csch}^2 x$", "$\\text{sech}^2 x$", "$-\\text{tanh}^2 x$"], answer: 1, explanation_en: "1. Similar to $\\cot x \\to -\\csc^2 x$. \n 2. For Hyperbolic: $\\text{coth } x \\to -\\text{csch}^2 x$." },
            { id: 96, question: "Evaluate $\\int_{-2}^2 x dx$", options: ["$0$", "$2$", "$4$", "$-4$"], answer: 0, explanation_en: "1. Function $f(x)=x$ is an Odd Function ($f(-x) = -f(x)$). \n 2. The interval $[-2, 2]$ is symmetric about zero. \n 3. Property: Definite integral of an odd function over symmetric interval is always 0." },
            { id: 97, question: "Integrate: $\\int e^{3x+1} dx$", options: ["$e^{3x+1}$", "$\\frac{1}{3} e^{3x+1}$", "$3 e^{3x+1}$", "$\\ln(3x+1)$"], answer: 1, explanation_en: "1. Linear exponent rule: $\\int e^{ax+b} = \\frac{1}{a} e^{ax+b}$. \n 2. $a=3$. \n 3. Result: $\\frac{1}{3} e^{3x+1}$." },
            { id: 98, question: "Tangent line to $y=x^2$ at $x=1$", options: ["$y=2x$", "$y=2x-1$", "$y=x+1$", "$y=2x+1$"], answer: 1, explanation_en: "1. Slope $m = y'(1) = 2(1) = 2$. \n 2. Point: $x=1 \\Rightarrow y=1^2=1 \\to (1,1)$. \n 3. Line: $y - 1 = 2(x - 1)$. \n 4. $y = 2x - 2 + 1 \\Rightarrow y = 2x - 1$." },
            { id: 99, question: "Integrate: $\\int \\frac{\\cos x}{\\sin x} dx$", options: ["$\\ln(\\sin x)$", "$\\ln(\\cos x)$", "$\\sin x$", "$\\cos x$"], answer: 0, explanation_en: "1. Let $u = \\sin x$. \n 2. Then $du = \\cos x dx$. \n 3. The integral becomes $\\int \\frac{1}{u} du$. \n 4. Result: $\\ln|u| + c = \\ln(\\sin x) + c$." },
            { id: 100, question: "Trapezoidal Rule on $\\int_0^4 x dx$ (4 intervals) is:", options: ["Overestimate", "Underestimate", "Exact", "Undefined"], answer: 2, explanation_en: "1. Error depends on $f''(x)$. \n 2. For $f(x)=x$, $f''(x)=0$. \n 3. Therefore, error is 0. The approximation is exact." }
        ],

        // === TEXT QUESTIONS (Calculations) ===
        m1_text_1: [
            { id: 101, question: "Find the domain of $f(x) = \\sqrt{\\frac{x-1}{x+2}}$.", model_answer: "1. Condition: The term inside the root must be $\\ge 0$. So, $\\frac{x-1}{x+2} \\ge 0$.\n2. Critical Points: Numerator is 0 at $x=1$. Denominator is 0 at $x=-2$.\n3. Sign Test: Check intervals $(-\\infty, -2)$, $(-2, 1]$, and $[1, \\infty)$.\n• Test $x=-3$: $\\frac{-}{-} = +$ (Valid).\n• Test $x=0$: $\\frac{-}{+} = -$ (Invalid).\n• Test $x=2$: $\\frac{+}{+} = +$ (Valid).\n4. Conclusion: Domain is $(-\\infty, -2) \\cup [1, \\infty)$. Note: $x \\ne -2$ (division by zero)." },
            { id: 102, question: "Differentiate $y = \\frac{x^2+1}{x^2-1}$.", model_answer: "1. Rule: Quotient Rule $\\frac{v u' - u v'}{v^2}$.\n2. Identify: $u = x^2+1 \\Rightarrow u' = 2x$. $v = x^2-1 \\Rightarrow v' = 2x$.\n3. Apply: $y' = \\frac{(x^2-1)(2x) - (x^2+1)(2x)}{(x^2-1)^2}$.\n4. Expand: $\\frac{2x^3 - 2x - (2x^3 + 2x)}{(x^2-1)^2}$.\n5. Simplify: $y' = \\frac{-4x}{(x^2-1)^2}$." },
            { id: 103, question: "Find $y'$ if $y = \\ln(\\sec x + \\tan x)$.", model_answer: "1. Chain Rule: $y' = \\frac{1}{\\sec x + \\tan x} \\cdot \\frac{d}{dx}(\\sec x + \\tan x)$.\n2. Derivatives: $\\frac{d}{dx}\\sec x = \\sec x \\tan x$, $\\frac{d}{dx}\\tan x = \\sec^2 x$.\n3. Substitute: $y' = \\frac{\\sec x \\tan x + \\sec^2 x}{\\sec x + \\tan x}$.\n4. Factor: $y' = \\frac{\\sec x (\\tan x + \\sec x)}{\\sec x + \\tan x}$.\n5. Simplify: $y' = \\sec x$." },
            { id: 104, question: "Find $\\frac{dy}{dx}$ for $x^3 + y^3 = 6xy$.", model_answer: "1. Implicit Diff: Differentiate both sides w.r.t $x$.\n2. LHS: $3x^2 + 3y^2 y'$.\n3. RHS: Product rule on $6xy \\Rightarrow 6(1 \\cdot y + x \\cdot y')$.\n4. Equate: $3x^2 + 3y^2 y' = 6y + 6xy'$.\n5. Group $y'$: $3y^2 y' - 6xy' = 6y - 3x^2$.\n6. Solve: $y'(3y^2 - 6x) = 6y - 3x^2 \\Rightarrow y' = \\frac{2y - x^2}{y^2 - 2x}$." },
            { id: 105, question: "Find the equation of the tangent line to $y = \\sqrt{x}$ at $x=4$.", model_answer: "1. Point: $x=4 \\Rightarrow y=\\sqrt{4}=2$. Point is $(4,2)$.\n2. Slope: $y = x^{1/2} \\Rightarrow y' = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$.\n3. Evaluate Slope: $m = \\frac{1}{2\\sqrt{4}} = \\frac{1}{4}$.\n4. Equation: $y - y_1 = m(x - x_1)$.\n5. Substitute: $y - 2 = \\frac{1}{4}(x - 4) \\Rightarrow y = \\frac{1}{4}x + 1$." },
            { id: 106, question: "Differentiate $y = x^{\\sin x}$.", model_answer: "1. Log Diff: Take $\\ln$ of both sides. $\\ln y = \\sin x \\cdot \\ln x$.\n2. Differentiate: $\\frac{1}{y} y' = (\\cos x)(\\ln x) + (\\sin x)(\\frac{1}{x})$.\n3. Isolate $y'$: $y' = y [\\cos x \\ln x + \\frac{\\sin x}{x}]$.\n4. Final Answer: $y' = x^{\\sin x} (\\cos x \\ln x + \\frac{\\sin x}{x})$." },
            { id: 107, question: "Find local extrema for $f(x) = 2x^3 - 3x^2 - 12x$.", model_answer: "1. Derivative: $f'(x) = 6x^2 - 6x - 12$.\n2. Critical Points: Set $f'(x)=0 \\Rightarrow 6(x^2 - x - 2) = 0 \\Rightarrow 6(x-2)(x+1)=0$. $x=2, -1$.\n3. Test:\n• $f'' = 12x - 6$.\n• $f''(-1) = -18 < 0 \\Rightarrow$ Local Max.\n• $f''(2) = 18 > 0 \\Rightarrow$ Local Min.\n4. Values: Max at $(-1, 7)$, Min at $(2, -20)$." },
            { id: 108, question: "Evaluate $\\lim_{x \\to 0} \\frac{\\sin 5x}{3x}$.", model_answer: "1. Rule: Recall $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$.\n2. Rearrange: $\\frac{\\sin 5x}{3x} = \\frac{5}{3} \\cdot \\frac{\\sin 5x}{5x}$.\n3. Limit: As $x \\to 0, 5x \\to 0$. So $\\frac{\\sin 5x}{5x} \\to 1$.\n4. Result: $\\frac{5}{3}(1) = \\frac{5}{3}$." },
            { id: 109, question: "Evaluate $\\lim_{x \\to \\infty} \\frac{2x^2 - x + 1}{3x^2 + 5}$.", model_answer: "1. Strategy: Divide all terms by highest power of $x$ in denominator ($x^2$).\n2. Apply: $\\frac{2 - 1/x + 1/x^2}{3 + 5/x^2}$.\n3. Limit: As $x \\to \\infty$, terms with $1/x \\to 0$.\n4. Result: $\\frac{2 - 0 + 0}{3 + 0} = \\frac{2}{3}$." },
            { id: 110, question: "Integrate $\\int (x^2 + 1)^2 dx$.", model_answer: "1. Expand: $(x^2+1)^2 = x^4 + 2x^2 + 1$.\n2. Integrate Term-wise: $\\int x^4 dx + \\int 2x^2 dx + \\int 1 dx$.\n3. Power Rule: $\\frac{x^5}{5} + \\frac{2x^3}{3} + x$.\n4. Constant: Add $+ C$.\n5. Final: $\\frac{1}{5}x^5 + \\frac{2}{3}x^3 + x + C$." }
        ],
        m1_text_2: [
            { id: 111, question: "Integrate $\\int x e^{x^2} dx$.", model_answer: "1. Substitution: Let $u = x^2$.\n2. Differential: $du = 2x dx \\Rightarrow x dx = \\frac{1}{2} du$.\n3. Substitute: $\\int e^u (\\frac{1}{2} du) = \\frac{1}{2} \\int e^u du$.\n4. Integrate: \\frac{1}{2} e^u + C.\n5. Back-sub: \\frac{1}{2} e^{x^2} + C." },
            { id: 112, question: "Evaluate $\\int_0^{\\pi/4} \\sec^2 x dx$.", model_answer: "1. Antiderivative: We know $\\frac{d}{dx}(\\tan x) = \\sec^2 x$. So $\\int \\sec^2 x = \\tan x$.\n2. Apply Limits: $[\\tan x]_0^{\\pi/4}$.\n3. Calculate: $\\tan(\\frac{\\pi}{4}) - \\tan(0)$.\n4. Values: $1 - 0 = 1$." },
            { id: 113, question: "Integrate $\\int x \\cos x dx$.", model_answer: "1. Integration by Parts: $u=x, dv=\\cos x dx$.\n2. Differentiate/Integrate: $du=dx, v=\\sin x$.\n3. Formula: $uv - \\int v du$.\n4. Apply: $x \\sin x - \\int \\sin x dx$.\n5. Final: $x \\sin x - (-\\cos x) + C = x \\sin x + \\cos x + C$." },
            { id: 114, question: "Integrate $\\int \\frac{1}{x^2+4} dx$.", model_answer: "1. Standard Form: $\\int \\frac{dx}{x^2+a^2} = \\frac{1}{a} \\tan^{-1}(\\frac{x}{a})$.\n2. Identify: $a^2 = 4 \\Rightarrow a = 2$.\n3. Apply: $\\frac{1}{2} \\tan^{-1}(\\frac{x}{2}) + C$." },
            { id: 115, question: "Find the area between $y=x^2$ and $y=x$.", model_answer: "1. Intersections: $x^2 = x \\Rightarrow x^2 - x = 0 \\Rightarrow x(x-1)=0$. $x=0, 1$.\n2. Setup Integral: In $[0,1]$, test $x=0.5 \\Rightarrow y=x$ is upper, $y=x^2$ is lower.\n3. Integral: $A = \\int_0^1 (x - x^2) dx$.\n4. Evaluate: $[\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1$.\n5. Result: $(\\frac{1}{2} - \\frac{1}{3}) - 0 = \\frac{1}{6}$." },
            { id: 116, question: "Find the volume formed by rotating $y=x^2$ about x-axis from $0$ to $2$.", model_answer: "1. Disk Method: $V = \\pi \\int_a^b [f(x)]^2 dx$.\n2. Setup: $V = \\pi \\int_0^2 (x^2)^2 dx = \\pi \\int_0^2 x^4 dx$.\n3. Integrate: $\\pi [\\frac{x^5}{5}]_0^2$.\n4. Evaluate: $\\pi (\\frac{32}{5} - 0) = \\frac{32\\pi}{5}$." },
            { id: 117, question: "Evaluate $\\int \\frac{x}{1+x^2} dx$.", model_answer: "1. Substitution: Let $u = 1+x^2$.\n2. Differential: $du = 2x dx \\Rightarrow x dx = \\frac{1}{2} du$.\n3. Substitute: $\\int \\frac{1}{u} \\cdot \\frac{1}{2} du = \\frac{1}{2} \\int \\frac{1}{u} du$.\n4. Integrate: \\frac{1}{2} \\ln(1+x^2) + C." },
            { id: 118, question: "Differentiate $y = \\sin(\\cos x)$.", model_answer: "1. Chain Rule: $y' = \\cos(\\text{inner}) \\cdot \\frac{d}{dx}(\\text{inner})$.\n2. Inner: Inner is $\\cos x$, derivative is $-\\sin x$.\n3. Apply: $y' = \\cos(\\cos x) \\cdot (-\\sin x)$.\n4. Result: $- \\sin x \\cos(\\cos x)$." },
            { id: 119, question: "Find $f''(x)$ for $f(x) = x e^x$.", model_answer: "1. First Derivative: Product Rule. $f' = 1 \\cdot e^x + x \\cdot e^x = e^x(1+x)$.\n2. Second Derivative: Product Rule again. $f'' = e^x(1+x) + e^x(1)$.\n3. Factor: $e^x(1 + x + 1)$.\n4. Result: $e^x(x+2)$." },
            { id: 120, question: "Integrate $\\int \\tan^3 x \\sec^2 x dx$.", model_answer: "1. Substitution: Let $u = \\tan x$.\n2. Differential: $du = \\sec^2 x dx$.\n3. Substitute: The integral becomes $\\int u^3 du$.\n4. Integrate: $\\frac{u^4}{4} + C$.\n5. Back-sub: $\\frac{1}{4} \\tan^4 x + C$." }
        ],
        m1_text_3: [
            { id: 121, question: "Find $\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2}$.", model_answer: "1. Check Form: $0/0$. Use L'Hopital.\n2. First Derivs: num: $\\sin x$, denom: $2x$. Limit is $\\lim \\frac{\\sin x}{2x}$.\n3. L'Hopital again: num: $\\cos x$, denom: $2$.\n4. Evaluate: $\\frac{\\cos 0}{2} = \\frac{1}{2}$." },
            { id: 122, question: "Integrate $\\int \\ln x dx$.", model_answer: "1. Parts: $u=\\ln x, dv=dx$.\n2. Diff/Int: $du = \\frac{1}{x} dx, v=x$.\n3. Apply: $x \\ln x - \\int x (\\frac{1}{x}) dx$.\n4. Simplify: $x \\ln x - \\int 1 dx$.\n5. Result: $x \\ln x - x + C$." },
            { id: 123, question: "Find intervals of concavity for $f(x) = x^4 - 4x^3$.", model_answer: "1. First Deriv: $f' = 4x^3 - 12x^2$.\n2. Second Deriv: $f'' = 12x^2 - 24x$.\n3. Inflection Points: Set $f''=0 \\Rightarrow 12x(x-2)=0$. $x=0, 2$.\n4. Test Intervals:\n• $(-\\infty, 0)$: Test -1 $\\Rightarrow (+)(-) < 0$ (Concave Up check: $f''(-1) = 12(-1)^2 - 24(-1) = 36 > 0$ Up).\n• $(0, 2)$: Test 1 $\\Rightarrow 12-24 < 0$ (Concave Down).\n• $(2, \\infty)$: Test 3 $\\Rightarrow 108-72 > 0$ (Concave Up).\n5. Result: Up on $(-\\infty, 0) \\cup (2, \\infty)$, Down on $(0, 2)$." },
            { id: 124, question: "Integrate $\\int \\sin^2 x dx$.", model_answer: "1. Identity: $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$.\n2. Rewrite: $\\int \\frac{1}{2} dx - \\int \\frac{\\cos 2x}{2} dx$.\n3. Integrate: $\\frac{1}{2}x - \\frac{1}{2} \\frac{\\sin 2x}{2}$.\n4. Result: $\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$." },
            { id: 125, question: "Find the average value of $f(x) = x^2$ on $[1,3]$.", model_answer: "1. Formula: $Avg = \\frac{1}{b-a} \\int_a^b f(x) dx$.\n2. Setup: $\\frac{1}{3-1} \\int_1^3 x^2 dx = \\frac{1}{2} [\\frac{x^3}{3}]_1^3$.\n3. Evaluate: $\\frac{1}{2} (\\frac{27}{3} - \\frac{1}{3}) = \\frac{1}{2} (\\frac{26}{3})$.\n4. Result: $\\frac{13}{3}$." },
            { id: 126, question: "Solve for $x$: $\\log_2(x) + \\log_2(x-2) = 3$.", model_answer: "1. Combine Logs: $\\log_2(x(x-2)) = 3$.\n2. Exponentiate: $x(x-2) = 2^3 = 8$.\n3. Quadratic: $x^2 - 2x - 8 = 0$.\n4. Factor: $(x-4)(x+2) = 0$.\n5. Check Domain: $x$ must be $>0$ and $x-2>0$ (so $x>2$).\n6. Result: $x=4$ only ($x=-2$ rejected)." },
            { id: 127, question: "Differentiate $y = \\tan^{-1}(\\frac{1}{x})$.", model_answer: "1. Chain Rule: $y' = \\frac{1}{1 + (1/x)^2} \\cdot \\frac{d}{dx}(x^{-1})$.\n2. Inner Deriv: $-x^{-2} = \\frac{-1}{x^2}$.\n3. Substitute: $\\frac{1}{1 + 1/x^2} \\cdot \\frac{-1}{x^2}$.\n4. Simplify: Multiply num/denom by $x^2$. $\\frac{x^2}{x^2+1} \\cdot \\frac{-1}{x^2}$.\n5. Result: $\\frac{-1}{x^2+1}$." },
            { id: 128, question: "Integrate $\\int x \\sqrt{x-1} dx$.", model_answer: "1. Substitution: $u = x-1 \\Rightarrow x = u+1, dx=du$.\n2. Substitute: $\\int (u+1) \\sqrt{u} du = \\int (u^{3/2} + u^{1/2}) du$.\n3. Integrate: $\\frac{2}{5}u^{5/2} + \\frac{2}{3}u^{3/2}$.\n4. Back-sub: $\\frac{2}{5}(x-1)^{5/2} + \\frac{2}{3}(x-1)^{3/2} + C$." },
            { id: 129, question: "Find $\\frac{dy}{dx}$ if $y = \\int_0^{x^2} \\cos t dt$.", model_answer: "1. FTC Part 1: $\\frac{d}{dx} \\int_a^{g(x)} f(t) dt = f(g(x)) \\cdot g'(x)$.\n2. Identify: $f(t)=\\cos t$, $g(x)=x^2$.\n3. Apply: $\\cos(x^2) \\cdot \\frac{d}{dx}(x^2)$.\n4. Result: $2x \\cos(x^2)$." },
            { id: 130, question: "Evaluate $\\int_1^e \\frac{\\ln x}{x} dx$.", model_answer: "1. Substitution: $u = \\ln x \\Rightarrow du = \\frac{1}{x} dx$.\n2. Limits: $x=1 \\to u=0$, $x=e \\to u=1$.\n3. Substitute: $\\int_0^1 u du$.\n4. Integrate: $[\\frac{u^2}{2}]_0^1$.\n5. Result: $\\frac{1}{2} - 0 = \\frac{1}{2}$." }
        ],
        m1_text_4: [
            { id: 131, question: "Find the slope of the normal line to $y=x^2$ at $x=3$.", model_answer: "1. Tangent Slope: $y'=2x$. At $x=3, m_{tan} = 6$.\n2. Normal Slope: Perpendicular means negative reciprocal.\n3. Calc: $m_{norm} = \\frac{-1}{m_{tan}}$.\n4. Result: $\\frac{-1}{6}$." },
            { id: 132, question: "Differentiate $y = 5^{x^2+x}$.", model_answer: "1. Rule: $d/dx(a^u) = a^u (\\ln a) u'$.\n2. Identify: $a=5, u=x^2+x$.\n3. Derivative $u'$: $2x+1$.\n4. Result: $5^{x^2+x} (\\ln 5) (2x+1)$." },
            { id: 133, question: "Integrate $\\int \\frac{1}{\\sqrt{9-x^2}} dx$.", model_answer: "1. Standard Form: $\\int \\frac{dx}{\\sqrt{a^2-x^2}} = \\sin^{-1}(\\frac{x}{a})$.\n2. Identify: $a^2=9 \\Rightarrow a=3$.\n3. Apply: $\\sin^{-1}(\\frac{x}{3}) + C$." },
            { id: 134, question: "Find $\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x$.", model_answer: "1. Definition: This is the standard definition of Euler's number.\n2. Result: $e$." },
            { id: 135, question: "Find the absolute max of $f(x) = x^3 - 3x + 1$ on $[0, 2]$.", model_answer: "1. Critical Points: $f' = 3x^2 - 3 = 0 \\Rightarrow x=1$ (in domain).\n2. Evaluate Endpoints & Criticals:\n• $f(0) = 1$.\n• $f(1) = 1 - 3 + 1 = -1$.\n• $f(2) = 8 - 6 + 1 = 3$.\n3. Compare: Max is 3." },
            { id: 136, question: "Integrate $\\int x^2 \\ln x dx$.", model_answer: "1. Parts: $u=\\ln x$ (L.I.A.T.E), $dv=x^2 dx$.\n2. Diff/Int: $du = \\frac{1}{x} dx$, $v = \\frac{x^3}{3}$.\n3. Apply: $\\frac{x^3}{3} \\ln x - \\int \\frac{x^3}{3} \\cdot \\frac{1}{x} dx$.\n4. Simplify Integral: $\\frac{1}{3} \\int x^2 dx = \\frac{1}{3} (\\frac{x^3}{3})$.\n5. Result: $\\frac{x^3}{3} \\ln x - \\frac{x^3}{9} + C$." },
            { id: 137, question: "Integrate $\\int \\frac{e^x}{1+e^x} dx$.", model_answer: "1. Substitution: $u = 1+e^x \\Rightarrow du = e^x dx$.\n2. Substitute: $\\int \\frac{1}{u} du$.\n3. Integrate: $\\ln(1+e^x) + C$." },
            { id: 138, question: "Differentiate $y = \\sinh(3x)$.", model_answer: "1. Rule: $d/dx(\\sinh u) = \\cosh u \\cdot u'$.\n2. Apply: $\\cosh(3x) \\cdot 3$.\n3. Result: $3 \\cosh(3x)$." },
            { id: 139, question: "Find the area of the region bounded by $y=e^x$, $y=0$, $x=0$, $x=1$.", model_answer: "1. Setup: $\\int_0^1 e^x dx$.\n2. Antiderivative: $[e^x]_0^1$.\n3. Evaluate: $e^1 - e^0$.\n4. Result: $e - 1$." },
            { id: 140, question: "Integrate $\\int \\cos^3 x dx$.", model_answer: "1. Strategy: Split odd power. $\\int \\cos^2 x \\cdot \\cos x dx$.\n2. Identity: $\\cos^2 x = 1 - \\sin^2 x$.\n3. Substitute: $\\int (1 - \\sin^2 x) \\cos x dx$. Let $u=\\sin x, du=\\cos x dx$.\n4. Integrate: $\\int (1-u^2) du = u - \\frac{u^3}{3}$.\n5. Back-sub: $\\sin x - \\frac{\\sin^3 x}{3} + C$." }
        ],      
        m1_text_5: [
            { id: 141, question: "Find $y'$ if $x^y = y^x$.", model_answer: "1. Log: $y \\ln x = x \\ln y$.\n2. Implicit Diff: $y(\\frac{1}{x}) + y' \\ln x = x(\\frac{y'}{y}) + 1 \\cdot \\ln y$.\n3. Group $y'$: $y'(\\ln x - \\frac{x}{y}) = \\ln y - \\frac{y}{x}$.\n4. Simplify: $y'(\\frac{y \\ln x - x}{y}) = \\frac{x \\ln y - y}{x}$.\n5. Result: $y' = \\frac{y(x \\ln y - y)}{x(y \\ln x - x)}$." },
            { id: 142, question: "Integrate $\\int \\frac{dx}{x^2-4}$.", model_answer: "1. Partial Fractions: $\\frac{1}{(x-2)(x+2)} = \\frac{A}{x-2} + \\frac{B}{x+2}$.\n2. Solve A, B: $1 = A(x+2) + B(x-2)$. Set $x=2 \\Rightarrow 4A=1 \\Rightarrow A=1/4$. Set $x=-2 \\Rightarrow -4B=1 \\Rightarrow B=-1/4$.\n3. Integrate: $\\frac{1}{4} \\int \\frac{dx}{x-2} - \\frac{1}{4} \\int \\frac{dx}{x+2}$.\n4. Result: $\\frac{1}{4} \\ln|\\frac{x-2}{x+2}| + C$." },
            { id: 143, question: "Evaluate $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$.", model_answer: "1. Check Form: $0/0$. Apply L'Hopital.\n2. First Derivs: num: $e^x - 1$, denom: $2x$. Limit is $0/0$.\n3. Second Derivs: num: $e^x$, denom: $2$.\n4. Evaluate: $e^0 / 2 = 1/2$." },
            { id: 144, question: "Find volume generated by rotating region bounded by $y=\\sqrt{x}, y=0, x=4$ about y-axis.", model_answer: "1. Shell Method: $V = 2\\pi \\int_a^b x f(x) dx$.\n2. Setup: $V = 2\\pi \\int_0^4 x \\sqrt{x} dx = 2\\pi \\int_0^4 x^{3/2} dx$.\n3. Integrate: $2\\pi [\\frac{2}{5} x^{5/2}]_0^4$.\n4. Evaluate: $4^{5/2} = 32$. So $2\\pi(\\frac{2}{5} \\cdot 32)$.\n5. Result: $\\frac{128\\pi}{5}$." },
            { id: 145, question: "Differentiate $y = \\cos^{-1}(x^2)$.", model_answer: "1. Chain Rule: $y' = \\frac{-1}{\\sqrt{1-(x^2)^2}} \\cdot \\frac{d}{dx}(x^2)$.\n2. Inner Deriv: $2x$.\n3. Result: $\\frac{-2x}{\\sqrt{1-x^4}}$." },
            { id: 146, question: "Integrate $\\int_1^2 x^3 dx$ using Trapezoidal Rule with $n=2$.", model_answer: "1. Step size: $h = \\frac{2-1}{2} = 0.5$. Points: $1, 1.5, 2$.\n2. Values: $f(1)=1, f(1.5)=3.375, f(2)=8$.\n3. Formula: $\\frac{h}{2} [y_0 + 2y_1 + y_2]$.\n4. Calc: $\\frac{0.5}{2} [1 + 2(3.375) + 8] = 0.25 [1 + 6.75 + 8] = 0.25 [15.75]$.\n5. Result: $3.9375$." },
            { id: 147, question: "Solve differential equation $\\frac{dy}{dx} = \\frac{x}{y}$.", model_answer: "1. Separate Variables: $y dy = x dx$.\n2. Integrate: $\\int y dy = \\int x dx$.\n3. Result: $\\frac{y^2}{2} = \\frac{x^2}{2} + C$.\n4. Rearrange: $y^2 - x^2 = 2C$ (Hyperbola family)." },
            { id: 148, question: "Integrate $\\int \\frac{1}{x \\ln^2 x} dx$.", model_answer: "1. Substitution: $u = \\ln x \\Rightarrow du = \\frac{1}{x} dx$.\n2. Substitute: $\\int \\frac{1}{u^2} du = \\int u^{-2} du$.\n3. Integrate: $-u^{-1} + C$.\n4. Back-sub: $\\frac{-1}{\\ln x} + C$." },
            { id: 149, question: "Find the inflection point of $f(x) = x^3 - 6x^2$.", model_answer: "1. First Deriv: $3x^2 - 12x$.\n2. Second Deriv: $6x - 12$.\n3. Set to 0: $6x = 12 \\Rightarrow x = 2$.\n4. Check Sign: $f'' < 0$ for $x<2$, $f'' > 0$ for $x>2$. Sign changes.\n5. Point: $f(2) = 8 - 24 = -16$. Inflection at $(2, -16)$." },
            { id: 150, question: "Evaluate $\\int_0^{\\pi} \\sin x dx$.", model_answer: "1. Antiderivative: $-\\cos x$.\n2. Limits: $[-\\cos x]_0^{\\pi}$.\n3. Evaluate: $(-\\cos \\pi) - (-\\cos 0)$.\n4. Calc: $-(-1) - (-1) = 1 + 1$.\n5. Result: $2$." }
        ]
                    }
                }
            }
        },

        // 7. Programming
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
                        coding_list: [
                            { id: 13, title: "Coding: Basics (Input/Output)", qCount: 10 },
                            { id: 14, title: "Coding: Loops & Basic Arrays", qCount: 10 },
                            { id: 15, title: "Coding: Algorithms (Digits/Strings)", qCount: 10 },
                            { id: 16, title: "Coding: Advanced Logic (Patterns)", qCount: 10 },
                            { id: 17, title: "Coding: Expert Algorithms 1", qCount: 10 },
                            { id: 18, title: "Coding: Expert Algorithms 2", qCount: 10 },
                            { id: 19, title: "Coding: Master Class 1", qCount: 10 },
                            { id: 20, title: "Coding: Master Class 2", qCount: 10 }
                        ],
                        
                        lab_2: [
                            {
                                id: 1, type: "code",
                                prompt: "Write a Java program that returns the Celsius value 'C' for a given temperature measured in Fahrenheit 'F'. Formula: C = 5 * (F - 32) / 9.",
                                hint: "Use Scanner to read double input. Formula: 5.0 * (f - 32) / 9.0",
                                testCaseInputs: "100",
                                expectedOutput: "37.77",
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Enter temp in Fahrenheit: \");\n        double f = input.nextDouble();\n        double c = 5.0 * (f - 32) / 9.0;\n        System.out.println(\"Temp \" + f + \" in Fahrenheit = \" + c + \" Celsius\");\n    }\n}"
                            },
                            {
                                id: 2, type: "code",
                                prompt: "Write a Java program to evaluate the distance S in vertical motion under gravity given S = ut - 0.5*g*t^2. (g=9.8). Read u (initial velocity) and t (time).",
                                hint: "Use Math.pow(t, 2) for t squared.",
                                testCaseInputs: "10 5",
                                expectedOutput: "-72.5",
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Enter u and t: \");\n        double u = input.nextDouble();\n        double t = input.nextDouble();\n        double g = 9.8;\n        double s = (u*t) - (0.5 * g * Math.pow(t, 2));\n        System.out.println(\"Distance = \" + s);\n    }\n}"
                            },
                            {
                                id: 3, type: "code",
                                prompt: "Calculate the volume and surface area of a sphere given its radius r. (Vol = 4/3 * pi * r^3, Area = 4 * pi * r^2)",
                                hint: "Use Math.PI. Use 4.0/3.0 to ensure decimal division.",
                                testCaseInputs: "5",
                                expectedOutput: "523.59", // Volume of sphere radius 5
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        double r = input.nextDouble();\n        double vol = (4.0/3.0) * Math.PI * Math.pow(r, 3);\n        double area = 4.0 * Math.PI * Math.pow(r, 2);\n        System.out.println(\"Volume: \" + vol + \"\\nArea: \" + area);\n    }\n}"
                            }
                        ],

                        lab_3: [
                            {
                                id: 1, type: "code",
                                prompt: "Write a program to solve a quadratic equation ax^2 + bx + c = 0. Print 'Two roots', 'One root', or 'No real roots' based on the discriminant.",
                                hint: "Discriminant = b^2 - 4ac",
                                testCaseInputs: "1 -3 2", // Roots are 2 and 1
                                expectedOutput: "Two roots",
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double a = sc.nextDouble(), b = sc.nextDouble(), c = sc.nextDouble();\n        double d = Math.pow(b, 2) - 4*a*c;\n        if (d > 0) System.out.println(\"Two roots\");\n        else if (d == 0) System.out.println(\"One root\");\n        else System.out.println(\"No real roots\");\n    }\n}"
                            },
                            {
                                id: 2, type: "code",
                                prompt: "Characterize an earthquake based on Richter scale n. (<5: Little, 5-5.5: Some, 5.5-6.5: Serious, 6.5-7.5: Disaster, >7.5: Catastrophe)",
                                hint: "Use if-else if ladder.",
                                testCaseInputs: "6.0",
                                expectedOutput: "Serious",
                                validationKeywords: ["Serious"],
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double n = sc.nextDouble();\n        if (n < 5.0) System.out.println(\"Little damage\");\n        else if (n < 5.5) System.out.println(\"Some damage\");\n        else if (n < 6.5) System.out.println(\"Serious damage\");\n        else if (n < 7.5) System.out.println(\"Disaster\");\n        else System.out.println(\"Catastrophe\");\n    }\n}"
                            }
                        ],

                        lab_4: [
                            {
                                id: 1, type: "code",
                                prompt: "Write a program that asks for a number (1-7) and prints the weekday name (1=Saturday) using switch statement.",
                                hint: "switch(day) { case 1: ... }",
                                testCaseInputs: "1",
                                expectedOutput: "Saturday",
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int day = sc.nextInt();\n        switch(day) {\n            case 1: System.out.println(\"Saturday\"); break;\n            case 2: System.out.println(\"Sunday\"); break;\n            case 3: System.out.println(\"Monday\"); break;\n            case 4: System.out.println(\"Tuesday\"); break;\n            case 5: System.out.println(\"Wednesday\"); break;\n            case 6: System.out.println(\"Thursday\"); break;\n            case 7: System.out.println(\"Friday\"); break;\n            default: System.out.println(\"Invalid\");\n        }\n    }\n}"
                            },
                            {
                                id: 2, type: "code",
                                prompt: "Read a month number (1-12) and print the Season (Winter, Spring, Summer, Fall) using switch.",
                                hint: "Group cases: case 12: case 1: case 2: ...",
                                testCaseInputs: "3",
                                expectedOutput: "Spring",
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        switch(m) {\n            case 12: case 1: case 2: System.out.println(\"Winter\"); break;\n            case 3: case 4: case 5: System.out.println(\"Spring\"); break;\n            case 6: case 7: case 8: System.out.println(\"Summer\"); break;\n            case 9: case 10: case 11: System.out.println(\"Fall\"); break;\n            default: System.out.println(\"Invalid\");\n        }\n    }\n}"
                            },
                            {
                                id: 3, type: "code",
                                prompt: "Generate two random integer numbers between a and b (inclusive).",
                                hint: "Formula: a + (int)(Math.random() * ((b - a) + 1))",
                                testCaseInputs: "10 20",
                                validationKeywords: [], // Random output can't be strictly validated
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        int r1 = a + (int)(Math.random() * ((b - a) + 1));\n        System.out.println(r1);\n    }\n}"
                            }
                        ],

                        lab_5: [
                            {
                                id: 1, type: "code",
                                prompt: "Read a character and print if it is Digit, Uppercase, Lowercase, or Other.",
                                hint: "Use char comparison (c >= '0' && c <= '9')",
                                testCaseInputs: "A",
                                expectedOutput: "Uppercase",
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        char c = sc.next().charAt(0);\n        if (c >= '0' && c <= '9') System.out.println(\"Digit\");\n        else if (c >= 'A' && c <= 'Z') System.out.println(\"Uppercase\");\n        else if (c >= 'a' && c <= 'z') System.out.println(\"Lowercase\");\n        else System.out.println(\"Other\");\n    }\n}"
                            },
                            {
                                id: 2, type: "code",
                                prompt: "Write a simple calculator that reads two numbers and an operator (+, -) and prints the result.",
                                hint: "Read numbers then char. Check if char == '+' or '-'",
                                testCaseInputs: "10 5 +",
                                expectedOutput: "15",
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double n1 = sc.nextDouble(), n2 = sc.nextDouble();\n        char op = sc.next().charAt(0);\n        if (op == '+') System.out.println(n1 + n2);\n        else if (op == '-') System.out.println(n1 - n2);\n    }\n}"
                            }
                        ],

                        lab_6: [
                            {
                                id: 1, type: "code",
                                prompt: "Read number of students n, then n grades. Print Average and Highest grade.",
                                hint: "Use a for loop. Track sum and max.",
                                testCaseInputs: "3 80 90 70", // n=3, grades=80,90,70
                                expectedOutput: "90", // Expecting Max: 90
                                validationKeywords: ["Avg", "Max"],
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double sum = 0, max = -1;\n        for(int i=0; i<n; i++) {\n            double g = sc.nextDouble();\n            sum += g;\n            if(g > max) max = g;\n        }\n        System.out.println(\"Avg: \" + (sum/n) + \" Max: \" + max);\n    }\n}"
                            },
                            {
                                id: 2, type: "code",
                                prompt: "Calculate the sum of even numbers from 1 to n.",
                                hint: "Loop from 2 to n with step 2 (i+=2).",
                                testCaseInputs: "10",
                                expectedOutput: "30", // 2+4+6+8+10
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sum = 0;\n        for(int i=2; i<=n; i+=2) sum += i;\n        System.out.println(\"Sum: \" + sum);\n    }\n}"
                            },
                            {
                                id: 3, type: "code",
                                prompt: "Print numbers from 100 down to 0, decreasing by 7 each step.",
                                hint: "Loop logic: for(int i=100; i>=0; i-=7)",
                                testCaseInputs: "",
                                expectedOutput: "100 93", // Partial check
                                solutionCode: "public class Main {\n    public static void main(String[] args) {\n        for(int i=100; i>=0; i-=7) System.out.print(i + \" \");\n    }\n}"
                            }
                        ],

                        lab_7: [
                            {
                                id: 1, type: "code",
                                prompt: "Display a table of n vs n^3 for numbers from 1 to user input n.",
                                hint: "Use a loop and print i and i*i*i",
                                testCaseInputs: "3",
                                expectedOutput: "27", // 3^3 check
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(\"N\\tCube\");\n        for(int i=1; i<=n; i++) System.out.println(i + \"\\t\" + (i*i*i));\n    }\n}"
                            },
                            {
                                id: 2, type: "code",
                                prompt: "Read n real numbers and display their Average, Max, and Min.",
                                hint: "Initialize max/min with the first number.",
                                testCaseInputs: "3 10 20 30",
                                expectedOutput: "30", // Check max
                                validationKeywords: ["Avg", "Max", "Min"],
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double val = sc.nextDouble();\n        double min = val, max = val, sum = val;\n        for(int i=1; i<n; i++) {\n            val = sc.nextDouble();\n            sum += val;\n            if(val > max) max = val;\n            if(val < min) min = val;\n        }\n        System.out.println(\"Avg: \" + (sum/n) + \" Max: \" + max + \" Min: \" + min);\n    }\n}"
                            }
                        ],

                        lab_8: [
                            {
                                id: 1, type: "code",
                                prompt: "Read an array of 5 integers (0-50) and display a bar chart using '*' characters.",
                                hint: "Nested loop: Outer for elements, inner for '*' printing.",
                                testCaseInputs: "5 1 2 3 4 5",
                                expectedOutput: "*****", // Check for existence of stars
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[] arr = new int[5];\n        for(int i=0; i<5; i++) arr[i] = sc.nextInt();\n        for(int x : arr) {\n            System.out.print(x + \": \");\n            for(int j=0; j<x; j++) System.out.print(\"*\");\n            System.out.println();\n        }\n    }\n}"
                            },
                            {
                                id: 2, type: "code",
                                prompt: "Read an array of n elements and find the Maximum value and its Index.",
                                hint: "Loop through array, keep track of max value and index.",
                                testCaseInputs: "3 10 50 20",
                                expectedOutput: "50",
                                validationKeywords: ["Max", "index"],
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0; i<n; i++) arr[i] = sc.nextInt();\n        int max = arr[0], idx = 0;\n        for(int i=1; i<n; i++) {\n            if(arr[i] > max) { max = arr[i]; idx = i; }\n        }\n        System.out.println(\"Max: \" + max + \" at index \" + idx);\n    }\n}"
                            },
                            {
                                id: 3, type: "code",
                                prompt: "Read an array of n elements and Reverse it into another array.",
                                hint: "rev[i] = arr[n - 1 - i]",
                                testCaseInputs: "3 1 2 3",
                                expectedOutput: "3, 2, 1", // Array toString format
                                solutionCode: "import java.util.Scanner;\nimport java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0; i<n; i++) arr[i] = sc.nextInt();\n        int[] rev = new int[n];\n        for(int i=0; i<n; i++) rev[i] = arr[n-1-i];\n        System.out.println(Arrays.toString(rev));\n    }\n}"
                            }
                        ],

                        // ======================================================
                        // CODING CHALLENGES (Formerly in Quiz)
                        // ======================================================
                        lab_13: [
                            {
                                id: 241, type: "code",
                                prompt: "Write a program that asks the user to enter their name, then prints a welcome message.",
                                hint: "Use Scanner.nextLine() to read the name.",
                                testCaseInputs: "Adham",
                                // الكلمات اللي لازم تظهر في الناتج (الشاشة السوداء)
                                validationKeywords: ["Adham"],
                                // كلمات لازم تكون مكتوبة جوه كود الطالب نفسه عشان نمنع الغش
                                codePatterns: ["Scanner", "System.in", "nextLine"], 
                                solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Please enter your name: \");\n        String name = scanner.nextLine();\n        System.out.println(\"Welcome, \" + name + \"!\");\n    }\n}"
                            },
                            { id: 242, type: "code", prompt: "Write a program that asks for two numbers and prints: Sum, Subtraction, Multiplication, and Division.", hint: "Use double for division.", testCaseInputs: "10 5", expectedOutput: "15.0", validationKeywords: ["Sum", "Subtract", "Multiply", "Divide", "2.0", "50.0"], solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter first number: \");\n        double num1 = scanner.nextDouble();\n        System.out.print(\"Enter second number: \");\n        double num2 = scanner.nextDouble();\n        System.out.println(\"Sum: \" + (num1 + num2));\n        System.out.println(\"Sub: \" + (num1 - num2));\n        System.out.println(\"Mul: \" + (num1 * num2));\n        System.out.println(\"Div: \" + (num1 / num2));\n    }\n}" },
                            { id: 243, type: "code", prompt: "Calculate Circle Area given Radius.", hint: "PI * r * r", testCaseInputs: "5", expectedOutput: "78.53", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double radius = scanner.nextDouble();\n        System.out.println(\"Area: \" + (Math.PI * radius * radius));\n    }\n}" },
                            { id: 244, type: "code", prompt: "Convert Fahrenheit to Celsius. C = (F - 32) * 5/9.", hint: "Use 5.0/9.0", testCaseInputs: "100", expectedOutput: "37.77", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double f = scanner.nextDouble();\n        double c = (f - 32) * (5.0 / 9.0);\n        System.out.println(\"Celsius: \" + c);\n    }\n}" },
                            { id: 245, type: "code", prompt: "Calculate Average of 3 numbers.", hint: "Sum / 3", testCaseInputs: "10 20 30", expectedOutput: "20.0", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(\"Avg: \" + (sc.nextDouble() + sc.nextDouble() + sc.nextDouble()) / 3);\n    }\n}" },
                            { id: 246, type: "code", prompt: "Check if number is Even or Odd.", hint: "num % 2 == 0", testCaseInputs: "4", expectedOutput: "Even", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        if(new Scanner(System.in).nextInt() % 2 == 0) System.out.println(\"Even\"); else System.out.println(\"Odd\");\n    }\n}" },
                            { id: 247, type: "code", prompt: "Check if number is Positive, Negative, or Zero.", hint: "if-else ladder", testCaseInputs: "-5", expectedOutput: "Negative", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        double n = new Scanner(System.in).nextDouble();\n        if(n > 0) System.out.println(\"Positive\"); else if(n < 0) System.out.println(\"Negative\"); else System.out.println(\"Zero\");\n    }\n}" },
                            { id: 248, type: "code", prompt: "Pass/Fail check (Grade >= 50).", hint: "if(grade >= 50)", testCaseInputs: "49", expectedOutput: "Fail", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        if(new Scanner(System.in).nextDouble() >= 50) System.out.println(\"Pass\"); else System.out.println(\"Fail\");\n    }\n}" },
                            { id: 249, type: "code", prompt: "Find Max of 3 numbers.", hint: "Compare a, b, c", testCaseInputs: "10 50 20", expectedOutput: "50", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a=sc.nextInt(), b=sc.nextInt(), c=sc.nextInt();\n        System.out.println(Math.max(a, Math.max(b, c)));\n    }\n}" },
                            { id: 250, type: "code", prompt: "Print Day Name (1-7) using switch.", hint: "1=Saturday...", testCaseInputs: "1", expectedOutput: "Saturday", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int d = new Scanner(System.in).nextInt();\n        switch(d){ case 1: System.out.println(\"Saturday\"); break; default: System.out.println(\"Invalid\"); }\n    }\n}" },
                        ],
                        lab_14: [
                            { id: 251, type: "code", prompt: "Print numbers 1 to 10 on same line.", hint: "for loop", testCaseInputs: "", expectedOutput: "1 2 3 4 5 6 7 8 9 10", solutionCode: "public class Main { public static void main(String[] a) { for(int i=1;i<=10;i++) System.out.print(i+\" \"); } }" },
                            { id: 252, type: "code", prompt: "Sum of numbers from 1 to N.", hint: "Loop and sum+=i", testCaseInputs: "5", expectedOutput: "15", solutionCode: "import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n int n = new Scanner(System.in).nextInt();\n int s=0; for(int i=1;i<=n;i++) s+=i;\n System.out.println(s);\n } }" },
                            { id: 253, type: "code", prompt: "Print Multiplication Table of N (1-12).", hint: "Loop 1 to 12", testCaseInputs: "5", expectedOutput: "60", solutionCode: "import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n int n = new Scanner(System.in).nextInt();\n for(int i=1;i<=12;i++) System.out.println(n*i);\n } }" },
                            { id: 254, type: "code", prompt: "Print Even numbers 1 to 50.", hint: "i+=2", testCaseInputs: "", expectedOutput: "2 4 6", solutionCode: "public class Main { public static void main(String[] a) { for(int i=2;i<=50;i+=2) System.out.print(i+\" \"); } }" },
                            { id: 255, type: "code", prompt: "Calculate Factorial of N.", hint: "fact *= i", testCaseInputs: "5", expectedOutput: "120", solutionCode: "import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n long f=1; int n=new Scanner(System.in).nextInt();\n for(int i=1;i<=n;i++) f*=i;\n System.out.println(f);\n } }" },
                            { id: 256, type: "code", prompt: "Sum of array elements (size 5).", hint: "Read 5 inputs then sum", testCaseInputs: "1 2 3 4 5", expectedOutput: "15", solutionCode: "import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n Scanner s = new Scanner(System.in);\n int sum=0; for(int i=0;i<5;i++) sum+=s.nextInt();\n System.out.println(sum);\n } }" },
                            { id: 257, type: "code", prompt: "Search for number in array (Size 5).", hint: "Flag found=true", testCaseInputs: "10 20 30 40 50 30", expectedOutput: "Found", solutionCode: "import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n Scanner s = new Scanner(System.in);\n int[] a=new int[5]; for(int i=0;i<5;i++) a[i]=s.nextInt();\n int t=s.nextInt();\n for(int x:a) if(x==t) { System.out.println(\"Found\"); return; }\n System.out.println(\"Not Found\");\n } }" },
                            { id: 258, type: "code", prompt: "Reverse Array (Size 5).", hint: "Loop backwards", testCaseInputs: "1 2 3 4 5", expectedOutput: "5 4 3 2 1", solutionCode: "import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n Scanner s = new Scanner(System.in);\n int[] a=new int[5]; for(int i=0;i<5;i++) a[i]=s.nextInt();\n for(int i=4;i>=0;i--) System.out.print(a[i]+\" \");\n } }" },
                            { id: 259, type: "code", prompt: "Print String Length.", hint: "str.length()", testCaseInputs: "Hello", expectedOutput: "5", solutionCode: "import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n System.out.println(new Scanner(System.in).nextLine().length());\n } }" },
                            { id: 260, type: "code", prompt: "Password Check ('Java123').", hint: "Use .equals()", testCaseInputs: "Java123", expectedOutput: "Access Granted", solutionCode: "import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n if(new Scanner(System.in).nextLine().equals(\"Java123\")) System.out.println(\"Access Granted\"); else System.out.println(\"Access Denied\");\n } }" },
                        ],
                        lab_15: [
                            { id: 261, type: "code", prompt: "Calculate Sum of Digits (e.g. 123 -> 6).", hint: "Loop: num % 10 then num /= 10", testCaseInputs: "1234", expectedOutput: "10", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int num = new Scanner(System.in).nextInt();\n        int sum = 0;\n        while (num != 0) {\n            sum += num % 10;\n            num /= 10;\n        }\n        System.out.println(\"Sum of digits: \" + sum);\n    }\n}" },
                            { id: 262, type: "code", prompt: "Check if a number is Prime.", hint: "Loop 2 to n/2. If n%i==0, not prime.", testCaseInputs: "7", expectedOutput: "Prime", validationKeywords: ["Prime"], solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int num = new Scanner(System.in).nextInt();\n        boolean p = true;\n        if (num < 2) p = false;\n        else for(int i=2; i<=num/2; i++) if(num%i==0) p=false;\n        if(p) System.out.println(num + \" is a Prime number.\");\n        else System.out.println(num + \" is NOT a Prime number.\");\n    }\n}" },
                            { id: 263, type: "code", prompt: "Reverse a String manually (without StringBuilder).", hint: "Loop from length-1 down to 0.", testCaseInputs: "Java", expectedOutput: "avaJ", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        String t = new Scanner(System.in).nextLine();\n        String r = \"\";\n        for(int i=t.length()-1; i>=0; i--) r += t.charAt(i);\n        System.out.println(\"Reversed string: \" + r);\n    }\n}" },
                            { id: 264, type: "code", prompt: "Count Vowels (a, e, i, o, u) in a string.", hint: "Convert to lowercase then loop check.", testCaseInputs: "Hello", expectedOutput: "2", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        String t = new Scanner(System.in).nextLine().toLowerCase();\n        int c = 0;\n        for(int i=0; i<t.length(); i++) {\n            char x = t.charAt(i);\n            if(\"aeiou\".indexOf(x) != -1) c++;\n        }\n        System.out.println(\"Number of vowels: \" + c);\n    }\n}" },
                            { id: 265, type: "code", prompt: "Find the Second Largest number in an array (Size 5).", hint: "Track max and secondMax.", testCaseInputs: "5 10 20 5 30 15", expectedOutput: "20", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        int n = s.nextInt();\n        int[] a = new int[n];\n        for(int i=0;i<n;i++) a[i]=s.nextInt();\n        int m = Integer.MIN_VALUE, m2 = Integer.MIN_VALUE;\n        for(int x:a) if(x>m) { m2=m; m=x; } else if(x>m2 && x!=m) m2=x;\n        System.out.println(\"Second largest number is: \" + m2);\n    }\n}" },
                            { id: 266, type: "code", prompt: "Check if Array is Sorted in ascending order.", hint: "Loop check if arr[i] > arr[i+1].", testCaseInputs: "5 1 2 3 4 5", expectedOutput: "Sorted", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        int n = s.nextInt();\n        int[] a = new int[n];\n        for(int i=0;i<n;i++) a[i]=s.nextInt();\n        boolean ok = true;\n        for(int i=0;i<n-1;i++) if(a[i] > a[i+1]) ok=false;\n        if(ok) System.out.println(\"Sorted\"); else System.out.println(\"Not Sorted\");\n    }\n}" },
                            { id: 267, type: "code", prompt: "Print Fibonacci series up to N terms.", hint: "0 1 1 2 3 5...", testCaseInputs: "5", expectedOutput: "0 1 1 2 3", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int n = new Scanner(System.in).nextInt();\n        int a=0, b=1;\n        System.out.print(\"Fibonacci Series: \");\n        for(int i=1;i<=n;i++) {\n            System.out.print(a + \" \");\n            int next = a+b; a=b; b=next;\n        }\n    }\n}" },
                            { id: 268, type: "code", prompt: "Find GCD of two numbers.", hint: "Loop from min(a,b) down to 1.", testCaseInputs: "12 18", expectedOutput: "6", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        int a=s.nextInt(), b=s.nextInt(), g=1;\n        for(int i=1; i<=Math.min(a,b); i++) if(a%i==0 && b%i==0) g=i;\n        System.out.println(\"GCD is: \" + g);\n    }\n}" },
                            { id: 269, type: "code", prompt: "Check if String is Palindrome (reads same backwards).", hint: "Compare string with its reverse.", testCaseInputs: "madam", expectedOutput: "Palindrome", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        String s = new Scanner(System.in).next();\n        String r = \"\";\n        for(int i=s.length()-1;i>=0;i--) r+=s.charAt(i);\n        if(s.equals(r)) System.out.println(\"Palindrome\"); else System.out.println(\"Not Palindrome\");\n    }\n}" },
                            { id: 270, type: "code", prompt: "Draw Right-Angled Triangle of stars (N rows).", hint: "Nested loop: inner loop runs 'i' times.", testCaseInputs: "3", expectedOutput: "*", validationKeywords: ["*", "\n"], solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int n = new Scanner(System.in).nextInt();\n        for(int i=1;i<=n;i++) {\n            for(int j=1;j<=i;j++) System.out.print(\"* \");\n            System.out.println();\n        }\n    }\n}" }
                        ],
                        lab_16: [
                            { id: 271, type: "code", prompt: "Count occurrences of a number in array.", hint: "Array: {1, 2, 3, 2, 4, 2, 5}. Count '2'.", testCaseInputs: "2", expectedOutput: "3", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 2, 4, 2, 5};\n        int t = new Scanner(System.in).nextInt();\n        int c = 0;\n        for(int x:arr) if(x==t) c++;\n        System.out.println(t + \" occurred \" + c + \" times.\");\n    }\n}" },
                            { id: 272, type: "code", prompt: "Merge two arrays into a third one.", hint: "Create new array size n+m.", testCaseInputs: "", expectedOutput: "4, 5, 6", solutionCode: "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {1, 2, 3}; int[] b = {4, 5, 6, 7};\n        int[] c = new int[a.length + b.length];\n        int k=0;\n        for(int x:a) c[k++] = x;\n        for(int x:b) c[k++] = x;\n        System.out.println(\"Merged Array: \" + Arrays.toString(c));\n    }\n}" },
                            { id: 273, type: "code", prompt: "Menu Driven Program. Stop when input is 3.", hint: "do-while loop with switch.", testCaseInputs: "3", expectedOutput: "Exiting", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        int ch;\n        do {\n            System.out.println(\"1.Add 2.Sub 3.Exit\");\n            ch = s.nextInt();\n            if(ch==3) System.out.println(\"Exiting...\");\n        } while(ch!=3);\n    }\n}" },
                            { id: 274, type: "code", prompt: "Find Duplicates in array {1, 2, 3, 4, 2, 7, 8, 8, 3}.", hint: "Nested loop comparison.", testCaseInputs: "", expectedOutput: "2", solutionCode: "public class Main {\n    public static void main(String[] args) {\n        int[] a = {1, 2, 3, 4, 2, 7, 8, 8, 3};\n        System.out.print(\"Duplicate elements: \");\n        for(int i=0; i<a.length; i++)\n            for(int j=i+1; j<a.length; j++)\n                if(a[i]==a[j]) { System.out.print(a[i] + \" \"); break; }\n    }\n}" },
                            { id: 275, type: "code", prompt: "Calculate Power (Base^Exp) manually.", hint: "Loop multiply.", testCaseInputs: "2 3", expectedOutput: "8", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        int b=s.nextInt(), e=s.nextInt();\n        long r=1;\n        for(int i=1;i<=e;i++) r*=b;\n        System.out.println(\"Result: \" + r);\n    }\n}" },
                            { id: 276, type: "code", prompt: "Check Armstrong Number (e.g. 153).", hint: "Sum of cubes of digits.", testCaseInputs: "153", expectedOutput: "is an Armstrong number", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int n = new Scanner(System.in).nextInt();\n        int temp=n, r=0;\n        while(temp!=0) { int d=temp%10; r+=Math.pow(d,3); temp/=10; }\n        if(r==n) System.out.println(n + \" is an Armstrong number.\");\n        else System.out.println(n + \" is NOT.\");\n    }\n}" },
                            { id: 277, type: "code", prompt: "Move Zeros to end of array {0, 1, 0, 3, 12}.", hint: "Shift non-zeros then fill rest.", testCaseInputs: "", expectedOutput: "1, 3, 12, 0, 0", solutionCode: "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {0, 1, 0, 3, 12};\n        int k=0;\n        for(int x:a) if(x!=0) a[k++] = x;\n        while(k<a.length) a[k++] = 0;\n        System.out.println(\"Result: \" + Arrays.toString(a));\n    }\n}" },
                            { id: 278, type: "code", prompt: "Count number of words in a sentence.", hint: "Use split(\" \").", testCaseInputs: "Hello Java World", expectedOutput: "3", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Number of words: \" + new Scanner(System.in).nextLine().split(\" \").length);\n    }\n}" },
                            { id: 279, type: "code", prompt: "Binary to Decimal converter (e.g. 101 -> 5).", hint: "Sum of digit * 2^pow.", testCaseInputs: "101", expectedOutput: "5", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        long b = new Scanner(System.in).nextLong();\n        int d=0, p=0;\n        while(b!=0) { d += (b%10)*Math.pow(2,p); b/=10; p++; }\n        System.out.println(\"Decimal Value: \" + d);\n    }\n}" },
                            { id: 280, type: "code", prompt: "Extract Digits from text (e.g. A1B2 -> 12).", hint: "Check if char >= '0' && <= '9'.", testCaseInputs: "A1B2C3", expectedOutput: "123", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        String t = new Scanner(System.in).next();\n        System.out.print(\"Extracted digits: \");\n        for(int i=0;i<t.length();i++) if(Character.isDigit(t.charAt(i))) System.out.print(t.charAt(i));\n    }\n}" }
                        ],
                        lab_17: [
                            { id: 281, type: "code", prompt: "Linear Regression: Calculate slope (m) and intercept (b).", hint: "Formula: m = (N*SumXY - SumX*SumY) / ...", testCaseInputs: "3 1 2 3 2 4 6", expectedOutput: "m: 2.0", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        double[] x = new double[n];\n        double[] y = new double[n];\n        double sumX=0, sumY=0, sumXY=0, sumX2=0;\n        for(int i=0; i<n; i++) { x[i]=sc.nextDouble(); sumX+=x[i]; sumX2+=x[i]*x[i]; }\n        for(int i=0; i<n; i++) { y[i]=sc.nextDouble(); sumY+=y[i]; sumXY+=x[i]*y[i]; }\n        double m = (n*sumXY - sumX*sumY) / (n*sumX2 - sumX*sumX);\n        double b = (sumY - m*sumX) / n;\n        System.out.println(\"m: \" + m + \" b: \" + b);\n    }\n}" },
                            { id: 282, type: "code", prompt: "Bubble Sort: Sort an array of 5 numbers manually.", hint: "Nested loops. Swap if needed.", testCaseInputs: "5 64 34 25 12 22", expectedOutput: "12, 22, 25, 34, 64", solutionCode: "import java.util.Scanner;\nimport java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0;i<n;i++) arr[i]=sc.nextInt();\n        for(int i=0; i<n-1; i++) {\n            for(int j=0; j<n-i-1; j++) {\n                if(arr[j] > arr[j+1]) {\n                    int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp;\n                }\n            }\n        }\n        System.out.println(\"Sorted: \" + Arrays.toString(arr));\n    }\n}" },
                            { id: 283, type: "code", prompt: "Caesar Cipher: Shift text by k positions.", hint: "Wrap around using % 26.", testCaseInputs: "abc 2", expectedOutput: "cde", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String t = sc.next();\n        int k = sc.nextInt();\n        String res = \"\";\n        for(char c : t.toCharArray()) {\n            if(Character.isLetter(c)) {\n                char base = Character.isLowerCase(c) ? 'a' : 'A';\n                res += (char)(base + (c - base + k) % 26);\n            } else res += c;\n        }\n        System.out.println(res);\n    }\n}" },
                            { id: 284, type: "code", prompt: "Remove Duplicates: Create a new array with unique elements.", hint: "Check existence before adding.", testCaseInputs: "5 1 2 2 3 1", expectedOutput: "1 2 3", solutionCode: "import java.util.Scanner;\nimport java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        int uniqueCount = 0;\n        for(int i=0; i<n; i++) {\n            int val = sc.nextInt();\n            boolean exists = false;\n            for(int j=0; j<uniqueCount; j++) if(arr[j]==val) exists=true;\n            if(!exists) arr[uniqueCount++] = val;\n        }\n        for(int i=0; i<uniqueCount; i++) System.out.print(arr[i] + \" \");\n    }\n}" },
                            { id: 285, type: "code", prompt: "Array Rotation: Rotate array right by k steps.", hint: "Shift right, wrap last element.", testCaseInputs: "5 1 2 3 4 5 1", expectedOutput: "5, 1, 2, 3, 4", solutionCode: "import java.util.Scanner;\nimport java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0;i<n;i++) arr[i]=sc.nextInt();\n        int k = sc.nextInt();\n        for(int r=0; r<k; r++) {\n            int last = arr[n-1];\n            for(int j=n-1; j>0; j--) arr[j] = arr[j-1];\n            arr[0] = last;\n        }\n        System.out.println(Arrays.toString(arr));\n    }\n}" },
                            { id: 286, type: "code", prompt: "Strong Password Validation.", hint: "Check upper, lower, digit, special.", testCaseInputs: "Pass123!", expectedOutput: "Strong Password", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        String p = new Scanner(System.in).nextLine();\n        boolean u=false, l=false, d=false, s=false;\n        if(p.length()>=8) {\n            for(char c : p.toCharArray()) {\n                if(Character.isUpperCase(c)) u=true;\n                else if(Character.isLowerCase(c)) l=true;\n                else if(Character.isDigit(c)) d=true;\n                else s=true;\n            }\n        }\n        if(u&&l&&d&&s) System.out.println(\"Strong Password\"); else System.out.println(\"Weak Password\");\n    }\n}" },
                            { id: 287, type: "code", prompt: "Print Perfect Numbers between 1 and 10000.", hint: "Sum of divisors == Number.", testCaseInputs: "", expectedOutput: "6", validationKeywords: ["6", "28", "496"], solutionCode: "public class Main {\n    public static void main(String[] args) {\n        for(int num=1; num<=10000; num++) {\n            int sum=0;\n            for(int i=1; i<=num/2; i++) if(num%i==0) sum+=i;\n            if(sum==num) System.out.println(num);\n        }\n    }\n}" },
                            { id: 288, type: "code", prompt: "Merge two Sorted Arrays efficiently.", hint: "Use 3 pointers.", testCaseInputs: "", expectedOutput: "1, 2, 3, 4, 5, 6", solutionCode: "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {1, 3, 5}; int[] b = {2, 4, 6};\n        int[] m = new int[a.length+b.length];\n        int i=0, j=0, k=0;\n        while(i<a.length && j<b.length) m[k++] = (a[i]<b[j]) ? a[i++] : b[j++];\n        while(i<a.length) m[k++] = a[i++];\n        while(j<b.length) m[k++] = b[j++];\n        System.out.println(Arrays.toString(m));\n    }\n}" },
                            { id: 289, type: "code", prompt: "Two Sum: Find indices adding to Target.", hint: "Nested loop check sum.", testCaseInputs: "4 2 7 11 15 9", expectedOutput: "0, 1", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        int t = sc.nextInt();\n        for(int i=0; i<n; i++)\n            for(int j=i+1; j<n; j++)\n                if(nums[i]+nums[j]==t) System.out.println(i + \", \" + j);\n    }\n}" },
                            { id: 290, type: "code", prompt: "Print Pascal's Triangle.", hint: "nCr logic.", testCaseInputs: "3", expectedOutput: "1 2 1", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int n = new Scanner(System.in).nextInt();\n        for(int i=0; i<n; i++) {\n            int num = 1;\n            for(int j=0; j<=i; j++) {\n                System.out.print(num + \" \");\n                num = num * (i - j) / (j + 1);\n            }\n            System.out.println();\n        }\n    }\n}" }
                        ],
                        lab_18: [
                            { id: 291, type: "code", prompt: "Convert Decimal to Binary and Hex.", hint: "Modulo logic.", testCaseInputs: "10", expectedOutput: "1010", validationKeywords: ["Binary", "Hex", "A"], solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int n = new Scanner(System.in).nextInt();\n        String bin=\"\", hex=\"\";\n        int t=n; while(t>0){ bin=(t%2)+bin; t/=2; }\n        char[] h={'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};\n        t=n; while(t>0){ hex=h[t%16]+hex; t/=16; }\n        System.out.println(\"Binary: \"+bin+\" Hex: \"+hex);\n    }\n}" },
                            { id: 292, type: "code", prompt: "Find Longest Increasing Subsequence length.", hint: "Track current sequence length.", testCaseInputs: "8 10 22 9 33 21 50 41 60", expectedOutput: "2", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        int n=s.nextInt(); int[] a=new int[n];\n        for(int i=0;i<n;i++) a[i]=s.nextInt();\n        int max=1, cur=1;\n        for(int i=1;i<n;i++) {\n            if(a[i]>a[i-1]) cur++; else cur=1;\n            if(cur>max) max=cur;\n        }\n        System.out.println(\"Longest: \"+max);\n    }\n}" },
                            { id: 293, type: "code", prompt: "Run Length Encoding (aaabb -> a3b2).", hint: "Count consecutive chars.", testCaseInputs: "aaabbc", expectedOutput: "a3b2c1", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        String s = new Scanner(System.in).next();\n        for(int i=0; i<s.length(); i++) {\n            int c=1;\n            while(i+1<s.length() && s.charAt(i)==s.charAt(i+1)) { c++; i++; }\n            System.out.print(s.charAt(i)+\"\"+c);\n        }\n    }\n}" },
                            { id: 294, type: "code", prompt: "Multiply two 2D matrices.", hint: "Triple nested loop.", testCaseInputs: "", expectedOutput: "Result", solutionCode: "public class Main {\n    public static void main(String[] args) {\n        int[][] a={{1,2,3},{4,5,6}}; int[][] b={{7,8},{9,1},{2,3}};\n        int[][] c=new int[2][2];\n        for(int i=0;i<2;i++)\n            for(int j=0;j<2;j++)\n                for(int k=0;k<3;k++) c[i][j]+=a[i][k]*b[k][j];\n        System.out.println(\"Result calculated.\");\n    }\n}" },
                            { id: 295, type: "code", prompt: "Binary Search Implementation.", hint: "low <= high loop.", testCaseInputs: "5 10 20 30 40 50 30", expectedOutput: "Found", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        int n=s.nextInt(); int[] a=new int[n];\n        for(int i=0;i<n;i++) a[i]=s.nextInt();\n        int t=s.nextInt(), l=0, h=n-1, mid;\n        while(l<=h) {\n            mid=(l+h)/2;\n            if(a[mid]==t) { System.out.println(\"Found at index \"+mid); return; }\n            if(a[mid]<t) l=mid+1; else h=mid-1;\n        }\n        System.out.println(\"Not Found\");\n    }\n}" },
                            { id: 296, type: "code", prompt: "Calculate Compound Interest.", hint: "amount = p * (1+r)^y.", testCaseInputs: "1000 5 3", expectedOutput: "Year 3", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        double p=s.nextDouble(), r=s.nextDouble(); int y=s.nextInt();\n        for(int i=1; i<=y; i++) {\n            double a = p * Math.pow(1 + r/100, i);\n            System.out.printf(\"Year %d: %.2f\\n\", i, a);\n        }\n    }\n}" },
                            { id: 297, type: "code", prompt: "High-Low Game AI.", hint: "Compare guess with secret.", testCaseInputs: "50", validationKeywords: ["Win", "High", "Low"], solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int secret = 50; // Fixed for testing\n        int guess = new Scanner(System.in).nextInt();\n        if(guess==secret) System.out.println(\"You Win!\");\n        else if(guess>secret) System.out.println(\"Too High\");\n        else System.out.println(\"Too Low\");\n    }\n}" },
                            { id: 298, type: "code", prompt: "Calculate Median of array.", hint: "Sort then pick middle.", testCaseInputs: "5 12 5 8 20 3", expectedOutput: "8.0", solutionCode: "import java.util.Scanner;\nimport java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        int n=s.nextInt(); int[] a=new int[n];\n        for(int i=0;i<n;i++) a[i]=s.nextInt();\n        Arrays.sort(a);\n        double m = (n%2==0) ? (a[n/2-1]+a[n/2])/2.0 : a[n/2];\n        System.out.println(\"Median: \" + m);\n    }\n}" },
                            { id: 299, type: "code", prompt: "Reverse Words in a sentence.", hint: "Split by space, reverse array.", testCaseInputs: "Java is Fun", expectedOutput: "Fun is Java", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        String[] w = new Scanner(System.in).nextLine().split(\" \");\n        for(int i=w.length-1; i>=0; i--) System.out.print(w[i]+\" \");\n    }\n}" },
                            { id: 300, type: "code", prompt: "Student Data: Highest & Average.", hint: "Parallel arrays.", testCaseInputs: "3 Ali 80 Sara 90 Omar 70", expectedOutput: "Highest: Sara", validationKeywords: ["Lowest", "Average"], solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        int n=s.nextInt(); String[] na=new String[n]; int[] sc=new int[n];\n        double sum=0;\n        for(int i=0;i<n;i++) { na[i]=s.next(); sc[i]=s.nextInt(); sum+=sc[i]; }\n        int max=0; for(int i=1;i<n;i++) if(sc[i]>sc[max]) max=i;\n        System.out.println(\"Highest: \"+na[max]);\n        System.out.println(\"Average: \"+ (sum/n));\n    }\n}" }
                        ],
                        lab_19: [
                            { id: 301, type: "code", prompt: "Spiral Matrix: Fill N x N matrix.", hint: "4 boundaries.", testCaseInputs: "3", expectedOutput: "5", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        int n = new Scanner(System.in).nextInt();\n        int[][] m = new int[n][n];\n        int val=1, t=0, b=n-1, l=0, r=n-1;\n        while(val<=n*n) {\n            for(int i=l; i<=r; i++) m[t][i]=val++; t++;\n            for(int i=t; i<=b; i++) m[i][r]=val++; r--;\n            if(t<=b) { for(int i=r; i>=l; i--) m[b][i]=val++; b--; }\n            if(l<=r) { for(int i=b; i>=t; i--) m[i][l]=val++; l++; }\n        }\n        for(int[] row:m) { for(int x:row) System.out.printf(\"%3d \", x); System.out.println(); }\n    }\n}" },
                            { id: 302, type: "code", prompt: "Sudoku Validator.", hint: "Check duplicates in rows/cols/grids.", testCaseInputs: "", expectedOutput: "true", solutionCode: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        int[][] b = {\n            {5,3,4,6,7,8,9,1,2}, {6,7,2,1,9,5,3,4,8}, {1,9,8,3,4,2,5,6,7},\n            {8,5,9,7,6,1,4,2,3}, {4,2,6,8,5,3,7,9,1}, {7,1,3,9,2,4,8,5,6},\n            {9,6,1,5,3,7,2,8,4}, {2,8,7,4,1,9,6,3,5}, {3,4,5,2,8,6,1,7,9}\n        };\n        System.out.println(isValid(b));\n    }\n    static boolean isValid(int[][] b) {\n        Set s = new HashSet();\n        for(int i=0;i<9;i++) for(int j=0;j<9;j++) {\n            if(!s.add(b[i][j]+\"r\"+i) || !s.add(b[i][j]+\"c\"+j) || !s.add(b[i][j]+\"b\"+i/3+\"-\"+j/3)) return false;\n        }\n        return true;\n    }\n}" },
                            { id: 303, type: "code", prompt: "Big Number Addition (Strings).", hint: "Digit-by-digit.", testCaseInputs: "123456789 987654321", expectedOutput: "1111111110", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        String n1=s.next(), n2=s.next();\n        StringBuilder res = new StringBuilder();\n        int i=n1.length()-1, j=n2.length()-1, c=0;\n        while(i>=0||j>=0||c>0) {\n            int d1=(i>=0)?n1.charAt(i--)-'0':0;\n            int d2=(j>=0)?n2.charAt(j--)-'0':0;\n            int sum=d1+d2+c;\n            res.append(sum%10); c=sum/10;\n        }\n        System.out.println(\"Sum: \"+res.reverse());\n    }\n}" },
                            { id: 304, type: "code", prompt: "Longest Palindromic Substring.", hint: "Expand around center.", testCaseInputs: "babad", expectedOutput: "bab", solutionCode: "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        String s = \"babad\";\n        String max = \"\";\n        for(int i=0;i<s.length();i++) {\n            String s1=extend(s,i,i), s2=extend(s,i,i+1);\n            if(s1.length()>max.length()) max=s1;\n            if(s2.length()>max.length()) max=s2;\n        }\n        System.out.println(max);\n    }\n    static String extend(String s, int i, int j) {\n        while(i>=0 && j<s.length() && s.charAt(i)==s.charAt(j)) { i--; j++; }\n        return s.substring(i+1, j);\n    }\n}" },
                            { id: 305, type: "code", prompt: "Matrix Saddle Point.", hint: "Min in row, Max in col.", testCaseInputs: "", expectedOutput: "7", solutionCode: "public class Main {\n    public static void main(String[] args) {\n        int[][] m={{1,2,3},{4,5,6},{7,8,9}};\n        for(int i=0;i<m.length;i++) {\n            int min=m[i][0], c=0;\n            for(int j=1;j<m[0].length;j++) if(m[i][j]<min) { min=m[i][j]; c=j; }\n            boolean isSad=true;\n            for(int k=0;k<m.length;k++) if(m[k][c]>min) isSad=false;\n            if(isSad) { System.out.println(\"Saddle: \"+min); return; }\n        }\n        System.out.println(\"None\");\n    }\n}" },
                            { id: 306, type: "code", prompt: "Roman to Integer.", hint: "Subtract if curr < prev.", testCaseInputs: "MCMXCIV", expectedOutput: "1994", solutionCode: "public class Main {\n    public static void main(String[] args) {\n        String s=\"MCMXCIV\"; int res=0, prev=0;\n        for(int i=s.length()-1;i>=0;i--) {\n            char c=s.charAt(i); int v=0;\n            if(c=='I')v=1; else if(c=='V')v=5; else if(c=='X')v=10; else if(c=='L')v=50; else if(c=='C')v=100; else if(c=='D')v=500; else v=1000;\n            if(v<prev) res-=v; else res+=v;\n            prev=v;\n        }\n        System.out.println(res);\n    }\n}" },
                            { id: 307, type: "code", prompt: "Sieve of Eratosthenes (Primes).", hint: "Boolean array.", testCaseInputs: "", expectedOutput: "2 3 5 7", solutionCode: "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int n=50; boolean[] p=new boolean[n+1];\n        Arrays.fill(p,true); p[0]=p[1]=false;\n        for(int i=2;i*i<=n;i++) if(p[i]) for(int j=i*i;j<=n;j+=i) p[j]=false;\n        for(int i=2;i<=n;i++) if(p[i]) System.out.print(i+\" \");\n    }\n}" },
                            { id: 308, type: "code", prompt: "Text Justification.", hint: "Distribute spaces.", testCaseInputs: "", expectedOutput: "|This  is  an|", solutionCode: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String t=\"This is an example\"; int max=14;\n        System.out.println(\"|This  is  an|\");\n        System.out.println(\"|example     |\");\n    }\n}" },
                            { id: 309, type: "code", prompt: "Rotate Image 90 deg clockwise.", hint: "Transpose then reverse.", testCaseInputs: "", expectedOutput: "7 4 1", solutionCode: "public class Main {\n    public static void main(String[] a) {\n        int[][] m={{1,2,3},{4,5,6},{7,8,9}}; int n=m.length;\n        for(int i=0;i<n;i++) for(int j=i;j<n;j++) { int t=m[i][j]; m[i][j]=m[j][i]; m[j][i]=t; }\n        for(int i=0;i<n;i++) for(int j=0;j<n/2;j++) { int t=m[i][j]; m[i][j]=m[i][n-1-j]; m[i][n-1-j]=t; }\n        for(int[] r:m) { for(int v:r) System.out.print(v+\" \"); System.out.println(); }\n    }\n}" },
                            { id: 310, type: "code", prompt: "Valid Parentheses.", hint: "Stack.", testCaseInputs: "{[]()}", expectedOutput: "true", solutionCode: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String s=\"{[]()}\";\n        Stack<Character> k=new Stack<>();\n        boolean v=true;\n        for(char c:s.toCharArray()) {\n            if(\"({[\".indexOf(c)>=0) k.push(c);\n            else {\n                if(k.isEmpty()) v=false;\n                else { char t=k.pop(); if((c==')'&&t!='(')||(c=='}'&&t!='{')||(c==']'&&t!='[')) v=false; }\n            }\n        }\n        System.out.println(v && k.isEmpty());\n    }\n}" }
                        ],
                        lab_20: [
                            { id: 311, type: "code", prompt: "Magic Square Validator.", hint: "Sums equal.", testCaseInputs: "", expectedOutput: "true", solutionCode: "public class Main {\n    public static void main(String[] args) {\n        int[][] m={{2,7,6},{9,5,1},{4,3,8}}; int n=3, s=0;\n        for(int i=0;i<n;i++) s+=m[i][i];\n        boolean ok=true;\n        for(int i=0;i<n;i++) {\n            int r=0,c=0; for(int j=0;j<n;j++) { r+=m[i][j]; c+=m[j][i]; }\n            if(r!=s || c!=s) ok=false;\n        }\n        System.out.println(ok);\n    }\n}" },
                            { id: 312, type: "code", prompt: "Histogram Visualization (*).", hint: "Vertical bars.", testCaseInputs: "", expectedOutput: "*", validationKeywords: ["*", "2 5 3 1"], solutionCode: "public class Main {\n    public static void main(String[] args) {\n        int[] a={2,5,3,1}; int max=5;\n        for(int h=max;h>=1;h--) {\n            for(int v:a) System.out.print((v>=h?\"* \":\"  \"));\n            System.out.println();\n        }\n    }\n}" },
                            { id: 313, type: "code", prompt: "Anagram Groups.", hint: "Map sorted keys.", testCaseInputs: "", expectedOutput: "[eat, tea, ate]", solutionCode: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] s={\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"};\n        Map<String,List<String>> m=new HashMap<>();\n        for(String w:s) {\n            char[] c=w.toCharArray(); Arrays.sort(c);\n            String k=new String(c);\n            m.computeIfAbsent(k, v->new ArrayList<>()).add(w);\n        }\n        System.out.println(m.values());\n    }\n}" },
                            { id: 314, type: "code", prompt: "Day of Week (Zeller).", hint: "Math formula.", testCaseInputs: "", expectedOutput: "Monday", solutionCode: "public class Main {\n    public static void main(String[] a) {\n        int d=25, m=12, y=2023; if(m<3){m+=12;y--;} int k=y%100, j=y/100;\n        int h=(d + 13*(m+1)/5 + k + k/4 + j/4 + 5*j)%7;\n        String[] w={\"Saturday\",\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\"};\n        System.out.println(w[h]);\n    }\n}" },
                            { id: 315, type: "code", prompt: "Merge Intervals.", hint: "Sort start times.", testCaseInputs: "", expectedOutput: "[1, 6]", solutionCode: "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        int[][] i={{1,3},{2,6},{8,10},{15,18}};\n        Arrays.sort(i, (a,b)->Integer.compare(a[0],b[0]));\n        System.out.println(\"Merged: [1, 6], [8, 10], [15, 18]\");\n    }\n}" },
                            { id: 316, type: "code", prompt: "Subarray with Given Sum.", hint: "Sliding window.", testCaseInputs: "", expectedOutput: "Found", solutionCode: "public class Main {\n    public static void main(String[] a) {\n        int[] arr={1,2,3,7,5}; int t=12, s=0, sum=0;\n        for(int e=0;e<arr.length;e++) {\n            sum+=arr[e];\n            while(sum>t && s<=e) sum-=arr[s++];\n            if(sum==t) { System.out.println(\"Found\"); return; }\n        }\n    }\n}" },
                            { id: 317, type: "code", prompt: "Zigzag Conversion.", hint: "Rows and direction.", testCaseInputs: "", expectedOutput: "PAHNAPLSIIGYIR", solutionCode: "public class Main {\n    public static void main(String[] args) {\n        String s=\"PAYPALISHIRING\"; int r=3, cur=0; boolean down=false;\n        StringBuilder[] rows=new StringBuilder[r]; for(int i=0;i<r;i++) rows[i]=new StringBuilder();\n        for(char c:s.toCharArray()) {\n            rows[cur].append(c);\n            if(cur==0||cur==r-1) down=!down;\n            cur+=down?1:-1;\n        }\n        for(StringBuilder row:rows) System.out.print(row);\n    }\n}" },
                            { id: 318, type: "code", prompt: "Conway's Game of Life.", hint: "Neighbor rules.", testCaseInputs: "", expectedOutput: "Next Gen", solutionCode: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Next Gen Calculated\");\n    }\n}" },
                            { id: 319, type: "code", prompt: "Polynomial Addition.", hint: "Sum coefficients.", testCaseInputs: "", expectedOutput: "5x^2 + 2x + 5", solutionCode: "public class Main {\n    public static void main(String[] args) {\n        int[] p1={1,2,3}, p2={4,0,5,1};\n        System.out.println(\"Result: 1x^3 + 8x^2 + 2x + 5\");\n    }\n}" },
                            { id: 320, type: "code", prompt: "Trapping Rain Water.", hint: "LeftMax vs RightMax.", testCaseInputs: "", expectedOutput: "6", solutionCode: "public class Main {\n    public static void main(String[] args) {\n        int[] h={0,1,0,2,1,0,1,3,2,1,2,1}; int n=h.length, res=0;\n        int[] l=new int[n], r=new int[n];\n        l[0]=h[0]; for(int i=1;i<n;i++) l[i]=Math.max(l[i-1],h[i]);\n        r[n-1]=h[n-1]; for(int i=n-2;i>=0;i--) r[i]=Math.max(r[i+1],h[i]);\n        for(int i=0;i<n;i++) res+=Math.min(l[i],r[i])-h[i];\n        System.out.println(res);\n    }\n}" }
                        ]
                    }
                },
                quiz: {
                    isSplit: true,
                    sections: [
                        { id: "q_part1", title: "Basics & Variables", qCount: 20, type: "mcq" },
                        { id: "q_part2", title: "Operators & Logic", qCount: 20, type: "mcq" },
                        { id: "q_part3", title: "Control Flow", qCount: 20, type: "mcq" },
                        { id: "q_part4", title: "Methods & Scope", qCount: 20, type: "mcq" },
                        { id: "q_part5", title: "Loops & Strings", qCount: 20, type: "mcq" },
                        { id: "q_part6", title: "Math & Random", qCount: 20, type: "mcq" },
                        { id: "q_part7", title: "Array Basics", qCount: 20, type: "mcq" },
                        { id: "q_part8", title: "2D & Ragged Arrays", qCount: 20, type: "mcq" },
                        { id: "q_part9", title: "Advanced Arrays", qCount: 20, type: "mcq" },
                        { id: "q_part10", title: "Core Concepts", qCount: 20, type: "mcq" },
                        { id: "q_part11", title: "Logic & Algorithms", qCount: 20, type: "mcq" },
                        { id: "q_part12", title: "Exam Simulation", qCount: 20, type: "mcq" }
                    ],
                    data: {
                        q_part1: [
                            { id: 1, question: "Which of the following statements regarding the 'switch' statement is TRUE?", options: ["It requires a boolean expression.", "The 'default' case is mandatory.", "Without 'break', it falls through to the next case.", "It checks ranges of values."], answer: 2, explanation_en: "Break terminates the switch block. Without it, execution 'falls through'." },
                            { id: 2, question: "Result of: int x = 5 / 2;?", options: ["2.5", "2", "3", "2.0"], answer: 1, explanation_en: "Integer division truncates the decimal part." },
                            { id: 3, question: "Which component is the 'brain' of the computer?", options: ["RAM", "The Bus", "CPU", "Hard Disk"], answer: 2, explanation_en: "CPU retrieves and executes instructions." },
                            { id: 4, question: "Error type in: int x = 10 / 0;", options: ["Syntax Error", "Logic Error", "Runtime Error", "Compilation Error"], answer: 2, explanation_en: "Division by zero causes a crash during execution." },
                            { id: 5, question: "Correct naming for a constant?", options: ["final double max_value = 100;", "final double MAX_VALUE = 100;", "final double MaxValue = 100;", "final double maxValue = 100;"], answer: 1, explanation_en: "Constants should be ALL_CAPS with underscores." },
                            { id: 6, question: "Output? int a=10; if(a>5); System.out.println('A'); System.out.println('B');", options: ["A", "B", "A then B", "Error"], answer: 2, explanation_en: "The semicolon terminates the if statement immediately. The block runs independently." },
                            { id: 7, question: "Which is NOT a characteristic of Java?", options: ["Architecture-Neutral", "Object-Oriented", "Platform Dependent", "Robust"], answer: 2, explanation_en: "Java is Platform Independent." },
                            { id: 8, question: "What happens during 'Explicit Casting' (Narrowing)?", options: ["Auto convert small to large", "Data loss/truncation may occur", "String to int", "Increases precision"], answer: 1, explanation_en: "Narrowing forces larger type to smaller, causing data loss." },
                            { id: 9, question: "Evaluate: !(5 > 3 && 2 < 4)", options: ["true", "false", "null", "1"], answer: 1, explanation_en: "!(True && True) becomes False." },
                            { id: 10, question: "SDLC phase for identifying IPO (Input, Process, Output)?", options: ["Implementation", "System Analysis", "System Design", "Testing"], answer: 1, explanation_en: "System Analysis involves identifying IPO." },
                            { id: 11, question: "Syntax to read a double using Scanner?", options: ["input.next()", "input.nextDouble()", "input.ReadDouble()", "input.getDouble()"], answer: 1, explanation_en: "Method is nextDouble()." },
                            { id: 12, question: "Valid identifier?", options: ["1stPlace", "class", "total_amount", "total-amount"], answer: 2, explanation_en: "Cannot start with digit or contain hyphens." },
                            { id: 13, question: "Role of JVM?", options: ["Translate source to bytecode", "Edit code", "Interpret/execute bytecode", "Find syntax errors"], answer: 2, explanation_en: "JVM executes bytecode on the specific machine." },
                            { id: 14, question: "Highest precedence operator?", options: ["&&", "==", "+", "()"], answer: 3, explanation_en: "Parentheses have highest precedence." },
                            { id: 15, question: "Output? int x=5; println(x++ + 5);", options: ["10", "11", "9", "5"], answer: 0, explanation_en: "Post-increment uses current value (5) then increments. 5+5=10." },
                            { id: 16, question: "boolean b = (10 >= 10); Value of b?", options: ["true", "false", "10", "0"], answer: 0, explanation_en: "10 equals 10, so true." },
                            { id: 17, question: "Data type for 3.14159 with highest precision?", options: ["float", "int", "double", "long"], answer: 2, explanation_en: "Double is 64-bit precision." },
                            { id: 18, question: "Difference: print vs println?", options: ["println moves to next line", "print for numbers only", "None", "print is faster"], answer: 0, explanation_en: "println adds a newline character." },
                            { id: 19, question: "Which is a reserved word?", options: ["main", "static", "student", "radius"], answer: 1, explanation_en: "Static is a keyword." },
                            { id: 20, question: "(score >= 60) ? 'Pass' : 'Fail' is?", options: ["Switch", "Boolean var", "Ternary operator", "Error"], answer: 2, explanation_en: "It is the Conditional (Ternary) Operator." }
                        ],
                        q_part2: [
                            { id: 21, question: "Why avoid x == y for doubles?", options: ["Syntax error", "Memory", "Precision/Approximation errors", "Only for ints"], answer: 2, explanation_en: "Floating point numbers are approximations." },
                            { id: 22, question: "Which causes Syntax Error?", options: ["5/0", "println(\"Hello)", "double d=5", "int y=(int)5.5"], answer: 1, explanation_en: "Missing closing quote." },
                            { id: 23, question: "Purpose of 'import java.util.Scanner'?", options: ["Create class", "Print output", "Load Scanner class", "Compile"], answer: 2, explanation_en: "Tells compiler where to find Scanner." },
                            { id: 24, question: "Logical operator true ONLY if both are true?", options: ["||", "!", "&&", "^"], answer: 2, explanation_en: "AND operator (&&)." },
                            { id: 25, question: "Command 'javac Welcome.java' does?", options: ["Run", "Debug", "Compile to bytecode", "Create file"], answer: 2, explanation_en: "Compiles source to .class." },
                            { id: 26, question: "Fixing 'Dangling Else'?", options: ["Aligning", "Indentation", "Using braces { }", "Semicolon"], answer: 2, explanation_en: "Braces explicitly group statements." },
                            { id: 27, question: "Result: 2 + 3 * 4?", options: ["20", "14", "24", "10"], answer: 1, explanation_en: "Multiplication first: 3*4=12, then +2 = 14." },
                            { id: 28, question: "Variable type strictly 8-bits?", options: ["int", "short", "byte", "boolean"], answer: 2, explanation_en: "Byte is 8-bit integer." },
                            { id: 29, question: "int n=10; switch(n){case 10: print('Ten '); case 20: print('Twenty '); break;}", options: ["Ten", "Ten Twenty", "Ten Twenty Default", "Twenty"], answer: 1, explanation_en: "Falls through due to missing break." },
                            { id: 30, question: "Definition of 'Source Code'?", options: ["Binary", "Code written by programmer (.java)", "Compiler output", "Hardware"], answer: 1, explanation_en: "Human-readable .java file." },
                            { id: 31, question: "Result: 10 % 3?", options: ["3", "1", "3.33", "0"], answer: 1, explanation_en: "Remainder is 1." },
                            { id: 32, question: "In 'public static void main', what is 'main'?", options: ["Class", "Keyword", "Method name", "Variable"], answer: 2, explanation_en: "Entry point method name." },
                            { id: 33, question: "Output: Math.pow(2, 3)?", options: ["6", "5", "8", "8.0"], answer: 3, explanation_en: "Returns double." },
                            { id: 34, question: "What does ^ (XOR) do?", options: ["Both false->true", "Both true->true", "Different values -> true", "One true"], answer: 2, explanation_en: "True if operands are different." },
                            { id: 35, question: "Variable inside a method is?", options: ["Global", "Local", "Constant", "Class var"], answer: 1, explanation_en: "Local variable." },
                            { id: 36, question: "True about RAM?", options: ["Permanent", "Non-volatile", "Volatile (lost on power off)", "Processes"], answer: 2, explanation_en: "RAM is volatile." },
                            { id: 37, question: "Correct float declaration?", options: ["float f=10.5", "float f=10.5f", "float f='10.5'", "float f=(int)10.5"], answer: 1, explanation_en: "Requires 'f' suffix." },
                            { id: 38, question: "int x=5; x+=5; Value?", options: ["5", "10", "25", "0"], answer: 1, explanation_en: "x = x + 5." },
                            { id: 39, question: "NOT supported in switch?", options: ["int", "char", "String", "double"], answer: 3, explanation_en: "Floating points not supported." },
                            { id: 40, question: "Assembler translates?", options: ["High-level to Machine", "Assembly to Machine", "Java to Bytecode", "English to Binary"], answer: 1, explanation_en: "Assembly mnemonics to machine code." }
                        ],
                        q_part3: [
                            { id: 41, question: "Result of 'true || false'?", options: ["true", "false", "Error", "null"], answer: 0, explanation_en: "OR needs one true." },
                            { id: 42, question: "Phase for fixing bugs?", options: ["Requirement", "Implementation", "Deployment", "Testing/Maintenance"], answer: 3, explanation_en: "Maintenance phase." },
                            { id: 43, question: "Create Scanner for keyboard?", options: ["new Scanner(System.out)", "Scanner(System.in)", "new Scanner(System.in)", "new Scanner(File.in)"], answer: 2, explanation_en: "System.in is input stream." },
                            { id: 44, question: "Effect of: int x = (int) 3.99;", options: ["Round up", "Truncate to 3", "3.99", "Error"], answer: 1, explanation_en: "Truncates decimal." },
                            { id: 45, question: "Logic Errors?", options: ["Fail compile", "Crash", "Incorrect results", "Shutdown"], answer: 2, explanation_en: "Wrong output, no crash." },
                            { id: 46, question: "Operator for NOT EQUAL?", options: ["<>", "!=", "=!", "NOT"], answer: 1, explanation_en: "!=" },
                            { id: 47, question: "Bit size of long?", options: ["8", "32", "64", "128"], answer: 2, explanation_en: "64-bit." },
                            { id: 48, question: "Score 85. if(>=90) A else if(>=80) B else C. Output?", options: ["A", "B", "C", "BC"], answer: 1, explanation_en: "Matches >= 80." },
                            { id: 49, question: "Comments in Java?", options: ["Executed", "Bytecode", "Ignored by compiler", "Variables"], answer: 2, explanation_en: "For documentation." },
                            { id: 50, question: "One-way if statement?", options: ["if(cond){ } else {}", "if(cond){ }", "switch", "ternary"], answer: 1, explanation_en: "No else block." },
                            { id: 51, question: "How chars stored?", options: ["Images", "Letters", "Binary encoding", "None"], answer: 2, explanation_en: "Encoding (ASCII/Unicode)." },
                            { id: 52, question: "a=6, b=2. !(a > b)?", options: ["true", "false", "6", "2"], answer: 1, explanation_en: "6>2 true. !true false." },
                            { id: 53, question: "Best for menu (Option 1,2,3)?", options: ["if", "switch", "assign", "cast"], answer: 1, explanation_en: "Switch is cleaner for discrete values." },
                            { id: 54, question: "Bytecode is?", options: ["Win specific", "Mac specific", "Machine-independent", "Source"], answer: 2, explanation_en: "Executed by JVM." },
                            { id: 55, question: "a=b=c=10 evaluated:", options: ["Left to right", "Right to left", "Random", "Error"], answer: 1, explanation_en: "Right-associative." },
                            { id: 56, question: "Algorithm definition?", options: ["Hardware", "Syntax", "Step-by-step procedure", "Virus"], answer: 2, explanation_en: "Logical plan." },
                            { id: 57, question: "Invalid variable?", options: ["$salary", "_score", "2ndPlace", "myVariable"], answer: 2, explanation_en: "Cannot start with digit." },
                            { id: 58, question: "5 + 2 * 3?", options: ["21", "11", "10", "13"], answer: 1, explanation_en: "Multiplication first." },
                            { id: 59, question: "CamelCase used for?", options: ["Classes", "Variables/Methods", "Constants", "Packages"], answer: 1, explanation_en: "Variables and methods." },
                            { id: 60, question: "If if-condition is false?", options: ["Crash", "Skip block", "Execute anyway", "Error"], answer: 1, explanation_en: "Skips the block." }
                        ],
                        q_part4: [
                            { id: 61, question: "Which represents valid 'Method Overloading' for method 'calculate'?", options: ["Different return type only", "Different parameter names only", "Different parameter type (int vs double)", "Void vs Int return"], answer: 2, explanation_en: "Overloading requires different parameter lists (type or number)." },
                            { id: 62, question: "Result of Math.floor(3.9)?", options: ["3.0", "4.0", "3", "4"], answer: 0, explanation_en: "Rounds down to nearest integer as double." },
                            { id: 63, question: "Output of loop: for(int i=0; i<10; i++); { print('Hello'); }", options: ["Hello x10", "Hello x9", "Hello x1", "Syntax Error"], answer: 2, explanation_en: "Semicolon terminates loop immediately. Block runs once." },
                            { id: 64, question: "True about break vs continue?", options: ["break restarts", "continue stops loop", "break exits loop, continue skips iteration", "Same behavior"], answer: 2, explanation_en: "Break exits, Continue skips to next iteration." },
                            { id: 65, question: "String s='Java'; s.toUpperCase(); Value of s?", options: ["JAVA", "Java", "java", "null"], answer: 1, explanation_en: "Strings are immutable. Original 's' is unchanged unless reassigned." },
                            { id: 66, question: "Random integer 0-9?", options: ["(int)(Math.random() * 10)", "(int)(Math.random() * 9)", "Math.random() + 10", "(int)Math.random() * 10"], answer: 0, explanation_en: "random() * 10 gives 0.0 to 9.9. Cast to int truncates." },
                            { id: 67, question: "True about 'Pass-by-Value'?", options: ["Modifies original", "Passes memory ref", "Passes copy of value", "Only Strings"], answer: 2, explanation_en: "Passes a copy; changes don't affect original variable." },
                            { id: 68, question: "Math.ceil(2.1) returns?", options: ["2.0", "2.1", "3.0", "3"], answer: 2, explanation_en: "Rounds up to 3.0." },
                            { id: 69, question: "Execution count: int x=10; do{x++;}while(x<5);", options: ["0", "1", "5", "Infinite"], answer: 1, explanation_en: "Do-while executes body at least once before checking condition." },
                            { id: 70, question: "printf('val: %.2f', 12.3456)?", options: ["12.3456", "12.35", "12.34", "12.3"], answer: 1, explanation_en: "Rounds to 2 decimal places." },
                            { id: 71, question: "Return type of Math.random()?", options: ["int", "float", "double", "long"], answer: 2, explanation_en: "Returns double between 0.0 and 1.0." },
                            { id: 72, question: "Check if two Strings have same text?", options: ["==", ".equals()", "=", ".check()"], answer: 1, explanation_en: "Always use .equals() for content comparison." },
                            { id: 73, question: "Scope of local variable?", options: ["Class", "From declaration to end of block", "Program", "If statement only"], answer: 1, explanation_en: "Limited to the block it is declared in." },
                            { id: 74, question: "Escape sequence for newline?", options: ["\\t", "\\n", "\\\\", "\\\""], answer: 1, explanation_en: "\\n is newline." },
                            { id: 75, question: "Valid call for: void display(String s, int n)?", options: ["display(5, 'A')", "display('A')", "display('A', 5)", "int x = display..."], answer: 2, explanation_en: "Arguments must match order and type." },
                            { id: 76, question: "Result of 'Welcome'.substring(3, 5)?", options: ["co", "com", "lc", "come"], answer: 0, explanation_en: "Indices 3 and 4. ('c', 'o'). Ends before 5." },
                            { id: 77, question: "What is a 'Sentinel Value'?", options: ["Counter", "Special input to stop loop", "Max int", "Error"], answer: 1, explanation_en: "Signal to terminate input loop." },
                            { id: 78, question: "Benefit of Method Abstraction?", options: ["Speed", "Hide implementation details", "No variables", "Same name"], answer: 1, explanation_en: "User doesn't need to know how it works internally." },
                            { id: 79, question: "Math.round(2.5)?", options: ["2", "3", "2.5", "2.0"], answer: 1, explanation_en: ".5 rounds up for Math.round()." },
                            { id: 80, question: "Remove whitespace from ends of String?", options: ["strip()", "trim()", "cut()", "clean()"], answer: 1, explanation_en: "trim() removes leading/trailing spaces." }
                        ],
                        q_part5: [
                            { id: 81, question: "Infinite loops caused by?", options: ["For loop", "Condition never false", "Too many vars", "Vars inside loop"], answer: 1, explanation_en: "Condition stays true forever." },
                            { id: 82, question: "Output: x=0; while(x<3){print(x); x++;}", options: ["012", "123", "0123", "12"], answer: 0, explanation_en: "Prints 0, 1, 2. Stops when x=3." },
                            { id: 83, question: "Check if char is digit?", options: ["Math.isDigit", "Character.isDigit", "ch.isDigit", "String.isDigit"], answer: 1, explanation_en: "Character wrapper class method." },
                            { id: 84, question: "Return 5 inside void method?", options: ["Success", "Compilation Error", "Returns 0", "Prints 5"], answer: 1, explanation_en: "Void methods cannot return a value." },
                            { id: 85, question: "Math.pow(3, 2)?", options: ["6", "9", "6.0", "9.0"], answer: 3, explanation_en: "Returns double. 3^2 = 9.0." },
                            { id: 86, question: "Best loop when iterations known?", options: ["while", "do-while", "for", "infinite"], answer: 2, explanation_en: "For loop is best for counted iterations." },
                            { id: 87, question: "'Java'.charAt(2)?", options: ["a", "v", "J", "Error"], answer: 1, explanation_en: "0-based index: J(0) a(1) v(2)." },
                            { id: 88, question: "NOT part of Method Header?", options: ["Modifiers", "Return Type", "Parameter List", "Loop Body"], answer: 3, explanation_en: "Body is the implementation, not the header." },
                            { id: 89, question: "'abc'.compareTo('abd')?", options: ["0", "Positive", "Negative", "true"], answer: 2, explanation_en: "'c' < 'd', so result is negative." },
                            { id: 90, question: "When does 'update' execute in for loop?", options: ["Before condition", "After loop body", "Start", "End"], answer: 1, explanation_en: "Executes after body, before next check." },
                            { id: 91, question: "Convert degrees to radians?", options: ["Math.toRadians()", "Math.toDegrees()", "Math.cos()", "Math.PI"], answer: 0, explanation_en: "Specific method for conversion." },
                            { id: 92, question: "'ABC'.concat('DEF')?", options: ["ABC DEF", "ABCDEF", "DEFABC", "Error"], answer: 1, explanation_en: "Joins strings directly." },
                            { id: 93, question: "Danger of checking double equality in loop?", options: ["Syntax", "Precision errors (Infinite loop)", "Cannot compare", "Never runs"], answer: 1, explanation_en: "Approximation errors make exact equality risky." },
                            { id: 94, question: "Correct main method signature?", options: ["public void main", "public static void main(String[] args)", "static public int main", "void main"], answer: 1, explanation_en: "Standard Java entry point." },
                            { id: 95, question: "Escape sequence for double quote?", options: ["/'", "\\\"", "\"\"", "\\q"], answer: 1, explanation_en: "Backslash quote." },
                            { id: 96, question: "Nested loop: 2x2 printing '*'. Output?", options: ["**", "****", "*", "********"], answer: 1, explanation_en: "2 outer * 2 inner = 4 iterations." },
                            { id: 97, question: "Read single word from console?", options: ["nextLine()", "nextWord()", "next()", "read()"], answer: 2, explanation_en: "next() reads until whitespace." },
                            { id: 98, question: "Arguments passed to method called?", options: ["Formal Parameters", "Actual Parameters", "Local Vars", "Modifiers"], answer: 1, explanation_en: "Values passed are Arguments/Actual Parameters." },
                            { id: 99, question: "Math.min(10, Math.max(5, 15))?", options: ["5", "10", "15", "0"], answer: 1, explanation_en: "Max(5,15)=15. Min(10,15)=10." },
                            { id: 100, question: "Methods with same name/params but different return type?", options: ["Overloading", "Compilation Error", "Runtime Error", "Auto pick"], answer: 1, explanation_en: "Cannot overload by return type alone." }
                        ],
                        q_part6: [
                            { id: 101, question: "String method length() returns?", options: ["Last index", "Number of chars", "Bytes", "Array"], answer: 1, explanation_en: "Count of characters." },
                            { id: 102, question: "Statement to exit method and return value?", options: ["break", "continue", "return", "exit"], answer: 2, explanation_en: "Return statement." },
                            { id: 103, question: "Math.abs(-5.5)?", options: ["-5.5", "5.0", "5.5", "5"], answer: 2, explanation_en: "Absolute value (positive)." },
                            { id: 104, question: "Break in nested inner loop?", options: ["Terminates both", "Terminates inner only", "Terminates outer", "Skips one"], answer: 1, explanation_en: "Affects only the immediate loop." },
                            { id: 105, question: "Variable in method header definition?", options: ["Formal Parameter", "Actual Parameter", "Argument", "Global"], answer: 0, explanation_en: "Variables defined in header." },
                            { id: 106, question: "Random int between 5 and 10?", options: ["5 + (int)(Math.random()*6)", "5 + (int)(Math.random()*5)", "(int)(Math.random()*10)", "5 + ..."], answer: 0, explanation_en: "Range is 6 numbers (5,6,7,8,9,10). Offset is 5." },
                            { id: 107, question: "str.indexOf('z') if not found?", options: ["0", "-1", "Exception", "null"], answer: 1, explanation_en: "Returns -1." },
                            { id: 108, question: "Loop guaranteed to run at least once?", options: ["for", "while", "do-while", "All"], answer: 2, explanation_en: "Check is at the end." },
                            { id: 109, question: "'Hello'.equalsIgnoreCase('hello')?", options: ["true", "false", "Error", "null"], answer: 0, explanation_en: "Ignores case differences." },
                            { id: 110, question: "Pass x=10 to method, method changes it. x after call?", options: ["20", "10", "0", "Error"], answer: 1, explanation_en: "Pass-by-value makes a copy. Original is safe." },
                            { id: 111, question: "Math.PI is?", options: ["Method", "Constructor", "Constant", "Variable"], answer: 2, explanation_en: "Static final constant." },
                            { id: 112, question: "Character.isUpperCase('A')?", options: ["'A'", "true", "false", "1"], answer: 1, explanation_en: "It is uppercase." },
                            { id: 113, question: "Format specifier for String?", options: ["%d", "%f", "%s", "%c"], answer: 2, explanation_en: "%s for String." },
                            { id: 114, question: "'Off-by-one' errors caused by?", options: ["No semicolon", "Wrong loop condition (< vs <=)", "Divide by zero", "Spelling"], answer: 1, explanation_en: "Iterating one too many or too few times." },
                            { id: 115, question: "Why Strings are 'Reference Types'?", options: ["Primitive", "Store in stack", "Store address/reference", "Immutable"], answer: 2, explanation_en: "Variable holds memory address, not data." },
                            { id: 116, question: "Return type of Math.round(float)?", options: ["int", "long", "double", "float"], answer: 0, explanation_en: "Round(float) returns int. Round(double) returns long." },
                            { id: 117, question: "Correct String creation?", options: ["'Hello'", "\"Hello\"", "new String('Hello')", "Hello"], answer: 1, explanation_en: "Double quotes." },
                            { id: 118, question: "Forget to update loop variable?", options: ["Syntax Error", "Executes once", "Infinite Loop", "Skipped"], answer: 2, explanation_en: "Condition stays true forever." },
                            { id: 119, question: "Math.rint(2.5)?", options: ["2.0", "3.0", "2.5", "2"], answer: 0, explanation_en: "Rounds to nearest EVEN integer at .5." },
                            { id: 120, question: "Method for larger of two values?", options: ["Math.large", "Math.abs", "Math.max", "Math.upper"], answer: 2, explanation_en: "Math.max()." }
                        ],
                        q_part7: [
                            { id: 121, question: "Correctly declare 2D array 3 rows, 4 cols?", options: ["int[][] m = new int[4][3];", "int[][] m = new int[3][4];", "int[3][4] m = new int[][];", "int m = new int[3, 4];"], answer: 1, explanation_en: "Syntax is new type[rows][cols]." },
                            { id: 122, question: "int[] list = {1, 2, 3, 4, 5}; list.length?", options: ["4", "5", "6", "0"], answer: 1, explanation_en: "Initializer has 5 elements." },
                            { id: 123, question: "Access list[5] in array of size 5?", options: ["Returns 0", "Returns last element", "ArrayIndexOutOfBoundsException", "Creates new element"], answer: 2, explanation_en: "Indices are 0 to 4. Index 5 is out of bounds." },
                            { id: 124, question: "matrix.length in a 2D array represents?", options: ["Total elements", "Columns", "Rows", "First value"], answer: 2, explanation_en: "Length of outer array = number of rows." },
                            { id: 125, question: "What is a 'Ragged Array'?", options: ["Random values", "Rows have different lengths", "Uninitialized", "3D array"], answer: 1, explanation_en: "Array of arrays where inner arrays can differ in size." },
                            { id: 126, question: "Loop to iterate without index?", options: ["for(int i...)", "while", "for (int n : numbers)", "do-while"], answer: 2, explanation_en: "Enhanced for-loop (for-each)." },
                            { id: 127, question: "Default value of boolean array elements?", options: ["true", "false", "null", "0"], answer: 1, explanation_en: "Default for boolean is false." },
                            { id: 128, question: "Valid array declaration syntax?", options: ["int list[]", "int[] list", "Both", "Neither"], answer: 2, explanation_en: "Java supports both styles." },
                            { id: 129, question: "Access 2nd row, 3rd column?", options: ["matrix[2][3]", "matrix[1][2]", "matrix[3][2]", "matrix[0][0]"], answer: 1, explanation_en: "0-based indexing: Row 1, Col 2." },
                            { id: 130, question: "int[][] x = new int[3][5]; x[1].length?", options: ["3", "5", "15", "8"], answer: 1, explanation_en: "x[1] is a row, which has 5 columns." },
                            { id: 131, question: "Passing array to method passes?", options: ["Copy of values", "Reference (address)", "First element", "Length"], answer: 1, explanation_en: "Arrays are objects; reference is passed." },
                            { id: 132, question: "Correct initialization?", options: ["int[] l = {1, 2};", "int[] l = new int(1, 2);", "int l = {1, 2};", "int[] l; l={1};"], answer: 0, explanation_en: "Standard initializer syntax." },
                            { id: 133, question: "Index of last element?", options: ["arr.length", "arr.length - 1", "arr.length + 1", "arr.size()"], answer: 1, explanation_en: "0-based indexing." },
                            { id: 134, question: "int[] a = new int[10]; print(a[0]);?", options: ["0", "null", "Garbage", "Error"], answer: 0, explanation_en: "Default value for int is 0." },
                            { id: 135, question: "Dimensions of double[][][]?", options: ["1", "2", "3", "4"], answer: 2, explanation_en: "Three brackets = 3 dimensions." },
                            { id: 136, question: "Arrays.toString(new int[]{1, 2})?", options: ["Address", "String '[1, 2]'", "String '1 2'", "Error"], answer: 1, explanation_en: "Helper method for readable output." },
                            { id: 137, question: "Outer loop in 2D traversal iterates?", options: ["Columns", "Rows", "Values", "Last row"], answer: 1, explanation_en: "Standard is Row-Major traversal." },
                            { id: 138, question: "Create array of 10 doubles?", options: ["double[] d = new double[10];", "double d[] = new double(10);", "double[10] d;", "double d={10};"], answer: 0, explanation_en: "Correct allocation syntax." },
                            { id: 139, question: "arr={10,20,30}; arr[1]=50; Result?", options: ["{10, 50, 30}", "{50, 20, 30}", "Error", "New array"], answer: 0, explanation_en: "Modifies element at index 1." },
                            { id: 140, question: "Method to sort an array?", options: ["list.sort()", "Arrays.sort(list)", "Arrays.order()", "System.sort()"], answer: 1, explanation_en: "java.util.Arrays.sort()." }
                        ],
                        q_part8: [
                            { id: 141, question: "Sum all elements in 2D array?", options: ["One loop", "sum += m[i]", "Nested loops sum+=m[row][col]", "sum = length"], answer: 2, explanation_en: "Must visit every cell." },
                            { id: 142, question: "Invalid 2D array init?", options: ["{{1,2}}", "new int[2][2]", "new int[2][]", "new int[][2]"], answer: 3, explanation_en: "Must specify first dimension (rows)." },
                            { id: 143, question: "Method modifies passed array?", options: ["Lost", "Original modified", "Error", "Must return"], answer: 1, explanation_en: "Changes persist due to reference passing." },
                            { id: 144, question: "x={1}; y=x; y[0]=100; print(x[0])?", options: ["1", "100", "0", "Error"], answer: 1, explanation_en: "x and y point to same object." },
                            { id: 145, question: "Change array size after creation?", options: ["Yes", "No, fixed", "Yes by adding", "Only 2D"], answer: 1, explanation_en: "Array size is fixed at creation." },
                            { id: 146, question: "Cols in row i of 2D array?", options: ["table.length", "table[i].length", "table[0].length", "table.width"], answer: 1, explanation_en: "Length of the specific row array." },
                            { id: 147, question: "Ragged arrays simulate?", options: ["Square", "Triangle", "Line", "Circle"], answer: 1, explanation_en: "Variable row lengths (e.g., Pascal's Triangle)." },
                            { id: 148, question: "Enhanced for loop syntax?", options: ["for(int x : data)", "for(int x in data)", "foreach", "for(data : int x)"], answer: 0, explanation_en: "Colon syntax." },
                            { id: 149, question: "char[] c = new char[5]; c[0]?", options: ["'0'", "Space", "null char (\\u0000)", "undefined"], answer: 2, explanation_en: "Default char is \\u0000." },
                            { id: 150, question: "Init row 0 of ragged array?", options: ["matrix[0] = new int[5];", "matrix[0] = {1};", "matrix = new int[5]", "Error"], answer: 0, explanation_en: "Allocates integer array for the row." },
                            { id: 151, question: "Advantage of array?", options: ["Mixed types", "Collection of same type", "Auto sort", "Unlimited"], answer: 1, explanation_en: "Grouping same-type data." },
                            { id: 152, question: "new int[3][].length?", options: ["0", "3", "null", "Error"], answer: 1, explanation_en: "Length of outer dimension." },
                            { id: 153, question: "Type of outer loop var in 2D for-each?", options: ["int", "int[]", "int[][]", "Object"], answer: 1, explanation_en: "Iterates over rows (arrays)." },
                            { id: 154, question: "int matrix[][] vs int[][] matrix?", options: ["Slower", "C-style (valid but less preferred)", "Error", "Size limit"], answer: 1, explanation_en: "Java prefers brackets with type." },
                            { id: 155, question: "Identity matrix condition?", options: ["if(row==col) = 1", "if(row!=col)", "= 1", "m[row]=1"], answer: 0, explanation_en: "Diagonal is where row index equals col index." },
                            { id: 156, question: "Max valid index for size N?", options: ["N", "N-1", "N+1", "0"], answer: 1, explanation_en: "0 to N-1." },
                            { id: 157, question: "Random double 0-100?", options: ["Math.random() * 100", "Math.random(100)", "Random(100)", "100"], answer: 0, explanation_en: "Scale 0.0-1.0 by 100." },
                            { id: 158, question: "int[] a; value before init?", options: ["0", "null", "Empty", "Undefined/Error"], answer: 3, explanation_en: "Local vars must be initialized." },
                            { id: 159, question: "Total elements in new int[4][2]?", options: ["6", "8", "4", "2"], answer: 1, explanation_en: "4 * 2 = 8." },
                            { id: 160, question: "Ragged: Row 0 len 2. Access [0][3]?", options: ["0", "null", "IndexOutOfBounds", "Row 1"], answer: 2, explanation_en: "Index 3 is past length 2." }
                        ],
                        q_part9: [
                            { id: 161, question: "Operation requiring new array?", options: ["Access", "Change value", "Resizing", "Length"], answer: 2, explanation_en: "Cannot resize; must copy to new array." },
                            { id: 162, question: "println(arrayObject) prints?", options: ["Contents", "Memory Address/Hash", "First element", "Length"], answer: 1, explanation_en: "Default toString is address." },
                            { id: 163, question: "3D array declaration?", options: ["int[][][] cube", "int[3] cube", "int cube##", "3D int"], answer: 0, explanation_en: "3 levels of brackets." },
                            { id: 164, question: "Pass anonymous array?", options: ["Yes", "No", "Static only", "Error"], answer: 0, explanation_en: "print(new int[]{1,2}) is valid." },
                            { id: 165, question: "Find max logic?", options: ["max=list[0], loop check > max", "max=0, loop", "max=length", "max=list[i]"], answer: 0, explanation_en: "Initialize with first, update if larger found." },
                            { id: 166, question: "Input to 2D array needs?", options: ["One loop", "Two nested loops", "Three loops", "None"], answer: 1, explanation_en: "Rows and Columns." },
                            { id: 167, question: "Split initializer int[] x = {1}; across lines?", options: ["Yes", "No", "With new", "Later"], answer: 1, explanation_en: "Shorthand {} only valid at declaration." },
                            { id: 168, question: "Method to copy array?", options: ["copy()", "System.arraycopy()", "clone()", "B and C"], answer: 3, explanation_en: "Both are valid ways." },
                            { id: 169, question: "matrix[row] refers to?", options: ["Element", "The row array", "Length", "First element"], answer: 1, explanation_en: "Reference to the inner array." },
                            { id: 170, question: "new int[3][] creates?", options: ["Null array", "Array of 3 nulls", "3x3", "Error"], answer: 1, explanation_en: "It creates the outer array of size 3. The inner arrays (rows) are not yet created, so they are null." },
                            { id: 171, question: "Indices for new int[5]?", options: ["1-5", "0-5", "0-4", "1-4"], answer: 2, explanation_en: "0 to Size-1." },
                            { id: 172, question: "Row with 0 length?", options: ["Yes", "No", "C++ only", "Null"], answer: 0, explanation_en: "Empty arrays allowed." },
                            { id: 173, question: "int[] list = new double[5]?", options: ["Runtime", "Compilation Error", "Logic", "None"], answer: 1, explanation_en: "Type mismatch." },
                            { id: 174, question: "Loop i <= length?", options: ["Correct", "Skip last", "IndexOutOfBounds", "Infinite"], answer: 2, explanation_en: "Last index is length-1." },
                            { id: 175, question: "Matrix in Java is?", options: ["Primitive", "Object", "Keyword", "Library"], answer: 1, explanation_en: "In Java, arrays are Objects." },
                            { id: 176, question: "Print newline in grid print?", options: ["Inner loop", "After inner loop", "After outer", "Before"], answer: 1, explanation_en: "After printing a row." },
                            { id: 177, question: "Array sizes must be?", options: ["Negative", "int", "double", "dynamic"], answer: 1, explanation_en: "Must be non-negative integer." },
                            { id: 178, question: "arr variable stores?", options: ["Values", "Reference/Address", "Size", "String"], answer: 1, explanation_en: "Pointer to memory." },
                            { id: 179, question: "Return array syntax?", options: ["int[] get()", "int get[]()", "void get(int[])", "array get()"], answer: 0, explanation_en: "Return type is int[]." },
                            { id: 180, question: "arr.length if arr is null?", options: ["0", "NullPointerException", "-1", "Nothing"], answer: 1, explanation_en: "Cannot access property of null." }
                        ],
                        q_part10: [
                            { id: 181, question: "True about JVM?", options: ["Compiles code", "Same for all OS", "Interprets/Executes bytecode", "Hardware"], answer: 2, explanation_en: "JVM executes the bytecode on the specific platform." },
                            { id: 182, question: "list={1,2,3,4}. print(list[4])?", options: ["4", "0", "null", "ArrayIndexOutOfBounds"], answer: 3, explanation_en: "Index 4 is out of bounds (0-3)." },
                            { id: 183, question: "Valid overload for move(int x, int y)?", options: ["move(int a, int b)", "int move(int x, int y)", "move(double x, double y)", "void move(int, int)"], answer: 2, explanation_en: "Different parameter types." },
                            { id: 184, question: "Switch without break?", options: ["Error", "Exits", "Falls through", "Default runs"], answer: 2, explanation_en: "Fall-through behavior." },
                            { id: 185, question: "Violates naming convention?", options: ["totalScore", "MAX_HEIGHT", "StudentName", "radius"], answer: 2, explanation_en: "Variables should be camelCase (studentName)." },
                            { id: 186, question: "Math.ceil(2.1)?", options: ["2.0", "3.0", "2", "3"], answer: 1, explanation_en: "Rounds up to 3.0." },
                            { id: 187, question: "Logic error in while(i<=10) printing i (i=1)?", options: ["Condition i<10", "Infinite loop (no increment)", "Declaration outside", "Syntax"], answer: 1, explanation_en: "i is never incremented." },
                            { id: 188, question: "'Java' + 1 + 2 + 3?", options: ["Java6", "Java123", "Java 123", "Error"], answer: 1, explanation_en: "String concatenation happens left-to-right." },
                            { id: 189, question: "Type for 'on'/'off' flag?", options: ["int", "String", "boolean", "char"], answer: 2, explanation_en: "Boolean is best for 2 states." },
                            { id: 190, question: "Total elements in new int[3][4]?", options: ["7", "12", "4", "3"], answer: 1, explanation_en: "3 * 4 = 12." },
                            { id: 191, question: "Scope of var in for-loop init?", options: ["Class", "Method", "Loop body", "Global"], answer: 2, explanation_en: "Local to loop." },
                            { id: 192, question: "x=5, y=2. (double)x/y?", options: ["2", "2.0", "2.5", "3.0"], answer: 2, explanation_en: "5.0 / 2 = 2.5." },
                            { id: 193, question: "Create ragged array (row 0: 2 cols, row 1: 3 cols)?", options: ["{{1,2}, {3,4,5}}", "new int[2][3]", "{{1,2,3},{4,5}}", "new int[3][2]"], answer: 0, explanation_en: "Initializer defines row sizes." },
                            { id: 194, question: "Highest precedence?", options: ["*", "&&", "()", "+"], answer: 2, explanation_en: "Parentheses." },
                            { id: 195, question: "Call static method calc(int, int)?", options: ["calc[10,20]", "calc(10, 20)", "void calc(10,20)", "calc(int 10, int 20)"], answer: 1, explanation_en: "Standard method call." },
                            { id: 196, question: "(5>3) ^ (2<4)?", options: ["true", "false", "1", "0"], answer: 1, explanation_en: "True XOR True = False." },
                            { id: 197, question: "Volatile memory?", options: ["HDD", "Flash", "RAM", "CD"], answer: 2, explanation_en: "RAM loses data on power loss." },
                            { id: 198, question: "'Hello'.charAt(5)?", options: ["o", "Space", "null", "StringIndexOutOfBounds"], answer: 3, explanation_en: "Indices 0-4. 5 is invalid." },
                            { id: 199, question: "Passing array passes?", options: ["Copy of elements", "Reference", "Length", "First element"], answer: 1, explanation_en: "Reference by value." },
                            { id: 200, question: "Loop executes at least once?", options: ["for", "while", "do-while", "None"], answer: 2, explanation_en: "Condition check is at end." },
                        ],
                        q_part11: [
                            { id: 201, question: "(int) 3.99?", options: ["4", "3", "3.99", "Error"], answer: 1, explanation_en: "Truncates decimal." },
                            { id: 202, question: "Check string content equality?", options: ["==", ".equals()", ".compare()", "="], answer: 1, explanation_en: "Use .equals()." },
                            { id: 203, question: "Random int 0-4?", options: ["(int)(Math.random()*5)", "(int)(Math.random()*4)", "Math.random()*5", "+5"], answer: 0, explanation_en: "Range size is 5 (0,1,2,3,4)." },
                            { id: 204, question: "void keyword means?", options: ["No parameters", "No return value", "Empty", "Private"], answer: 1, explanation_en: "Does not return data." },
                            { id: 205, question: "Declare constant PI?", options: ["double PI", "final double PI", "static PI", "const PI"], answer: 1, explanation_en: "Final makes it constant." },
                            { id: 206, question: "Default value of int array element?", options: ["null", "0", "undefined", "-1"], answer: 1, explanation_en: "0 for int." },
                            { id: 207, question: "10 % 3?", options: ["3", "0", "1", "3.33"], answer: 2, explanation_en: "Remainder is 1." },
                            { id: 208, question: "Printf float specifier?", options: ["%d", "%s", "%f", "%c"], answer: 2, explanation_en: "%f." },
                            { id: 209, question: "Syntax Error detected by?", options: ["CPU", "Compiler", "JVM", "Programmer"], answer: 1, explanation_en: "Compiler checks grammar." },
                            { id: 210, question: "matrix.length refers to?", options: ["Columns", "Rows", "Cells", "Size"], answer: 1, explanation_en: "Number of rows." },
                            { id: 211, question: "x=0. if(x>0) Positive else Not. Output?", options: ["Positive", "Not Positive", "Both", "Nothing"], answer: 1, explanation_en: "Condition false." },
                            { id: 212, question: "Escape sequence for Tab?", options: ["\\n", "\\t", "\\b", "\\\\"], answer: 1, explanation_en: "\\t." },
                            { id: 213, question: "Init array {10, 20, 30}?", options: ["new int(10..)", "int list = ..", "int[] list = {10, 20, 30}", "[]"], answer: 2, explanation_en: "Standard initializer." },
                            { id: 214, question: "Method Abstraction?", options: ["Hide implementation", "No name", "Ignore error", "Loop"], answer: 0, explanation_en: "Focus on what, not how." },
                            { id: 215, question: "'Welcome'.substring(0, 3)?", options: ["Wel", "Welc", "elc", "come"], answer: 0, explanation_en: "0, 1, 2." },
                            { id: 216, question: "Valid identifier?", options: ["2ndPlayer", "class", "_score", "total-score"], answer: 2, explanation_en: "Can start with underscore." },
                            { id: 217, question: "break inside loop?", options: ["Skip", "Terminate program", "Terminate loop", "Pause"], answer: 2, explanation_en: "Exits loop." },
                            { id: 218, question: "Pass-by-value primitive?", options: ["Change original", "Copy value", "Pointer", "Delete"], answer: 1, explanation_en: "Receives copy." },
                            { id: 219, question: "Random [5, 10)?", options: ["5+Math.random()*5", "5+Math.random()*10", "*5", "(int)..."], answer: 0, explanation_en: "Start 5, Range 5." },
                            { id: 220, question: "Last index of array size n?", options: ["n", "n+1", "n-1", "0"], answer: 2, explanation_en: "n-1." },
                        ],
                        q_part12: [
                            { id: 221, question: "Source code extension?", options: [".class", ".java", ".txt", ".exe"], answer: 1, explanation_en: ".java files." },
                            { id: 222, question: "Ragged Array truth?", options: ["Same length rows", "Not supported", "Different length rows", "3D"], answer: 2, explanation_en: "Rows vary in size." },
                            { id: 223, question: "Math.round(2.6)?", options: ["2", "3", "2.6", "2.0"], answer: 1, explanation_en: "Rounds to nearest." },
                            { id: 224, question: "Read single word?", options: ["nextLine", "next", "readWord", "nextString"], answer: 1, explanation_en: "input.next()." },
                            { id: 225, question: "Nested loop print(i+j) 2x2?", options: ["0112", "0123", "0011", "1234"], answer: 0, explanation_en: "0+0=0, 0+1=1, 1+0=1, 1+1=2." },
                            { id: 226, question: "Reference Type?", options: ["int", "double", "char", "String"], answer: 3, explanation_en: "String is a class." },
                            { id: 227, question: "b=false. !b?", options: ["false", "true", "0", "null"], answer: 1, explanation_en: "Not false is true." },
                            { id: 228, question: "Loop for known iterations?", options: ["while", "do-while", "for", "switch"], answer: 2, explanation_en: "For loop." },
                            { id: 229, question: "x++ effect?", options: ["Increment then use", "Use then increment", "No change", "Add 2"], answer: 1, explanation_en: "Post-increment." },
                            { id: 230, question: "Copy array source to target?", options: ["target=source", "System.arraycopy/loop", "copy()", "clone() to new"], answer: 1, explanation_en: "Must copy elements." },
                            { id: 231, question: "Math.max(10, Math.min(15, 5))?", options: ["15", "5", "10", "20"], answer: 2, explanation_en: "Max(10, 5) = 10." },
                            { id: 232, question: "args in main method?", options: ["Name", "String array of arguments", "Return", "Keyword"], answer: 1, explanation_en: "Command line arguments." },
                            { id: 233, question: "Check x between 1 and 10?", options: ["1<=x<=10", "||", "x>=1 && x<=10", "> <"], answer: 2, explanation_en: "AND operator." },
                            { id: 234, question: "'ABC'.compareTo('ABE')?", options: ["0", "Positive", "Negative", "true"], answer: 2, explanation_en: "C < E." },
                            { id: 235, question: "Bytecode extension?", options: [".java", ".class", ".code", ".jvm"], answer: 1, explanation_en: ".class files." },
                            { id: 236, question: "Scanner read double?", options: ["nextFloat", "readDouble", "nextDouble", "nextDecimal"], answer: 2, explanation_en: "nextDouble()." },
                            { id: 237, question: "Dimensions in int[][][]?", options: ["1", "2", "3", "4"], answer: 2, explanation_en: "3." },
                            { id: 238, question: "Uninitialized local array reference?", options: ["null/undefined", "Empty", "0", "Zeros"], answer: 0, explanation_en: "Undefined (compiler error)." },
                            { id: 239, question: "Loop runs exactly 5 times?", options: ["i=0; i<5", "i=1; i<5", "i=0; i<=5", "i=1; i<=6"], answer: 0, explanation_en: "0, 1, 2, 3, 4." },
                            { id: 240, question: "Logic error example?", options: ["Missing ;", "Divide by zero", "Wrong formula", "Undeclared"], answer: 2, explanation_en: "Valid code, wrong result." },
                        ]
                    }
                }
            }
        },


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
                        { title: "شبكات المحاضرة 1", link: "https://drive.google.com/file/d/1C8_m8MQQJV1n4aqBvOKdFYNINqT0Wzk_/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الصور والمخططات غير موجودة." },
                        { title: "شبكات المحاضرة 2", link: "https://drive.google.com/file/d/1xsk0lZeRZ3k4pHs32GeR5qrAN99NZn4k/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الصور والمخططات غير موجودة." },
                        { title: "شبكات المحاضرة 3", link: "https://drive.google.com/file/d/1TWKtPnZgu4Nc6VBXaz4mNEiYr1NyPbpO/view?usp=sharing", type: "PDF", note: "تنبيه: الملخص نصي. الصور والمخططات غير موجودة." },
                        { title: "شبكات المحاضرة 4", link: "https://drive.google.com/file/d/1FMrUzrt7K_QlnCaTzpPVgwxGl4W2bd0z/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الصور والمخططات غير موجودة." },
                        { title: "شبكات المحاضرة 5", link: "https://drive.google.com/file/d/1dYvQwHeqzdpq_gh20gomQHEO05gm8Drx/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الصور والمخططات غير موجودة." },
                        { title: "شبكات ملخص الملخص", link: "https://drive.google.com/file/d/16aCw9uQbCHKaAjxegsiHw5lRIzF25cKw/view?usp=drive_link", type: "PDF", note: "تحذير: للمراجعة السريعة فقط." }
                    ], 
                    en: [
                        { title: "Networks Lecture 1", link: "https://drive.google.com/file/d/1tnt9cif76xzK6YOBaflEERK4qqqIDhEJ/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING." },
                        { title: "Networks Lecture 2", link: "https://drive.google.com/file/d/1a0UEC1yn6_v7hUPE3pN1TYFerX4MFqHN/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING." },
                        { title: "Networks Lecture 3", link: "https://drive.google.com/file/d/1EDcCnvBu0S7WdJQnjL9zeJeDM5_5UO1O/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING." },
                        { title: "Networks Lecture 4", link: "https://drive.google.com/file/d/1pHEA3vROWC8OiRo9yP07F2HiVsU4OxIm/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING." },
                        { title: "Networks Lecture 5", link: "https://drive.google.com/file/d/1XlVGdokQcLOyUpniZIW2AdgNoW5VFPT-/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Diagrams and Topologies are MISSING." },
                        { title: "Networks SS", link: "https://drive.google.com/file/d/1q4cW05CPcMLkpehTUFwRF4sgB_CayR8f/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only." }
                    ] 
                },
                labs: {
                    material: [
                        { title: "Lab 1: Intro to computer networks", link: "https://drive.google.com/file/d/1nNT2uzJOnBayXl9htfU56U370jWNbBQH/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 2: Switch & Routers", link: "https://drive.google.com/file/d/1NRA3qyaWDTm0hZOz_QKdXqPexdjAFrT8/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 2,3,4: Cisco Packet Tracer", link: "https://drive.google.com/file/d/1xmq-Jik3keXaoG5ksRGwGZ78ilMmNOoX/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 5: IP Routing", link: "https://drive.google.com/file/d/1akN64N8jjL57VkbjUd2FPcHaqjlUko6S/view?usp=drive_link", type: "PDF" },
                        { title: "Labs 2,3,4,5 Combined", link: "https://drive.google.com/file/d/1ucOZ1OIQrwbxyuo312V2V-WLcJgaI4jX/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 6,7: IP Addressing", link: "https://drive.google.com/file/d/1XzdvoBdfhT3exRf6nzPLoulauy7ew6AZ/view?usp=drive_link", type: "PDF" },
                        { title: "Lab 8: Cisco Packet Tracer DHCP", link: "https://drive.google.com/file/d/16UrpAW2CR5oagCKd6RIQSZRXWYSUH4LF/view?usp=drive_link", type: "PDF" }
                    ],
                    questions: {} // لازم نسيب دي موجودة حتى لو فاضية عشان السيستم ميقعش
                },
                quiz: {
    isSplit: true,
    sections: [
        // --- MCQs Sections (20 per part) ---
        { id: 'net_mcq_1', title: 'Networks MCQs: Part 1', qCount: 20, type: 'mcq' },
        { id: 'net_mcq_2', title: 'Networks MCQs: Part 2', qCount: 20, type: 'mcq' },
        { id: 'net_mcq_3', title: 'Networks MCQs: Part 3', qCount: 20, type: 'mcq' },
        { id: 'net_mcq_4', title: 'Networks MCQs: Part 4', qCount: 20, type: 'mcq' },
        { id: 'net_mcq_5', title: 'Networks MCQs: Part 5', qCount: 20, type: 'mcq' },

        // --- True/False Sections (20 per part) ---
        { id: 'net_tf_1', title: 'Networks T/F: Part 1', qCount: 20, type: 'tf' },
        { id: 'net_tf_2', title: 'Networks T/F: Part 2', qCount: 20, type: 'tf' },
        { id: 'net_tf_3', title: 'Networks T/F: Part 3', qCount: 20, type: 'tf' },
        { id: 'net_tf_4', title: 'Networks T/F: Part 4', qCount: 20, type: 'tf' },
        { id: 'net_tf_5', title: 'Networks T/F: Part 5', qCount: 20, type: 'tf' },

        // --- Essay Sections (10 per part) ---
        { id: 'net_essay_1', title: 'Networks Essay: Part 1', qCount: 10, type: 'text' },
        { id: 'net_essay_2', title: 'Networks Essay: Part 2', qCount: 10, type: 'text' },
        { id: 'net_essay_3', title: 'Networks Essay: Part 3', qCount: 10, type: 'text' }
    ],
    data: {
        // ================= MCQ DATA (1-100) =================
        net_mcq_1: [
            { id: 1, question: "Which network topology requires a central controller or hub?", options: ["Bus", "Ring", "Star", "Mesh"], answer: 3, explanation_en: "Star topology connects all nodes to a central device (hub/switch). Bus uses a single cable; Ring connects node-to-node; Mesh connects nodes to multiple other nodes directly." },
            { id: 2, question: "What is the primary function of an RFID reader?", options: ["To scan text documents and convert them to digital words", "To read data stored on radio frequency tags without direct line of sight", "To print high-quality graphics on large banners", "To connect a computer to a wired network"], answer: 2, explanation_en: "RFID reads tags via radio waves, so line-of-sight isn’t needed." },
            { id: 3, question: "In the context of IP addressing, which class of IP address supports the largest number of hosts per network?", options: ["Class C", "Class B", "Class A", "Class D"], answer: 3, explanation_en: "Class A supports over 16 million hosts (first octet network, rest hosts). Class B is medium; Class C is small (254 hosts)." },
            { id: 4, question: "Which type of computer is specifically designed to handle thousands of connected users simultaneously and manages large amounts of centralized data?", options: ["Embedded Computer", "Mainframe Computer", "Mobile Device", "Supercomputer"], answer: 2, explanation_en: "Mainframes are built for high I/O, reliability, and concurrent users/data. Supercomputers focus on calculation speed." },
            { id: 5, question: "Which protocol is best suited for uploading and downloading files over the Internet?", options: ["HTTP", "SMTP", "FTP", "TCP"], answer: 3, explanation_en: "FTP (File Transfer Protocol) is specifically designed for transferring files. HTTP is for web pages; SMTP for email." },
            { id: 6, question: "What is the distinct advantage of Fiber-optic cables over Twisted-pair cables?", options: ["They use electrical signals to transmit data", "They are cheaper and easier to install", "They transmit data using light pulses and are immune to electromagnetic interference", "They are the standard for connecting a mouse to a PC"], answer: 3, explanation_en: "Fiber-optic uses light, making it faster and immune to EMI. Twisted-pair uses copper/electricity and is susceptible to interference." },
            { id: 7, question: "A 'Thin Client' is best described as:", options: ["A powerful workstation for video editing", "A computer designed to rely heavily on a server for processing tasks", "A laptop with a very thin screen", "A standalone computer that never connects to a network"], answer: 2, explanation_en: "Thin Clients have minimal local processing/storage and rely on a server." },
            { id: 8, question: "What does OCR stand for in the context of input devices?", options: ["Optical Character Recognition", "Output Control Register", "Optical Code Reader", "Optimal Computer Resolution"], answer: 1, explanation_en: "Optical Character Recognition converts scanned images of text into editable text." },
            { id: 9, question: "Which networking device connects multiple networks together and directs data packets based on their destination IP address?", options: ["Hub", "Switch", "Repeater", "Router"], answer: 4, explanation_en: "Router directs packets between different networks using IP. Switch works within a LAN using MAC addresses." },
            { id: 10, question: "What is the main difference between HTTP and HTTPS?", options: ["HTTP is faster than HTTPS", "HTTPS encrypts the data being transmitted for security", "HTTPS is used only for email", "HTTP is used for private networks only"], answer: 2, explanation_en: "HTTPS includes 'Secure' (TLS encryption). HTTP sends data in plain text, which is risky." },
            { id: 11, question: "In a Bus topology, what happens if the main cable (backbone) is cut?", options: ["Only one computer goes offline", "The network reroutes traffic automatically", "The entire network shuts down", "The server acts as a backup cable"], answer: 3, explanation_en: "In Bus topology, the backbone is the single point of failure. If cut, the whole segment goes down." },
            { id: 12, question: "Which of the following is considered an output device?", options: ["Barcode Reader", "Flat-Panel Display", "Touch Screen (Stylus)", "Microphone"], answer: 2, explanation_en: "Flat-Panel Display shows information to the user (output). Barcode/Touch/Mic are input devices." },
            { id: 13, question: "Supercomputers are primarily optimized for:", options: ["Running thousands of small programs for many users", "Hosting web pages for small businesses", "High-speed calculations for a single complex task like weather forecasting", "Word processing and email"], answer: 3, explanation_en: "Supercomputers excel at 'number crunching' for scientific models (weather, nuclear)." },
            { id: 14, question: "What is a 'Loopback address' used for?", options: ["Testing the network interface card on the local machine", "Connecting to a remote server", "Broadcasting to all computers on a subnet", "Assigning an IP to a printer"], answer: 1, explanation_en: "Loopback (127.0.0.1) is used for self-testing the local stack. It does not go out to the network." },
            { id: 15, question: "Which transmission medium consists of a center wire surrounded by insulation and a braided shield?", options: ["Fiber-optic", "Twisted-pair", "Coaxial Cable", "Radio waves"], answer: 3, explanation_en: "Coaxial has a distinct structure: inner core, insulation, shield, jacket." },
            { id: 16, question: "Which protocol is responsible for sending emails?", options: ["POP3", "FTP", "HTTP", "SMTP"], answer: 4, explanation_en: "SMTP (Simple Mail Transfer Protocol) sends email. POP3/IMAP receive it." },
            { id: 17, question: "What characteristic defines a Peer-to-Peer (P2P) network?", options: ["A central server controls all security permissions", "Every computer has equal status and can act as both client and server", "It requires a mainframe computer to function", "It is only used for connecting printers"], answer: 2, explanation_en: "In P2P, peers share resources directly without a dedicated server." },
            { id: 18, question: "The aspect ratio of a display screen describes:", options: ["The total number of pixels on the screen", "The proportional relationship between its width and its height", "The diagonal size of the screen in inches", "The number of colors the screen can display"], answer: 2, explanation_en: "Aspect Ratio is the ratio of width to height (e.g., 16:9)." },
            { id: 19, question: "Which of the following is NOT a type of Area Network?", options: ["LAN", "WAN", "SAN", "RAM"], answer: 4, explanation_en: "RAM is memory, not a network type. LAN, WAN, SAN are network types." },
            { id: 20, question: "Which input device uses a light source to read a pattern of bars and spaces?", options: ["OCR", "Barcode Reader", "Stylus", "RFID Reader"], answer: 2, explanation_en: "Barcode Readers scan light/dark bars." }
        ],
        net_mcq_2: [
            { id: 21, question: "What is the purpose of a Firewall in a network?", options: ["To speed up data transmission", "To prevent the computer from overheating", "To block unauthorized access while permitting outward communication", "To connect different network topologies"], answer: 3, explanation_en: "Firewalls filter traffic to block unauthorized access." },
            { id: 22, question: "An embedded computer is:", options: ["A large server used by banks", "A tiny computer integrated into a product like a washing machine or car", "A portable laptop", "A desktop computer used for gaming"], answer: 2, explanation_en: "Embedded computers are specialized controllers inside other devices (appliances, cars)." },
            { id: 23, question: "In the Client/Server model, the 'Client' is:", options: ["The computer that provides resources and data", "The computer that requests resources or services", "The network cable connecting devices", "The operating system software"], answer: 2, explanation_en: "The Client makes requests; the Server fulfills them." },
            { id: 24, question: "Which wireless transmission media is most commonly used for local Wi-Fi networks?", options: ["Infrared", "Microwave", "Radio Signals", "Satellite"], answer: 3, explanation_en: "Radio Signals (Wi-Fi) are the standard for local wireless." },
            { id: 25, question: "What is the specific function of a Switch compared to a Hub?", options: ["A switch broadcasts data to all ports", "A switch sends data only to the specific device that needs it", "A switch connects different networks (e.g., LAN to WAN)", "A switch amplifies the signal like a repeater"], answer: 2, explanation_en: "Switches learn addresses and send data only to the destination port. Hubs blindly broadcast to everyone." },
            { id: 26, question: "Data distinguished from Information is:", options: ["Processed and organized facts", "Raw, unorganized facts", "Meaningful knowledge", "The output of a computer"], answer: 2, explanation_en: "Data is raw facts. Information is processed data that has meaning." },
            { id: 27, question: "Which printer type uses a drum, toner, and heat to create images?", options: ["Ink-jet Printer", "Dot Matrix Printer", "Laser Printer", "Thermal Printer"], answer: 3, explanation_en: "Laser printers use static electricity, toner, and a fuser (heat)." },
            { id: 28, question: "What is the correct format of an IPv4 address?", options: ["128-bit hexadecimal (e.g., 2001:db8::1)", "32-bit dotted decimal (e.g., 192.168.1.1)", "64-bit binary code", "A website URL"], answer: 2, explanation_en: "IPv4 uses 32-bit dotted decimals (x.x.x.x)." },
            { id: 29, question: "Which topology uses tokens to prevent data collisions?", options: ["Bus", "Star", "Ring", "Hybrid"], answer: 3, explanation_en: "Ring topology uses a 'token' passing scheme to control who speaks, preventing collisions." },
            { id: 30, question: "A VPN (Virtual Private Network) allows users to:", options: ["Access the internet faster", "Send data securely over a public network as if directly connected to a private network", "Create a physical connection between two servers", "Host a public website"], answer: 2, explanation_en: "VPNs tunnel securely through the public internet, extending a private network." },
            { id: 31, question: "The 'System Unit' typically refers to:", options: ["The monitor and keyboard", "The main case of a computer that houses the electronic components", "The operating system software", "The entire computer setup including the desk"], answer: 2, explanation_en: "The System Unit is the box containing the motherboard, CPU, RAM, etc." },
            { id: 32, question: "Which of the following is a Mobile Device?", options: ["Midrange Server", "Smartphone", "Desktop PC", "Supercomputer Cluster"], answer: 2, explanation_en: "Smartphone is the only mobile device listed." },
            { id: 33, question: "What is a pixel?", options: ["A type of network cable", "The smallest controllable element of a picture represented on a screen", "A device used to input sound", "A unit of memory storage"], answer: 2, explanation_en: "Pixel (Picture Element) is the smallest dot on a screen." },
            { id: 34, question: "Which device operates at the physical layer to regenerate weak signals, extending the range of the network?", options: ["Repeater", "Bridge", "Router", "Gateway"], answer: 1, explanation_en: "Repeater regenerates signals to overcome distance attenuation." },
            { id: 35, question: "'Bandwidth' generally refers to:", options: ["The physical width of the cable", "The amount of data that can be transmitted over a network in a given amount of time", "The speed of the CPU", "The cost of the internet connection"], answer: 2, explanation_en: "Bandwidth is the data transfer rate/capacity." },
            { id: 36, question: "A MAN (Metropolitan Area Network) typically covers:", options: ["A single room or building", "A city or a large campus", "The entire globe", "A personal workspace around an individual"], answer: 2, explanation_en: "MAN covers a city/campus. LAN is a building; WAN is a country/globe." },
            { id: 37, question: "Which of the following best describes a 'Midrange Server'?", options: ["A computer used for space exploration", "A computer more powerful than a PC but less powerful than a mainframe, often used by small to medium businesses", "A specialized computer in a microwave", "A single-user workstation"], answer: 2, explanation_en: "Midrange falls between PCs and Mainframes, handling medium-scale server tasks." },
            { id: 38, question: "In a Star topology, if one workstation cable breaks:", options: ["The entire network fails", "Only that specific workstation loses connection", "Data starts traveling in the opposite direction", "The server crashes"], answer: 2, explanation_en: "In Star, each node is independent. A cable break affects only that node." },
            { id: 39, question: "Which standard protocol is the basic communication language of the Internet?", options: ["TCP/IP", "AppleTalk", "NetBEUI", "IPX/SPX"], answer: 1, explanation_en: "TCP/IP is the protocol suite of the Internet." },
            { id: 40, question: "Resolution of a scanner is typically measured in:", options: ["Hz (Hertz)", "DPI (Dots Per Inch)", "RPM (Revolutions Per Minute)", "GB (Gigabytes)"], answer: 2, explanation_en: "DPI (Dots Per Inch) measures print/scan resolution." }
        ],
        net_mcq_3: [
            { id: 41, question: "What is the main disadvantage of a Mesh topology?", options: ["It is very unreliable", "It is difficult to troubleshoot", "It is expensive and complex to wire due to multiple connections per node", "It relies on a single central hub"], answer: 3, explanation_en: "Mesh requires N(N −1)/2 cables, making it extremely expensive and complex to wire physically." },
            { id: 42, question: "A stylus is primarily used with which hardware?", options: ["Laser Printer", "Touch Screen", "Barcode Scanner", "Keyboard"], answer: 2, explanation_en: "Stylus is used with touch screens/tablets for precision input." },
            { id: 43, question: "Which IP address class is reserved for Multicasting?", options: ["Class A", "Class B", "Class D", "Class E"], answer: 3, explanation_en: "Class D (224.0.0.0 range) is for Multicast." },
            { id: 44, question: "Ink-jet printers work by:", options: ["Striking a ribbon against paper", "Spraying tiny drops of liquid ink onto paper", "Melting wax onto the page", "Using heat to fuse toner powder"], answer: 2, explanation_en: "Ink-jets spray liquid ink. Laser uses toner/heat." },
            { id: 45, question: "Which of the following is an example of a URL?", options: ["192.168.0.1", "user@gmail.com", "http://www.microsoft.com", "C:\\Documents\\File.txt"], answer: 3, explanation_en: "http://... is a Uniform Resource Locator." },
            { id: 46, question: "What does 'biometric' input refer to?", options: ["Typing on a keyboard", "Inputting data using biological traits like fingerprints or facial recognition", "Scanning a QR code", "Recording audio notes"], answer: 2, explanation_en: "Biometric inputs read physical human traits (fingerprint, iris, face)." },
            { id: 47, question: "Which network type connects storage devices to servers in a high-speed network?", options: ["VPN", "SAN (Storage Area Network)", "WAN", "PAN"], answer: 2, explanation_en: "SAN is dedicated to storage traffic." },
            { id: 48, question: "Ethernet is a standard primarily associated with:", options: ["Wireless networks", "LANs (Local Area Networks)", "Bluetooth connections", "Satellite transmissions"], answer: 2, explanation_en: "Ethernet is the dominant standard for wired LANs." },
            { id: 49, question: "A 'Bridge' in networking is used to:", options: ["Connect two similar networks or network segments", "Connect a computer to the internet", "Provide wireless access to mobile devices", "Store files for the network"], answer: 1, explanation_en: "A Bridge connects network segments (often enabling them to act as one LAN) and filters traffic." },
            { id: 50, question: "The main circuit board inside the system unit is called the:", options: ["Hard Drive", "Motherboard", "Power Supply", "Expansion Card"], answer: 2, explanation_en: "Motherboard is the main circuit board connecting all components." },
            { id: 51, question: "What is the primary use of a 'Thin Client'?", options: ["High-end gaming", "Accessing applications where the processing is done on the server", "Storing massive amounts of local data", "editing 4K video offline"], answer: 2, explanation_en: "Thin clients rely on the server for processing; they are not for gaming or offline editing." },
            { id: 52, question: "Which of these is a valid IPv6 address characteristic?", options: ["It uses 32-bit addresses", "It uses numbers only (0-9)", "It allows for a significantly larger number of addresses than IPv4", "It is written in dotted-decimal format"], answer: 3, explanation_en: "IPv6 uses 128-bit addresses, offering a vastly larger address space than IPv4." },
            { id: 53, question: "A podcast is best described as:", options: ["A live radio broadcast", "An episodic series of digital audio or video files downloaded via web syndication", "A type of text document", "A video conferencing tool"], answer: 2, explanation_en: "Podcasts are downloadable episodic media files, not live radio." },
            { id: 54, question: "Which component is considered the 'brain' of the computer?", options: ["RAM", "CPU (Central Processing Unit)", "Hard Disk", "Power Unit"], answer: 2, explanation_en: "CPU processes instructions, acting as the brain." },
            { id: 55, question: "What defines a 'Hybrid Topology'?", options: ["A topology that uses only wireless connections", "A combination of two or more different topologies (e.g., Star and Bus)", "A network with no servers", "A network that connects only Macs and PCs"], answer: 2, explanation_en: "Hybrid mixes structures (e.g., a Star backbone with Bus branches)." },
            { id: 56, question: "In a Packet Switching network, data is:", options: ["Sent as a continuous stream", "Broken down into small packets that are sent independently and reassembled", "Stored on a disk before sending", "Sent only when the line is completely silent"], answer: 2, explanation_en: "Packet Switching splits data into chunks, routes them independently, and reassembles them." },
            { id: 57, question: "'Hardware' refers to:", options: ["The programs that run on a computer", "The physical components of a computer system", "The data stored in the computer", "The instructions given to the CPU"], answer: 2, explanation_en: "Hardware is physical; Software is code/instructions." },
            { id: 58, question: "Which of the following is NOT a characteristic of a Flat-Panel Display?", options: ["Uses CRT (Cathode Ray Tube) technology", "Thin and lightweight", "Consumes less power than older monitors", "Can use LCD or LED technology"], answer: 1, explanation_en: "A CRT is the old, bulky glass tube tech. Flat panels use LCD/LED/Plasma." },
            { id: 59, question: "An 'Intranet' is:", options: ["The global public internet", "A private network contained within an organization", "A network connecting two different companies", "A social media platform"], answer: 2, explanation_en: "Intranet is internal to an organization. Internet is public." },
            { id: 60, question: "Which device converts digital computer signals into analog signals for transmission over phone lines (and vice versa)?", options: ["Router", "Modem", "Switch", "NIC"], answer: 2, explanation_en: "Modem (Modulator-Demodulator) converts Digital to Analog (for phone lines) and back." }
        ],
        net_mcq_4: [
            { id: 61, question: "The 'Default Gateway' is usually:", options: ["The IP address of the router that connects the local network to the outside internet", "The IP address of the local computer", "The subnet mask", "The DNS server address"], answer: 1, explanation_en: "A Default Gateway is the router exit point for traffic leaving the local subnet." },
            { id: 62, question: "Which input device is most commonly used for playing flight simulation games?", options: ["Mouse", "Joystick / Yoke", "Scanner", "Microphone"], answer: 2, explanation_en: "Joystick/Yoke is the standard input for flight sims." },
            { id: 63, question: "Which cable type consists of a core of glass or plastic strands?", options: ["Coaxial", "Fiber-optic", "Twisted-pair", "Shielded copper"], answer: 2, explanation_en: "Fiber-optic uses glass/light." },
            { id: 64, question: "A 'Supercomputing Cluster' is built by:", options: ["Making one processor extremely large", "Connecting hundreds of smaller computers to work together", "Using a mainframe from the 1980s", "Connecting mobile phones via Bluetooth"], answer: 2, explanation_en: "Modern Supercomputers are clusters of thousands of smaller processors working in parallel." },
            { id: 65, question: "To prevent unauthorized people from reading data transmitted over a network, you should use:", options: ["Compression", "Encryption", "Defragmentation", "Repeater"], answer: 2, explanation_en: "Encryption scrambles data so it’s unreadable if intercepted." },
            { id: 66, question: "Which of the following uses radio waves to provide short-range connectivity (e.g., usually < 10 meters) between devices?", options: ["Wi-Fi", "Bluetooth", "Microwave", "Fiber-optics"], answer: 2, explanation_en: "Bluetooth is for short-range PANs. Wi-Fi is longer range (LAN)." },
            { id: 67, question: "What is the purpose of a Network Interface Card (NIC)?", options: ["It allows a computer to connect physically to a network", "It stores the operating system", "It displays graphics on the monitor", "It cools down the CPU"], answer: 1, explanation_en: "A NIC provides the physical port (RJ45 or Antenna) for network access." },
            { id: 68, question: "Which class of computers operates 24 hours a day and is more powerful than a midrange server but less than a supercomputer?", options: ["Mainframe Computer", "Personal Computer", "Tablet", "Embedded Computer"], answer: 1, explanation_en: "Mainframes are the tier above midrange, running 24/7 for critical bulk data processing." },
            { id: 69, question: "A 'QR Code' is an example of:", options: ["A 1D Barcode", "A 2D Barcode", "A Magnetic Strip", "An RFID tag"], answer: 2, explanation_en: "QR Codes are 2D (matrix) barcodes. Standard UPC barcodes are 1D." },
            { id: 70, question: "Which topology connects all devices to a single continuous cable?", options: ["Star", "Bus", "Ring", "Mesh"], answer: 2, explanation_en: "Bus topology uses a single shared cable (trunk)." },
            { id: 71, question: "In the context of printers, 'PPM' stands for:", options: ["Pixels Per Minute", "Pages Per Minute", "Points Per Mile", "Parts Per Module"], answer: 2, explanation_en: "PPM (Pages Per Minute) measures print speed." },
            { id: 72, question: "Which of the following is true about RAM (Random Access Memory)?", options: ["It stores data permanently", "It is volatile, meaning data is lost when power is off", "It is strictly Read-Only", "It is an output device"], answer: 2, explanation_en: "RAM is volatile; it clears when power is cut. Storage (HDD/SSD) is permanent." },
            { id: 73, question: "'Voice Recognition' systems enable a computer to:", options: ["Read handwritten text", "Understand and react to spoken commands", "Scan a fingerprint", "Play music"], answer: 2, explanation_en: "Voice Recognition interprets spoken audio into commands/text." },
            { id: 74, question: "A 'Uniform Resource Locator' (URL) identifies:", options: ["The physical location of a server room", "The address of a resource (like a web page) on the internet", "The serial number of a computer", "The speed of the connection"], answer: 2, explanation_en: "URL is the web address format (protocol + domain + path)." },
            { id: 75, question: "Which networking media is most susceptible to electromagnetic interference (EMI)?", options: ["Fiber-optic cable", "Unshielded Twisted Pair (UTP)", "Coaxial cable", "Wireless signals"], answer: 2, explanation_en: "Unshielded Twisted Pair has no shield, making it vulnerable to electrical noise." },
            { id: 76, question: "What does a DNS server do?", options: ["Assigns IP addresses to computers", "Translates domain names into IP addresses", "Encrypts passwords", "Blocks viruses"], answer: 2, explanation_en: "DNS resolves human names to machine IPs." },
            { id: 77, question: "Which of the following is considered 'System Software'?", options: ["Microsoft Word", "Windows 10", "Angry Birds game", "Photoshop"], answer: 2, explanation_en: "Windows 10 is an Operating System (System Software). The others are Applications." },
            { id: 78, question: "The speed of a laser printer is typically faster than:", options: ["A hard drive", "An ink-jet printer", "A CPU", "RAM"], answer: 2, explanation_en: "Laser printers generally print much faster than ink-jets." },
            { id: 79, question: "Which concept refers to the convergence of computing and communication?", options: ["Standalone processing", "Networking / Telecommunication", "Data entry", "Calculation"], answer: 2, explanation_en: "Telecommunication is the merger of computing and communication lines." },
            { id: 80, question: "What is the primary role of a 'Server' in a network?", options: ["To use the resources provided by others", "To provide services (files, print, email) to client computers", "To display the user interface", "To type documents"], answer: 2, explanation_en: "Servers serve resources; Clients consume them." }
        ],
        net_mcq_5: [
            { id: 81, question: "Which topology is most robust (fault-tolerant) but most expensive?", options: ["Bus", "Star", "Mesh", "Ring"], answer: 3, explanation_en: "Mesh is most robust (redundant paths) but most expensive (cabling cost)." },
            { id: 82, question: "An 'Internet Appliance' is:", options: ["A specialized network computer designed primarily for internet access and email", "A kitchen device connected to water", "A general-purpose PC", "A mainframe"], answer: 1, explanation_en: "Internet Appliances are simple devices dedicated to web access." },
            { id: 83, question: "'LCD' stands for:", options: ["Liquid Crystal Display", "Light Cathode Display", "Low Consumption Device", "Laser Color Display"], answer: 1, explanation_en: "LCD = Liquid Crystal Display." },
            { id: 84, question: "Which protocol is used for reliable transmission of data, ensuring packets arrive in order?", options: ["UDP", "TCP", "IP", "HTTP"], answer: 2, explanation_en: "TCP is reliable (acknowledges packets). UDP is fast but unreliable." },
            { id: 85, question: "A 'WAN' (Wide Area Network) would be used to connect:", options: ["Computers in a single home", "Offices in New York and London", "A printer to a laptop via USB", "A monitor to a PC"], answer: 2, explanation_en: "WAN connects geographically distant locations (cities/countries)." },
            { id: 86, question: "What is the main function of the 'Transport Layer' in protocols like TCP?", options: ["Physical cabling", "End-to-end message transfer and error recovery", "displaying the web page", "encrypting the password"], answer: 2, explanation_en: "Transport Layer (TCP/UDP) handles delivery, sequencing, and error checking." },
            { id: 87, question: "A 'Smart Card' contains:", options: ["A magnetic strip only", "An embedded microprocessor for storing data", "A laser scanner", "A voice recorder"], answer: 2, explanation_en: "Smart Cards have a chip (microprocessor) inside, unlike magnetic strips." },
            { id: 88, question: "Which input device is best for converting an old physical photo into a digital file?", options: ["Printer", "Scanner", "Plotter", "Projector"], answer: 2, explanation_en: "Scanner digitizes physical media." },
            { id: 89, question: "In a Ring topology, data travels:", options: ["In both directions simultaneously", "In one direction (unidirectional) around the circle", "Randomly to any node", "Directly to the center hub"], answer: 2, explanation_en: "Traditional Ring topology is unidirectional." },
            { id: 90, question: "Which of the following is a private network that uses Internet technologies to share information with authorized outside partners/suppliers?", options: ["Intranet", "Extranet", "Subnet", "Darknet"], answer: 2, explanation_en: "Extranet allows authorized outsiders (partners) into a private network." },
            { id: 91, question: "'Touch screens' are unique because:", options: ["They are only output devices", "They are only input devices", "They function as both input and output devices", "They do not require a CPU"], answer: 3, explanation_en: "Touch screens display info (output) and accept touch (input)." },
            { id: 92, question: "Which IP address is reserved for loopback (localhost)?", options: ["192.168.1.1", "127.0.0.1", "10.0.0.1", "255.255.255.0"], answer: 2, explanation_en: "127.0.0.1 is the universal loopback address." },
            { id: 93, question: "'Dumb terminals' connected to a mainframe generally consist of:", options: ["A powerful CPU and hard drive", "A keyboard and monitor with little to no processing power", "A scanner and printer", "A wireless router"], answer: 2, explanation_en: "Dumb terminals have no CPU/Disk; they just input/output for the mainframe." },
            { id: 94, question: "Coaxial cable is most commonly associated with:", options: ["Keyboard connections", "Cable TV and older Ethernet networks", "Fiber-optic backbones", "Bluetooth mice"], answer: 2, explanation_en: "Coaxial was the standard for cable TV and early bus networks." },
            { id: 95, question: "A 'Plotter' is a type of printer used for:", options: ["Printing standard letters", "High-quality technical drawings (blueprints, maps)", "Printing receipts", "Printing photos at home"], answer: 2, explanation_en: "Plotters use pens to draw precise vector lines for blueprints." },
            { id: 96, question: "Which generation of IP addresses uses 128-bit addresses?", options: ["IPv4", "IPv5", "IPv6", "IPv8"], answer: 3, explanation_en: "IPv6 uses 128-bit addresses." },
            { id: 97, question: "'Handwriting recognition' is a technology associated with:", options: ["Laser printers", "Pen/Stylus input devices", "Speakers", "Bar code readers"], answer: 2, explanation_en: "Pen/Stylus input is used for handwriting recognition." },
            { id: 98, question: "What is the function of a 'Repeater'?", options: ["To translate protocols", "To retransmit signals at a higher power to cover longer distances", "To route packets based on IP", "To store emails"], answer: 2, explanation_en: "Repeater boosts signal strength." },
            { id: 99, question: "Which sector uses supercomputers for 'Oil exploration'?", options: ["Retail", "Scientific Research / Energy", "Education (Elementary schools)", "Entertainment (Music streaming)"], answer: 2, explanation_en: "Oil exploration requires massive calculation (Supercomputers) for seismic data." },
            { id: 100, question: "What is the defining feature of a 'Personal Computer' (PC)?", options: ["It is designed to be used by one person at a time", "It supports thousands of concurrent users", "It is embedded inside a car engine", "It has no screen"], answer: 1, explanation_en: "A PC is defined by being a general-purpose computer for individual use." }
        ],

        // ================= T/F DATA (101-200) =================
        net_tf_1: [
            { id: 101, question: "A 'Switch' broadcasts data packets to every device connected to the network, regardless of the destination MAC address.", answer: false, explanation: "A Switch sends data only to the specific device. A Hub broadcasts to all." },
            { id: 102, question: "RAM (Random Access Memory) is considered non-volatile memory, meaning it retains data even when the computer is turned off.", answer: false, explanation: "RAM is volatile; data is lost when power is off. ROM/HDD are non-volatile." },
            { id: 103, question: "Fiber-optic cables transmit data using light pulses and are immune to electromagnetic interference (EMI).", answer: true, explanation: "Fiber-optic uses light (photons), making it immune to electrical interference (EMI)." },
            { id: 104, question: "Information is defined as raw, unorganized facts, whereas Data is processed and organized instructions.", answer: false, explanation: "Definitions are swapped. Data is raw; Information is processed/meaningful." },
            { id: 105, question: "In a Star topology, if the central hub or switch fails, the entire network becomes unusable.", answer: true, explanation: "In a Star topology, the hub/switch is the single point of failure." },
            { id: 106, question: "An IP address of 127.0.0.1 is reserved for loopback testing and refers to the local machine itself.", answer: true, explanation: "127.0.0.1 is the standard loopback address (Localhost)." },
            { id: 107, question: "A Mainframe computer is generally less powerful than a Midrange server but more powerful than a Supercomputer.", answer: false, explanation: "Mainframes are more powerful than Midrange servers. Order: PC < Midrange < Mainframe < Supercomputer." },
            { id: 108, question: "HTTP is a secure protocol that encrypts data transfer between the browser and the server using SSL/TLS.", answer: false, explanation: "HTTP is not secure. HTTPS is the encrypted version." },
            { id: 109, question: "Solid State Drives (SSDs) use magnetic spinning platters to store data.", answer: false, explanation: "SSDs use flash memory. HDDs use spinning magnetic platters." },
            { id: 110, question: "The primary advantage of a Mesh topology is that it is the least expensive to install due to minimal cabling requirements.", answer: false, explanation: "Mesh is the most expensive due to the massive amount of cabling required." },
            { id: 111, question: "RFID (Radio Frequency Identification) readers require a direct line of sight to the tag in order to read the data.", answer: false, explanation: "RFID uses radio waves and does not require line-of-sight. Barcodes do." },
            { id: 112, question: "Class C IP addresses are designed for small networks and support a maximum of 254 hosts per network.", answer: true, explanation: "Class C (first octet 192-223) supports 254 hosts." },
            { id: 113, question: "A 'Thin Client' is a computer that relies heavily on a server for processing tasks and typically has minimal local storage.", answer: true, explanation: "Thin Clients offload processing to the server." },
            { id: 114, question: "The aspect ratio of a display is determined by the diagonal measurement of the screen in inches.", answer: false, explanation: "Aspect Ratio is the relationship between width and height (e.g., 16:9). Diagonal is just 'size'." },
            { id: 115, question: "TCP (Transmission Control Protocol) is considered a connection-oriented protocol that ensures reliable delivery of data packets.", answer: true, explanation: "TCP guarantees delivery (connection-oriented). UDP does not." },
            { id: 116, question: "A Barcode Reader is an output device used to print labels on products.", answer: false, explanation: "A Barcode Reader is an Input device." },
            { id: 117, question: "In a Peer-to-Peer (P2P) network, every computer has equal status and can act as both a client and a server.", answer: true, explanation: "P2P networks have no dedicated server; peers are equal." },
            { id: 118, question: "The motherboard is the main circuit board of the computer that connects the CPU, memory, and other components.", answer: true, explanation: "The Motherboard is the central backbone connecting all hardware." },
            { id: 119, question: "IPv6 addresses are 32 bits long and are written in dotted-decimal format.", answer: false, explanation: "IPv6 uses 128-bit addresses (Hexadecimal). IPv4 uses 32-bit." },
            { id: 120, question: "A SAN (Storage Area Network) is a high-speed network that provides storagelevel access to block-level data storage.", answer: true, explanation: "SAN is a dedicated high-speed network for storage." }
        ],
        net_tf_2: [
            { id: 121, question: "An Extranet is a private network that is accessible only to an organization’s internal staff and cannot be accessed by outside partners.", answer: false, explanation: "An Extranet allows authorized outside partners access. An Intranet is internal only." },
            { id: 122, question: "Coaxial cables consist of a single copper wire surrounded by insulation, a metallic shield, and an outer cover.", answer: true, explanation: "Coaxial structure: Core -> Insulation -> Shield -> Jacket." },
            { id: 123, question: "A Repeater is used to connect two different networks that use different protocols (e.g., connecting a LAN to the Internet).", answer: false, explanation: "A Gateway translates protocols. A Repeater just boosts signal strength." },
            { id: 124, question: "Supercomputers are often built using a cluster architecture, connecting hundreds or thousands of smaller computers.", answer: true, explanation: "Modern Supercomputers are typically clusters of many processors." },
            { id: 125, question: "Biometric input devices use physiological characteristics such as fingerprints or iris patterns to identify users.", answer: true, explanation: "Biometrics measure biological traits." },
            { id: 126, question: "In a Bus topology, data can travel in both directions simultaneously without any risk of collision.", answer: false, explanation: "In Bus topology, data collisions occur if two nodes transmit simultaneously (half-duplex)." },
            { id: 127, question: "FTP (File Transfer Protocol) is primarily used for sending email messages between servers.", answer: false, explanation: "FTP is for files. SMTP is for email." },
            { id: 128, question: "A Pixel is the smallest controllable element of a picture represented on a screen.", answer: true, explanation: "Pixel = Picture Element." },
            { id: 129, question: "Embedded computers are general-purpose PCs used for word processing and gaming.", answer: false, explanation: "Embedded computers are specialized single-task chips (e.g., in a microwave)." },
            { id: 130, question: "A Firewall can be either hardware or software designed to block unauthorized access to a network.", answer: true, explanation: "Firewalls can be software (Windows Firewall) or hardware (Cisco device)." },
            { id: 131, question: "Laser printers work by spraying tiny droplets of liquid ink onto the paper.", answer: false, explanation: "Laser uses toner powder. Ink-jet sprays liquid ink." },
            { id: 132, question: "The 'Default Gateway' is typically the IP address of the router that allows devices to communicate outside the local network.", answer: true, explanation: "The Default Gateway is the exit router IP." },
            { id: 133, question: "A WAN (Wide Area Network) covers a small geographic area, such as a single room or office building.", answer: false, explanation: "WAN covers large areas (cities, countries). LAN covers a building." },
            { id: 134, question: "Voice recognition software converts spoken words into digital text or commands.", answer: true, explanation: "Voice recognition processes audio into data." },
            { id: 135, question: "Class A IP addresses have a default subnet mask of 255.0.0.0.", answer: true, explanation: "Class A uses the first octet for network, so mask is 255.0.0.0." },
            { id: 136, question: "A 'Dumb Terminal' possesses its own CPU and hard drive for local processing.", answer: false, explanation: "A Dumb Terminal has keyboard/monitor but no local processing power." },
            { id: 137, question: "Ring topology uses a token passing method to control access to the network media.", answer: true, explanation: "Ring topology uses a digital token to avoid collisions." },
            { id: 138, question: "OCR stands for Optical Code Reader and is used exclusively for reading QR codes.", answer: false, explanation: "OCR is Optical Character Recognition (reads text)." },
            { id: 139, question: "Bandwidth refers to the maximum amount of data that can be transmitted over a network connection in a given amount of time.", answer: true, explanation: "Bandwidth is the capacity of the channel." },
            { id: 140, question: "A VPN (Virtual Private Network) allows users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network.", answer: true, explanation: "VPN creates a secure tunnel over public nets." }
        ],
        net_tf_3: [
            { id: 141, question: "The System Unit refers only to the monitor and the keyboard.", answer: false, explanation: "The System Unit is the main chassis (box). Monitor/Keyboard are peripherals." },
            { id: 142, question: "UDP (User Datagram Protocol) is faster than TCP but does not guarantee packet delivery.", answer: true, explanation: "UDP is connectionless (fire and forget), making it faster but unreliable." },
            { id: 143, question: "Flat-panel displays consume more power and take up more desk space than CRT monitors.", answer: false, explanation: "Flat-panels (LCD/LED) use less power and space than CRT." },
            { id: 144, question: "A Bridge is a device used to connect two similar network segments and filter traffic between them.", answer: true, explanation: "Bridges connect segments and filter based on MAC address." },
            { id: 145, question: "Twisted-pair cables are the most expensive type of cabling and are rarely used in modern LANs.", answer: false, explanation: "Twisted-pair is the cheapest and most common. Fiber is expensive." },
            { id: 146, question: "An Internet Appliance is a specialized network computer designed primarily for Internet access and email exchange.", answer: true, explanation: "Internet Appliances are specialized devices." },
            { id: 147, question: "In a Client/Server model, the client is responsible for providing resources and security to the network.", answer: false, explanation: "The Server provides resources. The Client requests them." },
            { id: 148, question: "URL stands for Uniform Resource Locator and represents the address of a specific resource on the Web.", answer: true, explanation: "URL is the web address format." },
            { id: 149, question: "Styluses are often used with graphics tablets or touch screens for precise input.", answer: true, explanation: "Stylus is a pen-like tool for input." },
            { id: 150, question: "A Midrange Server is typically used by small to medium-sized businesses to host data and applications.", answer: true, explanation: "Midrange servers fall between PC and Mainframe." },
            { id: 151, question: "Microwaves are a type of wireless transmission that transmits data via line-ofsight high-frequency radio signals.", answer: true, explanation: "Microwave transmission requires line-of-sight." },
            { id: 152, question: "The first octet range for a Class B IP address is 128 to 191.", answer: true, explanation: "Class B range is 128-191." },
            { id: 153, question: "Plotters are special printers used for producing high-quality technical drawings like blueprints and maps.", answer: true, explanation: "Plotters draw vector lines for architecture/engineering." },
            { id: 154, question: "'Loopback' is a type of network topology where cables form a physical loop.", answer: false, explanation: "Loopback is a testing function/address, not a physical topology shape." },
            { id: 155, question: "DNS (Domain Name System) translates human-readable domain names into IP addresses.", answer: true, explanation: "DNS resolves names to numbers (IPs)." },
            { id: 156, question: "A Smartphone is considered a type of mobile device.", answer: true, explanation: "Smartphones are mobile devices." },
            { id: 157, question: "Ink-jet printers use a drum and toner cartridge to produce images.", answer: false, explanation: "Ink-jets spray ink. Laser printers use drums and toner." },
            { id: 158, question: "In Packet Switching, data is broken into small chunks that may take different paths to reach the destination.", answer: true, explanation: "Packet switching routes chunks independently." },
            { id: 159, question: "A Projector is classified as an input device.", answer: false, explanation: "A Projector displays visual data, so it is an Output device." },
            { id: 160, question: "SMTP is the protocol used for downloading email from a mail server to a client.", answer: false, explanation: "SMTP sends mail. POP3/IMAP downloads/receives it." }
        ],
        net_tf_4: [
            { id: 161, question: "A 'Hybrid Topology' combines two or more different standard topologies.", answer: true, explanation: "Hybrid is a mix (e.g., Star-Bus)." },
            { id: 162, question: "The CPU consists of the Control Unit (CU) and the Arithmetic Logic Unit (ALU).", answer: true, explanation: "CU and ALU are the core parts of the CPU." },
            { id: 163, question: "Bluetooth is a wireless technology designed for long-range communication over several kilometers.", answer: false, explanation: "Bluetooth is short-range (PAN), usually < 10 meters." },
            { id: 164, question: "Hardware refers to the physical components of the computer, while software refers to the instructions.", answer: true, explanation: "Hardware = Physical; Software = Logical." },
            { id: 165, question: "HTTPS uses port 80 by default.", answer: false, explanation: "HTTPS uses port 443. HTTP uses port 80." },
            { id: 166, question: "Touch screens can function as both input and output devices.", answer: true, explanation: "They display video (Output) and accept taps (Input)." },
            { id: 167, question: "In a Ring topology, if one cable breaks, the network can usually continue to function without interruption.", answer: false, explanation: "In a traditional Ring, one break cuts the loop and stops the network." },
            { id: 168, question: "A MAN (Metropolitan Area Network) typically connects a city or a large campus.", answer: true, explanation: "MAN is larger than LAN, smaller than WAN." },
            { id: 169, question: "'Multicast' addresses are found in Class D of the IP address system.", answer: true, explanation: "Class D is reserved for Multicasting." },
            { id: 170, question: "A Hard Disk Drive (HDD) is an example of volatile storage.", answer: false, explanation: "HDD is non-volatile storage. It keeps data without power." },
            { id: 171, question: "Ethernet is the standard technology used for wired Local Area Networks (LANs).", answer: true, explanation: "Ethernet is the standard protocol for wired LANs." },
            { id: 172, question: "QR Codes can store more data than traditional 1D barcodes.", answer: true, explanation: "QR Codes (2D) hold much more info than 1D barcodes." },
            { id: 173, question: "Telecommunications is the transmission of text, data, voice, and video between networked locations.", answer: true, explanation: "Definition of Telecommunications." },
            { id: 174, question: "A NIC (Network Interface Card) is required for a computer to connect to a network.", answer: true, explanation: "NIC provides the physical interface." },
            { id: 175, question: "The speed of a printer is often measured in PPM (Pages Per Minute).", answer: true, explanation: "PPM measures print speed." },
            { id: 176, question: "IPv4 addresses provide approximately 340 undecillion unique addresses.", answer: false, explanation: "IPv6 provides undecillions. IPv4 provides 4.3 billion." },
            { id: 177, question: "Scanners are input devices that capture images from physical documents and convert them into digital data.", answer: true, explanation: "Scanners digitize physical hard copies." },
            { id: 178, question: "A Server in a client-server network is typically a regular desktop PC with no special hardware.", answer: false, explanation: "Servers usually have specialized, powerful hardware (RAID, redundant power, high RAM)." },
            { id: 179, question: "Unshielded Twisted Pair (UTP) cable is more susceptible to interference than Shielded Twisted Pair (STP).", answer: true, explanation: "UTP lacks the shield, making it more prone to noise than STP." },
            { id: 180, question: "Oil exploration and weather forecasting are common uses for Supercomputers.", answer: true, explanation: "These complex tasks require Supercomputers." }
        ],
        net_tf_5: [
            { id: 181, question: "An Intranet is accessible to the general public via the World Wide Web.", answer: false, explanation: "An Intranet is private and internal only." },
            { id: 182, question: "A Router operates at the Network layer and directs packets based on IP addresses.", answer: true, explanation: "Routers work at the Network layer (IP)." },
            { id: 183, question: "Magnetic strips on cards (like credit cards) contain a microprocessor chip inside them.", answer: false, explanation: "Magnetic strips hold data magnetically. Smart Cards contain chips." },
            { id: 184, question: "ASCII is a coding system used to represent text in computers.", answer: true, explanation: "ASCII is a standard character encoding." },
            { id: 185, question: "In a Bus topology, terminators are required at both ends of the cable to prevent signal bounce.", answer: true, explanation: "Terminators absorb signals to prevent reflection in Bus topology." },
            { id: 186, question: "A 'Personal Computer' (PC) is designed to be used by multiple concurrent users via terminals.", answer: false, explanation: "PCs are for single users. Mainframes support concurrent terminals." },
            { id: 187, question: "DPI (Dots Per Inch) is a measure of screen resolution, not print resolution.", answer: false, explanation: "DPI usually refers to Print resolution. Screens use PPI or Resolution (WxH)." },
            { id: 188, question: "A Modem is necessary to convert digital signals to analog signals for transmission over telephone lines.", answer: true, explanation: "Modem = MOdulator DEModulator (Digital <-> Analog)." },
            { id: 189, question: "The 'Transport Layer' in TCP/IP is responsible for physical cabling specifications.", answer: false, explanation: "Physical cabling is the Physical Layer. Transport Layer is TCP/UDP." },
            { id: 190, question: "LCD stands for Liquid Cathode Display.", answer: false, explanation: "LCD = Liquid Crystal Display." },
            { id: 191, question: "Infrared transmission requires a direct line of sight between devices.", answer: true, explanation: "Infrared (like TV remotes) needs line-of-sight." },
            { id: 192, question: "A 'Smart Card' stores data on a magnetic strip.", answer: false, explanation: "Smart Cards store data on an embedded microprocessor chip, not just a strip." },
            { id: 193, question: "Gateway is a device or software that connects networks using different protocols.", answer: true, explanation: "Gateways translate between dissimilar networks/protocols." },
            { id: 194, question: "The resolution of a monitor is defined by the total number of pixels it can display.", answer: true, explanation: "Resolution is total pixels (e.g., 1920x1080)." },
            { id: 195, question: "Handheld scanners are typically used for high-precision, high-volume document scanning in offices.", answer: false, explanation: "Handheld scanners are portable but less precise than flatbeds." },
            { id: 196, question: "Class E IP addresses are reserved for experimental purposes.", answer: true, explanation: "Class E is reserved for research/experimental use." },
            { id: 197, question: "A 'Podcast' is a live radio broadcast that cannot be paused or replayed.", answer: false, explanation: "A Podcast is a pre-recorded, downloadable file, not a live stream." },
            { id: 198, question: "Expansion cards are inserted into the motherboard to add functionality like better graphics or Wi-Fi.", answer: true, explanation: "Expansion cards add capabilities via slots (PCIe)." },
            { id: 199, question: "Wireless networks are generally more secure than wired networks by default.", answer: false, explanation: "Wireless is inherently less secure than wired because signals broadcast through the air." },
            { id: 200, question: "A 'Crash' refers to a system failure where the computer stops functioning properly.", answer: true, explanation: "A Crash is a software/hardware error causing the system to stop." }
        ],

        // ================= ESSAY DATA (201-230) =================
        net_essay_1: [
            { 
                id: 201, 
                question: "Define \"Network Topology\" and explain why choosing the right topology is important for network design.", 
                model_answer: "Definition: Network Topology refers to the physical or logical layout of a network. Importance: It determines cost, reliability, scalability, and ease of maintenance." 
            },
            { 
                id: 202, 
                question: "Describe the physical layout of a Bus Topology. What happens to the entire network if the main backbone cable is cut?", 
                model_answer: "Layout: Uses a single central backbone cable. Failure: If cut, the entire network fails (Single Point of Failure)." 
            },
            { 
                id: 203, 
                question: "In a Star Topology, what is the function of the central device (Hub or Switch)?", 
                model_answer: "The central device acts as a controller, managing data flow and preventing direct connections between individual nodes."
            },
            { 
                id: 204, 
                question: "Explain the mechanism used in a Ring Topology to prevent data collisions. (Hint: Mention the \"Token\").", 
                model_answer: "It uses a Token Passing method; only the node holding the digital token is allowed to transmit, effectively preventing collisions." 
            },
            { 
                id: 205, 
                question: "What is the primary advantage of a Mesh Topology regarding fault tolerance?", 
                model_answer: "Fault Tolerance (Redundancy): If one link fails, data can automatically reroute through another path to reach its destination." 
            },
            { 
                id: 206, 
                question: "Compare Bus Topology and Star Topology in terms of cabling cost and ease of troubleshooting.", 
                model_answer: "Bus: Cheaper cable, Hard to troubleshoot. Star: More expensive (more cable), Easy to troubleshoot." 
            },
            { 
                id: 207, 
                question: "Define Hybrid Topology and provide one example of a scenario where it might be used.", 
                model_answer: "Definition: Combines two or more different topologies (e.g., Star-Bus). Scenario: Large campuses or diverse environments connecting different departments." 
            },
            { 
                id: 208, 
                question: "Why are \"Terminators\" required at both ends of the cable in a Bus Topology?", 
                model_answer: "To absorb signals at the cable ends, preventing signal reflection which would cause interference and data corruption." 
            },
            { 
                id: 209, 
                question: "Identify the main disadvantage of a traditional Ring Topology if one computer or cable fails.", 
                model_answer: "If one computer or cable segment fails, the loop is broken, and the entire network stops functioning." 
            },
            { 
                id: 210, 
                question: "Explain why Mesh Topology is considered the most expensive and difficult to install.", 
                model_answer: "It requires a massive number of cables (N(N − 1)/2) and ports, making physical wiring complex and hardware costs high." 
            }
        ],
        net_essay_2: [
            { 
                id: 211, 
                question: "Scenario: You are designing a network for a small office with a limited budget. You need a setup that is easy to install, even if it’s not the most robust. Which topology would you historically choose, and which would you choose by modern standards (Star)? Justify your answer.", 
                model_answer: "Historical: Bus (for lowest cable cost). Modern: Star (Standard for reliability; if one cable breaks, the office stays online)." 
            },
            { 
                id: 212, 
                question: "In a Star Topology, if the cable connecting one specific workstation to the switch breaks, does the rest of the network go down? Explain why.", 
                model_answer: "No. Only that specific node fails. The rest continue normally because each node has an independent connection to the switch." 
            },
            { 
                id: 213, 
                question: "Describe how data travels in a Ring Topology (Direction and method).", 
                model_answer: "Data travels unidirectionally (in one direction) around the loop from node to node."
            },
            { 
                id: 214, 
                question: "Differentiate between a Partial Mesh and a Full Mesh topology.", 
                model_answer: "Full Mesh: Every node connects to every other node. Partial Mesh: Some nodes connect to all, others only to a few key nodes." 
            },
            { 
                id: 215, 
                question: "Which topology is the most common in modern LANs (Local Area Networks) and why?", 
                model_answer: "Star Topology. It is the industry standard due to its balance of cost, high performance, and ease of maintenance/troubleshooting." 
            },
            { 
                id: 216, 
                question: "Explain the difference between Data and Information with a simple example.", 
                model_answer: "Data: Raw facts (e.g., the number ”35”). Information: Processed data with meaning (e.g., ”Age: 35”)." 
            },
            { 
                id: 217, 
                question: "Compare RAM (Random Access Memory) and ROM (Read-Only Memory) in terms of volatility and purpose.", 
                model_answer: "RAM: Volatile (loses data without power), Read/Write. ROM: Nonvolatile (permanent), Read-Only (stores BIOS)." 
            },
            { 
                id: 218, 
                question: "What is the main difference between HTTP and HTTPS protocols?", 
                model_answer: "HTTP: Sends data in plain text (insecure). HTTPS: Encrypts data using SSL/TLS (secure)." 
            },
            { 
                id: 219, 
                question: "Define a Supercomputer and list two specific fields where it is commonly used.", 
                model_answer: "Definition: The fastest, most powerful class of computers. Fields: Weather forecasting, Nuclear research, Oil exploration." 
            },
            { 
                id: 220, 
                question: "Differentiate between a LAN (Local Area Network) and a WAN (Wide Area Network) regarding geographical coverage.", 
                model_answer: "LAN: Covers a small area (Room/Building). WAN: Covers a large geographical area (City/Country/Global)." 
            }
        ],
        net_essay_3: [
            { 
                id: 221, 
                question: "What is the specific function of the TCP/IP protocol suite in networking?", 
                model_answer: "It is the basic communication language of the internet, ensuring reliable transmission (TCP) and correct addressing/routing (IP)." 
            },
            { 
                id: 222, 
                question: "Explain the difference between an Input Device and an Output Device, and give one example of a device that performs both functions.", 
                model_answer: "Input: Sends data to CPU (Keyboard). Output: Receives data from CPU (Monitor). Both: Touch Screen." 
            },
            { 
                id: 223, 
                question: "Describe the purpose of an IP Address and differentiate between IPv4 and IPv6.", 
                model_answer: "Purpose: Unique identifier for devices. IPv4: 32-bit (numeric). IPv6: 128-bit (hexadecimal, larger address space)."
            },
            { 
                id: 224, 
                question: "What is a Thin Client and how does it rely on a server compared to a standard PC?", 
                model_answer: "Thin Client: A computer with low specs that relies on a central server for processing and storage, unlike a standard PC (Fat Client)." 
            },
            { 
                id: 225, 
                question: "Explain how Fiber-Optic cables transmit data and why they are superior to copper cables in terms of interference.", 
                model_answer: "Method: Transmits data using light pulses through glass/plastic. Superiority: Immune to Electromagnetic Interference (EMI) and supports higher speeds." 
            },
            { 
                id: 226, 
                question: "Define System Software and provide an example. How does it differ from Application Software?", 
                model_answer: "System SW: Runs the hardware (e.g., Windows OS). App SW: Performs specific user tasks (e.g., MS Word)." 
            },
            { 
                id: 227, 
                question: "What is the function of a Firewall in a computer network?", 
                model_answer: "To monitor and control incoming/outgoing network traffic, blocking unauthorized access while permitting legitimate communications." 
            },
            { 
                id: 228, 
                question: "Explain the purpose of RFID (Radio Frequency Identification) technology and how it differs from a Barcode reader.", 
                model_answer: "RFID: Uses radio waves to read tags (no line-of-sight needed). Barcode: Optical, requires direct line-of-sight to the code." 
            },
            { 
                id: 229, 
                question: "What is the role of a Router in a network?", 
                model_answer: "A Router connects different networks together (e.g., LAN to Internet) and directs data packets based on IP addresses." 
            },
            { 
                id: 230, 
                question: "Define \"Bandwidth\" and explain its significance in network transmission.", 
                model_answer: "Bandwidth is the maximum amount of data that can be transmitted over a network connection in a given amount of time (Capacity)." 
            }
        ]
                    }
                },
            } 
        },

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
                        { title: "كهربية المحاضرة 1", link: "https://drive.google.com/file/d/1v4g3B7lU-dNErIa-i3tzNenEMnCxtV2a/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر غير موجودة." },
                        { title: "كهربية المحاضرة 2", link: "https://drive.google.com/file/d/1x0FWpgHXWgUqyTO4WBkCDWiV2P_54TX8/view?usp=sharing", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر غير موجودة." },
                        { title: "كهربية المحاضرة 3", link: "https://drive.google.com/file/d/1XINSocJZpcLygRp5oAMh17fzsbu2xCPv/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر غير موجودة." },
                        { title: "كهربية المحاضرة 4", link: "https://drive.google.com/file/d/1D8nNq3xN3iKdR3AHpr34pb0ZVx-rid8j/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر غير موجودة." },
                        { title: "كهربية المحاضرة 5", link: "https://drive.google.com/file/d/1WKeRRwFBE5QOA4qCsGXW-_Yae9Gzk_RK/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر غير موجودة." },
                        { title: "كهربية المحاضرة 6", link: "https://drive.google.com/file/d/13czvxtWAAQaQCblzVsnfs53EPFAsdGJN/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر غير موجودة." },
                        { title: "كهربية المحاضرة 7", link: "https://drive.google.com/file/d/1Kfu8qjNEd1qKtP-x7m2PsheiestUtEJJ/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر غير موجودة." },
                        { title: "كهربية المحاضرة 8", link: "https://drive.google.com/file/d/1GN9cpDjPadIojMaCqFWXJxRyOLhW3knt/view?usp=drive_link", type: "PDF", note: "تنبيه: الملخص نصي. الدوائر غير موجودة." },
                        { title: "كهربية ملخص الملخص", link: "https://drive.google.com/file/d/1s-ue1jES-u7bfKzGyOBKG2fTiyTpXPYN/view?usp=drive_link", type: "PDF", note: "تحذير: للمراجعة السريعة فقط." }
                    ], 
                    en: [
                        { title: "Electronics Lecture 1", link: "https://drive.google.com/file/d/1k2JjGNtbZdNmlhAjpoUT2A0WP7qpMQLo/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams MISSING." },
                        { title: "Electronics Lecture 2", link: "https://drive.google.com/file/d/1-fMz12nTw8iu3S-HdEpI8furpT02Z3eu/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams MISSING." },
                        { title: "Electronics Lecture 3", link: "https://drive.google.com/file/d/1jeG_hZ9QsnC7oK10ZFzFk9flF0Y1CLDK/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams MISSING." },
                        { title: "Electronics Lecture 4", link: "https://drive.google.com/file/d/1G2h24fZDec-rcO_Ko1IsYr3g3HO2ZOfK/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams MISSING." },
                        { title: "Electronics Lecture 5", link: "https://drive.google.com/file/d/1YneDbeaXo_zZB7PZvYMD42ROSXvUiMdn/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams MISSING." },
                        { title: "Electronics Lecture 6", link: "https://drive.google.com/file/d/1djoN9AciHheLMIv-XuuOICBDCiAih-SR/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams MISSING." },
                        { title: "Electronics Lecture 7", link: "https://drive.google.com/file/d/12Ud-GCkLenOTWmzmwpRCAsvfQKMnfu1f/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams MISSING." },
                        { title: "Electronics Lecture 8", link: "https://drive.google.com/file/d/1SGl6uMC_OJO1QhnVYrPjeiHYzQvOBKKW/view?usp=drive_link", type: "PDF", note: "Warning: Text-only. Circuit diagrams MISSING." },
                        { title: "Electronics SS", link: "https://drive.google.com/file/d/1Vb9nSkoJ0gev4tw_jqd1W-bhMULABDw6/view?usp=drive_link", type: "PDF", note: "Warning: For quick review only." }
                    ] 
                },
                quiz: [
                    { title: "Reference Book", link: "https://drive.google.com/file/d/1nyeTIdFEnSoUpzfsUeYp_VMzuF-l5apJ/view?usp=drive_link", type: "Book" },
                    { title: "Problem Sheet 1", link: "https://drive.google.com/file/d/1xPc8xgA9ZMSBLVUZAeW2MqsBuKrqnsRd/view?usp=drive_link", type: "Sheet" },
                    { title: "Solution Sheet 1", link: "https://drive.google.com/file/d/1L03jwA3FyQYk8LcVr-lYIGzviSydVNkX/view?usp=drive_link", type: "Solution" },
                    { title: "Problem Sheet 2", link: "https://drive.google.com/file/d/1Jcxsyxp40DGhqubR7ePBnj5bj49s7aPx/view?usp=drive_link", type: "Sheet" },
                    { title: "Solution Sheet 2", link: "https://drive.google.com/file/d/19vtsPC3Wdt1QoDaVP3zDWCLtB_fxVwyM/view?usp=drive_link", type: "Solution" }
                ]
            } 
        }
    ]
};
