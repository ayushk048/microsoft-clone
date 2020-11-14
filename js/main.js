const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-menu');

btn.addEventListener('click', () => {
    console.log('click working');
    nav.classList.toggle('show');
})