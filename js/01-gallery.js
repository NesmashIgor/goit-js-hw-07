import { galleryItems } from './gallery-items.js';

// Change code below this line

const ulGallery = document.querySelector('.gallery')

function renderItem(item) {
    ulGallery.insertAdjacentHTML('afterbegin', `<li class="gallery__item">
    <a class="gallery__link" href= ${item.original}>
        <img
            class="gallery__image"
            src= ${item.preview}
            data-source=${item.original}
            alt=${item.description} 
        />
    </a>
</li>`)
}

galleryItems.forEach((item) => {
    renderItem(item)
})



ulGallery.addEventListener('click', (event) => {
    event.preventDefault()
    let target = event.target

    if (target.className === "gallery__image") {

        const instance = basicLightbox.create(`
        <img      
        class="gallery__image"
        src= ${target.dataset.source}
         
         />
         
      `)
        instance.show()
    if(instance.show() === true) {
        ulGallery.addEventListener( 'keydown', (event)=> {
            if(event.code === 'Escape') {
                instance.close()
            }
        })
    }
    }

})




