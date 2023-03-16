import BoardRepository from "../domain/repository/BordRepository";

export default class BoardService{
    readonly boardRepository: BoardRepository;

    constructor(boardRepository: BoardRepository){
        this.boardRepository = boardRepository;
    };
    async getBoards(){
        const boards = await this.boardRepository.findAll();        
        return boards;
    };
};