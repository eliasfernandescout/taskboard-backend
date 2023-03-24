import Card from "./Cards";

export default class Column {
    readonly name: string;
    readonly hasEstimative: boolean;
    cards: Card[];

    constructor(name: string, hasEstimative: boolean){
        this.name = name;
        this.hasEstimative = hasEstimative
        this.cards = []
    }

    addCard(card: Card){
        this.cards.push(card)
    }
}