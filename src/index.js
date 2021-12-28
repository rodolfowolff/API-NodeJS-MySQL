const express = require('express');
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const clientesRouter = require('./routes/clientes.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/cliente', clientesRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
