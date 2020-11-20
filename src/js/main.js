import {router} from "../router/index.routes.js"; // Importo la función router que contenía los switch

router(window.location.hash) // Tomo el hashtag actual y ejecuto la función

window.addEventListener('hashchange', () => { // Tomo el evento del cambio de hashtag y le pasa la función
    router(window.location.hash)
})