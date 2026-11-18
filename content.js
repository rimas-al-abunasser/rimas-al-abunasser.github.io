/* All words on the site, in both languages. Edit text here; app.js only renders it. */
window.CONTENT = {
  en: {
    docTitle: "Rimas Al AbuNasser · Product Manager",
    name: "Rimas Al AbuNasser",
    quickBtn: "Quick view",
    introEyebrow: "Product · AI · Data · IoT",
    introTitle: "Every place I go,<br>I leave a <em>trace</em>.",
    introSub: "Six stops. Five keys. One name.",
    introHint: "Scroll, or press Enter ↵",
    introRecruiter: "In a hurry? Press Ctrl for the quick view.",
    more: "More",
    todo: "To do", doing: "Doing", done: "Done",

    s1key: "F2 · Spark",
    s1title: "It started with a sunflower.",
    s1stat: "1st place",
    s1statSub: "Node-RED Bootcamp · King Khalid University · Dec 2023",
    s1line: "A solar panel that turns to follow the light, the way a sunflower does.",

    s2key: "Ctrl + Space · Lead",
    s2title: "Then I learned to turn ideas into plans.",
    s2stat: "Product Owner",
    s2statSub: "Innovation Front IT · Feb–Jul 2024",
    s2stat2: "Founder & Team Lead",
    s2stat2Sub: "Kameel · team of 6 · CODE LAB incubation",
    s2line: "User stories, backlogs, sprints. Then a startup of my own.",

    s3key: "Enter · Build",
    s3title: "Rewaa",
    s3titleSub: "Smart irrigation, guided by sensor data.",
    s3stat: "3rd place",
    s3statSub: "Tech Connect · King Khalid University · Apr 2025",
    s3line: "I managed the project and built the entire hardware.",

    s4key: "Space · Connect",
    s4title: "The best traces are in people.",
    s4l1: "children in STEM & robotics programs",
    s4l2: "trainees in 3D design & printing",
    s4l3: "training hours I designed and delivered",
    s4l4: "members in the club department I led",

    s5key: "Ctrl · Order",
    s5title: "Burhan",
    s5titleSub: "Making financial regulations clear.",
    s5stat: "Technical Domain Lead",
    s5statSub: "Amad Hackathon · with Alinma Bank & Tuwaiq Academy",
    s5line: "An AI platform idea that turns scattered rules into clear answers, with their sources.",

    s6key: "Esc · Explore",
    s6title: "3-Eye RoadScan",
    s6titleSub: "Teaching AI to see road damage.",
    s6stat: "YOLO detector",
    s6statSub: "My part of the team system · RDD2022 · Sep–Nov 2026",
    s6line: "Many experiments. One chosen model. Repairs ranked by priority.",

    finTitle: "Every trace adds up to a name.",
    finRole: "Product · AI · Data · IoT",
    finLooking: "Looking for my first Product Manager role.",
    finWhere: "Abha, Saudi Arabia · open to relocation within KSA",
    finEmail: "Email me",
    finLinkedin: "LinkedIn",
    finQuick: "Quick view",
    finReplay: "Replay",

    details: {
      s1: { title: "Sunflower Solar Tracker", items: [
        "Arduino and light sensors find where the light is coming from, and the panel turns toward it.",
        "Node-RED adds on/off control and shows incoming WhatsApp messages on an LCD screen.",
        "My part: programming, wiring and hardware, as part of the team. Won 1st place."
      ], tags: ["Arduino", "Node-RED", "IoT", "Sensors"] },
      s2: { title: "Product Owner · Founder", items: [
        "Innovation Front IT: wrote technical tasks, user stories and acceptance criteria for the development team.",
        "Organized the product backlog and sprint planning in Jira, and ran market research for company products.",
        "Kameel: founded an AI-powered project management startup and led a team of 6 to a prototype.",
        "Shaped the product vision, priorities and business model, with mentors at CODE LAB, King Khalid University."
      ], tags: ["Product backlog", "User stories", "Jira", "Market research", "Business model"] },
      s3: { title: "Rewaa · رِواء", items: [
        "Graduation project (Aug 2024 – May 2025) combining IoT, data analysis and AI.",
        "As Project Manager: scope, plan, timeline, stakeholder communication and scope-change approvals.",
        "Owned the hardware end to end (ESP32 and sensors) and worked on most of the software and the AI.",
        "3rd place at Tech Connect 2025, a team award."
      ], tags: ["IoT", "ESP32", "AI", "Project management"] },
      s4: { title: "People", items: [
        "Milhaa · BotBox: designed STEM and robotics activities, filmed the learning videos and led sessions as Lead Trainer. About 8 programs, 69 unique children.",
        "Supervised 3 facilitators and used parent and child feedback to improve the next programs.",
        "Tuwaiq Academy: trained 71 participants in 3D design and printing over three weeks (Jul 2025).",
        "Mishkat: designed a data analytics curriculum from scratch and delivered 40 sessions to two cohorts (2026).",
        "Computer Club, King Khalid University: Head of Organizational Management (2024–2025)."
      ], tags: ["Training", "Curriculum design", "Team supervision", "Community"] },
      s5: { title: "Burhan · برهان", items: [
        "The problem: many regulators, scattered and changing rules, and slow manual searching.",
        "The idea: retrieval-augmented generation (RAG) that answers from the actual regulations and shows its sources.",
        "My role: led the technical side in a team that mixed technical and legal backgrounds."
      ], tags: ["RAG", "NLP", "RegTech", "FinTech"] },
      s6: { title: "3-Eye RoadScan", items: [
        "A team system that finds road damage in photos and helps rank maintenance priority.",
        "My part: trained and compared YOLO runs, chose the model and weights, and tuned the confidence threshold.",
        "Teammates built duplicate detection, prioritization and the Streamlit interface."
      ], tags: ["YOLO", "Computer vision", "RDD2022", "Experimentation"] }
    },

    quick: {
      title: "Quick view",
      back: "Back to the journey",
      summary: "Information Systems graduate (Data Science track) moving into product management. Product Owner experience, a startup I founded, and hands-on builds in AI, data and IoT.",
      expTitle: "Experience",
      exp: [
        ["Data Analytics Trainer", "Mishkat", "Aug–Oct 2026", "Designed the curriculum from scratch. 2 cohorts, 40 sessions, 80 hours."],
        ["Data Analyst", "Milhaa", "Jul–Nov 2025", "Built Power BI and Tableau dashboards from scratch, Python analysis and Notion workflows. Lead Trainer for BotBox STEM programs."],
        ["Digital Manufacturing Trainer · Seasonal", "Tuwaiq Academy", "Jul 2025", "3D design and printing for 71 trainees."],
        ["Product Owner", "Innovation Front IT", "Feb–Jul 2024", "User stories, acceptance criteria, backlog and sprint planning in Jira. Market research."]
      ],
      prjTitle: "Selected projects",
      prj: [
        ["Rewaa", "Project Manager & hardware · smart irrigation · 3rd place, Tech Connect 2025"],
        ["Burhan", "Technical Domain Lead · AI regulatory compliance · Amad Hackathon"],
        ["3-Eye RoadScan", "YOLO detector · AI road damage detection · 2026"],
        ["Kameel", "Founder & Team Lead · AI project management · CODE LAB"],
        ["Sunflower Solar Tracker", "IoT · 1st place, Node-RED Bootcamp 2023"]
      ],
      awardsTitle: "Awards",
      awards: ["1st · Node-RED Bootcamp · 2023", "2nd · TinyML Bootcamp · 2024", "3rd · Tech Connect · 2025"],
      skillsTitle: "Skills",
      skills: [
        ["Product", "Backlog · User stories · Acceptance criteria · Sprint planning · Jira · Notion · Market research"],
        ["Data", "Python · SQL · Power BI · Tableau · Excel"],
        ["AI & IoT", "YOLO · RAG · TinyML · ESP32 · Arduino · Node-RED"]
      ],
      eduTitle: "Education",
      edu: "B.Sc. Information Systems, Data Science track · King Khalid University · 2021–2025",
      langTitle: "Languages",
      langs: "Arabic (native) · English (good)",
      contactTitle: "Contact"
    }
  },

  ar: {
    docTitle: "ريماس آل أبوناصر · مديرة منتج",
    name: "ريماس آل أبوناصر",
    quickBtn: "النسخة السريعة",
    introEyebrow: "المنتجات · الذكاء الاصطناعي · البيانات · إنترنت الأشياء",
    introTitle: "في كل مكان أكون فيه،<br>أترك <em>أثر</em>.",
    introSub: "ست محطات. خمسة أزرار. اسم واحد.",
    introHint: "مرّر للأسفل، أو اضغط Enter ↵",
    introRecruiter: "مستعجل؟ اضغط Ctrl للنسخة السريعة.",
    more: "التفاصيل",
    todo: "للتنفيذ", doing: "قيد العمل", done: "تم",

    s1key: "F2 · الشرارة",
    s1title: "البداية كانت دوّار شمس.",
    s1stat: "المركز الأول",
    s1statSub: "معسكر Node-RED · جامعة الملك خالد · ديسمبر 2023",
    s1line: "لوح شمسي يلتفت ويلحق الضوء، مثل ما يسوي دوّار الشمس.",

    s2key: "Ctrl + Space · القيادة",
    s2title: "بعدها تعلّمت أحوّل الأفكار إلى خطط.",
    s2stat: "Product Owner",
    s2statSub: "واجهة الابتكار لتقنية المعلومات · فبراير–يوليو 2024",
    s2stat2: "مؤسِّسة وقائدة فريق",
    s2stat2Sub: "كميل · فريق من 6 · احتضان CODE LAB",
    s2line: "قصص مستخدم، وقوائم مهام، وسبرنتات. وبعدها مشروع ريادي خاص فيني.",

    s3key: "Enter · البناء",
    s3title: "رِواء",
    s3titleSub: "ري ذكي تقوده بيانات المستشعرات.",
    s3stat: "المركز الثالث",
    s3statSub: "Tech Connect · جامعة الملك خالد · أبريل 2025",
    s3line: "أدرت المشروع، وبنيت الجانب المادي (الهاردوير) كامل.",

    s4key: "Space · التواصل",
    s4title: "أجمل أثر يكون في الناس.",
    s4l1: "طفل في برامج STEM والروبوتات",
    s4l2: "متدرب في التصميم والطباعة ثلاثية الأبعاد",
    s4l3: "ساعة تدريب صممتها وقدّمتها",
    s4l4: "عضو في الإدارة اللي قدتها في نادي الحاسب",

    s5key: "Ctrl · التنظيم",
    s5title: "برهان",
    s5titleSub: "نخلي الأنظمة المالية واضحة.",
    s5stat: "قائدة الجانب التقني",
    s5statSub: "هاكاثون أمد · بالشراكة مع مصرف الإنماء وأكاديمية طويق",
    s5line: "فكرة منصة ذكاء اصطناعي تحوّل الأنظمة المتفرقة إلى إجابات واضحة بمصادرها.",

    s6key: "Esc · الاستكشاف",
    s6title: "⁦3-Eye RoadScan⁩",
    s6titleSub: "نعلّم الذكاء الاصطناعي يشوف عيوب الطرق.",
    s6stat: "كاشف YOLO",
    s6statSub: "الجزء اللي طوّرته في نظام الفريق · RDD2022 · سبتمبر–نوفمبر 2026",
    s6line: "تجارب كثيرة. نموذج واحد مختار. وصيانة مرتبة حسب الأولوية.",

    finTitle: "كل أثر يكتب جزء من الاسم.",
    finRole: "المنتجات · الذكاء الاصطناعي · البيانات · إنترنت الأشياء",
    finLooking: "أبحث عن أول دور لي كمديرة منتج.",
    finWhere: "أبها، السعودية · مستعدة للانتقال داخل المملكة",
    finEmail: "راسليني",
    finLinkedin: "لينكدإن",
    finQuick: "النسخة السريعة",
    finReplay: "من البداية",

    details: {
      s1: { title: "Sunflower Solar Tracker", items: [
        "Arduino ومستشعرات الضوء تعرف من وين جاي الضوء، واللوح يلتفت باتجاهه.",
        "Node-RED يضيف التشغيل والإيقاف، ويعرض رسائل واتساب الواردة على شاشة LCD.",
        "دوري: البرمجة والتوصيلات والهاردوير ضمن الفريق. وحقق المشروع المركز الأول."
      ], tags: ["Arduino", "Node-RED", "إنترنت الأشياء", "مستشعرات"] },
      s2: { title: "Product Owner · مؤسِّسة", items: [
        "واجهة الابتكار: كتبت المهام التقنية وقصص المستخدم ومعايير القبول لفريق التطوير.",
        "نظّمت قائمة مهام المنتج (Backlog) وتخطيط السبرنتات في Jira، وسويت دراسات سوق لمنتجات الشركة.",
        "كميل: أسست مشروع ريادي لمنصة إدارة مشاريع بالذكاء الاصطناعي، وقدت فريق من 6 أشخاص لين وصلنا لنموذج أولي.",
        "بنيت رؤية المنتج وأولوياته ونموذج العمل، مع مرشدين في CODE LAB بجامعة الملك خالد."
      ], tags: ["Product backlog", "قصص المستخدم", "Jira", "دراسة السوق", "نموذج العمل"] },
      s3: { title: "رِواء · Rewaa", items: [
        "مشروع التخرج (أغسطس 2024 – مايو 2025)، يجمع إنترنت الأشياء وتحليل البيانات والذكاء الاصطناعي.",
        "كمديرة للمشروع: النطاق، والخطة، والجدول الزمني، والتواصل مع أصحاب المصلحة، واعتماد تغييرات النطاق.",
        "توليت الهاردوير كامل (ESP32 والمستشعرات)، واشتغلت على أغلب البرمجة وجانب الذكاء الاصطناعي.",
        "المركز الثالث في Tech Connect 2025، جائزة للفريق."
      ], tags: ["إنترنت الأشياء", "ESP32", "الذكاء الاصطناعي", "إدارة المشاريع"] },
      s4: { title: "الناس", items: [
        "ملحة · BotBox: صممت أنشطة STEM والروبوتات، وصورت الفيديوهات التعليمية، وقدمت الجلسات كمدربة رئيسية. حوالي 8 برامج، و69 طفل.",
        "أشرفت على 3 ميسّرين، واستخدمت آراء الأطفال وأولياء الأمور لتحسين البرامج اللي بعدها.",
        "أكاديمية طويق: دربت 71 متدرب على التصميم والطباعة ثلاثية الأبعاد خلال ثلاثة أسابيع (يوليو 2025).",
        "مشكاة: صممت منهج تحليل بيانات من الصفر، وقدمت 40 جلسة لدفعتين (2026).",
        "نادي الحاسب بجامعة الملك خالد: رئيسة الإدارة التنظيمية (2024–2025)."
      ], tags: ["التدريب", "تصميم المناهج", "الإشراف على الفرق", "المجتمع"] },
      s5: { title: "برهان · Burhan", items: [
        "المشكلة: جهات تنظيمية كثيرة، وأنظمة متفرقة ومتغيرة، وبحث يدوي يأخذ وقت.",
        "الفكرة: تقنية RAG تجاوب من نصوص الأنظمة نفسها وتعرض مصادرها.",
        "دوري: قدت الجانب التقني في فريق يجمع خلفيات تقنية وقانونية."
      ], tags: ["RAG", "معالجة اللغة", "RegTech", "FinTech"] },
      s6: { title: "⁦3-Eye RoadScan⁩", items: [
        "نظام فريق يكتشف عيوب الطرق من الصور، ويساعد في ترتيب أولويات الصيانة.",
        "دوري: دربت وقارنت تجارب YOLO، واخترت النموذج والأوزان، وضبطت عتبة الثقة.",
        "زميلاتي بنوا كشف التكرار، وترتيب الأولويات، وواجهة Streamlit."
      ], tags: ["YOLO", "الرؤية الحاسوبية", "RDD2022", "التجريب"] }
    },

    quick: {
      title: "النسخة السريعة",
      back: "ارجع للرحلة",
      summary: "خريجة نظم معلومات (مسار علم البيانات) متجهة لإدارة المنتجات. عندي خبرة Product Owner، ومشروع ريادي أسسته، ومشاريع عملية في الذكاء الاصطناعي والبيانات وإنترنت الأشياء.",
      expTitle: "الخبرات",
      exp: [
        ["مدربة تحليل بيانات", "مشكاة", "أغسطس–أكتوبر 2026", "صممت المنهج من الصفر. دفعتين، 40 جلسة، 80 ساعة."],
        ["محللة بيانات", "ملحة", "يوليو–نوفمبر 2025", "بنيت لوحات Power BI وTableau من الصفر، وتحليل بـPython، وأنظمة عمل في Notion. ومدربة رئيسية لبرامج BotBox."],
        ["مدربة تصنيع رقمي · موسمي", "أكاديمية طويق", "يوليو 2025", "التصميم والطباعة ثلاثية الأبعاد لـ71 متدرب."],
        ["Product Owner", "واجهة الابتكار لتقنية المعلومات", "فبراير–يوليو 2024", "قصص المستخدم، ومعايير القبول، وإدارة الـBacklog وتخطيط السبرنتات في Jira. ودراسات سوق."]
      ],
      prjTitle: "مشاريع مختارة",
      prj: [
        ["رِواء", "مديرة المشروع والهاردوير · ري ذكي · المركز الثالث في Tech Connect 2025"],
        ["برهان", "قائدة الجانب التقني · امتثال تنظيمي بالذكاء الاصطناعي · هاكاثون أمد"],
        ["⁦3-Eye RoadScan⁩", "كاشف YOLO · اكتشاف عيوب الطرق بالذكاء الاصطناعي · 2026"],
        ["كميل", "مؤسِّسة وقائدة فريق · إدارة مشاريع بالذكاء الاصطناعي · CODE LAB"],
        ["Sunflower Solar Tracker", "إنترنت الأشياء · المركز الأول في معسكر Node-RED 2023"]
      ],
      awardsTitle: "الجوائز",
      awards: ["الأول · معسكر Node-RED · 2023", "الثاني · معسكر TinyML · 2024", "الثالث · Tech Connect · 2025"],
      skillsTitle: "المهارات",
      skills: [
        ["المنتج", "Backlog · قصص المستخدم · معايير القبول · تخطيط السبرنت · Jira · Notion · دراسة السوق"],
        ["البيانات", "Python · SQL · Power BI · Tableau · Excel"],
        ["الذكاء الاصطناعي وإنترنت الأشياء", "YOLO · RAG · TinyML · ESP32 · Arduino · Node-RED"]
      ],
      eduTitle: "التعليم",
      edu: "بكالوريوس نظم المعلومات، مسار علم البيانات · جامعة الملك خالد · 2021–2025",
      langTitle: "اللغات",
      langs: "العربية (اللغة الأم) · الإنجليزية (جيد)",
      contactTitle: "التواصل"
    }
  },

  contact: {
    email: "rimas.al.abunasser@gmail.com",
    linkedin: "https://www.linkedin.com/in/rimas-al-abunasser/"
  }
};
