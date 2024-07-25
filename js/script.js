// script.js

// Lista de mensajes con sus fechas de desbloqueo
const mensajes = [
    { fecha: '2024-06-25', texto: '44 M 💙', img: 'img/love-tulips.gif', mensaje: 'Felices 44 meses mi niña, un mes mas juntos orgullosamente felices trantando de salir adelante, quiero agradecerte por estar ahi para mi siempre y por estar a mi lado, eres mi motor para poder seguir luchando en esta vida y poder salir adelante juntos, por fi cuidate mucho toma agua, recuerda que eres la mejor del mundo y te amo un monton. besitos :*' },
    { fecha: '2024-07-25', texto: '45 M 💙', img: 'img/huge-hands.gif', mensaje: 'Felices 45 meses, mi vida. Un mes más, un día más, una hora más y un segundo más contigo. Cada fragmento de mi vida contigo siempre será lo más bonito de mi vida simple. Te amo mucho más que ayer, pero menos que mañana. Gracias por estar ahí y estar para mí en momentos felices como también tristes. Besitos de felices meses. Que te vaya bonito hoy y disfruta del día. Te amo muchísimo. Te mando un abrazo y un besito. Mua, mua, mua, mua, mua.' },
    { fecha: '2024-08-25', texto: '46 M 💙', img: 'img/blowing-kisses-kisses.gif', mensaje: '' },
    { fecha: '2024-09-25', texto: '47 M 💙', img: 'img/couple-couple-hug.gif', mensaje: '' },
    { fecha: '2024-10-25', texto: '4A 💙', img: 'img/prueba.png', mensaje: '' },
    



    // Agrega más mensajes con sus fechas correspondientes
];

// Obtener el contenedor de mensajes
const contenedorMensajes = document.getElementById('mensajes');

// Obtener la fecha actual
const fechaActual = new Date().toISOString().split('T')[0];

// Crear y agregar los mensajes al contenedor
mensajes.forEach(mensaje => {
    const divMensaje = document.createElement('div');
    const contenedor = document.createElement('div');

    const titulo = document.createElement('h1')
    titulo.textContent = (mensaje.texto);
    const img = document.createElement('img');
    img.src = mensaje.img;
    const texto = document.createElement('p')
    texto.textContent = (mensaje.mensaje)

    divMensaje.classList.add('mensaje');
    img.classList.add('img')
    contenedor.classList.add('contenedorImgYtexto')

    if (fechaActual >= mensaje.fecha) {
        divMensaje.appendChild(titulo);
        divMensaje.appendChild(contenedor);
        contenedor.appendChild(img);
        contenedor.appendChild(texto);




    } else {
        divMensaje.textContent = '⌛ Mensaje disponible a partir del ' + mensaje.fecha;
        divMensaje.classList.add('bloqueado');
    }

    contenedorMensajes.appendChild(divMensaje);
});
