import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = galleryElementMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function galleryElementMarkup(pictureList) {
    return pictureList
        .map(({ preview, original, description }) => {
            return `
        <a class="gallery__item" href="${original}" onclick="return false;">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
        .join('');
};


let gallery = new SimpleLightbox('.gallery a');

gallery.on('shown.simplelightbox', function (e) {
    gallery.setCaption(e.target.firstChild.nextSibling.alt, '100%');
});

gallery.on('changed.simplelightbox', function (e) {
    gallery.setCaption(e.target.firstChild.nextSibling.alt, '100%');
});
