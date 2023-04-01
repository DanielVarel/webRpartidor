const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
var infoodal = document.getElementById("modal");

// var usuarios = [
//     {
//         empresa: "Hugo",
//         direccion: "Tegucigalpa, Cerro Grande",
//         distancia: "20km",
//         color: "#8317CD",
//         mapa : "img/mapa.png",
//         precio: 400,
//         envios: [
//             {
//                 nombreProducto: "Producto 1",
//                 descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
//             },
//             {
//                 nombreProducto: "Producto 2",
//                 descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
//             }
//         ]
//     },
//     {
//         empresa: "Walmart",
//         direccion: "Tegucigalpa, Cerro Grande",
//         distancia: "10km",
//         color: "#005CB5",
//         mapa : "img/mapa.png",
//         precio: 400,
//         envios: [
//             {
//                 nombreProducto: "Producto 1",
//                 descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
//             },
//             {
//                 nombreProducto: "Producto 2",
//                 descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
//             },
//             {
//                 nombreProducto: "Producto 2",
//                 descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
//             }
//         ]
//     },
//     {
//         empresa: "Bigos",
//         direccion: "Tegucigalpa, Cerro Grande",
//         distancia: "12km",
//         color: "#E88B00",
//         mapa : "img/mapa.png",
//         precio: 400,
//         envios: [
//             {
//                 nombreProducto: "Producto 2",
//                 descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
//             }
//         ]
//     }
//     ,
//     {
//         empresa: "Bigos",
//         direccion: "Tegucigalpa, Cerro Grande",
//         distancia: "12km",
//         color: "#E88B00",
//         mapa : "img/mapa.png",
//         precio: 400,
//         envios: [
//             {
//                 nombreProducto: "Producto 2",
//                 descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
//             }
//         ]
//     }
    
// ];

// // para el mapa
// function iniciarMap(){
//     var coord = {lat:14.104953 ,lng: -87.233900};
//     var coord2 = {lat:14.169889 ,lng: -87.308289};

//     var map = new google.maps.Map(document.getElementById('map'),{
//       zoom: 10,
//       center: coord
//     });
//     var marker = new google.maps.Marker({
//       position: coord,
//       map: map
//     });

//     var marker2 = new google.maps.Marker({
//       position: coord2,
//       map: map
//     });

//     var directionsService = new google.maps.DirectionsService();
//     var directionsRenderer = new google.maps.DirectionsRenderer();

//     var request = {
//       origin: { lat:14.104953 ,lng: -87.233900 },
//       destination: { lat:14.169889 ,lng: -87.308289 },
//       travelMode: google.maps.TravelMode.DRIVING,
//     };

//     directionsService.route(request, function (result, status) {
//       if (status == google.maps.DirectionsStatus.OK) {
//         directionsRenderer.setDirections(result);
//       }
//     });

//     directionsRenderer.setMap(map);
// }

usuarioRegistrados = JSON.parse(localStorage.getItem('usuarioRegistrados'));

console.log(usuarioRegistrados);

var pendiente = [];

var repartidorActual = 0;

function mostrarEntrega(){

    for(let i=0; i<usuarioRegistrados[repartidorActual].entregas.length; i++){
            document.getElementById("lista").innerHTML += `<div class="contenedor abrir-modal" onclick="abrirModal();detallesEnvio(${i})"  style="background-color: ${usuarioRegistrados[repartidorActual].entregas[i].color}">
                                                                <h2 class="empresa">${usuarioRegistrados[repartidorActual].entregas[i].empresa}</h2>
                                                                <p class="direccion">Distancia: ${usuarioRegistrados[repartidorActual].entregas[i].distancia}</p>
                                                                <p class="cantidad-envios">Cantidad de productos: ${usuarioRegistrados[repartidorActual].entregas[i].envios.length}</p>
                                                            </div>`;
         
    }

    // usuarios.forEach(function (envio, i){
    //     document.getElementById("lista").innerHTML += `<div class="contenedor abrir-modal" onclick="abrirModal();detallesEnvio(${i})"  style="background-color: ${envio.color}">
    //                                                         <h2 class="empresa">${envio.empresa}</h2>
    //                                                         <p class="direccion">Distancia: ${envio.distancia}</p>
    //                                                         <p class="cantidad-envios">Cantidad de productos: ${envio.envios.length}</p>
    //                                                     </div>`;
    //                                                     i++;
    // });
    
}

function detallesEnvio(i) {
    console.log("Numero de pedido", i);
    let detallesActuales = usuarioRegistrados[repartidorActual].entregas[i];
    let productos="";
    
    for(let x=0; x<detallesActuales.envios.length; x++){
        productos += `<h4>${detallesActuales.envios[x].nombreProducto}<h4>
                    <p>${detallesActuales.envios[x].descripcion}</p>`;
    }

    document.getElementById("aja").innerHTML = `<h3>details...</h3>
                                                                  <h3>${detallesActuales.empresa}</h3>
                                                                  <p>${detallesActuales.distancia}</p>
                                                                  <div id="map" class="imagen-mapa"></div>
                                                                  
                                                                  <p>${productos}</p>
                                                                  <div class="cerrar-modal">
                                                                     <button class="entregado" onclick="cerrarModal()">Cancel</button>
                                                                  </div>
                                                                  <div class="cerrar-modal">
                                                                     <button class="entregado" onclick="aceptarEnvio()">Confirm</button>
                                                                  </div>`;
                                                                  iniciarMap();
}

// para el mapa
function iniciarMap(){
    var coord = {lat:14.104953 ,lng: -87.233900};
    var coord2 = usuarioRegistrados[0].entregas[1].mapa;

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });

    var marker2 = new google.maps.Marker({
      position: coord2,
      map: map
    });

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    var request = {
      origin: { lat:14.104953 ,lng: -87.233900 },
      destination: coord2,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      }
    });

    directionsRenderer.setMap(map);
}

mostrarEntrega();


// let openModal = document.querySelector(".abrir-modal");
// let cerrarModal = document.getElementById("closeModal");
let modal = document.getElementById("modal");

// Abrir modal
function abrirModal(){  
    modal.style.visibility = "visible";
}

// Cerar en ventana
function cerrarModal(){
    modal.style.visibility = "hidden";
}

pendiente = JSON.parse(localStorage.getItem('pendiente'));

function aceptarEnvio(){
    pendiente.push(usuarioRegistrados[repartidorActual].pendiente);
    localStorage.setItem('pendiente', JSON.stringify(pendiente));
}