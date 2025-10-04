const mongoose = require("mongoose");

const prodMongoURI =
  "mongodb+srv://phonsaakshit:Akshit%40123@cluster0.5ksp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

console.log("Attempting to connect to MongoDB...");

mongoose
  .connect(prodMongoURI, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  })
  .then(() => {
    console.log("✅ Connected to MongoDB successfully!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:");
    console.error(err.message);
    console.error("\nPossible issues:");
    console.error("1. Network connectivity");
    console.error("2. MongoDB Atlas IP whitelist (add 0.0.0.0/0 for testing)");
    console.error("3. Invalid credentials");
    console.error("4. Database cluster is paused/deleted");
    process.exit(1);
  });
