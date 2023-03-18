// import axios from "axios";

// test("Deve retornar os quadros por meio da API", async function() {
//     const response = await axios({
//         url: "http://localhost:3000/boards",
//         method: "get"
//     });
//     const boards = response.data;
//     expect(boards).toHaveLength(1);
// }); 

// test("Deve retornar as colunas de um quadro por meio da API", async function() {
//     const response = await axios({
//         url: "http://localhost:3000/boards/1/columns",
//         method: "get"
//     });
//     const columns = response.data;
//     expect(columns).toHaveLength(3);
// }); 

// test("Deve retornar as colunas de um quadro por meio da API", async function() {
//     const response = await axios({
//         url: "http://localhost:3000/boards/1/columns/1/cards",
//         method: "get"
//     });
//     const cards = response.data;
//     expect(cards).toHaveLength(3);
// }); 