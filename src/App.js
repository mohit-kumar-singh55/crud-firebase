import React, { useState, useEffect } from "react";
import './App.css';
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";

function App() {
  const usersCollectionRef = collection(db, "users");

  // Read
  const [users, setUsers] = useState([]);

  // Create
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  }

  const updateAge = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  }

  useEffect(() => {
    // Read
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers();
  }, [])

  return (
    // Create
    <div className="App">
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Name" />
      <input type="number" value={newAge} onChange={(e) => setNewAge(e.target.value)} placeholder="Age" />
      <button onClick={createUser}>Create User</button>


      {/* Read */}
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={() => { updateAge(user.id, user.age) }}>Increase Age</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
