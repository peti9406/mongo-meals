function Ingredients({ recipe }) {
    const ingredients = getIngredients(recipe);
    const measures = getMeasures(recipe);

    return (
        <div className="flex flex-col items-center border border-[#aaae8c] bg-[#aaae8c] rounded-md p-2 text-white">
            <table>
                <tbody>
                    {ingredients.map((ingredient, index) => (
                        <tr key={ingredient}>
                            <td className="px-2 text-right font-bold">
                                {measures[index]}
                            </td>
                            <td className="text-left">{ingredient}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Ingredients;

function getIngredients(recipe) {
    const ingredients = [];
    for (const [key, value] of Object.entries(recipe)) {
        if (key.includes("strIngredient") && value !== null && value !== "") {
            ingredients.push(value);
        }
    }
    return ingredients;
}

function getMeasures(recipe) {
    const measures = [];
    for (const [key, value] of Object.entries(recipe)) {
        if (key.includes("strMeasure") && value !== null && value !== "") {
            measures.push(value);
        }
    }
    return measures;
}
