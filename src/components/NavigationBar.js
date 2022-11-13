import React from "react";
import { NavLink } from "react-router-dom";



export default function NavBar(){
    return(
        <nav className="navbar">
            <NavLink to={"/"} style={{padding: "1rem"}} >Home</NavLink>
            <NavLink to={"/games"} style={{padding: "1rem"}}>Free Games</NavLink>
            <NavLink to={"/profile"} style={{padding: "1rem"}} >Saved Games</NavLink>
        </nav>
    )
}

