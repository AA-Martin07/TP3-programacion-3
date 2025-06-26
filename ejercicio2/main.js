const formulario = document.getElementById('buscar-palabra')
const lista = document.getElementById('lista-palabras')
const error = document.getElementById('error')
const boton = formulario.elements.buscar
const palabra = formulario.elements.palabra

const palabras = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'Perú', 'Uruguay', 'Venezuela', "Paraguay"];
mostrarLista(palabras)

function mostrarLista(palabras) {
    lista.innerHTML = '';
    if (palabras.length === 0) {
        lista.innerHTML = "<li>No se encontraron coincidencias.</li>";
        return;
    }
    palabras.forEach(palabra => {
        const li = document.createElement('li');
        li.textContent = palabra;
        lista.appendChild(li);
    });

}
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const palabraBuscada = palabra.value.trim().toLowerCase()
    lista.innerHTML = ''
    if (palabraBuscada === '') {
        error.textContent = 'Por favor, ingresa una palabra.'
        error.style.display = 'block'
        return
    }
    error.textContent = ''
    error.style.display = 'none'
    const palabrasEncontradas = palabras.filter(palabra => palabra.toLowerCase().includes(palabraBuscada))
    mostrarLista(palabrasEncontradas)
})