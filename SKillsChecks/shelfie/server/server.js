require("dotenv").config();
const express = require("express");

const massive = require("massive");
const prodCtrl = require("./controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.get("/api/inventory", prodCtrl.getAll);
app.get("/api/inventory/:id", prodCtrl.getOne);
app.post("/api/product", prodCtrl.create);
// app.delete("/api/products/:id", prodCtrl.delete);
// app.put("/api/products/:id", prodCtrl.update); //desc=''

app.listen(SERVER_PORT, () => {
  console.log(`Listening to port: ${SERVER_PORT}`);
});
