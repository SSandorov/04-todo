// Clase que maneja la agrupación de tareas

export class TodoList {

    constructor() {
        // this.todos = [];
        // creamos la lista a partir del método cargarLocalStorage()
        this.cargarLocalStorage();
    }

    // Método que se encarga de crear una tarea y añadirla al arreglo
    nuevoTodo(todo) {
        this.todos.push(todo);

        // guardamos la tarea en el localStorage
        this.guardarLocalStorage();
    }

    // Método que controla la eliminación de tareas
    eliminarTodo(id) {
        // El filter nos devuelve un nuevo arreglo con los elementos que coincidan 
        // con la condición
        this.todos = this.todos.filter(todo => todo.id != id);


        // Almacenamos las tareas en el localStorage
        this.guardarLocalStorage();
    }

    // Método que controla que tarea está completada y que tarea no lo está
    marcarCompletado(id) {
        for(const todo of this.todos) {
            // comprobamos si son del mismo tipo
            console.log(id, todo.id);
            if(todo.id == id) {
                todo.completado = !todo.completado;
                // guardamos la tarea en el localStorage
                this.guardarLocalStorage();
                break;
            }
        }
    }

    // Método que elimina las tareas completadas
    eliminarCompletados() {
        // Empleamos filter() como en el método eliminarTodo()
        // Necesito filtrar todas las tareas que no estén completadas
        this.todos = this.todos.filter(todo => !todo.completado);

        // guardamos las tareas en el localStorage
        this.guardarLocalStorage();
    }

    // Método para guardar las tareas en el localStorage
    guardarLocalStorage() {
        // Cuando queremos guardar los valores de un objeto en el localStorage, debemos
        // convertir el objeto a un forma JSON, ya que si hiciésemos this.todos.toString()
        // nos devolvería [Object, object], que es la forma string de un objeto
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    // Método para añadir las tareas al localStorage
    cargarLocalStorage() {
        // debemos coger los valores guardados en el localStorage y crear un nuevo listado
        // de tareas con ellos

        // establecemos un condicional para comprobar si existe una tarea
        // if(localStorage.getItem('todo')) {
            /*
            Como tenemos un JSON y lo que necesitamos es un objeto para poder recrear las
            tareas guardadas en memoria, debemos revertir el estado del objeto
            */
            // this.todos = JSON.parse(localStorage.getItem('todo'));
            // console.log('CargarLocal:', this.todos);
        // debemos manejar el caso en el que no existan tareas, ya porque no hay
        // o porque se limpió la caché    
        // } else {
            // sino hay tareas nos devuelve un string vacío
            // this.todos = [];
        // }
        // Escribimos el condicional como un operador ternario
        this.todos = (localStorage.getItem('todo')) 
            ? JSON.parse(localStorage.getItem('todo')) 
            : [];
    }
}