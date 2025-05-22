export async function addFavorite(userID, recipeID) {
    try {
        const response = await fetch(`/api/favorites/${userID}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ recipeID }),
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

export async function removeFavorite(userID, recipeID) {
    try {
        const response = await fetch(`/api/favorites/${userID}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ recipeID }),
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
