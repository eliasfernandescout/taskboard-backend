export default class Column {
    readonly idColumn: number;
    readonly name: string;
    readonly hasEstimative: boolean;

    constructor(idColumn: number, name: string, hasEstimative: boolean){
        this.idColumn = idColumn;
        this.name = name;
        this.hasEstimative = hasEstimative;

        if(name === "") throw new Error("Name is required")
    }

    
}