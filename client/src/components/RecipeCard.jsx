import {addFavorite} from "../../utils/favoritesCRUDMethods.js";
import { getUser } from "../../utils/UserCRUDMethods";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

function RecipeCard({ recipe, onClick }) {
    const token = localStorage.getItem("token") || null;

    async function handleAddFavorite(token, recipeID) {
        try {
            const user = await getUser(token);
            const favorite = await addFavorite(user._id, recipeID);
            return favorite;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="group relative w-1/4 overflow-hidden rounded-md cursor-pointer">
            <img
                src={recipe.strMealThumb}
                alt={`Image of ${recipe.strMeal}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {token ? (
                    <div className="flex justify-between items-center text-white gap-5">
                        <div>
                            <h1 className="text-lg font-semibold">
                                {recipe.strMeal}
                            </h1>
                        </div>
                        <div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddFavorite(token, recipe.idMeal);
                                }}
                                className="text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl hover:scale-120 transition-transform duration-100 ease-in-out"
                            >
                                <FontAwesomeIcon icon={faHeartRegular} className="text-red-300 w-10 h-10" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center text-white">
                        <h1 className="text-lg font-semibold">
                            {recipe.strMeal}
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecipeCard;
