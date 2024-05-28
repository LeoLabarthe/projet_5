const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    const bannerImg = document.querySelector('.banner-img');
    const bannerTagLine = document.querySelector('#banner p');
    const dotsContainer = document.querySelector('.dots');

    let currentIndex = 0;

    function updateBanner() {
        bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
        bannerTagLine.innerHTML = slides[currentIndex].tagLine;
        updateDots();
    }

    function createDots() {
        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('dot_selected');
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('dot_selected', index === currentIndex);
        });
    }

    const leftArrow = document.querySelector('.arrow_left');
    const rightArrow = document.querySelector('.arrow_right');

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateBanner();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateBanner();
    });

    createDots();
    updateBanner();