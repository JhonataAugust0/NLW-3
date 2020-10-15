const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


// create map
const map = L.map('mapid', options).setView([-9.6519653, -35.7189765], 16)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreemap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// create and add marker

L.marker([-9.6519653, -35.7189765], { icon }).addTo(map)


/* Image galery */

function selectImage(event) {
    const button = event.currentTarget

    // remover as clases .active
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach((button) => { button.classList.remove('active')})

    // selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img') 
   
    // Atualizar o container da imagem
    imageContainer.src = image.src
   
    // adicionar a .active a este botão
    button.classList.add('active')

}