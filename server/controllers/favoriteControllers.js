import dotenv from "dotenv";
import Meal from "../models/Meal.js";
import User from "../models/User.js";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
    throw new Error("Missing JWT_SECRET in environment variables.");
}

export const postFavorite = async (req, res) => {
    try {
        const webID = req.body.recipeID;
        const [favorite] = await Meal.find({ webID: webID });
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { favorites: favorite._id } },
            { new: true }
        ).populate("favorites");
        return await res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).send("Could not add favorite to user!");
    }
};

export const deleteFavorite = async (req, res) => {
    try {
        const webID = req.body.recipeID;
        const favorite = await Meal.findOne({ webID: webID });
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $pull: { favorites: favorite._id } },
            { new: true }
        ).populate("favorites");
        return await res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).send("Could not remove favorite from user!");
    }
};
