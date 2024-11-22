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
reachEnd:'.swiper-button-n',
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
    let swjsNext = document.querySelector('.swiper-button-n');
    swjsNext.style.border = '1px solid #e4e5e6';
    swjsNext.style.pointerEvents = 'none';
    let btnIconN = document.querySelector('.btn-icon-n');
    btnIconN.style.stroke = '#e4e5e6';
    // let swjsPrevH = document.querySelector('.swiper-button-n:hover');
    // swjsPrevH.style.backgroundColor = '#f0f0f0';
});

swiper.on('reachBeginning', function() {
    let swjsPrev = document.querySelector('.swiper-button-p');
    swjsPrev.style.border = '1px solid #e4e5e6';
    swjsPrev.style.pointerEvents = 'none';
    let btnIconP = document.querySelector('.btn-icon-p');
    btnIconP.style.stroke = '#e4e5e6';
    // let swjsPrevP = document.querySelector('.swiper-button-p:hover');
    // swjsPrevP.style.backgroundColor = '#f0f0f0';
});

swiper.on('fromEdge', function() {
    let swjsNext = document.querySelector('.swiper-button-n');
    swjsNext.style.display = 'flex';
    swjsNext.style.border = '1px solid #292929';
    swjsNext.style.pointerEvents = 'auto';
    let btnIconN = document.querySelector('.btn-icon-n');
    btnIconN.style.stroke = '#292929';
    //  let swjsPrevH = document.querySelector('.swiper-button-n:hover');
    // swjsPrevH.style.backgroundColor = '#bbbbbb';
    let swjsPrev = document.querySelector('.swiper-button-p');
    swjsPrev.style.display = 'flex'; 
    swjsPrev.style.border = '1px solid #292929';
    swjsPrev.style.pointerEvents = 'auto';
    let btnIconP = document.querySelector('.btn-icon-p');
    btnIconP.style.stroke = '#292929';
    //  let swjsPrevP = document.querySelector('.swiper-button-p:hover');
    // swjsPrevP.style.backgroundColor = '#bbbbbb';
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