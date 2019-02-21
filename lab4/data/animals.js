// Lab 4 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.

const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals;

module.exports = {
	async create(name, animalType) {
		if (!name || typeof name !== "string") {
			throw "Valid name not provided!";
		}
		if (!animalType || typeof animalType !== "string") {
			throw "Valid animal type not provided!";
		}
		const animalCollection = await animals();
	
		let newAnimal = {
			name: name,
			animalType: animalType
		};
		const insertInfo = await animalCollection.insertOne(newAnimal);
		if (insertInfo.insertedCount === 0) {
			 throw "Could not add animal!";
		}
		const newId = insertInfo.insertedId;
		
		const animal = await this.get(newId);
		return animal;
	},
	async getAll() {
		const animalCollection = await animals();
		const animal_array = await animalCollection.find({}).toArray();
		return animal_array;
	},
	async get(id) {
		if (!id || typeof id !== "string") {
			throw "You must provide an id to search for!";
		}	
		const animalCollection = await animals();
		const animal = await animalCollection.findOne({ _id: id });
		if (animal === null) {
			throw "No animal with that id!";
		}
		return animal;
	},
	async remove(id) {
		if (!id || typeof name !== "string") {
			throw "You must provide an id to search for!";
		}
		const animalCollection = await animals();
		const removedAnimal = await animalCollection.findOne({ _id: id });
		if (removedAnimal === null) { throw "No animal with that id!"; }
		const deletionInfo = await animalCollection.removeOne({ _id: id });
		if (deletionInfo.deletedCount === 0) {
			throw `Could not delete animal with id of ${id}`;
		}
		let rAnimal = {
			deleted: true,
			data: removedAnimal
		}
		return rAnimal;
	},
	async rename(id, newName) {
		if (!id || typeof id !== "string") {
			throw "You must provide an id to search for!";
		}
		if (!newName || typeof newName !== "string") {
			throw "You must provide a valid new name!";
		}
		const animalCollection = await animals();
		const animalToUpdate = await animalCollection.findOne({ _id: id });
		if (animalToUpdate === null) { throw "No animal with that id!"; }
		const updatedAnimal = {
			name: newName,
			animalType: animalToUpdate.animalType
		}
		const updateInfo = await animalCollection.updateOne({ _id: id}, updatedAnimal);
		if (updateInfo.modifiedCount === 0) {
			throw "Could not update dog successfully!";	
		}
		return await this.get(id);
	},
	async removeAll() {
		//JUST FOR TESTING PURPOSES
		const animalCollection = await animals();
		const deletionInfo = await animalCollection.deleteMany({});
		return deletionInfo;
	}
};
