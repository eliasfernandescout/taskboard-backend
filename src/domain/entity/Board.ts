export default class Board {
    readonly name: string;
    estimative?: number;

    constructor(name: string, estimative?: number){
        this.name = name;
        this.estimative = estimative;
        if (name === "") throw new Error("Name is required")
    };
};