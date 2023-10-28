const axios = require("./axios");

// const getActors = async () => {
//   const response = await axios.get("http://localhost:3000/api_php/server/API/getActors.php");
//   return response.data;
// };

const getActors = async (page) => {
  const response = await axios.get(
    "http://localhost:3000/api_php/server/API/getActors.php",
    {
      params: {
        page: page, // page number
      },
    }
  );
  return response.data;
};

const getActorById = async (actor_id) => {
  const response = await axios.get(
    `http://localhost:3000/api_php/server/API/getActorById.php?id=${actor_id}`
  );
  return response.data;
};

const createActor = async (actor) => {
  const response = await axios.post(
    "http://localhost:3000/api_php/server/API/createActor.php",
    actor
  );
  return response.data;
};

const updateActor = async (actor_id, first_name, last_name) => {
  const response = await axios.put(
    `http://localhost:3000/api_php/server/API/updateActor.php?id=${actor_id}`,
    { first_name, last_name }
  );
  return response.data;
};

const deleteActor = async (actor_id) => {
  const response = await axios.delete(
    `http://localhost:3000/api_php/server/API/deleteActor.php?id=${actor_id}`
  );
  return response.data;
};

module.exports = {
  getActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor,
};
