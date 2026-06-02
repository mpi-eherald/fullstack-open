import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterBy, setFilterBy] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()

    const foundMatch = persons.find((person) => person.name === newName)

    if (foundMatch) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleFilterBy = (event) => {
    event.preventDefault()

    setFilterBy(event.target.value)
  }

  return (
    <div>
      <h2>phonebook</h2>

      <Filter
        filterBy={ filterBy }
        handleFilterBy={ handleFilterBy }
      />

      <h2>add new</h2>

      <PersonForm
        handleAddPerson={ handleAddPerson }
        newName={ newName }
        handleNameChange={ handleNameChange }
        newNumber={ newNumber }
        handleNumberChange={ handleNumberChange }
      />

      <h2>numbers</h2>

      <Persons
        persons={ persons }
        filterBy={ filterBy }
      />

    </div>
  )
}

export default App
