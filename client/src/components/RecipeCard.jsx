import { addFavorite, removeFavorite } from "../../utils/favoritesCRUDMethods.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

function RecipeCard({ favorites = [], onFavChange = null, recipe, onClick }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [token, setToken] = useState(false);

    useEffect(() => {
        function getToken() {
            const token = localStorage.getItem("token") || null;
            if (token) {
                setToken(true);
                favorites.forEach((favorite) => {
                    if (favorite._id === recipe._id || favorite.webID === Number(recipe.idMeal)) {
                        setIsFavorite(true);
                    }
                });
            }
        }

        getToken();
    }, [favorites, recipe]);

    async function handleFavoriteButton(button, recipeID = recipe.webID) {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            let updatedUser = null;
            if (button === "add") {
                updatedUser = await addFavorite(user._id, recipeID);
                setIsFavorite(true);
            } else if (button === "remove") {
                updatedUser = await removeFavorite(user._id, recipeID);
                setIsFavorite(false);
            }
            user.favorites = [...updatedUser.favorites];
            if (onFavChange) onFavChange(user.favorites);
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div
            className="group relative w-1/4 overflow-hidden rounded-md cursor-pointer"
            onClick={onClick}
        >
            <img
                src={recipe.strMealThumb}
                alt={`Image of ${recipe.strMeal}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {token ? (
                    <div className="flex justify-between items-center text-white gap-5">
                        <div>
                            <h1 className="text-lg font-semibold">{recipe.strMeal}</h1>
                        </div>
                        <div>
                            {isFavorite ? (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleFavoriteButton("remove", recipe.idMeal);
                                    }}
                                    className="text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl hover:scale-120 transition-transform duration-100 ease-in-out"
                                >
                                    <FontAwesomeIcon
                                        icon={faHeartSolid}
                                        className="text-red-300 w-10 h-10"
                                    />
                                </button>
                            ) : (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleFavoriteButton("add", recipe.idMeal);
                                    }}
                                    className="text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl hover:scale-120 transition-transform duration-100 ease-in-out"
                                >
                                    <FontAwesomeIcon
                                        icon={faHeartRegular}
                                        className="text-red-300 w-10 h-10"
                                    />
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center text-white">
                        <h1 className="text-lg font-semibold">{recipe.strMeal}</h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecipeCard;