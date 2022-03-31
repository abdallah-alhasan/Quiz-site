let form = document.querySelector(".input")
form.onchange = function(){
localStorage.setItem("color", form.value)
}