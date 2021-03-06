import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;
    
    constructor(seletor : string) {
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }else{
            throw Error('Seletor não existe no DOM')
        }
    }


    public update(model: T): void{
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    // sem necessidade de implementar 'throw' quando a classe é abstrata
    //template(model: T): string{
    //   throw Error('Classe filha precisa implementar o método template');
    //}
    protected abstract template(model: T): string;
}