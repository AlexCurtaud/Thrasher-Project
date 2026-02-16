const myHeaders = new Headers()
myHeaders.append("x-apisports-key", "c7d4788cecbcb1b3c0c886fbac83ab18")

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
}

// const image = [
//     { id: 0, img: 'assets/img/australie.png' },
//     { id: 1, img: 'assets/img/bahrain.jpg' },
//     { id: 2, img: 'assets/img/vietnam.jpg' },
//     { id: 3, img: 'assets/img/chine.jpg' }
// ]

const main = document.querySelector("main")
const allGrandPrix = document.createElement('div')
main.appendChild(allGrandPrix)

function createGP(resp) {
    const grandPrix = document.createElement('div')
    grandPrix.className = 'border mxy-third mtb-5 text-center'
    grandPrix.id = resp.id
    const name = document.createElement('p')
    name.innerText = resp.name
    name.className = 'text-xxl text-shadow text-darkGold mb'
    const locationCountry = document.createElement('p')
    locationCountry.className = "text-l"
    locationCountry.innerText = resp.location.country
    const locationCity = document.createElement('p')
    locationCity.className = "text-l"
    locationCity.innerText = resp.location.city
    grandPrix.appendChild(name)
    grandPrix.appendChild(locationCountry)
    grandPrix.appendChild(locationCity)
    allGrandPrix.appendChild(grandPrix)
}

function createImgGp(image) {
    const photo = document.createElement('img')
    photo.id = image.id
    photo.src = image.image
    photo.className = 'w-full'
    grandPrix.appendChild(photo)
}

fetch("https://v1.formula-1.api-sports.io/competitions", requestOptions)
    .then(response => {
        return response.json()
    })
    .then(json => {
        console.log(json.response)
        for (let i = 0; i < 4; i++) {
            createGP(json.response[i])
        }
    })

fetch("https://v1.formula-1.api-sports.io/circuits", requestOptions)
    .then(response => {
        return response.json()
    })
    .then(json => {
        console.log(json.response)
        for (let i = 0; i < 4; i++) {
            createImgGp(json.response[i])
        }
    })