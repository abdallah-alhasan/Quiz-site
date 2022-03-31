//validation for sign in form 
let userName = document.getElementById("user")
let signInPass = document.getElementById("signIn-pass")
let signInSubmit = document.getElementById("signIn-submit")
let userNameSpan = document.getElementById("checkEmail")
let signInAlert = document.getElementById("signInAlert")
signInSubmit.onclick = function () {
    if (userName.value === localStorage.getItem("email") || userName.value === localStorage.getItem("userN")) {
        if(signInPass.value === localStorage.getItem("password")){
        window.location.href = "https://abdallah-alhasan.github.io/Quiz-site/sign-up.html"
    }else{
        signInAlert.style.display = "inline"
    }
    } else {
        userNameSpan.style.display = "inline"
    }
}