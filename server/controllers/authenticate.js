import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
    throw new Error("Missing JWT_SECRET in environment variables.");
}

export const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Needs token" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        console.error("JWT Verification Error:", err.message);
        return res.status(403).json({ message: "Invalid token" });
    }
};