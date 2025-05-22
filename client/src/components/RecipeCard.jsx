import { addFavorite, removeFavorite } from "../../utils/favoritesCRUDMethods.js";
import { getUser } from "../../utils/UserCRUDMethods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import ErrorComponent from "./ErrorComponent.jsx";
import Loading from "./Loading.jsx";

function RecipeCard({ recipe, onClick, favorites, onEmpty }) {
    const [user, setUser] = useState({});
    const [userFavorites, setUserFavorites] = useState(favorites || []);
    const [isFavorite, setIsFavorite] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("token") || null;

    useEffect(() => {
        async function getDatas() {
            if (token) {
                try {
                    setLoading(true);
                    const user = await getUser(token);
                    setUser(user);
                    setUserFavorites(user.favorites);
                    user.favorites.forEach((favorite) => {
                        if (
                            favorite.webID === Number(recipe.idMeal) ||
                            favorite.webID === Number(recipe.webID)
                        ) {
                            setIsFavorite(true);
                        }
                    });
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setError(error);
                }
            }
        }
        getDatas();
    }, [token, recipe]);

    async function handleAddFavorite(user, recipeID = recipe.webID) {
        try {
            const favorite = await addFavorite(user._id, recipeID);
            setIsFavorite(true);
            setUserFavorites((prev) => [...prev, favorite]);
            return favorite;
        } catch (error) {
            console.log(error);
        }
    }

    async function handleRemoveFavorite(user, recipeID = recipe.webID) {
        try {
            await removeFavorite(user._id, recipeID);
            setIsFavorite(false);
            const newFavorites = userFavorites.filter((userFav) => userFav.webID !== recipeID);
            if (newFavorites.length === 0) return onEmpty(true);
            setUserFavorites(newFavorites);
        } catch (error) {
            console.log(error);
        }
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }
    if (loading) {
        return <Loading />;
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
                                        handleRemoveFavorite(user, recipe.idMeal);
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
                                        handleAddFavorite(user, recipe.idMeal);
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