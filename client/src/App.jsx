import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import MyRecipes from "./components/MyRecipes";
import Categories from "./components/Categories";
import RecipeForm from "./components/RecipeForm";
import FilteredCategory from "./components/FilteredCategory";
import Recipe from "./components/Recipe";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const [page, setPage] = useState("home");

    function handleCategorySelection(category) {
        setSelectedCategory(category);
        setPage("categories");
    }

    function handleRecipeSelection(recipeId) {
        setSelectedRecipeId(recipeId);
        setPage("recipe");
    }

    function handlePage(page) {
        setPage(page);
    }

    if (page === "categories") {
        return (
            <>
                <Navbar onPage={handlePage} />
                <FilteredCategory category={selectedCategory} onRecipe={handleRecipeSelection} />
            </>
        );
    } else if (page === "recipe" && selectedRecipeId) {
        return (
            <>
                <Navbar onPage={handlePage} />
                <Recipe id={selectedRecipeId} onBack={handleRecipeSelection} onPage={handlePage} />;
            </>
        );
    } else if (page === "createRecipe") {
        return (
            <>
                <Navbar onPage={handlePage} />
                <RecipeForm onPage={handlePage} />;
            </>
        );
    } else if (page === "myRecipes") {
        return (
            <>
                <Navbar onPage={handlePage} />
                <MyRecipes onPage={handlePage} />;
            </>
        );
    } else if (page === "home") {
        return (
            <>
                <Navbar onPage={handlePage} />
                <Categories onCategory={handleCategorySelection} />
            </>
        );
    } else if (page === "login") {
      return (
          <>
              <Navbar onPage={handlePage} />
              <LoginForm onPage={handlePage}/>
          </>
      );
  } else if (page === "registration") {
    return (
        <>
            <Navbar onPage={handlePage} />
            <RegistrationForm onPage={handlePage}/>
        </>
    );
}
}

export default App;
