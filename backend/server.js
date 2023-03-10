import express from 'express';
import dotenv from 'dotenv';

import Connection from './database/db.js';

import Routes from './routes/route.js';

import Cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();
app.use(Cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', Routes);

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const port = process.env.PORT;

Connection(dbUser, dbPass);

app.listen(port, () => console.log(`Server is running on port ${port}`));