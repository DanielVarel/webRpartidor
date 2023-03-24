const email = document.getElementById("email");
const password = document.getElementById("password");
const boton = document.getElementById("boton");

const form = document.getElementById("form");
const parrafo = document.getElementById("warninigs");

// var usuarioRegistrados = [];

const usuarioRegistrados = [
    {
        name: "Daniel Avila", 
        email: "daniel.avila.a.v.2000@gmail.com",
        password: "12",
        phoneNumber: "123456789"
    }
];

// if (localStorage.getItem('usuarioRegistrados') == null) {
//     localStorage.setItem('usuarioRegistrados', JSON.stringify(usuarioRegistrados)); //de JSON a cadena
// }else{
//     usuarioRegistrados = JSON.parse(localStorage.getItem('usuarioRegistrados'));
// }

console.log(email.value);

form.addEventListener("submit", e=>{
    e.preventDefault();
    let encontrado = true;

    parrafo.innerHTML = "";

    for(let i=0; i<usuarioRegistrados.length; i++){
        if(email.value != usuarioRegistrados[i].email || email.value == ""){
            encontrado = false;
        }
        if(password.value != usuarioRegistrados[i].password || password.value == ""){
            encontrado = false;
        }
        if(password.value == usuarioRegistrados[i].password && email.value == email.value == usuarioRegistrados[i].email){
            encontrado = true;
        }
    }

    if(encontrado == false){
        parrafo.innerHTML = `The mail is not valid <br>
                            or the password is wrong`;
    }else if(encontrado == true){
        boton =  location.href = "index3.html";
    }
    localStorage.setItem('usuarioRegistrados', JSON.stringify(usuarioRegistrados));
});
