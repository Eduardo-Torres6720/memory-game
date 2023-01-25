import React from "react";
import "./cards.css"

const Cards = (props) => {
    const {planet, index, cardTrue, handlerId} = props

    const teste = planet.turn ? "cards virado" : "cards"

    return (
        <button className={teste} onClick={() => handlerId(planet, index)} >
            {planet.turn ? (
                <div className="card-turn">
                    <img src={planet.img} alt="" />
                </div>
                ) : (
                    <div className="card-noturn">
                        <img src={cardTrue ? planet.img : "/default.jpg"} alt="" />
                    </div>
            )}
        </button>
    )
}

export default Cards