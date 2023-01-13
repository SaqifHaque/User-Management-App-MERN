import express from "express";
import { addUser, getUsers, getUser, deleteUserById, editUser } from "../controller/userController.js";
const router = express.Router();


router.get('/users', getUsers);

router.get('/:userId', getUser)

router.post('/add', addUser);

router.put('/:userId', editUser);

router.delete('/:userId', deleteUserById);



export default router;