import { useNavigate } from "react-router-dom";

export default function LoginRedirect() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-full flex-col justify-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-40 w-auto"
                    src="./src/assets/MongoMealsLogo.png"
                    alt="Mongo Meals"
                />
            </div>
            <h2 className="mt-10 mb-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                To use this feature you need to be logged in!
            </h2>
            <button type="button" onClick={() => navigate("/login")}>
                Click here to log in
            </button>
        </div>
    );
}
