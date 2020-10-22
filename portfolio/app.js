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
            container.classList.add('containeractive');

            container.addEventListener('click', (r)=>{
                if(r.target.classList.contains('container')){
                        container.classList.remove('containeractive');
                }
            })
        })
    })
}
btnClick();

window.addEventListener('scroll', ()=>{
    navfade();
    scrollappear('.cardcontainer');
})