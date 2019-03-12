// CS 546 - Lab 7
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require("express");
const router = express.Router();
const data = require("../data");
const postData = data.posts;

router.get("/:id", async (req, res) => {
	try {
		const post = await postData.getPostById(req.params.id);
		res.json(post);
		res.status(200).json({ message: "Got post successfully!" });
	} catch (e) {
		res.status(404).json({ message: "Post not found!" });
	}
});

router.get("/", async (req,res) => {
	try {
		const postList = await postData.getAllPosts();
		res.json(postList);
	} catch (e) {
		res.status(400).json({ error: e });
	}
});

router.post("/", async (req, res) => {
	try {
		const data = req.body;
		const result = await posts.addPost(data.title, data.author, data.content);
		res.json(result);
		res.status(200).json({ message: "Post added successfully!" });
	} catch (e) {
		res.status(400).json({ error: e });
	}
});

router.put("/:id", async (req, res) => {
	try {
		await posts.getPostById(req.params.id);
	} catch (e) {
		res.status(404).json({ error: e });
	}

	try {
		const result = await posts.updatePost(req.params.id, req.body);
		res.json(result);
	} catch (e) {
		res.status(400).json({ error: e });
	}
});

router.delete("/:id/", async (req, res) => {
	try {
		await posts.deletePost(req.params.id);
	} catch (e) {
		res.status(404).json({ error: e });
	}
});
module.exports = router;
