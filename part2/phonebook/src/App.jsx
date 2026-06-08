import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterBy, setFilterBy] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleDelete = (id) => {
    console.log(id)
    personService.deleteContact(id)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
        handleDelete={ handleDelete }
      />

    </div>
  )
}

export default App
