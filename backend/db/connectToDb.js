import mongoose from "mongoose";

const connecToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error connecting to DB", error.message)
    }
}

export default connecToDB;