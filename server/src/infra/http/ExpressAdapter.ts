import express, { Request, Response } from "express";
import HttpServer from "./HttpServer";
import cors from "cors";

export default class ExpressAdapter implements HttpServer {
    app: any;
    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors());
        
    }
     route(method: string, url: string, callbackFunction: Function): void{
        this.app[method](url, async function (request: Request, response: Response){
            const output = await callbackFunction(request.params, request.body);
            response.json(output);
        })

    };

    listen(port: number): void {
        this.app.listen(port);
    }
}
