require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./src/middlewares/logger');
const menuRoutes = require('./src/routes/menuRoutes');
const notFound = require('./src/middlewares/notFound');
const errorHandler = require('./src/middlewares/errorHandler');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.use('/menu', menuRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});