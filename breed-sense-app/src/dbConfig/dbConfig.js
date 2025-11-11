import mongoose from "mongoose";

const MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb+srv://rajritik4041_db_user:WNgjN1AoghOB31YV@cluster.wx55kht.mongodb.net/"; 

export async function connect() {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

