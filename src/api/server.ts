import express, {Express} from 'express';
import {Routes} from './routers';
import {Middlewares} from './middlewares';

export class Server {
    private readonly app: Express;

    constructor() {
        this.app = express();
        Middlewares.request(this.app);
        Routes(this.app);
        Middlewares.response(this.app);
    }

    public start(): void {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log(`Listen on http://localhost:${process.env.PORT || 3000}`);
        });
    }
}
