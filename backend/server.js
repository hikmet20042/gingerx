import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import connectDatabase from "./database/connectDatabase.js";
import { config } from "dotenv";
import { verifyToken } from "./middleware/auth.js";

config();

const app = express();

connectDatabase();

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(5000, () => {
  console.log("Server is listening on 5000 port");
});
