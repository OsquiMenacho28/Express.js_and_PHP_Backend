const { Router } = require("express");
const router = Router();
const actor_crud = require("../models/actor_crud");

// GET ALL FROM ACTOR TABLE
router.get("/actors", async (req, res) => {
  console.log("GET request received to get all actors.");
  const response = await actor_crud.getAll();
  res.json({
    method: "GetAll",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

// GET BY ID FROM ACTOR TABLE
router.get("/actors/:id", async (req, res) => {
  console.log("GET request received to get actors by id.");
  const response = await actor_crud.getById(req.params.id);
  res.json({
    method: "GetById",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

// CREATE ACTOR IN ACTOR TABLE
router.post("/actors", async (req, res) => {
  console.log("POST request received to create a new actor.");
  const response = await actor_crud.create(
    req.body.first_name,
    req.body.last_name
  );
  res.json({
    method: "Create",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

// UPDATE ACTOR IN ACTOR TABLE
router.put("/actors/:id", async (req, res) => {
  console.log("PUT request received to update an actor's record.");
  const response = await actor_crud.update(
    req.params.id,
    req.body.first_name,
    req.body.last_name
  );
  res.json({
    method: "Update",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

// DELETE ACTOR IN ACTOR TABLE
router.delete("/actors/:id", async (req, res) => {
  console.log("DELETE request received to delete an actor.");
  const response = await actor_crud.remove(req.params.id);
  res.json({
    method: "Delete",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

module.exports = router;
