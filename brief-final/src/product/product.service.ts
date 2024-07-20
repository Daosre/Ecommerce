import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertProductDto, UpdateProductDto } from './dto';
import { FilterProductDto } from './dto/filter-product.dto';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) { }
    
    //Récupération de tout les Produits
    async getAllProduct() {
        return this.prisma.product.findMany({
            orderBy: {
                name: 'asc'
            }
        })
    }

    //Création d'un Produit
    async addProduct(dto: InsertProductDto) {
        const existingProduct = await this.prisma.product.findFirst({
            where: {
                name: dto.name
            },
        });
        if (existingProduct) {
            throw new ForbiddenException('Name Already Token')
        }

        const product = await this.prisma.product.create({
            data: {
                name: dto.name,
                description: dto.description,
                image: dto.image,
                price: dto.price,
                quantity: dto.quantity,
                CategoryId: dto.category
            }
        })
        return product
    }

    //L'Update d'un Produit
    async UpdateProduct(dto: UpdateProductDto, id:string) {
        const existingProduct = await this.prisma.product.findUnique({
            where: {
                id: id
            }
        });
        if (!existingProduct || !existingProduct) {
            throw new ForbiddenException('Unexisting Id')
        }
        await this.prisma.product.update({
            where: {
                id: id
            },
            data: {
                name: dto.name,
                description: dto.description,
                image: dto.image,
                price: dto.price,
                quantity: dto.quantity,
                CategoryId: dto.category
            }
        })
        return {message: 'Sucess'}
    }

    async DeleteProduct(id: string) {
        const existingProduct = await this.prisma.product.findUnique({
            where: {
                id: id
            }
        })
        if (!existingProduct || !existingProduct) {
            throw new ForbiddenException('Unexisting Id')
        }
        return this.prisma.product.delete({
            where: {
                id: id
            }
        })
    }

    async FilterProduct(dto: FilterProductDto) {
        if (!dto.minPrice) { dto.minPrice = 0 }
        if (!dto.maxPrice) { dto.maxPrice = 100 }        
        return this.prisma.product.findMany({
            where: {
                AND: [
                    {
                        price: {
                            gte:Number(dto.minPrice)
                        }
                    },
                    {
                        price: {
                            lte:Number(dto.maxPrice)
                        }
                    },
                    {
                        CategoryId: dto.category
                    }
                    
                ]
            },
            select: {
                id: true,
                name: true,
                price: true,
                image: true,
                CategoryId: true
            }
        })
    }

    async searchproduct(product: string ) {    
        return this.prisma.product.findMany({
          where: {
            name: {
              contains: product,
            },
          },
          orderBy: {
            name: 'asc',
          },
        });
      }
    
}
