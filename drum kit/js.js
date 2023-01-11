const latters = document.querySelector('#latters')
const playTag = document.createElement('audio')
const allSongs = [
    './songs/boom.wav',
    './songs/hihat.wav',
    './songs/lap.wav',
    './songs/openhat.wav',
    './songs/ride.wav',
    './songs/snare.wav',
    './songs/tink.wav',
    './songs/tom.wav'
]
const arrayLatters = ['A', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const creatDiv = () => {
    for(let v1 = 0; v1 < 8; v1++){
        const divTag = document.createElement('div')
        divTag.classList.add('divLatter')
        divTag.innerHTML = arrayLatters[v1]
        
        latters.appendChild(divTag)
    }
}
latters.appendChild(playTag)
creatDiv()
const divWithLatter = [...document.querySelectorAll('.divLatter')]
divWithLatter.map((el, posi)=>{
        el.addEventListener('click', ()=>{
                el.classList.toggle('marcado')
                playTag.src = allSongs[posi]
                playTag.play()
                setTimeout(()=>{
                  el.classList.toggle('marcado')  
                }, 400)
            }
        )
    }
)


