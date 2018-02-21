import getData from './getData'

const detailLinks = document.querySelectorAll('.js-item-link');
const filmsWrapper = document.getElementById('js-films');
const filmWrapper = document.getElementById('js-film');
 
document.addEventListener('click', function (event) {

    if (event.target.parentNode.className.includes('js-item-link')) {

        event.preventDefault();
        filmsWrapper.style.display = 'none';

        let characters;
        let filmDetails = [];

        getData(event.target.dataset.url)
            .then( data => {

                filmDetails.push(...data);
                
                characters = data.characters.map(character => {
                    //Fetch data on charecter details & make html
                    getData(character).then(data => {
                        return `
                            <tr>
                                <td>${data.name}</td>
                            </tr>
                        `
                    });
                });
                
            })
            .then(() => {
                console.log(filmDetails)
                console.log('Charecters : ')
                console.log(characters)
            })

            // .then(characters => {
            //     console.log(characters);
            //     // const html = `
            //     //     <div class="columns is-vcentered has-text-centered">
            //     //         <div class="column is-5">
            //     //             <figure class="image is-4by3">
            //     //                 <img src="./src/images/${data.episode_id}.jpg" alt="Description">
            //     //             </figure>
            //     //         </div>
                        
            //     //         <div class="column is-6 is-offset-1">
            //     //             <h1 class="title is-2">
            //     //                 ${data.title}
            //     //             </h1>
            //     //             <h2 class="subtitle is-4">
            //     //                 ${data.opening_crawl}
            //     //             </h2>
            //     //             <br>

            //     //             <table class="table">
            //     //                 <thead>
            //     //                     <tr>
            //     //                         <th>Name</th>
            //     //                         <th>Details</th>
            //     //                     </tr>
            //     //                 </thead>
            //     //                 <tbody>
            //     //                     ${characters}
            //     //                 </tbody>
            //     //             </table>
            //     //         </div>

            //     //     </div>
            //     // `;

            //     // filmWrapper.innerHTML = html;
            // })

    }

});