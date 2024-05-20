import { NestFactory } from '@nestjs/core';
import { AuthMiddleware } from './app.middleware';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('App is running in', process.env.NODE_ENV, 'mode');

  if (process.env.NODE_ENV === 'development') {
    app.use(new AuthMiddleware().use);
  }

  await app.listen(3000);
}
bootstrap();
