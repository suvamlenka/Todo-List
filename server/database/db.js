import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

   // const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-hphkfqv-shard-00-00.bmuzxat.mongodb.net:27017,ac-hphkfqv-shard-00-01.bmuzxat.mongodb.net:27017,ac-hphkfqv-shard-00-02.bmuzxat.mongodb.net:27017/?ssl=true&replicaSet=atlas-ifygh4-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-ecgsjew-shard-00-00.1bgxxnw.mongodb.net:27017,ac-ecgsjew-shard-00-01.1bgxxnw.mongodb.net:27017,ac-ecgsjew-shard-00-02.1bgxxnw.mongodb.net:27017/?ssl=true&replicaSet=atlas-odfzti-shard-0&authSource=admin&retryWrites=true&w=majority&appName=mern-todo`;

   // mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
   mongoose.connect(MONGODB_URI)
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.log('Error while connecting with the database:', error.message));


   mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;











