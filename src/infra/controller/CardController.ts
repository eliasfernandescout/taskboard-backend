import CardService from "../../application/CardService";
import Connection from "../database/Connection";
import HttpServer from "../http/HttpServer";
import CardRepositoryDatabase from "../repository/CardRepositoryDatabase";

export default class CardController{

    constructor(
        readonly httpsServer: HttpServer, 
        readonly connection: Connection       
        ){      

        httpsServer.route("get", "/boards/:idBoard/columns/:idColumn/cards", async function (params: any, body: any){
            const cardRepository = new CardRepositoryDatabase(connection)
            const cardService = new CardService(cardRepository);
            const cards = await cardService.getCards(parseInt(params.idColumn));
            return cards;
        });
    }
}