const Actor = require("./Actor");
const ResponseDTO = require("./DataTransferObjects/ResponseDTO");
const ActorDTO = require("./DataTransferObjects/ActorDTO");

const getAll = async () => {
  console.log("Getting all the actors...");
  try {
    const actors = await Actor.findAll();
    const actorsDTO = actors.map(
      (actor) =>
        new ActorDTO(
          actor.actor_id,
          actor.first_name,
          actor.last_name,
          actor.last_update
        )
    );
    console.log("All actors successfully obtained.");
    return new ResponseDTO(
      "OK",
      actorsDTO,
      "All actors successfully obtained."
    );
  } catch (error) {
    console.error("Error getting all actors: ", error);
    return new ResponseDTO("FAILED", null, "Error getting all actors.");
  }
};

const getById = async (actor_id) => {
  console.log(`Getting actor by ID: '${actor_id}'...`);
  try {
    const actor = await Actor.findByPk(actor_id);
    if (!actor) {
      console.log(`Actor with ID: '${actor_id}' doesn't exist.`);
      return new ResponseDTO(
        "FAILED",
        null,
        `Actor with ID: '${actor_id}' doesn't exist.`
      );
    }
    console.log(`Actor with ID: '${actor_id}' successfully obtained.`);
    return new ResponseDTO(
      "OK",
      actor,
      `Actor with ID: '${actor_id}' successfully obtained.`
    );
  } catch (error) {
    console.error(`Error getting actor with ID: '${actor_id}': ${error}`);
    return new ResponseDTO(
      "FAILED",
      null,
      `Error getting actor with ID: '${actor_id}'.`
    );
  }
};

const create = async (first_name, last_name) => {
  console.log(`Creating a new actor: '${(first_name, last_name)}'...`);
  try {
    const newActor = await Actor.create({ first_name, last_name });
    console.log(`Actor '${(first_name, last_name)}' was created successfully.`);
    return new ResponseDTO(
      "OK",
      newActor,
      `Actor '${(first_name, last_name)}' was created successfully.`
    );
  } catch (error) {
    console.error(
      `Error creating actor '${(first_name, last_name)}': ${error}`
    );
    return new ResponseDTO(
      "FAILED",
      null,
      `Error creating actor '${(first_name, last_name)}'.`
    );
  }
};

const update = async (actor_id, first_name, last_name) => {
  console.log(`Updating actor with ID: '${actor_id}'...`);
  try {
    const actor = await Actor.findByPk(actor_id);
    if (!actor) {
      console.log(`Actor with ID: '${actor_id}' doesn't exist.`);
      return new ResponseDTO(
        "FAILED",
        null,
        `Actor with ID: '${actor_id}' doesn't exist.`
      );
    }
    actor.first_name = first_name;
    actor.last_name = last_name;
    await actor.save();
    console.log(`Actor with ID: '${actor_id}' updated successfully.`);
    return new ResponseDTO(
      "OK",
      actor,
      `Actor with ID: '${actor_id}' updated successfully.`
    );
  } catch (error) {
    console.error(`Error updating actor with ID: '${actor_id}': ${error}`);
    return new ResponseDTO(
      "FAILED",
      null,
      `Error updating actor with ID: '${actor_id}'.`
    );
  }
};

const remove = async (actor_id) => {
  console.log(`Deleting actor with ID: '${actor_id}'...`);
  try {
    const actor = await Actor.findByPk(actor_id);
    if (!actor) {
      console.log(`Actor with ID: '${actor_id}' doesn't exist.`);
      return new ResponseDTO(
        "FAILED",
        null,
        `Actor with ID: '${actor_id}' doesn't exist.`
      );
    }
    await actor.destroy();
    console.log(`Actor with ID: '${actor_id}' successfully removed.`);
    return new ResponseDTO(
      "OK",
      actor,
      `Actor with ID: '${actor_id}' successfully removed.`
    );
  } catch (error) {
    console.error(`Error removing actor with ID: '${actor_id}': ${error}`);
    return new ResponseDTO(
      "FAILED",
      null,
      `Error removing actor with ID: '${actor_id}'.`
    );
  }
};

module.exports = { getAll, getById, create, update, remove };
