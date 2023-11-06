import { Schema } from "mongoose";

export const userSchema: Schema = new Schema({
    id: Number,
    username: String,
    forename: String,
    surname: String,
    password: String, // with salt 
    salt: String,
    isAdmin: Boolean,
    resetImmediate: Boolean
});