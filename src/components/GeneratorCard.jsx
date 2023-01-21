import React from "react";
import Cards from "./Cards";

const GeneratorCard = (props) => {
    const {cardTrue, cardPlanets, handlerId} = props
    
    return (
        <div className="container">
            {cardPlanets ? (
                <div className="container-cards">
                    {cardPlanets.map( (planet, index) => <Cards key={index} planet={planet} index={index} cardTrue={cardTrue} handlerId={handlerId} />)}
                </div>
            ) : (
                <div></div>
            ) }
        </div>
    )
}

export default GeneratorCard