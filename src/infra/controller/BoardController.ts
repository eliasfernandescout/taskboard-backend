import BoardService from "../../application/BoardService";
import Connection from "../database/Connection";
import HttpServer from "../http/HttpServer";
import BoardRepositoryDatabase from "../repository/BoardRepositoryDatabase";

export default class BoardController{

    constructor(
        readonly httpsServer: HttpServer, 
        readonly connection: Connection       
        ){      

        httpsServer.route("get", "/boards", async function (params: any, body: any){
            const boardRepository = new BoardRepositoryDatabase(connection)
            const boardService = new BoardService(boardRepository);
            const boards = await boardService.getBoards();
            return boards;
        });
    }
}