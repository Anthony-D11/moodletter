import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";

function Navbar() {
    const base_url = "http://localhost";
    const user_url = base_url + "/users";
    const [ userState, setUserState ] = useState({});
    const location = useLocation(); 

    useEffect(() => {
        async function checkLoggedIn() {
            try {
                const res = await axios.get(user_url + "/status?timestamp=" + Date.now().toString(), { withCredentials: true })
                setUserState({ "isLoggedIn": true, "user": res.data });
            } catch (err) {
                setUserState({ "isLoggedIn": false });
                if (err.status !== 401) {
                    console.error(err);
                }
            }
        }
        
    }, [location.pathname]);

    const handleSignOut = () => {
        axios.get(user_url + "/sign-out", { withCredentials: true })
        .then((res) => {
            setUserState({ "isLoggedIn": false});
            window.location.reload();
        })
        .catch((err) => {
            console.error(err);
        });
    }


    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <Link to="/" className="navbar-brand fw-bolder">Mood Letter</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-2 fw-bold">
                    <Link to="/campaign-collection" className="nav-link">Campaigns</Link>
                </li>
                <li className="nav-item mx-2 fw-bold">
                    <Link to="/recipient-group-collection" className="nav-link">Recipients</Link>
                </li>
                {!userState.isLoggedIn ?
                (<li className="nav-item mx-2 fw-bold">
                    <Link to="/sign-in" className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg>
                            &nbsp;Log in/ Register
                    </Link>
                </li>):
                (<>
                    <li className="nav-item mx-2 fw-bold">
                        <span className="greet-user">Hello {userState["user"]["name"]}</span>
                    </li>
                    <li className="nav-item mx-2 fw-bold">
                        <Link to="/change-password" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg>
                                &nbsp;Change password
                        </Link>
                    </li>
                    <li className="nav-item mx-2 fw-bold">
                        <Link to="#" onClick={handleSignOut} className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg>
                                &nbsp;Logout
                        </Link>
                    </li>
                </>)
                }
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;
