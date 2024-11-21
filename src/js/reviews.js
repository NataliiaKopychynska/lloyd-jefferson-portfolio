import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
navigation: {
    nextEl: '.swiper-button-n',
    prevEl: '.swiper-button-p',
  },
 pagination: {
    el: '.swiper-pagination',
    },   
  spaceBetween: 10,
 reachBeginning: '.swiper-button-p',
    keyboard: {
        enabled: true,
        // pageUpDown: true,
        onlyInViewport: true,
    },
    autoHeight: true,
    // height: 332,
    // swiperHeight: 332,
    breakpoints: {
        1280: {
            slidesPerView: 2,
            spaceBetween: 32,
        }
    } 
}
);

swiper.on('reachEnd', function() {
    swjsNext.style.border = '1px solid #e4e5e6';
    swjsNext.style.pointerEvents = 'none';
});

swiper.on('reachBeginning', function() {
    var swjsPrev = document.querySelector('.swiper-button-p');
    swjsPrev.style.border = '1px solid #e4e5e6';
    swjsPrev.style.pointerEvents = 'none';
});


swiper.on('fromEdge', function() {
    var swjsNext = document.querySelector('.swiper-button-n');
    swjsNext.style.display = 'flex';
    swjsNext.style.border = '1px solid #292929';
    swjsNext.style.pointerEvents = 'auto';
    var swjsPrev = document.querySelector('.swiper-button-p');
    swjsPrev.style.display = 'flex'; 
    swjsPrev.style.border = '1px solid #292929';
    swjsPrev.style.pointerEvents = 'auto';
});

const fetchReview = document.querySelector(".review-list");
    fetch("https://portfolio-js.b.goit.study/api/reviews")
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((reviews) => {
            const markup = reviews.map((review) => {
                return `
  <li class="review-list-order swiper-slide" id = "id_${review._id}">
  <div class="list-order-container">          
  <p class="review-list-text">${review.review}</p>
            <div class="review-list-box">
            <img class="review-list-img" src="${review.avatar_url}" alt="${review.author}">
                <p class="review-list-header">${review.author}</p>
                </div>
            </div>
        </li>`;
            }) 
                .join("");
            fetchReview.insertAdjacentHTML("beforeend", markup);
        })
        .catch((error) => console.log(error));