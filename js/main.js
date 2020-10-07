window.onload = function(){
    var nombre;
    var apellido;
    var edad;
    
    nombre=prompt('Ingresá tu nombre por favor');
    apellido=prompt('Ingresá tu apellido!');
    edad=prompt('y ahora tu edad!');
    
    alert("Acá están tus datos:"+"\n \n"+"Nombre:"+" "+nombre+".\n"+"Apellido:"+" "+apellido+".\n"+"Edad:"+" "+edad+".");
    
    alert("Ahora probemos si no sos un robot!");
    
    var numeroAleatorio1 = Math.round(Math.random()*10);
    var numeroAleatorio2 = Math.round(Math.random()*10);
    var calculo;
    calculo=prompt("¿Cuánto es "+numeroAleatorio1+' + '+numeroAleatorio2+'?');
    if (calculo == numeroAleatorio1 + numeroAleatorio2){
        alert("Muy bien! pasaste la prueba");
    } else{
        alert("Me parece que sos un robot che");
    }
    
    };