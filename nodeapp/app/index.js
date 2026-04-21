const app = require("express")();
const os = require("os");

// Obtenemos el hostname del sistema (en Docker es el ID del contenedor)
const containerName = os.hostname();

app.get("/", (req, res) => {
    res.send(`<h1>Hello from ${containerName}</h1>`);
});

app.listen(9999, () => console.log(`Container ${containerName} is listening on 9999`));