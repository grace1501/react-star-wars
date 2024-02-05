import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import StarShipCard from './StarShipCard'

function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    async function getStarships() {
      try {
        const response = await axios.get("https://swapi.dev/api/starships")

        setStarships(response.data.results)

      } catch(err) {
        console.log(err)
      }
    }

    getStarships();

  }, [])

  return (
    <>
      <h1>Starships</h1>
      <p>
        {starships ? 
        starships.map((item) => {
          return (<StarShipCard starship={item} />)
        })
      : "Loading..."}
      </p>
    </>
  )
}

export default App
