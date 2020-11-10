const formularioRegister = document.getElementById("formularioRegister")

const inputsRegister = document.querySelectorAll('#formularioRegister input');


// Estas expresiones las estoy usando para las validaciones de los campos 

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios con acentos
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios con acentos
    dni: /^\d{8,8}$/, // sólo 8 números
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{6,20}$/, // 6 a 20 digitos
    telefono: /^\d{7,14}$/, // 7 a 14 numeros
}

//Este objeto se sobreescribe cuando todos los inputs fueron correctamente validados

const camposValidados = {
    nombre: false,
    apellido: false,
    dni: false,
    email: false,
    password: false,
    telefono: false
}

//No pienso usar frameworks para esto como cierto vago *cos *cos MyFood

//Función que valida cada uno de los inputs

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

//Función general que valida los inputs

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

//Esta función es para validar que las dos contraseñas sean iguales

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

//Esta función es para escuchar el keyup y el blur de todos los inputs que existen en el formulario y ejecuta la función validarFormulario que se encuentra más arriba

inputsRegister.forEach((inputR) => {
    inputR.addEventListener(`keyup`, validarFormulario)
    inputR.addEventListener(`blur`, validarFormulario)
})


// Guardar datos tanto en la base de datos de FireStore como para guardar al usuario en el firebase Auth

async function guardarDatos(){

    let nombreValue = document.getElementById('nombreDeUsuario').value
    let apellidoValue = document.getElementById('apellidoDeUsuario').value
    let dniValue = document.getElementById('dniDeUsuario').value
    let emailValue = document.getElementById('emailDeUsuario').value
    let passwordValue = document.getElementById('passwordDeUsuario').value
    let telefonoValue = document.getElementById('telefonoDeUsuario').value

    let usersData = firestore.doc(`Users/${emailValue}`)

    await usersData.set({
        nombre: nombreValue,
        apellido: apellidoValue,
        dni: dniValue,
        email: emailValue,
        password: passwordValue,
        telefono: telefonoValue,
    });

   await authFirestore.createUserWithEmailAndPassword(emailValue, passwordValue);

}


formularioRegister.addEventListener(`submit`, async (e) => {

    e.preventDefault(); // Evita que el botón ejecute la acción
    
    let terminosaceptados = document.getElementById('checkboxTerms')

    let emailValue = document.getElementById('emailDeUsuario').value
    let usersData = firestore.doc(`Users/${emailValue}`)

    if(camposValidados.nombre && camposValidados.apellido && camposValidados.dni && camposValidados.email && camposValidados.password && camposValidados.telefono && terminosaceptados.checked){

        await guardarDatos(); 
        formularioRegister.reset(); // resetea completamente el formulario

        let enviarEmailDeVerificacion = firebase.auth().currentUser; //

        await enviarEmailDeVerificacion.sendEmailVerification()
        .then(()=>{
            //Ignorar, esta es una función que hace algo si se envió el email correctamente, están acá porque si no me deja mandar el email de verificación
        })
        .catch(() => {
            //y este el caso contrario, si salió mal
        })

        firebase.auth().signOut() // Por alguna razón el usuario automáticamente se me loguea cuando se registra, con esto logro que se desloguee automáticamente una vez manda el formulario

        document.querySelector('.form-submit-okay').classList.add('form-submit-okay-active') //añade el mensaje de éxito
        document.querySelector(".form-submit-error").classList.remove("form-submit-error-active") //elimina el mensaje de error en caso de que estuviera

        document.querySelectorAll(`.login-container-form-item-okay`).forEach((icono) => {
            icono.classList.remove(`login-container-form-item-okay`)
        }) // elimina todos los icons

        setTimeout(() => {

            document.querySelector('.form-submit-okay').classList.remove('form-submit-okay-active') //elimina el mensaje de éxito
            window.location.href = "./login.html" //Lleva al login 

        }, 13000); // en 13 segundos

    } else{
        document.querySelector(".form-submit-error").classList.add("form-submit-error-active") //mensaje de erorr en caso de que algo saliera mal
    }

})
