import React from "react"
import "../style.css"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/troll-face.png" alt="" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--projecnt">React Course - Project 3</h4>
        </header>
    )
}