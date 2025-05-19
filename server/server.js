import express from "express";
import mongoose from "mongoose";
import mealRouter from "./routes/mealRoutes.js";
import userRouter from "./routes/userRoutes.js";

mongoose.connect("mongodb+srv://ptorok0694:mongomeals@freestyle.du5fd3t.mongodb.net/freestyle");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/meals", mealRouter);

app.listen(port, () => console.log(`The server is running on http://localhost:${port}`));
