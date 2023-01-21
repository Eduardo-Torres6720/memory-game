import { useEffect, useState } from 'react'
import './App.css'
import GeneratorCard from './components/GeneratorCard'
import Results from './components/Results'
import { HandleCards } from './CardsPlanets'
import NavBar from './components/NavBar'

function App() {
  const [cardTrue, setCardTrue] = useState(true)
  const [cardPlanets, setCardPlanets] = useState()
  const [planetsTurned, setPlanetsTurned] = useState([])
  const [amounts, setAmounts] = useState(0)
  const [time, setTime] = useState(-6)
  
  const timeMemory = () => {
    setTimeout(() => {
      setCardTrue(false)
    }, 6000);

  }
  
  const shuffler = () => {
    const pairsCard = HandleCards()

    let length = pairsCard.length

    pairsCard.map( () => {
      let randomNumber = Math.floor(Math.random() * length--)
      let randomValue = pairsCard[randomNumber]
      pairsCard[randomNumber] = pairsCard[length]
      pairsCard[length] = randomValue
      
    })
    timeMemory()
    
    setCardPlanets(pairsCard)

  }

  const conclusion = () => {
    if (planetsTurned.length == 12) {
        return true
    } else {
        return false
    }
  }

  useEffect(() => {
    shuffler()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (conclusion() == false) {
        setTime((time) => time + 1)
      } else {
        return
      }
    }, 1000)

  }, [time])
  
  const moves = (amounts) => {
    amounts++
    setAmounts(amounts)

  }

  const reset = () => {
    shuffler()
    setCardTrue(true)
    setPlanetsTurned([])
    setAmounts(0)
    setTime(-6)
  }

  const handleCanTurnCard = (arrayCards) => {
    if (arrayCards.length % 2 == 0 && arrayCards[arrayCards.length - 1].id != arrayCards[arrayCards.length - 2].id) {
      return true
    } else {
      return false
    } 
  }

  const handlerId = (planet, index) => {
    if (cardTrue == false) {
      if (planet.turn == true ) {
          return 
        } else if (planetsTurned[0] ? handleCanTurnCard(planetsTurned) : false) {
          return
        }
      planet.turn = true
      const cardTurned = [... planetsTurned, {
        planet: planet.planet,
        id: planet.id,
        index: index,
        turn: planet.turn
      }]

      setPlanetsTurned(cardTurned)
      moves(amounts)

      const length = cardTurned.length

      if (handleCanTurnCard(cardTurned)) {

        setTimeout(() => {

          cardPlanets[cardTurned[length - 2].index].turn = false
          cardPlanets[cardTurned[length - 1].index].turn = false
  
          planetsTurned.splice(length - 2, 2)
          const pairs = planetsTurned

          setPlanetsTurned(pairs)
          
        }, 2000);

      }
    }

  }

  return (
    <div className="App">
      <NavBar amounts={amounts}
      time={time}/>
      
      <GeneratorCard cardTrue={cardTrue} 
      cardPlanets={cardPlanets} 
      handlerId={handlerId}/>
      
      <Results amounts={amounts}
      conclusion={conclusion}
      reset={reset}/>
    </div>
  )
}

export default App
