import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const isAuthenticated = token && token.trim() !== "";

    function handleLogout(){
        localStorage.clear("token");
        navigate("/logout");
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
            <div className="flex items-center ml-auto mr-20">
                {isAuthenticated 
                ? 
                 (<a onClick={handleLogout} className="m-4 cursor-pointer font-semibold text-[#3a4e15] hover:scale-102 hover:text-[#aaae8c] transition-transform duration-500 ease-in-out transform">
                    Logout
                </a>)
                :
                 (<a onClick={() => navigate("/login")} className="m-4 cursor-pointer font-semibold text-[#3a4e15] hover:scale-102 hover:text-[#aaae8c] transition-transform duration-500 ease-in-out transform">
                    Login
                </a>)
                }
                
            </div>
        </div>
    );
}

export default Navbar;
