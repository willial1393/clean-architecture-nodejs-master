import {Server} from './api/server';
import {Mongo} from './infrastucture/database/mongo';

const server = new Server();

server.start();

const mongo = new Mongo();

mongo.connect();
