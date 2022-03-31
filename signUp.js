//validation for sign up form 
let input = document.querySelectorAll(".input")
let signUp = document.getElementById("signUp")
let checkPass = document.getElementById("rePass");
let submit = document.getElementById("submit");
let fNameSpan= document.getElementById("firstName")
let lNameSpan= document.getElementById("lastName")
let pass= document.getElementById("pass")
let chpass= document.getElementById("checkpass")
let name = document.getElementsByClassName("name");
let mailCheck = document.querySelector(".mailCheck")
let userN = document.getElementById("userN")
let userNSpan = document.getElementById("userNSpan")
let nameReg = /[a-zA-Z]/;
let password=document.getElementById("password");
let passwordReg= /^[A-Za-z]\w{7,14}$/;


for( i = 0 ; i < input.length ; i++){
    input[i].onchange = function(){
        localStorage.setItem(this.name , this.value)
    }
}


submit.onclick = function() {
  
  
    if(name[0].value.match(nameReg)){
      fNameSpan.style.display = "none"
    }else{
      fNameSpan.style.display = "inline"
    }
    if(name[1].value.match(nameReg)){
      lNameSpan.style.display = "none"
    }else{
      lNameSpan.style.display = "inline"
    }
    if(userN.value.match(nameReg)){
      userNSpan.style.display = "none"
    }else{
      userNSpan.style.display = "inline"
    }
    if(password.value.match(passwordReg)){
      pass.style.display = "none"
    }else{
      pass.style.display = "inline"
    }
    if(password.value === checkPass.value){
      chpass.style.display = "none"
    }else{
      chpass.style.display = "inline"
    }
    if (email.value.endsWith(".com") === false || email.value.includes("@") === false ){
      mailCheck.style.display = "inline"
    }else{
      mailCheck.style.display = "none"
    }
  }




