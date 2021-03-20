import {Document} from 'mongoose';
import {User} from '../../models/user';

export interface IUser extends User, Document {
}
