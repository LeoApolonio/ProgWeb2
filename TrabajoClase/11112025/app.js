const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//Solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: false }));



//Configuración del motor de plantillas
app.set(`view engine`, `ejs`);

app.get('/', (req, res) => 
    {
        const consulta = 'SELECT * FROM node_crud.users;';
        db.query(consulta, (err, results) =>
            {
                if(err)
                    {
                        console.error(`Error al recuperar datos.`, err);
                        res.send(`Error, no se recuperan los datos.`);
                    }else
                        {
                            res.render(`index`,{users: results});
                        }

            });
    });

const db = mysql.createConnection(
            {
                host: '127.0.0.1',
                user: 'root',
                password: '',
                database: 'node_crud',
                port: 3306
            });

const port = 3008;
db.connect (error=>
    {
        if(error)
            {
                console.error(`Hubo un error en la conexion con el servidor\n`, err);
            }else
                {
                    console.log(`Conexion con servidor exitosa\n`);
                }
    });
app.listen(port, () => 
    {
        console.log(`Server http://localhost:${port}`);
    });