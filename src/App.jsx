import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAzizHook from "./hooks/Azizhook";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ItemCreate from "./components/ItemCreate";
import ItemUpdate from "./components/ItemUpdate";
import ItemListView from "./components/ItemListView";

const App = () => {
    const { user, login, logout, items, addItem, updateItem, deleteItem } = useAzizHook();

    return (
        <Router>
            <Navbar user={user} />
            <Routes>
                <Route path="/login" element={<Login onLogin={login} />} />
                <Route path="/profile" element={<Profile user={user} onLogout={logout} />} />
                <Route path="/items" element={<ItemListView items={items} onEdit={updateItem} onDelete={deleteItem} />} />
                <Route path="/add-item" element={user ? <ItemCreate onAdd={addItem} /> : <p>Login qiling!</p>} />
                <Route path="/edit-item/:id" element={user ? <ItemUpdate onSave={updateItem} /> : <p>Login qiling!</p>} />
            </Routes>
        </Router>
    );
};

export default App;
