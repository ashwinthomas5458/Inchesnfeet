const name=document.querySelector('header a');
const carousel=document.querySelector('.carousel');
const textbox=document.querySelector('.textcontainer');
const button=document.querySelector('.btn');
const container=document.querySelector('.imagecontainer');
const thumbs=document.querySelector('.thumb');
const buttons=document.querySelector('.buttons')
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
        buttons.classList.add('buttonsactive');  
    })
    carousel.addEventListener("click", (r)=>{
        if(r.target.classList.contains('carousel')){
            carousel.classList.remove('carouselactive');
            container.classList.remove('containeractive');
            thumbs.classList.remove('thumbactive'); 
            buttons.classList.remove('buttonsactive');
        }
    })
}
imageview();
function imageclick(){
    const large = document.querySelector('.large');
    const thumb = document.querySelectorAll('.thumbnail');
    const prevbtn=document.querySelector('.prevbtn');
    const nextbtn=document.querySelector('.nextbtn');
    var counter=1;
    thumb.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const lowsrc = this.src;
            const bigsrc = lowsrc.replace("thumb", "Photo");
            large.src = bigsrc;
            thumb.forEach(thumbnail =>{
                thumbnail.classList.remove('thumbnailactive');
            })
            thumbnail.classList.add('thumbnailactive');
            counter=this.alt;
        })
    })
    prevbtn.addEventListener("click", ()=>{
        if(counter==1){
            counter=10;
        }
        else{
            counter--;
        }
        var viewtag="../../images/SandsHouse/Photo--"+counter+".jpg";
        large.src=viewtag;
        thumb.forEach(thumbnail =>{
            thumbnail.classList.remove('thumbnailactive');
        })
        thumb[counter-1].classList.add('thumbnailactive');
    })
    nextbtn.addEventListener("click", ()=>{
        if(counter==10){
            counter=1;
        }
        else{
            counter++;
        }
        var viewtag="../../images/SandsHouse/Photo--"+counter+".jpg";
        large.src=viewtag;
        thumb.forEach(thumbnail =>{
            thumbnail.classList.remove('thumbnailactive');
        })
        thumb[counter-1].classList.add('thumbnailactive');
    })
}
imageclick();