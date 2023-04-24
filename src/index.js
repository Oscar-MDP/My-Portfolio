const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql2");
const path = require("path");
const myConnection = require("express-myconnection");

const app = express();
const port = 3000;
// Importing routes
const productsRoutes = require("./routes/productsRoutes");

// Settings
app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      port: 3306,
      password: "123456789",
      database: "products",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", productsRoutes);

// Static file

// init server
app.listen(app.get("port"), () => {
  console.log("Servidor iniciado en el puerto 3000");
});
