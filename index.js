import{S as c}from"./assets/vendor-Cpl449-h.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const l=new c(".swiper",{navigation:{nextEl:".swiper-button-n",prevEl:".swiper-button-p"},pagination:{el:".swiper-pagination"},spaceBetween:10,reachBeginning:".swiper-button-p",keyboard:{enabled:!0,onlyInViewport:!0},autoHeight:!0,breakpoints:{1280:{slidesPerView:2,spaceBetween:32}}});l.on("reachEnd",function(){let e=document.querySelector(".swiper-button-n");e.style.border="1px solid #e4e5e6",e.style.pointerEvents="none";let r=document.querySelector(".btn-icon-n");r.style.stroke="#e4e5e6"});l.on("reachBeginning",function(){let e=document.querySelector(".swiper-button-p");e.style.border="1px solid #e4e5e6",e.style.pointerEvents="none";let r=document.querySelector(".btn-icon-p");r.style.stroke="#e4e5e6"});l.on("fromEdge",function(){let e=document.querySelector(".swiper-button-n");e.style.display="flex",e.style.border="1px solid #292929",e.style.pointerEvents="auto";let r=document.querySelector(".btn-icon-n");r.style.stroke="#292929";let n=document.querySelector(".swiper-button-p");n.style.display="flex",n.style.border="1px solid #292929",n.style.pointerEvents="auto";let i=document.querySelector(".btn-icon-p");i.style.stroke="#292929"});const d=document.querySelector(".review-list");fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const r=e.map(n=>`
  <li class="review-list-order swiper-slide" id = "id_${n._id}">
  <div class="list-order-container">          
  <p class="review-list-text">${n.review}</p>
            <div class="review-list-box">
            <img class="review-list-img" src="${n.avatar_url}" alt="${n.author}">
                <p class="review-list-header">${n.author}</p>
                </div>
            </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",r)}).catch(e=>console.log(e));document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".load-more"),r=document.querySelectorAll(".project-item[hidden]"),n=document.querySelector(".project-item:not([hidden])");let i=0;const t=3;e.addEventListener("click",()=>{for(let o=i;o<i+t&&o<r.length;o++)r[o].removeAttribute("hidden");if(i+=t,n){const o=n.getBoundingClientRect().height;window.scrollBy({left:0,top:o,behavior:"smooth"})}e.blur(),i>=r.length&&(e.style.display="none")})});
//# sourceMappingURL=index.js.map
