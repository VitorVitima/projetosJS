const menu = document.querySelector('#menu')
const link = document.querySelector('#links')
let v1 = 0
function menuClick(){
    
    if (v1 == 0){
    link.style.display = 'flex'
    v1++
    } else {
        link.style.display = 'none'
        v1--
    }   
}