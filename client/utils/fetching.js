export async function fetchingCategories() {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const categories = await response.json();
        return categories;
    } catch (error) {
        console.log("Error fetching all categories", error);
        throw new Error("Error fetching all categories");
    }
}

export async function fetchingByCategory(category) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching by category", error);
        throw new Error("Error fetching by category");
    }
}

export async function fetchingByCountry(country) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching by country", error);
        throw new Error("Error fetching by country");
    }
}

export async function fetchingRecipeDetails(id) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching recipe details", error);
        throw new Error("Error fetching recipe details");
    }
}
