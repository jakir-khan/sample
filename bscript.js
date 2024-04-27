const brideBtn = document.getElementById('bride-btn');
const groomBtn = document.getElementById('groom-btn');
const content = document.getElementById('content');
const slideshowContainer = document.getElementById('slideshow-container');

const brideImages = [
    'bride1.jpg',
    'bride2.jpg',
    'bride3.jpg'
];

const groomImages = [
    'groom1.jpg',
    'groom41.jpg',
    'groom5.jpg'
];

brideBtn.addEventListener('click', () => {
    showPage('Bride', brideImages, 'Afreen Begum', 22, 'se', 'company');
});

groomBtn.addEventListener('click', () => {
    showPage('Groom', groomImages, 'Riyaz Basha', 27, 'Shef', 'Hotel');
});

function showPage(person, images, name, age, occupation, company) {
    const pageContent = `
    <!-- <h2>${person}'s Page</h2> -->
    <div class="details">
      <h3>Personal Details:</h3>
      <p> <b> Name</b>: ${name}</p>
      <p> <b> Age</b>: ${age}</p>
      <!-- Add more personal details here -->
      <h3>Professional Details:</h3>
      <p> <b> Occupation</b>: ${occupation}</p>
      <p> <b> Company</b>: ${company}</p>
      <!-- Add more professional details here -->
    </div>
  `;
    content.innerHTML = pageContent;

    const slideshow = document.querySelector('.slideshow');
    slideshow.innerHTML = '';
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `${person} Image`;
        // img.style.objectFit = 'contain';
        slideshow.appendChild(img);
    });

    let currentSlide = 0;
    const slides = slideshow.querySelectorAll('img');

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}
