import axios from "axios"
import { useState } from "react";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // validation du mot de passe 

        // si 
        const response = await axios.post("http://localhost:4200/users/login", {
            username,
            password,
        });

        const token = response.data.token;
        localStorage.setItem("token", token);

        // Redirect to the protected page
        window.location.href = "/Admin";
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Login</label>
            <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit"> Log in </button>
        </form>
    );
};
export default Login