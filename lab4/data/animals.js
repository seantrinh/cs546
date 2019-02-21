// Lab 4 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.

const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals;

module.exports = {
	async create(name, animalType) {
		#CHECK FOR ERRORS
		if (!name) throw "You must provide a name for your animal!";
		if (!animalType) throw "You must provide an animal type";
		const animalCollection = await animals();
	
		let newAnimal = {
			name: name,
			animalType: animalType
		};
		const insertInfo = await animalCollection.insertOne(newAnimal);
		if (insertInfo.insertedCount === 0) throw "Could not add animal";
		
		const newId = insertInfo.insertedId;
		
		const animal = await this.get(newId);
		return animal;
	},
	async getAll() {

	},
	async get(id) {
		#CHECK FOR ERRORS
		if (!id) throw "You must provide an id to search for";
		
		const animalCollection = await animals();
		const animal = await animalCollection.findOne({ _id: id });
		if (animal === null) throw "No animal with that id";
		
		return animal;
	}
};

async function main() {
	const mortimer = await animals.create("Mortimer","Giraffe");
	console.log(mortimer);
}
main();
