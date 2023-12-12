export default function validar(label, input) {
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



