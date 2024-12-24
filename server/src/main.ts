import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { Logger } from 'src/logger';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //  app.use(cookieParser());
  await app.listen(process.env['PORT'] ?? 3000);
}

bootstrap();
