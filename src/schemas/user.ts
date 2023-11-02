import { Schema } from "mongoose";

export const userSchema: Schema = new Schema({
    username: String,
    forename: String,
    surname: String,
    token: String, // with salt 
    salt: String
});