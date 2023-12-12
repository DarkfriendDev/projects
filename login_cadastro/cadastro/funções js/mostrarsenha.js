export default function mostrarSenha(checkno, textno, checkyes, textyes, pass) {
    // CHECKBOX SENDO CHECADO

    checkno.addEventListener('click', () => {
        checkno.style.display = 'none';
        textno.style.display = 'none';

        checkyes.style.display = 'inline-block';
        textyes.style.display = 'inline-block';

        pass.setAttribute('type', 'text');

    })

    textno.addEventListener('click', () => {
        checkno.style.display = 'none';
        textno.style.display = 'none';

        checkyes.style.display = 'inline-block';
        textyes.style.display = 'inline-block';

        pass.setAttribute('type', 'text');


    })


// CHECKBOX SENDO DESMARCADO

    checkyes.addEventListener('click', () => {
        checkno.style.display = 'inline-block';
        textno.style.display = 'inline-block';

        checkyes.style.display = 'none';
        textyes.style.display = 'none';

        pass.setAttribute('type', 'password');


    })

    textyes.addEventListener('click', () => {
        checkno.style.display = 'inline-block';
        textno.style.display = 'inline-block';

        checkyes.style.display = 'none';
        textyes.style.display = 'none';

        pass.setAttribute('type', 'password');

    })

    

}