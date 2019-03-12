// CS 546 - Lab 7
// I pledge my honor that I have abided by the Stevens Honor System.
const mongoCollections = require("./collections");
const posts = require("./posts");
const animals = mongoCollections.animals;
const {ObjectId} = require('mongodb');

module.exports = {
	async create(name, animalType, likes) {
		if (!name || typeof name !== "string") {
			throw "Valid name not provided!";
		}
		if (!animalType || typeof animalType !== "string") {
			throw "Valid animal type not provided!";
		}
		if (!likes || !Array.isArray(likes)) {
			throw "Valid likes not provided!";
		}
		const animalCollection = await animals();

		let newAnimal = {
			name: name,
			animalType: animalType,
			likes: likes
		};
		const insertInfo = await animalCollection.insertOne(newAnimal);
		if (insertInfo.insertedCount === 0) {
			throw "Could not add animal!";
		}
		const newId = insertInfo.insertedId;

		const animal = await this.get(String(newId));
		return animal;
	},
	async getAll() {
		const animalCollection = await animals();
		const animal_array = await animalCollection.find({}).toArray();
		//animal_array.forEach(function(animal) {
		//	animal.likes.forEach(function(post) {
		//		const postObj = posts.getPostById(post);
		//		let newPost = {
		//			id: post,
		//			title: `${postObj.title}`
		//		};
		//		post.likes = newPost;
		//	});
		//	animal.posts = [];
		//	const posts = posts.getAllPosts();
		//	let i = 0;
		//	for (i; i < posts.size; i++) {
		//		if (posts[i].author === animal.id) {
		//			let postId = posts[i].id;
		//			const postObj = posts.getPostById(postId);
		//			let newPost = {
		//				id: postId,
		//				title: `${postObj.title}`
		//			};
		//			animal.posts += newPost;
		//		}
		//	}	
		//});
		return animal_array;
	},
	async get(id) {
		if (!id || typeof id !== 'string') {
			throw "You must provide an id to search for!";
		}
		const animalCollection = await animals();
		const animal = await animalCollection.findOne({ _id: ObjectId(id) });
		if (animal === null) {
			throw "No animal with that id!";
		}
		//animal.likes.forEach(function(post) {
                //	const postObj = posts.getPostById(post);
                //      let newPost = {
                //        	id: post,
                //              title: `${postObj.title}`
                //      };
                //      post.likes = newPost;
                //});
                //animal.posts = [];
                //const posts = posts.getAllPosts();
                //let i = 0;
                //for (i; i < posts.size; i++) {
                //	if (posts[i].author === animal.id) {
                //        	let postId = posts[i].id;
                //              const postObj = posts.getPostById(postId);
                //              let newPost = {
                //              	id: postId,
                //                      title: `${postObj.title}`
                //              };
                //              animal.posts += newPost;
                //      }
                //}
		return animal;
	},
	async remove(id) {
		if (!id || typeof id !== 'string') {
			throw "You must provide an id to search for!";
		}
		const animalCollection = await animals();
		const removedAnimal = await this.get(id);
		const deletionInfo = await animalCollection.removeOne({ _id: ObjectId(id) });
		if (deletionInfo.deletedCount === 0) {
			throw `Could not delete animal with id of ${id}`;
		}
		let rAnimal =  {
			deleted: true,
			data: removedAnimal
		}
		return rAnimal;
	},
	async rename(id, newAnimal) {
		if (!id || typeof id !== 'string') {
			throw "You must provide an id to search for!";
		}
		if (!newAnimal.newName && !newAnimal.newType) {
			throw "You must provide a new name and/or new type!";
		}
		const updatedAnimal = {};
		if (newAnimal.newName) {
			updatedAnimal.name = newAnimal.newName;
		}
		if (newAnimal.newType) {
			updatedAnimal.animalType = newAnimal.newType;
		}
		const animalCollection = await animals();
		const animalToUpdate = await this.get(id);
		const likes_arr = animalToUpdate.likes;
		updatedAnimal.likes = likes_arr;
		const updateInfo = await animalCollection.updateOne({ _id: ObjectId(id) }, { $set: updatedAnimal });
		if (updateInfo.modifiedCount === 0) {
			throw "Could not update dog successfully!";
		}
		return await this.get(id);
	},
	async removeAll() {
		// JUST FOR TESTING PURPOSES
		const animalCollection = await animals();
		const deletionInfo = await animalCollection.deleteMany({});
		return deletionInfo;
	}
};
