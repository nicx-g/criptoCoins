function validarLogin(){

    emailLogin = document.getElementById(`emailLoginDeUsuario`)
    passwordLogin = document.getElementById(`passwordLoginDeUsuario`)

    if(localStorage.getItem("email") == emailLogin.value.toLowerCase() && localStorage.getItem("password") == passwordLogin.value){

        error = document.querySelector(`.registerForm-submit-p`).classList.remove('registerForm-submit-p-active')

        checkboxReminder = document.getElementById('checkboxLogin') 

        if(!checkboxReminder.checked){

            sessionStorage.setItem(`emailLoginSession`, emailLogin.value);
            sessionStorage.setItem(`passwordLoginSession`, passwordLogin.value);

        } else{

            localStorage.setItem(`emailLoginLocal`, emailLogin.value)
            localStorage.setItem(`passwordLoginLocal`, passwordLogin.value)

        }
        
        return true
        
    } else{

        error = document.querySelector(`.registerForm-submit-p`).classList.add('registerForm-submit-p-active')
        return false

    }
}

formularioLogin = document.getElementById(`login-form`)

formularioLogin.addEventListener('submit', (e) => {

    e.preventDefault();

    if(validarLogin()){

        formularioLogin.reset()

        setTimeout(() => {
            window.location.href = "./dashboard.html"
        }, 100);

    }
})