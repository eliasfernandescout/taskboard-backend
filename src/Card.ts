export default class Card {
    readonly title: string;
    readonly estimative: number;

    constructor(title: string, estimative: number){
        this.title = title;
        this.estimative = estimative;


        if (title === "") throw new Error("Title is required")
        if(estimative < 0) throw new Error("Estimative must be positive")
    }
}