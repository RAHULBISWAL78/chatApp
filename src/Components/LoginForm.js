import React from 'react';
import {useState} from 'react';

import axios from 'axios';
const projectId ='e54a3d31-aa0a-4261-aa08-46081afa9599';

 const LoginForm = () => {
  const [username,setUsername] = useState ('');
  const [password,setPassword] = useState ('');
  const [error,setError] = useState ('');
  const handleSubmit = async(e) => {
      e.preventDefault();
      const authObject = {'Project-ID':projectId,'User-Name':username,'User-Secret':password};
      try {
        //username/password =>chatEngine -> give messages
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });
        //if it is correct then save to local storage
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
        window.location.reload();
        setError('')
      } catch (error) {
        setError('oops , incorrect userName or Password')
      }
      
      //if ok then -> logged In
      //if error then "try" new username and password
  }
  return (
    <div className="wrapper">
      <div className="form">
        <h1>Chat Application</h1>
        <form onSubmit={handleSubmit}>
             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required/>
             <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required/>
             <div align="center">
               <button type="submit" className="button">
                <span>Start Chat</span>
               </button>
             </div>
             <h2>{error}</h2>
        </form>

      </div>
      
    </div>
  )
}
export default LoginForm;
