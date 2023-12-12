import validar from './funções js/validacao.js'
import mostrarSenha from './funções js/mostrarsenha.js';

let label_email = document.getElementById('label-email');
let label_senha = document.getElementById('label-senha');

let input_email = document.getElementById('email');
let input_senha = document.getElementById('senha');

let texto_checado = document.getElementById('label-mostrar-senha-checado');

let texto_nao_checado = document.getElementById('label-mostrar-senha-nao-checado');



let checkbox_nao_checado = document.getElementById('mostrar-senha-nao-checado');

let checkbox_checado = document.getElementById('mostrar-senha-checado');

let form = document.querySelector('.login');



validar(label_email, input_email);
validar(label_senha, input_senha);

mostrarSenha(checkbox_nao_checado, texto_nao_checado, checkbox_checado, texto_checado, input_senha);

// 0 - EMAIL
// 1 - SENHA

function inputError(input, valor) {
    input.classList.add('invalido');
    input.classList.remove('valido');
    
    let img_invalido = document.getElementsByClassName('img-invalido')[valor].style.display = 'block';

    let img_valido = document.getElementsByClassName('img-valido')[valor].style.display = 'none';
}


function inputCorrect(input, valor) {
    input.classList.remove('invalido');
    input.classList.add('valido');

    let img_invalido = document.getElementsByClassName('img-invalido')[valor].style.display = 'none';

    let img_valido = document.getElementsByClassName('img-valido')[valor].style.display = 'block';
}



function validarEmail(input) {

    input.onkeyup = () => {
        input.value.trim();
        input.value.toLowerCase();

        const regex = /^\w+\@[a-z]+\.[a-z]{2,}/g;
        const isMatch = regex.test(input.value)

        if (isMatch == true) {
            inputCorrect(input, 0);

        } else {
            inputError(input, 0);

    
        }
    }
}

function validarSenha(input) {
    input.value.trim()

    input.onkeyup = () => {

        if (input.value === '' || input.value.length < 8) {
            inputError(input, 1);
        } else {
            inputCorrect(input, 1);
        }
    }
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
})


validarEmail(input_email);
validarSenha(input_senha);
