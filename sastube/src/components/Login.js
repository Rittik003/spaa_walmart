import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login=(props) =>{
  const navigate=useNavigate();
    document.body.style.backgroundColor = 'aqua';
    const [val,setval]=useState({
        email:'',
        password:''
    })
    const fun=(e,key)=>{
        setval({...val,[key]:e.target.value})
    }
    const handleSubmit=()=>{
        fetch('/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(val)
        }).then((res)=> {return res.json()}).then((data1)=>{
         
        //  console.log(data1.token);
         if(data1.mess==="Successful")
         {
          localStorage.setItem('jwttoken',data1.token);
          navigate('/');
          window.location.reload();
          
         }
         else
         window.alert("wrong credentials");
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
      <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={val.email}
           onChange={(e)=>{fun(e,'email')}}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={val.password}
            onChange={(e)=>{fun(e,'password')}}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="button" onClick={handleSubmit}>Login</button>
      </form>
    </div>
    </div>
  )
}
export default Login;
