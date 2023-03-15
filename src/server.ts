import express from "express";
import pgPromise from "pg-promise";
import Board from "./entity/Board";
import Card from "./entity/Card";
import Column from "./entity/Column";

const app = express();
const connection = pgPromise()("postgres://postgres:postgres@127.0.0.1:5432/app"); 

app.get("/boards", async function(request, response){
    const boardsData = await connection.query("select name from taskboard.board", []);

    const boards: Board[] = [];
    for(const boardData of boardsData){
        boards.push(new Board(boardData.name));
    }
    response.json(boards);
});

app.get("/boards/:idBoard/columns", async function(request, response){
    const columnsData = await connection.query("select name, has_estimative from taskboard.column where id_board = $1", [request.params.idBoard]);

    const columns: Column[] = [];
    for(const columnData of columnsData){
        columns.push(new Column(columnData.name, columnData.has_estimative));
    };
    response.json(columns);
});

app.get("/boards/:idBoard/columns/:idColumn/cards", async function(request, response){
    const cardsData = await connection.query("select title, estimative from taskboard.card where id_column = $1", [request.params.idColumn]);

    const cards: Card[] = []; // PARA NAO ACOPLAR AS QUERYS AO RETORNO QUE ESTA DANDO NA API
    for(const cardData of cardsData){
        cards.push(new Card(cardData.title, cardData.estimative));
    }
    response.json(cards);
});

app.listen(3000);