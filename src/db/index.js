import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DBNAME}`
    );
    console.log("connected to mongodb");
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log("connection to mongodb failed");
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
