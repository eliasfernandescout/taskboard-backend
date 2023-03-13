PROJETO:

Criar uma ferramenta similar ao Trello, que tenha um quadro com colunas e cartoes, permitindo que esses
cartoes tenham estimativa, com isso podendo calcular a estimativa tanto das colunas quando do quadro todo
e tambem um front-end que permita utiliando drag n drop, mudar a ordem das colunas, ds cartoes, inserir,
editar e deletar;

ETAPA 1

1- Deve criar um novo quadro com nome e descricao
2- Deve permitir incluir colunas no quadro (por exemplo: Todo, Doing e Done), indicando se ela deve ou nao
contar o tempo do cartao;
3- Deve associar cartoes em cada uma das colunas contendo o titulo da tarefa e a estimativa em horas;
4- Deve ser possivel calcular a estimativa total de cada coluna;

ETAPA 2

Crie uma API para fornecer dados do quadro

GET/boards, retorna os quadros
GET/boards/id/columns, retorna as colunas do quadro
GET/boards/id/columns/id/cards, retorna os cartoes da coluna


Utilize o que aprendemos nos decorators para criar, maperar as rotas http e persistir no banco de dados;