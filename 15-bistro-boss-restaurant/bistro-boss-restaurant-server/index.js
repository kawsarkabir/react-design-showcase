const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// midleware
app.use(cors());
app.use(express.json());

// mongoDB connect

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hvlfmu8.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const menuCollections = client.db("bistroDB").collection("menu");
    const reviewCollections = client.db("bistroDB").collection("reviews");
    const cartCollections = client.db("bistroDB").collection("carts");

    // get menu data
    app.get("/menu", async (req, res) => {
      res.send(await menuCollections.find().toArray());
    });

    // get review data
    app.get("/reviews", async (req, res) => {
      res.send(await reviewCollections.find().toArray());
    });

    // cart api
    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      res.send(await cartCollections.insertOne(cartItem));
    });

    // get cart items
    app.get("/carts", async (req, res) => {
      res.send(await cartCollections.find().toArray());
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("boss is sitting");
});
app.listen(port, () => {
  console.log(`bistro boss is siiting on the port: ${port}`);
});
