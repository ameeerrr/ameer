
let myToggle = document.querySelector(".toggle-menu")
let myList = document.querySelector("ul")
let myBtn= document.querySelector(".btn")

myToggle.addEventListener("click",()=>{
myToggle.classList.toggle("menu-active")
myList.classList.toggle("menu-active")
myBtn.classList.toggle("menu-active")
})

// /////////////////////////////////////////////////////////


const form= document.querySelector("form")
const from_name= document.getElementById("name")
const email_id= document.getElementById("email_id")
const message = document.getElementById("message")
const serviceID ="service_ck22gvo";
const templateID ="template_dhldube";
const publicKey ="svO_Pt_7yJo3FVndL";
emailjs.init(publicKey)

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    const inputData = {
        from_name:from_name.value,
        email_id:email_id.value,
        message:message.value
    }
    emailjs.send(serviceID,templateID,inputData).then(
        ()=> {
            from_name.value="";
            email_id.value="";
            message.value="";
            alert("Your message sent successfully!!")
            console.log("succes");
        },
        (error)=> {
            console.log(error);
        }
    )
})

// //////////////////////////////////////////////////////////

const lngSelector =document.querySelector("select")
lngSelector.addEventListener("change",(e)=>{
setLang(e.target.value);
localStorage.setItem("lang",e.target.value);
})
document.addEventListener("DOMContentLoaded",()=> {
    
    setLang(localStorage.getItem("lang"));
})
const setLang = (lang) => {
const elements = document.querySelectorAll("[data-i18n]");
elements.forEach((element)=> {
    const translaitionKey = element.getAttribute("data-i18n");
    element.textContent=translaition[lang][translaitionKey]
});

let a = document.querySelector(".a");
let b = document.querySelector(".b");

 if (lang==="ar"){
    document.dir="rtl"
        a.removeAttribute("selected");
        b.setAttribute("selected","")
}else {
    document.dir="ltr"
}
}

const translaition = {
    en: {
        home:"Home",
        features:"Features",
        about:"About",
        services:"Services",
        contact:"Contact",
        english:"English",
        arabic:"arabic",
        landing_h1:"Welcome, To our company",
        landing_p:"Here Iam gonna share everything about my company.",
        x_h2:"Welcome To  Y Company",
        x_p:"You can trust it Y has helped hundreds of customers start their businesses and realize their dreams. Our company specializes in designing websites, and we also provide a range of excellent services that will contribute to the success of your company. Y is able to help you build your own brand, increase your business traffic on the Internet, and build a strong presence on the Internet. We create a website that attracts new customers, makes it easy to order your products, and we can turn any idea into a website. Business websites must be easy to navigate, attractive and powerful, and most importantly, they must be responsive because many customers use smartphones and tablets to access their needs online Y has superior experience in creating influential websites that attract many potential customers and convert them into continuing customers. It also makes your website ranked first in search engines. We offer the latest developments and technologies to our customers ",
        features_quality_h2:"Gather Requirements",
        features_quality_p:"Create a list of customer requirements",
        more:"more",
        features_passion_h2:"Planning and Design",
        features_passion_p:"Gathering information and requirements, then creating the basic design to show how the site will work",
        features_time_h2:"Commencement of implementation",
        features_time_p:"the site will be implemented according to the agreed upon design",
        features_pass2_h2:"Quality assurance ",
        features_pass2_p:"The system is tested with the utmost precision to address any error or malfunction",
        features_time2_h2:"Launch and Deployment",
        features_time2_p:"When everything is working properly the site is launched",
        features_quality2_h2:"Complete Maintenance",
        features_quality2_p:"We provide complete maintenance and maintenance of your software ",
        about_p :"We have a specialized team of website developers and designers who are ready to work to put your company at the top through a strong and attractive website, ensuring that customers can access your company’s website easily and simply. We create websites that are visually attractive, fast, and most importantly, secure.",
        stats_h2 :"Our Awesome Stats",
        stats_years:"Years of experience",
        stats_completed:"Completed projects",
        stats_mail:"mail sent",
        stats_clients:"clients",
        services_h3_1:"Web Design",
        services_p_1:"Get an attractive and elegant design for your website, which will help you attract more visitors and give a distinctive impression to your customers",
        services_h3_2:"Phone applications",
        services_p_2:" We develop applications that meet companies' needs, improve the performance of companies' activities and provide innovative and effective solutions.",
        services_h3_3:"Websites maintenance",
        services_p_3:"We provide maintenance services for websites and electronic stores, updating them, and addressing any problems you may encounter with your site",
        services_h3_4:"SEO",
        services_p_4:" For companies that need cheap traffic and improve search results in a free way and without paying the cost of each visit.",
        services_h3_5:"Social media marketing",
        services_p_5:"For projects that need to display ads to the target market through social networks.",
        services_h3_6:" Other Services",
        services_p_6:"We provide services for anything you want related to developing, modifying or improving websites",
        contact_h2:"Do you have a project idea?",
        contact_p:"We are always excited to hear great and innovative ideas and help turn them into a distinguished and successful website",
        send:"send",
        quick_link:"Quick Link",
        categories:"categories"

    },
    
    ar: {
        home:"الرئيسية",
        features:"المميزات",
        about:"من نحن",
        services:"الخدمات",
        contact:"تواصل معنا",
        english:"الانكليزية",
        arabic:"العربية",
        landing_h1:"اهلا وسهلا بكم في شركتنا",
        landing_p:"هنا سأشارك كل شيء عن شركتي",
        features_quality_h2:"جمع متطلبات العملاء",
        features_quality_p:"إنشاء قائمة بمتطلبات العملاء",
        more:"المزيد",
        x_p:"ساعدت Y مئات العملاء على بدء أعمالهم التجارية وتحقيق أحلامهم. شركتنا متخصصة في تصميم المواقع الإلكترونية، كما نقدم مجموعة من الخدمات المتميزة التي من شأنها أن تساهم في نجاح شركتك. Y قادر على مساعدتك في بناء علامتك التجارية الخاصة، وزيادة حركة مرور أعمالك على الإنترنت، وبناء حضور قوي على الإنترنت. نقوم بإنشاء موقع إلكتروني يجذب عملاء جدد، ويسهل عليك طلب منتجاتك، كما يمكننا تحويل أي فكرة إلى موقع إلكتروني. يجب أن تكون مواقع الويب التجارية سهلة التنقل وجذابة وقوية، والأهم من ذلك، يجب أن تكون سريعة الاستجابة لأن العديد من العملاء يستخدمون الهواتف الذكية والأجهزة اللوحية للوصول إلى احتياجاتهم عبر الإنترنت. تتمتع Y بخبرة فائقة في إنشاء مواقع ويب مؤثرة تجذب العديد من العملاء المحتملين وتحولهم إلى مواقع ويب مستمرة عملاء. كما أنه يجعل موقع الويب الخاص بك في المرتبة الأولى في محركات البحث. نحن نقدم أحدث التطورات والتقنيات لعملائنا",
        x_h2:"اهلا بك في شركة واي",
        features_passion_h2:"التخطيط والتصميم",
        features_passion_p:"جمع المعلومات والمتطلبات، ثم إنشاء التصميم الأساسي لتوضيح كيفية عمل الموقع",
        features_time_h2:"البدء بالتنفيذ",
        features_time_p:"وسيتم تنفيذ الموقع حسب التصميم المتفق عليه",
        features_pass2_h2:"تأكيد الجودة",
        features_pass2_p:"يتم اختبار النظام بمنتهى الدقة لمعالجة أي خطأ أو عطل ",
        features_time2_h2:"الإطلاق والنشر",
        features_time2_p:"عندما يعمل كل شيء بشكل صحيح يتم إطلاق الموقع",
        features_quality2_h2:"صيانة كاملة",
        features_quality2_p:"نحن نقدم الصيانة الكاملة وصيانة البرامج الخاصة بك ",
        about_p :"لدينا فريق متخصص من مطوري ومصممي مواقع الويب على استعداد للعمل لوضع شركتك في القمة من خلال موقع ويب قوي وجذاب، مما يضمن وصول العملاء إلى موقع شركتك بسهولة وبساطة. نقوم بإنشاء مواقع ويب جذابة بصريًا، وسريعة، والأهم من ذلك، آمنة",
        stats_h2 :" احصائياتنا الرائعة",
        stats_years:"سنوات من الخبرة",
        stats_completed:"المشاريع المنجزة",
        stats_mail:"البريد المرسل",
        stats_clients:"عملاء",
        services_h3_1:"تصميم مواقع ويب",
        services_p_1:"احصل على تصميم جذاب وأنيق لموقعك الإلكتروني، مما يساعدك على جذب المزيد من الزوار ويعطي انطباع مميز لعملائك",
        services_h3_2:"تطبيقات الهاتف",
        services_p_2:"نقوم بتطوير التطبيقات التي تلبي احتياجات الشركات وتحسين أداء أنشطة الشركات وتقديم حلول مبتكرة وفعالة.",
        services_h3_3:"صيانة مواقع الويب",
        services_p_3:"نقدم خدمات صيانة المواقع والمتاجر الإلكترونية وتحديثها ومعالجة أي مشاكل قد تواجهك مع موقعك",
        services_h3_4:"تحسين محركات البحث",
        services_p_4:"للشركات التي تحتاج إلى ترافيك رخيص وتحسين نتائج البحث بطريقة مجانية ودون دفع تكلفة كل زيارة.",
        services_h3_5:"تسويق وسائل التواصل الاجتماعية",
        services_p_5:"للمشاريع التي تحتاج إلى عرض الإعلانات للسوق المستهدف عبر شبكات التواصل الاجتماعي",
        services_h3_6:"الخدمات الاخرى",
        services_p_6:"نحن نقدم خدمات لأي شيء تريده يتعلق بتطوير مواقع الويب أو تعديلها أو تحسينها",
        contact_h2:"هل لديك فكرة مشروع؟",
        contact_p:"نحن دائما متحمسون لسماع الأفكار الرائعة والمبتكرة والمساعدة في تحويلها إلى موقع متميز وناجح",
        send:"ارسال",
        quick_link:"روابط سريعة",
        categories:"فئات"
    }
}
