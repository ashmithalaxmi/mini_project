import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleForgotPasswordClick = () => {
    // Handle forgot password button click
    console.log('Forgot password button clicked');
  }

  const handleLoginClick = () => {
    // Handle login button click
    console.log(`Email: ${email}, Password: ${password}`);
  }

  return (
    <center>
    <div>
      <h1>Login Page</h1>
      <form>
                <table>
                    <tr>
                        <td>Email :</td>
                        <td><input type="email" placeholder="Email"/></td>
                    </tr>
                    <tr>
                        <td>Password :</td>
                        <td><input type="password" placeholder="Password"/></td>
                    </tr>
                    <tr>
                        <td>User Type:</td>
                        <td><input type="radio" name="type"/>User <input type="radio" name="type"/>Admin</td>
                    </tr>
                    <tr>
                        <td>Forgot Password:</td>
                        <td><a href='/ForgotPass'>Reset Password</a></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button>Login</button></td>
                    </tr>
                    <tr>
                        <td>New User:</td>
                        <td><a href='/Reg'>Register Here!</a></td>
                    </tr>
                </table>
            </form>
    </div>
    </center>
  );
}

export default LoginPage;