import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

describe('AppController', () => {
  let appController: NotificationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsController],
      providers: [NotificationsService],
    }).compile();

    appController = app.get<NotificationsController>(NotificationsController);
  });

  describe('root', () => {
    it('should notify with "Hello World!" message', () => {
      expect(appController.broadcastMessage('Hello world !')).toBe(true);
    });
  });
});
