import express from "express";
import { postFavorite, deleteFavorite } from "../controllers/favoriteControllers.js";


const favoritesRouter = express.Router();

favoritesRouter.post("/:id", postFavorite);
favoritesRouter.delete("/:id", deleteFavorite);


export default favoritesRouter;