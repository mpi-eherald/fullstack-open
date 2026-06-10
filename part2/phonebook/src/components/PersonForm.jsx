const PersonForm = (
  {
    handleAddPerson,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange
  }
) => {
  return (
    <form onSubmit={ handleAddPerson } className="formStyle">
    <div className="inputMargin">
      <input
        value={ newName }
        onChange={ handleNameChange }
        className="input"
        placeholder="type a name"
      />
    </div>
    <div>
        <input
          value={ newNumber }
          onChange={ handleNumberChange }
          className="input"
          placeholder="type a number"
        />
    </div>
    <div>
      <button type="submit" className="formAddButton">add</button>
    </div>
  </form>
  )
}

export default PersonForm