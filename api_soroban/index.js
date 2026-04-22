const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

const CONTRACT_ID = "CCS6E6FGOF26SORMBEVKYHBWZCDNA4G5DXVJZDRIQRT4K2SK6VNMZF3R";

// SUMAR
app.get("/sumar", (req, res) => {
  const { a, b } = req.query;

  const comando = `soroban contract invoke \
--id ${CONTRACT_ID} \
--source usuario \
--network testnet \
-- \
sumar --a ${a} --b ${b}`;

  exec(comando, (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr);
    res.send({ resultado: stdout.trim() });
  });
});

// MULTIPLICAR
app.get("/multiplicar", (req, res) => {
  const { a, b } = req.query;

  const comando = `soroban contract invoke \
--id ${CONTRACT_ID} \
--source usuario \
--network testnet \
-- \
multiplicar --a ${a} --b ${b}`;

  exec(comando, (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr);
    res.send({ resultado: stdout.trim() });
  });
});

// POTENCIA
app.get("/potencia", (req, res) => {
  const { base, exp } = req.query;

  const comando = `soroban contract invoke \
--id ${CONTRACT_ID} \
--source usuario \
--network testnet \
-- \
potencia --base ${base} --exp ${exp}`;

  exec(comando, (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr);
    res.send({ resultado: stdout.trim() });
  });
});

app.listen(3000, () => {
  console.log("API corriendo en http://localhost:3000");
});