import express from "express";
import dotenv  from 'dotenv'
import { errorMiddleware } from "./middleware/error.js";
import { connectDB } from "./config/connectdb.js";
dotenv.config({path:"./config/.env"})

const app = express();
connectDB() //db-connection
app.use(express.json());

//routes 
import user from './Routes/user.js'
app.use('/api/v1/user', user)

app.use(errorMiddleware);//error handling
//connection
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("listening on PORT", PORT));