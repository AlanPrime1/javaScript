//dom

const lampada = document.querySelector("#lampada")
const acender = document.querySelector('#on')
const apagar = document.querySelector('#off')

//evento

acender.addEventListener('click',ligaluz)
apagar.addEventListener('click',apagaluz)


//funcao

function ligaluz(){
lampada.src= "img/acesa.gif"

}

function apagaluz(){
lampada.src="img/apagada.gif"    

}