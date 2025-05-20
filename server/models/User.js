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
    favorites: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Meal",
    }]
});

export default model("User", userSchema);
