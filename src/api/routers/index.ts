import {Express} from 'express';
import UserRouter from './user.router';

export const Routes = (app: Express) => {
    app.use('/user', UserRouter);
};

