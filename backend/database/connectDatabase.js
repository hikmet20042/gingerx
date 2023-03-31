import mongoose from "mongoose";

export default async function connectDatabase() {
  const { MONGO_URI } = process.env;
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Database Connection Success!");
    })
    .catch((err) => {
      throw err;
    });
}
