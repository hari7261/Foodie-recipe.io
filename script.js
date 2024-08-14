// document.addEventListener("DOMContentLoaded", function() {
//     // Get references to the loader and main content
//     const loader = document.getElementById('loader');
//     const mainContent = document.getElementById('main-content');

//     // Ensure the loader is visible initially
//     loader.style.display = 'flex';

//     // Hide the loader and show the main content after 3 seconds
//     setTimeout(function() {
//         loader.style.display = 'none';
//         mainContent.style.display = 'block';
//     }, 3000); // 3000 milliseconds = 3 seconds
// });

// Recipe Search Functionality
document.getElementById('searchInput').addEventListener('input', function() {
    var query = this.value.toLowerCase();
    var recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(function(card) {
        var title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

// Ensure Bootstrap's carousel functionality is enabled
document.addEventListener('DOMContentLoaded', function () {
    var carouselElement = document.querySelector('#chefCarousel');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 5000, // Set to 5000 ms for 5 seconds, adjust as needed
        ride: 'carousel'
    });
});


