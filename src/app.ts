import express, { Express } from 'express';
import path from 'path';
import { routes } from './routes'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

<void><unknown>dotenv.config();

let app: Express = express();
const port = 3000;

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use("/", routes)

app.listen(port, () => {
    console.info(`Listening on port ${port}`);
    mongoose.connect(process.env.DB_LOGIN);
    console.info("Connected to database successfully!");
});