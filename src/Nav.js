import React, { useEffect, useState } from "react";
import "./Nav.css"

function Nav(){
    const [show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll",handleShow());
        };
    },[]);
    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src={process.env.PUBLIC_URL + "/netflix.png"}
            alt="Netflix Logo"
            />

<img
            className="nav_avatar"
            src={process.env.PUBLIC_URL + "/Netflix-avatar.png"}
            alt="Netflix Logo"
            />

        </div>
    )
}

export default Nav