import getData from './getData'

const baseUrl = '../../data/base.json';
const navItem = document.getElementById('js-nav')

getData(baseUrl).then(blob => {

    const html = Object.entries(blob).map(data => {
        return `
            <li class="nav-item">
                <a class="nav-link" href="#">${data[0]}</a>
            </li>
        `
    }).join('');

    navItem.innerHTML = html;
});