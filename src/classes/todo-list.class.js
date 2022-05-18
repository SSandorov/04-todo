// Clase que maneja la agrupación de tareas

export class TodoList {

    constructor() {
        this.todos = [];
    }

    // Método que se encarga de crear una tarea y añadirla al arreglo
    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    // Método que controla la eliminación de tareas
    eliminarTodo(id) {
        // El filter nos devuelve un nuevo arreglo con los elementos que coincidan 
        // con la condición
        this.todos = this.todos.filter(todo => todo.id != id);
    }

    // Método que controla que tarea está completada y que tarea no lo está
    marcarCompletado(id) {
        for(const todo of this.todos) {
            // comprobamos si son del mismo tipo
            console.log(id, todo.id);
            if(todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    // Método que elimina las tareas completadas
    eliminarCompletados() {
        
    }
}