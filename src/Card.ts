export default class Card {
    readonly title: string;
    readonly estimative: number;

    constructor(title: string, estimative: number){
        this.title = title;
        this.estimative = estimative;
    }
}