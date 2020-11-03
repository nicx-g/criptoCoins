window.onload = function(){

function RegistrarUsuario(){

    this.Nombre = null
    this.Apellido = null
    this.Email = null
    let Contraseña = null

    // this.validarNombre = function(){

    //     let inputNombre = document.getElementById("nombreDeUsuario");
        
    //     if(inputNombre.value == "" 
    //     || inputNombre.length < 2 
    //     || !isNaN(inputNombre)){
    //         document.inputNombre.innerHTML = `<span style="color:red;font-size: 0.9rem;">Ponga un nombre válido</span>`
    //     }
    // }
}

let tuMama = new RegistrarUsuario();






let inputNombre = document.getElementById("nombreDeUsuario");

inputNombre.onkeyup = validarNombre;


function validarNombre(){

    const loginForm = document.getElementById("formularioLogin");

    if(inputNombre.value == "" 
    || inputNombre.value.length < 2 
    || !isNaN(inputNombre.value)){

        loginForm.innerHTML = `
        <label for="nombreDeUsuario">Nombre</label>
        <input required type="text" name="nombreDeUsuario" id="nombreDeUsuario" placeholder="ingrese su nombre. Ejemplo: Pepe">
        <span style="color:red;">Introducí un nombre válido por favor</span>
        <label for="apellidoDeUsuario">Apellido</label>
        <input required type="text" name="apellidoDeUsuario" id="apellidoDeUsuario" placeholder="ingrese su apellido. Ejemplo: Quiroga">
        <label for="emailDeUsuario">Email</label>
        <input required type="text" name="emailDeUsuario" id="emailDeUsuario" placeholder="ingrese su email. Ejemplo: pepequiroga@gmail.com">
        <label for="contrasenaDeUsuario">Contraseña</label>
        <input required type="password" name="contrasenaDeUsuario" id="contrasenaDeUsuario" placeholder="ingrese su contraseña">

        <div>
            <span><input type="checkbox">Acepto los <a href="#">términos y condiciones</a></span>
            <input type="submit" value="Crear cuenta">
        </div>

        <div class="d-flex flex-column">
            <span>¿Ya tenés una cuenta? <a href="./login.html">Iniciar sesión</a></span>
        </div>`;
        
    } else{

        loginForm.innerHTML = `
        <label for="nombreDeUsuario">Nombre</label>
        <input required type="text" name="nombreDeUsuario" id="nombreDeUsuario" placeholder="ingrese su nombre. Ejemplo: Pepe">
        <label for="apellidoDeUsuario">Apellido</label>
        <input required type="text" name="apellidoDeUsuario" id="apellidoDeUsuario" placeholder="ingrese su apellido. Ejemplo: Quiroga">
        <label for="emailDeUsuario">Email</label>
        <input required type="text" name="emailDeUsuario" id="emailDeUsuario" placeholder="ingrese su email. Ejemplo: pepequiroga@gmail.com">
        <label for="contrasenaDeUsuario">Contraseña</label>
        <input required type="password" name="contrasenaDeUsuario" id="contrasenaDeUsuario" placeholder="ingrese su contraseña">

        <div>
            <span><input type="checkbox">Acepto los <a href="#">términos y condiciones</a></span>
            <input type="submit" value="Crear cuenta">
        </div>

        <div class="d-flex flex-column">
            <span>¿Ya tenés una cuenta? <a href="./login.html">Iniciar sesión</a></span>
        </div>`;
    }
}

}
