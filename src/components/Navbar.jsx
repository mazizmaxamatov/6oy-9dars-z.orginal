
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if (!user) {
            alert("Login qilsangizgina Profile sahifasiga o'tasiz!");
            navigate("/login");
        } else {
            navigate("/profile");
        }
    };

    return (
        <nav style={{ display: "flex", gap: "30px", padding: "10px", background: "#f4f4f4", borderBottom: "2px solid #ccc" }}>
            <Link to="/" style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold", color: "#333" }}>Home</Link>
            <button onClick={handleProfileClick} style={{ fontSize: "18px", fontWeight: "bold", background: "none", border: "none", color: "#333", cursor: "pointer" }}>Profile</button>
        </nav>
    );
};

export default Navbar;



