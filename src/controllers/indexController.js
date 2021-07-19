const path = require("path");
const fs = require("fs");
let tareas = require("../data/tareas.json");
const { uuid } = require("uuidv4");

let crear = function (titulo, descripcion) {
  //agrego informacion al json parseado
  let nuevo = {
    //con los parametros creo una nueva tarea
    id: uuid(),
    titulo,
    descripcion,
  };
  tareas.push(nuevo); // le agrego una nueva tarea
  guardarTarea(tareas);
};
let guardarTarea = function (nuevo) {
  fs.writeFileSync("./src/data/tareas.json", JSON.stringify(nuevo), "utf-8");
};

module.exports = {
  index: (req, res) => {
    return res.render("home", { tareas });
  },
  add: (req, res) => {
    return res.render("agregar",{tareas});
  },
  crear: (req, res) => {
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    crear(titulo, descripcion);
    return res.redirect('/')
  },
  borrar: (req, res) => {
    let id = req.params.id;
    tareas = tareas.filter((tarea) => tarea.id !== id); // el mas +id es para convertir a number
    fs.writeFileSync("./src/data/tareas.json", JSON.stringify(tareas), "utf-8");
    return res.redirect('/')   
    },
};

