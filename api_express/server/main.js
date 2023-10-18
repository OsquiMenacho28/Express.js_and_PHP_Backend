const app = require("./app");
const sequelize = require('./models/database');
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});