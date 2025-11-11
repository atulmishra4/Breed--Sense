import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ||
        "mongodb+srv://rajritik4041:X2T8QQmBNiKewH3e@cluster.iflbmhz.mongodb.net/"
    );

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log(" MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.error(" MongoDB connection error: " + err);
      process.exit(1);
    });
  } catch (error) {
    console.error(" Something went wrong while connecting MongoDB: ", error);
  }
}
