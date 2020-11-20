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

        
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // si el User está logueado
        var emailVerified = user.emailVerified;
        let userEmail = user.email

        if (emailVerified){
            
            // Si el email está verificado


            const userDataBase = firestore.doc(`Users/${userEmail}`); //Base de datos
            const userHistoryAll = firestore.collection(`Users/${userEmail}/historial`)
            const userMoney = firestore.doc(`Users/${userEmail}/operaciones/monedero`); //Base de datos de monedero
            
            const getUserData = () => userDataBase.get(); // Esta constante es para obtener datos del usuario
            const getUserMoney = () => userMoney.get(); // Esta constante es para obtener datos del monedero del usuario
            const getHistoryAll = () => userHistoryAll.get(); // Esta constante es para obtener datos del historial del usuario


            //Llamado de los elementos del DOM
            
            const userNameHeader = divElement.querySelector("#nombreDelUsuarioCripto");
            
            const saldo_ARS = divElement.querySelector('#saldo-ars');
            const saldo_USD = divElement.querySelector('#saldo-usd');
            const saldo_DAI = divElement.querySelector('#saldo-dai');
            const saldo_BTC = divElement.querySelector('#saldo-btc');

            let dai_ars_sell = divElement.querySelector('#dai-ars-sell')
            let dai_usd_sell = divElement.querySelector('#dai-usd-sell')
            let btc_ars_sell = divElement.querySelector('#btc-ars-sell')
            let dai_ars_buy = divElement.querySelector('#dai-ars-buy')
            let dai_usd_buy = divElement.querySelector('#dai-usd-buy')
            let btc_ars_buy = divElement.querySelector('#btc-ars-buy')

            const HistorialDeOperaciones = divElement.querySelector('#historial-de-operaciones');

            $(async (e) => {

            //-----------------
            //  Data del usuario
            //-----------------
                
            //Nombre y apellido
            const userData = await getUserData();
            const userName = userData.data().nombre;
            const userLastname = userData.data().apellido;

            // Monedas que posee
            const querySnapshotMoney = await getUserMoney();
            const saldo_Monedero_ARS = querySnapshotMoney.data().ars;
            const saldo_Monedero_USD = querySnapshotMoney.data().usd;
            const saldo_Monedero_DAI = querySnapshotMoney.data().dai;
            const saldo_Monedero_BTC = querySnapshotMoney.data().btc;

            //-------------------
            // Funciones
            //-------------------
            
            // Colocar nombre de usuario
            userNameHeader.innerHTML = `${userName} ${userLastname}`

            //Coloca precios actuales de las cripto
            
            function getCripto(){
                $.ajax({
                    type: "GET",
                    url: 'https://api.coinranking.com/v1/public/coins?base=USD&timePeriod=24h&ids="0,68589&sort=price',
                    dataType: "json",
                    success: renderUsd
                })
                $.ajax({
                    type: "GET",
                    url: 'https://api.coinranking.com/v1/public/coins?base=ARS&timePeriod=24h&ids="0,1,68589&sort=price',
                    dataType: "json",
                    success: renderArs
                })
            }
            
            function renderArs(response) {

                let buyBtcPriceValue = parseInt(response.data.coins[1].price);
                let buyDaiPriceValue = parseInt(response.data.coins[2].price);

                let sellBtcPriceValue = parseInt(response.data.coins[1].price) - parseInt(response.data.coins[1].price) * 4 / 100
                let sellDaiPriceValue = parseInt(response.data.coins[2].price) - parseInt(response.data.coins[2].price) * 4 / 100

                $(btc_ars_buy).slideUp();
                $(btc_ars_sell).slideUp();
                $(dai_ars_buy).slideUp();
                $(dai_ars_sell).slideUp();

                $(btc_ars_buy).html(buyBtcPriceValue);
                $(btc_ars_sell).html(sellBtcPriceValue);
                $(dai_ars_buy).html(buyDaiPriceValue);
                $(dai_ars_sell).html(sellDaiPriceValue);

                $(btc_ars_buy).slideDown();
                $(btc_ars_sell).slideDown();
                $(dai_ars_buy).slideDown();
                $(dai_ars_sell).slideDown();
            }

            function renderUsd(response) {

                let buyUsdPriceValue = parseInt(response.data.coins[1].price) + parseInt(response.data.coins[1].price) * 6 / 100
                let sellUsdPriceValue = parseInt(response.data.coins[1].price) + parseInt(response.data.coins[1].price) * 2 / 100


                $(dai_usd_buy).slideUp();
                $(dai_usd_sell).slideUp();

                $(dai_usd_buy).html(buyUsdPriceValue);
                $(dai_usd_sell).html(sellUsdPriceValue);

                $(dai_usd_buy).slideDown();
                $(dai_usd_sell).slideDown();
            }

            getCripto();
            setInterval(getCripto, 30000);

            // Colocar monedas que posee
            saldo_ARS.innerHTML = saldo_Monedero_ARS;
            saldo_USD.innerHTML = saldo_Monedero_USD;
            saldo_DAI.innerHTML = saldo_Monedero_DAI;
            saldo_BTC.innerHTML = saldo_Monedero_BTC;

            //Coloca el historial

            const querySnapshotHistory = await getHistoryAll();
            HistorialDeOperaciones.innerHTML = '';
            
            querySnapshotHistory.forEach((doc) => {

                const historyitem = doc.data();
                HistorialDeOperaciones.innerHTML +=
                `<div class="historial-item  d-flex justify-content-around align-items-center">
                    <div class="d-flex">
                        <span id="history-title">${historyitem.titulo}</span>
                    </div>
                    
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <span>$${historyitem.monto}</span>
                        <span>${historyitem.fecha} ${historyitem.hora}</span>
                    </div>
                </div>`
            })

            $(".preloader").hide();
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

//Corresponde al botón que está en el header para cerrar sesión y que te lleve al login de paso
const btnSignOut = divElement.querySelector("#btn-sign-out")

btnSignOut.addEventListener('click', cerrarSesion)

async function cerrarSesion(){
    await firebase.auth().signOut()
    window.location.href = "#/login"
}


    return divElement;
}