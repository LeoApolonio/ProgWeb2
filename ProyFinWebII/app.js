const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

// sesiones
app.use(session({
    secret: 'secreto123',
    resave: false,
    saveUninitialized: true
}));

// solicitudes http
app.use(bodyParser.urlencoded({ extended: false }));

// motor de plantillas
app.set('view engine', 'ejs');

// conectar bd
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

// middleware
function verifyLogin(req, res, next) {
    if (!req.session.user) return res.redirect('/');
    next();
}

// ---------------------------
// LOGIN (INDEX)
// ---------------------------

app.get('/', (req, res) => {
    res.render('index', { error: null });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err) return res.render('index', { error: "Error en servidor" });

        if (results.length === 0)
            return res.render('index', { error: "Usuario no encontrado" });

        if (results[0].password !== password)
            return res.render('index', { error: "Contraseña incorrecta" });

        req.session.user = results[0];
        res.redirect('/panel');
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/'));
});

// ---------------------------
// PANEL CRUD
// ---------------------------

app.get('/panel', verifyLogin, (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) return res.send("Error al cargar usuarios.");
        res.render('panel', { users: results });
    });
});

// agregar usuario
app.post('/add', verifyLogin, (req, res) => {
    const { name, email, password, carrera, semestre } = req.body;

    const sql = `INSERT INTO users (name, email, password, carrera, semestre)
                 VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, [name, email, password, carrera, semestre], err => {
        if (err) return res.send("Error al agregar.");
        res.redirect('/panel');
    });
});

// editar
app.get('/edit/:id', verifyLogin, (req, res) => {
    db.query("SELECT * FROM users WHERE id = ?", [req.params.id], (err, results) => {
        if (err) return res.send("Error al buscar.");
        res.render('edit', { user: results[0] });
    });
});

// actualizar
app.post('/confirm-update/:id', verifyLogin, (req, res) => {

    const id = req.params.id;
    const { name, email, carrera, semestre, passwordConfirm } = req.body;

    db.query("SELECT password FROM users WHERE id = ?", [id], (err, results) => {
        if (err) return res.json({ ok: false, msg: "Error en servidor" });
        if (results.length === 0) return res.json({ ok: false, msg: "Usuario no encontrado" });

        if (results[0].password !== passwordConfirm)
            return res.json({ ok: false, msg: "Contraseña incorrecta" });

        const sql = `UPDATE users SET name=?, email=?, carrera=?, semestre=? WHERE id=?`;
        db.query(sql, [name, email, carrera, semestre, id], err2 => {
            if (err2) return res.json({ ok: false, msg: "Error al actualizar" });
            res.json({ ok: true });
        });
    });
});


// eliminar
app.post('/confirm-delete/:id', verifyLogin, (req, res) => {
    const { password } = req.body;
    const id = req.params.id;

    // 1. Leer el usuario real
    db.query("SELECT password FROM users WHERE id = ?", [id], (err, results) => {
        if (err) return res.json({ ok: false, msg: "Error en servidor" });
        if (results.length === 0) return res.json({ ok: false, msg: "Usuario no encontrado" });

        const realPass = results[0].password;

        if (realPass !== password)
            return res.json({ ok: false, msg: "Contraseña incorrecta" });

        // 2. Si coincide, eliminar
        db.query("DELETE FROM users WHERE id = ?", [id], err2 => {
            if (err2) return res.json({ ok: false, msg: "Error al eliminar" });
            res.json({ ok: true });
        });
    });
});


app.use(express.static('public'));

app.listen(3008, () => console.log("Servidor en http://localhost:3008"));
