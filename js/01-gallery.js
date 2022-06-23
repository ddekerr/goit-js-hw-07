import { galleryItems } from './gallery-items.js';

// variable for lightbox instance
let lightboxImage;

// create markup gallery
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', createMarkupInnerGallery(galleryItems));

// event listener on gallery
galleryContainer.addEventListener('click', function(e) {
  // cansel page reload
  e.preventDefault();
  
  // create lightbox instance for target clickable element
  lightboxImage = createBigImage(e.target.dataset.source);
  // show lightbox instance and callback create keydown event listener
  lightboxImage.show(createKeyDownEventListener);
});


// create markup for each gallery object and join them in one string
function createMarkupInnerGallery(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `
  }).join("");
}

// create Lightbox library object
function createBigImage(bigImgSource) {
  const bigImg = basicLightbox.create(`<img class="modal-image" src="${bigImgSource}">`);
  return bigImg;
}

// create keydown event listener
function createKeyDownEventListener() {
  document.addEventListener("keydown", onKeyDownEscape);
}

// remove keydown event listener
function removeKeyDownEventListener() {
  document.removeEventListener("keydown", onKeyDownEscape);
}

// check lightbox instance and pressed Escape button
// close lightbox instance and callback remove keydown event listener from this instance
function onKeyDownEscape(e) {
  if(e.code === 'Escape' && lightboxImage.visible()){
    lightboxImage.close(removeKeyDownEventListener);
  }
}