const container = document.querySelector("#container") //acceder a un selector html para guardarlo en una variable
const url = "https://rickandmortyapi.com/api"

fetch(url + "/character")//consulta informacion
.then(response => response.json()) //se guarda en la variable response y lo cambia a un tipo de datos json
.then(json => {
    const characters = json.results
    characters.forEach(character => {
        const characterTemplate = 
            `<div class="character">
            <a href="character.html?id=${character.id}">
            <img src="${character.image}" alt="">
            <div class="character-detail">
                <h1>${character.name}</h1>
                <h2>${character.status} - ${character.species}</h2></a>
                <p class="gray">Last known location:</p>
                <a href="location.html?id=${character.id}">
                <p class="yellow">${character.location.name}</p></a>
                <p class="gray">First seen in:</p>
                <a href="location.html?id=${character.id}">
                <p class="yellow">${character.origin.name}</p></a>
                </div>
            </a>
            </div>`
        container.innerHTML += characterTemplate
    })
})
