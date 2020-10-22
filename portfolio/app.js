const preloader=document.querySelector('.preloader');
const loader=document.querySelector('.loader');
const nav=document.querySelector('.nav');
const navname=document.querySelector('.navname');
const cover=document.querySelector('.cover');
window.addEventListener('load', ()=>{
    window.scrollTo(0,0)
    loader.classList.add('loaderremove');
    preloader.classList.add('preloaderremove');
    nav.classList.add('navactive');
    navname.classList.add('navnameactive');
    cover.classList.add('coveron');
})
function scrollappear(object){
    var objects=document.querySelectorAll(object);
    var screenposition=window.innerHeight/1.1;
    objects.forEach(obj =>{
        var objposition=obj.getBoundingClientRect().top;
        if(objposition<screenposition){
        obj.classList.add('objectappear');
        }
        if(objposition>window.innerHeight){
        obj.classList.remove('objectappear');
        }
    })
}
function navfade(){
    var screenposition=window.innerHeight/2.1;
    const navbar=document.querySelector('header');

    if(window.pageYOffset<screenposition){
        navbar.classList.remove('navbaractive');
    }
    if(window.pageYOffset>screenposition){
        navbar.classList.add('navbaractive');
    }
}

function cardAction(){
    const cards=document.querySelectorAll('.cardcontainer');
    cards.forEach(card =>{
        card.addEventListener('click', (y)=>{
            var location=y.target.previousElementSibling.firstElementChild.alt;
            var loc="https://ashwinthomas5458.github.io/Inchesnfeet/portfolio/"+location;
            window.location.href=loc;
        })
    })
}
cardAction();

const pBtn=document.querySelectorAll('.parallax .btn');
function btnClick(){
    pBtn.forEach(btn =>{
        btn.addEventListener('click',(x)=>{
            var container=x.target.offsetParent.lastElementChild;
            var parent=x.target.offsetParent;
            container.classList.add('containeractive');
            parent.classList.add('ontop');

            container.addEventListener('click', (r)=>{
                if(r.target.classList.contains('container')){
                        container.classList.remove('containeractive');
                        parent.classList.remove('ontop');
                }
            })
        })
    })
}
btnClick();

let counter=0;
function parallaxScroll(){
    const parallax=document.querySelectorAll('.parallax');
    let position=parallax[counter].getBoundingClientRect().top
    if(position<0 && counter<2){
        parallax[counter].classList.add(`fixed${counter}`);
        counter++;
    }
    else if(position>(window.innerHeight+1) && counter>0){
        parallax[counter-1].classList.remove(`fixed${counter-1}`);
        counter--
    }
}
window.addEventListener('scroll', ()=>{
    navfade();
    if(window.innerWidth<700){
        parallaxScroll();
    }
    else{
        scrollappear('.cardcontainer');
    }
})