import {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchedRecipes } from "../../utils/mealCRUDMethods";
import RecipeCard from "./RecipeCard";


function RecipeList() {

    const location = useLocation();
    const navigate = useNavigate();
    const searchTerm = location.state?.searchTerm || "";
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (!searchTerm) return;

        async function getRecipes(search) {
            try {
                const searchedRecipes = await getSearchedRecipes(search);
                setRecipes(searchedRecipes);
            } catch (error) {
                console.log(error);
            }
        }
        getRecipes(searchTerm);
    }, [searchTerm]);


    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap w-3/4 justify-center gap-5 py-10">
                {recipes.map((recipe) => {
                    return (
                        <RecipeCard
                            recipe={recipe}
                            key={recipe.idMeal}
                            onClick={() => navigate(`/categories/${recipe.strCategory}/${recipe._id}`)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default RecipeList;