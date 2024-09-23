const topbotton = document.querySelector('#top-botton');

const topBottomAppear = () => {
    // スクロール量
    const scrolled = window.scrollY;
    console.log(scrolled + "px")
    if(scrolled >= 700){
        topbotton.style.visibility = 'visible';
    }else {
        topbotton.style.visibility = 'hidden';
    }
};

window.addEventListener('scroll', topBottomAppear);

const mobileHeader = document.querySelector('#mobile-header');
const grayCover = document.querySelector('#gray-cover');
const hamburgerBotton = document.querySelector('#hamburger-botton');
const fixedNav = document.querySelector('#fixed-nav');

const hamburgerAction = () => {
    mobileHeader.classList.toggle('active');
    grayCover.classList.toggle('active');
    hamburgerBotton.classList.toggle('active');
    fixedNav.classList.toggle('active');
};

hamburgerBotton.addEventListener('click', hamburgerAction);
