import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'https';

@WebSocketGateway(Number(process.env.PORT ?? '4444'), {
  transports: ['websocket'],
})
export default class NotificationsGateway {
  @WebSocketServer()
  public server: Server;
}
