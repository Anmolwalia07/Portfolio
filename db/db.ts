import mongoose from "mongoose"
import dot from "dotenv"
dot.config()

const url=process.env.DATABASE_URL||" "
const db=async()=> {
    try{
    const connected= await mongoose.connect(url)
    console.log("Connected")
    }catch(err){
        console.log(err)
    }
}

export {db}

