import Column from "../src/Column";

test("Deve criar uma coluna", function(){
    const column = new Column("Coluna A", true);
    expect(column.name).toBe("Coluna A");
    expect(column.hasEstimative).toBeTruthy();
});

test("Deve deve criar uma coluna sem nome", function(){
    expect(()=>new Column("", true)).toThrow(new Error("Name is required"));
});