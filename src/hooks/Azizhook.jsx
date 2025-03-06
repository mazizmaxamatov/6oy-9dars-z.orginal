import { useState } from "react";

const useAzizHook = () => {
    const [user, setUser] = useState(null);
    const [items, setItems] = useState([]);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const addItem = (newItem) => {
        setItems([...items, { id: Date.now(), ...newItem }]);
    };

    const updateItem = (updatedItem) => {
        setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return { user, login, logout, items, addItem, updateItem, deleteItem };
};

export default useAzizHook;
