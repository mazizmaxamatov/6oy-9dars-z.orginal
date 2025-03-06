import { useState } from "react";

const ItemUpdate = ({ item, onSave }) => {
    const [title, setTitle] = useState(item.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...item, title });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Saqlash</button>
        </form>
    );
};

export default ItemUpdate;
