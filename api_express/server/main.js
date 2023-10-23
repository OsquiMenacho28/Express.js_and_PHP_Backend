const app = require("./app");
const sequelize = require("./models/database");
const { swaggerDocs: V1SwaggerDocs } = require("./swagger");

const port = 3000;

app.listen(port, () => {
  console.log(`🚀 Server running on port http://localhost:${port}`);
  V1SwaggerDocs(app, port);
});
