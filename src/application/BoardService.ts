import BoardRepository from "../domain/repository/BordRepository";
import CardRepository from "../domain/repository/CardRepository";
import ColumnRepository from "../domain/repository/ColumnRepository";

export default class BoardService{

    constructor(
        readonly boardRepository: BoardRepository,     
        ){
    
    };
    async getBoards(){
        const boards = await this.boardRepository.findAll();        
        return boards;
    };
};