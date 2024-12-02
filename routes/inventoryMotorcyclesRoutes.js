const express = require('express');
const router = express.Router();
const { getAllInventoryMotorcycles } = require('../controllers/inventoryMotorcyclesController');

router.get('/inventoryMotorcycles', getAllInventoryMotorcycles);

module.exports = router;