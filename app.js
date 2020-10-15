const preloader=document.querySelector('.preloader');
const loader=document.querySelector('.loader');
const nav=document.querySelector('.nav');
const navl=document.querySelectorAll('.navlinks');
const items=document.querySelectorAll('.item')
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
    var screenposition=window.innerHeight/2.1;
    const navbar=document.querySelector('header');
    const navname=document.querySelector('.navname');

    if(window.pageYOffset<screenposition){
        navbar.classList.remove('navbaractive');
        navname.classList.remove('navnameactive');
        navl.forEach(navli =>{
            navli.classList.remove('navacta');
        })
    }
    if(window.pageYOffset>screenposition){
        navbar.classList.add('navbaractive');
        navname.classList.add('navnameactive');
        navl.forEach(navli =>{
            navli.classList.add('navacta');
        })
    }
}
window.addEventListener('scroll', ()=>{
    navfade();
    scrollappear(".textcontainer");
    scrollappear(".image-container");
    scrollappear(".textbox");
})

var portfoliothumb=document.querySelectorAll('.grey');

portfoliothumb.forEach(thumb =>{
    thumb.addEventListener("click", ()=>{
        var source=thumb.alt;
        var loc="https://ashwinthomas5458.github.io/Inchesnfeet/portfolio/"+source;
        window.location.href=loc;
    })
})
