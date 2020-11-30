import {getCripto, colocarDatosBasicos, cerrarSesion, getCotizacion, validarFondos, validarInputCompraVenta, guardarOperacionDeCompraVenta, guardarHistorialCompraVentaYCotizacion} from "../../../js/functions.js";

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
                    <a href="#/dashboard/operar/compra/daiusd">Comprar</a>
                    <a class="active-link" href="#/dashboard/operar/venta/daiusd">Vender</a>
                </div> 
                
                <div class="ingresar-o-retirar-cripto flex-column d-flex justify-content-center align-items-center">
                    <div class="ingresar-o-retirar-cripto-operacion d-flex flex-column align-items-center">
                        <h2>Vender DAI por USD</h2>
                        <form method="POST" id="form-compraventa" class="d-flex flex-column align-items-center">
                            <div class="ingresar-o-retirar-cripto-input d-flex">
                                <div class="d-flex align-items-center justify-content-center flex-column">
                                    <label for="moneyLeft">DAI que vas a vender</label>
                                    <input type="text" name="moneyLeft" id="moneyLeft" placeholder="0">
                                </div>
                                <div class="d-flex align-items-center justify-content-center flex-column">
                                    <label for="moneyRight">USD que vas a recibir</label>
                                    <input type="text" name="moneyRight" id="moneyRight" placeholder="0">
                                </div>
                            </div>
                            <p id="cotizacionOperacion">Tu cotización es: </p>
                            
                            <label for="juramento"><input type="checkbox" name="juramento" id="juramento">Al continuar declaro bajo juramento que mis fondos no provienen de planes y programas sociales en Argentina.</label>
                            <button id="confirmOperation" type="submit">Confirmar operación</button>
                        </form>
                        <p id="errorFondos" style="display:none; color:red;">No tenés los fondos suficientes</p>
                        <p id="errorInput" style="display:none; color:red;">Ingresá un número válido. El monto tiene que ser mayor a 1</p>
                        <p id="errorJuramento" style="display:none; color:red;">Para continuar tenés que confirmar la declaración jurada</p>
                    </div>

                    <div class="mensaje-de-exito bg-success" style="display:none">
                        <p>Ya están los dólares acreditados en tu cuenta</p>
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

                let dai_ars_sell = divElement.querySelector('#dai-ars-sell');
                let dai_usd_sell = divElement.querySelector('#dai-usd-sell');
                let btc_ars_sell = divElement.querySelector('#btc-ars-sell');
                let dai_ars_buy = divElement.querySelector('#dai-ars-buy');
                let dai_usd_buy = divElement.querySelector('#dai-usd-buy');
                let btc_ars_buy = divElement.querySelector('#btc-ars-buy');

                const moneyLeft = divElement.querySelector('#moneyLeft');
                const moneyRight = divElement.querySelector('#moneyRight');
                const cotizacionOperacion = divElement.querySelector('#cotizacionOperacion');
                const btnConfirmOperation = divElement.querySelector('#confirmOperation');
                const juramento = divElement.querySelector('#juramento');
                const errorFondos = divElement.querySelector('#errorFondos');
                const errorInput = divElement.querySelector('#errorInput');
                const errorJuramento = divElement.querySelector('#errorJuramento');
                const mensajeDeExito = divElement.querySelector(".mensaje-de-exito");
                const formCompraVenta = divElement.querySelector('#form-compraventa')

                $(async()=>{

                    await getCripto(dai_ars_sell, dai_ars_buy, btc_ars_sell, btc_ars_buy, dai_usd_sell, dai_usd_buy);
                         setInterval(await getCripto, 30000, dai_ars_sell, dai_ars_buy, btc_ars_sell, btc_ars_buy, dai_usd_sell, dai_usd_buy); // Cada 30 secs
                    
                    colocarDatosBasicos(userEmail, userNameHeader);

                    btnSignOut.addEventListener('click', cerrarSesion);

                    
                    moneyLeft.addEventListener('keyup', () => {
                      getCotizacion("USD", "venta","left", "daiusd", moneyLeft, moneyRight, cotizacionOperacion);  
                    }) 
                    moneyRight.addEventListener('keyup', () => {
                      getCotizacion("USD", "venta", "right", "daiusd", moneyLeft, moneyRight, cotizacionOperacion);  
                    }) 
                    moneyLeft.addEventListener('blur', () => {
                      getCotizacion("USD", "venta","left", "daiusd", moneyLeft, moneyRight, cotizacionOperacion);  
                    }) 
                    moneyRight.addEventListener('blur', () => {
                      getCotizacion("USD", "venta", "right", "daiusd", moneyLeft, moneyRight, cotizacionOperacion);  
                    }) 

                    $(btnConfirmOperation).on('click', async (e) => {
                        e.preventDefault();

                        let validaciones = {
                            fondos: false,
                            campoRelleno: false,
                            checked: false,
                        }
                        
                        let respuestaALosFondos = await validarFondos(userEmail, "dai", moneyRight, moneyLeft);

                        
                        // Si tiene fondos o no
                        if (respuestaALosFondos == true){
                            $(errorFondos).fadeOut();
                            validaciones.fondos = true;

                        } else{
                            $(errorFondos).fadeIn();
                            validaciones.fondos = false;
                        }

                        // Si colocó correctamente un número mayor a 1
                        if (validarInputCompraVenta(moneyLeft, moneyRight) == true){
                            $(errorInput).fadeOut();
                            validaciones.campoRelleno = true;
                        } else {
                            $(errorInput).fadeIn();
                            validaciones.campoRelleno = false;
                        }

                        // Si checkeó el checkbox que hace alusión al juramento
                        if (juramento.checked){
                            $(errorJuramento).fadeOut();
                            validaciones.checked = true;

                        } else{
                            $(errorJuramento).fadeIn();
                            validaciones.checked = false;
                        }

                        // Checkea si se cumplen las 3 condiciones
                        if(validaciones.fondos && validaciones.campoRelleno && validaciones.checked){

                            $(errorJuramento).fadeOut();
                            $(errorInput).fadeOut();    
                            $(errorFondos).fadeOut();
                            
                            $(mensajeDeExito).fadeIn();
                            moneyLeft.readOnly = true;
                            moneyRight.readOnly = true;
                            btnConfirmOperation.disabled = true;

                            await guardarOperacionDeCompraVenta(userEmail, moneyLeft, moneyRight, "venta", "daiusd")
                            await guardarHistorialCompraVentaYCotizacion("USD", userEmail, "venta", "daiusd", moneyLeft);

                            setTimeout(() => {
                                $(mensajeDeExito).fadeOut();
                                moneyLeft.readOnly = false;
                                moneyRight.readOnly = false;
                                btnConfirmOperation.disabled = false;
                                formCompraVenta.reset();

                            }, 5000);

                        }
                    })

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

    return divElement
}