import express from "express"; //Importamos Express
const app = express(); //Iniciamos Express

import {
  conectar,
  agregarConatcto,
  mostrarContactos,
  borrarContacto,
} from "./src/mysql_conector.js"; //conector a la base de datos (se coloca la extension del archivo".js")

//Iniciamos servidor
app.listen(8000, () => {
  console.log("llamada al servidor");
});

//Configuracion de pug
// Se indica el directorio donde se almacenarán las plantillas
app.set("views", "./vistas");
// Se indica el motor del plantillas a utilizar
app.set("view engine", "pug");

//configuracion de archivos estaticos
app.use(express.static("./vistas"));
app.use(express.static("./src"));
app.use(express.static("./css"));

//RUTA
app.get("/", function (req, res) {
  /* res.send("aplicacion"); */
  // conectar();//solo uina vez para priobar si la dejo funcionando siempre se conecta una y oteravez a la base de datos y eso genera comflictos
  let todos = mostrarContactos(); //mostrar los coantactos
  res.render("index", {
    titulo: "Aplicación de contacto",
    dato: "EScrito desde pug",
    contactos: todos,
  });
});

app.get("/agregar/:nombre/:numero", function (req, res) {
  let nombre = req.params.nombre;
  let numero = req.params.numero;
  agregarConatcto(nombre, numero);
  res.redirect("/");

  console.log(nombre, numero);
});

app.get("/borrar/:id", function (req, res) {
  let id = req.params.id;
  borrarContacto(id);
  res.redirect("/");
});
