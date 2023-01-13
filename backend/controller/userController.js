import { response } from "express";
import User from "../schema/userSchema.js";

export const addUser = async (request, response) => {
    const user = request.body;

    const newUser = new User(user);

    try {
       await newUser.save();
       response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export const getUsers = async(request, response) => {
    try {
        const users = await User.find();
        response.json(users);
        response.status(200).json(users);
    } catch(error) {
        response.status(409).json({ messae: error.message });
    }
}

export const getUser = async(request, response) => {
    try {
        const user = await User.findById(request.params.userId);
        response.json(user);
        response.status(200).json(user);
    } catch(error) {
        response.status(409).json({ messae: error.message });
    }
}

export const editUser = async(request, response) => {
    let user = request.body;
    const editUser = new User(user);

    try {
        await User.updateOne({ _id: request.params.userId}, editUser);
        response.status(201).json(user);
    } catch(error){
        esponse.status(409).json({ messae: error.message });
    }
}

export const deleteUserById = async(request, response) => {
    try {
        console.log("delete server side",request.params.userId);
        await User.deleteOne({ _id: request.params.userId});
        response.status(200),json({message: "User deleted successfully"});
    } catch(error) {
        response.status(409).json({ messae: error.message });
    }
}