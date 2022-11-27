let botao = document.querySelector('#buttom')
let img = document.querySelector('#imagem')
img.addEventListener('dblclick', broked)
function ligar(){
    img.setAttribute('src', './img/ligada.jpg')
    botao.value = 'Desligar'
}
function desligar(){
    img.setAttribute('src', './img/desligada.jpg')
    botao.value = 'Ligar' 
}

function botaoL(){
    if (botao.value == 'Ligar'){
        ligar()
    } else if (botao.value == 'Desligar'){
        desligar()
    }
}