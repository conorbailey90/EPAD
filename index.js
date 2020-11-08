let welcomeSection = document.querySelector('.welcome');
let quote = document.querySelector('.quote');
let heroImage = document.querySelector('.hero-img');
let heroText = document.querySelector('.hero-text-p');

window.addEventListener('DOMContentLoaded', reveal);

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