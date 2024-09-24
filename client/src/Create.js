import "./App.css";
import { useState } from "react";
import axios from "axios";
import baseUrl from "./baseUrl";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveData = (e) => {
    e.preventDefault();

    axios
      .post(`${baseUrl}/create`, user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      alert('Saved successfully')
  };

  return (
    <div className="App">
      <h1>Create Records</h1>

      <input
        placeholder="name"
        onChange={handleChange}
        name="name"
        value={user.name}
      /> <br /><br />
      <input
        placeholder="last name"
        onChange={handleChange}
        name="lastName"
        value={user.lastName}
      />
<br /><br /><br />
      <button onClick={saveData}>Save to MongoDB</button>&nbsp;&nbsp;&nbsp;
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
