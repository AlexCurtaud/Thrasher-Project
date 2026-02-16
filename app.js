console.log(window.document)
const currentDiv = document.querySelector('#feed-container')


// function addNavigation() {
//     const nav = document.createElement('nav')
//     const div
//     const newContent = document.createTextNode('Hello World')
//     nav.appendChild(newContent)
//     document.body.insertBefore(nav, currentDiv)
// }

//addElement()

const newDiv = document.createElement('div')
document.body.insertBefore(newDiv, currentDiv)
newDiv.className = 'd-flex w-full justify-even'


const articles = [
    { id: 1, photo: 'assets/img/t_shirt_thrasher_1.webp', titre: 'T-Shirt Thrasher Logo Flamme', prix: '39.99€', lien: "https://shop.thrashermagazine.com/collections/t-shirts/products/flame-vintage-t-shirt-black?variant=50407011778877" },
    { id: 2, photo: 'assets/img/t_shirt_thrasher_2.webp', titre: 'T-Shirt Thrasher Logo Blanc', prix: '39.99€', lien: "https://shop.thrashermagazine.com/products/mag-logo-vintage-t-shirt-black?variant=50407017447741" }
]



function createArticle(article) {
    const divProduit = document.createElement('div')
    divProduit.className = 'd-flex justify-center flex-col text-center'
    const lienProduit = document.createElement('a')
    lienProduit.href = article.lien
    const photoProduit = document.createElement('img')
    photoProduit.src = article.photo
    photoProduit.id = article.id
    photoProduit.className = 'w-75 h-auto'
    const descriptionProduit = document.createElement('p')
    descriptionProduit.innerText = article.titre
    const prixProduit = document.createElement('p')
    prixProduit.innerText = article.prix
    lienProduit.appendChild(photoProduit)
    lienProduit.appendChild(descriptionProduit)
    lienProduit.appendChild(prixProduit)
    divProduit.appendChild(lienProduit)
    newDiv.appendChild(divProduit)
}


for (let i = 0; i < articles.length; i++) {
    createArticle(articles[i])
}

