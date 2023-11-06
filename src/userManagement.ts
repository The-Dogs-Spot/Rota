import { createHash } from "crypto";
import { userModel } from "./models/user";

export function validateUser(username: string, password: string): string {

    const user = userModel.findOne({ "username": username });

    if (!user) return null;

    const salt: string = user["salt"];
    const saltedPassword: string = password + salt;

    const passhash = createHash("sha512").update(saltedPassword).digest("base64");

    if (user["password"] !== passhash) return null;

    return user["token"]
}