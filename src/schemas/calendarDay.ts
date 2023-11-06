import { Schema } from 'mongoose';
import { userDayInfoSchema } from './userDayInfo';

export const calendarDaySchema: Schema = new Schema({
    date: String,
    userInfos: [userDayInfoSchema]
});