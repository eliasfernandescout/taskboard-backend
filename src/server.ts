import express from "express";

const app = express();

app.get("/board", function(request, response){
    const boards = [
        { name: "Projeto 1" }
    ];
    response.json(boards);
});

app.listen(3000);