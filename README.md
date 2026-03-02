# Proyecto Semana 9-10: Consumo de API Externa mediante Backend Proxy + App Móvil

## Descripción
Este proyecto demuestra cómo consumir una API externa desde un backend Node.js/Express, exponer un endpoint propio y consumirlo desde una app móvil desarrollada con Expo React Native. El backend actúa como proxy seguro, ocultando llaves/tokens y normalizando la respuesta para la app.

## Estructura del Proyecto

```
proyecto-semana9/
├── backend/         # Servidor Node.js/Express (proxy seguro)
│   └── server.js
│   └── package.json
├── frontend/        # App móvil Expo React Native
│   ├── app/
│   │   └── RadioPlayer.js
│   │   └── ...
│   └── package.json
│   └── App.js
└── README.md
```

## API Externa Elegida
- **Radio Paradise**
- URL de streaming: http://stream.radioparadise.com/mp3-128
- Música independiente, gratis y siempre online.

## Cómo ejecutar el proyecto

### 1. Backend
```bash
cd backend
npm install
node server.js
```
El backend quedará escuchando en el puerto 3000.

### 2. Frontend (App Expo)
```bash
cd frontend
npm install
npx expo start
```
Escanea el QR con Expo Go en tu celular (ambos dispositivos deben estar en la misma red Wi-Fi).

### 3. Prueba la app
- Navega a la pantalla RadioPlayer.
- Pulsa reproducir y escucha la radio online.

## Endpoints del Backend
- `GET /api/v1/tv-en-linea`  → Devuelve un JSON normalizado con los datos de la radio.

## Evidencias
Agrega aquí tus capturas de pantalla mostrando el flujo de la app y la respuesta del backend.

## Autor
Michael Jose Bagui Muñoz

---

¿Dudas? Contacta al autor o revisa el código fuente para más detalles.
