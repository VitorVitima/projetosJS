const button_Div = document.querySelector('#buttonDiv')

const button = () => {
    let key = 0
    const intervaloTrocaCor = setInterval(() => {
        switch (key++) {
            case 0:
                button_Div.style.backgroundColor = '#982B9E'
                button_Div.style.boxShadow = '0px 0px 20px 4px #982B9E'
                break;
            case 1:
                button_Div.style.backgroundColor = '#DEBA45'
                button_Div.style.boxShadow = '0px 0px 20px 4px #DEBA45'
                break;
            case 2:
                button_Div.style.backgroundColor = '#001499'
                button_Div.style.boxShadow = '0px 0px 20px 4px #001499'
                break;
            case 3:
                button_Div.style.backgroundColor = '#662400'
                button_Div.style.boxShadow = '0px 0px 20px 4px #662400'
                break;
            case 4:
                button_Div.style.backgroundColor = '#BD00E0'
                button_Div.style.boxShadow = '0px 0px 20px 4px #BD00E0'
                break;
            case 5:
                button_Div.style.backgroundColor = '#00F0DD'
                button_Div.style.boxShadow = '0px 0px 20px 4px #00F0DD'
                break;
            case 6:
                button_Div.style.backgroundColor = '#71C700'
                button_Div.style.boxShadow = '0px 0px 20px 4px #71C700'
                break;
            case 7:
                button_Div.style.backgroundColor = 'whitesmoke'
                button_Div.style.boxShadow = '0px 0px 20px 4px whitesmoke'
                break;
        }
       if (key > 7){
        clearInterval(intervaloTrocaCor)
    }
    }, 100)
    
}

button_Div.addEventListener('click', button)