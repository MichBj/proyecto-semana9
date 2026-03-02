const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// TU ENDPOINT PROPIO (Requisito A del práctico)
app.get('/api/v1/datos', async (req, res) => {
  try {
    // Llamada a la API externa desde el servidor (Seguro)
    const response = await axios.get('https://api.ejemplo.com/data', {
      headers: { 'Authorization': `Bearer ${process.env.EXTERNAL_API_KEY}` }
    });

    // Transformación de datos (Requisito C)
    const datosNormalizados = response.data.map(item => ({
      titulo: item.title,
      descripcion: item.desc
    }));

    res.json(datosNormalizados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

app.listen(3000, () => console.log('Backend corriendo en puerto 3000'));