import React, {useState} from "react";

// Login page

export default function Login({ user, setUser, setUsers, users, history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = () => {
        setError("");
        setLoading(true);
        if (!users || !users.length) {
            alert('Пользователей не существует!')
            return
        }
        users.forEach((user) => {
            if (user.email === email && user.password === password) {
                setUser(user);
                // user auth = true
                setUser(...user, users.auth = true);
                setUsers(users);
                setLoading(false);
                history.push("/dashboard");
            } else {
                alert('Неправильно введен логин или пароль')
            }
        })
    }

    return <div>
        <input value={email} onChange={({target: {value}}) => {
            setEmail(value)
        }} />
        <input value={password} type="password" onChange={({target: {value}}) => {
            setPassword(value)
        }} />
        <button onClick={() => {
            handleSubmit()
        }}>Login</button>
    </div>
}