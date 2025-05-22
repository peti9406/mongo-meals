import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorComponent from "./ErrorComponent.jsx";
import { getUser } from "../../utils/UserCRUDMethods.js";

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.token) {
                localStorage.setItem("token", data.token);

                const user = await getUser(data.token);
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/");
            } else {
                throw new Error("Authorization failed!");
            }
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-40 w-auto"
                    src="./src/assets/MongoMealsLogo.png"
                    alt="Mongo Meals"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            {error && <ErrorComponent error={error} />}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                onChange={(event) => setEmail(event.target.value)}
                                name="email"
                                id="email"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                onChange={(event) => setPassword(event.target.value)}
                                name="password"
                                id="password"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={(event) => handleLogin(event)}
                            className="cursor-pointer flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?
                    <a
                        onClick={() => navigate("/registration")}
                        className="cursor-pointer font-semibold text-green-700 hover:text-green-600"
                    >
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;
