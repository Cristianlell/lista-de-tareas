const express = require('express');
const router = express.Router();
const {index,add,recibido,remove} = require('../controllers/indexController.js')


 //index
router.get('/',index)
router.get('/agregar',add)
router.post('/',recibido)
router.get('/remove/:id',remove)

module.exports=router
