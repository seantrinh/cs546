// Lab 4 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.

const animals = require("./data/animals");
const connection = require("./mongoConnection");

const main = async () => {
	const mortimer = await animals.create("Mortimer","Giraffe");
	console.log(mortimer);

	

	const db = await connection();
	await db.serverConfig.close();
};

main().catch(error => {
	console.log(error);
});
