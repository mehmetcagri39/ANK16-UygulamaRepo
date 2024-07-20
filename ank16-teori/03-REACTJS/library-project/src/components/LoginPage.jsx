import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const[user,setUser] = useState("");
  const[password,setPassword] = useState("");
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      await login(user,password)
      navigate("/")
    }catch(error) {
      alert("Login Failed.")
      setUser("");
      setPassword("");
      
    }
  }
  return (
    <div className='login-page'>
        <div className='head'>
            <h3>BilgeAdam Boost</h3>
            <h3> Ankara-16</h3>
            <h3>Kütüphanesi</h3>
        </div>
        <form onSubmit={handleLogin}>
            <h3>Giriş Yap</h3>
            <input value={user} onChange={e=>setUser(e.target.value)} type="text" placeholder='Kullanıcı Adı' />
            <input value={password} onChange={e=>setPassword(e.target.value)} type="text" placeholder='Parola' />
            <input type="submit" value={"Giriş"}/>
        </form>
    </div>
  )
}

export default LoginPage