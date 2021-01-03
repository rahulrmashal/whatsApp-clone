import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
    const signIn = () => {};
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt=""
                />
                    <div className="login__text">
                        <h1>Sign in to WhatsApp</h1>
                    </div>                    
                    <Button onClick={signIn}>
                        Sign in with Google
                    </Button> 
            </div>
        </div>
    )
}

export default Login;
