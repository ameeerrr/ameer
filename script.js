import translaition from "./translaition.js"

//Toggle

let myToggle = document.querySelector(".toggle-menu")
let myList = document.querySelector("ul")
let myBtn= document.querySelector(".btn")

myToggle.addEventListener("click",()=>{
myToggle.classList.toggle("menu-active")
myList.classList.toggle("menu-active")
myBtn.classList.toggle("menu-active")
})


// Form

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

// Lang

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
let english = document.querySelector(".english");
let arabic = document.querySelector(".arabic");

let logo = document.getElementById("logo");

console.log(logo);
 if (lang==="ar"){
    document.dir="rtl";
     logo.style.justifyContent="right" 
        english.removeAttribute("selected");
        arabic.setAttribute("selected","")
}else {
    document.dir="ltr";
    logo.style.justifyContent="" ;
}
}


