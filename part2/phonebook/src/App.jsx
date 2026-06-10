import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterBy, setFilterBy] = useState('')
  const [message, setMessage] = useState(null)

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
      const updateNumber = window.confirm(`${newName} is already in the phonebook. Update phone number?`)

      if (updateNumber) {
        const personObject = {
          ...foundMatch,
          number: newNumber
        }

        personService
          .update(personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
            setMessage(`${newName} successfully updated`)
            setTimeout(() => {
              setMessage(null)
            }, 3000)
            setNewName('')
            setNewNumber('')
          })
      } else {
        setNewName('')
        setNewNumber('')
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setMessage(`${newName} successfully added`)
          setTimeout(() => {
            setMessage(null)
          }, 3000)
          setNewName('')
          setNewNumber('')
        })
    }
  }


  const handleDelete = (id) => {
    const deletePerson = persons.find((person) => person.id === id).name
    const deleteConfirmed = window.confirm(`Delete ${deletePerson}?`)
    
    if (deleteConfirmed) {
    personService
      .deleteContact(id)
      .then(returnedPerson => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
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
    <div className='mainBody'>
      <h1>phonebook</h1>

      <Notification message={ message }/>

      <h2>add new</h2>

      <PersonForm
        handleAddPerson={ handleAddPerson }
        newName={ newName }
        handleNameChange={ handleNameChange }
        newNumber={ newNumber }
        handleNumberChange={ handleNumberChange }
      />

      <h2>numbers</h2>

      <Filter
        filterBy={ filterBy }
        handleFilterBy={ handleFilterBy }
      />

      <Persons
        persons={ persons }
        filterBy={ filterBy }
        handleDelete={ handleDelete }
      />

    </div>
  )
}

export default App
