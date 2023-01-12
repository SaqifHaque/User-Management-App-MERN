import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
       return await axios.post(`${URL}/add`, data)
    } catch(error) {
        console.log("Error while calling Api", error);
    }
}

export const getUser = async () => {
    try {
        const response =  await axios.get(`${URL}/users`);
        console.log("success", response.data);
        return response.data;
    } catch (error) {
        console.log("Something went wrong", error );
    }
}