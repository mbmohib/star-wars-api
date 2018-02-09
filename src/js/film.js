const detailLinks = document.querySelectorAll('.card-link');
const filmWrapper = document.getElementById('js-film');


function handleClick() {
    console.log(detailLinks);
    filmWrapper.style.display = none;
}
detailLinks.forEach(link => link.addEventListener('click', handleClick));
