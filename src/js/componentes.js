// Importamos la hoja de estilos para cambiar los estilos de forma dinámica
import '../css/componentes.css';
// Importamos una imagen
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {
    console.log('Creando etiqueta H1');

    const h1 = document.createElement('H1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);

    // Añadimos la imagen
    /*
    const img1 = document.createElement('img');
    img1.src = webpacklogo;
    document.body.append(img1);
    */
}