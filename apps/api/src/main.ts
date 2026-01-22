import * as fs from 'fs';
import * as path from 'path';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

import { AppModule } from './app/app.module';
import { EsService } from './app/es/es.service';
import { MyLogger } from './app/myLogger';
import { DataLoadService } from './app/data-load/data-load.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  app.enableCors();
  app.use(cookieParser());

  const dataLoadService = app.get(DataLoadService);
  await dataLoadService.resetAndLoadHeroes();

/*
  const esService = app.get(EsService);
  await esService.deleteHeroIndex('heroes');
  await esService.createHeroIndex('heroes');
  const filePath = path.join(__dirname, 'assets/heroes.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  await esService.injectData('heroes', JSON.parse(data));
*/

  const config = new DocumentBuilder()
    .setTitle('NX Workspace OpenAPI')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('nx workspace')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const port = process.env['PORT'] ?? 3000;
  await app.listen(port);
  console.info(`port: ${port}`);
  console.info(`NODE_ENV name: ${process.env.NODE_ENV}`);
}

bootstrap().catch((e) => {
  console.log(`api server started with error: ${e}`);
});
