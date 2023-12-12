import Visibilidade from "./visibilidade.js";


// BARRA DE PESQUISA
const input = document.querySelector('#input-search');
const btnSearch = document.querySelector('.btn-search');

// INFORMAÇÕES
const nomeLugar = new Visibilidade(document.querySelector('.nome-local'))
const temperatura = new Visibilidade(document.querySelector('.clima'));
const bandeira = new Visibilidade(document.querySelector('.pais-local'));
const temporal = new Visibilidade(document.querySelector('.tempo-atual'));
const umidade = new Visibilidade(document.querySelector('.umidade-info'));
const vento = new Visibilidade(document.querySelector('.vento-info'));
const tempo_icone = new Visibilidade(document.querySelector('.tempo-icone'));
const linha = new Visibilidade(document.querySelector('.linha'));

// CONTAINER COMPLETO
const containerInfos = document.querySelector('.container-informacoes');

const infosLocal = new Visibilidade(document.querySelector('.area-local'));
const climaLocal = new Visibilidade(document.querySelector('.clima-local'));
const infoExtras = new Visibilidade(document.querySelector('.info-extras'));


// ATIVANDO A REQUEST
input.addEventListener('keyup', function checagemAntes(e){
    if(e.key === 'Enter' && !input.value == '') {
        weatherClima()
    }
})

btnSearch.addEventListener('click', function checagemAntes(){
    if(!input.value == '') {
        weatherClima()
    }
})




async function weatherClima() {

    infosLocal.transition(0.1)
    climaLocal.transition(0.1)
    infoExtras.transition(0.1)

    infosLocal.opacidade(0)
    climaLocal.opacidade(0)
    infoExtras.opacidade(0)

    // KEY E API

    const keyAPI = '6c88cff036d505164daad8e2668925bd'
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${keyAPI}&units=metric&lang=pt_br`
    
    const fetchAPI = await fetch(weatherAPI);
    const clima = await fetchAPI.json()

    try {

        // API REQUEST
        fetchAPI
        clima


        

        // DEFININDO INFORMAÇÕES
        const climaAtual = clima.weather[0].description
        const capitalize = climaAtual => climaAtual.charAt(0).toUpperCase() + climaAtual.substring(1);



        nomeLugar.elemento.innerHTML = clima.name
        temporal.elemento.innerHTML = capitalize(climaAtual)
        umidade.elemento.innerHTML = `${+clima.main.humidity}%`
        temperatura.elemento.innerHTML = `${+clima.main.temp.toFixed()} °C`
        bandeira.elemento.setAttribute('src', `https://flagsapi.com/${clima.sys.country}/flat/64.png`)


        vento.elemento.innerHTML = `${clima.wind.speed}mph`
        tempo_icone.elemento.setAttribute('src', `https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`)



        if (!clima.sys.country) {
            if (clima.name == 'Africa') {
                bandeira.elemento.setAttribute('src', `https://flagsapi.com/ZA/flat/64.png`)
            }
        }
        


        if (clima.name == 'Cañada') {
            bandeira.elemento.setAttribute('src', `https://flagsapi.com/CA/flat/64.png`)
        }



        
        infosLocal.display('flex')
        bandeira.display('block')
        climaLocal.display('flex')
        infoExtras.display('flex')

        infosLocal.transition(0.5)
        climaLocal.transition(0.5)
        infoExtras.transition(0.5)

        setTimeout(() =>{
            infosLocal.opacidade(1)
            climaLocal.opacidade(1)
            infoExtras.opacidade(1)
        }, 700)

    } catch(e) {
        bandeira.display('none')

        climaLocal.display('none')
        infoExtras.display('none')
        infosLocal.display('flex')

        infosLocal.transition(0.5)

        setTimeout(() =>{
            infosLocal.opacidade(1)
        }, 700)
        
        switch (clima.cod) {
            case '404':
                nomeLugar.elemento.innerHTML = 'Não Encontrado';
                break;
            case '400':
                nomeLugar.elemento.innerHTML = 'Solicitação Inválida';
                break;
            case '401':
                nomeLugar.elemento.innerHTML = 'Não Autorizado';
                break;
            case '429':
                nomeLugar.elemento.innerHTML = 'Muitos Pedidos \n Tente Novamente Mais Tarde';
                break
            default:
                nomeLugar.elemento.innerHTML = 'Erro Inesperado';
        }



    }
    

    
    
    
}



