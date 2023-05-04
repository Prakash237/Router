import React from "react";
import React, { useEffect, useState }from "react";
import { useHistory } from 'react-router-dom';
import { Profile } from "./Profile";

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    }, [])
    async function Login()
    {
        console.warn(user, password)
        let item={user, password};
        let result= fetch("http://localhost:8000/api/Login",{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/add")

    }
    return (
        <div>
            <Profile />

            <h1>Login</h1>
            <div className="col-som-6 offset-sm-3">
                <input type="text" placeholder="user"
                onChange={(e)=>setUser(e.target.value)}
                className ="form-control" />
                <br />
                <input type="text" placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}
                className ="form-control" />
                <br />
                <button onClick={Login} className="btn btn-primary" >Login</button>
            </div>
        </div>
    )
    
}