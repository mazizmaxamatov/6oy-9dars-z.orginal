import React from "react";

const ItemList = ({ items, editingItem, setEditingItem, name, setName, surname, setSurname, age, setAge, updateItem, deleteItem }) => {
    return (
        <ul className="mt-4 space-y-4">
            {items.map((item) => (
                <li key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                    {editingItem && editingItem.id === item.id ? (
                        <>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-blue-300" />
                            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} className="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-blue-300" />
                            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-blue-300" />
                            <button 
                                onClick={() => updateItem(item.id)} 
                                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition w-full"
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <p className="text-lg font-semibold"><strong>Name:</strong> {item.name}</p>
                            <p className="text-lg"><strong>Surname:</strong> {item.surname}</p>
                            <p className="text-lg"><strong>Age:</strong> {item.age}</p>
                            <div className="mt-2 space-x-2">
                                <button 
                                    onClick={() => { setEditingItem(item); setName(item.name); setSurname(item.surname); setAge(item.age); }} 
                                    className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => deleteItem(item.id)} 
                                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
