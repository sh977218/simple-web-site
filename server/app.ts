import { Client } from '@elastic/elasticsearch';
import { MongoClient, ServerApiVersion } from 'mongodb';
import express, { Request, Response } from 'express';
import expressWinston from 'express-winston';
import cors from 'cors';
import { logger } from './logger';
import { createReadStream } from 'fs';
import path from 'path';

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

const client = new Client({
  node: 'http://localhost:9200',
});

function mongoClient() {
  const uri = 'mongodb://localhost:27017/';
  return new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
}

async function mongoDb() {
  const client = await mongoClient()
    .connect()
    .catch((err) => {
      logger.error(err.toString());
    });
  return client?.db('test');
}

app.get('/api/information', async (req: Request, res: Response) => {
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

app.get('/api/heroes', async (req: Request, res: Response) => {
  logger.info('GET /api/heroes route accessed'); // Log an info message
  const HeroesCollection = (await mongoDb())?.collection('heroes');
  const heroes = await HeroesCollection?.find({}).toArray();
  res.send(heroes);
});

app.get('/api/search/heroes', async (req: Request, res: Response) => {
  logger.info('GET /api/search/heroes route accessed'); // Log an info message
  const result = await client.search({
    index: 'heroes',
    body: {
      query: {
        match: {
          homeTown: 'Metro City',
        },
      },
    },
  });
  res.send(result.hits.hits);
});

app.use(
  '/',
  express.static(path.join(__dirname, '../dist/simple-web-site/browser'))
);

// Use express-winston for error logging
app.use(
  expressWinston.errorLogger({
    winstonInstance: logger,
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
