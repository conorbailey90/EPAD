let welcomeSection = document.querySelector('.welcome');
let quote = document.querySelector('.quote');
let heroImage = document.querySelector('.hero-img');
let heroText = document.querySelector('.hero-text-p');

window.addEventListener('DOMContentLoaded', reveal);
window.addEventListener('scroll', scrollPage)

function reveal(){
    heroImage.classList.add('active')
    setTimeout(()=>{
        welcomeSection.classList.add('active');
        quote.classList.add('active');
        setTimeout(()=>{
            heroText.classList.add('active');
        },300) 
    },500)
    
}

function scrollPage(e){
    let scrolled = window.scrollY;
    welcomeSection.style.transition = '0s'
    welcomeSection.style.transform = `translateY(${scrolled * 0.2}px)`
    welcomeSection.style.opacity = 15 / scrolled
}