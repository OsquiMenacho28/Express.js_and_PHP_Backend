const axios = require("./axios");

const getActors = async (page) => {
  const response = await axios.get("/actors", {
    params: {
      page: page, // page number -> query parameter
    },
  });
  return response.data;
};

// const getActors = async () => {
//   const response = await axios.get("/actors");
//   return response.data.result;
// };

const getActorById = async (actor_id) => {
  const response = await axios.get("/actors/" + actor_id);
  return response.data.result;
};

const createActor = async (actor) => {
  const response = await axios.post("/actors", actor);
  return response.data;
};

const updateActor = async (actor_id, first_name, last_name) => {
  const response = await axios.put(
    "/actors/" + actor_id,
    first_name,
    last_name
  );
  return response.data;
};

const deleteActor = async (actor_id) => {
  const response = await axios.delete("/actors/" + actor_id);
  return response.data;
};

module.exports = {
  getActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor,
};
