import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { HeaderApiKeyStrategy } from './header-api-key.strategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import NotificationsGateway from './notifications.gateway';

@Module({
  imports: [PassportModule, ConfigModule.forRoot()],
  controllers: [NotificationsController],
  providers: [NotificationsService, HeaderApiKeyStrategy, NotificationsGateway],
})
export class NotificationsModule {}
