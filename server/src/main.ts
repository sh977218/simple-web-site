import * as fs from 'fs';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import { AppModule } from 'src/app.module';
import { EsService } from 'src/es/es.service';
import { MyLogger } from 'src/myLogger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  app.enableCors();
  app.use(cookieParser());

  const esService = app.get(EsService);
  await esService.deleteHeroIndex('heroes');
  await esService.createHeroIndex('heroes');
  const data = fs.readFileSync('src/heroes.json', 'utf-8');
  await esService.injectData('heroes', JSON.parse(data));

  const config = new DocumentBuilder()
    .setTitle('Simple Web Site OpenAPI')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('simple web site')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env['PORT'] ?? 3000);
  console.info(`env name: ${process.env.ENV_NAME}`);
}

bootstrap();
