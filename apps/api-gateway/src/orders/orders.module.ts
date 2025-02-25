import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [OrdersController],
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.REDIS,
        options: {
          port: 6379,
          host: 'localhost',
        },
      },
    ]),
  ],
})
export class OrdersModule {}
