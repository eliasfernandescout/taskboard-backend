import express from "express";
import pgPromise from "pg-promise";
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import BoardService from "./service/BoardService";
import CardService from "./service/CardService";
import ColumnService from "./service/ColumnService";

const app = express();
const connection = new PgPromiseConnection();

app.get("/boards", async function(request, response){
    const boardService = new BoardService();
    const boards = await boardService.getBoards();
    response.json(boards);
});

app.get("/boards/:idBoard/columns", async function(request, response){
   const columnService = new ColumnService();
   const columns = await columnService.getColumns(parseInt(request.params.idBoard));
   response.json(columns);
});

app.get("/boards/:idBoard/columns/:idColumn/cards", async function(request, response){
    const cardService = new CardService();
   const cards = await cardService.getCards(parseInt(request.params.idColumn));
   response.json(cards);
    
});

app.listen(3000);