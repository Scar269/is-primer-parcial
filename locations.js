const locationsContainer = document.querySelector("#locationsContainer")
const url = "https://rickandmortyapi.com/api" 

fetch(url + "/location") 
    .then(response => response.json())
    .then(json => {
        const locations = json.results
        locations.forEach(location => {
            const locationsTemplate = `
        <div class="locations">
                <div class="detail">
                <h1>${location.name}</h1>
                <h2 class="gray">type</h2>
                <p class="yellow">${location.type}</p>
                <h2 class="gray">dimension</h2>
                <p class="yellow">${location.dimension}</p>
                <h2 class="gray">url</h2>
                <a href="location.html?id=${location.id}">
                <p class="yellow">${location.url}</p></a>
            </div>
        </div>`
            locationsContainer.innerHTML += locationsTemplate
        })
    })