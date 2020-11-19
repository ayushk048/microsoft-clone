const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-menu');

btn.addEventListener('click', () => {
    nav.classList.toggle('show');
    if (nav.classList.contains('show')) {
        btn.innerHTML = '<i class="fa fa-times fa-2x" aria-hidden="true"></i>';
    } else {
        btn.innerHTML = '<i class="fa fa-bars fa-2x" aria-hidden="true"></i>';
    }
})
