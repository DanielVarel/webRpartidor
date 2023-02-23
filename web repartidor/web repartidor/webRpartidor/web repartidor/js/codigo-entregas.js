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
        distancia: "12km",
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
    },
    {
        empresa: "Walmart",
        direccion: "Tegucigalpa, Cerro Grande",
        distancia: "12km",
        color: "#005CB5",
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
        empresa: "Bigos",
        direccion: "Tegucigalpa, Cerro Grande",
        distancia: "12km",
        color: "#E88B00",
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
        empresa: "Bigos",
        direccion: "Tegucigalpa, Cerro Grande",
        distancia: "12km",
        color: "#E88B00",
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
        empresa: "Bigos",
        direccion: "Tegucigalpa, Cerro Grande",
        distancia: "12km",
        color: "#E88B00",
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

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('mostrar-menu');
});

function mostrarEntrega(){
    usuarios.forEach(function (envio){
        document.getElementById("lista").innerHTML += `<div class="contenedor abrir-modal" onclick="abrirModal()" style="background-color: ${envio.color}">
                                                            <h2 class="empresa">${envio.empresa}</h2>
                                                            <p class="direccion">Distancia: ${envio.distancia}</p>
                                                            <p class="cantidad-envios">Cantidad de productos: ${envio.envios.length}</p>
                                                        </div>`;
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

function detallesEnvio (){
    document.getElementsByClassName("content-modal").innerHTML =`<h3>details...</h3>
                                                                  <h3>Hola</h3>
                                                                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, temporibus?</p>
                                                                  <div id="closeModal" class="cerrar-modal">
                                                                  <p>Cerrar</p>
                                                                  </div>`;
}

mostrarEntrega();

let openModal = document.querySelector(".abrir-modal");
let cerrarModal = document.getElementById("closeModal");
let modal = document.getElementById("modal");

// Abrir modal
function abrirModal(){
    modal.style.visibility = "visible";
}

// Cerar en ventana
modal.onclick = function(){
    modal.style.visibility = "hidden";
}


