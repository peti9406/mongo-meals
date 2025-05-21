import { useState } from "react";
import { createUser } from "../../utils/UserCRUDMethods.js";
import ErrorComponent from "./ErrorComponent.jsx";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";

function RegistrationForm() {

    const navigate = useNavigate();
    const [confirmEmail, setConfirmEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [user, setUser] = useState({
        username: "",
        email: "",
        name: "",
        password: "",
    });
    
    function handleChange({ target: { name, value } }) {
        setUser(prev => ({ ...prev, [name]: value }));
        if (name === "email") {
            setEmailError(confirmEmail && value !== confirmEmail ? "Emails do not match!" : "");
        }
    }

    async function handleRegistrationSubmit(event){
        event.preventDefault();
        if (confirmEmail !== user.email){
            setEmailError("Emails do not match!");
            return;
        }
        try {
            console.log(user);
            await createUser(user);
            setSubmitted(true);
        } catch (error){
            console.log(error);
            setError(error);
        } 
    }

    return (
        <>
        {!submitted ? (
            <div className="flex min-h-full flex-col justify-center ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Create a new account
                </h2>
            </div>
            {error && <ErrorComponent error={error}/>}
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleRegistrationSubmit} className="space-y-6">

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input type="text"
                                name="username"
                                onChange={handleChange}
                                id="username"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-green-700"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input type="email" 
                                name="email"
                                onChange={handleChange}
                                id="email"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-green-700"
                            />
                        </div>
                    </div>

                    <div>
                        {emailError && <p className="text-red-600">{emailError}</p>}
                        <label htmlFor="confirm-email" 
                        className="block text-sm font-medium text-gray-900">
                                Confirm email address
                        </label>
                        <div className="mt-2">
                            <input type="email"
                                name="confirm-email"
                                onChange={(event) => {
                                    setConfirmEmail(event.target.value);
                                    setEmailError(event.target.value !== user.email ? "Emails do not match!" : "");
                                }}
                                id="confirm-email"
                                required
                                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base 
                                    ${emailError ? "border-red-500 text-red-600 focus:outline-red-500" : "border-gray-300 text-gray-900 focus:outline-green-700"} placeholder:text-gray-400 
                                    `}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input type="text" 
                                name="name" 
                                onChange={handleChange} 
                                id="name" 
                                required 
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-green-700"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input type="password" 
                                name="password" 
                                onChange={handleChange} 
                                id="password" 
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-green-700"
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" 
                            className="cursor-pointer flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-green-700">
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?
                    <a onClick={() => navigate("/login")}
                        className="font-semibold text-green-700 hover:text-green-600 cursor-pointer"> 
                        Sign in
                    </a>
                </p>
            </div>
        </div>
        ) : (
            <>
                <div className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-green-700 italic">Successful registration!</div>
                <LoginForm />
            </>
        )}
        </>
        
    );
}

export default RegistrationForm;