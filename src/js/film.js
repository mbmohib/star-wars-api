import getData from './getData'

const detailLinks = document.querySelectorAll('.js-item-link');
const filmsWrapper = document.getElementById('js-films');
const filmWrapper = document.getElementById('js-film');

document.addEventListener('click', function (event) {

    if (event.target.parentNode.className.includes('js-item-link')) {

        event.preventDefault();
        filmsWrapper.style.display = 'none';

        let charactersDetails = [];
        let filmDetails;
        let charactersDetailsHtml;

        getData(event.target.dataset.url)
            .then(data => {

                filmDetails = data;

                data.characters.map(character => {

                    getData(character)
                        .then(item => {
                            charactersDetails.push(item)
                        })
                        .then(() => {
                            charactersDetailsHtml = charactersDetails.map(charactersDetails => {
                                return `
                                    <tr>
                                        <td>${charactersDetails.name}</td>
                                        <td>${charactersDetails.gender}</td>
                                        <td><a href="${charactersDetails.url}">Click</a></td>
                                    </tr>
                                `
                            }).join('');
                        })
                        .then(() => {
                            const html = `
                                <div class="columns is-vcentered has-text-centered">
                                    <div class="column is-5 align-self-flex-start">
                                        <figure class="image is-4by3">
                                            <img src="./src/images/${filmDetails.episode_id}.jpg" alt="Description">
                                        </figure>
                                    </div>
                                    
                                    <div class="column is-6 is-offset-1">
                                        <h1 class="title is-2">
                                            ${filmDetails.title}
                                        </h1>
                                        <h2 class="subtitle is-4">
                                            ${filmDetails.opening_crawl}
                                        </h2>
                                        <br>

                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Gender</th>
                                                    <th>Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${charactersDetailsHtml}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            `;

                            filmWrapper.innerHTML = html;
                        })
                })
            })
    }

});