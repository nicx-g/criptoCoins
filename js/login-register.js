function UsuarioCripto(){
    this.Nombre
    this.Apellido
    this.Email
    let Contraseña = []


    this.registrarUsuario = function(){

        alert("Hola, bienvenido! se te pedirán unos datos para empezar el registro, tomará unos minutos")

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

    this.loguearUsuario = function(){

       this.LoginEmail = prompt("Ingresá el email con el que te registraste");
       this.LoginContraseña = prompt("Ingresá acá tu clave");

        if(this.LoginEmail == this.Email && this.LoginContraseña == Contraseña){

        return true;

        } else{
            
            return false;
        }

    }

    this.operarCripto = function(){

        if(this.loguearUsuario() == true){

            alert(`Bienvenido, estamos en construccion`)

        } else{

            alert("Te recomiendo que lo intentes de nuevo porque no coincide querido")
            return this.operarCripto();
        }
    }
}

let UsuarioPrueba = new UsuarioCripto()

UsuarioPrueba.registrarUsuario();
UsuarioPrueba.operarCripto();