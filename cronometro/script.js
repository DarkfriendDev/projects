const spanMin = document.querySelector('.min');
const spanSeg = document.querySelector('.seg');
const spanMili = document.querySelector('.mili');
const spanHora = document.querySelector('.hora');
const spanHoraPP = document.querySelector('.horaPP');

const preAllSpan = document.querySelectorAll('span');
const allSpan = Array.from(preAllSpan)

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

const fontInicial = spanMin.style.fontSize


let mili = 0;
let seg = 0;
let min = 0;
let hora = 0

function tempo() {
    if (hora > 0) {
        spanHora.style.display = 'inline'
        spanHoraPP.style.display = 'inline'

        if (windowWidth >= 300 || windowHeight <= 300) {
            preAllSpan.forEach(span => {
            span.style.fontSize = '2rem';
        })
        }

    }

    if (mili > 9) {
        spanMili.innerHTML = mili
    } else {
        spanMili.innerHTML = `0${mili}`
    }

    if (seg > 9) {
        spanSeg.innerHTML = seg
    } else {
        spanSeg.innerHTML = `0${seg}`
    }

    if (min > 9) {
        spanMin.innerHTML = min
    } else {
        spanMin.innerHTML = `0${min}`
    }

    if (hora > 9) {
        spanHora.innerHTML = hora
    } else {
        spanHora.innerHTML = `0${hora}`
    }



    if (mili == 99) {
        mili = 0
        seg++
    }

    if (seg == 60) {
        seg = 0
        min++
    }

    if (min == 60) {
        min = 0
        hora++
    }

    mili++


}


const btnStart = document.querySelector('.start-btn')
const btnPause = document.querySelector('.pause-btn')
const btnReset = document.querySelector('.reset-btn')

const cronoBorda = document.querySelector('.tempo-bordas');



btnStart.addEventListener('click', () => {
    cronoBorda.style.animationPlayState = 'running';
    const iniciarInterval = setInterval(tempo, 10);
    btnStart.style.display = 'none'
    btnPause.style.display = 'inline'
    btnReset.style.display = 'inline'


    btnPause.addEventListener('click', () => {
        cronoBorda.style.animationPlayState = 'paused';
        clearInterval(iniciarInterval)
        btnStart.style.display = 'inline'
        btnPause.style.display = 'none'
        btnReset.style.display = 'inline'
    })
    
    btnReset.addEventListener('click', () => {
        cronoBorda.style.animationPlayState = 'paused';
        clearInterval(iniciarInterval)
        mili = 0;
        seg = 0;
        min = 0;
        hora = 0;

        preAllSpan.forEach(span => {
            span.style.fontSize = fontInicial
        })

        spanHora.style.display = 'none'
        spanHoraPP.style.display = 'none'

        spanMili.innerHTML = `0${mili}`
        spanSeg.innerHTML = `0${seg}`
        spanMin.innerHTML = `0${min}`
        spanHora.innerHTML = `0${hora}`


        btnStart.style.display = 'inline'
        btnPause.style.display = 'none'
        btnReset.style.display = 'none'
    })
})







window.addEventListener('resize', () => {
    console.log(window.innerWidth)
})