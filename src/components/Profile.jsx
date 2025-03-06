import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, onLogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            setTimeout(() => alert("Login qiling!"), 0);
            navigate("/login");
        }
    }, [user, navigate]);

    if (!user) {
        return null;
    }

    return (
        <div>
            <h2>Profil</h2>
            <p><strong>Ism:</strong> {user.firstName}</p>
            <p><strong>Familiya:</strong> {user.lastName}</p>
            <p><strong>Yosh:</strong> {user.age}</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Profile;