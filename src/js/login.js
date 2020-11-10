formularioLogin = document.getElementById(`login-form`)

authFirestore.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      let emailVerificado = user.emailVerified;

      if(emailVerificado){

          window.location.href = "./dashboard.html"

      } else{

        document.querySelector(`.registerForm-submit-errorEmail`).classList.add('registerForm-submit-errorEmail-active')

      }

    } else {
      // User is signed out.
      formularioLogin.addEventListener('submit', (e) => {

        e.preventDefault();
    
        emailLogin = document.getElementById(`emailLoginDeUsuario`).value;
        passwordLogin = document.getElementById(`passwordLoginDeUsuario`).value;
    
        firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
        .then(() => {
    
            error = document.querySelector(`.registerForm-submit-errorForm`).classList.remove('registerForm-submit-errorForm-active')
            window.location.href = "./dashboard.html"
    
        })
        .catch(() => {
            
            error = document.querySelector(`.registerForm-submit-errorForm`).classList.add('registerForm-submit-errorForm-active')
    
        })
    })
    }
  });

