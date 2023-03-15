import pgPromise from "pg-promise";
import Column from "../domain/Column";

export default class ColumnService {
    
    constructor(){

    };

    async getColumns(idBoard: number){
        const connection = pgPromise()("postgres://postgres:postgres@127.0.0.1:5432/app"); 
        const columnsData = await connection.query("select name, has_estimative from taskboard.column where id_board = $1", [idBoard]);
        const columns: Column[] = [];
        for(const columnData of columnsData){
        columns.push(new Column(columnData.name, columnData.has_estimative));
        };
        await connection.$pool.end();
        return columns;
    };
};
