import InputField from "./InputField";
import { updateMeal } from "../../utils/mealCRUDMethods";
import { useEffect, useState } from "react";
import SelectDropDown from "./SelectDropDown";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipe } from "../../utils/mealCRUDMethods";
import ErrorComponent from "./ErrorComponent";
import Loading from "./Loading";

function getIngredientInputs(meal) {
    return Object.keys(meal).filter(
        (key) => key.includes("strIngredient") || key.includes("strMeasure")
    );
}

export default function MyRecipeEditor() {
    const [meal, setMeal] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [ingredientInputs, setIngredientInputs] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getRecipeData() {
            try {
                const data = await getRecipe(id);
                setMeal(data);
                const ingInputs = getIngredientInputs(data);
                setIngredientInputs(ingInputs);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        }
        getRecipeData();
    }, [id]);

    const inputs = [
        "strMeal",
        "strCategory",
        "strArea",
        "strInstructions",
        "strMealThumb",
        "strTags",
        "strYoutube",
        "strSource",
        "strImageSource",
    ];

    function handleChange(event) {
        const { name, value } = event.target;
        setMeal((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        updateMeal(meal);
    }

    function handleAddIngredient() {
        const index = ingredientInputs.length / 2 + 1;
        setIngredientInputs((prev) => [...prev, `strIngredient${index}`, `strMeasure${index}`]);
    }

    if (error) return <ErrorComponent error={error} />;
    if (loading) return <Loading />;

    return (
        <>
            {submitted ? (
                <div className="flex flex-col flex-wrap items-center gap-10 py-20">
                    <div className="flex flex-col w-2/5 p-5 bg-white border border-[#dfdfdf] rounded-xl">
                        <div className="text-center">
                            <h1 className="text-3xl font-[Pacifico] text-[#3a4e15] pb-6">
                                Recipe updated!
                            </h1>
                        </div>
                        <button
                            onClick={() => navigate("/create")}
                            className="flex w-3/4 my-1.5 justify-center self-center rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                        >
                            Create new Recipe
                        </button>
                        <button
                            onClick={() => navigate("/my-recipes")}
                            className="flex w-3/4 my-1.5 justify-center self-center rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                        >
                            My Recipes
                        </button>
                        <button
                            onClick={() => navigate("/")}
                            className="flex w-3/4 my-1.5 justify-center self-center rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-wrap justify-center gap-10 py-20">
                    <form
                        className="flex flex-col p-5 bg-white border border-[#dfdfdf] rounded-xl"
                        onSubmit={handleSubmit}
                    >
                        <div className="text-center pb-4">
                            <h1 className="text-3xl font-[Pacifico] text-[#3a4e15]">
                                Update a Recipe
                            </h1>
                        </div>
                        <div className="flex flex-row items-start gap-4 pb-4">
                            <div>
                                {inputs.map((field) =>
                                    field === "strCategory" ? (
                                        <SelectDropDown
                                            key={field}
                                            name={field}
                                            onChange={handleChange}
                                            value={meal[field] || ""}
                                            defaultValue={meal[field]}
                                        />
                                    ) : (
                                        <InputField
                                            key={field}
                                            onChange={handleChange}
                                            name={field}
                                            value={meal[field] || ""}
                                        />
                                    )
                                )}
                            </div>
                            <div>
                                {ingredientInputs.map((field) => (
                                    <InputField
                                        key={field}
                                        onChange={handleChange}
                                        value={meal[field] || ""}
                                        name={field}
                                    />
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddIngredient}
                                    className="flex justify-center items-center mt-4 rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                                >
                                    Add Ingredient
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="flex w-3/4 my-1.5 justify-center self-center rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => navigate("/my-recipes")}
                            type="button"
                            className="flex w-3/4 justify-center self-center rounded-md bg-[#a03131] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#c36161] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
