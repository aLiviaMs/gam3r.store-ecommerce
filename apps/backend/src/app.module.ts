import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, DbModule, OrderModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
