import React from "react";
import "./cards.css"

const Cards = (props) => {
    const {planet, index, cardTrue, handlerId} = props

    return (
        <button className="cards" onClick={() => handlerId(planet, index)} >
            {planet.turn ? (
                <img src={planet.img} alt="" />
                ) : (
                <img src={cardTrue ? planet.img : "/default.jpg"} alt="" />
            )}
        </button>
    )
}

export default Cards