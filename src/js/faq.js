import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener("DOMContentLoaded", () => {
  const accordion = new Accordion("#faqAccordion", {
    duration: 300, 
    showMultiple: false, 
    collapseOthers: true, 
    openOnInit: [0], 
  });


  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((el, i) => {
        const arrowUp = el.querySelector(".icon-arrow-top");
        const arrowDown = el.querySelector(".icon-arrow-bottom");
        const answer = el.querySelector(".faq-answer");

        if (el !== item) {
          el.classList.remove("active");
          arrowUp.style.display = "none";
          arrowDown.style.display = "inline-block";
          answer.style.display = "none";
        }
      });

      const arrowUp = item.querySelector(".icon-arrow-top");
      const arrowDown = item.querySelector(".icon-arrow-bottom");
      const answer = item.querySelector(".faq-answer");

      if (item.classList.contains("active")) {
        item.classList.remove("active");
        arrowUp.style.display = "none";
        arrowDown.style.display = "inline-block";
        answer.style.display = "none";
      } else {
        item.classList.add("active");
        arrowUp.style.display = "inline-block";
        arrowDown.style.display = "none";
        answer.style.display = "block";
      }

   });
 });
});



