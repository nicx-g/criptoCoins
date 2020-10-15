window.onload = function(){

    alert(`Hola! presentate!`)

    let nombre = prompt(`ingresá tu nombre por favor`);

    if (nombre == null ||
        nombre.length < 2 ||
        !isNaN(nombre)){

        alert(`Poné tu nombre capo`);

    } else {

        let apellido = prompt(`Poné tu apellido`);

        if (apellido == null || 
            apellido.length < 2 || 
            !isNaN(apellido)){

            alert(`Poné bien tu apellido!`);

        } else{

            let edad = prompt(`Ahora poné tu edad`);

            if (edad == null || 
                edad.length == 0 || 
                isNaN(edad)){

                alert(`Sólo números! estamos hablando de cuántos años tenés!`);

            } else if (edad < 0){

                alert(`no te me hagas el vivo`);
                
            } else if(edad < 4){

                alert(`Sos muy chiquito para estar con esto!`);

            } else if(edad > 105){

                alert(`O tuviste una vida muy sana o me estás mintiendo, probá de nuevo!`);
                
            } else {

                alert(`Acá están tus datos:\n\n Nombre: ${nombre}.\n Apellido: ${apellido}.\n Edad: ${edad}.`);

                alert(`Hola ${nombre}! ahora probemos si no sos un robot!`);
                
                let numeroAleatorio1 = Math.round(Math.random()*10);

                let numeroAleatorio2 = Math.round(Math.random()*10);

                let calculo=prompt(`¿Cuánto es ${numeroAleatorio1} + ${numeroAleatorio2}?`);

                if (calculo == null ||
                    calculo.length == 0 || 
                    isNaN(calculo)){

                    alert(`Estamos hablando de números!`);

                } else if (calculo < numeroAleatorio1 + numeroAleatorio2 || 
                           calculo > numeroAleatorio1 + numeroAleatorio2){

                    alert(`Estuviste muy cerca! peeeeeero no`);

                } else {

                    alert(`Muy bien! pasaste la prueba crack!`);

                }
            }
        }
    }
    
    
} 