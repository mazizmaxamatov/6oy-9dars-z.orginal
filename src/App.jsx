import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import MenuBrand from "./components/MenuBrand";
import Card from "./components/Card";



function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <MenuBrand/>
      <Card/>
    </div>
  );
}

export default App;






































































/*
import React from "react";
import useAzizHook from "./hooks/Azizhook";

import Login from "./components/Login";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import Nav from "./components/Navbar";




const App = () => {
    const { 
        user, login, logout, 
        items, name, setName, surname, setSurname, age, setAge, 
        addItem, editingItem, setEditingItem, updateItem, deleteItem 
    } = useAzizHook();

    return (


        <div>

<Nav/>



        </div>




        <div className="p-6 max-w-lg mx-auto bg-gray-100 min-h-screen">

            
            <Login user={user} login={login} logout={logout} />
            <AddItem name={name} setName={setName} surname={surname} setSurname={setSurname} age={age} setAge={setAge} addItem={addItem} />
            <ItemList 
                items={items} 
                editingItem={editingItem} setEditingItem={setEditingItem} 
                name={name} setName={setName} 
                surname={surname} setSurname={setSurname} 
                age={age} setAge={setAge} 
                updateItem={updateItem} deleteItem={deleteItem} 
            />
        </div>


    );
};

export default App;
*/