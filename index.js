const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
let message = "";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  const devList = ["Backend", "Frontend", "Fullstack"];
  const analyticsList = ["Engenharia de dados", "Ciência de dados"];
  
  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", {
    titulo: "Blue",
    devList: devList,
    analyticsList: analyticsList,
    message,
  });
});

app.post("/subscription", (req, res) => {
  const { nome, email } = req.body;
  message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
