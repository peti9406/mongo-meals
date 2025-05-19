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