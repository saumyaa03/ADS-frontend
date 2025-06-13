import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthAPI } from "../axios";
import { Context as AppContext } from "../contexts/AppContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { token, setToken } = useContext(AppContext); // access context

    useEffect(() => {
        if (token) {
            navigate("/"); // Already logged in
        }
    }, [token]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await AuthAPI.post("/login", {
                username,
                password,
            });

            const token = response.data.token;

            setToken(token); // update token via context
            localStorage.setItem("token", token); // optional: store persistently

            alert("Login successful!");
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
