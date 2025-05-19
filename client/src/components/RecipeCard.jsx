function RecipeCard({ recipe, onClick }) {
    return (
        <div
            className="group flex flex-col w-1/4 rounded-md"
            onClick={onClick}
        >
            <div className="flex overflow-hidden rounded-md cursor-pointer">
                <img
                    src={recipe.strMealThumb}
                    alt={`Image of ${recipe.strMeal}`}
                    className="w-full rounded-md transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                ></img>
            </div> 
            <div className="flex flex-grow items-center rounded-md justify-center bg-[#aaae8c] p-2 mt-4 cursor-pointer">
                <h1 className="text-center font-normal text-xl text-[rgba(247,246,241,255)] transition-transform duration-500 ease-in-out transform group-hover:scale-105 ">{recipe.strMeal}</h1>
            </div>
        </div>
    );
}

export default RecipeCard;
