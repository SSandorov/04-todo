// Importamos el archivo de estilos global
import './styles.css';

// Importamos la función del archivo componentes JS
// import {Todo} from './classes/todo.class.js';
// IMportamos la función del archivo todo-list JS
// import { TodoList } from './classes/todo-list.class';

// Manera optimizada de importar las clases
import {Todo, TodoList} from './classes/index.js'

const listaTareas = new TodoList();
const tarea = new Todo('Aprender JS');

listaTareas.nuevoTodo(tarea);

console.log(listaTareas);