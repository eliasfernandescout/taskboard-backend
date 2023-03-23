import Column from "../../domain/entity/Column";
import ColumnRepository from "../../domain/repository/ColumnRepository";
import Connection from "../database/Connection";

export default class ColumnRepositoryDatabase implements ColumnRepository {
    readonly connection: Connection;

    constructor(connection: Connection){
        this.connection = connection;
    };
    async findAllByIdBoard(idBoard: number): Promise<Column[]> {
        const columnsData = await this.connection.query("select id_column, name, has_estimative from taskboard.column where id_board = $1", [idBoard]);
        const columns: Column[] = [];
        for(const columnData of columnsData){
        columns.push(new Column(columnData.id_column, columnData.name, columnData.has_estimative));
        };
        return columns;
    }



}