// import axios from 'axios';
import { AuthAPI } from "../axios";
import React, { useState } from 'react'
import { Link } from "react-router-dom";


function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await AuthAPI.post("/register", {
                username,
                password
            });
        } catch (err) {
            if (err.response?.status === 400) {
                alert("Username already exists!");
              } else {
                alert("Registration failed.");
              }
        }

    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Register</button>
                </form>
                <p style={{ marginTop: "1rem" }}>
                    Already registered? <Link to="/login">Login</Link>
                </p>

            </div>
        </div>

    );
}

export default Register