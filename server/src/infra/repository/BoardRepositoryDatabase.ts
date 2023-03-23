import Board from "../../domain/entity/Board";
import BoardRepository from "../../domain/repository/BoardRepository";
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

    async get(idBoard: number): Promise<Board> {
        const [boardData] = await this.connection.query("select * from taskboard.board where id_board =$1", [idBoard]);        
        if(!boardData) throw new Error("Board not found")
        const board = new Board(boardData.name);
        return board;   
    };

};