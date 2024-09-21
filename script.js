document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const topTrim = document.getElementById('topTrim');
    const images = document.querySelectorAll('.hero-image');
    const featuredItems = document.querySelectorAll('.featured-item');

    // Initially hide header
    header.style.top = '-100px'; 

    // Show header on mouse hover at the top of the page
    window.addEventListener('mousemove', (event) => {
        header.style.top = (event.clientY < 50) ? '0' : '-100px'; // Toggle header visibility
    });

    // Debounce scroll event
    let isScrolling;

    window.addEventListener('scroll', () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            topTrim.style.display = (window.scrollY > 0) ? 'none' : 'block'; // Toggle top trim visibility
        }, 100);
    });

    // Hero Image Slider
    let currentIndex = 0;
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
        const offset = -currentIndex * 100; // Calculate the offset for sliding
        document.querySelector('.hero-images').style.transform = `translateX(${offset}%)`;
    }
    setInterval(showNextImage, 5000);

    // Featured Products Carousel
    let currentIndexFeatured = 0; // Unique variable name for featured products
    function showNextFeaturedItem() {
        featuredItems[currentIndexFeatured].classList.remove('active'); // Hide the current item
        currentIndexFeatured = (currentIndexFeatured + 1) % featuredItems.length; // Move to the next item
        featuredItems[currentIndexFeatured].classList.add('active'); // Show the next item
    }
    setInterval(showNextFeaturedItem, 5000);
});
