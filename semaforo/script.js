const vermelho = document.querySelector('#vermelho')
const amarelo = document.querySelector('#amarelo')
const verde = document.querySelector('#verde')
const automatico = document.querySelector('#automatico')
const img = document.querySelector('#imagem')
let cor = 0, cor2 = 0


function buttomVermelho(){
    img.src = "./img/vermelho.png"
    cor = 1
}
function buttomAmarelo(){
    img.src = "./img/amarelo (1).png"
    cor = 2
}
function buttomVerde(){
    img.src = "./img/verde.png"
    cor = 0
}

function auto(){

    if (cor == 0){
        img.src = "./img/vermelho.png"
        return cor++
    } else if (cor == 1){
        img.src = "./img/amarelo (1).png"
        return cor++
    } else if (cor == 2){
        img.src = "./img/verde.png"
        return cor = 0
    }
}
function automaticoButtom(){
    setInterval(auto, 1000)
}


vermelho.addEventListener('click', buttomVermelho)
amarelo.addEventListener('click', buttomAmarelo)
verde.addEventListener('click', buttomVerde)
automatico.addEventListener('click', automaticoButtom)