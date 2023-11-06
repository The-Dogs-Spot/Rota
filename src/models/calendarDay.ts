import { model } from "mongoose";
import { calendarDaySchema } from "../schemas/calendarDay";

export const calendarDayModel = model("CalendarDay", calendarDaySchema);