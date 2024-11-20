import"./assets/vendor-CsMCLY2v.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n=document.querySelector(".review-list");fetch("https://portfolio-js.b.goit.study/api/reviews").then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const i=r.map(o=>`
  <li class="review-list-order" id = "${o._id}">
            <p class="review-list-text">${o.review}</p>
            <div class="review-list-box">
            <img class="review-list-img" src="${o.avatar_url}" alt="${o.author}">
                <p class="review-list-header">${o.author}</p>
            </div>
        </li>`).join("");n.insertAdjacentHTML("beforeend",i)}).catch(r=>console.log(r));
//# sourceMappingURL=index.js.map
