let currentPage = 1;
const locationsContainer = document.querySelector("#locationsContainer");
const Mas = document.getElementById('Mas'); //botón en el HTML que permitirá cargar más ubicaciones.
const url = "https://rickandmortyapi.com/api/location";

function fetchLocations(page) {
    fetch(`${url}?page=${page}`)//toma el valor de url y page, y los inserta en la posición correspondiente
        .then(response => response.json())
        .then(json => {
            const locations = json.results;
            locations.forEach(location => {
                const locationsTemplate = `
                    <div class="locations">
                        <div class="detail">
                            <h1>${location.name}</h1>
                            <h2 class="gray">Type</h2>
                            <p class="yellow">${location.type}</p>
                            <h2 class="gray">Dimension</h2>
                            <p class="yellow">${location.dimension}</p>
                            <h2 class="gray">URL</h2>
                            <a href="location.html?id=${location.id}">
                                <p class="yellow">${location.url}</p>
                            </a>
                        </div>
                    </div>`;
                locationsContainer.innerHTML += locationsTemplate;
            });
            if (json.info.next) {//si la api tiene mas info, el boton aparece, sino no hay boton
                Mas.style.display = 'block';
            } else {
                Mas.style.display = 'none';
            }
        })
}

Mas.onclick /*función que se ejecutará cada vez que se haga clic en el botón.*/= function() {
    currentPage++;
    fetchLocations(currentPage);//obtener las ubicaciones de la siguiente página.
};

// Llamada inicial a la función fetchLocations
fetchLocations(currentPage);