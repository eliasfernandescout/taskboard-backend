import ColumnService from "../../application/ColumnService";
import Connection from "../database/Connection";
import HttpServer from "../http/HttpServer";
import ColumnRepositoryDatabase from "../repository/ColumnRepositoryDatabase";

export default class ColumnController{

    constructor(
        readonly httpsServer: HttpServer, 
        readonly connection: Connection       
        ){      
        httpsServer.route("get", "/boards/:idBoard/columns", async function (params: any, body: any){
            const columnRepository = new ColumnRepositoryDatabase(connection);
            const columnService = new ColumnService(columnRepository);
            const columns = await columnService.getColumns(parseInt(params.idBoard));
            return columns;
        });


    }
}