import React from "react";
const Navigationcomponent = ()=>{
    return(
        < nav className="navbar navbar-expand-lg nav-dark bg-dark" >
        
        <a className="navbar-brand" href="/"> React firebase file managment system
        </a>

        <ul className="navbar-nav ms-auto me-5">
            <li className=" btn btn-success btn-sms">
                Login
            </li>
            <li className="nav-item" mx-2>
                <a className=" btn btn-primary btn-sm" href="/login">
                    Register
                </a>
            </li>
        </ul>
        </nav>
    )
}
export default Navigationcomponent