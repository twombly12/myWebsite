/* ----------------------------------------------- Sticky Header ----------------------------------------------- */
window.addEventListener('scroll', function() {
    var main = document.querySelector('#main-menu');
    var mobile = document.querySelector('#mobile-menu');
    main.classList.toggle('sticky', window.scrollY > 0);
    mobile.classList.toggle('sticky', window.scrollY > 0);

    if (Array.from(main.classList).includes('sticky')) {
        document.querySelector('#main-menu div img').src = 'assets/Dash Logo Colours-purple.svg';
    } else {
        document.querySelector('#main-menu div img').src = 'assets/Dash Logo Colours-White.svg';
    }

    if (Array.from(main.classList).includes('sticky')) {
        document.querySelector('#mobile-menu div img').src = 'assets/Dash Logo Colours-purple.svg';
    } else {
        document.querySelector('#mobile-menu div img').src = 'assets/Dash Logo Colours-White.svg';
    }
});
/* ----------------------------------------------- Mobile Menu ----------------------------------------------- */
function toggleMobileMenu() {
    let hamburger = document.getElementById('hamburger')
    hamburger.classList.toggle('open')
}
document.getElementById('hamburger').addEventListener('click', toggleMobileMenu)
    /* ----------------------------------------------- Main Menu Current Page ----------------------------------------------- */
function activePage() {
    let currentPage = window.location.href;
    let menuLinks = document.querySelectorAll('#main-menu li a')
    menuLinks.forEach(element => {
        element.classList.remove('active')
        if (element.href === currentPage) {
            element.classList.add('active')
        }
    })

}
activePage()
    /* ----------------------------------------------- Dark Mode ----------------------------------------------- */
    // What is Dark Mode Choice
let isDark = 'no';

// Add Dark Mode Choice to Local Storage
function addToLocalStorage() {
    localStorage.setItem("isDark", JSON.stringify(isDark));
}

// Get Current Dark Mode Choice
function retrieveLocalStorage() {
    isDark = JSON.parse(localStorage.getItem("isDark"));
    return isDark;
}

function darkMode() {
    // Get all switches
    const isChecked = document.querySelectorAll('.switch input')

    // Convert switches to Array
    const ischeckedArray = Array.from(isChecked)

    // Get all switch Id's
    const toggleIds = ischeckedArray.map(element => {
        return element.id
    })

    // Find index of clicked switch Id
    const toggleClicked = toggleIds.findIndex(element => element == this.id)

    // Remove clicked switch from Array
    toggleIds.splice(toggleClicked, 1)

    const pageElements = document.querySelectorAll('.day')

    if (this.checked == true) {
        // Toggle non-clicked switches as well
        toggleIds.forEach(element => {
                const uncheckedSwitch = document.querySelector(`input#${element}`)
                uncheckedSwitch.checked = true

            })
            // Add dark mode
        pageElements.forEach(element => {
            element.classList.add('night')
        })
        isDark = 'yes';
        addToLocalStorage()

    } else {
        // Toggle non-clicked switches as well
        toggleIds.forEach(element => {
                const uncheckedSwitch = document.querySelector(`input#${element}`)
                uncheckedSwitch.checked = false

            })
            // remove dark mode
        pageElements.forEach(element => {
            element.classList.remove('night')
        })
        isDark = 'no';
        addToLocalStorage()
    }
}

function keepDarkMode() {
    retrieveLocalStorage()
    if (isDark === 'yes') {
        console.log('clicked');

        // Get all switches
        const isChecked = document.querySelectorAll('.switch input')

        // Convert switches to Array
        const ischeckedArray = Array.from(isChecked)

        // Get all switch Id's
        const toggleIds = ischeckedArray.map(element => {
            return element.id
        })
        const pageElements = document.querySelectorAll('.day')
            // Toggle non-clicked switches as well
        toggleIds.forEach(element => {
                const uncheckedSwitch = document.querySelector(`input#${element}`)
                uncheckedSwitch.checked = true

            })
            // Add dark mode
        pageElements.forEach(element => {
            element.classList.add('night')
        })


    }
}

const darkModeListener = (() => {
    document.querySelectorAll('.switch input').forEach(element => {
        element.addEventListener('click', darkMode);
    })
    keepDarkMode()

})()


/* ----------------------------------------------- Slider ----------------------------------------------- */
function moveSlider() {
    let dots = document.querySelectorAll('.slider-dot-control')
    dots.forEach(element => {
        element.classList.remove('active')
    })
    event.target.classList.add('active')
    let slides = document.querySelectorAll('.slides')
    slides.forEach(element => {
        element.classList.remove('active')
    })
    slides[Array.from(dots).indexOf(event.target)].classList.add('active')
}

function addSliderDots() {
    let dotCount = document.querySelectorAll('.testimonial')
    if (dotCount.length > 0) {
        let dotContainer = document.querySelector('.slider-dots')
        for (i = 0; i < dotCount.length; i++) {
            const el = document.createElement('span')
            el.classList.add('slider-dot-control')
            dotContainer.appendChild(el)
        }
        let dots = document.querySelectorAll('.slider-dot-control')
        dots[0].classList.add('active')
        dots.forEach(element => {
            element.addEventListener('click', moveSlider)
        })
    }

}


addSliderDots()
    /* ----------------------------------------------- Web App Toggle ----------------------------------------------- */
function changeActiveWebApp() {
    let toggles = document.querySelectorAll('.webApp-toggle')
    toggles.forEach(element => {
        element.classList.remove('active')
    })
    event.target.closest('.webApp-toggle').classList.add('active')
    let arr = Array.from(toggles)
    let appIndex = arr.indexOf(event.target.closest('.webApp-toggle'))

    let image = document.querySelectorAll('.webApp-content')
    image.forEach(element => {
        element.classList.remove('active')
    })
    image[appIndex].classList.add('active')

}

function webAppToggle() {
    let toggles = document.querySelectorAll('.webApp-toggle')
    toggles.forEach(element => {
        element.addEventListener('click', changeActiveWebApp)
    })
}
webAppToggle()
    /* ----------------------------------------------- Websites Page Image LightBox ----------------------------------------------- */
const imageLightBox = (() => {
    const websiteImages = document.querySelectorAll('.web-page')
    const lightBox = document.querySelector('#image-lightbox')
    const docBody = document.querySelector('body')

    const openImage = function() {
        lightBox.classList.toggle('active');
        docBody.classList.toggle('active');

        let img = this.querySelector('img').getAttribute('src');
        img = img.split('')
        img.splice(16, 0, '/large-images')
        img.splice(-9, 5)
        img = img.join('')

        let lightBoxImg = document.querySelector('#image-display img')
        lightBoxImg.src = img
    }
    websiteImages.forEach(element => {
            element.addEventListener('click', openImage)
        })
        // Close lightBox with "X"
    const closeLightBox = function() {
        const closeBtn = document.querySelector('#image-lightbox span')
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                lightBox.classList.toggle('active');
                docBody.classList.toggle('active');
            })
        }
    }()

    // Close LightBox with "Esc"
    document.addEventListener('keydown', function(e) {
        if (lightBox) {
            switch (e.keyCode) {
                case 37:
                    filterFunctions.changeSlides('left')
                    break;
                case 39:
                    filterFunctions.changeSlides('right')
                    break;
                case 27:
                    lightBox.classList.remove('active');
                    docBody.classList.remove('active');
                    break;
            }
        }
    });

    // Close LightBox by clicking outside of it
    if (lightBox) {
        lightBox.addEventListener('click', (event) => {
            lightBox.classList.remove('active');
            docBody.classList.remove('active');
        })
    }

})()


/* ----------------------------------------------- Mouse Typing ----------------------------------------------- */
const mouseTyping = (() => {

    const replaceSentence = document.getElementById('sentence')
    if (replaceSentence) {
        async function typeSentence(sentence, delay = 100) {
            const letters = sentence.split("");
            let i = 0;
            while (i < letters.length) {
                await waitForMs(delay);
                replaceSentence.append(letters[i]);
                i++
            }
            return;
        }


        function waitForMs(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }

        async function deleteSentence() {
            const sentence = replaceSentence.innerHTML
            const letters = sentence.split("");
            let i = 0;
            while (letters.length > 0) {
                await waitForMs(100);
                letters.pop();
                replaceSentence.innerHTML = (letters.join(""));
            }
        }
        const carouselText = [
            { text: "Front End Development", color: "red" },
            { text: "Web App Development", color: "red" },
            { text: "Web Design", color: "orange" },
            { text: "Logo Design", color: "yellow" }
        ]

        async function carousel(carouselList) {
            var i = 0;
            while (true) {
                // updateFontColor(eleRef, carouselList[i].color)
                await typeSentence(carouselList[i].text);
                await waitForMs(1500);
                await deleteSentence(carouselText);
                await waitForMs(500);
                i++
                if (i >= carouselList.length) { i = 0; }
            }
        }

        // function updateFontColor(color) {
        //     replaceSentence.css('color', color);
        // }
        carousel(carouselText)
    }

})()