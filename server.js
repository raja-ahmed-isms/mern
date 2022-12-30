import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import blogRouter from "./routes/blogs-routes.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://ahmed:12A4644@cluster0.wzkrkia.mongodb.net/crud?retryWrites=true&w=majority"
  )
  .then(app.listen(5000, () => console.log("App is running on port 5000")))
  .then(() => console.log("Connected to database"));

app.use("/api", blogRouter);

//12A4644
