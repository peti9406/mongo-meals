import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getSearchedRecipes } from "../../utils/mealCRUDMethods";
import RecipeCard from "./RecipeCard";
import { getUser } from "../../utils/UserCRUDMethods";

function RecipeList() {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("searchText") || "";
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!searchTerm) return;

        async function fetchData() {
            try {
                const searchedRecipes = await getSearchedRecipes(searchTerm);
                setRecipes(searchedRecipes);

            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, [searchTerm]);

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap w-3/4 justify-center gap-5 py-10">
                {recipes.map((recipe) => (
                    <RecipeCard
                        recipe={recipe}
                        key={recipe.idMeal}
                        onClick={() =>
                            navigate(`/categories/${recipe.strCategory}/${recipe._id}`)
                        }
                        user={user}
                        favorites={user?.favorites || []}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecipeList;
