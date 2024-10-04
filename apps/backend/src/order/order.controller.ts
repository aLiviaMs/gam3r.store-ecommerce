import { IOrder } from '@gstore/core';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderPrisma } from './order.prisma';

@Controller('orders')
export class OrderController {
  constructor(private readonly _repo: OrderPrisma) {}

  @Post()
  async save(@Body() order: IOrder) {
    return this._repo.save(order);
  }

  @Get()
  async getOrders() {
    return this._repo.getAll();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return this._repo.getById(+id);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    return this._repo.delete(+id);
  }
}
