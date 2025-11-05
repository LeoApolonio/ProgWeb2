const express = require('express');
const port = 3025;
const app = express();

app.get("/", (req,res)=>
{
	res.send("Hola mundo si");
});

app.listen(port);

app.listen(port,()=>
{
	console.log(`Server: http://localhost:${port}`)
});
