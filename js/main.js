window.onload = function(){
    var nombre;
    var apellido;
    var edad;
    
    nombre=prompt('Ingresá tu nombre por favor');
    apellido=prompt('Ingresá tu apellido!');
    edad=prompt('y ahora tu edad!');
    
    alert("Acá están tus datos:"+"\n \n"+"Nombre:"+" "+nombre+".\n"+"Apellido:"+" "+apellido+".\n"+"Edad:"+" "+edad+".");
    
    alert("Ahora probemos si no sos un robot!");
    
    var calculo;
    calculo=prompt('¿Cuánto es 3 + 9?');
    if (calculo == 12){
        alert("Muy bien! pasaste la prueba");
    } else{
        alert("Me parece que sos un robot che");
    }
    
    };