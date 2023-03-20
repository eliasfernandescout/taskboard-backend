import BoardService from "../../application/BoardService";
import BoardRepository from "../../domain/repository/BoardRepository";
import CardRepository from "../../domain/repository/CardRepository";
import ColumnRepository from "../../domain/repository/ColumnRepository";
import Connection from "../database/Connection";
import HttpServer from "../http/HttpServer";
import BoardRepositoryDatabase from "../repository/BoardRepositoryDatabase";

export default class BoardController{

    constructor(
        readonly httpsServer: HttpServer, 
        readonly connection: Connection,
        readonly boardRepository: BoardRepository,
        readonly columnRepository: ColumnRepository,
        readonly cardRepository: CardRepository        
        ){      

        httpsServer.route("get", "/boards", async function (params: any, body: any){
            const boardRepository = new BoardRepositoryDatabase(connection)
            const boardService = new BoardService(boardRepository, columnRepository, cardRepository);
            const boards = await boardService.getBoards();
            return boards;
        });
    }
}