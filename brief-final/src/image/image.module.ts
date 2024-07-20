import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { JwtGuard } from 'src/auth/Guards';

@Module({
  controllers: [ImageController],
  providers: [ImageService, JwtGuard],
})
export class ImageModule {}
