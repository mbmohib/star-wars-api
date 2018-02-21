import getData from './getData'

const filmsUrl = '../../data/films.json';
const filmWrapper = document.getElementById('js-films');

getData(filmsUrl).then(({ results }) => {

    const html = results.map(({ title, url, release_date, episode_id, director, opening_crawl }) => {

        return `
            <div class="card">
        
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="./src/images/${episode_id}.jpg" alt="Placeholder image">
                    </figure>
                </div>

                <div class="card-content">

                    <div class="media">
        
                        <div class="media-content">
                            <p class="title is-4">${title}</p>
                            <p class="subtitle is-6">${director}</p>
                        </div>

                    </div>

                    <div class="content">
                        <p>${opening_crawl.slice(0, 200)}...</p>
                        <br>
                        <p>Released Date: ${release_date}</p>
                        
                        <p>Episode No: ${episode_id}</p>
                    </div>

                    <footer class="card-footer js-item-link">
                        <a data-url="${url}" class="card-footer-item button is-primary">Details</a>
                    </footer>

                </div>

            </div>
        `;
    }).join('');

    filmWrapper.innerHTML = html;
})



    





