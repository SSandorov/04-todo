// Importamos el archivo de estilos global
import './styles.css';

// Importamos la función del archivo componentes JS
// import {Todo} from './classes/todo.class.js';
// IMportamos la función del archivo todo-list JS
// import { TodoList } from './classes/todo-list.class';

// Manera optimizada de importar las clases
import {Todo, TodoList} from './classes/index.js'
import { crearTodoHTML } from './js/componentes.js';

export const listaTareas = new TodoList();

/*
const tarea = new Todo('Aprender JS!!');

listaTareas.nuevoTodo(tarea);

console.log(listaTareas);

crearTodoHTML(tarea);
*/

// Trabajamos con el alamacenamiento de la información para poder guardar las tareas
// aunque cerremos el navegador
/*
Hay dos maneras de trabajar con los datos almacenados en la web
    - localStorage: información que no tiene tiempo de expiración (se guarda en la caché)
    - sessionStorage: información que sólo se mantiene minetras estemos conectados

Hay que tener en cuenta que para el back-end esto no se aplica, ya que deberemos manejar
los datos con una base de datos (mongodb, sql)
*/

// El setItem sólo permite almacenar valores de tipo string
// localStorage.setItem('mi-llave', 'ABC');

// Para borrar un elemento del localStorage podríamos hacer lo siguiente
/*
setTimeout(()=>{
    localStorage.removeItem('mi-llave');
}, 1500);
*/
// Lo tenemos como referencia por si tenemos que emplearlo alguna vez

// Ahora creamos en el HTML las tareas que están guardadas en el localStorage

listaTareas.todos.forEach(todo => crearTodoHTML(todo));

// comprobamos que todas las tareas son instancias de la clase
// console.log('todos', listaTareas.todos);