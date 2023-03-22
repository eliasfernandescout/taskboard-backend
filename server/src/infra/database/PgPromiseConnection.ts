import pgPromise from "pg-promise";
import Connection from "./Connection";

export default class PgPromiseConnection implements Connection{
    connection: any;

    constructor(){
        this.connection = pgPromise()("postgres://postgres:postgres@127.0.0.1:5432/app"); 
    };

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    };

    close(): Promise<void> {
        return this.connection.$pool.end();        
    };
};


//ESTA CLASSE E UM ADAPTADOR PARA CONEXAO