import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
    throw new Error("Missing JWT_SECRET in environment variables.");
}

export const createUser = async (req, res) => {
    try {
        const user = req.body;
        const createdUser = await User.create(user);
        return await res.json(createdUser);
    } catch (error) {
        console.log(error);
        res.status(400).send("Could not create user!");
    }
};

export const getUser = async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        const { id } = decoded;

        const user = await User.findById(id).populate("favorites");

        return res.json(user);
    } catch (error) {
        console.log(error);
        res.status(404).send("User not found!");
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findById(id);
        updatedUser.myRecipes = [...updatedUser.myRecipes, req.body.myRecipes];
        await updatedUser.save();
        return res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).status("Could not add recipe to user!");
    }
};

export const removeUserRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $pull: { myRecipes: req.body.recipeID } },
            { new: true }
        );
        console.log(updatedUser);
        return res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).send("Could not remove recipe!");
    }
};
