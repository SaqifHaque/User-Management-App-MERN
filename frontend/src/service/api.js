import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
       return await axios.post(`${URL}/add`, data)
    } catch(error) {
        console.log("Error while calling Api", error);
    }
}

export const getUsers = async () => {
    try {
        const response =  await axios.get(`${URL}/users`);
        return response.data;
    } catch (error) {
        console.log("Something went wrong", error );
    }
}

export const getUser = async (userId) => {
    try {
        const response =  await axios.get(`${URL}/${userId}`);
        console.log("success", response.data);
        return response.data;
    } catch (error) {
        console.log("Something went wrong", error );
    }
}

export const deleteUser = async(userId) => {
    try {
        return await axios.delete(`${URL}/${userId}`)
    } catch (error) {
        console.log("Something went wrong", error );
    }
}

export const editUser = async(user, userId) => {
    try {
        return await axios.put(`${URL}/${userId}`, user)
    } catch (error) {
        console.log("Something went wrong", error );
    }
}

