// server.js
const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());

// Ruta para obtener el desafío
app.get('/api/generate-challenge', (req, res) => {
    const challenge = crypto.randomBytes(32);
    res.json({ challenge: challenge.toString('base64') });
});

// Ruta para verificar la respuesta de autenticación
app.post('/api/verify-credential', (req, res) => {
    const { id, rawId, type, response } = req.body;
    // Aquí debes implementar la lógica para verificar la respuesta de autenticación
    // Esto puede incluir la verificación del desafío, la firma, etc.
    // Para este ejemplo, asumimos que la verificación es exitosa
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});