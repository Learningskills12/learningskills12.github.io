/* ==========================================
   Learning Skills
   Main JavaScript
   File : js/main.js
========================================== */

// ===============================
// DARK MODE
// ===============================

const darkBtn = document.getElementById("darkModeBtn");

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
}

if(darkBtn){

    darkBtn.addEventListener("click",function(){

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

        }else{

            localStorage.setItem("theme","light");

        }

    });

}

// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",function(){

    if(backToTop){

        if(window.scrollY>300){

            backToTop.style.display="block";

        }else{

            backToTop.style.display="none";

        }

    }

});

if(backToTop){

    backToTop.addEventListener("click",function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

// ===============================
// SCROLL PROGRESS BAR
// ===============================

const progress=document.getElementById("progressBar");

window.addEventListener("scroll",function(){

    if(progress){

        let winScroll=document.documentElement.scrollTop;

        let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

        let scrolled=(winScroll/height)*100;

        progress.style.width=scrolled+"%";

    }

});

// ===============================
// LOADER
// ===============================

window.addEventListener("load",function(){

    const loader=document.getElementById("loader");

    if(loader){

        loader.style.display="none";

    }

});
// ===============================
// SEARCH FUNCTION
// ===============================

function searchContent(){

const input=document.getElementById("searchBox");

if(!input) return;

const filter=input.value.toLowerCase();

const items=document.querySelectorAll(".search-item");

items.forEach(function(item){

const text=item.innerText.toLowerCase();

if(text.indexOf(filter)>-1){

item.style.display="";

}else{

item.style.display="none";

}

});

}

// ===============================
// FAQ TOGGLE
// ===============================

const faqButtons=document.querySelectorAll(".faq-question");

faqButtons.forEach(function(btn){

btn.addEventListener("click",function(){

const parent=this.parentElement;

parent.classList.toggle("active");

});

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements=document.querySelectorAll(".reveal");

function revealOnScroll(){

revealElements.forEach(function(el){

const windowHeight=window.innerHeight;

const top=el.getBoundingClientRect().top;

if(top<windowHeight-100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

// ===============================
// ACTIVE NAVIGATION
// ===============================

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(function(link){

link.addEventListener("click",function(){

navLinks.forEach(function(item){

item.classList.remove("active");

});

this.classList.add("active");

});

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===============================
// AUTO THEME DETECTION
// ===============================

if(localStorage.getItem("theme")===null){

if(window.matchMedia("(prefers-color-scheme: dark)").matches){

document.body.classList.add("dark");

}

}

// ===============================
// COPY TEXT BUTTON
// ===============================

function copyText(id){

const element=document.getElementById(id);

if(!element) return;

navigator.clipboard.writeText(element.innerText);

showToast("✅ Copied Successfully");

}

// ===============================
// TOAST MESSAGE
// ===============================

function showToast(message){

let toast=document.createElement("div");

toast.innerText=message;

toast.style.position="fixed";

toast.style.bottom="20px";

toast.style.left="50%";

toast.style.transform="translateX(-50%)";

toast.style.background="#0066cc";

toast.style.color="#fff";

toast.style.padding="12px 20px";

toast.style.borderRadius="8px";

toast.style.zIndex="99999";

toast.style.boxShadow="0 5px 15px rgba(0,0,0,.2)";

document.body.appendChild(toast);

setTimeout(function(){

toast.remove();

},2500);

}

// ===============================
// KEYBOARD SHORTCUT
// Ctrl + Shift + D = Dark Mode
// ===============================

document.addEventListener("keydown",function(e){

if(e.ctrlKey && e.shiftKey && e.key==="D"){

document.body.classList.toggle("dark");

}

});

// ===============================
// IMAGE LAZY LOADING
// ===============================

document.querySelectorAll("img").forEach(function(img){

img.setAttribute("loading","lazy");

});

// ===============================
// CURRENT YEAR
// ===============================

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

// ===============================
// PAGE LOADED
// ===============================

console.log("Learning Skills Website Loaded Successfully");

// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");

if(menuBtn && navMenu){

menuBtn.addEventListener("click",function(){

navMenu.classList.toggle("show");

});

}

// ===============================
// READING PROGRESS (%)
// ===============================

window.addEventListener("scroll",function(){

const progressText=document.getElementById("progressText");

if(progressText){

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=Math.round((scrollTop/scrollHeight)*100);

progressText.innerHTML=percent+"% Read";

}

});

// ===============================
// WELCOME MESSAGE
// ===============================

window.addEventListener("load",function(){

if(!sessionStorage.getItem("welcomeShown")){

showToast("🎉 Welcome to Learning Skills!");

sessionStorage.setItem("welcomeShown","true");

}

});

// ===============================
// DISABLE RIGHT CLICK (OPTIONAL)
// ===============================

// document.addEventListener("contextmenu",function(e){
// e.preventDefault();
// });

// ===============================
// ERROR HANDLING
// ===============================

window.onerror=function(message,source,line,column,error){

console.log("Error:",message);

return true;

};

// ===============================
// PERFORMANCE
// ===============================

window.addEventListener("load",function(){

document.body.classList.add("loaded");

});

// ===============================
// END OF FILE
// ===============================

console.log("Learning Skills main.js Loaded Successfully");
