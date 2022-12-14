const ponteiroHoras = document.querySelector('#divhoras')
const pomteiroMinutos = document.querySelector('#divminutos')
setInterval( function () {
    const data = new Date()
    let horas = data.getHours()
    if (horas == 21 || horas == 09){
        ponteiroHoras.style.transform = 'rotate(180deg)'
        ponteiroHoras.style.left = '20%'
    } else if (horas == 22 || horas == 10){
        ponteiroHoras.style.transform = 'rotate(208deg)'
        ponteiroHoras.style.left = '22%'
        ponteiroHoras.style.top = '42.5%'
    } else if (horas == 23 || horas == 11){
        ponteiroHoras.style.transform = 'rotate(232deg)'
        ponteiroHoras.style.left = '26%'
        ponteiroHoras.style.top = '38%'
    } else if (horas == 00 || horas == 12 || horas == 24){
        ponteiroHoras.style.transform = 'rotate(270deg)'
        ponteiroHoras.style.left = '35%'
        ponteiroHoras.style.top = '34%'
    } else if (horas == 13 || horas == 1){
        ponteiroHoras.style.transform = 'rotate(302deg)'
        ponteiroHoras.style.left = '43%'
        ponteiroHoras.style.top = '37%'
    } else if (horas == 14 || horas == 2){
        ponteiroHoras.style.transform = 'rotate(335deg)'
        ponteiroHoras.style.left = '48%'
        ponteiroHoras.style.top = '43.5%' 
    } else if (horas == 15 || horas == 3){
        ponteiroHoras.style.transform = 'rotate(360deg)'
    } else if (horas == 16 || horas == 4){
        ponteiroHoras.style.transform = 'rotate(31deg)'
        ponteiroHoras.style.left = '48%'
        ponteiroHoras.style.top = '57.5%'
    } else if (horas == 17 || horas == 5){
        ponteiroHoras.style.transform = 'rotate(60deg)'
        ponteiroHoras.style.left = '42.2%'
        ponteiroHoras.style.top = '62%'
    } else if (horas == 18 || horas == 6){
        ponteiroHoras.style.transform = 'rotate(90deg)'
        ponteiroHoras.style.left = '35%'
        ponteiroHoras.style.top = '65%'
    } else if (horas == 19 || horas == 7){
        ponteiroHoras.style.transform = 'rotate(120deg)'
        ponteiroHoras.style.left = '27%'
        ponteiroHoras.style.top = '63%'
    } else if (horas == 20 || horas == 8){
        ponteiroHoras.style.transform = 'rotate(150deg)'
        ponteiroHoras.style.left = '22%'
        ponteiroHoras.style.top = '57%'
    }
}, 1000)

setInterval( function (){
    const data = new Date()
    let minutos = data.getMinutes()
    //minutos = 6
    console.log(minutos)
    if (minutos == 15){
        pomteiroMinutos.style.transform = 'rotate(0)'
    } else if (minutos == 16){
        pomteiroMinutos.style.transform = 'rotate(5deg)'
        pomteiroMinutos.style.top = '50.5%'
    } else if (minutos == 17){
        pomteiroMinutos.style.transform = 'rotate(10deg)'
        pomteiroMinutos.style.top = '51.6%'
    } else if (minutos == 18){
        pomteiroMinutos.style.transform = 'rotate(15deg)'
        pomteiroMinutos.style.top = '52.6%'
    } else if (minutos == 19){
        pomteiroMinutos.style.transform = 'rotate(20deg)'
        pomteiroMinutos.style.top = '53.6%'
    } else if (minutos == 20){
        pomteiroMinutos.style.transform = 'rotate(27deg)'
        pomteiroMinutos.style.left = '49%'
        pomteiroMinutos.style.top = '55%'
    } else if (minutos == 21){
        pomteiroMinutos.style.transform = 'rotate(30deg)'
        pomteiroMinutos.style.left = '49%'
        pomteiroMinutos.style.top = '55.6%'
    } else if (minutos == 22){
        pomteiroMinutos.style.transform = 'rotate(35deg)'
        pomteiroMinutos.style.left = '47.7%'
        pomteiroMinutos.style.top = '56%'
    } else if (minutos == 23){
        pomteiroMinutos.style.transform = 'rotate(40deg)'
        pomteiroMinutos.style.left = '46.9%'
        pomteiroMinutos.style.top = '56.8%'
    } else if (minutos == 24){
        pomteiroMinutos.style.transform = 'rotate(53deg)'
        pomteiroMinutos.style.left = '45.5%'
        pomteiroMinutos.style.top = '59%'
    } else if (minutos == 25){
        pomteiroMinutos.style.transform = 'rotate(55deg)'
        pomteiroMinutos.style.left = '45.5%'
        pomteiroMinutos.style.top = '59.8%'
    } else if (minutos == 26){
        pomteiroMinutos.style.transform = 'rotate(60deg)'
        pomteiroMinutos.style.left = '44%'
        pomteiroMinutos.style.top = '59.8%'
    } else if (minutos == 27){
        pomteiroMinutos.style.transform = 'rotate(65deg)'
        pomteiroMinutos.style.left = '43%'
        pomteiroMinutos.style.top = '59.8%'
    } else if (minutos == 28){
        pomteiroMinutos.style.transform = 'rotate(75deg)'
        pomteiroMinutos.style.left = '41%'
        pomteiroMinutos.style.top = '60.5%'
    } else if (minutos == 29){
        pomteiroMinutos.style.transform = 'rotate(83deg)'
        pomteiroMinutos.style.left = '39.5%'
        pomteiroMinutos.style.top = '61%'
    } else if (minutos == 30){
        pomteiroMinutos.style.transform = 'rotate(90deg)'
        pomteiroMinutos.style.left = '38%'
        pomteiroMinutos.style.top = '61%'
    } else if (minutos == 31){
        pomteiroMinutos.style.transform = 'rotate(95deg)'
        pomteiroMinutos.style.left = '37%'
        pomteiroMinutos.style.top = '61%'
    } else if (minutos == 32){
        pomteiroMinutos.style.transform = 'rotate(105deg)'
        pomteiroMinutos.style.left = '35%'
        pomteiroMinutos.style.top = '61%'
    } else if (minutos == 33) {
        pomteiroMinutos.style.transform = 'rotate(115deg)'
        pomteiroMinutos.style.left = '33%'
        pomteiroMinutos.style.top = '61%'
    } else if (minutos == 34){
        pomteiroMinutos.style.transform = 'rotate(120deg)'
        pomteiroMinutos.style.left = '32%'
        pomteiroMinutos.style.top = '60%'
    } else if (minutos == 35){
        pomteiroMinutos.style.transform = 'rotate(125deg)'
        pomteiroMinutos.style.left = '31%'
        pomteiroMinutos.style.top = '60%'
    } else if (minutos == 36){
        pomteiroMinutos.style.transform = 'rotate(130deg)'
        pomteiroMinutos.style.left = '30%'
        pomteiroMinutos.style.top = '59%'
    } else if (minutos == 37) {
        pomteiroMinutos.style.transform = 'rotate(135deg)'
        pomteiroMinutos.style.left = '29%'
        pomteiroMinutos.style.top = '58.5%'
    } else if (minutos == 38){
        pomteiroMinutos.style.transform = 'rotate(142deg)'
        pomteiroMinutos.style.left = '28.9%'
        pomteiroMinutos.style.top = '56.9%'
    } else if (minutos == 39){
        pomteiroMinutos.style.transform = 'rotate(145deg)'
        pomteiroMinutos.style.left = '28%'
        pomteiroMinutos.style.top = '56.9%'
    } else if (minutos == 40){
        pomteiroMinutos.style.transform = 'rotate(150deg)'
        pomteiroMinutos.style.left = '27%'
        pomteiroMinutos.style.top = '56%'
    } else if (minutos == 41){
        pomteiroMinutos.style.transform = 'rotate(155deg)'
        pomteiroMinutos.style.left = '27%'
        pomteiroMinutos.style.top = '55%'
    } else if (minutos == 42){
        pomteiroMinutos.style.transform = 'rotate(160deg)'
        pomteiroMinutos.style.left = '27%'
        pomteiroMinutos.style.top = '54%'
    } else if (minutos == 43){
        pomteiroMinutos.style.transform = 'rotate(165deg)'
        pomteiroMinutos.style.left = '26%'
        pomteiroMinutos.style.top = '53%'
    } else if (minutos == 44){
        pomteiroMinutos.style.transform = 'rotate(175deg)'
        pomteiroMinutos.style.left = '26%'
        pomteiroMinutos.style.top = '50.8%'
    } else if (minutos==45){
        pomteiroMinutos.style.transform = 'rotate(180deg)'
        pomteiroMinutos.style.left = '25.5%'
        pomteiroMinutos.style.top = '49.8%'
    } else if (minutos == 46){
        pomteiroMinutos.style.transform = 'rotate(185deg)'
        pomteiroMinutos.style.left = '25.9%'
        pomteiroMinutos.style.top = '48.8%'
    } else if (minutos==47){
        pomteiroMinutos.style.transform = 'rotate(190deg)'
        pomteiroMinutos.style.left = '25.9%'
        pomteiroMinutos.style.top = '47.7%'
    } else if (minutos == 48){
        pomteiroMinutos.style.transform = 'rotate(195deg)'
        pomteiroMinutos.style.left = '25.9%'
        pomteiroMinutos.style.top = '46.7%'
    }else if (minutos == 49){
        pomteiroMinutos.style.transform = 'rotate(200deg)'
        pomteiroMinutos.style.left = '26%'
        pomteiroMinutos.style.top = '45%'
    }else if (minutos == 50){
        pomteiroMinutos.style.transform = 'rotate(205deg)'
        pomteiroMinutos.style.left = '28%'
        pomteiroMinutos.style.top = '44%'
    } 
    else if (minutos == 51){
        pomteiroMinutos.style.transform = 'rotate(210deg)'
        pomteiroMinutos.style.left = '28%'
        pomteiroMinutos.style.top = '44%'
    } 
    else if (minutos == 52){
        pomteiroMinutos.style.transform = 'rotate(215deg)'
        pomteiroMinutos.style.left = '28.7%'
        pomteiroMinutos.style.top = '43%'
    } else if (minutos == 53){
        pomteiroMinutos.style.transform = 'rotate(220deg)'
        pomteiroMinutos.style.left = '29%'
        pomteiroMinutos.style.top = '42%'
    }else if (minutos == 54){
        pomteiroMinutos.style.transform = 'rotate(225deg)'
        pomteiroMinutos.style.left = '30%'
        pomteiroMinutos.style.top = '41%'
    }else if (minutos == 55){
        pomteiroMinutos.style.transform = 'rotate(230deg)'
        pomteiroMinutos.style.left = '30.5%'
        pomteiroMinutos.style.top = '40%'
    }else if (minutos == 56){
        pomteiroMinutos.style.transform = 'rotate(235deg)'
        pomteiroMinutos.style.left = '31.5%'
        pomteiroMinutos.style.top = '40%'
    }else if (minutos == 57){
        pomteiroMinutos.style.transform = 'rotate(245deg)'
        pomteiroMinutos.style.left = '33%'
        pomteiroMinutos.style.top = '38%'
    }else if (minutos == 58){
        pomteiroMinutos.style.transform = 'rotate(250deg)'
        pomteiroMinutos.style.left = '34%'
        pomteiroMinutos.style.top = '38%'
    }else if (minutos == 59){
        pomteiroMinutos.style.transform = 'rotate(265deg)'
        pomteiroMinutos.style.left = '37%'
        pomteiroMinutos.style.top = '38%'
    }else if (minutos == 60 || minutos == 0){
        pomteiroMinutos.style.transform = 'rotate(270deg)'
        pomteiroMinutos.style.left = '38%'
        pomteiroMinutos.style.top = '38%'
    } else if ( minutos == 1){
        pomteiroMinutos.style.transform = 'rotate(275deg)'
        pomteiroMinutos.style.left = '39%'
        pomteiroMinutos.style.top = '38%'
    }else if ( minutos == 2){
        pomteiroMinutos.style.transform = 'rotate(283deg)'
        pomteiroMinutos.style.left = '40.8%'
        pomteiroMinutos.style.top = '38%'
    }else if ( minutos == 3){
        pomteiroMinutos.style.transform = 'rotate(288deg)'
        pomteiroMinutos.style.left = '42%'
        pomteiroMinutos.style.top = '38%'
    }else if ( minutos == 4){
        pomteiroMinutos.style.transform = 'rotate(293deg)'
        pomteiroMinutos.style.left = '43%'
        pomteiroMinutos.style.top = '38%'
    }else if ( minutos == 5){
        pomteiroMinutos.style.transform = 'rotate(305deg)'
        pomteiroMinutos.style.left = '45%'
        pomteiroMinutos.style.top = '30%'
    }else if ( minutos == 6){
        pomteiroMinutos.style.transform = 'rotate(310deg)'
        pomteiroMinutos.style.left = '46%'
        pomteiroMinutos.style.top = '40%'
    }
    //continuar 06 minutos
}, 1000)