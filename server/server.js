import express from "express";
import mongoose from "mongoose";
import mealRouter from "./routes/mealRoutes.js";
import userRouter from "./routes/userRoutes.js";
import favoritesRouter from "./routes/favoritesRoutes.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "./models/User.js";

mongoose.connect("mongodb+srv://ptorok0694:mongomeals@freestyle.du5fd3t.mongodb.net/freestyle");

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/meals", mealRouter);
app.use("/api/favorites", favoritesRouter);

const SECRET_KEY = process.env.JWT_SECRET;

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || password !== user.password) {
        return res.status(401).json({ message: 'Email or password is not correct' });
    }
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

app.listen(port, () => console.log(`The server is running on http://localhost:${port}`));
