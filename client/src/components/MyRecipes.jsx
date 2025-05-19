import { useState } from "react";
import { useEffect } from "react";
import MyRecipe from "./MyRecipe.jsx";
import MyRecipeEditor from "./MyRecipeEditor.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import Loading from "./Loading.jsx";
import { handleDelete, getRecipes } from "../../utils/mealCRUDMethods.js";
import { useNavigate } from "react-router-dom";

export default function MyRecipes({ onPage }) {

    const navigate = useNavigate();

    const [myRecipes, setMyRecipes] = useState([]);
    const [recipeToEdit, setRecipeToEdit] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getMyRecipes() {
            try {
                const recipes = await getRecipes();
                setMyRecipes(recipes);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }
        getMyRecipes();
    }, [myRecipes]);

    async function handleEdit(recipe) {
        setRecipeToEdit(recipe);
    }

    function handleCancel(setNull) {
        setRecipeToEdit(setNull);
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }
    if (loading) {
        return <Loading />;
    }

    return recipeToEdit ? (
        <MyRecipeEditor handleCancel={handleCancel} onPage={onPage} recipe={recipeToEdit} />
    ) : (
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
                                onEditClick={handleEdit}
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
