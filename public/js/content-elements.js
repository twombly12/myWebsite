function head() {
    let head = document.querySelector('head')
    head.innerHTML += `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="icon" type="image/x-icon" href="/assets/dash favicon.png">
    `
}
const menuLinks = {
    'services': `
            <li><a href="/">Home</a></li>
            <li><a href="/websites">Websites</a></li>
            <li class="dropdown">
                <a href="/webapps">Web Apps</a>
                <div class="dropdown-content">
                    <ul>
                        <li><a href="/email-signature-generator">Email Signature Generator</a></li>
                        <li><a href="/qr-code-generator">QR Code Generator</a></li>
                        <li class="hide-link"><a href="/activity-tracker">Activity Tracker</a></li>
                        <li><a href="/webapps">All</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="/logos">Logos</a></li>
            
        `,

    'info': `
            <li><a href="/testimonials">Testimonials</a></li>
            <li class="hide-link"><a class="active" href="/about">About</a></li>
            <li class="hide-link"><a href="/blog">Blog</a></li>
            <li><a href="contact">Contact</a></li>
                    `,
}

function header() {
    let header = document.querySelector('header')
    header.innerHTML = `
        <nav id="main-menu" class="menu">
            <div>
                <a class="logo" href="/"><img  src="/assets/Dash Logo Colours-White.svg" href="#" alt="Dash Interactive Logo" /></a>
                <ul class="main-menu">
                    ${menuLinks.services}
                    ${menuLinks.info}
                    <label class="switch">
                        <input id='main-toggle' type="checkbox" value="on">
                        
                        <span class="slider round"> <span class="material-symbols-outlined">light_mode</span>   <span class="material-symbols-outlined">dark_mode</span> </span>  
                                              
                    </label>
                    
                </ul>
            </div>
        </nav>
        <!--- Mobile -->
        <nav id="mobile-menu" class="menu">
            <div>
                <img class="logo" src="/assets/Dash Logo Colours-White.svg" href="#" alt="Dash Interactive Logo" />
                <span id="hamburger"><span id="toggle"></span></span>
                <ul class="main-menu">
                    ${menuLinks.services}
                    ${menuLinks.info}

                    <label class="switch">
                        <input id='mobile-toggle' type="checkbox" value="on">
                        
                        <span class="slider round"> <span class="material-symbols-outlined">light_mode</span>   <span class="material-symbols-outlined">dark_mode</span> </span>  
                                              
                    </label>
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
                    <a href="/" class="logo"><img src="/assets/Dash Logo Colours-White.svg" href="#" alt="Dash Interactive Logo" /></a>
                    <div class="social hide">
                        <h3>Follow Us</h3>
                        <a href=""><img src="/assets/fb.png" alt="social" /></a>
                        <a href=""><img src="/assets/insta.png" alt="social" /></a>
                        <a href=""><img src="/assets/fb.png" alt="social" /></a>
                        <a href=""><img src="/assets/insta.png" alt="social" /></a>
                    </div>
                </div>
            </div>
            <div class="section footer-content">
                <div>
                <label class="switch">
                <input id='footer-toggle' type="checkbox" value="on">
                
                <span class="slider round"> <span class="material-symbols-outlined">light_mode</span>   <span class="material-symbols-outlined">dark_mode</span> </span>  
                                      
            </label>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                    ${menuLinks.services}
                    </ul>
                </div>
                <div>
                    <h3>Info</h3>
                    <ul>
                        ${menuLinks.info}
                    </ul>
                </div>
                <div>
                    <a class="button  color" href="/contact">Get in touch</a>
                </div>
            </div>
            <div id="copyright">
                <span>Copyright © ${new Date().getFullYear()} | Dash Interactive | All Rights Reserved | Terms of Use | Privacy Policy</span>
            </div>
            `
}

function populateOnEveryPage() {
    header()
    footer()
    head()
}