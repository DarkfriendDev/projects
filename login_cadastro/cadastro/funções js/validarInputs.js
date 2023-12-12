export default function validarInputs() {
    //LABEL
    let label_nome = document.getElementById('label-nome');
    let label_cpf = document.getElementById('label-cpf'); 
    let label_email = document.getElementById('label-email'); 
    let label_senha = document.getElementById('label-senha'); 

    //INPUT

    let input_nome = document.getElementById('nome');
    let input_cpf = document.getElementById('cpf'); 
    let input_email = document.getElementById('email'); 
    let input_senha = document.getElementById('senha'); 

    
    // FORMULARIO
    let form = document.querySelector('.cadastro');


    // 0 - NOME
    // 1 - CPF
    // 2 - EMAIL
    // 3 - SENHA

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


    function validarNome(input) {

        input.onkeyup = () => {
            const regex = /\d+/g;
            const isMatch = regex.test(input.value);

            if (input.value.trim() === '' || input.value.length < 3 || isMatch == true) {
                inputError(input, 0);
                
            } else {
                inputCorrect(input, 0);

            }
        }
        
    }


    function validarCpf(cpf) {
        cpf.value.trim()

        cpf.onkeyup = () => {

            const cpfs = [
                /(\d{3})(\d{3})(\d{3})(\d{2})/g, // 00000000000
                /(\d{3})(\d{3})(\d{3})-(\d{2})/g, // 000000000-00
                /(\d{3})\.(\d{3})\.(\d{3})\.(\d{2})/g, // 000.000.000.00
                /(\d{3})-(\d{3})-(\d{3})-(\d{2})/g // 000-000-000-00
            ]

            cpfs.forEach((item) => {
                if (item.test(cpf.value) == true) {
                    cpf.value = cpf.value.replace(item, /$1.$2.$3-$4/)
                }
            })

            const removerLetras = /[a-z\,\;\:\s]/gi;
            const passouLimite = /\d{12,}/g;
            
            cpf.value = cpf.value.replace(removerLetras, '')
            cpf.value = cpf.value.replace(passouLimite, '')
            cpf.value = cpf.value.replace(/[/]/g, '')


            const regexValidado = /^(\d{3})\.(\d{3})\.(\d{3})\-(\d{2})\b/g;

            const isMatch = regexValidado.test(cpf.value)
        
            if (isMatch == true) {
                inputCorrect(cpf, 1);

            } else {
                inputError(cpf, 1);

            }
        }
    }

    function validarEmail(input) {

        input.onkeyup = () => {
            input.value.trim();
            input.value.toLowerCase();

            const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
            const isMatch = regex.test(input.value)
        
            if (isMatch == true) {
                inputCorrect(input, 2);

            } else {
                inputError(input, 2);
            }
        }
        
    }

    function validarSenha(input) {
        input.onkeyup = () => {

            if (input.value.trim() == '' || input.value.length < 8) {
                inputError(input, 3);
            } else {
                inputCorrect(input, 3);
            }
        }
        
    }

    function labelFlutuante(label, input) {
            label.style.transition = 'top 0.5s';
        
            input.onfocus = () => {
                label.style.top = '5px';
            }
            
            input.onblur = () => {
                if (input.value == '') {
                    label.style.top = '20px';
                }
            }
    }



    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
    })

    labelFlutuante(label_email, input_email);
    labelFlutuante(label_senha, input_senha);

    labelFlutuante(label_nome, input_nome);
    labelFlutuante(label_cpf, input_cpf);

    validarEmail(input_email);
    validarCpf(input_cpf);

    validarNome(input_nome);

    validarSenha(input_senha);
}