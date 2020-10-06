const preloader=document.querySelector('.preloader');
const loader=document.querySelector('.loader');
const nav=document.querySelector('.nav');
const logo=document.querySelector('.logo');
window.addEventListener('load', ()=>{
    window.scrollTo(0,0)
    loader.classList.add('loaderremove');
    preloader.classList.add('preloaderremove');
    nav.classList.add('navactive');
    logo.classList.add('logoactive');
})
function scrollappear(object){
    var obj=document.querySelector(object);
    var objposition=obj.getBoundingClientRect().top;
    var screenposition=window.innerHeight/1.2;

    if(objposition<screenposition){
        obj.classList.add('objectappear');
    }
    if(objposition>window.innerHeight){
        obj.classList.remove('objectappear');
    }
}
function navfade(){
    const mark=logo.offsetTop;
    const navbar=document.querySelector('header');
    const navname=document.querySelector('.navname');

    if(window.pageYOffset<mark){
        navbar.classList.remove('navbaractive');
        navname.classList.remove('navnameactive');
    }
    if(window.pageYOffset>mark){
        navbar.classList.add('navbaractive');
        navname.classList.add('navnameactive');
    }
}
window.addEventListener('scroll', ()=>{
    navfade();
    scrollappear(".textcontainer");
    scrollappear(".image-container");
    scrollappear(".textbox");
})

const navSlide=()=>{
    const icon=document.querySelector('.navicon')
    const nav=document.querySelector('.nav')
    const bar=document.querySelector('.navlist')
    nav.addEventListener('click', ()=> {
        bar.classList.toggle('nav-active')
        icon.classList.toggle('x')
    })
}
navSlide();

var portfoliothumb=document.querySelectorAll('.grey');

portfoliothumb.forEach(thumb =>{
    thumb.addEventListener("click", ()=>{
        var source=thumb.alt;
        var loc="https://ashwinthomas5458.github.io/Inchesnfeet/portfolio/"+source;
        window.location.href=loc;
    })
})