import { IProduct } from '@gstore/core';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductPrisma } from './product.prisma';

@Controller('products')
export class ProductController {
  constructor(private readonly _repo: ProductPrisma) {}

  @Post()
  salvarProduct(@Body() product: IProduct): Promise<void> {
    return this._repo.save(product);
  }

  @Get()
  obterProducts(): Promise<IProduct[]> {
    return this._repo.get();
  }

  @Get(':id')
  obterProduct(@Param('id') id: string): Promise<IProduct> {
    return this._repo.getById(+id);
  }

  @Delete(':id')
  excluirProduct(@Param('id') id: string): Promise<void> {
    return this._repo.delete(+id);
  }
}
