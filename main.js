const listaItens = []
const form = document.querySelector('[form]')
const formItem = document.querySelector('[form="item"]')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    saveItem()
})

function saveItem() {
    const item = formItem.value
    const checkDuplicado = listaItens.some((element) => element.value.toUpperCase() === item.toUpperCase())

    if (checkDuplicado) {
        alert('esse item já existe')
    } else {
        listaItens.push({ valor: item })
        formItem.value = ''
    }

    console.log(listaItens)
}