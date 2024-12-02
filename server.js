const express = require('express');
const app = express();
require('dotenv').config();
const motorcycleRoutes = require('./routes/motorcycleRoutes');
const inventoryMotorcyclesRoutes = require('./routes/inventoryMotorcyclesRoutes');
const motorcycleTypesRoutes = require('./routes/motorcycleTypesRoutes');
const morgan = require('morgan');
const cors = require('cors'); 

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors()); 
app.use(motorcycleRoutes);
app.use(inventoryMotorcyclesRoutes);
app.use(motorcycleTypesRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});