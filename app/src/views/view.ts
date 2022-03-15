export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor : string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }else{
            throw Error('Seletor não existe no DOM')
        }
        
        if(escapar){
            this.escapar = escapar;
        }
    }

    public update(model: T): void{
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.elemento.innerHTML = template;
    }

    // sem necessidade de implementar 'throw' quando a classe é abstrata
    //template(model: T): string{
    //   throw Error('Classe filha precisa implementar o método template');
    //}
    protected abstract template(model: T): string;
}