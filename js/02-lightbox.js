import { galleryItems } from './gallery-items.js';

const lightboxConfig = {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  showCounter: false,
};

// create markup gallery
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', createMarkupInnerGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery .gallery__item', lightboxConfig);
lightbox.on('show.simplelightbox');


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