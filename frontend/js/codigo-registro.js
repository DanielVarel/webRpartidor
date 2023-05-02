const nombre = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phone-number");
const enviado = document.getElementById("enviado");
var usuarioRegistrados = [];

var localStorage = window.localStorage;

const form = document.getElementById("form");
const parrafo = document.getElementById("warninigs");

var usuarioRegistrados = [
    {
        name: "Daniel Avila", 
        email: "daniel.avila.a.v.2000@gmail.com",
        password: "12",
        phoneNumber: "123456789",
        entregas: [
            {
                empresa: "Hugo",
                direccion: "Tegucigalpa, Cerro Grande",
                distancia: "20km",
                color: "#8317CD",
                mapa : {lat:14.169889 ,lng: -87.308289},
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
                mapa : {lat:14.075599 ,lng: -87.200554},
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
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!"
                    }
                ]
            }    
        ],
        pendiente:
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
         
    },{
        name: "Alejandro Avila", 
        email: "alejandro.2000@gamil.com",
        password: "23",
        phoneNumber: "1234099987",
        entregas: [
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
        ],
        pendiente:
            {
                
            }
        
    }
];

if (localStorage.getItem('usuarioRegistrados') == null) {
    localStorage.setItem('usuarioRegistrados', JSON.stringify(usuarioRegistrados)); //de JSON a cadena
}else{
    usuarioRegistrados = JSON.parse(localStorage.getItem('usuarioRegistrados'));
}

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warninigs  = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let entrar = false;

    parrafo.innerHTML = "";

    for(let i=0; i<usuarioRegistrados.length; i++){
        if(nombre.value == usuarioRegistrados[i].name){
            warninigs  += `The name is invalid <br>`;
            entrar = true;
        }
        if(email.value == usuarioRegistrados[i].email){
            warninigs  += `The mail is not valid <br>`;
            entrar = true;
        }
        if(phoneNumber.value == usuarioRegistrados[i].phoneNumber){
            warninigs  += `The phone number is not valid <br>`;
            entrar = true;
        }
    }

    
    if(nombre.value.length < 6){
        warninigs  += `The name is invalid <br>`;
        entrar = true;
    }

    if(!regexEmail.test(email.value)){
        warninigs  += `The mail is not valid <br>`;
        entrar = true;
    }

    if(password.value.length < 8){
        warninigs  += `The password is not valid <br>`;
        entrar = true;
    }

    if(phoneNumber.value.length < 8){
        warninigs  += `The phone number is not valid <br>`;
        entrar = true;
    }

    if(entrar==true){
        parrafo.innerHTML = warninigs;
    }else{
        enviado.innerHTML = `<p>Enviado</p>`;
        enviado.style.display = "block";

        let usuario = {
            email: email.value,
            name:  nombre.value,
            password: password.value,
            phoneNumber: phoneNumber.value
        }
    
        usuarioRegistrados.push(usuario)
        localStorage.setItem('usuarioRegistrados', JSON.stringify(usuarioRegistrados));
        
    }

   
});










