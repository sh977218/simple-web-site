const express = require('express');
const expressWinston = require('express-winston');
const logger = require('./logger'); // Import the logger instance
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
// Use express-winston for request logging
app.use(
  expressWinston.logger({
    winstonInstance: logger,
    meta: true, // Log metadata about the request
    msg: 'HTTP {{req.method}} {{req.url}}', // Customize log message
  })
);

const { MongoClient, ServerApiVersion } = require('mongodb');
const { LeveledLogMethod } = require('winston');

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
  const client = await mongoClient()
    .connect()
    .catch((err) => {
      logger.error(err.toString());
    });
  return client.db('test');
}

app.get('/api/information', async (req, res) => {
  // Log a message at a level
  logger.log('silly', '/api/information testing silly');
  logger.log('debug', '/api/information testing debug');
  logger.log('verbose', '/api/information testing verbose');
  logger.log('info', '/api/information testing info');
  logger.log('warn', '/api/information testing warn');
  logger.log('error', '/api/information testing error');
  logger.info('/api/information testing info');
  logger.warn('/api/information testing warn');
  logger.error('/api/information testing error');

  res.send('/api/information testing');
});

app.get('/api/heroes', async (req, res) => {
  logger.info('GET /api/heroes route accessed'); // Log an info message
  const HeroesCollection = (await mongoDb()).collection('heroes');
  const heroes = await HeroesCollection.find({}).toArray();
  res.send(heroes);
});

// Use express-winston for error logging
app.use(
  expressWinston.errorLogger({
    winstonInstance: logger,
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
