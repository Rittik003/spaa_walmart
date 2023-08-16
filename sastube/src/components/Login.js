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
      <div className="container text-info1">
      <h2>Login</h2>
      <form >
        <div className="form-group" >
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            value={val.email}
            onChange={(e)=>{fun(e,'email')}}
            placeholder="Enter your email"
            className='form-control'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            value={val.password}
            onChange={(e)=>{fun(e,'password')}}
            placeholder="Enter your password"
            className="form-control"
            required
          />
        </div>
      </form>
      <button type="button" onClick={handleSubmit}>Login</button>
    </div>
    </div>
  )
}
export default Login;
