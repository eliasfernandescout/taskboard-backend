export default class Column {
    readonly name: string;
    readonly hasEstimative: boolean;

    constructor(name: string, hasEstimative: boolean){
        this.name = name;
        this.hasEstimative = hasEstimative;

        if(name === "") throw new Error("Name is required")
    }

    
}