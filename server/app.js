const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');

function mongoClient() {
  const uri = 'mongodb://localhost:27017/';
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client;
}

async function mongoDb() {
  const client = await mongoClient().connect();
  return client.db('test');
}

app.get('/api/heroes', async (req, res) => {
  const HeroesCollection = (await mongoDb()).collection('heroes');
  const heroes = await HeroesCollection.find({}).toArray();
  res.send(heroes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
