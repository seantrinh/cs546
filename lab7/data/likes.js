// CS 546 - Lab 7
// I pledge my honor that I have abided by the Stevens Honor System.
const mongoCollections = require("./collections");
const animal = require("./animals");
const animals = mongoCollections.animals;
const {ObjectId} = require('mongodb');

module.exports = {
	async like(id, postId) {
		if (!id || typeof id !== 'string') {
			throw "You must provide an id to search for!";
		}
		if (!postId || typeof postId !== 'string') {
			throw "You must provide a post id to search for!";
		}
		const animalCollection = await animals();
		const animalToUpdate = await animal.get(id);
		const oldName = animalToUpdate.name;
		const anType = animialToUpdate.animalType;
		const like_array = animalToUpdate.likes;
		like_array.push(postId);
		const updatedAnimal = {
			name: oldName,
			animalType: anType,
			likes: like_array
		};
		const updateInfo = await animalCollection.updateOne({ _id: ObjectId(id) }, { $set: updatedAnimal });
		if (updateInfo.modifiedCount === 0) {
			throw "Could not update animal successfully!";
		}
		return await animal.get(id);
	},
	async dislike(id, postId) {
		if (!id || typeof id !== 'string') {
			throw "You must provide an id to search for!";
		}
		if (!postId || typeof postId !== 'string') {
			throw "You must provide a post id to search for!";
		}
		const animalCollection = await animals();
		const animalToUpdate = await animal.get(id);
		const oldName = animalToUpdate.name;
		const anType = animalToUpdate.animalType;
		const like_array = animalToUpdate.likes;
		let i = 0;
		for (i; i < like_array.length; i++) {
			if (like_array[i] === postId) {
				like_array.splice(i, 1);
				const updatedAnimal = {
					name: oldName,
					animalType: anType,
					likes: like_array
				};
				const updateInfo = await animalCollection.updateOne({ _id: ObjectId(id) }, { $set: updatedAnimal });
				if (updateInfo.modifiedCount === 0) {
					throw "Could not update animal successfully!";
				}
				return await animal.get(id);
			}
		}
		throw "Could not update animal successfully!";
	}
};
