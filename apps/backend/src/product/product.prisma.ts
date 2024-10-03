import { IProduct } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProductPrisma {
  constructor(public readonly prismaProvider: PrismaProvider) {}

  async save(product: IProduct): Promise<void> {
    await this.prismaProvider.product.upsert({
      where: { id: product.id ?? -1 },
      update: product,
      create: product,
    });
  }

  async get(): Promise<IProduct[]> {
    const products = await this.prismaProvider.product.findMany();
    return products as any;
  }

  async getById(id: number): Promise<IProduct | null> {
    const product = await this.prismaProvider.product.findUnique({
      where: { id },
    });
    return (product as any) ?? null;
  }

  async delete(id: number): Promise<void> {
    await this.prismaProvider.product.delete({ where: { id } });
  }
}
