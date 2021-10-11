import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = galleryElementMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onModalPictureClick);


function galleryElementMarkup(pictureList) {
    return pictureList
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}" onclick="return false;">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    }).join('');
};


function onModalPictureClick (e) {
  clickFilter(e);    
  createModal(e);
}

function clickFilter(e) {
    const isModalActive = e.target.classList.contains('active__modal');    
    if (!isModalActive) {
        return;
    }
}

function createModal(e) {
  const modalWindow = basicLightbox.create(
    `<img width="100%" height="100%" id="modal-window" src=${e.target.dataset.source}>`,
    );
      galleryContainer.onclick = modalWindow.show
};




/* Próba dodać funkcję zamykania okna modalnego z pomocą Escape


Kod 1
const modalWindow = document.querySelector('.basicLightbox');
console.log(modalWindow);
modalWindow.addEventListener('keydown', modalCloseByEscape, { once: true });

function modalCloseByEscape(e) {
  if (e.key === 'Escape') {
    this.close();
    console.log('Escape');
  }
}

<--------------------------------------------------------------------------------------------->

Kod 2
function createModal(e) {
  const modalWindow = basicLightbox.create(
    `<img width="100%" height="100%" id="modal-window" src=${e.target.dataset.source}>`, {
    onShow: (modalWindow) => console.log('onShow', modalWindow),
    onClose: () => {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          modalWindow.close(basicLightbox, () => { })
        };
      });
    }
  });
  galleryContainer.onclick = modalWindow.show
};


*/
