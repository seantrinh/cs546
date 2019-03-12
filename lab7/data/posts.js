// CS 546 - Lab 7
// I pledge my honor that I have abided by the Stevens Honor System.
const mongoCollections = require("./collections");
const posts = mongoCollections.posts;

module.exports = {
	async getPostById(id) {
		if (!id || typeof id !== 'string') {
			throw "You must provide an id to search for!";
		}
		const postCollection = await posts();
		const post = await postCollection.findOne({ _id: ObjectId(id) });
		if (post === null) {
			throw "No post with that id!";
		}
		return post;
	},
	async addPost(title, author, content) {
		if (!title || typeof title !== 'string') {
			throw "Valid title not provided!";
		}
		if (!author || typeof author !== 'string') {
			throw "Valid author not provided!";
		}
		if (!content || typeof content !== 'string') {
			throw "Valid content not provided!";
		}
		const postCollection = await posts();

		let newPost = {
			title: title,
			author: author,
			content: content
		};
		const insertInfo = await postCollection.insertOne(newPost);
		if (insertInfo.insertedCount === 0) {
			throw "Could not add post!";
		}
		const newId = insertInfo.insertedId;
		
		const post = await this.getPostById(String(newId));
		return post;
	},
	async updatePost(id, updatedPost) {
		if (!id || typeof id !== 'string') {
			throw "You must provide an id to search for!";
		}
		const updatedPostData = {};
		if (!updatedPost.newTitle && !updatedPost.newContent) {
			throw "You must provide a title and/or content!";
		}
		if (updatedPost.newTitle) {
			updatedPostData.title = updatedPost.newTitle; 
		}
		if (updatedPost.newContent) {
			updatedPostData.content = updatedPost.newContent;
		}
		let updateCommand = {
			$set: updatedPostData
		};
		const postToUpdate = await this.getPostById(id);
		updatedPostData.author = postToUpdate.author;
		const updateInfo = await postCollection.updateOne({ _id: ObjectId(id) }, updateCommand);
		if (updateInfo.modifiedCount === 0) {
			throw "Could not update post successfully!";
		}
		return await this.getPostById(id);
		
	},
	async deletePost(id) {
		if (!id || typeof id !== 'string') {
			throw "You must provide an id to search for!";
		}
		const postCollection = await posts();
		const removedPost = await this.getPostById(id);
		const deletionInfo = await postCollection.removeOne({ _id: ObjectId(id) });
		if (deletionInfo.deletedCount === 0) {
			throw `Could not delete animal with id of ${id}`;
		}
		let rPost = {
			deleted: true,
			data: removedPost
		}
		return rPost;
	},
	async removeAll() {
		// JUST FOR TESTING PURPOSES
		const postCollection = await posts();
                const deletionInfo = await postCollection.deleteMany({});
                return deletionInfo;
	},
	async getAllPosts() {
		const postCollection = await posts();
		const post_array = await postCollection.find({}).toArray();
		return post_array;
	}
};
