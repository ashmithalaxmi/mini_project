import React, {useState} from "react";

const ChangePass = ()  => {
    const [email, setEmail] = useState("");
    return(
        <center>
        <div>
            <h1>Change Password Page</h1>
            <form>
                <table>
                    <tr>
                        <td>Enter Your Private Code:</td>
                        <td><input type="password" placeholder="Code received in e-mail"/></td>
                    </tr>
                    <tr>
                        <td>Enter Your New Password:</td>
                        <td>
                            <input type="password" placeholder="New Password"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Re-Enter Your New Password:</td>
                        <td>
                            <input type="password" placeholder="Re-Enter Password"/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button>Submit</button></td>
                    </tr>
                </table>
            </form>
        </div>
        </center>
    );
}
export default ChangePass;