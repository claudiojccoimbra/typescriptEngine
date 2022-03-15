export class Negociacao {

    constructor(
        public readonly data: Date, 
        public readonly quantidade: number, 
        public readonly valor:number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static CriaDe(dataString: string, quantidadeString: string, valorString: string ) : Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(
           date,
           quantidade,
           valor
        );
    }
}