const nombre = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phone-number");
const enviado = document.getElementById("enviado");

const form = document.getElementById("form");
const parrafo = document.getElementById("warninigs");

const usuarioRegistrados = [
    {
        name: "Daniel Avila", 
        email: "daniel.avila.a.v.2000@gmail.com",
        password: "hola123",
        phoneNumber: "123456789"
    },{
        name: "Alejanro Avila", 
        email: "alejandro.2000@gamil.com",
        password: "adios123",
        phoneNumber: "1234099987"
    }
];

console.log(usuarioRegistrados);

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
        
    }
    
});










