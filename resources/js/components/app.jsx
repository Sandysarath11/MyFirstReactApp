import React from "react";
import Router from "../router/index"
import { NavLink } from "react-router-dom";

const App = ()=> {
    return(
        <div>
            <h2>Hello World!!</h2>
            <nav>
                <NavLink to="/">Home Page</NavLink>
                <NavLink to="/about">About Page</NavLink>
            </nav>
            <Router/>
        </div>
    )
}

export default App
