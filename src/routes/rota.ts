import { Router, Request, Response } from "express";

export const rotaRoute = Router();

rotaRoute.get("/rota", (req: Request, res: Response) => {
    res.render("index");
});