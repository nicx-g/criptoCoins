import {guardarOperacion, guardarhistorial, validarInput, colocarDatosBasicos, cerrarSesion, getCripto, renderArs, renderUsd} from "../../../js/functions.js";

export default () => {
    const header =
    `<div class="dashboard-header">
    <div class="container">
        <div class="navbar navbar-expand-lg d-flex justify-content-between">
            <a class="mr-auto" href="#/dashboard">
                <img src="./src/resources/images/logo.png" width="250px" alt="Este es el logo de la pag">
            </a>
            <button class="navbar-toggler" data-target="#menu" data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
            <div class="cotizacion d-flex justify-content-between">
                <div class="d-flex justify-content-center align-items-center flex-column">
                    <span>DAI/ARS</span>
                    <div>
                        <span id="dai-ars-sell"></span>
                        <span  id="dai-ars-buy"></span>
                    </div>
                </div>

                <div class="d-flex justify-content-center align-items-center flex-column">
                    <span>DAI/USD</span>
                    <div>
                        <span  id="dai-usd-sell"></span>
                        <span  id="dai-usd-buy"></span>
                    </div>
                </div>
                    
                <div class="d-flex justify-content-center align-items-center flex-column">
                    <span>BTC/ARS</span>
                    <div>
                        <span id="btc-ars-sell"></span>
                        <span id="btc-ars-buy"></span>
                    </div>
                </div>
            </div>
            <div class="criptoUser collapse navbar-collapse" id="menu">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a id="nombreDelUsuarioCripto" class="nav-item dropdown-toggle" data-toggle="dropdown" data-target="desplegable2" href="#"></a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#/dashboard/perfil">Mi Perfil</a>
                            <a class="dropdown-item" href="#/ayuda">Ayuda</a>
                            <button id="btn-sign-out" class="dropdown-item">Cerrar sesión</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>`
    const views =
    `<div class="dashboard-content">
    <div class="container-fluid d-flex">
        <div class="dashboard-content-aside">
            <ul>

                <li><a href="#/dashboard"><i class="fas fa-home"></i> Inicio</a></li>

                <li>
                    <a href="#/dashboard/depositos-y-retiros"><i class="fas fa-piggy-bank"></i>Ingresar y retirar</a>
                    <ul>
                        <li><a href="#/dashboard/depositos-y-retiros/ingresar/ars"><i class="fas fa-dollar-sign"></i>Pesos</a></li>
                        <li><a href="#/dashboard/depositos-y-retiros/ingresar/usd"><i class="fas fa-dollar-sign"></i>Dólares</a></li>
                        <li><a href="#/dashboard/depositos-y-retiros/ingresar/dai"><i class="cf cf-dai"></i>DAI</a></li>
                        <li><a href="#/dashboard/depositos-y-retiros/ingresar/btc"><i class="cf cf-btc"></i>Bitcoin</a></li>
                    </ul>
                </li>
                
                <li>
                    <a href="#/dashboard/operar"><i class="fas fa-handshake"></i>Operar</a>
                    <ul>
                        <li><a href="#/dashboard/operar/compra/daiars">DAI / ARS</a></li>
                        <li><a href="#/dashboard/operar/compra/daiusd">DAI / USD</a></li>
                        <li><a href="#/dashboard/operar/compra/bitcoinars">BTC / ARS</a></li>
                    </ul>
                </li>

            </ul>
        </div>

        <div class="dashboard-content-operar">
            <div class="ingresar-y-retirar-noCripto">
                <div class="ingresar-o-retirar">
                    <a class="active-link" href="#/dashboard/depositos-y-retiros/ingresar/dai">Ingresar</a>
                    <a href="#/dashboard/depositos-y-retiros/retirar/dai">Retirar</a>
                </div> 
                
                <div class="ingresar-o-retirar-noCripto">
                    <div class="ingresar-o-retirar-noCripto-operacion">
                        <h2>¿Cuántos DAI deseas ingresar a tu cuenta?</h2>
                        <form id="form-ingresar-dai" method="POST">
                            <div class="ingresar-o-retirar-noCripto-input d-flex flex-column">
                                <label for="ingresarDai">Insertar cantidad de DAI</label>
                                <input type="text" name="ingresarDai" id="ingresarDai" placeholder="Por ej: 122">
                                <p id="mensaje-de-error" style="display: none">Tenés que ingresar un número</p>
                            </div>
                            <button id="btn-ingresar-dai" type="submit">Ingresar DAI's</button>
                        </form>
                    </div>

                    <div id="mensaje-de-operacion" class="mensaje-de-operacion bg-light" style="display:none">
                        <p>Vas a tener que depositar los DAI en la siguiente dirección para que se te acredite:</p>
                        <p>0xac4f72e7bda732a521dff91a0fb46ee24f1eadbf</p>
                    </div>

                    <div id="mensaje-de-exito" class="mensaje-de-exito bg-success" style="display:none">
                        <p>Por fines prácticos ya tenés los DAI depositados en tu cuenta</p>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
</div>`
    const footer =
    `<div class="dashboard-footer">
    <span class="footer-text d-flex justify-content-center align-items-center">2020 © CriptoCoins. Todos los derechos reservados</span>
</div>`

    const divElement = document.createElement('div');
    divElement.innerHTML = `${header} ${views} ${footer}`;

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // si el User está logueado
            var emailVerified = user.emailVerified;
            let userEmail = user.email
    
            if (emailVerified){
                
                // Si el email está verificado
    
                // Elementos del DOM

                const userNameHeader = divElement.querySelector('#nombreDelUsuarioCripto')
                const btnSignOut = divElement.querySelector("#btn-sign-out");

                const mensaje_de_exito = divElement.querySelector('#mensaje-de-exito');
                const mensaje_de_operacion = divElement.querySelector('#mensaje-de-operacion');
                const mensaje_de_error = divElement.querySelector('#mensaje-de-error')
                
                const input_ingresar_dai = divElement.querySelector('#ingresarDai');
                const btn_ingresar_dai = divElement.querySelector('#btn-ingresar-dai');
                const form_ingresar_dai = divElement.querySelector('#form-ingresar-dai');

                let dai_ars_sell = divElement.querySelector('#dai-ars-sell');
                let dai_usd_sell = divElement.querySelector('#dai-usd-sell');
                let btc_ars_sell = divElement.querySelector('#btc-ars-sell');
                let dai_ars_buy = divElement.querySelector('#dai-ars-buy');
                let dai_usd_buy = divElement.querySelector('#dai-usd-buy');
                let btc_ars_buy = divElement.querySelector('#btc-ars-buy');
                
                $( () => {

                    getCripto(dai_ars_sell, dai_ars_buy, btc_ars_sell, btc_ars_buy, dai_usd_sell, dai_usd_buy);
                    setInterval(getCripto, 30000); // Cada 30 secs
                    colocarDatosBasicos(userEmail, userNameHeader);

                    btnSignOut.addEventListener('click', cerrarSesion);

                    btn_ingresar_dai.addEventListener('click', (e) => {
                        e.preventDefault();

                        if(validarInput(input_ingresar_dai)){

                            input_ingresar_dai.classList.remove("error-input")
                            $(mensaje_de_error).fadeOut();
                            btn_ingresar_dai.disabled = true;
                            input_ingresar_dai.readOnly=true;
                            $(mensaje_de_operacion).fadeIn(500);
                            
                            setTimeout(() => {
                                $(mensaje_de_exito).fadeIn(500)
                                guardarOperacion("dai", "ingreso", input_ingresar_dai, userEmail);
    
                                setTimeout(() => {
                                    $(mensaje_de_operacion).fadeOut(500);
                                    $(mensaje_de_exito).fadeOut(500);
                                    input_ingresar_dai.readOnly = false;
                                    btn_ingresar_dai.disabled = false;
                                    form_ingresar_dai.reset();
                                }, 5000);

                            }, 4000);

                        } else{
                            input_ingresar_dai.classList.add("error-input")
                            $(mensaje_de_error).fadeIn();

                            setTimeout(() => {
                                input_ingresar_dai.classList.remove("error-input")
                                $(mensaje_de_error).fadeOut();
                            }, 3000);

                        }
                    });

                })
    
            } else{
    
                // Si el email no está verificado
    
                window.location.href = "#/login"
            }
            
        } else {
            // si el user no está logueado
            window.location.href = "#/login"
        }
        });


    return divElement;
}