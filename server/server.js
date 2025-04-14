import express from "express";
import router from './routes/routes.js'; 
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express()

const PORT = process.env.PORT || 5000; 

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],        // Specify allowed methods
    credentials: true 
}));

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error)
});
// console.log(router)
app.use(express.json());
app.use('/', router);
app.use(express.static('public'));
