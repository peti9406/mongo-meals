import express from "express";
import {
    createUser,
    getUser,
    removeUserRecipe,
    updateUser,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/:token", getUser);
userRouter.patch("/:id", updateUser);
userRouter.patch("/:id/my-recipes", removeUserRecipe);

export default userRouter;
