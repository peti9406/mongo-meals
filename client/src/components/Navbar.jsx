import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (location.pathname !== "/search") {
            setSearch("");
        }
    }, [location]);

    async function handleSearch(e) {
        const searchText = e.target.value;
        setSearch(searchText);

        if (searchText !== "") {
            navigate("/search", {state: {searchTerm : searchText}});
        } else {
            navigate("/");
        }
    }

    return (
        <div className="flex items-center mx-auto grow bg-white sticky top-0 z-50 border-b border-[#dfdfdf]">
            <div className="flex gap-10 ml-20">
                <div className="flex items-center">
                    <img
                        src="./src/assets/MongoMealsLogo.png"
                        className="h-25 cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                </div>
                <div className="flex items-center overflow-hidden">
                    <a
                        className="m-4 cursor-pointer font-semibold text-[#3a4e15] hover:scale-102 hover:text-[#aaae8c] transition-transform duration-500 ease-in-out transform"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </a>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => navigate("/create")}
                        className="m-4 cursor-pointer font-semibold text-[#3a4e15] hover:scale-102 hover:text-[#aaae8c] transition-transform duration-500 ease-in-out transform"
                    >
                        Create Recipe
                    </button>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => navigate("/my-recipes")}
                        className="m-4 cursor-pointer font-semibold text-[#3a4e15] hover:scale-102 hover:text-[#aaae8c] transition-transform duration-500 ease-in-out transform"
                    >
                        My Recipes
                    </button>
                </div>
            </div>
            <div className="flex gap-50 mx-20 grow">
                <div className="flex flex-2/3 justify-center items-center">
                    <input value={search} onChange={(e) => handleSearch(e)} placeholder="Search a recipe..." className="placeholder-[#aaae8c] text-[#3a4e15] border border-[#aaae8c] rounded-full pl-2 w-full h-8"></input>
                </div>
                <div className="flex flex-1/3 justify-end">
                    <a onClick={() => navigate("/login")} className="m-4 cursor-pointer font-semibold text-[#3a4e15] hover:scale-102 hover:text-[#aaae8c] transition-transform duration-500 ease-in-out transform">
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
