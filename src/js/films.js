import getData from './getData'

const filmsUrl = '../../data/films.json';
const filmWrapper = document.getElementById('js-film');

getData(filmsUrl).then(({ results }) => {

    const html = results.map(({ title, url, release_date, episode_id, director, opening_crawl }) => {

        return `
            <div class="col-4 mb-5">
                <div class="card">
                
                    <img class="card-img-top" src="./src/images/${episode_id}.jpg" alt="Card image cap">
                    
                    <div class="card-body">
                        <h5 class="card-title js-card-title">${title}</h5>
                        <p class="card-text js-card-description">${opening_crawl}</p>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Director: ${director}
                        </li>
                        <li class="list-group-item">
                            Released Date: ${release_date}
                        </li>
                        <li class="list-group-item">
                            Episode ID: ${episode_id}
                        </li>
                    </ul>
                    
                    <div class="card-body">
                        <a href="./details.html" class="card-link">Details</a>
                    </div>

                </div>
            </div>
        `;
    }).join('');

    filmWrapper.innerHTML = html;
})



    





