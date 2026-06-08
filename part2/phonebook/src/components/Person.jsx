const Person = ({ person, handleDeletePerson }) => {
  return (
    <div onClick={ handleDeletePerson }>
      { person.name } | { person.number }
      <button>delete</button>
    </div>
  )
}

export default Person