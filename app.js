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
    var screenposition=window.innerHeight/2.1;
    const navbar=document.querySelector('header');
    const navname=document.querySelector('.navname');

    if(window.pageYOffset<screenposition){
        navbar.classList.remove('navbaractive');
        navname.classList.remove('navnameactive');
    }
    if(window.pageYOffset>screenposition){
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

var portfoliothumb=document.querySelectorAll('.grey');

function imagereroute(){
    portfoliothumb.forEach(thumb =>{
        thumb.addEventListener("click", ()=>{
            var source=thumb.alt;
            var loc="https://inchesnfeet.com/portfolio/"+source;
            window.location.href=loc;
        })
    })
}
imagereroute();

function quoteaction(){
    var quotebtn=document.querySelector('.getq');
    var quote=document.querySelector('.quote');
    var quotecard=document.querySelectorAll('.quotecard');
    var qform=document.querySelectorAll('.qform')

    quotebtn.addEventListener("click",()=>{
        quote.classList.add('quoteactive');
    } )
    quotecard.forEach(card =>{
        card.addEventListener("click", (x)=>{
            var cardform=x.target.lastElementChild;
            card.classList.add('quotecardactive');
            console.log(cardform);
            cardform.classList.add('qformactive');
        })
    })

    quote.addEventListener("click", (y)=>{
        if(y.target.classList.contains('quote')){
            quote.classList.remove('quoteactive');
        }
    })
}
quoteaction();

