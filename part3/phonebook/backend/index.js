require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const Person = require('./models/person')
const app = express()

app.use(express.static('dist'))

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

morgan.token('body', (request, response) => {
  return JSON.stringify(request.body)
})

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let people = []

app.get('/info', (request, response) => {
  const requestTime = new Date()
  const peopleLength = Person.length

  response.send(`
    <p>Phonebook has info for ${ peopleLength } people</p>
    <p>${ requestTime }</p>
    `)
})

app.get('/api/people', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

app.get('/api/people/:id', (request, response, next) => {
  console.log(request.params.id)
  Person.findById(request.params.id)
    .then(person => {
    response.json(person)
    })
    .catch(error => next(error))
})

app.delete('/api/people/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/people', (request, response, error) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save()
    .then(savedPerson => {
    response.json(savedPerson)
    })
    .catch(error => next(error))
})

app.put('/api/people/:id', (request, response, next) => {
  const { name, number } = request.body

  Person.findById(request.params.id)
    .then(person => {
      if (!person) {
        return response.status(404).end()
      }

      person.number = number
      return person.save()
        .then((updatedPerson) => {
          response.json(updatedPerson)
        })
    })
    .catch(error => next(error))
})

app.use(unknownEndpoint)

app.use(errorHandler)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})