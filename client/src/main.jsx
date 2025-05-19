import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./components/Categories.jsx";
import FilteredCategory from "./components/FilteredCategory.jsx";
import Recipe from "./components/Recipe.jsx";
import RecipeForm from "./components/RecipeForm.jsx";
import MyRecipes from "./components/MyRecipes.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import MyRecipeEditor from "./components/MyRecipeEditor.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Categories />,
            },
            {
                path: "/categories/:category",
                element: <FilteredCategory />,
            },
            {
                path: "/categories/:category/:recipeId",
                element: <Recipe />,
            },
            {
                path: "/create",
                element: <RecipeForm />,
            },
            {
                path: "/my-recipes",
                element: <MyRecipes />,
            },
            { path: "/my-recipes/recipe/:id", element: <MyRecipeEditor /> },
            {
                path: "/login",
                element: <LoginForm />,
            },
            {
                path: "/registration",
                element: <RegistrationForm />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
