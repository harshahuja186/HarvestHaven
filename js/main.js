// header scroll 

let nav = document.querySelector('.navbar');
window.onscroll = () => {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled")
    }
}

let navbar = document.querySelector(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach((e) => {
    e.addEventListener('click', ()=>{
        navcollapse.classList.remove('show');
    })
})