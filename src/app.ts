import express, { Express } from 'express';
import path from 'path';
import { routes } from './routes'
import dotenv from 'dotenv';

<void><unknown>dotenv.config();

let app: Express = express();
const port = 3000;

app.use(express.json())
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use("/", routes)

app.listen(port, () => {
    console.info(`Listening on port ${port}`);
});