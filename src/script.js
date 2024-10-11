const logo = document.querySelector('#logo');

function switchLogo() {
    if (window.innerWidth <= 1024) {
        logo.src = '../public/assets/svg/airbnblogo.svg';
    }
    else {
        logo.src = '../public/assets/svg/airbnblogotext.svg';
    }
}

window.addEventListener('resize', switchLogo);
window.addEventListener('load', switchLogo);