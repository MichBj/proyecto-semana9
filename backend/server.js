const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// REQUISITO A: Tu propio endpoint para la App móvil
app.get('/api/v1/tv-en-linea', (req, res) => {
  try {
    // REQUISITO C: Normalización del JSON (JSON propio)
    const respuestaCanal = {
      id: "radio-paradise-01",
      nombre: "Radio Paradise",
      categoria: "Música Online",
      url_streaming: "http://stream.radioparadise.com/mp3-128",
      logo: "https://radioparadise.com/favicon-192.png",
      descripcion: "Emisora de música independiente, gratis y siempre online."
    };

    res.json({
      status: "success",
      data: respuestaCanal
    });
  } catch (error) {
    // Manejo de errores centralizado (Requisito C)
    res.status(500).json({ error: "No se pudo obtener la señal de TV" });
  }
});

app.listen(3000, () => console.log("Backend de TV corriendo en puerto 3000"));