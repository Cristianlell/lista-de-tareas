const path = require('path');
const fs = require('fs');
let tareas = require('../data/dbTareas');
const { uuid } = require('uuidv4');

let crear=function(titulo,descripcion){//agrego informacion al json parseado
  let nuevo={ //con los parametros creo una nueva tarea
      id:uuid(),
      titulo,
      descripcion,
  }
  tareas.push(nuevo) // le agrego una nueva tarea
  guardarTarea(tareas)

}
let guardarTarea= function(nuevo){
  fs.writeFileSync("./src/data/tareas.json", JSON.stringify(nuevo),'utf-8')
}

module.exports ={
    index : (req,res)=> {
        return res.render('home',{tareas})
    },
    add: (req,res)=> {
      return res.render('agregar',{title:'Nueva Tarea'})
    },
    recibido:(req,res)=>{
      let titulo = req.body.titulo;
      let descripcion = req.body.descripcion;
      crear(titulo,descripcion)
      console.log(tareas)      
      return res.render('home',{tareas})
    },
    edit: (req,res)=> {
      res.send('Hola esto es el metodo edit')
    },
    remove: (req,res,next)=> {
        let id = req.params.id;
        tareas = tareas.filter(tarea=> tarea.id !== id)// el mas +id es para convertir a number
        guardarTarea(tareas);
        res.redirect('/')
    }
}

