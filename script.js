const watchButton = document.querySelector(".watch-btn");

watchButton.addEventListener("click", function () {
    alert("The movie player will be added soon! 🎬");
});


// Make movie cards clickable
const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const movieName = card.querySelector("h3").textContent;

        alert("You selected: " + movieName + " 🎬");

    });

});