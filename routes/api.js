var express = require('express');
var router = express.Router();
const carsCtrl = require('../controllers/api/cars')

router.get('/cars', carsCtrl.index)

router.get('/car/:id', carsCtrl.show)

router.post('/car', carsCtrl.create)

router.put('/car/:id', carsCtrl.update)

router.delete('/car/:id', carsCtrl.delete)


module.exports = router;