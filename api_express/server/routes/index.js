const { Router } = require("express");
const router = Router();
const actor_crud = require("../models/actor_crud");

/**
 * @openapi
 * /apiexpress/actors:
 *   get:
 *     tags:
 *       - Actors
 *     description: This HTTP Request will return the first pagination page with the first 10 Actors registered in the Database.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Actor"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

/**
 * @openapi
 * /apiexpress/actors/:
 *   get:
 *     tags:
 *       - Actors
 *     description: This HTTP Request will return a certain pagination page with 10 Actors registered in the Database.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Actor Pagination Page
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Actor"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

// GET ALL FROM ACTOR TABLE WITH PAGINATION
router.get("/actors", async (req, res) => {
  console.log("GET request received to get actors.");
  const page = parseInt(req.query.page) || 1; // Page number, default 1
  const limit = 10; // Actors per page
  const totalActors = await actor_crud.totalRecords();
  const totalPages = Math.ceil(totalActors / limit); // Total Pages
  const response = await actor_crud.getAll(page, limit, totalPages);
  res.json({
    method: "GetAll",
    code: response.code,
    result: response.result,
    message: response.message,
    meta: {
      currentPage: page,
      limit: limit,
      totalPages: totalPages,
      totalActors: totalActors,
    },
  });
});

// GET ALL FROM ACTOR TABLE
// router.get("/actors", async (req, res) => {
//   console.log("GET request received to get all actors.");
//   const response = await actor_crud.getAll();
//   res.json({
//     method: "GetAll",
//     code: response.code,
//     result: response.result,
//     message: response.message,
//   });
// });

/**
 * @openapi
 * /apiexpress/actors/{id}:
 *   get:
 *     tags:
 *       - Actors
 *     description: This HTTP request will return the actor record (if it exists in the Database) with the given ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Actor ID
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Actor"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

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

/**
 * @openapi
 * /apiexpress/actors:
 *   post:
 *     tags:
 *       - Actors
 *     description: This HTTP request will create a new actor and register it in the Database.
 *     requestBody:
 *         description: A JSON object containing Actor information
 *         content:
 *            application/json:
 *                schema:
 *                   $ref: '#/components/schemas/Actor'
 *                example:
 *                   first_name: Midory
 *                   last_name: Vacaflores
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Actor"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

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

/**
 * @openapi
 * /apiexpress/actors/{id}:
 *   put:
 *     tags:
 *       - Actors
 *     description: This HTTP request will update the data of an actor registered in the Database.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Actor ID
 *     requestBody:
 *       description: A JSON object containing Actor information
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Actor'
 *           example:
 *              first_name: Gabriel
 *              last_name: Menacho
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Actor"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

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

/**
 * @openapi
 * /apiexpress/actors/{id}:
 *   delete:
 *     tags:
 *       - Actors
 *     description: This HTTP request will delete an actor registered in the Database.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Actor ID
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Actor"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

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
