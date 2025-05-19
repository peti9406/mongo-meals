import express from "express";
import {
    getAllMeals,
    createMeal,
    getMyRecipes,
    deleteMyRecipe,
    updateMyRecipe,
    getMyRecipe,
} from "../controllers/mealControllers.js";

const mealRouter = express.Router();

mealRouter.get("/", getAllMeals);
mealRouter.post("/", createMeal);
mealRouter.get("/myrecipes", getMyRecipes);
mealRouter.get("/myrecipes/:id", getMyRecipe);
mealRouter.delete("/myrecipes/:id", deleteMyRecipe);
mealRouter.patch("/myrecipes/:id", updateMyRecipe);

export default mealRouter;
