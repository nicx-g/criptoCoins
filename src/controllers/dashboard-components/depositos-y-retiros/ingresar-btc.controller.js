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
                    <a class="active-link" href="#/dashboard/depositos-y-retiros/ingresar/btc">Ingresar</a>
                    <a href="#/dashboard/depositos-y-retiros/retirar/btc">Retirar</a>
                </div> 
                
                <div class="ingresar-o-retirar-noCripto">
                    <div class="ingresar-o-retirar-noCripto-operacion">
                        <h2>¿Cuántos Bitcoin deseas ingresar a tu cuenta?</h2>
                        <form id="form-ingresar-btc" method="POST">
                            <div class="ingresar-o-retirar-noCripto-input d-flex flex-column">
                                <label for="ingresarBtc">Insertar cantidad de Bitcoins</label>
                                <input type="text" name="ingresarBtc" id="ingresarBtc" placeholder="Por ej: 0.0130">
                                <p id="mensaje-de-error" style="display: none">Tenés que ingresar un número</p>
                            </div>
                            <button id="btn-ingresar-btc" type="submit">Ingresar Bitcoins</button>
                        </form>
                    </div>

                    <div id="mensaje-de-operacion" style="display:none" class="mensaje-de-operacion bg-light">
                        <p>Vas a tener que depositar los Bitcoin en la siguiente dirección para que se te acredite:</p>
                        <p>bc1qlucl8pz6rfesn9eqtvfx2q4qqxykk88a2njlm5</p>
                    </div>

                    <div id="mensaje-de-exito" style="display:none" class="mensaje-de-exito bg-success">
                        <p>Por fines prácticos ya tenés los Bitcoin depositados en tu cuenta</p>
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
    
                //Ruta de base de datos
                
                const userDataBase = firestore.doc(`Users/${userEmail}`); //Base de datos
                const userHistory = firestore.collection(`Users/${userEmail}/historial`);
                const userHistory_depositos_y_retiros = firestore.collection(`Users/${userEmail}/historial/depositos-y-retiros/data`);
                const userMoney = firestore.doc(`Users/${userEmail}/operaciones/monedero`); //Base de datos de monedero

                //Get datos

                const getUserData = () => userDataBase.get()

                // elementos del Dom

                const userNameHeader = divElement.querySelector('#nombreDelUsuarioCripto')

                const mensaje_de_exito = divElement.querySelector('#mensaje-de-exito');
                const mensaje_de_operacion = divElement.querySelector('#mensaje-de-operacion');
                const mensaje_de_error = divElement.querySelector('#mensaje-de-error')
                
                const input_ingresar_btc = divElement.querySelector('#ingresarBtc');
                const btn_ingresar_btc = divElement.querySelector('#btn-ingresar-btc');
                const form_ingresar_btc = divElement.querySelector('#form-ingresar-btc');

                $(async (e) => {

                    const userData = await getUserData();
                    const userName = userData.data().nombre;
                    const userLastname = userData.data().apellido;

                    userNameHeader.innerHTML = `${userName} ${userLastname}`
                })

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

                $( () => {

                    btn_ingresar_btc.addEventListener('click', (e) => {
                        e.preventDefault();

                        if(validarInput(input_ingresar_btc)){

                            input_ingresar_btc.classList.remove("error-input")
                            $(mensaje_de_error).fadeOut();
                            btn_ingresar_btc.disabled = true;
                            input_ingresar_btc.readOnly=true;
                            $(mensaje_de_operacion).fadeIn(500);
                            
                            setTimeout(() => {
                                $(mensaje_de_exito).fadeIn(500)
                                guardarOperacion("btc", "ingreso", input_ingresar_btc);
    
                                
                                setTimeout(() => {
                                    $(mensaje_de_operacion).fadeOut(500);
                                    $(mensaje_de_exito).fadeOut(500);
                                    input_ingresar_btc.readOnly = false;
                                    btn_ingresar_btc.disabled = false;
                                    form_ingresar_btc.reset();
                                }, 5000);
                            }, 4000);
                        } else{
                            input_ingresar_btc.classList.add("error-input")
                            $(mensaje_de_error).fadeIn();

                            setTimeout(() => {
                                input_ingresar_btc.classList.remove("error-input")
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