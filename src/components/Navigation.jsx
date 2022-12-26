import React from "react";
const Navigationcomponent = ()=>{
    return(
        < nav className="navbar navbar-expand-lg nav-dark bg-dark" >
        
        <a className="navbar-brand" href="/"> React firebase file managment system
        </a>

        <ul className="navbar-nav ms-auto me-5">
            <li className=" nav-item mx-2">
                Login
                <a className=" btn btn-success btn-sm" href="/login">
                    Login
                </a>
            </li>
            <li className="nav-item" >
                <a className=" btn btn-primary btn-sm" href="/login">
                    Register
                </a>
            </li>
        </ul>
        </nav>
    )
}
export default Navigationcomponent