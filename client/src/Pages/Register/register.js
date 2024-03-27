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
                        <td>First Name :</td>
                        <td><input type="text" placeholder="First Name"/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>Last Name :</td>
                        <td><input type="text" placeholder="Last Name"/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>Email :</td>
                        <td><input type="email" placeholder="Email"/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td></td>
                        <td><button>Register</button></td>
                    </tr>
                </table>
            </form>
    </div>
    </center>
  );
};

export default RegPage;