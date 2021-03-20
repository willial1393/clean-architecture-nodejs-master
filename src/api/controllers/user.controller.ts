import {NextFunction, Request, Response} from 'express';
import {UserRepository} from '../../infrastucture/repositories/user.repository';
import {UserSerializer} from '../../infrastucture/serializers/user.serializer';
import {User} from '../../core/models/user';

const userRepository = new UserRepository();
const userSerializer = new UserSerializer();

export class UserController {
    public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let user: User = userSerializer.serialize(req.body).all();
            user = await userRepository.create(user);
            res.send(userSerializer.deserialize(user).name());
        } catch (e) {
            next(e);
        }
    }
}
