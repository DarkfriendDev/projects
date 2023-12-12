import mostrarSenha from './funções js/mostrarsenha.js';
import validarInputs from './funções js/validarInputs.js';

validarInputs()


// MOSTRAR-NAO MOSTRAR SENHA
let texto_checado = document.getElementById('label-mostrar-senha-checado');

let texto_nao_checado = document.getElementById('label-mostrar-senha-nao-checado');


let checkbox_nao_checado = document.getElementById('mostrar-senha-nao-checado');

let checkbox_checado = document.getElementById('mostrar-senha-checado');

let input_senha = document.getElementById('senha'); 



mostrarSenha(checkbox_nao_checado, texto_nao_checado, checkbox_checado, texto_checado, input_senha);