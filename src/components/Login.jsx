import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName.trim() || !lastName.trim() || !age.trim()) {
            alert("Iltimos, barcha maydonlarni to'ldiring!");
            return;
        }
        onLogin({ firstName, lastName, age });
        navigate("/profile");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ism" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Familiya" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="number" placeholder="Yosh" value={age} onChange={(e) => setAge(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;