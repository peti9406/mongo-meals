import { useState } from "react";
import { useEffect } from "react";
import MyRecipe from "./MyRecipe.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import Loading from "./Loading.jsx";
import { handleRecipeDelete, getRecipes } from "../../utils/mealCRUDMethods.js";
import { useNavigate } from "react-router-dom";
import { deleteUserRecipe, getUser } from "../../utils/UserCRUDMethods.js";

export default function MyRecipes() {
    const navigate = useNavigate();

    const [myRecipes, setMyRecipes] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const token = localStorage.getItem("token") || null;

    useEffect(() => {
        async function getMyRecipes() {
            try {
                const userData = await getUser(token);
                const recipes = await getRecipes(userData._id);
                setUser(userData);
                setMyRecipes(recipes);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }
        getMyRecipes();
    }, [myRecipes, token]);

    async function handleDelete(recipe) {
        handleRecipeDelete(recipe);
        deleteUserRecipe(user._id, recipe._id);
    }

    if (!token) {
        return navigate("/login-redirect");
    }
    if (error) {
        return <ErrorComponent error={error} />;
    }
    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col flex-wrap items-center gap-10 py-20">
            <div className="flex flex-col w-2/5 p-5 bg-white border border-[#dfdfdf] rounded-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-[Pacifico] text-[#3a4e15]">My Recipes</h1>
                </div>
                {myRecipes.length > 0 ? (
                    <ul>
                        {myRecipes.map((recipe) => (
                            <MyRecipe
                                key={recipe._id}
                                recipe={recipe}
                                onDeleteClick={handleDelete}
                            />
                        ))}
                    </ul>
                ) : (
                    <h2 className="text-2xl text-center my-10">You have no recipes!</h2>
                )}
                <button
                    onClick={() => navigate("/")}
                    className="flex w-3/4 my-1.5 justify-center self-center rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}
