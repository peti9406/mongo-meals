import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { getUser } from "../../utils/UserCRUDMethods";
import { useNavigate } from "react-router-dom";

function FavoriteRecipes() {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);
    const token = localStorage.getItem("token") || null;

    useEffect(() => {
        async function getFavorites(token) {
            try {
                const user = await getUser(token);
                setFavorites(user.favorites);
            } catch (error) {
                console.log(error);
            }
        }
        getFavorites(token);
    }, [token]);

    if (!token) {
        return navigate("/login-redirect");
    }

    return (
        <div>
            {favorites.length > 0 ? (
                favorites.map((favorite) => <RecipeCard recipe={favorite} />)
            ) : (
                <div className="flex flex-col flex-wrap items-center gap-10 py-20">
                    <div className="flex flex-col w-2/5 p-5 bg-white border border-[#dfdfdf] rounded-xl">
                        <div className="text-center">
                            <h1 className="text-3xl font-[Pacifico] text-[#3a4e15]">
                                Favorites
                            </h1>
                            <h2 className="text-2xl text-center my-10">
                                You have no favorites!
                            </h2>
                        </div>
                        <button
                            onClick={() => navigate("/")}
                            className="flex w-3/4 my-1.5 justify-center self-center rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            )}
            ;
        </div>
    );
}

export default FavoriteRecipes;
