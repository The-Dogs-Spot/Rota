import express, { Express, Response } from 'express';
import path, { join } from 'path';

function setup(app: Express): Express {
    app.use(express.json())
    app.use(express.static("public"));
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"))

    return app;
}

function addEndpoints(app: Express): Express {
    app.get("/", (_, res: Response) => {
        res.render("index");
    })

    return app;
}

function beginListen(app: Express, port: Number, callback: () => void): Express {
    app.listen(port, callback);
    return app;
}

function appMain(): void {
    let app: Express = express();
    const port = 3000;

    app = setup(app);
    app = addEndpoints(app);
    <void><unknown>beginListen(app, port, () => {
        console.info(`Listening on port ${port}`);
    });
}

appMain();