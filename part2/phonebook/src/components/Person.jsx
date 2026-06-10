const Person = ({ person, handleDeletePerson }) => {
  return (
    <div onClick={ handleDeletePerson } className="person">
      { person.name } | { person.number }
      <button className="personDeleteButton">delete</button>
    </div>
  )
}

export default Person