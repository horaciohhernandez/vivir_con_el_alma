const login = document.querySelector("#form-login");

$(".alt-form").click(function () {
  $(".form-content").animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    600
  );
});

login.addEventListener("submit", (e) => {
  e.preventDefault();

  const URL_ARCHIVO_JSON = "../db/data.json";

  $.getJSON(URL_ARCHIVO_JSON, (response, status) => {
    if (status === "success") {
      console.log(response);
    } else {
      alert("Escribiste mal tu correo y/o contraseña");
    }
  });
});

const registrate = document.querySelector("#form-registrate");

registrate.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = inputNombre.value;
  const apellido = inputApellido.value;
  const correo = inputCorreo.value;
  const pass = inputPass.value;
  const usuario = new Usuario(nombre, apellido, correo, pass);
  create(usuario);
  
  console.log(usuario);

  let recibirPromociones = false;

  // escucha el click sobre recibir promociones y ofertas
  checkBox.onchange = () => {
    recibirPromociones = !recibirPromociones;

    if (recibirPromociones) {
      console.log(`${inputNombre.value} Quiero recibir promociones`);
    } else {
      console.log(`${inputNombre.value} NO quiero recibir promociones`);
    }
  };
});

class Usuario {
  constructor(nombre, apellido, correo, pass) {
    this.nombre = nombre;
    this.apellido = apellido.toLowerCase();
    this.correo = correo.toLowerCase();
    this.pass = pass.toLowerCase();
  }
}

// Se obtiene la lista de usuarios del storage
let newusuarios = JSON.parse(localStorage.getItem("newusuarios"));

// Si no hay nada en el storage se inicializa la lista vacía
if (!newusuarios) {
  newusuarios = [];
}

const getAll = () => {
  return newusuarios;
};

// Agrega un nuevo usuario a la lista de usuarios y lo persiste en el storage
const create = (newusuario) => {
  newusuarios.push(newusuario);
  localStorage.setItem("newusuarios", JSON.stringify(newusuarios));
};

// Accedo al DOM a obtener los elementos del formulario y la lista para mostrar los usuarios
const formRegistro = document.getElementById("form-input");
const formIngresar = document.getElementById("form-output");
const formLogin = document.getElementById("login");
const inputNombre = document.getElementById("reg-nombre");
const inputApellido = document.getElementById("reg-apellido");
const inputCorreo = document.getElementById("reg-correo");
const inputPass = document.getElementById("reg-pass");
const checkBox = document.getElementById("check-box");


