import React from "react"
import "./results.css"

const Results = (props) => {
    const {amounts, conclusion, reset} = props

    const calPorcentagem = () => {
        return (12 * 100) / amounts
    }

    const nivelMemoria = () => {
        const porcentagem = calPorcentagem()
        if (0 == porcentagem || porcentagem < 25) {
            return "Amnésia"
        } else if (25 == porcentagem || porcentagem < 50) {
            return "Esquecido"
        } else if (50 == porcentagem || porcentagem < 75) {
            return "Bom"
        } else {
            return "Excelente"
        }
    }

    return (
        <div className="container-results" style={{conclusion}}>
            {conclusion() &&
                <div className="container-nivel">
                    <p>Seu nivel de memoria é:</p>
                    <h2>{nivelMemoria()}</h2>
                    <h3>Porcentagem: {Math.trunc(calPorcentagem())}%</h3>
                    <button onClick={() => reset()}>Reiniciar</button>
                </div>
                }
        </div>
    )
}

export default Results