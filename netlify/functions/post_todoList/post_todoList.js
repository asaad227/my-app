const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.REACT_APP_API_MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const database = (await clientPromise).db(process.env.REACT_APP_API_MONGODB_DATABASE);
        const collection = database.collection(process.env.REACT_APP_API_MONGODB_COLLECTION);
        const data = JSON.parse(event.body)
        const results = await collection.insertOne(data);
       
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }