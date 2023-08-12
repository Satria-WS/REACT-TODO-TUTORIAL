import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/ToDoRoute.js"
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });



app.listen(PORT, () => {
  console.log(`${PORT} was successful`);
});
