import { StrictMode } from "react";
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
import LogoutMessage from "./components/LogoutMessage.jsx";
import RecipeList from "./components/RecipeList.jsx";
import LoginRedirect from "./components/LoginRedirect.jsx";
import FavoriteRecipes from "./components/FavoriteRecipes.jsx";

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
            {
                path: "/my-recipes/recipe/:id",
                element: <MyRecipeEditor />,
            },
            {
                path: "/login",
                element: <LoginForm />,
            },
            {
                path: "/registration",
                element: <RegistrationForm />,
            },
            {
                path: "/logout",
                element: <LogoutMessage />,
            },
            {
                path: "/login-redirect", 
                element: <LoginRedirect /> 
            },
            {
                path: "/search",
                element: <RecipeList />
            },
            {
                path: "/favorites",
                element: <FavoriteRecipes />
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
