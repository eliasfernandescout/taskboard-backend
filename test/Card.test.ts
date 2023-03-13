import Card from "../src/Card";

test("Deve criar um cartao", function(){
    const card = new Card("Atividade 1", 3);
    expect(card.title).toBe("Atividade 1");
    expect(card.estimative).toBe(3);
});

test("Deve criar um cartao sem titulo", function(){
    expect(()=> new Card("", 3)).toThrow(new Error("Title is required"))
});

test("Deve criar um cartao com estimativa negativa", function(){
    expect(()=> new Card("Atividade 1", -3)).toThrow(new Error("Estimative must be positive"))
});