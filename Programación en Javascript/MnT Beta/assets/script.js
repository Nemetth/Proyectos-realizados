'use strict'

let videojuegos = [
     {
         id: 1,  
         nombre: 'FIFA 2023',
         descripcion: 'La nueva versión del FIFA , en su versión gráfica más poderosa',
         descripcionLarga:'<p>FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts.</p> <p> Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA, y lanzada en todo el mundo el 30 de septiembre de 2022 para PC, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X. /S y Google Stadia.</p><p>  Sin embargo, los jugadores que reservaron la Ultimate Edition recibieron tres días de acceso anticipado y pudieron jugar el juego a partir del 27 de septiembre.</p>',
         precio: 8000,
         imagenBanner: 'assets/img/banners/banner_fifa.jpg',
         imagen: 'assets/img/fifa2023/fifa1.webp',
         imagen2: 'assets/img/fifa2023/fifa2.webp',
         imagen3: 'assets/img/fifa2023/fifa3.webp',
         imagen4: 'assets/img/fifa2023/fifa4.webp',
         categoria: 'Normie',
         cantidad: 1,
     },
     {
         id: 2,
         nombre: 'Call of Duty',
         descripcion: 'La aclamada saga de disparos en primera persona',
         descripcionLarga:'<p>Un videojuego de disparos en primera persona de estilo bélico, desarrollado por Infinity Ward y distribuido por Activision. </p> <p>El videojuego, precedido por Call of Duty 3, es el cuarto título de la serie Call of Duty y el cuarto de esta misma en ser título principal.</p><p>  La historia toma lugar en el año 2011, donde un líder radical ha ejecutado al presidente de un país sin nombre en Oriente Medio, y un movimiento "ultranacionalista" da inicio a una guerra civil en Rusia</p>',
         precio: 4000,
         imagenBanner: 'assets/img/banners/banner_cod.jpg',
         imagen: 'assets/img/cod/cod1.webp',
         imagen2: 'assets/img/cod/cod2.webp',
         imagen3: 'assets/img/cod/cod3.webp',
         imagen4: 'assets/img/cod/cod4.webp',
         categoria: 'Guerra',
         cantidad: 1,
     },
     {
         id: 3,
         nombre: 'God of War',
         descripcion: 'La saga de God of War entra nuevamente en escena, y lo hace a lo grande.',
         descripcionLarga:'<p>God of War es una franquicia de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment.</p> <p> Se basa en las aventuras de un semidiós espartano, Kratos, quien se enfrenta a diversos personajes de la mitología griega y nórdica, tanto héroes como especies mitológicas, dioses griegos, titanes (como Cronos) y dioses primordiales (como Gaia).</p><p>   Aunque el guerrero espartano acostumbra enemistad con la mayoría de los dioses, recibe ayuda de muchos de ellos en algún momento de cada entrega, en especial de Atenea.</p>',
         precio: 9000,
         imagenBanner: 'assets/img/banners/banner_gow.jpg',
         imagen: 'assets/img/gow/gow1.webp',
         imagen2: 'assets/img/gow/gow2.webp',
         imagen3: 'assets/img/gow/gow3.webp',
         imagen4: 'assets/img/gow/gow4.webp',
         categoria: 'Aventura',
         cantidad: 1,
     },
     {
         id: 4,
         nombre: 'The Last of Us 2',
         descripcion: 'Cinco años después, Ellie emprenderá un largo viaje para lograr su venganza',
         descripcionLarga:'<p>The Last of Us Part II es un videojuego de terror y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.</p> <p> Ambientado cinco años después de The Last of Us (2013), el juego se centra en dos personajes jugables en un Estados Unidos post-apocalíptico cuyas vidas se entrelazan. </p><p>El juego se juega desde la perspectiva de la tercera persona y le permite al jugador luchar contra enemigos humanos y a zombis con armas de fuego, armas improvisadas y sigilo.</p>',
         precio: 3000,
         imagenBanner: 'assets/img/banners/banner_tlou2.jpg',
         imagen: 'assets/img/lastofus/us1.webp',
         imagen2: 'assets/img/lastofus/us2.webp',
         imagen3: 'assets/img/lastofus/us3.webp',
         imagen4: 'assets/img/lastofus/us4.webp',
         categoria: 'Aventura',
         cantidad: 1,
     },
     {
         id: 5,
         nombre: 'Far Cry 5',
         descripcion: 'La quinta edición del Far Cry.  Es un videojuego de guerra en primera persona.',
         descripcionLarga:'<p>El juego se desarrolla en el condado ficticio de Hope, Montana, donde un predicador llamado Joseph Seed ha logrado prominencia en la región.</p> <p> En realidad, Seed es un predicador radical y La Puerta del Edén es un culto militar del juicio final. Bajo su gobierno, el culto ha intentado convertir a los residentes del condado de Hope y los ha amenazado para evitar que pidan ayuda al gobierno federal. </p><p>Cuando un intento de detener a Seed resulta en la muerte de varios oficiales de la ley, el jugador es arrastrado al conflicto armado.</p>',
         precio: 2000,
         imagenBanner: 'assets/img/banners/banner_farcry5.jpg',
         imagen: 'assets/img/farcry5/fc1.webp',
         imagen2: 'assets/img/farcry5/fc2.webp',
         imagen3: 'assets/img/farcry5/fc3.webp',
         imagen4: 'assets/img/farcry5/fc4.webp',
         categoria: 'Guerra',
         cantidad: 1,
     },
     {
         id: 6,
         nombre: '2k23',
         descripcion: 'Un juego para todos aquellos amantes del basquet',
         descripcionLarga:'<p>NBA 2K23 es un videojuego de baloncesto de 2022 desarrollado por Visual Concepts y publicado por 2K Sports</p> <p> Basado en la Asociación Nacional de Baloncesto. Es la entrega número 24 de la franquicia NBA 2K y es el sucesor de NBA 2K22.</p><p>El mejor y más jugado simulador de basketball. Entre las nuevas adiciones a esta nueva edición, se suma la incorporación del Jordan Challenge, el cual no se veia en el juego desde el 2011.</p>',
         precio: 7500,
         imagenBanner: 'assets/img/banners/banner_2k23.jpg',
         imagen: 'assets/img/2k23/nba2k1.webp',
         imagen2: 'assets/img/2k23/nba2k2.webp',
         imagen3: 'assets/img/2k23/nba2k3.webp',
         imagen4: 'assets/img/2k23/nba2k4.webp',
         categoria: 'Normie',
         cantidad: 1,
     }, 
    
 ];

//Variables genéricas
const d=document;

const main= d.querySelector('main')
const navcarrito = d.getElementById('nav-carrito');

//Banderas de filtrado
let catalogoMostrado = false, guerraMostrado = false, aventuraMostrado = false, normieMostrado= false;

 //Esconder Banner

 const esconderBanner =()=>{
    let banner = d.querySelector(".banner")
    banner.setAttribute("class", "escondido")

 }

const obtenerBannerAleatorio = () => {
    return Math.floor(Math.random() * videojuegos.length);
}
let timeBanner = setTimeout(esconderBanner, 2500)
const rotacionBanner = () => {

    const indice = obtenerBannerAleatorio();
    const banner = videojuegos[indice];
    const bannerFlotante = d.createElement('img');
    contenedorCatalogo.appendChild(bannerFlotante);
    bannerFlotante.src = banner.imagenBanner;
    bannerFlotante.setAttribute("data-id", banner.id);
    bannerFlotante.setAttribute("class", "banner");
    bannerFlotante.addEventListener('click', function() {
        verDetalleBanner(bannerFlotante.getAttribute("data-id"));
    });
    clearTimeout(timeBanner)
    timeBanner =  setTimeout(esconderBanner, 2500)
}
setTimeout(esconderBanner, 2500)
const verDetalleBanner = (id) =>{
    const item = videojuegos.find((videojuego) => videojuego.id == id);

    detalle.push(item);
    crearVerDetalle(item);
};

//Evento de agregar al carrito


 let carrito = [];


 const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];

 if (carritoStorage.length > 0) {
    carrito = carritoStorage;
  }


  const agregarAlCarrito = (id) =>{
     const existe = carrito.some(videojuego => videojuego.id == id)
     if(existe){
         const videojuegoCant = carrito.find(videojuego => videojuego.id == id).cantidad
         carrito.map(vj => {
           if(vj.id == id){
              vj.cantidad = videojuegoCant +1;
              return;
           }
         })
       } else {
         const item = videojuegos.find((videojuego) => videojuego.id == id)
         item.cantidad = 1;
         carrito.push(item)
       }
    cantidadCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito));

  }

//Evento de sacar del carrito

 const sacarDelCarrito = (id) => {
    const existe = carrito.some(videojuego => videojuego.id == id)

    if(existe){
       const videojuegoCant = carrito.find(videojuego => videojuego.id == id).cantidad
       if (videojuegoCant > 1) {
         carrito.map(vj => {
           if(vj.id == id){
              vj.cantidad = videojuegoCant - 1;
              return;
           }
         })
       } else {
         for(let i = carrito.length - 1; i >= 0; i--) {
           if (carrito[i].id == id) {
             carrito.splice(i,1);
             break;
           }
         }
       }
     }
     actualizarCarrito()
     cantidadCarrito()
     localStorage.setItem('carrito', JSON.stringify(carrito));

 }

//Evento de Ver detalle
 let detalle = [];

 const verDetalle = (id) =>{
    let idBoton = id.target.getAttribute('id');
    const item = videojuegos.find((videojuego) => videojuego.id == idBoton)
    detalle.push(item)
    crearVerDetalle()
 }


//Función que elimina el catálogo para mostrar catálogo filtrado. Cambia las banderas para evitar errores en la funcionalidad de los botones.

const contenedorCatalogo =d.createElement('div');
const contenedorCatalogomodal =d.createElement('div');
const contenedorCatalogoModalCarrito =d.createElement('div');
const vaciarCatalogo = () =>{
    const catalogo = d.querySelector("#contenedorcatalogo");
    if (catalogo) {
        while (catalogo.firstChild) {
            catalogo.removeChild(catalogo.firstChild);
        }
    }
}

//Botones de filtrado:
const mostrarBotones=()=>{
    const
    divFiltros= d.createElement("div"),
    divBotonTodo= d.createElement("div"),
    botonTodo = d.createElement("h2"),
    tituloFiltrar= d.createElement("h3"),
    divBotonesFiltro= d.createElement("div"),
    botonGuerra = d.createElement("button"),
    botonAventura = d.createElement("button"),
    botonNormie = d.createElement("button");
    main.appendChild(divFiltros);
    divFiltros.setAttribute("class", "divFiltros")
    divFiltros.appendChild(divBotonTodo);
    divFiltros.appendChild(tituloFiltrar);
    tituloFiltrar.textContent = "Filtrar por"
    tituloFiltrar.setAttribute("class", "tituloFiltrar")
    divFiltros.appendChild(divBotonesFiltro);
    divBotonesFiltro.setAttribute("class", "divBotonesFiltro")
    divBotonTodo.appendChild(botonTodo);
    divBotonesFiltro.appendChild(botonGuerra);
    divBotonesFiltro.appendChild(botonAventura);
    divBotonesFiltro.appendChild(botonNormie);
    botonTodo.innerHTML = 'TODOS NUESTROS<br>JUEGOS';
    botonTodo.setAttribute("id", "juegotodo")
    botonGuerra.textContent = "Juegos de Guerra"
    botonGuerra.setAttribute("id", "botonguerra")
    botonAventura.textContent = "Juegos de Aventura"
    botonAventura.setAttribute("id", "juegoaventura")
    botonNormie.textContent = "Juegos Normies"
    botonNormie.setAttribute("id", "juegonormie")
   botonTodo.addEventListener('click', function(){
        if (!catalogoMostrado) {
            catalogo(videojuegos);
            catalogoMostrado = true, guerraMostrado = false, aventuraMostrado = false, normieMostrado= false;
            botonTodo.style.textDecoration="underline 2px #EB297C";
        }
    });
    botonGuerra.addEventListener('click', function(){
        if (!guerraMostrado) {
            catalogoGuerra();
            catalogo(guerra)
            catalogoMostrado = false, guerraMostrado = true, aventuraMostrado = false, normieMostrado= false;
            guerra=[]
            botonTodo.style.textDecoration="none"
    
        }
    });
    botonAventura.addEventListener('click', function(){
        if (!aventuraMostrado) {
            catalogoAventura();
            catalogo(aventura)
            catalogoMostrado = false, guerraMostrado = false, aventuraMostrado = true, normieMostrado= false;
            aventura=[]
            botonTodo.style.textDecoration="none"
        }
    });
    botonNormie.addEventListener('click', function(){
        if (!normieMostrado) {
            catalogoNormie();
            catalogo(normie)
            catalogoMostrado = false, guerraMostrado = false, aventuraMostrado = false, normieMostrado= true;
            normie=[]
            botonTodo.style.textDecoration="none"
        }
    });
}
mostrarBotones()

//Catálogo completo
const catalogo =(catalogoCompleto) =>{
    vaciarCatalogo(catalogoCompleto);
    rotacionBanner()
    catalogoCompleto.forEach(videojuego => {
    const  imgVideojuegos= d.createElement('img'),
        divTituloPrecio= d.createElement('div'),
        tituloVideojuegos=d.createElement('h3'),
        precioVideojuego=d.createElement('p'),
        descripcionVideojuegos= d.createElement('p'),
        contenedorVideojuego=d.createElement('div'),
        contenedorbotones=d.createElement('div'),
        botonAgregar =d.createElement('button'),
        botonDetalle =d.createElement('button'),
        main = d.querySelector("main");
        main.appendChild(contenedorCatalogo);
        contenedorCatalogo.setAttribute("id", "contenedorcatalogo")
        contenedorCatalogo.appendChild(contenedorVideojuego);
        contenedorVideojuego.setAttribute("class", "contenedorVideojuego")
        contenedorVideojuego.appendChild(imgVideojuegos);
        contenedorVideojuego.appendChild(divTituloPrecio);
        divTituloPrecio.setAttribute("class", "divTituloPrecio")
        divTituloPrecio.appendChild(tituloVideojuegos);
        divTituloPrecio.appendChild(precioVideojuego);
        contenedorVideojuego.appendChild(descripcionVideojuegos);
        descripcionVideojuegos.textContent= videojuego.descripcion
        descripcionVideojuegos.setAttribute("class", "descripcionVideojuegos")
        contenedorVideojuego.appendChild(contenedorbotones);
        contenedorbotones.setAttribute("class", "contenedorbotones")
        contenedorbotones.appendChild(botonDetalle);
        contenedorbotones.appendChild(botonAgregar);
        tituloVideojuegos.textContent= videojuego.nombre
        precioVideojuego.textContent= '$'+videojuego.precio
        precioVideojuego.setAttribute("class", "precio")
        botonAgregar.textContent= "Comprar"
        botonAgregar.setAttribute("id", videojuego.id)
        botonAgregar.addEventListener('click', function(){agregarAlCarrito(videojuego.id)}); 
        botonDetalle.textContent= "Ver más"
        botonDetalle.setAttribute("id", videojuego.id)
        botonDetalle.addEventListener('click', verDetalle);
        imgVideojuegos.src=videojuego.imagen;
        imgVideojuegos.alt=videojuego.nombre; 
    });
}
catalogo(videojuegos)
 
//Catálogo de guerra
let guerra = [];
const catalogoGuerra = () =>{
    let categoria = "Guerra";
    let juegoGuerra=videojuegos.filter( videojuego => {
    return videojuego.categoria==categoria;
    });
    guerra.push(...juegoGuerra);
    return guerra;
};

//Catálogo de Normie
let normie = []
const catalogoNormie = () =>{
    let categoria = "Normie";
    let juegoNormie=videojuegos.filter( videojuego => {
    return videojuego.categoria==categoria;
    });
    normie.push(...juegoNormie);
    return normie
 }

 //Catálogo de aventura
let aventura = [];
const catalogoAventura = () =>{
    let categoria = "Aventura";
    let juegoAventura=videojuegos.filter( videojuego => {
    return videojuego.categoria==categoria;
    });
    aventura.push(...juegoAventura);
    return aventura
 }

 //Mostrar Carrito
 const modalCarrito = d.createElement('div'),
    contenedorCarrito= d.createElement('div'),
    tituloCarrito = d.createElement('h3');
    modalCarrito.setAttribute('class', 'modalCarrito')
    const   divBotonFinalizarVaciar = d.createElement('div'),
    botonCerrar =d.createElement('button'),
    botonFinalizarCompra =d.createElement('button'),
    botonVaciar =d.createElement('button'),
    divPrecioTotal=d.createElement('div'),
pPrecioTotal =d.createElement('p');
/* FUNCION CREAR CARRITO   */  
const crearCarritoModal = () =>{
    main.appendChild(modalCarrito)
    modalCarrito.appendChild(contenedorCarrito)
    contenedorCarrito.setAttribute('class', 'contenedorCarrito')
    contenedorCarrito.appendChild(tituloCarrito)
    tituloCarrito.setAttribute('class', 'tituloCarrito')
    tituloCarrito.textContent= 'TU SELECCIÓN'
    divBotonFinalizarVaciar.setAttribute('class', 'divBotonFinalizarVaciar')
    contenedorCarrito.appendChild(botonCerrar)
    botonCerrar.setAttribute('class', 'botonCerrar')
    botonCerrar.textContent= 'X'
    botonCerrar.addEventListener('click', cerrarCarrito);

/*  FUNCION SUMAR TOTAL */ const totalCarrito = carrito.reduce((currentTotal,item)=>{
    return item.precio*item.cantidad + currentTotal
},0)

    const videojuegosMostrados = new Set();
    document.addEventListener("keydown", function(event) {
    	if(event.key === 'Escape'){
    		cerrarCarrito()
    	} });


    carrito.forEach(videojuego =>{
        if (videojuegosMostrados.has(videojuego.id)) return;
        videojuegosMostrados.add(videojuego.id);
        const  tituloVideojuegosmodal=d.createElement('h3'),
        imgVideojuegosmodal= d.createElement('img'),
        precioVideojuegomodal=d.createElement('p'),
        cantidadVideojuegosmodal= d.createElement('p'),
        contenedorVideojuegomodal=d.createElement('div'),
        contenedorTituloPrecio=d.createElement('div'),
        contenedorbotonesmodalCarrito=d.createElement('div'),
        botonAgregarmodal =d.createElement('button'),
        botonEliminarmodal =d.createElement('button');
        contenedorCarrito.appendChild(contenedorCatalogoModalCarrito);
        contenedorCatalogoModalCarrito.setAttribute("id", "contenedorCatalogoModalCarrito")
        contenedorCatalogoModalCarrito.appendChild(contenedorVideojuegomodal)
        contenedorVideojuegomodal.setAttribute("class", "contenedorVideojuegomodal");
        contenedorVideojuegomodal.appendChild(imgVideojuegosmodal);
        contenedorVideojuegomodal.appendChild(contenedorTituloPrecio);
        contenedorTituloPrecio.setAttribute("class", "contenedorTituloPrecioCarrito")
        contenedorTituloPrecio.appendChild(tituloVideojuegosmodal);
        contenedorTituloPrecio.appendChild(precioVideojuegomodal);
        contenedorVideojuegomodal.appendChild(contenedorbotonesmodalCarrito);
        contenedorbotonesmodalCarrito.setAttribute("class", "contenedorbotonesmodalCarrito")
        contenedorbotonesmodalCarrito.appendChild(botonEliminarmodal);
        contenedorbotonesmodalCarrito.appendChild(cantidadVideojuegosmodal);
        cantidadVideojuegosmodal.textContent= videojuego.cantidad
        cantidadVideojuegosmodal.setAttribute("class", "cantidadVideojuegosmodal")
        contenedorbotonesmodalCarrito.appendChild(botonAgregarmodal);
        tituloVideojuegosmodal.textContent= videojuego.nombre
        precioVideojuegomodal.textContent= '$'+videojuego.precio
        precioVideojuegomodal.setAttribute("class", "precio")
        botonAgregarmodal.textContent= "+"
        botonAgregarmodal.setAttribute("id", videojuego.id)
        botonAgregarmodal.addEventListener('click', function (){agregarAlCarrito(videojuego.id); actualizarCarrito()}); 
        botonEliminarmodal.textContent= "-"
        botonEliminarmodal.setAttribute("class", "botonEliminarmodal")
        botonEliminarmodal.addEventListener('click',function(){sacarDelCarrito(videojuego.id)}); 
        botonEliminarmodal.setAttribute("id", videojuego.id)
        imgVideojuegosmodal.src=videojuego.imagen;
        imgVideojuegosmodal.alt=videojuego.nombre;
    })
    contenedorCarrito.appendChild(divPrecioTotal); 
divPrecioTotal.appendChild(pPrecioTotal)
pPrecioTotal.setAttribute('class', 'pPrecioTotal')
pPrecioTotal.textContent= 'TOTAL:  $'+totalCarrito
contenedorCarrito.appendChild(divBotonFinalizarVaciar)
divBotonFinalizarVaciar.appendChild(botonFinalizarCompra)
divBotonFinalizarVaciar.appendChild(botonVaciar)
botonVaciar.textContent= 'VACIAR CARRITO'
botonVaciar.setAttribute("class", "botonVaciar")
botonVaciar.addEventListener('click', vaciarCarrito); 
botonFinalizarCompra.textContent= 'FINALIZAR COMPRA'
botonFinalizarCompra.setAttribute("class", "botonFinalizarCompra")
botonFinalizarCompra.addEventListener('click', finalizarCompra); 
}


 //Ocultar Carrito
const ocultarModalCarrito = () =>{
    const catalogo = d.querySelector("#contenedorCatalogoModalCarrito");
    if (catalogo) {
        while (catalogo.firstChild) {
            catalogo.removeChild(catalogo.firstChild);
        }
    }
}

 //Botones Carrito
const cerrarCarrito =  () => {
    ocultarModalCarrito();
    main.removeChild(modalCarrito)
    carritoMostrado = false;
}

const mostrarCarrito = () => {
    crearCarritoModal()
}

//FUNCION DE ACTUALIZAR CARRITO
const actualizarCarrito =  () => {
    ocultarModalCarrito();
    main.removeChild(modalCarrito)
    mostrarCarrito()
}

/* CREATEELEMENT DE CARRITO Minuatura */

 let divcarrito =  d.createElement('div'),
 pcantidad = d.createElement('p'),
imgcarrito = d.createElement('img'),
 buttoncarrito = d.createElement('button');


 function vaciarCarrito(){
    carrito.splice(0,carrito.length)
    cerrarCarrito()
    ocultarModalCarrito();
    pcantidad.textContent= carrito.length
    localStorage.clear();
carritoMostrado = false;
 } 

 //TOTAL DEL CARRITO 

 //CANTIDAD DEL CARRITO 

 let carritoMostrado = false;

 function cantidadCarrito(){
    const totalCantidad = carrito.reduce((currentTotal,item)=>{
        return item.cantidad + currentTotal
    },0)
    navcarrito.appendChild(divcarrito)
    divcarrito.setAttribute('class', 'divcarrito')
    divcarrito.appendChild(buttoncarrito)
    pcantidad.textContent= totalCantidad
    pcantidad.setAttribute('class', 'pCantidad')
    buttoncarrito.appendChild(imgcarrito)
    buttoncarrito.appendChild(pcantidad)
    imgcarrito.src='assets/img/carrito.png'
    imgcarrito.setAttribute('class', 'imagenCarrito')
 }
cantidadCarrito()

 buttoncarrito.addEventListener('click', function buttonCarrtio(){
    if (!carritoMostrado){
        mostrarCarrito()
        carritoMostrado = true;
    }
    else if (carritoMostrado){
        cerrarCarrito()
        carritoMostrado = false;
    }
}); 


//Crear Ver Detalle
const modalDetalle = d.createElement('div');
modalDetalle.setAttribute('class', 'modalDetalle')

function crearVerDetalle(){
main.appendChild(modalDetalle);
detalle.forEach(videojuego =>{
    const  divDatosmodal=d.createElement('div'),
    divTitulomodal=d.createElement('div'),
    tituloVideojuegosmodal=d.createElement('h3'),
    categoriaVideojuegosmodal=d.createElement('h4'),
    imgVideojuegosmodal= d.createElement('img'),
    precioVideojuegomodal=d.createElement('p'),
    descripcionVideojuegosmodal= d.createElement('div'),
    contenedorVideojuegomodal=d.createElement('div'),
    contenedorbotonesmodal=d.createElement('div'),
    botonAgregarmodal =d.createElement('button'),
    botonCerrarDetalle =d.createElement('button'),
    contenedorImagenes= d.createElement('div'),
    contenedorSubImagenes= d.createElement('div'),
    imagen2 = d.createElement('img'),
    imagen3 = d.createElement('img'),
    imagen4 = d.createElement('img');
    modalDetalle.appendChild(contenedorCatalogomodal);
    contenedorCatalogomodal.setAttribute("id", "contenedorcatalogomodal")
    contenedorCatalogomodal.appendChild(contenedorVideojuegomodal);
    contenedorVideojuegomodal.setAttribute('class','contenedorVideojuegomodalDetalle')
    contenedorVideojuegomodal.appendChild(contenedorImagenes)
    contenedorImagenes.setAttribute('class','contenedor-producto')
    contenedorImagenes.appendChild(imgVideojuegosmodal)
    imgVideojuegosmodal.setAttribute('class','imagen-principal')
    contenedorImagenes.appendChild(contenedorSubImagenes)
    contenedorSubImagenes.setAttribute('class','contenedorSubImagenes')
    contenedorSubImagenes.appendChild(imagen2)
    imagen2.setAttribute('class','subImagen-1')
    contenedorSubImagenes.appendChild(imagen3)
    imagen3.setAttribute('class','subImagen-2')
    contenedorSubImagenes.appendChild(imagen4)
    imagen4.setAttribute('class','subImagen-3')
    contenedorVideojuegomodal.appendChild(divDatosmodal)
    divDatosmodal.setAttribute("class", "divDatosmodal")
    divDatosmodal.appendChild(divTitulomodal);
    divTitulomodal.setAttribute("class", "divTitulomodal")
    divTitulomodal.appendChild(tituloVideojuegosmodal);
    divTitulomodal.appendChild(categoriaVideojuegosmodal);
    divDatosmodal.appendChild(precioVideojuegomodal);
    categoriaVideojuegosmodal.textContent= videojuego.categoria
    divDatosmodal.appendChild(descripcionVideojuegosmodal);
    divDatosmodal.appendChild(contenedorbotonesmodal);
    contenedorbotonesmodal.setAttribute("class", "contenedorbotonesmodal")
    contenedorbotonesmodal.appendChild(botonAgregarmodal);
    contenedorVideojuegomodal.appendChild(botonCerrarDetalle);
    tituloVideojuegosmodal.textContent= videojuego.nombre
    precioVideojuegomodal.textContent= '$'+videojuego.precio
    precioVideojuegomodal.setAttribute("class", "precio")
    descripcionVideojuegosmodal.setAttribute("class", "descripcionLarga")
    descripcionVideojuegosmodal.innerHTML= videojuego.descripcionLarga
    botonAgregarmodal.textContent= "Agregar al carrito"
    botonAgregarmodal.setAttribute("id", videojuego.id)
    botonAgregarmodal.addEventListener('click', function (){agregarAlCarrito(videojuego.id)});
    botonCerrarDetalle.textContent= "X"
    botonCerrarDetalle.setAttribute("class", "CerrarDetalle")
    botonCerrarDetalle.addEventListener('click', cerrarDetalle); 
    let imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

    imagenPrincipal.src =videojuego.imagen;
    subImagenes[0].src =videojuego.imagen2;
    subImagenes[1].src =videojuego.imagen3;
    subImagenes[2].src =videojuego.imagen4;


    subImagenes[0].addEventListener("mouseover",accion1);
    subImagenes[1].addEventListener("mouseover",accion2);
    subImagenes[2].addEventListener("mouseover",accion3);
    subImagenes[0].addEventListener("mouseout",accion0);
    subImagenes[1].addEventListener("mouseout",accion0);
    subImagenes[2].addEventListener("mouseout",accion0);

function accion0(){imagenPrincipal.src =videojuego.imagen}
function accion1(){imagenPrincipal.src =videojuego.imagen2;}
function accion2(){imagenPrincipal.src =videojuego.imagen3;}
function accion3(){imagenPrincipal.src =videojuego.imagen4;}
  
})

}
document.addEventListener("keydown", function(event) {
    if(event.key === 'Escape'){
        cerrarDetalle()
    } });


//Botones Cerrar Detalle
const ocultarModalDetalle = () =>{
    const catalogo = d.querySelector("#contenedorcatalogomodal");
    if (catalogo) {
        while (catalogo.firstChild) {
            catalogo.removeChild(catalogo.firstChild);
        }
    }
}

const cerrarDetalle =  () => {
    detalle.splice (0, detalle.length)
    ocultarModalDetalle()
    main.removeChild(modalDetalle)
}

//FINALIZAR COMPRA

const modalFinalizarCompra = d.createElement('section'),
modalDivForm = d.createElement('div'),
modalForm = d.createElement('form'),
modalDivTitulo = d.createElement('div'),
modalTitulo = d.createElement('h3'),
modalLabelNombre = d.createElement('label'),
modalInputNombre = d.createElement('input'),
modalLabelApellido = d.createElement('label'),
modalInputApellido = d.createElement('input'),
modalLabelMail = d.createElement('label'),
modalInputMail = d.createElement('input'),
modalLabelTelefono = d.createElement('label'),
modalInputTelefono = d.createElement('input'),
modalLabelDireccion = d.createElement('label'),
modalInputDireccion = d.createElement('input'),
modalLabelDpto = d.createElement('label'),
modalInputDpto = d.createElement('input'),
modalLabelCodigoPostal = d.createElement('label'),
modalInputCodigoPostal = d.createElement('input'),
modalLabelFechaEntrega = d.createElement('label'),
modalSelectFechaEntrega = d.createElement('select'),
modalOption1FechaEntrega = d.createElement('option'),
modalOption2FechaEntrega = d.createElement('option'),
modalOption3FechaEntrega = d.createElement('option'),
modalDivButtonsFinalizar = d.createElement('div'),
modalBotonFinalizarCompra = d.createElement('button'),
modalBotonVolverCarrito = d.createElement('button');
modalFinalizarCompra.setAttribute("class", "modalFinalizarCompra")
modalDivForm.setAttribute("class", "modalDivForm")
modalForm.setAttribute("class", "modalForm")
modalDivTitulo.setAttribute("class", "modalDivTitulo")
modalDivButtonsFinalizar.setAttribute("class", "modalDivButtonsFinalizar")


const finalizarCompra = () =>{
    main.appendChild(modalFinalizarCompra);
    cerrarCarrito()
    modalFinalizarCompra.appendChild(modalDivForm);
    modalDivForm.appendChild(modalForm);
    modalForm.setAttribute('method', 'get')
    modalForm.appendChild(modalDivTitulo);
    modalDivTitulo.appendChild(modalTitulo);
    modalTitulo.textContent='Ingresá Tus Datos';
    modalForm.appendChild(modalLabelNombre);
    modalLabelNombre.textContent='Nombre';
    modalForm.appendChild(modalInputNombre);
    modalInputNombre.setAttribute('type', 'text')
    modalInputNombre.setAttribute('id', 'name')
    modalInputNombre.setAttribute('name', 'name')
    modalInputNombre.setAttribute('required', 'obligatorio')
    modalInputNombre.setAttribute('minlength', '5')
    modalInputNombre.setAttribute('maxlength', '30')
    modalInputNombre.setAttribute('placeholder', 'Ej:Joaquín')
    modalForm.appendChild(modalLabelApellido);
    modalLabelApellido.textContent='Apellido';
    modalForm.appendChild(modalInputApellido);
    modalInputApellido.setAttribute('type', 'text')
    modalInputApellido.setAttribute('id', 'name')
    modalInputApellido.setAttribute('name', 'name')
    modalInputApellido.setAttribute('required', 'obligatorio')
    modalInputApellido.setAttribute('minlength', '5')
    modalInputApellido.setAttribute('maxlength', '30')
    modalInputApellido.setAttribute('placeholder', 'Ej:Cahue')
    modalForm.appendChild(modalLabelMail);
    modalLabelMail.textContent='Mail';
    modalForm.appendChild(modalInputMail);
    modalInputMail.setAttribute('type', 'email')
    modalInputMail.setAttribute('id', 'email')
    modalInputMail.setAttribute('name', 'email')
    modalInputMail.setAttribute('required', 'obligatorio')
    modalInputMail.setAttribute('minlength', '5')
    modalInputMail.setAttribute('maxlength', '30')
    modalInputMail.setAttribute('placeholder', 'Ej:test@mail.com')
    modalForm.appendChild(modalLabelTelefono);
    modalLabelTelefono.textContent='Telefono';
    modalForm.appendChild(modalInputTelefono);
    modalInputTelefono.setAttribute('type', 'tel')
    modalInputTelefono.setAttribute('id', 'telefono')
    modalInputTelefono.setAttribute('name', 'telefono')
    modalInputTelefono.setAttribute('required', 'obligatorio')
    modalInputTelefono.setAttribute('minlength', '5')
    modalInputTelefono.setAttribute('maxlength', '30')
    modalInputTelefono.setAttribute('placeholder', '11123456789')
    modalForm.appendChild(modalDivButtonsFinalizar);
    modalDivButtonsFinalizar.appendChild(modalBotonFinalizarCompra);
    modalBotonFinalizarCompra.textContent='Finalizar Compra';
    modalDivButtonsFinalizar.appendChild(modalBotonVolverCarrito);
    modalBotonVolverCarrito.textContent='Volver Al Carrito';
    modalBotonVolverCarrito.addEventListener('click', volverACarrito);
    modalBotonFinalizarCompra.setAttribute('type', 'reset')
    modalBotonFinalizarCompra.addEventListener('click', function formulario () {
    carrito.splice(0,carrito.length)
    navcarrito.removeChild(divcarrito)
    const graciasElemento = d.createElement('div'), graciasTitulo = d.createElement('h3');
    main.appendChild(graciasElemento);
    graciasElemento.appendChild(graciasTitulo);
    graciasElemento.setAttribute('class', 'graciasElemento')
    graciasElemento.setAttribute('id', 'gracias')
    graciasTitulo.textContent= 'Muchas gracias por tu compra'
    modalFinalizarCompra.remove();
    setTimeout(desaparecerGracias, 1000) 
});
   
}

const desaparecerGracias= ()=>{
    let graciasElementos = document.querySelector('#gracias')
    graciasElementos.remove()
}


const volverACarrito = () =>{
    const formulario = d.querySelector(".modalFinalizarCompra");
    if (formulario) {
        while (formulario.firstChild) {
            formulario.removeChild(formulario.firstChild);
        }
    }
    main.removeChild(formulario)
    mostrarCarrito()
    carritoMostrado=true
} 




