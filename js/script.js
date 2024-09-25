// script.js

// Lista de mensajes con sus fechas de desbloqueo
const mensajes = [
    { fecha: '2024-06-25', texto: '44 M 💙', img: 'img/love-tulips.gif', mensaje: 'Felices 44 meses mi niña, un mes mas juntos orgullosamente felices trantando de salir adelante, quiero agradecerte por estar ahi para mi siempre y por estar a mi lado, eres mi motor para poder seguir luchando en esta vida y poder salir adelante juntos, por fi cuidate mucho toma agua, recuerda que eres la mejor del mundo y te amo un monton. besitos :*' },
    { fecha: '2024-07-25', texto: '45 M 💙', img: 'img/huge-hands.gif', mensaje: 'Felices 45 meses, mi vida. Un mes más, un día más, una hora más y un segundo más contigo. Cada fragmento de mi vida contigo siempre será lo más bonito de mi vida simple. Te amo mucho más que ayer, pero menos que mañana. Gracias por estar ahí y estar para mí en momentos felices como también tristes. Besitos de felices meses. Que te vaya bonito hoy y disfruta del día. Te amo muchísimo. Te mando un abrazo y un besito. Mua, mua, mua, mua, mua.' },
    { fecha: '2024-08-25', texto: '46 M 💙', img: 'img/blowing-kisses-kisses.gif', mensaje: 'Este fue un día muy especial porque disfrutamos juntos tanto en amor como en compañía, jsjs. Felices 46 meses, mi vida. Estoy feliz de seguir invicto un mes más sin pasar por alto esta fecha como lo hacen las parejas al cumplir cierto tiempo de estar juntos. Eres la mejor, el amor de mi vida sin duda, y la mejor persona del mundo. Adoro tu compañía y te amo mucho. Espero poder ayudarte más de lo que ya lo hago, o que las cosas mejoren para no estar preocupados por nada. Le pido a Diosito que así sea, y le doy gracias por las bendiciones que nos da.' },
    { fecha: '2024-09-25', texto: '47 M 💙', img: 'img/couple-couple-hug.gif', mensaje: 'Felices 47 meses, mi niña. Hoy hace 4 años que nos vimos por primera vez y te llevé fresitas. Nos tomamos fotos, nos dimos una carta y, desde ese momento, mi vida cambió porque las cosas funcionaron entre nosotros. Si me preguntaran si tenía fe, la verdad es que sí, mucha. Y por algo llevamos 47 meses juntos, y son muchos más sin contar el tiempo que pasamos hablando y conociéndonos. Eres lo mejor que me pudo pasar. Gracias por estar conmigo y por pasar momentos bonitos conmigo. Aunque nos falta mucho por vivir, poco a poco vamos logrando. Besitos, mi vida. Eres un ser muy bonito y le doy gracias a Dios por estar conmigo y por ser la mujer de mi vida, por apoyarme y por estar siempre aquí, te amo mi negrita bonita, eres mi vida 💙.'},
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
