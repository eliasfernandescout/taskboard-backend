import BoardController from "./infra/controller/BoardController";
import CardController from "./infra/controller/CardController";
import ColumnController from "./infra/controller/ColumnController";
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import ExpressAdapter from "./infra/http/ExpressAdapter";

const connection = new PgPromiseConnection();
const httpServer = new ExpressAdapter();
new BoardController(httpServer, connection);
new ColumnController(httpServer, connection);
new CardController(httpServer, connection);
httpServer.listen(3000);