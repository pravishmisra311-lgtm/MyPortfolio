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
document.addEventListener('DOMContentLoaded', () => {
    const projectSwiper = document.querySelector('.project__swiper');

    if (projectSwiper) {
        new Swiper('.project__swiper', {
            loop: true,
            grabCursor: true,
            slidesPerView: 'auto',
            spaceBetween: 24,
            speed: 600,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        /* autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }*/
        });
    }
});

/*===============CONTACT EMAIL JS===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = async (e) => {
    e.preventDefault()
    try {
        await emailjs.sendForm('service_ubmqccc', 'template_g9h7g3d', '#contact-form', '-b-mYRJao8usF4xTm')


        contactMessage.textContent = 'Message sent successfully ✅'

        contactForm.reset()
}catch (error) {
        contactMessage.textContent = 'Message not sent (service error) ❌'
    }finally{
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
    }
}
contactForm.addEventListener('submit', sendEmail)
