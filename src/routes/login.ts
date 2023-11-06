import { Router, Request, Response } from "express";

export const loginRoute = Router();

loginRoute.get("/login", (req: Request, res: Response) => {
    res.render("login");
});

loginRoute.post("/login", (req: Request, res: Response) => {
    
})