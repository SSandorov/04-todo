// Importaciones
import {Todo} from '../classes/index.js';
import {listaTareas} from '../index.js'

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');

// Referencia al evento de añadir una tarea
const txtInput = document.querySelector('.new-todo');

// Referencia al botón de eliminar tareas completadas
const btnBorrar = document.querySelector('.clear-completed');

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

// Evento crear tarea

txtInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && txtInput.value.length > 0) {
        
        // Cuando presionamos enter nos añade el texto al arreglo
        const nuevoTodo = new Todo(txtInput.value);
        listaTareas.nuevoTodo(nuevoTodo);

        // Añadimos el arreglo en el ul
        crearTodoHTML(nuevoTodo);

        // Vaciamos el input
        txtInput.value = '';
    }
});

/*
El keyup nos devuelve muchos valores. Los más importantes para nosotros son:
    - keyCode --> la tecla presionada
    - value --> el valor que está escrito
EStos son los que emplearemos para el evento crear tarea
*/

// Evento marcar como completado y eliminar

divTodoList.addEventListener('click', (event) => {
    // Esta constante devuelve el nombre del elemento que clicamos 
    // Para ver solo el nombre del elemento clicado empleamos localName
    const nombreElementoClick = event.target.localName;
    // input --> tarea completada
    // button --> botón eliminar
    // label --> texto

    // Tenemos que seleccionar el li para poder eliminarlo
    // para ello debemos subir dos niveles con el parentElement
    const todoElemento = event.target.parentElement.parentElement;
    
    // Para poder eliminar la tarea correcta lo vamos a hacer a través del id
    // para ello empleamos el getAttribute para elegir el atributo del elemento
    // HTML que necesitamos
    const todoId = todoElemento.getAttribute('data-id');
    
    // Sabemos que el elemento input es el check de si la tarea está completada o no
    // lo comprobamos con un console.log(nombreElementoClick)
    if(nombreElementoClick.includes('input')) {
        // cambiamos el valor de completado
        listaTareas.marcarCompletado(todoId);

        // creamos la acción de tachado
        todoElemento.classList.toggle('completed');
    }

    // El elemento button es la x de eliminar tarea
    if(nombreElementoClick.includes('button')) {
        // eliminamos la tarea
        listaTareas.eliminarTodo(todoId);

        // el evento lo vemos en el HTML
        divTodoList.removeChild(todoElemento);
    }
});

/*
el click también nos devuelve muchos valores. Los importantes son:
    - target --> señala el elemento que ha sido clicado
*/

btnBorrar.addEventListener('click', () => {

    // Cuando clicamos en el botón nos ejecuta el método eliminarCompletados
    listaTareas.eliminarCompletados();

    // Ahora eliminamos las tareas completadas en el HTML
    // Para ello eliminaremos desde la última posición a la primera, para que 
    // así no surjan problemas con la posición de las tareas, ya que al eliminar una
    // tarea que esté completada la siguiente tarea pasará a la posición anterior, y eso
    // puede acarrear fallos en la ejecución

    // Por esta razón llamamos a la última tarea de la lista dentro del bucle
    for(let i = divTodoList.children.length-1; i>=0; i--) {

        // Añadimos la tarea a una variable
        const elemento = divTodoList.children[i];

        // Comprobamos que tareas están completadas a partir de la clase completed
        // para saber qué tareas serán eliminadas
        if(elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }

        
    }
});