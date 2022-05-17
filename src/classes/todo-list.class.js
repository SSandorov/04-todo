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

    }

    // Método que controla que tarea está completada y que tarea no lo está
    marcarCompletado(id) {

    }

    // Método que elimina las tareas completadas
    eliminarCompletados() {
        
    }
}