import Home from "../controllers/home.controller.js";
import Register from "../controllers/register.controller.js";
import Login from "../controllers/login.controller.js";
import Dashboard from "../controllers/dashboard.controller.js";
import Dashboard_DyR from "../controllers/dashboard-components/depositos-y-retiros/depositos-y-retiros.controller.js";
import Dashboard_DyR_I_ARS from "../controllers/dashboard-components/depositos-y-retiros/ingresar-ars.controller.js";
import Dashboard_DyR_I_USD from "../controllers/dashboard-components/depositos-y-retiros/ingresar-usd.controller.js";
import Dashboard_DyR_I_DAI from "../controllers/dashboard-components/depositos-y-retiros/ingresar-dai.controller.js";
import Dashboard_DyR_I_BTC from "../controllers/dashboard-components/depositos-y-retiros/ingresar-btc.controller.js";
import Dashboard_DyR_R_ARS from "../controllers/dashboard-components/depositos-y-retiros/retirar-ars.controller.js";
import Dashboard_DyR_R_USD from "../controllers/dashboard-components/depositos-y-retiros/retirar-usd.controller.js";
import Dashboard_DyR_R_DAI from "../controllers/dashboard-components/depositos-y-retiros/retirar-dai.controller.js";
import Dashboard_DyR_R_BTC from "../controllers/dashboard-components/depositos-y-retiros/retirar-btc.controller.js";
import Dashboard_O from "../controllers/dashboard-components/operar/operar.controller.js";
import Dashboard_O_C_DAIARS from "../controllers/dashboard-components/operar/compra-daiars.controller.js";
import Dashboard_O_C_DAIUSD from "../controllers/dashboard-components/operar/compra-daiusd.controller.js";
import Dashboard_O_C_BITCOINARS from "../controllers/dashboard-components/operar/compra-bitcoinars.controller.js";
import Dashboard_O_V_DAIARS from "../controllers/dashboard-components/operar/venta-daiars.controller.js";
import Dashboard_O_V_DAIUSD from "../controllers/dashboard-components/operar/venta-daiusd.controller.js";
import Dashboard_O_V_BITCOINARS from "../controllers/dashboard-components/operar/venta-bitcoinars.controller.js";

// Este choclo de arriba es para importar todos los DivElement que contiene el html de cada sección y sus funciones

let contentMain = document.getElementById('root-main') // selecciono el root main en donde voy a colocar todo el html

const router = (route) => { // esta funcion va a hacer que dependiendo el hashtag de la url se cargue un html y su respectiva lógica que va a venir de los import de arriba

    contentMain.innerHTML = "" // vacia todo antes por las dudas (?)

    switch(route){ // y acá empieza a hacer todo el append child para que se muestre para el usuario
        case '':{
            window.location.href = '#/home'
        }
        case '#/':{
            window.location.href = '#/home'
        }
        
        case '#/home':{
            return contentMain.appendChild(Home())
        }

        case '#/login':
            return contentMain.appendChild(Login())

        case '#/register':
            return contentMain.appendChild(Register())

        case '#/dashboard':

            return contentMain.appendChild(Dashboard())

        case '#/dashboard/depositos-y-retiros':

            return contentMain.appendChild(Dashboard_DyR())

        case '#/dashboard/depositos-y-retiros/ingresar/ars':

            return contentMain.appendChild(Dashboard_DyR_I_ARS())

        case '#/dashboard/depositos-y-retiros/retirar/ars':

            return contentMain.appendChild(Dashboard_DyR_R_ARS())

        case '#/dashboard/depositos-y-retiros/ingresar/usd':

            return contentMain.appendChild(Dashboard_DyR_I_USD())

        case '#/dashboard/depositos-y-retiros/retirar/usd':

            return contentMain.appendChild(Dashboard_DyR_R_USD())

        case '#/dashboard/depositos-y-retiros/ingresar/dai':

            return contentMain.appendChild(Dashboard_DyR_I_DAI())

        case '#/dashboard/depositos-y-retiros/retirar/dai':

            return contentMain.appendChild(Dashboard_DyR_R_DAI())

        case '#/dashboard/depositos-y-retiros/ingresar/btc':

            return contentMain.appendChild(Dashboard_DyR_I_BTC())

        case '#/dashboard/depositos-y-retiros/retirar/btc':

            return contentMain.appendChild(Dashboard_DyR_R_BTC())

        case '#/dashboard/operar':

            return contentMain.appendChild(Dashboard_O())
        case '#/dashboard/operar/compra/daiars':

            return contentMain.appendChild(Dashboard_O_C_DAIARS())

        case '#/dashboard/operar/venta/daiars':

            return contentMain.appendChild(Dashboard_O_V_DAIARS())
        case '#/dashboard/operar/compra/daiusd':

            return contentMain.appendChild(Dashboard_O_C_DAIUSD())

        case '#/dashboard/operar/venta/daiusd':

            return contentMain.appendChild(Dashboard_O_V_DAIUSD())

        case '#/dashboard/operar/compra/bitcoinars':

            return contentMain.appendChild(Dashboard_O_C_BITCOINARS())

        case '#/dashboard/operar/venta/bitcoinars':

            return contentMain.appendChild(Dashboard_O_V_BITCOINARS())

        default:
            return console.log("404")
    }
}

export {router} // Exporto la función al main.js