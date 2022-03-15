import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao [] {
        return this.negociacoes;
    }

    //lista(): Array<Negociacao>{
    //    return [...this.negociacoes]; // spread operator - retorna uma nova lista mantendo a lista original
    //}

}
