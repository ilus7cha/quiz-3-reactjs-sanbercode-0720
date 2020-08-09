import React from 'react';
import { useAuthContext } from './authcontext';


const Login = () =>{
    const [state, setAuth] = useAuthContext()
    const handleChange = (event) =>{
        let typeOfInput = event.target.name

        switch (typeOfInput) {
            case "username": 
                setAuth({
                    ...state, 
                    username: event.target.value})
                break;
            case "pass":
                setAuth({
                    ...state,
                    password: event.target.value
                })
            break;
        default:
            break;
    }
}
    const handleSubmit = (event) =>{
        event.preventDefault()
        setAuth({...state, isLogin: !0})
    }
    return(
    <section>
    <form onSubmit={handleSubmit}>
    <div>
    <label><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" />
    </div>
    <div>
    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="pass" />
    </div>

    <button type="submit">Login</button>
    </form></section>
    )
}

export default Login