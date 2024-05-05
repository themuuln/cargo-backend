const { MongoClient, ServerApiVersion } = require('mongodb');
const { MONGO_URI } = process.env;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGO_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function connectToMongo() {
	try {
		await client.connect();
		console.log('Connected to MongoDB successfully!');
		return client;
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		throw error;
	}
}

export default connectToMongo;
