import {getCripto, renderArs, renderUsd, colocarDatosBasicos, cerrarSesion, colocarHistorial} from "../js/functions.js";

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
                        <span id="dai-ars-buy"></span>
                    </div>
                </div>

                <div class="d-flex justify-content-center align-items-center flex-column">
                    <span>DAI/USD</span>
                    <div>
                        <span id="dai-usd-sell"></span>
                        <span id="dai-usd-buy"></span>
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
</div>`;
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

        <div class="dashboard-content-home">
            <div class="saldos d-flex justify-content-center flex-column">
                <h2 class="align-self-start">Tu saldo:</h2>
                <div class="saldo d-flex justify-content-center">
                    <div class="d-flex flex-column">
                        <span><i class="fas fa-dollar-sign"></i>ARS</span>
                        <span id="saldo-ars"></span>
                    </div>

                    <div class="d-flex flex-column">
                        <span><i class="fas fa-dollar-sign"></i>USD</span>
                        <span id="saldo-usd"></span>
                    </div>

                    <div class="d-flex flex-column">
                        <span><i class="cf cf-dai"></i>DAI</span>
                        <span id="saldo-dai"></span>
                    </div>

                    <div class="d-flex flex-column">
                        <span><i class="cf cf-btc"></i>BTC</span>
                        <span id="saldo-btc"></span>
                    </div>
                </div>
            </div>
            
            <div class="historial">
                <h2>Historial de operaciones:</h2>
                <div id="historial-de-operaciones" class="historial-de-operaciones">

                </div>
            </div>
        </div>
    </div>
</div>`;
    const footer =
    `<div class="dashboard-footer">
    <span class="footer-text d-flex justify-content-center align-items-center">2020 © CriptoCoins. Todos los derechos reservados</span>
</div>`

    const divElement = document.createElement('div')
    divElement.innerHTML = `<div class="preloader">
    <div class="preloader-item"></div>
</div> ${header} ${views} ${footer}`


//Código JS
        
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // si el User está logueado
        var emailVerified = user.emailVerified;
        let userEmail = user.email

        if (emailVerified){
            
            // Si el email está verificado

            const userMoney = firestore.doc(`Users/${userEmail}/operaciones/monedero`); //Base de datos de monedero
            
            const getUserMoney = () => userMoney.get(); // Esta constante es para obtener datos del monedero del usuario



            // Elementos del DOM
            
            const userNameHeader = divElement.querySelector("#nombreDelUsuarioCripto");
            const btnSignOut = divElement.querySelector("#btn-sign-out");
            const HistorialDeOperaciones = divElement.querySelector('#historial-de-operaciones');


            const saldo_ARS = divElement.querySelector('#saldo-ars');
            const saldo_USD = divElement.querySelector('#saldo-usd');
            const saldo_DAI = divElement.querySelector('#saldo-dai');
            const saldo_BTC = divElement.querySelector('#saldo-btc');

            let dai_ars_sell = divElement.querySelector('#dai-ars-sell');
            let dai_usd_sell = divElement.querySelector('#dai-usd-sell');
            let btc_ars_sell = divElement.querySelector('#btc-ars-sell');
            let dai_ars_buy = divElement.querySelector('#dai-ars-buy');
            let dai_usd_buy = divElement.querySelector('#dai-usd-buy');
            let btc_ars_buy = divElement.querySelector('#btc-ars-buy');
                

            $(async (e) => {

            //-------------------
            // Funciones
            //-------------------
            
            // Actualiza el precio de las monedas

            getCripto(dai_ars_sell, dai_ars_buy, btc_ars_sell, btc_ars_buy, dai_usd_sell, dai_usd_buy);
            setInterval(getCripto, 30000); // Cada 30 secs
            
            // Colocar monedas que posee

            const querySnapshotMoney = await getUserMoney();

            const saldo_Monedero_ARS = querySnapshotMoney.data().ars;
            const saldo_Monedero_USD = querySnapshotMoney.data().usd;
            const saldo_Monedero_DAI = querySnapshotMoney.data().dai;
            const saldo_Monedero_BTC = querySnapshotMoney.data().btc;


            saldo_ARS.innerHTML = saldo_Monedero_ARS;
            saldo_USD.innerHTML = saldo_Monedero_USD;
            saldo_DAI.innerHTML = saldo_Monedero_DAI;
            saldo_BTC.innerHTML = saldo_Monedero_BTC;

             // Nombre y apellido del header
            colocarDatosBasicos(userEmail, userNameHeader);
            
            //Historial total
            colocarHistorial(userEmail, "total", HistorialDeOperaciones);

            btnSignOut.addEventListener('click', cerrarSesion);

            $(".preloader").hide(); //Saca el preloader una vez está todo cargado
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