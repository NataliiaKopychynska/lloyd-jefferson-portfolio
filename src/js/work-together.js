import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const togetherForm = document.querySelector('#contactForm');
const backdropTogether = document.querySelector('.backdrop-together');
const noScroll = document.querySelector('body');

if (togetherForm) {
  togetherForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

    const form = event.target;
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!email || !message) {
      showErrorMessage('Please fill in all the fields.');
      return;
    }

    try {
      await axios.post('/requests', {
        email,
        comment: message,
      });

      openModal();
      form.reset();
    } catch (error) {
      console.error('Помилка:', error);
      const errorMessage =
        error.response?.data?.message ||
        'An unexpected error occurred. Please try again.';
      showErrorMessage(errorMessage);
    }
  });
}

function handleEscapePress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function openModal() {
  if (backdropTogether) {
    backdropTogether.classList.add('are-open');
    noScroll.classList.add('no-scroll');
    document.addEventListener('keydown', handleEscapePress);
  }
}

const modalClsBtn = document.querySelector('.modal-close-btn');
if (modalClsBtn) {
  modalClsBtn.addEventListener('click', closeModal);
}

function closeModal() {
  backdropTogether.classList.remove('are-open');
  noScroll.classList.remove('no-scroll');
  document.removeEventListener('keydown', handleEscapePress);
}

if (backdropTogether) {
  backdropTogether.addEventListener('click', event => {
    if (event.target === backdropTogether) {
      closeModal();
    }
  });
}

function showErrorMessage(message) {
  iziToast.error({
    title: 'Opps, Error',
    message: 'Try again later',
    timeout: 5000,
  });
}
