
import React,{ useState } from 'react';
import LoginForm from './LoginForm';
import './App.css';


function App() {
  const admin= [
    {username:"admin@gmail.com", password: "admin123"},
    {username:"hall@yahoo.co", password:"gg"},
    {username:"gg@hotmail", password:"vv"},
    {username:"gy@softsuave.com", password:"hh"}
  ]

  const [error, setError] = useState('')

  const login = details =>{
    console.log(details);
    const finds = admin.find(person => person.username === details.username && 
      person.password === details.password);
      
      
    if(finds)
    {
      setError('Logged in successfully')
    }
    else{
      setError('Invalid Credentials')
    }
  }
  return (
    <div>
      <LoginForm login={login} error={error} />   
    </div>
  
  )}

export default App
