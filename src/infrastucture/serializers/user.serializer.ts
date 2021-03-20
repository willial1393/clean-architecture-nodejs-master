import {User} from '../../core/models/user';
import {UserNameDto} from '../../core/DTOs/user-name.dto';

export class UserSerializer {
    public serialize(user: any): { all: () => User; name: () => UserNameDto } {
        const all = (): User => ({
            name: user.name,
            email: user.email
        });
        const name = (): UserNameDto => ({
            name: user.name
        });
        return {
            all,
            name
        };
    }

    public deserialize(user: User): { all: () => User; name: () => UserNameDto } {
        const all = (): User => ({
            ...user
        });
        const name = (): UserNameDto => ({
            name: user.name
        });
        return {all, name};
    }
}
