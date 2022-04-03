//validation for sign in form 

let userName = document.getElementById("user")
let signInPass = document.getElementById("signIn-pass")
let signInSubmit = document.getElementById("signIn-submit")
let userNameSpan = document.getElementById("checkEmail")
let signInAlert = document.getElementById("signInAlert")
signInSubmit.onclick = function () {
    if (userName.value === sessionStorage.getItem("email") || userName.value === sessionStorage.getItem("user name")) {
        userNameSpan.style.display = "none"
        if (signInPass.value === sessionStorage.getItem("password")) {
            signInAlert.style.display = "none"
            window.location.href = "https://abdallah-alhasan.github.io/Quiz-site/welcome.html"
        } else {
            signInAlert.style.display = "inline"
        }
    } else {
        userNameSpan.style.display = "inline"
    }
}
