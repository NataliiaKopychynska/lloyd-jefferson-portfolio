import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
        onlyInViewport: true,
    },
    autoHeight: false,
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
});

swiper.on('reachBeginning', function() {
    let swjsPrev = document.querySelector('.swiper-button-p');
    swjsPrev.style.border = '1px solid #e4e5e6';
    swjsPrev.style.pointerEvents = 'none';
    let btnIconP = document.querySelector('.btn-icon-p');
    btnIconP.style.stroke = '#e4e5e6';
});

swiper.on('fromEdge', function() {
    let swjsNext = document.querySelector('.swiper-button-n');
    swjsNext.style.display = 'flex';
    swjsNext.style.border = '1px solid #292929';
    swjsNext.style.pointerEvents = 'auto';
    let btnIconN = document.querySelector('.btn-icon-n');
    btnIconN.style.stroke = '#292929';
    let swjsPrev = document.querySelector('.swiper-button-p');
    swjsPrev.style.display = 'flex'; 
    swjsPrev.style.border = '1px solid #292929';
    swjsPrev.style.pointerEvents = 'auto';
    let btnIconP = document.querySelector('.btn-icon-p');
    btnIconP.style.stroke = '#292929';
});


const fetchReview = document.querySelector(".review-list");
const fetchNotReview = document.querySelector(".review-header");
    fetch("https://portfolio-js.b.goit.study/api/reviews")
        .then((response) => {
            if (!response.ok) {
                const notReviews = ["Not found"];
                const markupNotReviews = notReviews
                    .map((notReviev) => `
                    <p class="review-not-found">${notReviev}</p>
                `)
                .join("");
                fetchNotReview.insertAdjacentHTML("afterend", markupNotReviews);
                throw new Error(response.status);  
            } 
            return response.json();
        })
        .then((response) => {
            const markup = response.map((review) => {
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
        .catch(error => {
             
      iziToast.error({
        title: 'Review not found',
        message: `Error: ${error.message}`,
          color: '#e74a3b',
        //   target: '.swiper-arrow',
        // position:  'bottomRight',
      });
         
    });
