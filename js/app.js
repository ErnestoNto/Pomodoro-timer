// Variáveis

const startBtn = document.getElementById('playBtn')
const resetBtn = document.getElementById('resetBtn')

const workTitle = document.getElementById('work')
const breakTitle = document.getElementById('break')

const time = document.getElementById('time')

let workMin = 25
let breakMin = 5

let sec = '00'

window.onload = () => {
    time.innerText = `${workMin}:${sec}`
    

    workTitle.classList.add('active')
}

const start = () => {
    let min = workMin

    min--
    sec = 59

    time.innerText = `${min}:${sec}`

    startBtn.style.display = 'none'
    resetBtn.style.display = 'block'

    let handlePoint = 0

    const minutesDown = () => {
        sec --

        time.innerText = `${min}:${sec}`

        if(sec === 0){
            min--

            sec = 59
        }

        if(min === -1){
            if(handlePoint % 2 === 0){
                min = breakMin
                handlePoint++

                workTitle.classList.remove('active')
                breakTitle.classList.add('active')
            }else{
                min = workMin
                handlePoint --

                workTitle.classList.add('active')
                breakTitle.classList.remove('active')
            }
        }
    }

    setInterval(() => minutesDown(), 1000);
}

startBtn.addEventListener('click', () => start())