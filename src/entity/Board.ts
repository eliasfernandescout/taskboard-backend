export default class Board {
    readonly name: string;

    constructor(name: string){
        this.name = name;


        if (name === "") throw new Error("Name is required")
    }
}