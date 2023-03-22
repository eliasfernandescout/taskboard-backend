import BoardController from "./infra/controller/BoardController";
import CardController from "./infra/controller/CardController";
import ColumnController from "./infra/controller/ColumnController";
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import BoardRepositoryDatabase from "./infra/repository/BoardRepositoryDatabase";
import CardRepositoryDatabase from "./infra/repository/CardRepositoryDatabase";
import ColumnRepositoryDatabase from "./infra/repository/ColumnRepositoryDatabase";

const connection = new PgPromiseConnection();
const boardRepository = new BoardRepositoryDatabase(connection);
const columnRepository = new ColumnRepositoryDatabase(connection);
const cardRepository = new CardRepositoryDatabase(connection);
const httpServer = new ExpressAdapter();
new BoardController(httpServer, connection, boardRepository, columnRepository, cardRepository);
new ColumnController(httpServer, connection);
new CardController(httpServer, connection);
httpServer.listen(3000);