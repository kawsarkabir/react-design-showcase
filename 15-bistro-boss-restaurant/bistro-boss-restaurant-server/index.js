const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;

// midleware
app.use(cors());
app.use(express.json());

// mongoDB connect

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const userCollections = client.db("bistroDB").collection("users");
    const menuCollections = client.db("bistroDB").collection("menu");
    const reviewCollections = client.db("bistroDB").collection("reviews");
    const cartCollections = client.db("bistroDB").collection("carts");

    // jwt ttoken generate
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    // user api
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const isExitUser = await userCollections.findOne(query);
      if (isExitUser) {
        return res.send({ message: "user already exit", inserted: null });
      }
      res.send(await userCollections.insertOne(user));
    });

    // varify token midleware
    const varifyToken = (req, res, next) => {
      console.log('inside varify token', req.headers.authorization);
      if (!req.headers.authorization) {
        return res.status(401).send({ message: "forbidded access" });
      }
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "unauthorized access" });
        }
        req.decoded = decoded;
        next();
      });
    };

    // user get api
    app.get("/users", varifyToken, async (req, res) => {
      res.send(await userCollections.find().toArray());
    });

    // update users
    app.patch("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };
      res.send(await userCollections.updateOne(filter, updatedDoc));
    });

    // delete users
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      res.send(await userCollections.deleteOne(query));
    });

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
      const email = req.query.email;
      const query = { email: email };
      res.send(await cartCollections.find(query).toArray());
    });

    // delete carts
    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      res.send(await cartCollections.deleteOne(query));
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
