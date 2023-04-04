import React from 'react';
import './login.css';

const Login = (props) => {
return (
    <div>
<div id="Main_block">
            <div id="block_1">
                <div id="heading"><span> USER LOGIN</span></div>
                <div class="innerspace">
                    <input type="text" class="input" placeholder="Username"></input>
                </div>
                <div class="innerspace">
                    <input type="password" class="input" placeholder="password"></input>
                </div>
                <div class="innerspace">
                    <button>LOGIN</button>
                </div>
                <div class="innerspace font">
                    <span>Not registered?</span>
                    <a href="">Create an account</a>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Login;