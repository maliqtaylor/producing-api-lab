const Car = require('../../models/car')

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteCar
}

function index(req, res) {
  Car.find({})
    .then((cars) => {
      res.status(200).json(cars)
    })
}

function show(req, res) {
  Car.findById(req.params.id)
    .then((car) => {
      res.status(200).json(car)
    })
}

function create(req, res) {
  Car.create(req.body)
    .then((car) => {
      res.status(201).json(car)
    })
}

function update(req, res) {
  Car.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((car) => {
      res.status(200).json(car)
    })
}

function deleteCar(req, res) {
  Car.findByIdAndDelete(req.params.id)
    .then((car) => {
      res.status(200).json(car)
    })
}