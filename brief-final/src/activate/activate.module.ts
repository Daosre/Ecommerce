import { Module } from '@nestjs/common';
import { ActivateService } from './activate.service';
import { ActivateController } from './activate.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ActivateController],
  providers: [ActivateService, PrismaService],
})
export class ActivateModule {}
