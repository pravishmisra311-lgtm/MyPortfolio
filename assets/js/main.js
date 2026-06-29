/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
})
}

/* Hide menu */
if(navClose){
navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
})
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=======HOME TEXT CIRCULAR====*/
const homeText =document.getElementById('home-text'),
letters=homeText.textContent.trim().split(''),
angleStep=360/letters.length
homeText.textContent=''
letters.forEach((char,i)=>{
    const span=document.createElement('span')
    span.textContent=char
    span.style.transform=`rotate(${i*angleStep}deg)`
    homeText.appendChild(span)
})

/*HOME TYPED JS*/
const typedHome = new Typed('#home-typed', {
strings: ['DSA with Java Enthusiast', 'Full Stack Learner','Student'],
typeSpeed: 60,
backSpeed:30,
backDelay:2000,
loop:true,
})

/*HEADER STYLES*/
const scrollHeader = () =>{
const header = document.getElementById('header')
this.scrollY >= 50 ? header.classList.add('scroll-header')
                    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*SWIPER WORK*/
const swiperProject = new Swiper(".project__swiper", {
    loop:true,
    
    pagination: {
        el: ".swiper-pagination",
    },
});




