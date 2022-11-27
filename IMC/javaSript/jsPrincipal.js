let nameInput = document.querySelector('#name')
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let tagP = document.createElement('p')
let secText = document.querySelector('#secText')
let textImc = document.querySelector('#text')
let imc = 0
var nivelDoPeso = " "
function inputVazia(){
    if (nameInput.value == ""){
        return true
    }
    if (Number(altura.value) == 0){
        return true
    }
    if (Number(peso.value) == 0){
        return true
    }
}
function acimaAbaixo() {
    
    imc = Number(peso.value) / (Number(altura.value) * 2)
    if (imc < 17){
        nivelDoPeso = 'você está muito abaixo do peso'
    } else if(imc > 17 && imc < 18.5){
        nivelDoPeso = 'você está abaixo do peso'
    } else if (imc > 18.5 && imc < 24.9){
        nivelDoPeso = 'seu peso está normal'
    } else if (imc >= 25 && imc <= 29.9){
        nivelDoPeso = 'você está acima do peso'
    } else if (imc >= 30 && imc <= 34.9){
        nivelDoPeso = "você está com o menor nivel de obesidade"
    } else if (imc >= 35 && imc <= 39.9){
        nivelDoPeso = 'você está obesidade severa'
    } else if (imc >= 40) {
        nivelDoPeso = 'você está com obesidade mórbida'
    }
}

function testar(){
    if (inputVazia() == true){
        window.alert('Preencha os dados corretamente!!')
    } else {
        acimaAbaixo()
        secText.style.display = 'flex'
        tagP.innerHTML = `<span>${nameInput.value}</span> seu IMC é <strong>${imc}</strong>, ${nivelDoPeso}.`

        textImc.insertAdjacentElement('beforeend', tagP)
        
    }
}