import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EsService } from './es/es.service';
import { HeroesModule } from './heroes/heroes.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test'),
        PORT: Joi.number().port().default(3000),
        DATABASE_PROTOCOL: Joi.string().default('mongodb://'),
        DATABASE_HOST: Joi.string().default('localhost:27017/'),
        DATABASE_NAME: Joi.string().default('test'),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(
        __dirname,
        '.',
        process.env.COVERAGE ? 'client' : 'client/browser',
      ),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const DATABASE_PROTOCOL =
          configService.get<string>('DATABASE_PROTOCOL');
        const DATABASE_HOST = configService.get<string>('DATABASE_HOST');
        const DATABASE_USERNAME =
          configService.get<string>('DATABASE_USERNAME');
        const DATABASE_PASSWORD =
          configService.get<string>('DATABASE_PASSWORD');
        const AUTH_CREDITS = DATABASE_USERNAME
          ? `${DATABASE_USERNAME}:${DATABASE_PASSWORD}@`
          : '';
        const uri = `${DATABASE_PROTOCOL}${AUTH_CREDITS}${DATABASE_HOST}`;
        const dbName = configService.get<string>('DATABASE_NAME');
        return {
          uri,
          dbName,
        };
      },
      inject: [ConfigService],
    }),
    HeroesModule,
  ],
  controllers: [AppController],
  providers: [AppService, EsService],
})
export class AppModule {}
