const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const app = require("./app");

// Metadata info about our API
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "api_express",
      version: "1.0.0",
    },
  },
  apis: ["./routes/index.js", "./models/actor_crud.js"],
};

// Documentation in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our Docs
const swaggerDocs = (app, port) => {
  app.use("/apiexpress/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get("/apiexpress/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `📄 Version 1 Docs are Available at http://localhost:${port}/apiexpress/docs`
  );
};

module.exports = { swaggerDocs };
