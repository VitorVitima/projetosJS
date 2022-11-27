const ball = document.querySelector('#ball')
const displayButtom = document.querySelector('#buttom')
const text = document.querySelector('#onOrOff')
const roots = [ 
/* 0 */    '#FFFFFF', /* cor1 */
/* 1 */    '#DBF227', /* cor2 */
/* 2 */    '#489FB5', /* cor3 */
/* 3 */    '#4F518C', /* cor4 */
/* 4 */    '#181D27'] /* cor5 */
let rightOrLeft = false

function darkMode(){
    document.querySelector('#header').style.backgroundColor = roots[3]
    document.querySelector('body').style.color = roots[0]
    text.style.color = roots[3]
    document.querySelector('body').style.backgroundColor = roots[4]
    document.querySelector('#onOrOff').style.margin = '0px 4px 0px 0px'
}
function lightMode(){
    document.querySelector('#header').style.backgroundColor = roots[1]
    document.querySelector('body').style.color = 'black'
    text.style.color = 'black'
    document.querySelector('body').style.backgroundColor = 'white'
    document.querySelector('#onOrOff').style.marginLeft = '2px'
}
function rightBall(){
    displayButtom.style.flexDirection = 'row-reverse'
    return text.innerText = 'Off'
}
function leftBall(){
    displayButtom.style.flexDirection = 'row'
    return text.innerText = 'On'
}
function clickBall(){
    if (text.innerText == 'On'){
        rightBall()
        darkMode()
    } else if (text.innerText != 'On'){
        leftBall()
        lightMode()
    }
}