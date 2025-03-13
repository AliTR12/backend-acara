import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "db-acara",
    });
    return Promise.resolve("Database connected successfully");
    // console.log("Database connected successfully");
    // return "Database connected";
  } catch (error) {
    return Promise.reject("Database connection error: " + error);
    // console.error("Database connection error:", error);
  }
};

export default connect;
