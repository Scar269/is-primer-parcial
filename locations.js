const url = window.location.search
const urlParams = new URLSearchParams(url)
const id = urlParams.get('id')
const urlAPI = "https://rickandmortyapi.com/api" 

fetch(urlAPI + "/location/" + id)  
    .then(response => response.json())
    .then(location => {
    const locationTemplates = `
        <div id="location">
            <div class="detail">
                <h1 class="yellow">${location.name}</h1>
                <h2 class="gray">type:</h2>
                <p class="yellow">${location.type}</p>
                <h2 class="gray">dimension:</h2>
                <p class="yellow">${location.dimension}</p>
                <h2 class="gray">url:</h2>
                <p class="yellow">${location.url}</p>
                <div>
                    <button><a href="index.html">Inicio</a></button>
                </div>
            </div>
        </div>`
    locationContainer.innerHTML += locationTemplates
    })
    