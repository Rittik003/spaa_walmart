import { useEffect, useState } from 'react';
import './App.css';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import img from './components/img.jpg';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Fileread from './components/Fileread';
import Cart from './components/Cart';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const[load,setload]=useState(false);
  const [data, setdata] = useState(img);
  const [valid, setvalid] = useState(false);
  const [name, setname] = useState("Champ!");
  const[cart,setcart]=useState(false);
  const[user,setuser]=useState(null);
  const[cartdata,setCartdata]=useState([]);

  useEffect(() => {
    // Simulate loading time (remove this in production)
    if(isLoading===true)
    {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
     // 3000ms (3 seconds) as an example duration

    const t = localStorage.getItem('jwttoken');
    if (t && !valid) {
      fetch("/tokenvalidation", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'token': t
        },
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "verified") {
         setuser(data.user.email);
          const dataURI = `data:image/jpeg;base64,${data.user.img1}`;
          setdata(dataURI);
          setname(data.user.name);
          setvalid(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },[]);

  // The rest of your App component's code
  if(load===true)
  {
    return(
      <Fileread reset={()=>{setload(false)}}/>
    )
  }
  if (isLoading) {
    return <LoadingScreen  />;
  }

  const showcart = () => {
    // if (!cart) { // You can include this condition if you only want to fetch data when 'cart' is false
    fetch('/productinfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'user': user
      },
    })
      .then((val) => val.json())
      .then((data) => {
        setCartdata(data); // Update the cartdata state with the fetched data
        setcart(!cart); // Move this line inside the .then block
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };
  

  return (
    <div>
      <Navbar img={data} name={name} valid={valid} fun1={()=>{setload(true)}} fun2={showcart}/>
      <div className="satya">
      {cart && <Cart data={cartdata} />}
      <BrowserRouter>
        <Routes>
         { !cart && <Route path='/' element={<Home valid={valid} user={user}/>} />}
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
