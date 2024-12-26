import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { HeroesModule } from 'src/heroes/heroes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
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
        const uri =
          configService.get<string>('DATABASE_PROTOCOL') +
          configService.get<string>('DATABASE_HOST');
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
  providers: [AppService],
})
export class AppModule {}
