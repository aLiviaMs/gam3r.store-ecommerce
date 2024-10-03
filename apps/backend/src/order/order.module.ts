import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { OrderController } from './order.controller';

@Module({
  imports: [DbModule],
  controllers: [OrderController],
})
export class OrderModule {}
