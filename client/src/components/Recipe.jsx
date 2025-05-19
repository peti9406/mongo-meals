import { useEffect, useState } from "react";
import { fetchingRecipeDetails } from "../../utils/fetching";
import Ingredients from "./Ingredients";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

function Recipe({ id, onBack, onPage }) {
    const [recipe, setRecipe] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getRecipeDetails() {
            try {
                const recipeDetails = await fetchingRecipeDetails(id);
                setRecipe(recipeDetails.meals[0]);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        }
        getRecipeDetails();
    }, [id]);

    function getYoutubeEmbedVideo(url) {
        if (!url) return null;

        const videoId = url.split("v=")[1];
        return `https://www.youtube.com/embed/${videoId}`;
    }

    const embedUrl = getYoutubeEmbedVideo(recipe.strYoutube);

    function handleBack() {
        onBack(null);
        onPage("categories");
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }
    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex gap-20 mx-20 my-10 p-10 bg-white border border-[#dfdfdf] rounded-xl">
            <div className="w-1/4 flex flex-col items-center">
                <div className="flex justify-center">
                    <img src={recipe.strMealThumb} className="w-fit rounded-md"></img>
                </div>
                <h1 className="text-4xl font-[Pacifico] font-bold text-center text-[#3a4e15] py-5">
                    {recipe.strMeal}
                </h1>
                <Ingredients recipe={recipe} />
            </div>
            <div className="w-3/4 flex flex-col gap-5">
                <div>
                    <h2 className="text-3xl font-[Pacifico] font-bold text-start text-[#3a4e15] pb-5">
                        Instruction
                    </h2>
                    <p className="text-justify">{recipe.strInstructions}</p>
                </div>
                {embedUrl && (
                    <div>
                        <h2 className="text-3xl font-[Pacifico] font-bold text-start pb-5 text-[#3a4e15]">
                            Check the video for more detailed instructions
                        </h2>
                        <iframe
                            width="560"
                            height="315"
                            src={embedUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
                <div className="flex flex-grow justify-end items-end">
                    <button
                        onClick={handleBack}
                        className="rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] cursor-pointer"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
