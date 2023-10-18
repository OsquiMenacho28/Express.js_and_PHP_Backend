const axios = require("./axios");

const getActors = async () => {
  const response = await axios.get("/actors");
  return response.data.result;
};

const createActor = async (actor) => {
  const response = await axios.post("/actors", actor);
  return response.data;
};

module.exports = { getActors, createActor };
