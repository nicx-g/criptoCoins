// let primerNumero = parseInt(prompt("Ingresá tu primer número"));
// let segundoNumero = parseInt(prompt("Ingresá tu segundo número"));

// function SumarNumerosYPromediar(numeroUno, numeroDos){
//     let laSumaes = numeroUno + numeroDos;
//     return Promedio = laSumaes / 2;
// }

// Promedio1 = SumarNumerosYPromediar(primerNumero, segundoNumero)
// alert(`Hola! el promedio de tu suma es ${Promedio1}`);




let diasParaEscabiar = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function sePuedeEscabiar() {
    for (i = 0; i < diasParaEscabiar.length; i ++) {
       switch (diasParaEscabiar[i]) {
         case "Martes":
              console.log(`Hoy ${diasParaEscabiar[i]} podríamos cortar semana,,`);
              break;
         case "Viernes":
         case "Sábado":
            console.log(`Hoy ${diasParaEscabiar[i]} es un día ideal para escabiar`);
            break;
         case "Domingo":
             console.log(`Hoy ${diasParaEscabiar[i]} hay que descansar de la resaca...o seguir escabiando`);
           break;
         default:
           console.log(`Hoy ${diasParaEscabiar[i]} hay que trabajar! no podemos escabiar! :( ,,o sí`);
               break;
       }
        }
    }

sePuedeEscabiar();