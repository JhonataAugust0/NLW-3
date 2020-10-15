//create map

const map = L.map('mapid').setView([-9.6519653, -35.7189765], 16)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreemap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)
    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

// photos upload
function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')
    // Pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // Verificar se o campo está vazio
    const input = newFieldContainer.children[0]
    if (input.value == '')
    {
        return
    }
    // Limpar o campo antes de adicionar ao  container de imagens
    input.value = ''
    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deletField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2){
        span.parentNode.children[0].value = ''
        return
    }
    span.parentNode.remove();
}

// Select yes or no

function toggleSelect(event){
    // Pegar o botão clicado
    document.querySelectorAll('.button-select button ').forEach(button =>
    button.classList.remove('.active')) 
    
    //colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    // Verificar y or n
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value    
}
