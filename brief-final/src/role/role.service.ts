import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertRole } from './dto';

@Injectable()
export class RoleService {
    constructor(private prisma: PrismaService) { }
    
    async CreateRole(dto: InsertRole) {
        await this.prisma.role.create({
            data: {
                ...dto
            }
        })
        return {message: 'Bien été crée'}
    }

    async DeleteRole(id: string) {
        const existingRole = await this.prisma.role.findUnique({
            where: {
                id: id
            }
        })
        if (!existingRole || !existingRole) {
            throw new ForbiddenException('Unexisting Id')
        }
        await this.prisma.role.delete({
            where: {
                id: id
            }
        })
        return {message: 'Bien été supprimer'}
    }

}
