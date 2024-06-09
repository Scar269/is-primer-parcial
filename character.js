const url = window.location.search
const urlParams = new URLSearchParams(url)
const id = urlParams.get('id')
const urlAPI = "https://rickandmortyapi.com/api"

fetch(urlAPI + "/character/" + id)//consulta informacion
.then(response => response.json()) //se guarda en la variable response y lo cambia a un tipo de datos json
.then(character => {
        const characterTemplate = `
            <div id="character">
                <img src="${character.image}" alt="">
                <div class="detail">
                    <h1 class="yellow">${character.name}</h1>
                    <h2>${character.status} - ${character.species}</h2>
                    <p class="gray">Last known location:</p>
                    <a href="locations.html?id=${character.id}">
                    <p class="yellow">${character.origin.name}</p></a>
                    <p class="gray">First seen in:</p>
                    <a href="locations.html?id=${character.id}">
                    <p class="yellow">${character.location.name}</p></a>
                </div>
            </div>`
        characterContainer.innerHTML += characterTemplate
})
