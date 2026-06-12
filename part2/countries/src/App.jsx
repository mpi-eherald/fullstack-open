import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Filter from './components/Filter'
import axios from 'axios'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filterBy, setFilterBy ] = useState('')

  const handleFilterBy = (event) => {
    event.preventDefault()

    setFilterBy(event.target.value)
  }

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <>
    <Filter filterBy={ filterBy } handleFilterBy={ handleFilterBy } />
    <Countries countries={ countries } filterBy={ filterBy } />
    </>
  )
}

export default App
