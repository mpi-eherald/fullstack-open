const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log(`
***
please provide: <password> <add-name> <add-number> or
just <password> to list existing contacts
***`)
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://eherald_db_user:${password}@phonebook.23kbit4.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=phonebook`

mongoose.set('strictQuery', false)

mongoose.connect(url, { family: 4 })

const personsSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personsSchema)

if (process.argv.length === 3) {
  console.log('phonebook:')
  Person
    .find({})
    .then(result => {
      result.forEach(person => {
        console.log(person.name, person.number)
      })
      mongoose.connection.close()
    })

} else {
  const person = new Person({
    name,
    number,
  })

  person
    .save()
    .then(result => {
      console.log(`added ${name}, number ${number} to phonebook`)
      mongoose.connection.close()
    })
}