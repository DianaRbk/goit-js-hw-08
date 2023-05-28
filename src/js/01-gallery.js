// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");

function generateGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const galleryItemMarkup = generateGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryItemMarkup);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionsData: "alt",
});



console.log(galleryItems);
