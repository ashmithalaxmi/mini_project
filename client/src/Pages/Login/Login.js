import React, { useState } from 'react';
import axios from 'axios'

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async(e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password
    }

    try {
      // Make a POST request to your backend server to create the user
      const response = await axios.post('http://localhost:3001/createUser', newUser);

      // Handle the response (if needed)
      console.log('User created successfully:', response.data);
      console.log(response.data)
      
    } catch (error) {
      console.error('Error creating uuser:', error);
    }
  }

  return (
    <center>
    <div>
      <h1>Login Page</h1>
      <form>
                <table>
                    <tr>
                        <td>Name :</td>
                        <td><input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>Email :</td>
                        <td><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>Password :</td>
                        <td><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>Forgot Password:</td>
                        <td><a href='/ForgotPass'>Reset Password</a></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td></td>
                        <td><button onClick={handleLoginClick}>Login</button></td>
                    </tr>
                </table>
            </form>
    </div>
    </center>
  );
}

export default LoginPage;