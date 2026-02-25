import { useState } from "react";
import InputField from "./InputField.jsx";
import { createMeal } from "../../utils/mealCRUDMethods.js";
import ErrorComponent from "./ErrorComponent.jsx";
import SelectDropDown from "./SelectDropDown.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { updateUser } from "../../utils/UserCRUDMethods.js";

export default function RecipeForm() {
    const navigate = useNavigate();

    const [meal, setMeal] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [ingredientInputs, setIngredientInputs] = useState(["strIngredient1", "strMeasure1"]);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});

    const token = localStorage.getItem("token") || null;

    useEffect(() => {
        function getUser() {
            if (token) {
                const user = JSON.parse(localStorage.getItem("user")) || null;
                setUser(user);
            } else {
                navigate("/login-redirect");
            }
        }
        getUser();
    }, [token, navigate]);

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

    async function handleSubmit(event) {
        event.preventDefault();
        meal.madeBy = user._id;
        try {
            const createdMeal = await createMeal(meal);
            await updateUser(user._id, createdMeal._id);
            setSubmitted(true);
        } catch (error) {
            setError(error);
        }
    }

    function handleAddIngredient() {
        const index = ingredientInputs.length / 2 + 1;
        setIngredientInputs((prev) => [...prev, `strIngredient${index}`, `strMeasure${index}`]);
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    return (
        <>
            {submitted ? (
                <div className="flex flex-wrap justify-center gap-10 py-20 bg-[rgba(247,246,241,255)]">
                    <div className="flex flex-col w-1/4 p-5 bg-white border border-[#dfdfdf] rounded-xl">
                        <h1 className="text-center font-[Pacifico] text-3xl text-[#3a4e15] my-5">
                            Recipe submitted!
                        </h1>
                        <button
                            className="flex w-3/4 my-2 justify-center self-center rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                            type="button"
                            onClick={() => setSubmitted(false)}
                        >
                            Create new Recipe
                        </button>
                        <button
                            className="flex w-3/4 my-2 justify-center self-center rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                            type="button"
                            onClick={() => navigate("/my-recipes")}
                        >
                            My Recipes
                        </button>
                        <button
                            className="flex w-3/4 my-2 justify-center self-center rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                            type="button"
                            onClick={() => navigate("/")}
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
                        <h1 className="text-center pb-4 text-3xl font-[Pacifico] text-[#3a4e15]">
                            Create a Recipe
                        </h1>
                        <div className="flex flex-row items-start gap-4">
                            <div>
                                {inputs.map((field) =>
                                    field === "strCategory" ? (
                                        <SelectDropDown
                                            key={field}
                                            name={field}
                                            onChange={handleChange}
                                            value={meal[field] ?? ""}
                                        />
                                    ) : (
                                        <InputField
                                            key={field}
                                            onChange={handleChange}
                                            name={field}
                                            value={meal[field] ?? ""}
                                        />
                                    ),
                                )}
                            </div>
                            <div className="max-h-[30vh] overflow-y-auto">
                                {ingredientInputs.map((field) => (
                                    <InputField
                                        key={field}
                                        onChange={handleChange}
                                        name={field}
                                        value={meal[field] ?? ""}
                                    />
                                ))}
                                <button
                                    className="flex w-20 h-8 justify-center items-center mx-auto mt-4 rounded-full bg-[#aaae8c] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-white hover:border hover:border-[#aaae8c] hover:text-[#aaae8c]"
                                    type="button"
                                    onClick={handleAddIngredient}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button
                            className="flex w-3/4 my-5 justify-center self-center rounded-md bg-[#3a4e15] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#aaae8c] focus-visible:outline-2"
                            type="submit"
                        >
                            Submit
                        </button>
                        <button
                            onClick={() => navigate("/")}
                            type="button"
                            className="flex w-3/4 justify-center self-center rounded-md bg-[#a03131] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#c36161] focus-visible:outline-2"
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
