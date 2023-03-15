import Board from "../../src/domain/Board";

test("Deve criar um quadro", function(){
    const board = new Board("Projeto 1");
    expect(board.name).toBe("Projeto 1");
});

test("Nao deve criar um quadro sem nome", function(){
    expect(() => new Board("")).toThrow(new Error("Name is required"));
});
