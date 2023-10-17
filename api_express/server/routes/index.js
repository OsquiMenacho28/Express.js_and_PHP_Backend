const { Router } = require("express");
const router = Router();

// GET ALL FROM ACTOR TABLE
router.get("/actors", (req, res) => {
  res.send("GET ALL");
});

// GET BY ID FROM ACTOR TABLE
router.get("/actors/:id", (req, res) => {
  res.json("GET BY ID");
});

// CREATE ACTOR IN ACTOR TABLE
router.post("/actors", (req, res) => {
  res.json("CREATE");
});

// UPDATE ACTOR IN ACTOR TABLE
router.put("/actors/:id", (req, res) => {
  res.json("UPDATE");
});

// DELETE ACTOR IN ACTOR TABLE
router.delete("/actors/:id", (req, res) => {
  res.json("DELETE");
});

module.exports = router;
