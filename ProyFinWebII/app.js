const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// Sesiones
app.use(session({
    secret: 'secreto123',
    resave: false,
    saveUninitialized: true
}));

// Solicitudes http
app.use(bodyParser.urlencoded({ extended: false }));

// Plantillas
app.set('view engine', 'ejs');

// Conectar BD
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'node_crud',
    port: 3306
});

db.connect(err => {
    if (err) console.error('Error BD', err);
    else console.log('Conectado a MySQL');
});

// Verificación de Login (Middleware)
function verifyLogin(req, res, next) {
    if (!req.session.user) return res.redirect('/');
    next();
}

// Login
app.get('/', (req, res) => {
    res.render('index', { error: null });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err) return res.render('index', { error: "Error en servidor" });
        if (results.length === 0) return res.render('index', { error: "Usuario no encontrado" });
        if (results[0].password !== password) return res.render('index', { error: "Contraseña incorrecta" });

        req.session.user = results[0];
        res.redirect('/panel');
    });
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/'));
});

// Consulta de "panel" a la tabla "lista"
app.get('/panel', verifyLogin, (req, res) => {
    const sql = `
        SELECT id, name, email, carrera, semestre,
               DATE_FORMAT(fecha_registro, '%d/%m/%Y %H:%i') AS fecha_registro
        FROM lista
        ORDER BY id ASC
    `;
    db.query(sql, (err, results) => {
        if (err) return res.send("Error al cargar registros.");
        res.render('panel', {
            users: results,
            user: req.session.user
        });
    });
});

// Agregar nuevo registro
app.post('/add', verifyLogin, (req, res) => {
    const { name, email, carrera, semestre } = req.body;

    const sql = `INSERT INTO lista (name, email, carrera, semestre)
                 VALUES (?, ?, ?, ?)`;

    db.query(sql, [name, email, carrera, semestre], err => {
        if (err) return res.send("Error al agregar registro.");
        res.redirect('/panel');
    });
});

// Actualizar registro
app.post('/confirm-update/:id', verifyLogin, (req, res) => {
    const id = req.params.id;
    const { name, email, carrera, semestre } = req.body;

    const sql = `UPDATE lista SET name=?, email=?, carrera=?, semestre=? WHERE id=?`;
    db.query(sql, [name, email, carrera, semestre, id], err => {
        if (err) return res.json({ ok: false, msg: "Error al actualizar" });
        res.json({ ok: true });
    });
});

// Eliminar registro
app.post('/confirm-delete/:id', verifyLogin, (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM lista WHERE id = ?", [id], err => {
        if (err) return res.json({ ok: false, msg: "Error al eliminar" });
        res.json({ ok: true });
    });
});

app.use(express.static('public'));

app.listen(3008, () => console.log("Servidor en http://localhost:3008"));
