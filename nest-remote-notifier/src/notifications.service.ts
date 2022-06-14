import { Injectable } from '@nestjs/common';
import NotificationsGateway from './notifications.gateway';
import { NotificationDto } from './notification.dto';

@Injectable()
export class NotificationsService {
  public constructor(
    private readonly notificationsGateway: NotificationsGateway,
  ) {}

  broadcast(notificationDto: NotificationDto): boolean {
    // @ts-ignore
    return this.notificationsGateway.server.clients.forEach((client) => {
      client.send(JSON.stringify(notificationDto));
    });
  }
}
