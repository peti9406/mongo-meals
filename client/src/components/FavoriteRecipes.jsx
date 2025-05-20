import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function FavoriteRecipes() {

    const [favorities, setFavorites] = useState([]);

    useEffect(() => {
        async function getFavorites() {
            try {
                const favorites = await getUserFavorites();
                setFavorites(favorites);
            } catch (error) {
                console.log(error);
            }
        }
        getFavorites();
    }, []);

    return (
        <div>
            {favorities.map((favorite) => (
                <RecipeCard recipe={favorite}/>
            ))}
        </div>
    )
}

export default FavoriteRecipes;
