export default () => {
    const header =
    `<div class="menu-header">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg d-flex justify-content-between">
            <a class="header-logo d-flex align-items-center" href="#/home">
                <img src="./src/resources/images/logo.png" alt="Este es el logo de la pag" width= "300px">
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
                                <a class="que-es-cripto-link" >¿Qué es cripto?</a>
                            </div>
                            <div class="dropdown-item">
                                <a class="about-us-link"> Sobre nosotros</a>
                            </div>
                            <div class="dropdown-item">
                                <a class="step-by-step-link">Paso a paso</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item"><a class="get-app-link">Descargá la app</a></li>
                    <li class="nav-item"><a class="contact-link">Contacto</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-item dropdown-toggle" data-toggle="dropdown" data-target="desplegable2" >Ingresar/Registrarse</a>
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
</div>`
    const views =
    `<div class="error-404 d-flex flex-column justify-content-center align-items-center">
    <h1>404</h1>
    <h2>Parece que algo salió mal ;(</h2>
</div>`
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
</div>`

    const divElement = document.createElement('div');
    divElement.innerHTML = `${header} ${views} ${footer}`;

        // Increíblemente no hay código de js

    return divElement
}