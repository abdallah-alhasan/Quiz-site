let input = document.querySelectorAll(".input")
for( i = 0 ; i < input.length ; i++){
    input[i].onchange = function(){
        localStorage.setItem(this.name , this.value)
    }
}