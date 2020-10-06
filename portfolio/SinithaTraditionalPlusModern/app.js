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