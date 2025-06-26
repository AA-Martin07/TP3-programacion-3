const div = document.getElementById('contenedor')
const getTareas = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const tareas = await res.json()

    const tareasRealizadas = tareas.filter((tarea) => tarea.completed)

    tareasRealizadas.forEach(completa => {
        const lista = document.createElement('ul')
        const tarea = document.createElement('li')
        tarea.className = 'tareas-completadas'
        tarea.innerHTML = `
        ID: ${completa.userId}
        <br><br>
        Titulo: ${completa.title},
        <br>
        Tarea: <span style="color: green;">completada</span>
        `
        lista.appendChild(tarea)
        div.appendChild(lista)
    });
}
getTareas()