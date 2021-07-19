const express = require('express');
const router = express.Router();
const {index,add,crear,borrar} = require('../controllers/indexController.js')


 //index
router.get('/',index)
router.get('/agregar',add)
router.post('/agregar',crear)
router.get('/borrar/:id',borrar)

module.exports=router
