import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { AuthGuard } from '@nestjs/passport';
import { NotificationDto } from './notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('broadcast')
  @UseGuards(AuthGuard('header-api-key'))
  broadcastMessage(@Body() notificationDto: NotificationDto): boolean {
    return this.notificationsService.broadcast(notificationDto);
  }
}
