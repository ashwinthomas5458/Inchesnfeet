const name=document.querySelector('header a');
const carousel=document.querySelector('.carousel');
const textbox=document.querySelector('.textcontainer');
const button=document.querySelector('.btn');
const container=document.querySelector('.imagecontainer');
const thumbs=document.querySelector('.thumb');
window.addEventListener('load', ()=>{
    carousel.classList.add('carouselonload');
    name.classList.add('inchesactive');
    textbox.classList.add('textcontaineractive')
})
function imageview(){
    button.addEventListener("click", ()=>{
        carousel.classList.add('carouselactive');
        container.classList.add('containeractive');
        thumbs.classList.add('thumbactive');  
    })
    carousel.addEventListener("click", (r)=>{
        if(r.target.classList.contains('carousel')){
            carousel.classList.remove('carouselactive');
            container.classList.remove('containeractive');
            thumbs.classList.remove('thumbactive'); 
        }
    })
}
imageview();
function imageclick(){
    const large = document.querySelector('.large');
    const thumb = document.querySelectorAll('.thumbnail')

    thumb.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const lowsrc = this.src;
            const bigsrc = lowsrc.replace("thumb", "Photo");
            large.src = bigsrc;
            thumb.forEach(thumbnail =>{
                thumbnail.classList.remove('thumbnailactive')
            })
            thumbnail.classList.add('thumbnailactive')
        })
    })
}
imageclick();