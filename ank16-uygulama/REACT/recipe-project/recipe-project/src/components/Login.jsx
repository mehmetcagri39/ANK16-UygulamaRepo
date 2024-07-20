import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../assets/style/login.scss'

//Login sayfasına /login ile ulaşılabilir.

const Login = () => {
    const[user,setUser]=useState("");
    const[password,setPassword]=useState("");
    const{login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        try {
            await login(user,password);
            navigate("/*");
        } catch (error) {
            alert("Login Failed!")
            // setUser("");
            // setPassword("");
            
        }
    }

    //username:john@mail.com
    //password:changeme
    return (
        <div className='login-page'>
            <div className="head">
                <h3>BilgeAdam Boost</h3>
                <h3>Ankara-16</h3>
                <h3>Restaurant</h3>
            </div>
            <form onSubmit={handleLogin}>
                <h3>Login</h3>
                <input value={user} onChange={e=>setUser(e.target.value)} type="text" placeholder='Username'/>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="text" placeholder='Password'/>
                <input type="submit" value={"Login"}/>
                <Link to="/*">Continue as guest...</Link>
            </form>
        </div>
      )
    }

export default Login