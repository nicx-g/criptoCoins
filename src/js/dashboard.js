
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // si el User está logueado
        var emailVerified = user.emailVerified;
        let userEmail = user.email

        if (emailVerified){
            
            // Si el email está verificado

            const userDataBase = firestore.collection(`Users`).doc(userEmail); //Establezco la ruta de la base de datos

            const getUserData = () => userDataBase.get(); // Esta constante es para obtener datos
            
            const nombreDelUsuarioCripto = document.getElementById("nombreDelUsuarioCripto") //Este es el tag <a> que figura en el header
            
            window.addEventListener("mousemove", async (e) => { //Cuando el mouse se mueva, va a reemplazar los valores del <a> por el nombre y apellido del usuario que esté loggueado, puse este evento porque el DOMContentLoaded no me funciona
            const querySnapshot = await getUserData();
            const nombre = querySnapshot.data().nombre
            const apellido = querySnapshot.data().apellido
            
            nombreDelUsuarioCripto.innerHTML = `${nombre} ${apellido}`
            })

        } else{

            // Si el email no está verificado

            window.location.href = "./login.html"
        }
        
    } else {
        // si el user no está logueado
        window.location.href = "./login.html"
    }
    });

//Corresponde al botón que está en el header para cerrar sesión y que te lleve al login de paso
const btnSignOut = document.getElementById("btn-sign-out")

btnSignOut.addEventListener('click', cerrarSesion)

function cerrarSesion(){
    firebase.auth().signOut()
    window.location.href = "./login.html"
}
