import mongoose from 'mongoose';

const connection = async (user, pass) => {
    const url= `mongodb+srv://${user}:${pass}@mern-crud-app.2mxk5re.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("MongoDB connected successfully");
    } catch(error) {
        console.log('Error while connecting with database', error);
    }
}

export default connection; 