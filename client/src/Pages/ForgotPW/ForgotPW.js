import React, {useState} from "react";

const ForgotPass = ()  => {
    const [email, setEmail] = useState("");
    return(
        <center>
        <div>
            <h1>Forgot Password Page</h1>
            <form>
                <table>
                    <tr>
                        <td>Enter Your Email</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="email" placeholder="Email"/>
                        </td>
                    </tr>
                    <tr>
                        <td><button>Get Link</button></td>
                    </tr>
                </table>
            </form>
        </div>
        </center>
    );
}
export default ForgotPass;