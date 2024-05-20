import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './app.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log('App is running in', process.env.NODE_ENV, 'mode');

    if (process.env.NODE_ENV === 'development') {
      consumer.apply(AuthMiddleware).forRoutes('admin');
    }
  }
}
