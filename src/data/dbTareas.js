const fs = require('fs');
const path = require('path')
module.exports = JSON.parse(fs.readFileSync(path.join(__dirname,'./tareas.json'),'utf-8'));




// const fs = require('fs'); const path = require('path') module.exports = JSON.parse(fs.readFileSync(path.join(__dirname,'products.json'),'utf-8')) 