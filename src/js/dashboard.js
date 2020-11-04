if((sessionStorage.getItem(`emailLoginSession`) && sessionStorage.getItem(`passwordLoginSession`)) 
|| (localStorage.getItem(`emailLoginLocal`) && localStorage.getItem(`passwordLoginLocal`))){

    alert("hola puto")

} else{
    window.location.href = "./login.html"
}