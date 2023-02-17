import React from "react";
import {Link} from "react-router-dom";

// Registration page

export default function Registration({ user, setUser, setUsers, users}) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState(false);

    const validate = () => {
        if (name === "") {
            setError("Name is required");
            alert(error)
            // where id === name set class to error
            document.getElementById("name").classList.add("error_field");
            setTimeout(() => {
                document.getElementById("name").classList.remove("error_field");
            }, 1000);

            return false;
        }
        if (email === "") {
            alert(error)
            // where id === email set class to error
            document.getElementById("email").classList.add("error_field");
            setTimeout(() => {
                document.getElementById("email").classList.remove("error_field");
            }, 1000);
            setError("Email is required");
            return false;
        }
        if (password === "") {
            setError("Password is required");
            alert(error)
            // where id === password set class to error
            document.getElementById("password").classList.add("error_field");
            setTimeout(() => {
                document.getElementById("password").classList.remove("error_field");
            }, 1000);

            return false;
        }
        if (confirmPassword === "") {
            setError("Confirm password is required");
            alert(error)
            // where id === confirmPassword set class to error
            document.getElementById("confirmPassword").classList.add("error_field");
            setTimeout(() => {
                document.getElementById("confirmPassword").classList.remove("error_field");
            }, 1000);

            return false;
        }
        if (password!== confirmPassword) {
            setError("Passwords do not match");
            alert(error)
            // where id === confirmPassword set class to error
            document.getElementById("confirmPassword").classList.add("error_field");
            setTimeout(() => {
                document.getElementById("confirmPassword").classList.remove("error_field");
            }, 1000);

            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
        } else {
            setError("");
            setUser({
                name: name,
                email: email,
                password: password,
                auth: true
            });
            setUsers([...users, user]);
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setSuccess(true);
        }
    }

        console.log(name, email, password, confirmPassword);
        console.log(success);
        console.log(error);

        return (
            <div>
                <h1>Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">Registration successful!</div>}
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>

        )
}