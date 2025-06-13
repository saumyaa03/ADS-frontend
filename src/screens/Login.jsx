import React, { useState } from "react";
// import axios from "../axios"; // we'll update this later to handle token
import { Link } from "react-router-dom";
import { AuthAPI } from "../axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          navigate("/"); // send user to home if already logged in
        }
      }, []);

    const handleLogin = async (e) => {
        e.preventDefault(); // stop page refresh

        try {
            const response = await AuthAPI.post("/login", {
                username,
                password,
            });
            

            console.log(response.data);

            const token = response.data.token;
            localStorage.setItem("token", token); // Save token in browser

            alert("Login successful!");

            // Redirect to home
            navigate("/");

        } catch (err) {
            alert("Login failed. Check credentials.");
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
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
                    <button type="submit">Login</button>
                </form>
                <p style={{ marginTop: "1rem" }}>
                    Don’t have an account? <Link to="/register">Register</Link>
                </p>

            </div>
        </div>
    );

}

export default Login;
