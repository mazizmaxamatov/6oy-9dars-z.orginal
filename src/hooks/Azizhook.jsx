import { useState } from "react";

const useAzizHook = () => {
    const [user, setUser] = useState(null);
    const [items, setItems] = useState([]);
    
    // Yangi foydalanuvchi ma'lumotlari
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");

    const [editingItem, setEditingItem] = useState(null);

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    const addItem = () => {
        if (name.trim() && surname.trim() && age.trim()) {
            setItems([...items, { id: Date.now(), name, surname, age }]);
            setName(""); setSurname(""); setAge("");
        }
    };

    const updateItem = (id) => {
        setItems(items.map((item) => 
            item.id === id ? { ...item, name, surname, age } : item
        ));
        setEditingItem(null);
        setName(""); setSurname(""); setAge("");
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return { 
        user, login, logout, 
        items, name, setName, surname, setSurname, age, setAge, 
        addItem, editingItem, setEditingItem, updateItem, deleteItem 
    };
};

export default useAzizHook;
