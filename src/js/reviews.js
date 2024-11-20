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
    keyboard: {
        enabled: true,
        // pageUpDown: true,
        onlyInViewport: true,
    },
    autoHeight: true,
    height: 332,
    swiperHeight: 332,
    breakpoints: {
        1280: {
            slidesPerView: 2,
            spaceBetween: 32,
        }
    } 
}
);



const fetchReview = document.querySelector(".review-list")
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
  <li class="review-list-order swiper-slide" id = "${review._id}">
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

