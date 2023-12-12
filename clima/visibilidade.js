export default class Visibilidade {
    constructor(elemento) {
        this.elemento = elemento;
    }

    opacidade(valor) {
        this.elemento.style.opacity = valor;
    }

    display(valor) {
        this.elemento.style.display = valor;
    }

    transition(valor) {
        this.elemento.style.transition = `all ${valor}s`
    }

}