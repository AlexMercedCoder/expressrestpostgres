const { Router } = require("express");
const Rat = require("../models/ratModel");
const router = Router();

//Index Route
router.get("/", async (req, res) => {
  try {
    res.status(200).json(await Cat.all());
  } catch (error) {
    res.status(400).json({ error });
  }
});

//Show Route
router.get("/:id", async (req, res) => {
  try {
    res.status(200).json(await Cat.some({ id: req.params.id }));
  } catch (error) {
    res.status(400).json({ error });
  }
});

//Create Route
router.post("/", async (req, res) => {
  try {
    res.status(200).json(await Cat.create(req.body));
  } catch (error) {
    res.status(400).json({ error });
  }
});

//update Route
router.put("/:id", async (req, res) => {
  try {
    res.status(200).json(await Cat.updateById(req.params.id, req.body));
  } catch (error) {
    res.status(400).json({ error });
  }
});

//delete Route
router.delete("/:id", async (req, res) => {
  try {
    res.status(200).json(await Cat.deleteById(req.params.id));
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
