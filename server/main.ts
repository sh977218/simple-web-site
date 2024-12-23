import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'server/logger';
import cookieParser from 'cookie-parser'; // if you have esModuleInterop enabled

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(),
  });
  app.enableCors();
  app.use(cookieParser());
  await app.listen(process.env['PORT'] ?? 3000);
}

bootstrap();
