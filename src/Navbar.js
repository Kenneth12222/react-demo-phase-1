import React from "react";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <h1 className="logo">Logo</h1>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Service</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;