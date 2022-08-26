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
  // show lightbox instance
  lightboxImage.show();
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

// function create and return Lightbox instance
function createBigImage(bigImgSource) {
  // config of lightbox instance
  const lightboxConfig = {
    onShow: document.addEventListener("keydown", onKeyDownEscape),
    onClose: document.removeEventListener("keydown", onKeyDownEscape)
  };

  const imageTag = `<img class="modal-image" src="${bigImgSource}">`;
  const bigImg = basicLightbox.create(imageTag, lightboxConfig);
  return bigImg;
}

// check lightbox instance and pressed Escape button and closing lightbox instance
function onKeyDownEscape(e) {
  if(e.code === 'Escape' && lightboxImage.visible()){
    lightboxImage.close();
  }
}
