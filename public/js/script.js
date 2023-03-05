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

        console.log(currentPage)

        element.classList.remove('active')
        if (element.href === currentPage) {
            element.classList.add('active')
        }
    })

}
activePage()
    /* ----------------------------------------------- Dark Mode ----------------------------------------------- */
function darkMode() {
    let isChecked = document.querySelector('.switch input').checked
    let elements = document.querySelectorAll('.day')
    if (isChecked) {
        elements.forEach(element => {
            element.classList.add('night')
        })
    } else {
        elements.forEach(element => {
            element.classList.remove('night')
        })
    }
}
document.querySelector('.switch').addEventListener('click', darkMode);
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

/* ----------------------------------------------- Mouse Typing ----------------------------------------------- */
async function typeSentence(sentence, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        document.getElementById('sentence').append(letters[i]);
        i++
    }
    return;
}


function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence() {
    const sentence = document.getElementById('sentence').innerHTML
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        document.getElementById('sentence').innerHTML = (letters.join(""));
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
//     document.getElementById('sentence').css('color', color);
// }
carousel(carouselText)