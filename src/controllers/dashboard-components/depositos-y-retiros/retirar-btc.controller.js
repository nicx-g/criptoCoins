export default () => {
    const header =
    `<div class="dashboard-header">
    <div class="container">
        <div class="navbar navbar-expand-lg d-flex justify-content-between">
            <a class="mr-auto" href="#/dashboard">
                <img src="https://via.placeholder.com/200x60?=logo" alt="Este es el logo de la pag">
            </a>
            <button class="navbar-toggler" data-target="#menu" data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
            <div class="cotizacion d-flex justify-content-between">
                <div class="d-flex justify-content-center align-items-center flex-column">
                    <span>DAI/ARS</span>
                    <div>
                        <span>123</span>
                        <span>123</span>
                    </div>
                </div>

                <div class="d-flex justify-content-center align-items-center flex-column">
                    <span>DAI/USD</span>
                    <div>
                        <span>1.006</span>
                        <span>1.001239</span>
                    </div>
                </div>
                    
                <div class="d-flex justify-content-center align-items-center flex-column">
                    <span>BTC/ARS</span>
                    <div>
                        <span>41515</span>
                        <span>3546546132</span>
                    </div>
                </div>
            </div>
            <div class="criptoUser collapse navbar-collapse" id="menu">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a id="nombreDelUsuarioCripto" class="nav-item dropdown-toggle" data-toggle="dropdown" data-target="desplegable2" href="#">Nicolás Gomez</a>
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
                    <a href="#/dashboard/depositos-y-retiros/ingresar/btc">Ingresar</a>
                    <a class="active-link" href="#/dashboard/depositos-y-retiros/retirar/btc">Retirar</a>
                </div> 
                
                <div class="ingresar-o-retirar-noCripto">
                    <div class="ingresar-o-retirar-noCripto-operacion">
                        <h2>¿Cuántos Bitcoin's deseas retirar de tu cuenta?</h2>
                        <form id="form-retirar-btc">
                            <div class="ingresar-o-retirar-noCripto-input d-flex flex-column">
                                <label for="retirarBtc">Insertar cantidad de Bitcoin</label>
                                <input type="text" name="retirarBtc" id="retirarBtc" placeholder="Por ej: 0.0095">
                                <p id="mensaje-de-error" style="display: none">Tenés que ingresar un número</p>

                                <label for="wallet-btc">Insertar dirección de la Wallet.</label>
                                <input type="text" name="wallet-btc" id="wallet-btc" placeholder="Por ej: 0xac4f72e7bda732a521dff91a0fb46ee24f1eadbf">
                                <p id="mensaje-de-error" style="display: none">Tenés que ingresar una dirección de wallet válida</p>
                            </div>
                            <button id="btn-retirar-btc" type="submit">Enviar Bitcoin</button>
                        </form>

                    <div id="mensaje-de-exito" class="mensaje-de-exito bg-success" style="display:none">
                        <p>Operación realizada con éxito. Debido a la congestión de la blockchain este proceso puede demorar.</p>
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

    //Codigo JS
    
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // si el User está logueado
            var emailVerified = user.emailVerified;
            let userEmail = user.email
    
            if (emailVerified){
                
                // Si el email está verificado
    
                //Ruta de base de datos
                
                const userDataBase = firestore.doc(`Users/${userEmail}`); //Base de datos
                const userHistory = firestore.collection(`Users/${userEmail}/historial`);
                const userHistory_depositos_y_retiros = firestore.collection(`Users/${userEmail}/historial/depositos-y-retiros/data`);
                const userMoney = firestore.doc(`Users/${userEmail}/operaciones/monedero`); //Base de datos de monedero

                //Get datos

                const getUserData = () => userDataBase.get()

                // elementos del DOM

                const userNameHeader = divElement.querySelector('#nombreDelUsuarioCripto')

                const mensaje_de_exito = divElement.querySelector('#mensaje-de-exito');
                const mensaje_de_error = divElement.querySelectorAll('#mensaje-de-error')

                const input_retirar_btc = divElement.querySelector('#retirarBtc');
                const btn_retirar_btc = divElement.querySelector('#btn-retirar-btc');
                const form_retirar_btc = divElement.querySelector('#form-retirar-btc');

                // Funciones
                
                $(async (e) => {

                    const userData = await getUserData();
                    const userName = userData.data().nombre;
                    const userLastname = userData.data().apellido;

                    userNameHeader.innerHTML = `${userName} ${userLastname}`
                })
                // Esta función
                async function guardarOperacion(monedaQueModifica, retiroOIngreso, input) {

                    let valueMoney = parseFloat(input.value);

                    let getMoney = await userMoney.get();

                    let ars_actual = await getMoney.data().ars;
                    let usd_actual = await getMoney.data().usd;
                    let dai_actual = await getMoney.data().dai;
                    let btc_actual = await getMoney.data().btc;

                    switch (monedaQueModifica) {
                        case "ars":
                            if(retiroOIngreso == "retiro"){

                                let moneda_actual = ars_actual - valueMoney

                                userMoney.set({
                                    ars: moneda_actual,
                                    usd: usd_actual,
                                    dai: dai_actual,
                                    btc: btc_actual
                                });

                                guardarhistorial("Retiro de ARS", valueMoney);

                            } else if (retiroOIngreso == "ingreso"){

                                let moneda_actual = valueMoney + ars_actual

                                userMoney.set({
                                    ars: moneda_actual,
                                    usd: usd_actual,
                                    dai: dai_actual,
                                    btc: btc_actual
                                });

                                guardarhistorial("Ingreso de ARS", valueMoney);
                            }
                            break;

                        case "usd":
                            if(retiroOIngreso == "retiro"){

                                let moneda_actual = usd_actual - valueMoney

                                userMoney.set({
                                    ars: ars_actual,
                                    usd: moneda_actual,
                                    dai: dai_actual,
                                    btc: btc_actual
                                });

                                guardarhistorial("Retiro de USD", valueMoney);

                            } else if (retiroOIngreso == "ingreso"){

                                let moneda_actual = valueMoney + usd_actual

                                userMoney.set({
                                    ars: ars_actual,
                                    usd: moneda_actual,
                                    dai: dai_actual,
                                    btc: btc_actual
                                });

                                guardarhistorial("Ingreso de USD", valueMoney);
                            }
                            break;

                        case "dai":
                            if(retiroOIngreso == "retiro"){

                                let moneda_actual = dai_actual - valueMoney 

                                userMoney.set({
                                    ars: ars_actual,
                                    usd: ars_actual,
                                    dai: moneda_actual,
                                    btc: btc_actual
                                });

                                guardarhistorial("Retiro de DAI", valueMoney);

                            } else if (retiroOIngreso == "ingreso"){

                                let moneda_actual = valueMoney + dai_actual

                                userMoney.set({
                                    ars: ars_actual,
                                    usd: usd_actual,
                                    dai: moneda_actual,
                                    btc: btc_actual
                                });

                                guardarhistorial("Ingreso de DAI", valueMoney);
                            }

                            break;
                        case "btc":
                            if(retiroOIngreso == "retiro"){

                                let moneda_actual = btc_actual - valueMoney

                                userMoney.set({
                                    ars: ars_actual,
                                    usd: ars_actual,
                                    dai: dai_actual,
                                    btc: moneda_actual
                                });

                                guardarhistorial("Retiro de BTC", valueMoney);

                            } else if (retiroOIngreso == "ingreso"){

                                let moneda_actual = valueMoney + btc_actual

                                userMoney.set({
                                    ars: ars_actual,
                                    usd: usd_actual,
                                    dai: dai_actual,
                                    btc: moneda_actual
                                });

                                guardarhistorial("Ingreso de BTC", valueMoney);
                            }    

                            break;
                    }
                } 
                
                
                async function guardarhistorial(operacion, monto){

                    let hoy = new Date();
                    
                    const fechaActual = `${hoy.getDate()}-${hoy.getMonth() + 1}-${hoy.getFullYear()}`;
                    const hora = hoy.getHours();
                    const minuto = hoy.getMinutes();
                    let horaPosta = "";
                    let minutoPosta = "";

                    if (hora < 10){
                        horaPosta = `0${hora}`
                    } else{
                        horaPosta = hora;
                    }
                    if (minuto < 10){
                        minutoPosta = `0${minuto}`
                    } else{
                        minutoPosta = minuto;
                    }

                    userHistory_depositos_y_retiros.add({
                        titulo: `<i class="fas fa-piggy-bank"></i>${operacion}`,
                        monto: monto,
                        fecha: fechaActual,
                        hora: `${horaPosta}:${minutoPosta}`
                    })

                    userHistory.add({
                        titulo: `<i class="fas fa-piggy-bank"></i>${operacion}`,
                        monto: monto,
                        fecha: fechaActual,
                        hora: `${horaPosta}:${minutoPosta}`
                    })
                }

                function validarInput(inputId){
                    let checkearInput = inputId.value
                    
                    if(!isNaN(checkearInput)){
                        return true;
                    } else{
                        return false;
                    }
                }

                $(()=>{

                    btn_retirar_btc.addEventListener('click', (e) => {
                        e.preventDefault();

                        if(validarInput(input_retirar_btc)){

                            input_retirar_btc.classList.remove("error-input")
                            $(mensaje_de_error).fadeOut();
                            btn_retirar_btc.disabled = true;
                            input_retirar_btc.readOnly=true;
                            $(mensaje_de_exito).fadeIn(500)
                            guardarOperacion("btc", "retiro", input_retirar_btc);
                            
                            setTimeout(() => {
    
                                $(mensaje_de_exito).fadeOut(500);
                                input_retirar_btc.readOnly = false;
                                btn_retirar_btc.disabled = false;
                                form_retirar_btc.reset();
                                
                            }, 4000);
                        } else{
                            input_retirar_btc.classList.add("error-input")
                            $(mensaje_de_error).fadeIn();

                            setTimeout(() => {
                                input_retirar_btc.classList.remove("error-input")
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