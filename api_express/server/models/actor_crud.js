const Actor = require("./Actor");
const ResponseDTO = require("./DataTransferObjects/ResponseDTO");
const ActorDTO = require("./DataTransferObjects/ActorDTO");

/**
 * @openapi
 * components:
 *   schemas:
 *     Actor:
 *       type: object
 *       properties:
 *         actor_id:
 *           type: int
 *           example: 28
 *         first_name:
 *           type: string
 *           example: Oscar
 *         last_name:
 *           type: string
 *           example: Menacho
 *         last_update:
 *           type: timestamp
 *           example: 2023-10-23 10:30:01
 */

const getAll = async (page, limit, totalPages) => {
  console.log(
    `Getting all the actors in page ${page}, limit: ${limit} actors...`
  );
  try {
    const offset = (page - 1) * limit;
    if (page <= totalPages) {
      const actors = await Actor.findAll({
        offset: offset,
        limit: limit,
      });
      const actorsDTO = actors.map(
        (actor) =>
          new ActorDTO(
            actor.actor_id,
            actor.first_name,
            actor.last_name,
            actor.last_update
          )
      );
      console.log(`Page: ${page}: All actors successfully obtained.`);
      return new ResponseDTO(
        "OK",
        actorsDTO,
        `Page: ${page}: All actors successfully obtained.`
      );
    } else {
      console.log(`Page: ${page}: No actors found on this page.`);
      return new ResponseDTO(
        "NO RECORDS",
        null,
        `Page: ${page}: No actors found on this page.`
      );
    }
  } catch (error) {
    console.error("Error getting all actors: ", error);
    return new ResponseDTO("FAILED", null, "Error getting all actors.");
  }
};

// const getAll = async () => {
//   console.log("Getting all the actors...");
//   try {
//     const actors = await Actor.findAll();
//     const actorsDTO = actors.map(
//       (actor) =>
//         new ActorDTO(
//           actor.actor_id,
//           actor.first_name,
//           actor.last_name,
//           actor.last_update
//         )
//     );
//     console.log("All actors successfully obtained.");
//     return new ResponseDTO(
//       "OK",
//       actorsDTO,
//       "All actors successfully obtained."
//     );
//   } catch (error) {
//     console.error("Error getting all actors: ", error);
//     return new ResponseDTO("FAILED", null, "Error getting all actors.");
//   }
// };

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
  console.log(`Creating a new actor: '${first_name} ${last_name}'...`);
  const nameRegExp = /^[A-Za-záéíóúüÁÉÍÓÚÜñÑ\s]{3,}$/;
  try {
    if (
      first_name === "" ||
      last_name === "" ||
      !nameRegExp.test(first_name) ||
      !nameRegExp.test(last_name)
    ) {
      console.log(
        `Error creating actor '${first_name} ${last_name}'. Check that the names are spelled correctly.`
      );
      return new ResponseDTO(
        "FAILED",
        null,
        `Error creating actor '${first_name} ${last_name}'. Check that the names are spelled correctly.`
      );
    } else {
      const newActor = await Actor.create({ first_name, last_name });
      console.log(
        `Actor '${first_name} ${last_name}' was created successfully.`
      );
      return new ResponseDTO(
        "OK",
        newActor,
        `Actor '${first_name} ${last_name}' was created successfully.`
      );
    }
  } catch (error) {
    console.error(
      `Error creating actor '${first_name} ${last_name}': ${error}`
    );
    return new ResponseDTO(
      "FAILED",
      null,
      `Error creating actor '${first_name} ${last_name}'.`
    );
  }
};

const update = async (actor_id, first_name, last_name) => {
  console.log(`Updating actor with ID: '${actor_id}'...`);
  const nameRegExp = /^[A-Za-záéíóúüÁÉÍÓÚÜñÑ\s]{3,}$/;
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
    if (
      first_name === "" ||
      last_name === "" ||
      !nameRegExp.test(first_name) ||
      !nameRegExp.test(last_name)
    ) {
      console.log(
        `Error updating actor with ID: '${actor_id}'. Check that the names are spelled correctly.`
      );
      return new ResponseDTO(
        "FAILED",
        null,
        `Error updating actor with ID: '${actor_id}'. Check that the names are spelled correctly.`
      );
    } else {
      actor.first_name = first_name;
      actor.last_name = last_name;
      await actor.save();
      console.log(`Actor with ID: '${actor_id}' updated successfully.`);
      return new ResponseDTO(
        "OK",
        actor,
        `Actor with ID: '${actor_id}' updated successfully.`
      );
    }
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

const totalRecords = async () => {
  const totalActors = await Actor.count();
  return totalActors;
};

module.exports = { getAll, getById, create, update, remove, totalRecords };
