const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

// Configuración para parsear el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Rutas
app.use('/api', routes);  // Aquí se usa el prefijo "/api" para todas las rutas definidas

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
