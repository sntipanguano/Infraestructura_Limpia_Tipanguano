const express = require("express");
const bookRoutes = require("./interfaces/routes/bookRoutes");
const authorRoutes = require("./interfaces/routes/authorRoutes");

const app = express();
app.use(express.json());

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

// Agregar la ruta raíz para evitar "Cannot GET /"
app.get("/", (req, res) => {
    res.send("Bienvenido a la API de Libros y Autores");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
