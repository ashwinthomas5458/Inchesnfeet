const nav=document.querySelector('.nav');
const logo=document.querySelector('.logo');
const covertext=document.querySelector('.covertext');
window.addEventListener('load', ()=>{
    window.scrollTo(0,0)
    nav.classList.add('navactive');
    logo.classList.add('logoactive');
    covertext.classList.add('coveractive');
})