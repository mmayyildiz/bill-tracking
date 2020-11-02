const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { v4: uuid } = require('uuid');
const app = express()
const port = process.env.PORT || 8080
const payments = []

app.use(bodyParser.json())
app.use(cors())

app.get('/payments', (req, res) => res.send(payments))

app.get('/payments/:id', (req, res) => {
  const payment = payments.find(payment => payment.id === req.params.id)

  if (payment) {
    return res.send(payment)
  }

  res.status(404).end()
})

app.post('/payments', (req, res) => {

  const payment = {
    ...req.body,
    id: uuid(),
  }
  payments.push(payment)
  res.status(201).send(payment)
})

app.patch('/payments/:id', (req, res) => {
  const payment = payments.find(payment => payment.id === req.params.id)

  if (payment) {
    const index = payments.indexOf(payment)
    const updatedPayment = {
      ...payment,
      ...req.body,
      id: req.params.id,
    }
    payments[index] = updatedPayment
    return res.send(updatedPayment)
  }

  res.status(404).end()
})

app.delete('/payments/:id', (req, res) => {
    const payment = payments.find(payment => payment.id === req.params.id)

    if (payment) {
      const index = payments.indexOf(payment)
      payments.splice(index, 1)
      return res.status(204).end()
    }

    res.status(404).end()
})

app.listen(port, () => console.log(`API listening at http://localhost:${port}`))
