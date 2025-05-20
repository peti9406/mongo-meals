import express from "express";
import {
    getAllMeals,
    createMeal,
    getMyRecipes,
    deleteMyRecipe,
    updateMyRecipe,
    getMyRecipe,
} from "../controllers/mealControllers.js";
import { authenticateToken } from "../controllers/authenticate.js";

const mealRouter = express.Router();

mealRouter.get("/", getAllMeals);
mealRouter.post("/", createMeal);

mealRouter.get("/myrecipes", authenticateToken, getMyRecipes);
mealRouter.get("/myrecipes/:id", getMyRecipe);
mealRouter.delete("/myrecipes/:id", deleteMyRecipe);
mealRouter.patch("/myrecipes/:id", updateMyRecipe);

export default mealRouter;
