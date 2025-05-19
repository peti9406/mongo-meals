export default function MyRecipe({ recipe, onDeleteClick, onEditClick }) {
    function handleDelete() {
        onDeleteClick(recipe);
    }

    function handleEdit() {
        onEditClick(recipe);
    }

    return (
        <li>
            <div className="flex flex-row my-5 justify-between">
                <div>
                    <p>{`Meal: ${recipe.strMeal}`}</p>
                    <p>{`Category: ${recipe.strCategory}`}</p>
                </div>
                <div className="flex items-center gap-2 w-1/3">
                    <button
                        onClick={handleEdit}
                        className="flex h-2/3 w-full justify-center items-center mx-auto rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="flex h-2/3 w-full justify-center items-center mx-auto rounded-md bg-[#a03131] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#c36161] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </li>
    );
}
