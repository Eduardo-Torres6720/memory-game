import React from "react";
import "./navBar.css"

const NavBar = (props) => {
    const {amounts, time} = props

    const timeFinish = () => {
        return time
    }

    return (
        <div className="container-navbar">
            <div className="navbar">
                <h1 className="title">Jogo da Memória</h1>
                <div className="scoreboard">
                    <p>Tempo: {time}</p>
                    <p>Cartas Viradas: {amounts}</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar