import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PanierService {
    constructor(private prisma: PrismaService) { }
         
}
