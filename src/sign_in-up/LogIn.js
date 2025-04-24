import React, { useState } from "react";
import "./style.css";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        const loginPerson = { email, password };

        fetch("/user/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginPerson),
        })
            .then((response) => {

                if (!response.ok) {
                    console.log("You cannot connect");
                    throw new Error("Password or email incorrect!");
                }
                return response.json();
            })
            .then((loginPerson) => {
                console.log(loginPerson);

                localStorage.setItem(
                    "id",
                    JSON.stringify(loginPerson["id"])
                );
                localStorage.setItem(
                    "userName",
                    JSON.stringify(loginPerson["username"])
                );

                localStorage.setItem(
                    "type",
                    JSON.stringify(loginPerson["type"])
                );

                setEmail("");
                setPass("");

                window.location.replace("/");
            })
            .catch((error) => console.error(error));
    };




    return (
        <div className="page">
            <div className="login"> Login <br /></div>

            <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="inputBox">
                        <span >Email</span>
                        <input
                            placeholder="Email..."
                            id="formControlLg"
                            type="email"
                            size="lg"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <br />

                        <i></i>
                    </div>
                    <div className="inputBox">
                        <span>Password</span>
                        <input
                            placeholder="Password..."
                            id="formControlLg"
                            type="password"
                            size="lg"
                            required
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                        ></input>

                        <i></i>
                        <br /><br />
                    </div>
                    <div className="bottom">
                        <button type="submit" >Login</button>


                        <div className="link">
                            <p>You do not have an account?</p>
                            <a href="http://localhost:3000/signUp">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Login;