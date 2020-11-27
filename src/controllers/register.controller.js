export default () =>{
    const header = 
    `<div class="menu-header">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg d-flex justify-content-between">
            <a class="header-logo d-flex align-items-center" href="#/home">
                <img src="./src/resources/images/logo.png" width="250px" alt="Este es el logo de la pag">
            </a>
            <button class="navbar-toggler" data-target="#menu" data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-item dropdown-toggle" data-toggle="dropdown" data-target="desplegable" href="#">Inicio</a>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">
                                <a href="#">¿Qué es cripto?</a>
                            </div>
                            <div class="dropdown-item">
                                <a href="#"> Sobre nosotros</a>
                            </div>
                            <div class="dropdown-item">
                                <a href="#">Paso a paso</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item"><a href="#">Descargá la app</a></li>
                    <li class="nav-item"><a href="#">Contacto</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-item dropdown-toggle" data-toggle="dropdown" data-target="desplegable2" href="#">Ingresar/Registrarse</a>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">
                                <a href="#/login">Iniciar sesión</a>
                            </div> 
                            <div class="dropdown-item">
                                <a href="#/register">Registrarse</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>`;
    const views = 
    `<div class="login d-flex justify-content-center align-items-center flex-column">
    <div class="container d-flex justify-content-center align-items-center">
        <div class="login-container">
            <div class="login-container-text d-flex flex-column justify-content-center">
                <h1>Crear cuenta</h1>
                <span>Ingrese sus datos para crear su cuenta en Cripto Coins</span>
            </div>
            <div>
                <form id="formularioRegister" class="login-container-form d-flex flex-column" action="" method="POST">

                    <div class="login-container-form-item" id="formRegister-item-nombre">
                        <label for="nombreDeUsuario">Nombre</label>
                        <div class="login-container-form-item-input">
                            <input required type="text" name="nombreDeUsuario" id="nombreDeUsuario" placeholder="Ingresá tu nombre. Ejemplo: Pepe">
                            <i class="login-container-form-item-input-i far fa-times-circle"></i>
                        </div>
                        <p class="login-container-form-item-p">Ingresá un nombre válido, por favor.</p>
                    </div>

                    <div class="login-container-form-item" id="formRegister-item-apellido">
                        <label for="apellidoDeUsuario">Apellido</label>
                        <div class="login-container-form-item-input">
                            <input required type="text" name="apellidoDeUsuario" id="apellidoDeUsuario" placeholder="Ingresá tu apellido. Ejemplo: Quiroga">
                            <i class="login-container-form-item-input-i far fa-times-circle"></i>
                        </div>
                        <p class="login-container-form-item-p">Ingresá un apellido válido, por favor</p>
                    </div>

                    <div class="login-container-form-item" id="formRegister-item-dni">
                        <label for="dniDeUsuario">DNI</label>
                        <div class="login-container-form-item-input">
                            <input required type="text" name="dniDeUsuario" id="dniDeUsuario" placeholder="Ingresá tu DNI. Ejemplo: 34153167">
                            <i class="login-container-form-item-input-i far fa-times-circle"></i>
                        </div>
                        <p class="login-container-form-item-p">Lo sentimos, ese DNI no es válido.</p>
                    </div>

                    <div class="login-container-form-item" id="formRegister-item-email">
                        <label for="emailDeUsuario">Email</label>
                        <div class="login-container-form-item-input">
                            <input required type="email" name="emailDeUsuario" id="emailDeUsuario" placeholder="Ingresá tu email. Ejemplo: pepequiroga@gmail.com">
                            <i class="login-container-form-item-input-i far fa-times-circle"></i>
                        </div>
                        <p class="login-container-form-item-p">Ingresá un email válido, por favor.</p>
                    </div>

                    <div class="login-container-form-item" id="formRegister-item-password">
                        <label for="passwordDeUsuario">Contraseña</label>
                        <div class="login-container-form-item-input">
                            <input required type="password" name="passwordDeUsuario" id="passwordDeUsuario" placeholder="ingrese su contraseña">
                            <i class="login-container-form-item-input-i far fa-times-circle"></i>
                        </div>
                        <p class="login-container-form-item-p">Ingresá una contraseña mayor a 6 carácteres, por favor.</p>
                    </div>

                    <div class="login-container-form-item" id="formRegister-item-password2">
                        <label for="password2DeUsuario">Repetir Contraseña</label>
                        <div class="login-container-form-item-input">
                            <input required type="password" name="password2DeUsuario" id="password2DeUsuario" placeholder="ingrese su contraseña">
                            <i class="login-container-form-item-input-i far fa-times-circle"></i>
                        </div>
                        <p class="login-container-form-item-p">Las contraseñas tienen que ser iguales.</p>
                    </div>

                    <div class="login-container-form-item" id="formRegister-item-telefono">
                        <label for="telefonoDeUsuario">Número de teléfono</label>
                        <div class="login-container-form-item-input">
                            <input required type="text" name="telefonoDeUsuario" id="telefonoDeUsuario" placeholder="Ingrese su número de teléfono. Ejemplo: 1125478451">
                            <i class="login-container-form-item-input-i far fa-times-circle"></i>
                        </div>
                        <p class="login-container-form-item-p">Ese número de teléfono no es válido.</p>
                    </div>
            
                    <div class="login-container-form-item form-checkbox">
                        <label>
                            <input id="checkboxTerms" type="checkbox">Acepto los <a href="#">términos y condiciones</a>
                        </label>
                    </div>

                    <div class="login-container-form-item form-submit">
                        <input type="submit" value="Enviar">
                        <p class="login-container-form-item form-submit-okay">Tu cuenta ya ha sido creada. ¡Te enviamos un email para que verifiques la cuenta! Puede que tarde unos minutos, tené paciencia. Serás redigirido automáticamente para que ingreses a la plataforma.</p>
                        <p class="login-container-form-item form-submit-error">Hay un error en el formulario o la cuenta ya existe, intente nuevamente</p>
                    </div>
            
                    <div class="login-container-form-text d-flex flex-column">
                        <span>¿Ya tenés una cuenta? <a href="#/login">Iniciar sesión</a></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`;
    const footer =
        `<div class="footer-container">
        <div class="container d-flex flex-column">
            <div class="footer-container-sections d-flex justify-content-around">
                <div class="footer-container-sections-item">
                    <h5>Cuenta</h5>
                    <ul>
                        <li><a href="./src/views/register.html">Crear cuenta</a></li>
                        <li><a href="./src/views/login.html">Iniciar sesión</a></li>
                        <li><a href="#">Trading</a></li>
                        <li><a href="#">Depósitos</a></li>
                        <li><a href="#">Retiros</a></li>
                        <li><a href="#">Seguridad de la cuenta</a></li>
                    </ul>
                </div>

                <div class="footer-container-sections-item">
                    <h5>General</h5>
                    <ul>
                        <li><a href="#">Estado del sitio</a></li>
                        <li><a href="#">Comisiones</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div class="footer-container-sections-item">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Política de Cookies</a></li>
                        <li><a href="#">Riesgo de mercado</a></li>
                    </ul>
                </div>
            </div>
        
            <div class="autor align-self-center">
                <span>This page was made with ❤️ by <a href="https://github.com/nicx-g" target="_blank">nicx-g</a></span>
            </div>
        </div>
    </div>`;


    const divElement = document.createElement("div");
    divElement.innerHTML = `${header} ${views} ${footer}`;

    //CÓDIGO JS

    const formularioRegister = divElement.querySelector("#formularioRegister")

    const inputsRegister = divElement.querySelectorAll('#formularioRegister input');
    
    const inputFocus = divElement.querySelector('#nombreDeUsuario');

    $(()=>{
        inputFocus.focus();  
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    })
    
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
    
            divElement.querySelector(`#formRegister-item-${campo}`).classList.remove(`login-container-form-item-notOkay`)
            divElement.querySelector(`#formRegister-item-${campo}`).classList.add(`login-container-form-item-okay`)
            divElement.querySelector(`#formRegister-item-${campo} i`).classList.remove(`fa-times-circle`)
            divElement.querySelector(`#formRegister-item-${campo} i`).classList.add(`fa-check-circle`)
            divElement.querySelector(`#formRegister-item-${campo} p`).classList.remove(`login-container-form-item-p-active`)
            camposValidados[campo]= true;
    
        } else {
    
            divElement.querySelector(`#formRegister-item-${campo}`).classList.remove(`login-container-form-item-okay`)
            divElement.querySelector(`#formRegister-item-${campo}`).classList.add(`login-container-form-item-notOkay`)
            divElement.querySelector(`#formRegister-item-${campo} i`).classList.remove(`fa-check-circle`)
            divElement.querySelector(`#formRegister-item-${campo} i`).classList.add(`fa-times-circle`)
            divElement.querySelector(`#formRegister-item-${campo} .login-container-form-item-p`).classList.add(`login-container-form-item-p-active`)
            camposValidados[campo]= false;
    
        }
    
    }
    
    //Esta función es para validar que las dos contraseñas sean iguales
    
    let validarContra = () => {
    
        let inputPassword1 = divElement.querySelector('#passwordDeUsuario') 
        let inputPassword2 = divElement.querySelector('#password2DeUsuario') 
    
        if(inputPassword1.value !== inputPassword2.value){
    
            divElement.querySelector(`#formRegister-item-password2`).classList.remove(`login-container-form-item-okay`)
            divElement.querySelector(`#formRegister-item-password2`).classList.add(`login-container-form-item-notOkay`)
            divElement.querySelector(`#formRegister-item-password2 i`).classList.remove(`fa-check-circle`)
            divElement.querySelector(`#formRegister-item-password2 i`).classList.add(`fa-times-circle`)
            divElement.querySelector(`#formRegister-item-password2 .login-container-form-item-p`).classList.add(`login-container-form-item-p-active`)
            camposValidados.password= false;
    
        } else{
    
            divElement.querySelector(`#formRegister-item-password2`).classList.add(`login-container-form-item-okay`)
            divElement.querySelector(`#formRegister-item-password2`).classList.remove(`login-container-form-item-notOkay`)
            divElement.querySelector(`#formRegister-item-password2 i`).classList.add(`fa-check-circle`)
            divElement.querySelector(`#formRegister-item-password2 i`).classList.remove(`fa-times-circle`)
            divElement.querySelector(`#formRegister-item-password2 .login-container-form-item-p`).classList.remove(`login-container-form-item-p-active`)
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
    
        let nombreValue = divElement.querySelector('#nombreDeUsuario').value;
        let apellidoValue = divElement.querySelector('#apellidoDeUsuario').value;
        let dniValue = divElement.querySelector('#dniDeUsuario').value;
        let emailValue = divElement.querySelector('#emailDeUsuario').value;
        let passwordValue = divElement.querySelector('#passwordDeUsuario').value;
        let telefonoValue = divElement.querySelector('#telefonoDeUsuario').value;
    
        const usersData = firestore.doc(`Users/${emailValue}`);

        const userMoney = firestore.doc(`Users/${emailValue}/operaciones/monedero`); //Base de datos de monedero

    
        await usersData.set({
            nombre: nombreValue,
            apellido: apellidoValue,
            dni: dniValue,
            email: emailValue,
            password: passwordValue,
            telefono: telefonoValue,
        });

        await userMoney.set({
            ars: 0,
            usd: 0,
            dai: 0,
            btc: 0
        });
    
       await authFirestore.createUserWithEmailAndPassword(emailValue, passwordValue);
    
    }
    
    
    formularioRegister.addEventListener(`submit`, async (e) => {
    
        e.preventDefault(); // Evita que el botón ejecute la acción
        
        let terminosaceptados = divElement.querySelector('#checkboxTerms')
    
        let emailValue = divElement.querySelector('#emailDeUsuario').value
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
    
            divElement.querySelector('.form-submit-okay').classList.add('form-submit-okay-active') //añade el mensaje de éxito
            divElement.querySelector(".form-submit-error").classList.remove("form-submit-error-active") //elimina el mensaje de error en caso de que estuviera
    
            divElement.querySelectorAll(`.login-container-form-item-okay`).forEach((icono) => {
                icono.classList.remove(`login-container-form-item-okay`)
            }) // elimina todos los icons
    
            setTimeout(() => {
    
                divElement.querySelector('.form-submit-okay').classList.remove('form-submit-okay-active') //elimina el mensaje de éxito
                window.location.href = "#/login" //Lleva al login 
    
            }, 13000); // en 13 segundos
    
        } else{
            divElement.querySelector(".form-submit-error").classList.add("form-submit-error-active") //mensaje de erorr en caso de que algo saliera mal
        }
    
    })
    

    return divElement
}