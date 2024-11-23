import axios from 'axios';

const togetherForm = document.querySelector('#contactForm');
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
    const response = await axios.post('/requests', {
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

function openModal() {
  const backdropTogether = document.querySelector('.backdrop-together');
  backdropTogether.classList.add('are-open');
}

const modalClsBtn = document.querySelector('.modal-close-btn');
modalClsBtn.addEventListener('click', closeModal);

function closeModal() {
  const backdropTogether = document.querySelector('.backdrop-together');
  backdropTogether.classList.remove('are-open');
}

function showErrorMessage(message) {
  alert(message);
}
