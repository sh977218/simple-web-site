import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import { AppModule } from 'src/app.module';
import { MyLogger } from 'src/myLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  app.enableCors();
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Simple Web Site OpenAPI')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('simple web site')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env['PORT'] ?? 3000);
}

bootstrap();
