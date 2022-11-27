let img = document.querySelector("#imagem")
const trocarFoto = img.getAttribute('src')
let ligarBotao = document.querySelector('#buttom')
function lampBroken() {
    img.src = "./img/quebrada.jpg"
}
function isBroked(){
    return img.src.indexOf ("quebrada") > -1
}
function ligar(){
    if (!isBroked()){
        img.setAttribute('src', "./img/ligada.jpg")
    }
}
function desligar (){
    if (!isBroked()){
        img.setAttribute('src', "./img/desligada.jpg")
    }
}
function botaoL(){
    if (!isBroked())    {
        if (ligarBotao.value == 'Ligar'){ 
        ligar()
        ligarBotao.value = 'Desligar'
        } else {
        desligar()
        ligarBotao.value = 'Ligar'
        }
    }
}

function enter (){
    if(!isBroked()){img.src = "./img/ligada.jpg"}
}
function sair(){
    if(!isBroked()){img.src = "./img/desligada.jpg"}
}

img.addEventListener('mouseenter', enter)
img.addEventListener('mouseout', sair)