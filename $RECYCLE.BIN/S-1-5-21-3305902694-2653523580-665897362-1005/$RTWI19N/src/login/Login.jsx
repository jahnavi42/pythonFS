import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  let navigate =useNavigate();
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");

  const emailid=(e)=>{
    setEmail(e.target.value);
    // console.log(email);
  }
  const password=(e)=>{
    setPass(e.target.value);
    // console.log(pass);
  }
  const checkLogin =()=>{
    if(email==='a@gmail.com' && pass==='pass'){
      console.log('Login successfull');
      navigate('/browse')
    }
    else{
    console.log("login Failed");
    }
  }
  return (
    
    <div className='login'>
      <div>
        <div>
          <h1>Login Page</h1>
          <div>
          <input placeholder='Enter email' onChange={(e)=>emailid(e)}/>
          </div>
          <div>
          <input placeholder='Enter Password' onChange={(e)=>password(e)}/>
          </div>
          <button onClick={checkLogin}>Login</button>
        </div>
      </div>
    </div>
    

  )
}

export default Login