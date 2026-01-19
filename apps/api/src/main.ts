import * as fs from 'fs';
import * as path from 'path';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

import { AppModule } from './app/app.module';
import { EsService } from './app/es/es.service';
import { MyLogger } from './app/myLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  app.enableCors();
  app.use(cookieParser());

  const esService = app.get(EsService);
  await esService.deleteHeroIndex('heroes');
  await esService.createHeroIndex('heroes');
  const filePath = path.join(__dirname, 'assets/heroes.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  await esService.injectData('heroes', JSON.parse(data));

  const config = new DocumentBuilder()
    .setTitle('NX Workspace OpenAPI')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('nx workspace')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env['PORT'] ?? 3000);
  console.info(`env name: ${process.env.ENV_NAME}`);
}

bootstrap();
