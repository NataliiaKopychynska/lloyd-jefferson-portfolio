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
  <li class="review-list-order" id = "${review._id}">
            <p class="review-list-text">${review.review}</p>
            <div class="review-list-box">
            <img class="review-list-img" src="${review.avatar_url}" alt="${review.author}">
                <p class="review-list-header">${review.author}</p>
            </div>
        </li>`;
        })
            .join("");
        fetchReview.insertAdjacentHTML("beforeend", markup);
    })
    .catch((error) => console.log(error));

