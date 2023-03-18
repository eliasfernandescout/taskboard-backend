export default interface HttpServer {
    route(method: string, url: string, callbackFunction: Function): void;
    listen(port: number): void;
}