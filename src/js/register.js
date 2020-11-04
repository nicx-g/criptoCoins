const formularioRegister = document.getElementById("formularioRegister")

const inputsRegister = document.querySelectorAll('#formularioRegister input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios con acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios con acentos.
    dni: /^\d{8,8}$/, // sólo 8 números?.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,20}$/, // 4 a 20 digitos.
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
}

const camposValidados = {
    nombre: false,
    apellido: false,
    dni: false,
    email: false,
    password: false,
    telefono: false
}

//No pienso usar frameworks para esto

let validarFormulario = (e) => {

    switch(e.target.name){
        case 'nombreDeUsuario':

            validarInputs(expresiones.nombre, e.target, `nombre`);

        break;

        case 'apellidoDeUsuario':

            validarInputs(expresiones.apellido, e.target, `apellido`);
            
        break;

        case 'dniDeUsuario':
            
            validarInputs(expresiones.dni, e.target, 'dni');

        break;

        case 'emailDeUsuario':
            
            validarInputs(expresiones.email, e.target, 'email');

        break;
        
        case 'passwordDeUsuario':
            
            validarInputs(expresiones.password, e.target, 'password');
            validarContra();

        break;

        case 'password2DeUsuario':
            
            validarContra();

        break;

        case 'telefonoDeUsuario':

            validarInputs(expresiones.telefono, e.target, 'telefono');

        break;
    }
    
}

let validarInputs = (expresion, input, campo) => {

    if(expresion.test(input.value)){

        document.getElementById(`formRegister-item-${campo}`).classList.remove(`login-container-form-item-notOkay`)
        document.getElementById(`formRegister-item-${campo}`).classList.add(`login-container-form-item-okay`)
        document.querySelector(`#formRegister-item-${campo} i`).classList.remove(`fa-times-circle`)
        document.querySelector(`#formRegister-item-${campo} i`).classList.add(`fa-check-circle`)
        document.querySelector(`#formRegister-item-${campo} p`).classList.remove(`login-container-form-item-p-active`)
        camposValidados[campo]= true;

    } else {

        document.getElementById(`formRegister-item-${campo}`).classList.remove(`login-container-form-item-okay`)
        document.getElementById(`formRegister-item-${campo}`).classList.add(`login-container-form-item-notOkay`)
        document.querySelector(`#formRegister-item-${campo} i`).classList.remove(`fa-check-circle`)
        document.querySelector(`#formRegister-item-${campo} i`).classList.add(`fa-times-circle`)
        document.querySelector(`#formRegister-item-${campo} .login-container-form-item-p`).classList.add(`login-container-form-item-p-active`)
        camposValidados[campo]= false;

    }

}

let validarContra = () => {

    let inputPassword1 = document.getElementById('passwordDeUsuario') 
    let inputPassword2 = document.getElementById('password2DeUsuario') 

    if(inputPassword1.value !== inputPassword2.value){

        document.getElementById(`formRegister-item-password2`).classList.remove(`login-container-form-item-okay`)
        document.getElementById(`formRegister-item-password2`).classList.add(`login-container-form-item-notOkay`)
        document.querySelector(`#formRegister-item-password2 i`).classList.remove(`fa-check-circle`)
        document.querySelector(`#formRegister-item-password2 i`).classList.add(`fa-times-circle`)
        document.querySelector(`#formRegister-item-password2 .login-container-form-item-p`).classList.add(`login-container-form-item-p-active`)
        camposValidados.password= false;

    } else{

        document.getElementById(`formRegister-item-password2`).classList.add(`login-container-form-item-okay`)
        document.getElementById(`formRegister-item-password2`).classList.remove(`login-container-form-item-notOkay`)
        document.querySelector(`#formRegister-item-password2 i`).classList.add(`fa-check-circle`)
        document.querySelector(`#formRegister-item-password2 i`).classList.remove(`fa-times-circle`)
        document.querySelector(`#formRegister-item-password2 .login-container-form-item-p`).classList.remove(`login-container-form-item-p-active`)
        camposValidados.password= true;

    }
}


inputsRegister.forEach((inputR) => {
    inputR.addEventListener(`keyup`, validarFormulario)
    inputR.addEventListener(`blur`, validarFormulario)
})

function guardarDatos(){
    localStorage.setItem(`nombre`, document.getElementById(`nombreDeUsuario`).value)
    localStorage.setItem(`apellido`, document.getElementById(`apellidoDeUsuario`).value)
    localStorage.setItem(`dni`, document.getElementById(`dniDeUsuario`).value)
    localStorage.setItem(`email`, document.getElementById(`emailDeUsuario`).value)
    localStorage.setItem(`password`, document.getElementById(`passwordDeUsuario`).value)
    localStorage.setItem(`telefono`, document.getElementById(`telefonoDeUsuario`).value)
}

formularioRegister.addEventListener(`submit`, (e) => {
    e.preventDefault();
    let terminosaceptados = document.getElementById('checkboxTerms')

    if(camposValidados.nombre && camposValidados.apellido && camposValidados.dni && camposValidados.email && camposValidados.password && camposValidados.telefono && terminosaceptados.checked){

        guardarDatos();
        formularioRegister.reset();

        document.querySelector('.form-submit-p').classList.add('form-submit-p-active')

        setTimeout(() => {

            document.querySelector('.form-submit-p').classList.remove('form-submit-p-active')
            window.location.href = "./login.html";

        }, 5000);

        document.querySelectorAll(`.login-container-form-item-okay`).forEach((icono) => {
            icono.classList.remove(`login-container-form-item-okay`)
        })
    }

})
