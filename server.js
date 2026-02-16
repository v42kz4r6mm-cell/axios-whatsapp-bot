const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AXIOS WhatsApp Bot is running 🚀");
});
app.post("/demo", (req, res) => {
  const mensaje = req.body.message;

  let respuesta = "";

  if (!mensaje) {
    respuesta = "No recibí ningún mensaje.";
  } else if (mensaje.toLowerCase().includes("internet")) {
    respuesta = "Perfecto 👋 Tenemos planes desde $399. ¿En qué colonia te encuentras?";
  } else if (mensaje.toLowerCase().includes("precio")) {
    respuesta = "Nuestros precios empiezan desde $399 al mes.";
  } else {
    respuesta = "Gracias por escribirnos. ¿Buscas planes o soporte técnico?";
  }

  res.json({ reply: respuesta });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
