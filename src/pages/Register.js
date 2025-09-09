import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import $ from 'jquery';
import InputValidation from "../InputValidation";
import {Link} from "react-router-dom";

function Register () {
    const base_url = process.env["REACT_APP_BACKEND_URL"];
    const api_url = base_url + "/users/register";
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        let validationResult = InputValidation("general", name);
        if (!validationResult.isValid) {
            alert(validationResult.error);
            return;
        }
        validationResult = InputValidation("username", username);
        if (!validationResult.isValid) {
            alert(validationResult.error);
            return;
        }
        validationResult = InputValidation("password", password);
        if (!validationResult.isValid) {
            alert(validationResult.error);
            return;
        }
        try {
            let payload = {
                "name": name,
                "username": username,
                "password": password
            }
            const response = await axios.post(api_url, payload);
            if (response.status != 200) {
                throw response.statusText;
            }
            $(".statusText").text(response.statusText);
            $(".statusText").removeClass("error");
            $(".statusText").addClass("success");
            setName("");
            setUsername("");
            setPassword("");
            alert("User created!");
            navigate("/sign-in");

        } catch(error) {
            $(".statusText").text(error);
            $(".statusText").removeClass("success");
            $(".statusText").addClass("error");
            console.error(`Error registering user: ${error}`);
        }
    }

    return (
        <>
            <div className="section-section container" style={{width: "30%"}}>
                <div className="register-container">
                    <div className="register-wrapper">
                        <form className="register d-flex flex-column" onSubmit={handleRegister}>
                            <span className="register-header text-center fs-1 my-3">Register</span>
                            <input className="rounded form-control my-2" type="text" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
                            <input className="rounded form-control my-2" type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <input className="rounded form-control my-2" type="text" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button className="my-2 btn btn-primary" type="submit">Register</button>
                            <Link className="sign-in-link text-center" to="/sign-in"> Login?</Link>
                            <span className="statusText"></span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;