import { fetchingByCategory } from "../../utils/fetching";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

function FilteredCategory() {

    const { category } = useParams();
    const navigate = useNavigate();

    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRecipesByCategory = async () => {
            try {
                const recipesByCategory = await fetchingByCategory(category);
                if (recipesByCategory.meals === null) {
                    throw new Error("Could net get recipes by this category!");
                }
                setRecipes(recipesByCategory.meals);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };

        getRecipesByCategory();
    }, [category]);

    if (error) {
        return <ErrorComponent error={error} />;
    }
    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col items-center">
            <div>
                <h1 className="text-6xl font-[Pacifico] text-[#3a4e15] py-10">{category}</h1>
            </div>
            <div className="flex flex-wrap w-3/4 justify-center gap-15 pb-10">
                {recipes.map((recipe) => {
                    return (
                        <RecipeCard
                            recipe={recipe}
                            key={recipe.idMeal}
                            onClick={() => navigate(`/categories/${category}/${recipe.idMeal}`)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default FilteredCategory;
