// CS 546 - Lab 7
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require("express");
const router = express.Router();
const data = require("../data");
const animalData = data.animals;

router.get("/", async (req, res) => {
	try {
		const animalList = await animalData.getAll();
		res.json(animalList);
	} catch (e) {
		res.status(500).send();
	}
});

router.post("/", async (req, res) => {
	try {
		const data = req.body;
		const result = await animalData.create(data.name, data.animalType, data.likes);
		res.json(result);
		res.status(200).json({ message: "New animal posted!" });
	} catch (e) {
		res.status(400).json({ error: e });
	}
});

router.get("/:id/", async (req, res) => {
	try {
		const result = await animalData.get(req.params.id);
		res.json(result);
	} catch (e) {
		res.status(404).json({ error: e });
	}
});

router.put("/:id/", async (req, res) => {
	try {
		await animalData.get(req.params.id);
	} catch (e) {
		res.status(404).json({ error: e });
	}

	try {
		const result = await animalData.rename(req.params.id, req.body);
		res.json(result);
	} catch (e) {
		res.status(400).json({ error: e });
	}
});

router.delete("/:id/", async (req, res) => {
	try {
		await animalData.remove(req.params.id);
	} catch (e) {
		res.status(404).json({ error: e });
	}
});
module.exports = router;
