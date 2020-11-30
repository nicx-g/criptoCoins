import {getCripto, colocarDatosBasicos, cerrarSesion} from "../../js/functions.js";

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

        <div class="dashboard-perfil d-flex">
            <div class="user-perfil d-flex flex-column">
                <h2>Mi perfil</h2>
                <div class="acc-data">
                    <h3>Datos de la cuenta</h3>
                    <div class="user-data">
                        <p>Nombre completo: <span id="nombre"></span></p>
                        <p>Email: <span id="email"></span></p>
                        <p>DNI: <span id="dni"></span></p>
                        <p>Teléfono: <span id="telefono"></span></p>
                        <p>Contraseña: <input type="password" id="contra" readonly></p>
                    </div>
                </div>
                <div class="acc-actions d-flex flex-column">
                    <h3>Acciones de la cuenta</h3>
                    <button id="btn-feedback-account">Reportar errores o feedback</button>
                    <button id="btn-delete-account">Borrar cuenta</button>
                </div>
            </div>

            <div class="show-actions">

                <div style="display:none" class="feedback-section">
                    <div class="feedback-section-presentation">
                        <h3>Reportar errores o aspectos a mejorar.</h3>
                        <p>Hola! espero que andes bien. Hice este apartado para que el que vea esta pag tenga la posibilidad de mandarme feedback desde la página misma en lugar de ir a otro lado peeero lamentablemente no logré que ande, me falta experiencia en backend aún, no voy a borrar la sección porque definitivamente la voy a hacer andar en el futuro pero por el momento no será, disculpá</p>
                    </div>
                    <form method="post">
                        <div id="div-email" class="d-flex flex-column">
                            <label for="feedback-email">Email</label>
                            <input required type="text" name="feedback-email" id="feedback-email" placeholder="Insertá acá tu email así te respondo!">
                            <p id="error-email">Ingresá un email válido</p>
                        </div>
                        <div id="div-asunto" class="d-flex flex-column">
                            <label for="feedback-asunto">Asunto</label>
                            <input required type="text" name="feedback-asunto" id="feedback-asunto" placeholder="Asunto">
                            <p id="error-asunto">Este campo no puede quedar vacío o ser mayor a 60 carácteres</p>
                        </div>
                        <div id="div-text" class="d-flex flex-column">
                            <label for="feedback-text">Mensaje</label>
                            <textarea required name="feedback-text" id="feedback-text" placeholder="Me pregunto qué tendrás para decirme" rows="3"></textarea>
                            <p id="error-text">Este campo no puede quedar vacío</p>
                        </div>

                        <button id="btn-send-feedback">Enviar</button>

                        <div style="display:none" class="mensaje-de-exito">
                            <p>Parece que todo se entregó correctamente, gracias!</p>
                        </div>
                        <div style="display:none" class="mensaje-de-error">
                            <p>Parece que me quedé sin cupos gratis :( perdón! me podés contactar por <a href="https://www.linkedin.com/in/nicx-g/"><i class="fab fa-linkedin"></i>linkedin</a> si querés!</p>
                        </div>
                    </form>
                </div>

                <div style="display:none" class="delete-account d-flex flex-column">
                    <h3 style="display:none" id="advertencia-1">¿Estás seguro de esto?</h3>
                    <h4 style="display:none" id="advertencia-2">Mirá que no hay marcha atrás...</h4>
                    <h4 style="display:none" id="advertencia-3">Todo se perderá!</h4>
                    <h4 style="display:none" id="advertencia-4">Será como si nunca hubieras existido</h4>
                    <h4 style="display:none" id="advertencia-5">Entonces...¿Seguro?</h4>
                    <button style="display:none" id="btn-delete-account-confirm">Sí, borrá mi cuenta</button>
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
    divElement.innerHTML = `
    <div class="adios">
        <p>Adiós, vaquero...</p>
    </div>
    ${header} ${views} ${footer}`

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // si el User está logueado
            var emailVerified = user.emailVerified;
            let userEmail = user.email
    
            if (emailVerified){
                
                // Si el email está verificado
    
                const userNameHeader = divElement.querySelector('#nombreDelUsuarioCripto')
                const btnSignOut = divElement.querySelector("#btn-sign-out");

                let dai_ars_sell = divElement.querySelector('#dai-ars-sell');
                let dai_usd_sell = divElement.querySelector('#dai-usd-sell');
                let btc_ars_sell = divElement.querySelector('#btc-ars-sell');
                let dai_ars_buy = divElement.querySelector('#dai-ars-buy');
                let dai_usd_buy = divElement.querySelector('#dai-usd-buy');
                let btc_ars_buy = divElement.querySelector('#btc-ars-buy');

                let nombre = divElement.querySelector('#nombre');
                let email = divElement.querySelector('#email');
                let dni = divElement.querySelector('#dni');
                let telefono = divElement.querySelector('#telefono');
                let contra = divElement.querySelector('#contra');

                const btn_feedback_account = divElement.querySelector('#btn-feedback-account');
                const btn_delete_account = divElement.querySelector('#btn-delete-account');

                const feedback_section = divElement.querySelector('.feedback-section');
                const btn_send_feedback = divElement.querySelector('#btn-send-feedback');
                const feedback_mensaje_de_exito = divElement.querySelector('.mensaje-de-exito');
                const feedback_mensaje_de_error = divElement.querySelector('.mensaje-de-error');
                const inputsFeedback = divElement.querySelectorAll('form input')
                const textareaFeedback = divElement.querySelector('#feedback-text')

                const delete_account_section = divElement.querySelector('.delete-account');
                const advertencia1 = divElement.querySelector('#advertencia-1');
                const advertencia2 = divElement.querySelector('#advertencia-2');
                const advertencia3 = divElement.querySelector('#advertencia-3');
                const advertencia4 = divElement.querySelector('#advertencia-4');
                const advertencia5 = divElement.querySelector('#advertencia-5');
                const btn_delete_account_confirm = divElement.querySelector('#btn-delete-account-confirm');

                let adios = divElement.querySelector('.adios')

                const expresiones = {
                    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    asunto: /^[a-zA-ZÀ-ÿ\s]{1,60}$/, // Letras y espacios con acentos,
                    text: /^[a-zA-ZÀ-ÿ\s]{1,1000}$/
                }
                const validaciones = {
                    asunto: false,
                    text: false,
                    email: false
                }




                $( async() => {

                    getCripto(dai_ars_sell, dai_ars_buy, btc_ars_sell, btc_ars_buy, dai_usd_sell, dai_usd_buy); // Coloca la cotización en el header
                    setInterval(await getCripto, 30000, dai_ars_sell, dai_ars_buy, btc_ars_sell, btc_ars_buy, dai_usd_sell, dai_usd_buy); // Cada 30 secs
                    colocarDatosBasicos(userEmail, userNameHeader); // Pone el nombre y apellido en el header

                    btnSignOut.addEventListener('click', cerrarSesion);

                    //Coloca todos los datos en el perfil
                    
                    const colocarDatosCompletos = async(userEmail) => {

                        const userDataPath = firestore.doc(`Users/${userEmail}`);

                        const getUserData = () => userDataPath.get();

                        const userData = await getUserData();

                        nombre.innerHTML = `${userData.data().nombre} ${userData.data().apellido}`;
                        email.innerHTML = userData.data().email;
                        dni.innerHTML = userData.data().dni;
                        telefono.innerHTML = userData.data().telefono;
                        contra.value = userData.data().password;
                    }   

                    // Me valida los inputs de feedback
                    
                    const validarInputsFeedback = (expresion, input, campo) => {
                        const inputError = divElement.querySelector(`#error-${campo}`)
                        if (expresion.test(input.value)){
                            $(inputError).fadeOut();
                            validaciones[campo] = true;
                        } else{
                            $(inputError).fadeIn()
                            validaciones[campo] = false;
                        }
                    }
                    

                    // Me valida el formulario de feedback
                    const validarFormFeedback = (e) => {
                        switch (e.target.name) {
                            case "feedback-email":
                                validarInputsFeedback(expresiones.email, e.target, "email");
                                break;
                        
                            case "feedback-asunto":
                                validarInputsFeedback(expresiones.asunto, e.target, "asunto");
                                break;

                            case "feedback-text":
                                validarInputsFeedback(expresiones.text, e.target, "text");
                                break;
                        }
                    }

                    //Todos los inputs y textarea dentro del form tendrán el evento blur y keyup
                    inputsFeedback.forEach((input) => {
                        $(input).on('blur', validarFormFeedback)
                        $(input).on('keyup', validarFormFeedback)
                    })
                    $(textareaFeedback).on('blur', validarFormFeedback);
                    $(textareaFeedback).on('keyup', validarFormFeedback);


                    colocarDatosCompletos(userEmail);

                    // Lo que hace es aparecer o desaparecer el formulario y cambia el texto del botón y sólo ejecuta el alert si está todo validado
                    $(btn_feedback_account).on('click', () => {

                        if(btn_feedback_account.textContent == "Reportar errores o feedback"){
                            btn_feedback_account.textContent = 'Ocultar reportar errores o feedback';
                            $(feedback_section).fadeIn();

                            $(btn_send_feedback).on('click', (e) => {
                                e.preventDefault();

                                if(validaciones.text && validaciones.asunto && validaciones.email){
                                    alert('no funca :(');
                                }
                            })

                        }else{
                            btn_feedback_account.innerHTML = "Reportar errores o feedback";
                            $(feedback_section).fadeOut();
                        }
                    })

                    // Una vez hacés click te deshabilita el botón y comienza la secuencia de mensajes en rojo, una vez sucede eso se le añade animaciones al botón y se le cambia el texto, si el usuario presiona el botón para eliminar la cuenta se realiza la eliminación del historial completo, de compra venta y depositos y retiros y también los datos del usuario. Aparece el div de despedida y se redirige al login
                    $(btn_delete_account).on('click', () => {
                        if(btn_delete_account.textContent == "Borrar cuenta"){
                            btn_delete_account.disabled = true;
                            $(delete_account_section).fadeIn(500);
                            $(advertencia1).slideDown(500);

                            setTimeout(() => {
                                $(advertencia2).slideDown(500);

                                setTimeout(() => {
                                    $(advertencia3).slideDown(500);
                                    
                                    setTimeout(() => {
                                        $(advertencia4).slideDown(500);

                                        setTimeout(() => {
                                            $(advertencia5).slideDown(500);
                                            btn_delete_account.classList.add('animate__delay-2s');
                                            btn_delete_account.classList.add('animate__animated');
                                            btn_delete_account.classList.add('animate__shakeY');

                                            setTimeout(() => {
                                                $(btn_delete_account_confirm).slideDown(500);
                                                btn_delete_account.innerHTML = "Me arrepentí, no la borres!"

                                                btn_delete_account.disabled = false;

                                                $(btn_delete_account_confirm).on('click', async() => {
                                                    $(adios).fadeIn();
                                                    let historialCompletoPath =firestore.collection(`Users/${userEmail}/historial`)
                                                    let historialDepositosYRetirosPath =firestore.collection(`Users/${userEmail}/historial/depositos-y-retiros/data`)
                                                    let historialCompraVentaPath =firestore.collection(`Users/${userEmail}/historial/compra-y-venta/data`)

                                                    let gethistorialCompleto = () => historialCompletoPath.get();
                                                    let gethistorialDepositosYRetiros = () => historialDepositosYRetirosPath.get();
                                                    let gethistorialCompraVenta = () => historialCompraVentaPath.get();

                                                    let historialCompleto = await gethistorialCompleto()
                                                    let historialDepositosYRetiros = await gethistorialDepositosYRetiros()
                                                    let historialCompraVenta = await gethistorialCompraVenta()

                                                    historialCompleto.forEach(async (response) => {
                                                        let ids = response.id
                                                        await firestore.doc(`Users/${userEmail}/historial/${ids}`).delete();
                                                    })
                                                    historialDepositosYRetiros.forEach(async (response) => {
                                                        let idsdepositosyretiros = response.id
                                                        await firestore.doc(`Users/${userEmail}/historial/depositos-y-retiros/data/${idsdepositosyretiros}`).delete();
                                                    })
                                                    historialCompraVenta.forEach(async (response) => {
                                                        let idscompraventa = response.id
                                                        await firestore.doc(`Users/${userEmail}/historial/compra-y-venta/data/${idscompraventa}`).delete();
                                                    })
                                                    
                                                    await firestore.doc(`Users/${userEmail}`).delete().then(async ()=>{
                                                        await firebase.auth().currentUser.delete().then(() => {
                                                            $(adios).fadeOut();
                                                        })
                                                    })
                                                });
                                            }, 1500);
                                        }, 2000);
                                    }, 2000);
                                }, 2000);
                            }, 2000);
                        } else {
                            btn_delete_account.innerHTML = "Borrar cuenta"
                            $(btn_delete_account_confirm).slideUp(500);
                            $(advertencia5).slideUp(500);
                            $(advertencia4).slideUp(500);
                            $(advertencia3).slideUp(500);
                            $(advertencia2).slideUp(500);
                            $(advertencia1).slideUp(500);
                            $(delete_account_section).slideUp(500);
                            btn_delete_account.classList.remove('animate__animated');
                            btn_delete_account.classList.remove('animate__shakeY');
                            btn_delete_account.classList.remove('animate__delay-2s');
                        }
                    })

                });
    
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