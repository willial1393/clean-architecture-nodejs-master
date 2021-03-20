import mongoose from 'mongoose';
import {environment} from '../../environment';
import {UserSchema} from './schemas/user.schema';

export class Mongo {

    static users = UserSchema;

    connect(): void {
        mongoose.connect(environment.mongo_uri || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
            .then(() => console.log('Connected to mongo'))
            .catch(reason => console.error(reason));
    }
}
