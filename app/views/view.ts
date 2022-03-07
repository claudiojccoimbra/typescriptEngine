export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor : string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    // sem necessidade de implementar 'throw' quando a classe é abstrata
    //template(model: T): string{
    //   throw Error('Classe filha precisa implementar o método template');
    //}
    abstract template(model: T): string;
}