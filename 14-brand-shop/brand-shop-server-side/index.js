const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// midleware
app.use(cors());
app.use(express.json());

// mongoDB config
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
    // await client.connect();

    const userCollection = client.db("brandShopDB").collection("user");
    const productCollection = client.db("brandShopDB").collection("product");
    const brandCollection = client.db("brandShopDB").collection("brand");
    const sliderCollection = client.db("brandShopDB").collection("slider");
    const myCartCollection = client.db("brandShopDB").collection("mycart");

    // create a new user
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      res.send(await userCollection.insertOne(newUser));
    });

    // get data in database with get method
    app.get("/user", async (req, res) => {
      res.send(await userCollection.find().toArray());
    });

    // add brand items
    app.post("/brand", async (req, res) => {
      const newBrand = req.body;
      res.send(await brandCollection.insertOne(newBrand));
    });

    // get brand data
    app.get("/brand", async (req, res) => {
      res.send(await brandCollection.find().toArray());
    });

    app.get("/brand/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      res.send(await brandCollection.findOne(query));
    });

    //  brand delete
    app.delete("/brand/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      res.send(await brandCollection.deleteOne(query));
    });

    app.put("/brand/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedBrand = req.body;
      console.log(updatedBrand);
      const updatebrand = {
        $set: {
          brandName: updatedBrand.brandName,
          brandURL: updatedBrand.brandURL,
        },
      };

      res.send(await brandCollection.updateOne(query, updatebrand, options));
    });

    // all product CRUD here
    app.post("/products", async (req, res) => {
      const product = req.body;
      res.send(await productCollection.insertOne(product));
    });

    app.get("/products", async (req, res) => {
      const cursor = productCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      res.send(await productCollection.findOne(query));
    });

    app.put("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedProduct = req.body;
      const updateproduct = {
        $set: {
          productName: updatedProduct.productName,
          category: updatedProduct.category,
          price: updatedProduct.price,
          rating: updatedProduct.rating,
          details: updatedProduct.details,
          photoURL: updatedProduct.photoURL,
        },
      };

      res.send(
        await productCollection.updateOne(query, updateproduct, options)
      );
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      res.send(await productCollection.deleteOne(query));
    });

    // slider all operation here
    app.post("/productbaseslider", async (req, res) => {
      const product = req.body;
      res.send(await sliderCollection.insertOne(product));
    });

    app.get("/productbaseslider", async (req, res) => {
      const cursor = sliderCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // my cart crud operation
    app.post("/mycart", async (req, res) => {
      const product = req.body;
      console.log(product);
      res.send(await myCartCollection.insertOne(product));
    });

    app.get("/mycart", async (req, res) => {
      const cursor = myCartCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/mycart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      res.send(await myCartCollection.findOne(query));
    });

    app.delete("/mycart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      res.send(await myCartCollection.deleteOne(query));
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);

app.get("/", (req, res) => {
  res.send("coming brand shop");
});
app.listen(port, () => {
  console.log(`brand shop site runing on:${port} `);
});
