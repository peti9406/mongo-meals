import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please fill a valid email address"],
    },
    fullName: String,
    password: String,
    myRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe", default: null }],
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meal",
        },
    ],
});

export default model("User", userSchema);
