import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import People from './components/People'
import personService from './services/people'
import Notification from './components/Notification'

const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterBy, setFilterBy] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPeople => {
        setPeople(initialPeople)
      })
  }, [])

  const handleAddPerson = (event) => {
    event.preventDefault()

    const foundMatch = people.find((person) => person.name === newName)

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
            setPeople(people.map(person => person.id === returnedPerson.id ? returnedPerson : person))
            setMessage(`${newName} successfully updated`)
            setTimeout(() => {
              setMessage(null)
            }, 3000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setMessage(`${newName} is not present on the server`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setPeople(people.filter(person => person.name !== newName))
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
          setPeople(people.concat(returnedPerson))
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
    const deletePerson = people.find((person) => person.id === id).name
    const deleteConfirmed = window.confirm(`Delete ${deletePerson}?`)
    
    if (deleteConfirmed) {
    personService
      .deleteContact(id)
      .then(returnedPerson => {
        setPeople(people.filter(person => person.id !== id))
      })
      .catch(error => {
        setMessage(`${deletePerson} has already been removed from the server`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setPeople(people.filter(person => person.name !== deletePerson))
        setNewName('')
        setNewNumber('')
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

      <People
        people={ people }
        filterBy={ filterBy }
        handleDelete={ handleDelete }
      />

    </div>
  )
}

export default App
