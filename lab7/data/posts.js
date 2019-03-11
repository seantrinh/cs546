// CS 546 - Lab 7
// I pledge my honor that I have abided by the Stevens Honor System.
const mongoCollections = require("./collections");
const posts = mongoCollections.posts;

module.exports = {
	async getPostById(id) {

	},
	async addPost(title, author, content) {

	},
	async updatePost(id, title, author, content) {

	},
	async deletePost(id) {

	},
	async removeAll() {
		// JUST FOR TESTING PURPOSES
		const postCollection = await posts();
                const deletionInfo = await postCollection.deleteMany({});
                return deletionInfo;
	}
};
