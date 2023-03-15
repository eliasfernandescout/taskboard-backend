import pgPromise from "pg-promise";
import Board from "../domain/Board";

export default class BoardService{

    constructor(){

    };

    async getBoards(){
        
        const boardsData = await connection.query("select name from taskboard.board", []);
        
        const boards: Board[] = [];
        for(const boardData of boardsData){
            const cardsData = await connection.query("select * from taskboard.card join taskboard.column using (id_column) where id_board = $1", [boardData.id_board])
            let estimative = 0;

            for(const cardData of cardsData){
                estimative += cardData.estimative;
            };
            const board = new Board(boardData.name)
            board.estimative = estimative;
            boards.push(board);
        };
        await connection.$pool.end();
        return boards;
    };
};