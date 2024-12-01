// Background Music Control
const musicToggle = document.querySelector('.music-toggle');
const bgMusic = document.getElementById('bgMusic');
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    } else {
        bgMusic.play();
        musicToggle.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
});

// Hero Carousel
const carouselImages = [
    'images/couple-1.jpg',
    'images/couple-2.jpg',
    'images/couple-3.jpg'
];

let currentImageIndex = 0;
const heroCarousel = document.querySelector('.hero-carousel');

function updateCarousel() {
    heroCarousel.style.backgroundImage = `url(${carouselImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
}

setInterval(updateCarousel, 5000);
updateCarousel();

// Falling Petals Animation
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(petal);

    petal.addEventListener('animationend', () => {
        petal.remove();
    });
}

setInterval(createPetal, 300);

// Photo Upload
const photoUploadForm = document.getElementById('photo-upload-form');

photoUploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your photo upload logic here
    alert('Thank you for sharing your photo and wishes!');
});

// Generate QR Code (You'll need to add a QR code library)
function generateQRCode() {
    // Add QR code generation logic here
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Set the wedding date to March 10, 2025
const weddingDate = new Date('2025-03-10T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update days
    document.getElementById('days-tens').textContent = Math.floor(days / 10);
    document.getElementById('days-ones').textContent = days % 10;

    // Update hours
    document.getElementById('hours-tens').textContent = Math.floor(hours / 10);
    document.getElementById('hours-ones').textContent = hours % 10;

    // Update minutes
    document.getElementById('minutes-tens').textContent = Math.floor(minutes / 10);
    document.getElementById('minutes-ones').textContent = minutes % 10;

    // Update seconds
    document.getElementById('seconds-tens').textContent = Math.floor(seconds / 10);
    document.getElementById('seconds-ones').textContent = seconds % 10;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();

// Enhanced Gallery with Filtering
const galleryItems = [
    { id: 1, category: 'engagement', src: 'path/to/image1.jpg' },
    { id: 2, category: 'prewedding', src: 'path/to/image2.jpg' },
    // Add more items
];

function filterGallery(category) {
    // Add filtering logic here
}

// RSVP Form Handling
document.querySelectorAll('.rsvp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'rsvp-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>RSVP for Our Wedding</h3>
                <form id="rsvp-form">
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email" required>
                    <select required>
                        <option value="">Number of Guests</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <textarea placeholder="Special Requirements"></textarea>
                    <button type="submit">Send RSVP</button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
    });
});

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Preloader
window.addEventListener('load', () => {
    gsap.to('#preloader', {
        duration: 1,
        opacity: 0,
        onComplete: () => {
            document.getElementById('preloader').style.display = 'none';
        }
    });
});

// Hero Animations
gsap.from('.couple-names', {
    opacity: 0,
    y: 30,
    duration: 1.5,
    ease: 'power4.out'
});

// Navbar Animation
gsap.from('[data-gsap="navbar"]', {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

// Story Timeline Animation
const storyItems = gsap.utils.toArray('.story-item');
storyItems.forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
});

// Parallax Effect
gsap.to('.parallax-bg', {
    scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 200
});

// Initialize Vanilla Tilt
VanillaTilt.init(document.querySelectorAll('.event-card'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5
});

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('June 15, 2024 14:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div class="countdown-item" data-aos="fade-up" data-aos-delay="100">
            <div class="countdown-value">${days}</div>
            <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-item" data-aos="fade-up" data-aos-delay="200">
            <div class="countdown-value">${hours}</div>
            <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-item" data-aos="fade-up" data-aos-delay="300">
            <div class="countdown-value">${minutes}</div>
            <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-item" data-aos="fade-up" data-aos-delay="400">
            <div class="countdown-value">${seconds}</div>
            <div class="countdown-label">Seconds</div>
        </div>
    `;
}

setInterval(updateCountdown, 1000); 