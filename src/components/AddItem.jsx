import React from "react";

const AddItem = ({ name, setName, surname, setSurname, age, setAge, addItem }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-semibold mb-3">Add New User</h2>
            <input 
                type="text" value={name} onChange={(e) => setName(e.target.value)} 
                placeholder="Name" 
                className="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-blue-300"
            />
            <input 
                type="text" value={surname} onChange={(e) => setSurname(e.target.value)} 
                placeholder="Surname" 
                className="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-blue-300"
            />
            <input 
                type="number" value={age} onChange={(e) => setAge(e.target.value)} 
                placeholder="Age" 
                className="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-blue-300"
            />
            <button 
                onClick={addItem} 
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg w-full hover:bg-green-600 transition"
            >
                Add User
            </button>
        </div>
    );
};

export default AddItem;
