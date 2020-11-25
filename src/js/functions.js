

async function guardarOperacion(monedaQueModifica, retiroOIngreso, input, userEmail) {

    const userMoney = firestore.doc(`Users/${userEmail}/operaciones/monedero`); //Base de datos de monedero
    
    let getMoney = await userMoney.get(); // Obtener datos 
    
    let valueMoney = parseFloat(input.value);

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

                guardarhistorial("Retiro de ARS", valueMoney, userEmail);

            } else if (retiroOIngreso == "ingreso"){

                let moneda_actual = valueMoney + ars_actual

                userMoney.set({
                    ars: moneda_actual,
                    usd: usd_actual,
                    dai: dai_actual,
                    btc: btc_actual
                });

                guardarhistorial("Ingreso de ARS", valueMoney, userEmail);
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

                guardarhistorial("Retiro de USD", valueMoney, userEmail);

            } else if (retiroOIngreso == "ingreso"){

                let moneda_actual = valueMoney + usd_actual

                userMoney.set({
                    ars: ars_actual,
                    usd: moneda_actual,
                    dai: dai_actual,
                    btc: btc_actual
                });

                guardarhistorial("Ingreso de USD", valueMoney, userEmail);
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

                guardarhistorial("Retiro de DAI", valueMoney, userEmail);

            } else if (retiroOIngreso == "ingreso"){

                let moneda_actual = valueMoney + dai_actual

                userMoney.set({
                    ars: ars_actual,
                    usd: usd_actual,
                    dai: moneda_actual,
                    btc: btc_actual
                });

                guardarhistorial("Ingreso de DAI", valueMoney, userEmail);
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

                guardarhistorial("Retiro de BTC", valueMoney, userEmail);

            } else if (retiroOIngreso == "ingreso"){

                let moneda_actual = valueMoney + btc_actual

                userMoney.set({
                    ars: ars_actual,
                    usd: usd_actual,
                    dai: dai_actual,
                    btc: moneda_actual
                });

                guardarhistorial("Ingreso de BTC", valueMoney, userEmail);
            }    

            break;
    }
} 

// Esta funcion va a recibir por parámetro el nombre de la operación "retiro/ingreso de moenda" y el monto que ya lo vas a aclarar con el input de la funcion guardarOperacion()

async function guardarhistorial(operacion, monto, userEmail){

    const userHistory = firestore.collection(`Users/${userEmail}/historial`);
    const userHistory_depositos_y_retiros = firestore.collection(`Users/${userEmail}/historial/depositos-y-retiros/data`);

    
    // Me saca la fecha y la hora actual
    
    let hoy = new Date();
    
    const fechaActual = `${hoy.getDate()}-${hoy.getMonth() + 1}-${hoy.getFullYear()}`;
    const hora = hoy.getHours();
    const minuto = hoy.getMinutes();
    let horaPosta = "";
    let minutoPosta = "";

    //Acá le agrega un 0 a la hora y minuto si llega a tener un sólo digito. ej: 1:5 = 01:05
    
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

    // Setea historial de depósitos y retiro

    userHistory_depositos_y_retiros.add({
        titulo: `<i class="fas fa-piggy-bank"></i>${operacion}`,
        monto: monto,
        fecha: fechaActual,
        hora: `${horaPosta}:${minutoPosta}`
    })

    // Setea historial general
    userHistory.add({
        titulo: `<i class="fas fa-piggy-bank"></i>${operacion}`,
        monto: monto,
        fecha: fechaActual,
        hora: `${horaPosta}:${minutoPosta}`
    })
}

// Valida si el value del input es un número o no

function validarInput(inputId){
    let checkearInput = inputId.value
    
    if(!isNaN(checkearInput)){
        return true;
    } else{
        return false;
    }
}

//Coloca al principio del documento el nombre y apellido del usuario

const colocarDatosBasicos = async (userEmail, elementoDom) => {
    
    let userNameHeader = elementoDom;

    const userData = firestore.doc(`Users/${userEmail}`); //Base de datos
    const getUserData = () => userData.get() // Obtiene los datos

    const userDataBasic = await getUserData();
    
    const userName = userDataBasic.data().nombre;
    const userLastname = userDataBasic.data().apellido;

    userNameHeader.innerHTML = `${userName} ${userLastname}` // Los coloca

}

// Conjunto de funciones que crean el actualizador de criptomonedas en el header

//Coloca precios actuales de las cripto
            
function getCripto(daiArsSell, daiArsBuy, btcArsSell, btcArsBuy, daiUsdSell, daiUsdBuy){
    $.ajax({
        type: "GET",
        url: 'https://api.coinranking.com/v1/public/coins?base=USD&timePeriod=24h&ids="0,68589&sort=price',
        dataType: "json",
        success: (response) => {
            renderUsd(response, daiUsdBuy, daiUsdSell)
        }
    })
    $.ajax({
        type: "GET",
        url: 'https://api.coinranking.com/v1/public/coins?base=ARS&timePeriod=24h&ids="0,1,68589&sort=price',
        dataType: "json",
        success: (response) => {
            renderArs(response, daiArsSell, daiArsBuy, btcArsSell, btcArsBuy)
        }
    })
}

function renderArs(response, daiArsSell, daiArsBuy, btcArsSell, btcArsBuy) {

    let buyBtcPriceValue = parseInt(response.data.coins[1].price);
    let buyDaiPriceValue = parseInt(response.data.coins[2].price);

    let sellBtcPriceValue = parseInt(response.data.coins[1].price) - parseInt(response.data.coins[1].price) * 4 / 100
    let sellDaiPriceValue = parseInt(response.data.coins[2].price) - parseInt(response.data.coins[2].price) * 4 / 100

    $(btcArsBuy).slideUp();
    $(daiArsBuy).slideUp();
    $(btcArsSell).slideUp();
    $(daiArsSell).slideUp();

    $(btcArsBuy).html(buyBtcPriceValue);
    $(daiArsBuy).html(buyDaiPriceValue);
    $(btcArsSell).html(sellBtcPriceValue);
    $(daiArsSell).html(sellDaiPriceValue);

    $(btcArsBuy).slideDown();
    $(daiArsBuy).slideDown();
    $(btcArsSell).slideDown();
    $(daiArsSell).slideDown();
}

function renderUsd(response, daiUsdBuy, daiUsdSell) {

    let buyUsdPriceValue = parseInt(response.data.coins[1].price) + parseInt(response.data.coins[1].price) * 6 / 100
    let sellUsdPriceValue = parseInt(response.data.coins[1].price) + parseInt(response.data.coins[1].price) * 2 / 100


    $(daiUsdBuy).slideUp();
    $(daiUsdSell).slideUp();

    $(daiUsdBuy).html(buyUsdPriceValue);
    $(daiUsdSell).html(sellUsdPriceValue);

    $(daiUsdBuy).slideDown();
    $(daiUsdSell).slideDown();
}

// Cierra sesión

async function cerrarSesion(){
    await firebase.auth().signOut()
    window.location.href = "#/login"
}

// Coloca el historial dependiendo de cual quieras, en el segundo parámetro le tenés que colocar si querés el historial "total", el de "depositosyretiros" o el de "compraventa"

const colocarHistorial = async(userEmail, HistorialADesear, domElement) => {

    switch (HistorialADesear) {
        case "total":
            
            const userHistoryAll = firestore.collection(`Users/${userEmail}/historial`)
            const getHistoryAll = () => userHistoryAll.get();
        
            const allHistory = await getHistoryAll();
            domElement.innerHTML = '';
            
            allHistory.forEach((doc) => {
        
                const historyitem = doc.data();
                domElement.innerHTML +=
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

            break;


        case "depositosyretiros":
            
            const userHistoryDepositoyRetiro = firestore.collection(`Users/${userEmail}/historial/depositos-y-retiros/data`)
            const getHistoryDR = () => userHistoryDepositoyRetiro.get();
        
            const HistoryDR = await getHistoryDR();
            domElement.innerHTML = '';
            
            HistoryDR.forEach((doc) => {
        
                const historyitem = doc.data();
                domElement.innerHTML +=
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

            break;


        case "compraventa":
            
            const userHistoryCompraVenta = firestore.collection(`Users/${userEmail}/historial/compra-y-venta/data`)
            const getHistoryCV = () => userHistoryCompraVenta.get();
        
            const HistoryCV = await getHistoryCV();
            domElement.innerHTML = '';
            
            HistoryCV.forEach((doc) => {
        
                const historyitem = doc.data();
                domElement.innerHTML +=
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

            break;
    
        default:
            break;
    }
}

export {guardarOperacion, guardarhistorial, validarInput, colocarDatosBasicos, getCripto, renderArs, renderUsd, cerrarSesion, colocarHistorial};