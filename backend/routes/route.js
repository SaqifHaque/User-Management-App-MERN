import express from "express";
import { addUser, getUser } from "../controller/userController.js";
const router = express.Router();

router.post('/add', addUser);

router.get('/users', getUser);

export default router;