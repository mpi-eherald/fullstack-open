import Person from './Person'

const Persons = ({ persons, filterBy }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name
        .toLowerCase()
        .includes(filterBy)
        )
        .map(person => 
          <Person key={ person.name } person={ person } />
        )
      }
    </div>
  )
}

export default Persons