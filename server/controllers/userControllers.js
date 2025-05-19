import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const user = req.body;
        const createdUser = await User.create(user);
        return await res.json(createdUser);
    } catch (error) {
        console.log(error);
        res.status(400).send("Could not create user!");
    }
};