// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');

// Creamos un método que nos añade las distintas tareas en forma de HTML
export const crearTodoHTML = (todo) => {
    // Constante que maneja la creación de la tarea a partir de la clase todo
    const tareaHTML = 
    `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    // Creamos el contenedor que almacena los elementos li
    const divTodo = document.createElement('div');
    // Añadimos los elementos li creados dentro del contenedor
    divTodo.innerHTML = tareaHTML;

    // Añadimos el contenedor con la lista de tareas al ul .todo-list del index.html
    // Ponemos el firstElementChild para que no sea un contenedor dentro de un ul, sino que
    // sea un li. Es por buenas prácticas del HTML
    divTodoList.append(divTodo.firstElementChild);

    // La función nos devuelve el contenedor
    return divTodo;
}