const mealURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=";

async function getMealsByLetter(URL, letter) {
    try {
        const response = await fetch(URL + letter);
        if (!response.ok) throw new Error(`Could not fetch food with letter ${letter}`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getAllMeals() {
    const abc = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    const mealDatas = [];

    for (const letter of abc) {
        const { meals } = await getMealsByLetter(mealURL, letter);
        if (meals) {
            meals.forEach((meal) => {
                if (meal) {
                    mealDatas.push(meal);
                }
            });
        }
    }

    return mealDatas;
}

const meals = await getAllMeals();
export default meals;
