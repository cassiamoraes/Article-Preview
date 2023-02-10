const share = document.querySelector('#shareicon')
const div = document.querySelector('.cont-texto3')
const body = document.querySelector('body')

share.addEventListener("click", (elemento) =>{
    mostraDiv()     
})

body.addEventListener("mouseup", () =>{
    escondeDiv()
})


function mostraDiv() {
    div.style.display ="block";
}

function escondeDiv(){
    div.style.display ="none";
}

