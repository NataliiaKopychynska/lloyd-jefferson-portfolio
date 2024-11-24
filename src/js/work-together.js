import axios from 'axios';

document
  .getElementById('contactForm')
  .addEventListener('submit', async function (event) {
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
      const response = await axios.post('/requests', {
        email: email,
        message: message,
      });
    } catch (error) {
      console.error('Помилка:', error);
      const errorMessage =
        error.response?.data?.message ||
        'An unexpected error occurred. Please try again.';
      showErrorMessage(errorMessage);
    }
  });

function showModal(message) {
  const modalText = document.querySelector('.together-modal-text');
  modalText.textContent = message;
  openModal();
}

function openModal() {
  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.add('is-open');
}

function closeModal() {
  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.remove('is-open');
}

function showErrorMessage(message) {
  alert(message);
}
