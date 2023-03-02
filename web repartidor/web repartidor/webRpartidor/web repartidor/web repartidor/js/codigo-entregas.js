var localStorage = window.localStorage;
const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
var infoodal = document.getElementById("modal");

if (localStorage.getItem('usuarios') == null) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
} else {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

var usuarios = [
    {
        empresa: "Hugo",
        direccion: "Tegucigalpa, Cerro Grande",
        distancia: "20km",
        color: "#8317CD",
        mapa : "img/mapa.png",
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
    },
    {
        empresa: "Walmart",
        direccion: "Tegucigalpa, Cerro Grande",
        distancia: "10km",
        color: "#005CB5",
        mapa : "img/mapa.png",
        precio: 400,
        envios: [
            {
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
            },
            {
                nombreProducto: "Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
            },
            {
                nombreProducto: "Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
            }
        ]
    },
    {
        empresa: "Bigos",
        direccion: "Tegucigalpa, Cerro Grande",
        distancia: "12km",
        color: "#E88B00",
        mapa : "img/mapa.png",
        precio: 400,
        envios: [
            {
                nombreProducto: "Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
            }
        ]
    }
    ,
    {
        empresa: "Bigos",
        direccion: "Tegucigalpa, Cerro Grande",
        distancia: "12km",
        color: "#E88B00",
        mapa : "img/mapa.png",
        precio: 400,
        envios: [
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

function mostrarEntrega(){
    usuarios.forEach(function (envio, i){
        document.getElementById("lista").innerHTML += `<div class="contenedor abrir-modal" onclick="abrirModal();detallesEnvio(${i})"  style="background-color: ${envio.color}">
                                                            <h2 class="empresa">${envio.empresa}</h2>
                                                            <p class="direccion">Distancia: ${envio.distancia}</p>
                                                            <p class="cantidad-envios">Cantidad de productos: ${envio.envios.length}</p>
                                                        </div>`;
                                                        i++;
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

function detallesEnvio(i) {
    console.log("Numero de pedido", i);
    let detallesActuales = usuarios[i];
    let productos="";
    for(let x=0; x<detallesActuales.envios.length; x++){
        productos += `<h4>${detallesActuales.envios[x].nombreProducto}<h4>
                    <p>${detallesActuales.envios[x].descripcion}</p>`;
    }

    document.getElementById("aja").innerHTML = `<h3>details...</h3>
                                                                  <h3>${detallesActuales.empresa}</h3>
                                                                  <p>${detallesActuales.distancia}</p>
                                                                  <img src="${detallesActuales.mapa}" class="imagen-mapa">
                                                                  <p>${productos}</p>
                                                                  <div class="cerrar-modal">
                                                                     <button class="entregado">Cancel</button>
                                                                  </div>
                                                                  <div class="cerrar-modal">
                                                                     <button class="entregado">Confirm</button>
                                                                  </div>
                                                                 
                                                                  `;
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
modal.onclick = function(){
    modal.style.visibility = "hidden";
}


