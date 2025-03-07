import React from "react";

const Login = ({ user, login, logout }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            {!user ? (
                <button 
                    onClick={() => login({ name: "Aziz" })} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Login
                </button>
            ) : (
                <div>
                    <p className="text-lg font-semibold mb-2">Welcome, {user.name}!</p>
                    <button 
                        onClick={logout} 
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
