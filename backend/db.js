const mongoose = require("mongoose");
const mongoURILocal = "mongodb://127.0.0.1:27017/iNotebook";
const prodMongoURI = "mongodb+srv://phonsaakshit:Akshit%40123@cluster0.5ksp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoURI = prodMongoURI; // Using local MongoDB - Atlas cluster not reachable
const connectToMongo = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("Connecting TO Mongo Successfully"))
    .catch((err) => console.log(err));
};
mongoose.set("strictQuery", false);
module.exports = connectToMongo;

// const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri =
//   "mongodb+srv://phonsaakshit:Akshit%40123@cluster0.5ksp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// const connectToMongo = async () => {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB successfully!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// module.exports = { connectToMongo, client }; // Export correctly



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://phonsaakshit:<Akshit@123>@cluster0.5ksp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
