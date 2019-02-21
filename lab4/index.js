// Lab 4 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.

const animals = require("./data/animals");
const connection = require("./mongoConnection");

const main = async () => {
	try {
		const mortimer = await animals.create("Mortimer","Giraffe");
		console.log(mortimer);

		const removeM = await animals.remove(mortimer._id);
		console.log(removeM);
		
		//const allMyAnimals = await animals.getAll();
		//console.log(allMyAnimals);

		//JUST FOR TESTING PURPOSES
		//const deleteAll = await animals.removeAll();
	
		const db = await connection();
		await db.serverConfig.close();
	} catch (error) { throw error; }
};

main().catch(error => {
	console.log(error);
});
