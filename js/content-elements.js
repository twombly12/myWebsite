function head() {
    let head = document.querySelector('head')
    head.innerHTML = `
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    `
}

function header() {
    let header = document.querySelector('header')
    header.innerHTML = `
<nav id="main-menu" class="menu">
            <div>
                <img class="logo" src="assets/Dash Logo Colours-White.svg" href="#" alt="Dash Interactive Logo" />
                <ul class="main-menu">
                    <li><a class="active" href="">About</a></li>
                    <li><a href="">Websites</a></li>
                    <li><a href="">Web Apps</a></li>
                    <li><a href="/logos.html">Logos</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>

                    <label class="switch">
                        <input type="checkbox" value="on">
                        <span class="slider round"></span>
                    </label>
                    <span class="material-symbols-outlined">light_mode</span>
                </ul>
            </div>
        </nav>
        <!--- Mobile -->
        <nav id="mobile-menu" class="menu">
            <div>
                <img class="logo" src="https://d33wubrfki0l68.cloudfront.net/f525bebad8ec45967899542ab37f9756287e1bbf/b31d2/images/logo-light-desktop.png" href="#" alt="Dash Interactive Logo" />
                <span id="hamburger"><span id="toggle"></span></span>
                <ul class="main-menu">
                    <li><a class="active" href="">About</a></li>
                    <li><a href="">Websites</a></li>
                    <li><a href="">Web Apps</a></li>
                    <li><a href="">Logos</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>

                    <label class="switch">
                        <input type="checkbox" value="on">
                        <span class="slider round"></span>
                    </label>
                    <span class="material-symbols-outlined">light_mode</span>
                </ul>
            </div>
        </nav>
        
        `
}


function footer() {
    let footer = document.querySelector('footer')
    footer.innerHTML = `
    <div id="action">
                <div class="section">
                    <img class="logo" src="assets/Dash Logo Colours-White.svg" href="#" alt="Dash Interactive Logo" />
                    <div class="social">
                        <h3>Follow Us</h3>
                        <a href=""><img src="assets/fb.png" alt="social" /></a>
                        <a href=""><img src="assets/insta.png" alt="social" /></a>
                        <a href=""><img src="assets/fb.png" alt="social" /></a>
                        <a href=""><img src="assets/insta.png" alt="social" /></a>
                    </div>
                </div>
            </div>
            <div class="section footer-content">
                <div>
                    <label class="switch">
                            <input type="checkbox" value="on">
                            <span class="slider round"></span>
                        </label>
                    <span class="material-symbols-outlined">light_mode</span>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li><a href="">Websites</a></li>
                        <li><a href="">Web Apps</a></li>
                        <li><a href="">Logos</a></li>
                        <li><a href="">Testimonials</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Info</h3>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <a class="button  color" href="">Get in touch</a>
                </div>
            </div>
            <div id="copyright">
                <span>Copyright © 2021 | Dash Interactive | All Rights Reserved | Terms of Use | Privacy Policy</span>
            </div>
            `
}

function populateOnEveryPage() {
    header()
    footer()
    head()
}