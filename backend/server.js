import express from 'express';
import dotenv from 'dotenv';

import Connection from './database/db.js';

const app = express();

dotenv.config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const port = process.env.PORT;

Connection(dbUser, dbPass);

app.listen(port, () => console.log(`Server is running on port ${port}`));