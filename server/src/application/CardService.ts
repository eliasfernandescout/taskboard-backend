import pgPromise from "pg-promise";
import Card from "../domain/entity/Card";
import CardRepository from "../domain/repository/CardRepository";

export default class CardService {
    readonly  cardRepository: CardRepository;

    constructor(cardRepository: CardRepository){
        this.cardRepository = cardRepository;

    };

    async getCards(idColumn: number){
        const cards = await this.cardRepository.findAllByIdColumn(idColumn);
        return cards;     

    }
}