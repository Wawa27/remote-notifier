import { NestFactory } from '@nestjs/core';
import { NotificationsModule } from './notifications.module';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(NotificationsModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
