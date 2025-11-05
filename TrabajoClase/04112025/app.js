const express = require('express');
const port = 3025;
const app = express();
const pagesRoute = require("./routes/pages.js");
const path = require('path');

app.use('/', pagesRoute);
app.use('/', (req, res) =>
{
    res.redirect('/page1');
});

app.use(express.static('public'));

app.get("/", (req,res)=>
{
	res.send("Hola mundo si");
});

app.listen(port);

app.listen(port,()=>
{
	console.log(`Server: http://localhost:${port}`)
});