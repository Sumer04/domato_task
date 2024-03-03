import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {dbName: 'Task'})
    console.log('connected to DB');
}