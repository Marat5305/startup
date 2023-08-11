import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.set('view engine', 'html');
  // app.setViewEngine('html');
  // app.setBaseViewsDir(path.join(__dirname, 'views'));
  // app.use(express.static(views));
  await app.listen(3000);
  
}
bootstrap();
