import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertCategoryDto, UpdateCategoryDto } from './dto/insert-category.dto';
import { execSync } from 'child_process';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) { }
    
    async InsertCategory(dto: InsertCategoryDto) {
        const existingCategory = await this.prisma.category.findMany({
            where: {
                name: dto.name
            },
        });
        if (!existingCategory) {
            throw new ForbiddenException('Name Already Token')
        }
        const category = await this.prisma.category.create({
            data: {
                name: dto.name
            }
        })
        return category
    }

    async UpdateCategory(dto: UpdateCategoryDto, id: string) {
        const existingCategory = await this.prisma.category.findUnique({
            where: {
                id: id
            }
        })
        if (!existingCategory || !existingCategory) {
            throw new ForbiddenException('Id doesnt exist')
        }
        await this.prisma.category.update({
            where: {
                id: id
            },
            data: {
                name: dto.name
            }
        })
        return {message: 'Modifier avec succes'}
        
    }



    async DeleteCategory(id: string) {
        const existingCategory = await this.prisma.category.findUnique({
            where: {
                id: id
            }
        })
        if (!existingCategory || !existingCategory.id) {
            throw new ForbiddenException('Unexisting Id')
        }
        await this.prisma.category.delete({
            where: {
                id:id
            }
        })
        return {message: 'Supprimer avec success'}
    }

    async GetAllCategory() {
        return this.prisma.category.findMany({
            orderBy: {
                name: 'asc'
            }
        })
    }
}
