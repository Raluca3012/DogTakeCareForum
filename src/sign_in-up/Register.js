import React, { useState } from "react";
import "./style.css";

export const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, email, password);
        const setPerson = { userName, email, password };
        window.location.replace("/signin")

        fetch("/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(setPerson),
        })
            .then((response) => {

                if (!response.ok) {
                    console.log("You cannot connect");
                    throw new Error("Password or email incorrect!");
                }
                return response.json();
            })
            .then((setPerson) => {
                setUserName("");
                setEmail("");
                setPass("");
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="page">
            <div className="login">Sign Up <br /></div>

            <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="inputBox">
                        <span>Username</span>
                        <input
                            placeholder="Username..."
                            id="formControlLg"
                            type="username"
                            size="lg"
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        ></input>
                        <br />
                        <i></i>

                        <span>Email</span>
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
                    </div>
                    <div className="bottom">
                        <button type="submit" >Sign-up</button>
                        <div className="link">
                            <p>Do you have an account?</p>
                            <a href="http://localhost:3000/signin">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;