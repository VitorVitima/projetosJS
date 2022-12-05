let botao = document.querySelector('#buttom')
let img = document.querySelector('#imagem')
let quebrada = 0
function broked(){
    img.setAttribute('src', './img/quebrada.jpg')
    quebrada = 1
}
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
       if (quebrada == 0) {ligar()}
       else {window.alert('A lampada está quebrada... Aperte ctrl + R')}
    } else if (botao.value == 'Desligar'){
       if (quebrada == 0) {desligar()}
       else {window.alert('A lampada está quebrada... Aperte ctrl + R')}
    }
}
img.addEventListener('dblclick', broked)