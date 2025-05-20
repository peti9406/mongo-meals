function throwError(response, text) {
    if (response.status === 500) {
        throw new Error(`Could not reach server! Response Status: ${response.status}`);
    }
    if (!response.ok)
        throw new Error(`Could not ${text} recipe! Response Status: ${response.status}`);
}

export async function createMeal(meal) {
    try {
        const response = await fetch("/api/meals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meal),
        });

        throwError(response, "create new");

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateMeal(meal) {
    const { _id } = meal;
    try {
        const response = await fetch(`/api/meals/myrecipes/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meal),
        });

        throwError(response, "update");

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function handleDelete(recipe) {
    const { _id } = recipe;
    try {
        const response = await fetch(`/api/meals/myrecipes/${_id}`, {
            method: "DELETE",
        });

        throwError(response, "delete");

        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getRecipes() {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch("/api/meals/myrecipes", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        throwError(response, "get ");

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
