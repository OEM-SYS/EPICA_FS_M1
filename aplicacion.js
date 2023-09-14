//antes que nada hay que instalar node para ejecutar javascript del lado del servidor
//instalar npm que es el administrador de modulos de node

// instalar con npm : npm install nodemon -D
 //instalar con npm :npm install express cors morgan helmet

// instalar con npm :  npm install --save sequelize
// instalar con npm :  npm install --save mysql2
//ver https://sequelize.org/docs/v6/getting-started/
/*
package.json
============
ejecutar en la terminal   npm init   para crear el archivo package.json que contiene la iformacion  de nuestro proyecto
en package.json prestar atencion al script de inicio que puede ser TEST o DEV 
en test voy a enviar un mensaje de que TEST NO ESTA DISPONIBLE y lo llamo en una terminal con npm test
en DEV voy a colocar el nombre de este archivo  (aplicacion.js) y lo llamo en una terminal con npm run dev 

npm i nodemom -D  //instalar nodemon como devdependencies
al haber instalado nodemon como "devDependencies" (parametro -D)
en package.json aparece como tal
"devDependencies": {
    "nodemon": "^3.0.1"
  }


 luego modificar  el script de inicio dev para que arranque con nodemom llamando al servidor 
 y asi no tener que estar reiniciandolo constatemente cada vez que grabamos un archivo
 en dev anteriormente tenia "node aplicacion.js" ahora "nodemon aplicacion.js"
"scripts": {
    "dev": "nodemon aplicacion.js",
    "test": "echo \"Error: TEST NO ESTA DISPONIBLE\" && exit 1"
  }

  "type": "module",
  utiliazado para usar ecma script module

  ejs
  ====
  //instalar con npm :npm install ejs
  */

import express from 'express';//npm install express
import cors from 'cors';// npm install cors
import morgan from 'morgan';//npm install morgan
import helmet from 'helmet';//npm install helmet
import { tareaEnrutador } from './src/rutas/tarea.rutas.js';
import { iniciarBaseDatos } from './src/configuraciones/baseDatos.js';
import path from 'node:path';//ya existe es libreria de node para utilizar ejs
import { fileURLToPath } from 'node:url';//ya existe es libreria de node para utilizar ejs

const nombreArchivo = fileURLToPath(import.meta.url);//traemos el nombre de este archivo (aplicacion.js)
const nombreDirectorio = path.dirname(nombreArchivo);// traemos la ruta de la carpeta que contiene este archivo (aplicacion.js)
console.log(`url del archivo de inicio (aplicacion.js): ${nombreDirectorio}`);
console.log(`directorio del proyecto: ${nombreDirectorio}`);

const miaplicacion = express();

//middlewares son códigos que se ejecutan antes de que una petición HTTP llegue al manejador de rutas 
//o antes de que un cliente reciba una respuesta lo que da al framework la capacidad de ejecutar un 
//Script típico antes o después de la petición de un cliente

miaplicacion.use(express.json());//para poder manejar el formato de texto de intercambio de datosjsoon
miaplicacion.use(cors());
miaplicacion.use(morgan('dev'));
miaplicacion.use(helmet({
    contentSecurityPolicy: false
}));// para evitar problemas con urls externas permitir todas las url(false), sino habria que personalizar una por una


//express.static  para archivos estaticos a utilizar por el motor de plantillas en dir_raiz/src/publica 
miaplicacion.use(express.static(path.join(nombreDirectorio, "src", "publica")));

//donde buscar las vistas(views)   dir_raiz/src/vistas
miaplicacion.set('views', path.join(nombreDirectorio, "src", "vistas"));//si hubieren mas carpetas se colocarian mas parametro "src", "otra", "carpeta","vistas"
miaplicacion.set('view engine', 'ejs'); //motor de plantilla a utilizar (ejs)

const puerto = 3000;

miaplicacion.use('/', tareaEnrutador);

miaplicacion.listen(puerto, () => {
  //console.log(`Servidor escuchando en http://localhost:${puerto}`);
  console.log(`Servidor escuchando en http://localhost:${puerto}/tareas`);
  iniciarBaseDatos();
});