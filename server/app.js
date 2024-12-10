const express = require('express');
const app = express();
const port = 3000;

const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace the placeholder with your Atlas connection string
const uri = 'mongodb://localhost:27017/';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db('test');

const heroes = database.collection('heroes');

app.get('/api/heroes', async (req, res) => {
  res.send(await heroes.find({}));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
