var localStorage = window.localStorage;

if (localStorage.getItem('pendiente') == null) {
    localStorage.setItem('pendiente', JSON.stringify(pendiente));
} else {
    pendiente = JSON.parse(localStorage.getItem('pendiente'));
}

var pendiente = [
    {
        empresa: "Hugo",
        direccion: "Tegucigalpa, Cerro Grande",
        distancia: "20km",
        mapa: "img/mapa.png",
        color: "#8317CD",
        precio: 400,
        envios: [
            {
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
            },
            {
                nombreProducto: "Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
            }
        ]
    }
];

// toggleMenuElement.addEventListener('click', ()=>{
//     mainMenuElement.classList.toggle('mostrar-menu');
// });


function mostrarPedios() {

    let productos = "";

    for(let i=0; i<pendiente[0].envios.length;  i++){
        productos  += `<h4>${pendiente[0].envios[i].nombreProducto}<h4>
                       <p>${pendiente[0].envios[i].descripcion}</p>`;
    }

    document.getElementById("pedientes").innerHTML = `<h1>delivery in process</h1>
                                                      <h3>Coordenadas: ${pendiente[0].direccion}<h3>
                                                      <img src="${pendiente[0].mapa}" class="imagen-mapa">
                                                      <p>Distancia: ${pendiente[0].distancia}</p>
                                                      <p>${productos}</p>
                                                      <button class="entregado">Delivered</button>`;
    localStorage.setItem('pendiente', JSON.stringify(pendiente));
}

mostrarPedios();

// function mostrarEntrega(){
//     pendientes.forEach(function (envio, i){
//         document.getElementById("lista").innerHTML += `<div class="contenedor abrir-modal" onclick="abrirModal();detallesEnvio(${i})"  style="background-color: ${envio.color}">
//                                                             <h2 class="empresa">${envio.empresa}</h2>
//                                                             <p class="direccion">Distancia: ${envio.distancia}</p>
//                                                             <p class="cantidad-envios">Cantidad de productos: ${envio.envios.length}</p>
//                                                         </div>`;
//                                                         i++;
//     });
//     localStorage.setItem('pendientes', JSON.stringify(pendientes))
// }

// function detallesEnvio(i) {
//     console.log("Numero de pedido", i);
//     let detallesActuales = pendientes[i];
//     document.getElementById("aja").innerHTML = `<h3>details...</h3>
//                                                                   <h3>${detallesActuales.empresa}</h3>
//                                                                   <p>${detallesActuales.distancia}</p>
//                                                                   <div id="closeModal" class="cerrar-modal">
//                                                                      <p>Cerrar</p>
//                                                                   </div>`;

// }

// mostrarEntrega();


// let openModal = document.querySelector(".abrir-modal");
// let cerrarModal = document.getElementById("closeModal");
// let modal = document.getElementById("modal");

// // Abrir modal
// function abrirModal(){  
//     modal.style.visibility = "visible";
// }

// // Cerar en ventana
// modal.onclick = function(){
//     modal.style.visibility = "hidden";
// }


