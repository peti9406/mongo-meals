import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { getUser } from "../../utils/UserCRUDMethods";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

function FavoriteRecipes() {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token") || null;

    useEffect(() => {
        async function getFavorites(token) {
            try {
                const user = await getUser(token);
                setFavorites(user.favorites);
                setUser(user);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        }
        getFavorites(token);
    }, [token]);

    if (!token) {
        return navigate("/login-redirect");
    }
    if (error) {
        return <ErrorComponent error={error} />;
    }
    if (loading) {
        return <Loading />;
    }

    function handleEmptyFavorites(boolean) {
        if (boolean) setFavorites([]);
    }

    return (
        <div>
            {favorites.length > 0 ? (
                favorites.map((favorite) => (
                    <RecipeCard
                        key={favorite._id}
                        favorites={favorites}
                        recipe={favorite}
                        onEmpty={handleEmptyFavorites}
                        onClick={() =>
                            navigate(`/categories/${favorite.strCategory}/${favorite.webID}`)
                        }
                    />
                ))
            ) : (
                <div className="flex flex-col flex-wrap items-center gap-10 py-20">
                    <div className="flex flex-col w-2/5 p-5 bg-white border border-[#dfdfdf] rounded-xl">
                        <div className="text-center">
                            <h1 className="text-3xl font-[Pacifico] text-[#3a4e15]">Favorites</h1>
                            <h2 className="text-2xl text-center my-10">You have no favorites!</h2>
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
