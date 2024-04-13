const dropdown = document.querySelector('.dropdown');
const main = document.querySelector('.main');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

main.addEventListener('click', () => {
    dropdown.classList.remove('active');
});