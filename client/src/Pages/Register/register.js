import React, { useState } from "react";

const RegPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <center>
    <div>
      <h1>Register Page</h1>
      <form>
                <table>
                    <tr>
                        <td>Email :</td>
                        <td><input type="email" placeholder="Email"/></td>
                    </tr>
                    <tr>
                        <td>Name :</td>
                        <td><input type="text" placeholder="Name"/></td>
                    </tr>
                    <tr>
                        <td>User Type:</td>
                        <td><input type="radio" name="type"/>User <input type="radio" name="type"/>Admin</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button>Register</button></td>
                    </tr>
                    <tr>
                        <td>Existing User:</td>
                        <td><a href='/'>Login Here!</a></td>
                    </tr>
                </table>
            </form>
    </div>
    </center>
  );
};

export default RegPage;