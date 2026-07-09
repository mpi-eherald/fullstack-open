import Person from './Person'

const People = ({ people, filterBy, handleDelete }) => {
  return (
    <div className="people">
      {people
        .filter((person) =>
          person
            .name
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

export default People