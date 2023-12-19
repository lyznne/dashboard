import mongoose from "mongoose"


export const connectToDB = async () => {

    const connection = {}
    const dbUrl = process.env.MONGO;

    try {
        if (connection.isConnected) return;

        const db = await mongoose.connect(dbUrl);
        connection.isConnected = db.connections[0].readyState;
        console.log("db ==>", db)

    } catch (error) {
        console.log("error ==>", error);
        throw new Error(error);
    }
}