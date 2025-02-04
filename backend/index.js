const express = require("express");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const app = express(); // la constante app tendr� ahora todo el funcionamiento del servidor
const { mongoose } = require("./database"); // no se quiere todo el archivo sino la conexi�n
/** * Se crea una REST API, es la manera de decirle al servidor que reciba y env�e datos  */
// Configuraciones
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json()); // m�todo que ayuda a convertir el c�digo para que el servidor pueda entender lo que viene del cliente.

// rutas de nuestro servidor

// Define authentication routes
app.use("/auth", authRoutes);

// Define user routes
app.use("/user", userRoutes);

// Iniciando el servidor
app.listen(app.get("port"), () => {
  // esta es una mejor manera de configurar el puerto
  console.log("Server activo en el puerto", app.get("port"));
});
