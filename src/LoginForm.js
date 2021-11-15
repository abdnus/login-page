import React, {useState} from 'react';
import image from './image.jpeg'


function LoginForm({login, error}) {

 const [details, setDetails] = useState({username:'' , password:''});

    const submitHandler = e =>{
        e.preventDefault();
      login(details);
    }

    const setName = (e)  => { 
        setDetails({...details, password:e.target.value})
    } 

    const setPassword = (e) => {
        setDetails({...details,username:e.target.value})
    }

    return (
        <div className='big'>
            <h1>LOGIN </h1>
        <div className="Main">
            <div className="left">
            <img src={image} width="100%" height="100%"></img>
            </div>
            <div className="right">
          
        <form onSubmit={submitHandler}>
            <div className="my-form">
                <h2>CREDENTIALS</h2><br/><br/><br/><br/>
                <div classNAME="form-body" alt="baby ele">
                    <label htmlFor="username">Email</label><br/>
                    <input type="email" name="email" id="email" onChange={setPassword} value={details.username}/><br/>
                    <label htmlFor="Password">Password</label><br/>
                    <input type= "Password" name ="Password" id="Password" onChange={setName}  value={details.password}/>
                    <p>{error}</p>
                    <button>Login</button>

                    </div>
            </div>
        </form>
        </div>
        </div>
        </div>
    )
}

export default LoginForm
