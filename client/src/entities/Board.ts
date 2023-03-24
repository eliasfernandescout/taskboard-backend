import Card from "./Cards";
import Column from "./Column";

export default class Board {
    readonly name: string;
    columns: Column[];


    constructor(name: string){
        this.name = name;
        this.columns = [];

    }
    
    addColumn(columnName:string, hasEstimative: boolean){
        this.columns.push(new Column(columnName, hasEstimative))
    };

    addCard(columnName: string, cardTitle: string, cardEstimative: number){
        const column = this.columns.find(column => column.name === columnName);
        if(!column) throw new Error("Column not found!")
        column.addCard(new Card(cardTitle, cardEstimative))

    }

    getEstimative(){
        return this.columns.reduce((total: number, column: Column) => {
            total += column.cards.reduce((total: number, card: any) => {
              total += card.estimative;
              return total;
            }, 0);
            return total;
          }, 0);
    };
}