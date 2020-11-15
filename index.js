let welcomeSection = document.querySelector('.welcome');
let quote = document.querySelector('.quote');
let heroImage = document.querySelector('.hero-img');
let heroText = document.querySelector('.hero-text-p');
let about = document.querySelector('.about-container');

window.addEventListener('DOMContentLoaded', reveal);
window.addEventListener('scroll', scrollReveal)

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

function scrollReveal(e){
    console.log(window.scrollY)

    let distanceFromTop = -100
    let aboutTop = about.getBoundingClientRect().top;
  
    if((aboutTop - window.innerHeight) < distanceFromTop){
        about.classList.add('active')
    }else{
        about.classList.remove('active')
    }
}