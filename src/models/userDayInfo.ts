import { model } from "mongoose";
import { userDayInfoSchema } from "../schemas/userDayInfo";

export const userDayInfoModel = model("UserDayInfo", userDayInfoSchema);