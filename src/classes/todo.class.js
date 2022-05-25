export class Todo {

    /*
    El JSON.parse nos devuelve un objeto, no una instancia de la clase, por lo que
    si tenemos un método asociado a la clase no vamos a poder emplearlo cuando se
    reconstruyan las tareas.
    Para arreglarlo creamos el siguiente método estático
    */
                    // Objeto desestructurado
   static fromJson({id, tarea, completado, creado}) {
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
   }

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