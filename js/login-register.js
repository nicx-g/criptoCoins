function registrarUsuario(){
    this.Nombre
    this.Apellido
    this.Email
    let Contraseña = []

    this.setNombre = function(){
        let inputNombre = document.getElementById("nombreDeUsuario")
    }

    this.registrarUsuario = function(){

        this.Nombre = prompt("Ingrese acá su nombre");
        this.Apellido = prompt("Ingrese acá su apellido")
        this.Email = prompt("Ingrese acá su email");

        let confirmacionDelUsuario = confirm(`Estos son tus datos:\n\n Nombre: ${this.Nombre}\n Apellido: ${this.Apellido}\n Email: ${this.Email}\n\n ¿Es correcto?`);

        if(confirmacionDelUsuario == true){

            this.registrarContraseñaDelUsuario = function(){

                let registroContraseña = prompt("Ingrese acá su contraseña");
                let registroContraseñaConfirmacion = prompt("Ingrese acá nuevamente su contraseña");
    
                if(registroContraseña == registroContraseñaConfirmacion){
                    alert("Perfecto! te mandamos un email de verificación");
                    Contraseña.push(registroContraseña);
                } else{
                    alert("Las contraseñas no coinciden!");
                    return this.registrarContraseñaDelUsuario();
                }
            }
            this.registrarContraseñaDelUsuario();

        } else{
            alert("Realizá nuevamente el formulario!");
            return this.registrarUsuario();
        }
    
    }

    this.getContraseña = function() {
        return Contraseña
    }

    this.getDatosBasicos = function(posicionDelDatoASaber) {
        
        let datosBasicos = []
        let pushearDatosBasicos = datosBasicos.push(this.Nombre, this.Apellido, this.Email)
        return datosBasicos[posicionDelDatoASaber]
    }

}

function operarCripto(){
    
            if(loguearUsuario() == true){
    
                alert(`Bienvenido, estamos en construccion`)
    
            } else{
                let deseaReintentarOperacion = confirm("?Querés reintentarlo?")
                if(deseaReintentarOperacion == true){
                    alert("Te recomiendo que lo intentes de nuevo porque no coincide querido")
                    return operarCripto();
                } else{
                    alert("bueno jodete")
                }
            }
        }

function loguearUsuario(){

    this.LoginEmail = prompt("Ingresá el email con el que te registraste");
    this.LoginContraseña = prompt("Ingresá acá tu clave");

     if(this.LoginEmail == UsuarioPrueba.getDatosBasicos(2) && this.LoginContraseña == UsuarioPrueba.getContraseña()){

     return true;

     } else{
         
         return false;
     }

 }

let UsuarioPrueba = new UsuarioCripto()

UsuarioPrueba.registrarUsuario();
operarCripto();