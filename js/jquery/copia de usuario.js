(function(){
    $(document).ready(function(){
        $('.alt-form').click(function(){
            $('.form-content').animate({
                height: "toggle",
                opacity: 'toggle'
            }, 600);
        });

        let formRegistro = document.getElementsByName('form-input');
        for (let i = 0; i < formRegistro.length; i++) {
            formRegistro[i].addEventListener('blur', function(){
                if (this.value.length >= 1) {
                    this.nextElementSibling.classList.add('active');
                    this.nextElementSibling.classList.remove('error');
                } else if (this.value.length = " ") {
                    this.nextElementSibling.classList.add('error');
                    this.nextElementSibling.classList.remove('active');
                } else {
                    this.nextElementSibling.classList.remove('active');
                }
                // Escucho los eventos de submit del form para agregar usuarios nuevos a la lista y el storage
                const nombre = inputNombre.value
                const apellido = inputApellido.value
                const correo = inputCorreo.value
                const pass =  inputPass.value 
                const usuario = new Usuario(nombre, apellido, correo, pass)
                create(usuario) 
                

                let recibirPromociones = false

                // escucha el click sobre recibir promociones y ofertas
                checkBox.onchange = () => {
                    recibirPromociones = !recibirPromociones

                    if (recibirPromociones) {
                    console.log(`${inputNombre.value} Quiero recibir promociones`)
                    } else {
                        console.log(`${inputNombre.value} NO quiero recibir promociones`)
                    }
                    
                }
                
                
                event.preventDefault()
               
            })
        }

        // GET A archivo-local.json
    
        $('form-output').click(function(){            
              
            let username=$("#reg-correo").val();
            let password=$("#reg-pass").val();
            let dataString = 'reg-correo='+username+'&reg-pass='+password;

            $('formIngresar').click( () => {
                
                const URL_ARCHIVO_JSON = '../db/data.json'               
                $.getJSON( URL_ARCHIVO_JSON, () => {
                    
                    if (dataString.length === URL_ARCHIVO_JSON().length) {
                        return location.href = "compra.html";
                    }
                    
                    else{
                        alert = ('Registrate')
                    }
                    
            
                })
                
                
                    
            });
            
          
                        
            
        });
        
        

        
    })
    
}())


/*const URL_ARCHIVO_JSON = '../db/data.json'

$('body').prepend('<button id="btn3"> GET archivo.JSON </button>')

$('#btn3').click( () => {

    $.getJSON( URL_ARCHIVO_JSON, (response, status) => {

        if ( status === 'success') {
            return (response);
        }


    })


})*/

class Usuario {
    constructor(nombre, apellido, correo, pass) {
        this.nombre = nombre
        this.apellido = apellido.toLowerCase()
        this.correo = correo.toLowerCase()
        this.pass = pass.toLowerCase()
    }
}

// Se obtiene la lista de usuarios del storage
let newusuarios = JSON.parse(localStorage.getItem('newusuarios'))

// Si no hay nada en el storage se inicializa la lista vacía
if (!newusuarios) {
    newusuarios = []
}

const getAll = () => {
    return newusuarios
}

// Agrega un nuevo usuario a la lista de usuarios y lo persiste en el storage
const create = (newusuario) => {
    newusuarios.push(newusuario)
    localStorage.setItem('newusuarios', JSON.stringify(newusuarios))
}


// Accedo al DOM a obtener los elementos del formulario y la lista para mostrar los usuarios
const formRegistro = document.getElementById('form-input')
const formIngresar = document.getElementById('form-output')
const inputNombre = document.getElementById('reg-nombre')
const inputApellido = document.getElementById('reg-apellido')
const inputCorreo = document.getElementById('reg-correo')
const inputPass = document.getElementById('reg-pass')
const checkBox = document.getElementById('check-box')