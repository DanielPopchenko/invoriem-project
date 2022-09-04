const closeModalBtn = document.querySelector('.modal-btn');
const openModalBtn = document.querySelector('.open-modal-btn');
const modalWindowOverlay = document.querySelector('.modal-overlay');
const modalRef = document.querySelector('.modal');

closeModalBtn.addEventListener('click', onCloseModalBtnHandler);
// openModalBtn.addEventListener('click', onOpenModalBtnHandler);
modalWindowOverlay.addEventListener('click', onModalOverlayClickHandler);
window.addEventListener('keyup', onEscClickHandler);

document.addEventListener('click', e => {
  if (e.target.classList.contains('btn')) {
    openModalWindow();
  }
});

function onCloseModalBtnHandler() {
  closeModalWindow();
}

function openModalWindow() {
  modalWindowOverlay.classList.add('active');
}

function closeModalWindow() {
  modalWindowOverlay.classList.remove('active');
}

function onModalOverlayClickHandler(e) {
  if (e.target.classList.contains('active')) {
    closeModalWindow();
  }
}

function onEscClickHandler(e) {
  if (e.code === 'Escape') {
    closeModalWindow();
  }
}
