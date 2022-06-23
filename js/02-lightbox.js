import { galleryItems } from './gallery-items.js';

// create markup gallery
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', createMarkupInnerGallery(galleryItems));


galleryContainer.addEventListener("click", function(e) {
  e.preventDefault();

  // create instance of SimpleLihtBox and set options
  const lightbox = new SimpleLightbox('.gallery__item', {
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
});


// create markup for each gallery object and join them in one string
function createMarkupInnerGallery(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `
  }).join("");
}