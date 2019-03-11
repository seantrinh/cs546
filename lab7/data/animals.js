// CS 546 - Lab 7
// I pledge my honor that I have abided by the Stevens Honor System.
const mongoCollections = require("./collections");
const animals = mongoCollections.animals;
const {ObjectId} = require('mongodb');

module.exports = {
	async create(name, animalType) {

	},
	async getAll() {

	},
	async get(id) {

	},
	async remove(id) {

	},
	async rename(id, newName) {

	},
	async removeAll() {
		const animalCollection = await animals();
		const deletionInfo = await animalCollection.deleteMany({});
		return deletionInfo;
	}
};
