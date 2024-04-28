import mongoose from "mongoose"



export const connectToDB = async () => {

try {
    const conn =  await mongoose.connect(process.env.MONGO_URL, {})

    console.log(`[=] SUCCESS : connected to database on ${conn.connection.host}`)
} catch (error) {
    console.error("[-] ERROR : unable tp connec tp Database", error);
    process.exit(1)

}
}

