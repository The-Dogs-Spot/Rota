import { Schema } from "mongoose";
import { UserDayInfoStatus } from "./enum/userDayInfoStatus";

export const userDayInfoSchema: Schema = new Schema({
    user: Number,
    status: UserDayInfoStatus
})