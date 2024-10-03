import React, { useState } from "react";
import axios from "axios";
function Login() {
  // State variables to handle form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Login Data Submitted: ", formData);
    let res = await axios.post('http://localhost:5000/login',formData);
    console.log(res);
    if(res.data){
        alert("cong.. login ho gya ")
    }
    else{
        alert("Login  nhi huaa")
    }
    // You can add your API call or validation logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;