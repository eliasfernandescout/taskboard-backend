test("Deve criar um cartao", function(){
    const card = new Card("Atividade 1", 3);
    expect(card.title).toBe("Atividade 1");
    expect(card.estimative).toBe(3)


})