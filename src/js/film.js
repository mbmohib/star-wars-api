const detailLinks = document.querySelectorAll('.card-link');
const filmWrapper = document.getElementById('js-film');

document.addEventListener('click', function (event) {
    if (event.target.className === 'card-link') {
        event.preventDefault();
        filmWrapper.style.display = 'none';
    }
});