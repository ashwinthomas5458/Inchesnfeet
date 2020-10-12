const nav=document.querySelector('.nav');
const navname=document.querySelector('.navname');
const logo=document.querySelector('.logo');
const text=document.querySelectorAll('.textcontainer');

function mob(){
    if(window.innerWidth<780){
        for(j=0;j<3;j++){
            if(j%2){
                text[j].classList.add('left');
            }
            else{
                text[j].classList.add('right');
            }
        }
    }
}
window.addEventListener('load', ()=>{
    window.scrollTo(0,0)
    navname.classList.add('navnameactive')
    nav.classList.add('navactive');
    logo.classList.add('logoactive');
    mob();
})
function scrollappear(object){
    var objects=document.querySelectorAll(object);
    var screenposition=window.innerHeight/1.2;
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
window.addEventListener('scroll', ()=>{
    navfade();
    scrollappear('.scrollevent');
})