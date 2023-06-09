import Card from "./Cards";

export default class Column {
  readonly name: string;
  readonly hasEstimative: boolean;
  cards: Card[];

  constructor(name: string, hasEstimative: boolean) {
    this.name = name;
    this.hasEstimative = hasEstimative;
    this.cards = [];
  }

  addCard(card: Card) {
    this.cards.push(card);
  }

  getEstimative() {
    return this.cards.reduce((total: number, card: Column) => {
      total += card.estimative;
      return total;
    }, 0);
  }
}
