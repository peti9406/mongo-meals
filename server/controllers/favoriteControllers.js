import User from "../models/User.js";
import Meal from "../models/Meal.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
    throw new Error("Missing JWT_SECRET in environment variables.");
}

export const postFavorite = async (req, res) => {
    try {
        const favorite = req.body.recipeID;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$addToSet: {favorites: favorite}},
            {new: true}
        );
        return await res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).send("Could not add favorite to user!");
    }
};

export const deleteFavorite = async (req, res) => {
    try {
        const favorite = req.body.recipeID;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$pull: {favorites: favorite}},
            {new: true}
        );
        return await res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).send("Could not remove favorite from user!");
    }
}