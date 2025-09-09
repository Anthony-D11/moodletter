import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import $ from 'jquery';
import InputValidation from "../InputValidation";
import { AuthContext } from "../App";
import {Link} from "react-router-dom";

export default function SignIn() {
    const base_url = process.env["REACT_APP_BACKEND_URL"];
    const api_url = base_url + "/users/sign-in";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {userState, setUserState} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        let validationResult = InputValidation("username", username);
        if (!validationResult.isValid) {
            alert(validationResult.error);
            return;
        }
        validationResult = InputValidation("password", password);
        if (!validationResult.isValid) {
            alert(validationResult.error);
            return;
        }

        let payload = {
            "username": username,
            "password": password
        }
        axios.post(api_url, payload, {withCredentials: true}).then((response) => {
            if (response.status !== 200) {
                throw response;
            }
            setUserState({ "isLoggedIn": true, "user": response.data });
            setUsername("");
            setPassword("");
            alert("Sign in successfully!");
            navigate("/");
            window.location.reload();
        }).catch(error => {
            if(error.status === 401) {
                alert(`Invalid credentials`);
            }
            else {
                console.log(`Error signing: ${error}`);
            }
        })
    }
    
    return (
        <>
            <div className="section-section container" style={{width: "30%"}}>
                <div className="sign-in-container">
                    <div className="sign-in-wrapper">
                        <form className="sign-in d-flex flex-column" onSubmit={handleSignIn}>
                            <span className="sign-in-header text-center fs-1 my-3">Sign In</span>
                            <input className="rounded form-control my-2" type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <input className="rounded form-control my-2" type="text" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button className="my-2 btn btn-primary" type="submit">Sign In</button>
                            <Link className="register-link text-center" to="/register"> Register?</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}