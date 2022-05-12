export class Todo {

    constructor(tarea) {
        // La tarea que quereamos añadir a la lista
        this.tarea = tarea;

        // Un identificador único basado en el momento en el que es creado
        this.id = new Date().getTime(); // 1287490873

        // Cuando se crean las tareas no están completadas por defecto
        this.completado = false;

        // La fecha de creación de la tarea
        this.creado = new Date();
    }

}