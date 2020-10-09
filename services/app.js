const nav=document.querySelector('.nav');
const navname=document.querySelector('.navname');
const navbar=document.querySelector('header');
const caption=document.querySelector('.caption');
const titles=document.querySelectorAll('.main h3');
const cards=document.querySelectorAll('.cardcontainer');
window.addEventListener('load', ()=>{
    window.scrollTo(0,0)
    nav.classList.add('navactive');
    navname.classList.add('navnameactive');
    navbar.classList.add('navbaractive');
    caption.classList.add('objectappearside');
    titles.forEach(title =>{
        title.style.opacity="1";
    });
    cards.forEach(card =>{
        card.classList.add('objectappearbottom');
    });
})
function parallaxeffect(element, speed){
    var object=document.querySelector(element);
    var distance=window.pageYOffset*speed;
    object.style.transform='translateY('+distance+'px)';
}
window.addEventListener("scroll", ()=>{
    if(window.innerWidth>690){
        parallaxeffect('.parallax', 0.3);
    }
})

function scopeview(){
    const scope=document.querySelector('.scope');
    const servbutton=document.querySelector('.parallax .btn');

    servbutton.addEventListener("click", ()=>{
        scope.classList.add('scopeactive');
    })
    scope.addEventListener("click", (r)=>{
        if(r.target.classList.contains('scope')){
            scope.classList.remove('scopeactive');
        }
    })
}
scopeview();