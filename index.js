const container = document.querySelector("#container") //acceder a un selector html para guardarlo en una variable
//container.innerHTML = "" (para borrar el contenido de la variable)
//container.style.backgroundColor='red' (cambiar el css)

const url = "https://rickandmortyapi.com/api"

fetch(url + "/character")//consulta informacion
.then(response => response.json()) //se guarda en la variable response y lo cambia a un tipo de datos json
.then(json => {
    const characters = json.results
    characters.forEach(character => {
        container.innerHTML += character.name
    })
})