export default () => {
    const header = 
    `<div class="menu-header">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg d-flex justify-content-between">
            <a class="header-logo d-flex align-items-center" href="#/home">
                <img src="https://via.placeholder.com/200x60?=logo" alt="Este es el logo de la pag">
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
    `<div class="register d-flex justify-content-center align-items-center flex-column">
    <div class="container d-flex justify-content-center align-items-center">
        <div class="register-container">
            <div class="register-container-text d-flex flex-column justify-content-center">
                <h1>Iniciar sesión</h1>
                <span>Ingrese sus datos para entrar a la plataforma</span>
            </div>
            <div>
                <form id="login-form" class="register-container-form d-flex flex-column" method="POST">

                    <div class="register-container-form-item" id="formLogin-item-email">
                        <label for="emailLoginDeUsuario">Email</label>
                        <input required type="text" name="emailDeUsuario" id="emailLoginDeUsuario" placeholder="ingrese su email">

                    </div>

                    <div class="register-container-form-item" id="formLogin-item-password">
                        <label for="passwordLoginDeUsuario">Contraseña</label>
                        <input required type="password" name="contrasenaDeUsuario" id="passwordLoginDeUsuario" placeholder="ingrese su contraseña">
                    </div>
                    
                    <div>
                        <label><input type="checkbox" id="checkboxLogin">Mantener sesión iniciada</label>
                    </div>

                    <div class="register-container-form-item  registerForm-submit" id="formLogin-item-submit">
                        <input type="submit" value="Iniciar sesión">
                        <p class="register-container-form-item registerForm-submit-errorForm">Usuario y/o contraseña incorrectos. Intente nuevamente</p>
                        <p class="register-container-form-item registerForm-submit-errorEmail">Si ya estás logueado y el email no fue verificado no vas a poder ingresar a la plataforma, por favor, verificalo primero. Si ya lo verificaste, recargá la página y te debería dejar entrar. Si el email todavía no te llegó, disculpá, a esperar, no te queda otra ahre o crea otra cuenta (la mejor user experience del mundo)</p>
                    </div>
            
                    <div class="d-flex flex-column">
                        <a href="#">Olvidé mi contraseña</a>
                        <span>¿No tenés una cuenta todavía? <a href="#/register">Crear cuenta</a></span>
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
    const divElement = document.createElement('div');
    divElement.innerHTML = `${header} ${views} ${footer}`;

    //Código JS
    
    const formularioLogin = divElement.querySelector(`#login-form`)

    const inputFocus = divElement.querySelector('#emailLoginDeUsuario');

    $(() => {
        inputFocus.focus();
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    })

    authFirestore.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          let emailVerificado = user.emailVerified;
    
          if(emailVerificado){
    
              window.location.href = "#/dashboard"
    
          } else{
    
            divElement.querySelector(`.registerForm-submit-errorEmail`).classList.add('registerForm-submit-errorEmail-active')
    
          }
    
        } else {
          // User is signed out.
          formularioLogin.addEventListener('submit', async(e) => {
    
            e.preventDefault();
        
            let emailLogin = divElement.querySelector(`#emailLoginDeUsuario`).value;
            let passwordLogin = divElement.querySelector(`#passwordLoginDeUsuario`).value;
        
            await firebase.auth().signOut();
            
            firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
            .then(() => {
        
                divElement.querySelector(`.registerForm-submit-errorForm`).classList.remove('registerForm-submit-errorForm-active')
                window.location.href = "#/dashboard"
        
            })
            .catch(() => {
                
                divElement.querySelector(`.registerForm-submit-errorForm`).classList.add('registerForm-submit-errorForm-active')
        
            })
        })
        }
      });
    
    

    return divElement;
}