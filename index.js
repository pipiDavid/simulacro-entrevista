const input = document.getElementById('input')
const searchBtn = document.getElementById('searchBtn')
const information = document.getElementById('informationApi')


async function getCharacters() {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character`)
        const data = await response.json()
        let characters = data.results
        renderCharacters(characters)

    } catch(error) {
        information.innerHTML = '<p>Error al cargar</p>'
        return
    }
}

function renderCharacters(characters) {
    information.innerHTML = ''

    characters.forEach((character) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <p>${character.name}</p>
        <img src=${character.image}>  
        `
        information.appendChild(div)
    })
}

getCharacters()
