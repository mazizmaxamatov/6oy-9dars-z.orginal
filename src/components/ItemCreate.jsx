import { useState } from "react";

const ItemCreate = ({ onAdd }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        onAdd({ title });
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Element nomi" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Qo‘shish</button>
        </form>
    );
};

export default ItemCreate;
