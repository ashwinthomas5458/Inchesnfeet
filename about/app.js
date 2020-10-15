const nav=document.querySelector('.nav');
const navname=document.querySelector('.navname');
const logo=document.querySelector('.logo');
const text=document.querySelectorAll('.textcontainer');

window.addEventListener('load', ()=>{
    window.scrollTo(0,0)
    navname.classList.add('navnameactive')
    nav.classList.add('navactive');
    logo.classList.add('logoactive');
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