import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from 'src/app.module';
import { MyLogger } from 'src/myLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  app.enableCors();
  //  app.use(cookieParser());
  await app.listen(process.env['PORT'] ?? 3000);
}

bootstrap();
