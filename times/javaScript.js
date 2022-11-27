const divHoras = document.querySelector('#h')
const divMinutos = document.querySelector('#m')
const divSegundos = document.querySelector('#s')





setInterval(function(){
    let dataBase = new Date()
    let valueH = dataBase.getHours()
    let valueM = dataBase.getMinutes() 
    let valueS = dataBase.getSeconds()
    if (valueH < 10) {
        divHoras.textContent = `0${String(valueH)}`
    } else {
        divHoras.textContent = String(valueH)
    }
    if (valueM < 10){
       divMinutos.textContent = `0${String(valueM)}`
    } else {
        divMinutos.textContent = String(valueM)
    }
    if (valueS < 10){
       divSegundos.textContent = `0${String(valueS)}`
    } else (
        divSegundos.textContent = String(valueS)
    )
})