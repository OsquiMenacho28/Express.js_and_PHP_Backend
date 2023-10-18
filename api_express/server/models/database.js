const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "sakila_actors",
  port: 3310
});

sequelize
  .authenticate()
  .then(() => {
    console.log(
      `Successfully connected to the '${sequelize.getDatabaseName()}' Database`
    );
  })
  .catch((error) => {
    console.error("Database connection error: ", error);
  });

module.exports = sequelize;
