import Person from './Person'

const Persons = ({ persons, filterBy, handleDelete }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name
        .toLowerCase()
        .includes(filterBy)
        )
        .map(person => 
          <Person key={ person.name } person={ person } handleDeletePerson={ () => handleDelete(person.id) } />
        )
      }
    </div>
  )
}

export default Persons