import getData from './getData'

const baseUrl = '../../data/base.json';
const navItem = document.getElementById('js-nav')

getData(baseUrl).then(blob => {

    const html = Object.entries(blob).map(data => {
        return `
            <a class="navbar-item">
                ${data[0]}
            </a>
        `
    }).join('');

    navItem.innerHTML = html;
});