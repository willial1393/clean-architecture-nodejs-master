import {IUserRepository} from '../../core/interfaces/repositories/i-user.repository';
import {User} from '../../core/models/user';
import {Mongo} from '../database/mongo';

export class UserRepository implements IUserRepository {
    public create(user: User): Promise<User> {
        return new Promise(async (resolve, reject) => {
            await new Mongo.users(user)
                .save((err, doc) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(doc);
                    }
                });
        });
    }
}
