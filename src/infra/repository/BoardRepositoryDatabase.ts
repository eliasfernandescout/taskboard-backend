import Board from "../../domain/entity/Board";
import BoardRepository from "../../domain/repository/BordRepository";
import Connection from "../database/Connection";

export default class BoardRepositoryDatabase implements BoardRepository{
    readonly connection: Connection;

    constructor(connection: Connection){
        this.connection = connection;
    };

    async findAll(): Promise<Board[]> {
        const boardsData = await this.connection.query("select id_board, name from taskboard.board", []);        
        const boards: Board[] = [];
        for (const boardData of boardsData){
            const board = new Board(boardData.name);
            boards.push(board);
        };
        return boards;        
    };

};