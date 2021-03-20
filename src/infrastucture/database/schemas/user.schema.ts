import mongoose, {Schema} from 'mongoose';
import {IUser} from '../../../core/interfaces/models/i.user';
import {MongoValidator} from '../../validators/mongo.validator';

const schema = new Schema({
    name: {
        type: String,
        minlength: 4
    },
    email: {
        type: String,
        unique: true,
        required: 'Email address is required',
        lowercase: true,
        trim: true,
        validate: {
            validator: MongoValidator.isEmail,
            message: 'Invalid email'
        }
    }
});

export const UserSchema = mongoose.model<IUser>('users', schema);

