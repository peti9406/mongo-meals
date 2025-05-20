import LoginForm from "./LoginForm.jsx";

function LogoutMessage(){
    return (
        <div>
            <div className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-green-700 italic">You have successfully logged out</div>
            <LoginForm />
        </div>
    );
}

export default LogoutMessage;