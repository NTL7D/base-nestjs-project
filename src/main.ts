import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //CORS
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
  //Helmet
  app.use(helmet());
  //Cookie
  app.use(cookieParser());
  //Validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
