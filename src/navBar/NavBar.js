import { useEffect, useState } from "react";
import { MenuData } from "./MenuData";
import { MenuDataLoggedOut } from "./MenuDataLoggedOut";
import { MenuDataAdmin } from "./MenuDataAdmin";
import "./NavBarStyle.css";
import React from "react";


const Navbar = () => {
    const [username, setUsername] = useState("");
    const [idUser, setIdUser] = useState("");
    const [isAdmin, setAdmin] = useState("");

    const [clicked, setClicked] = useState(false);
    useEffect(() => {

        setIdUser(localStorage.getItem("id"));
        if (idUser) {
            setUsername(localStorage.getItem("userName").slice(1, -1));
            setAdmin(localStorage.getItem("type").slice(1, -1))
        }
        console.log(username);
        console.log(isAdmin);
    })
    const handleClick = () => {
        setClicked(!clicked);

    };
    return (
            <nav className="NavBarItems">
                <h1 className="logo">
                    <a href="/">Hello {username}</a>
                    <i className="fab fa-react"></i>
                </h1>
                {username && isAdmin === "ADMIN" ? (

                    <div>

                        <div className="menu-icons" onClick={handleClick}>
                            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                            {MenuDataAdmin.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.url} className={item.cName}>
                                            <i className={item.icon}></i>
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul> </div>
                ) : username && isAdmin === "USER" ? (
                    <div>
                        <div className="menu-icons" onClick={handleClick}>
                            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                            {MenuData.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.url} className={item.cName}>
                                            <i className={item.icon}></i>
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul> </div>
                ) :

                    (
                        <div>
                            <div className="menu-icons" onClick={handleClick}>
                                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                            </div>
                            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                                {MenuDataLoggedOut.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.url} className={item.cName}>
                                                <i className={item.icon}></i>
                                                {item.title}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul> </div>
                    )}

            </nav>
        
    );
};
export default Navbar;

