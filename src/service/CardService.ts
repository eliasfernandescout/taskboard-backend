import pgPromise from "pg-promise";
import Card from "../domain/Card";

export default class CardService {
    constructor(){

    };

    async getCards(idColumn: number){
        const connection = pgPromise()("postgres://postgres:postgres@127.0.0.1:5432/app");
        const cardsData = await connection.query("select title, estimative from taskboard.card where id_column = $1", [idColumn]);

        const cards: Card[] = [];
        for(const cardData of cardsData){
        cards.push(new Card(cardData.title, cardData.estimative));
        }
        await connection.$pool.end();
        return cards;

    }
}