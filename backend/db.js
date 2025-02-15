const mongoose = require("mongoose");
const mongoURILocal = "mongodb://127.0.0.1:27017/iNotebook";
const prodMongoURI =
  "mongodb+srv://phonsaakshit:Akshit%40123@cluster0.5ksp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoURI = prodMongoURI;
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
