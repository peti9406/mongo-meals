import Meal from "../models/Meal.js";
import MyRecipe from "../models/MyRecipe.js";

export const getAllMeals = async (req, res) => {
    try {
        const meals = await Meal.find({});
        return res.json(meals);
    } catch (error) {
        console.log(error);
        res.status(404).send("Could not get meals!");
    }
};

export const createMeal = async (req, res) => {
    try {
        const meal = req.body;
        const createdMeal = await MyRecipe.create(meal);
        return res.json(createdMeal);
    } catch (error) {
        console.log(error);
        res.status(400).send("Could not create meal!");
    }
};

export const getMyRecipes = async (req, res) => {
    try {
        const { id } = req.params;
        const myrecipes = await MyRecipe.find({ madeBy: id });
        return res.json(myrecipes);
    } catch (error) {
        console.log(error);
        res.status(404).send("No recipes found!");
    }
};

export const getMyRecipe = async (req, res) => {
    try {
        const myRecipe = await MyRecipe.findById(req.params.id);
        return res.json(myRecipe);
    } catch (error) {
        console.log(error);
        res.status(404).send("No recipes found!");
    }
};

export const deleteMyRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        await MyRecipe.deleteOne({ _id: id });
        res.status(204);
    } catch (error) {
        console.log(error);
        res.status(400).send("Could not delete recipe!");
    }
};

export const updateMyRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;
        const updatedRecipe = await MyRecipe.findOneAndUpdate({ _id: id }, update);
        res.status(200).json(updatedRecipe);
    } catch (error) {
        console.log(error);
        res.status(400).send("Could not update recipe!");
    }
};
