// importar mysql
import mysql from "mysql";

//crear la conexion
const conector = mysql.createConnection({
  host: "localhost",
  user: "alejandro",
  password: "123456",
  database: "agenda_contacto",
});

const conectar = () => {
  conector.connect((err) => {
    if (err) throw err;
    console.log("conectados");
  });
};

//AGREGAR
const agregarConatcto = (nombre, numero) => {
  const sql = `INSERT INTO agenda (id_agenda, nombre_contacto, numero_contacto) VALUES (${null}, "${nombre}", ${numero})`;
  conector.query(sql, function (err, result, filed) {
    if (err) throw err;
    console.log(result);
  });
};

//MOSTRAR
let todos;
const mostrarContactos = () => {
  const sql = `SELECT * FROM agenda`;
  conector.query(sql, function (err, result, filed) {
    if (err) throw err;
    todos = result;
  });
  return todos;
};

//BORRAR
const borrarContacto = (id) => {
  const sql = `DELETE FROM agenda WHERE id_agenda = ${id}`;
  conector.query(sql, function (err, result, filed) {
    if (err) throw err;
  });
};

export { conectar, agregarConatcto, mostrarContactos, borrarContacto };
