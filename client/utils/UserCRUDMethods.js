export async function createUser(user) {
    try {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (response.status === 500) {
            throw new Error(`Could not reach server! ${response.status}`);
        }
        if (!response.ok) throw new Error(`Could not create new user! ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getUser(token) {
    try {
        const response = await fetch(`/api/users/${token}`);

        if (response.status === 500) {
            throw new Error(`Could not reach server! ${response.status}`);
        }
        if (!response.ok) throw new Error(`Could not find user! ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function updateUser(id, recipeID) {
    try {
        const response = await fetch(`/api/users/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ myRecipes: recipeID }),
        });
        if (response.status === 500) {
            throw new Error(`Could not reach server! ${response.status}`);
        }
        if (!response.ok) throw new Error(`Could not find user! ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function deleteUserRecipe(id, recipeID) {
    try {
        const response = await fetch(`/api/users/${id}/my-recipes`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ recipeID: recipeID }),
        });
        if (response.status === 500) {
            throw new Error(`Could not reach server! ${response.status}`);
        }
        if (!response.ok) throw new Error(`Could not delete recipe! ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}
