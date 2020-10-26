const preloader=document.querySelector('.preloader');
const loader=document.querySelector('.loader');
const nav=document.querySelector('.nav');
const navname=document.querySelector('.navname');
window.addEventListener('load', ()=>{
    window.scrollTo(0,0)
    loader.classList.add('loaderremove');
    preloader.classList.add('preloaderremove');
    nav.classList.add('navactive');
    navname.classList.add('navnameactive');
})

function cardAction(){
    const cards=document.querySelectorAll('.cardcontainer');
    cards.forEach(card =>{
        card.addEventListener('click', (y)=>{
            var location=y.target.previousElementSibling.firstElementChild.alt;
            var loc="https://inchesnfeet.com/portfolio/"+location;
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

function parallaxScroll(){
    const parallax=document.querySelectorAll('.parallax');
    parallax.forEach(comp =>{
        var top=comp.getBoundingClientRect().top;
        if(top<window.innerHeight){
            comp.style.backgroundPositionY=`${top*(-0.8)}px`;
        }
    })
}
window.addEventListener('scroll', ()=>{
    if(window.innerWidth>700){
        parallaxScroll();
    }
})