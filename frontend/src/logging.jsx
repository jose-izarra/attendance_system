import NavBar from "./components/NavBar";
import SignUpForm from "./components/signUpForm";
import LoginForm from "./components/loginForm";
import {Link} from "react-router-dom";

const Log = () => {
    return (
        <main className="text-black text-sm ml bg-gray-500 h-screen">
            <NavBar />

            <div className="flex justify-center items-stretch">
                {/* SignUpForm Component */}
                <SignUpForm isSignUp={true} className="flex-grow p-4 rounded-lg mr-2" />

                {/* LoginForm Component */}
                <LoginForm isSignUp={false} className="flex-grow p-4 rounded-lg ml-2" />
            </div>

            {/* Your existing code */}
        </main>
    );
};

// ... (your existing styles)
export default Log;