import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { EmailModule } from './email/email.module';
import { PanierModule } from './panier/panier.module';
import { ActivateModule } from './activate/activate.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
    ProductModule, PrismaModule, CategoryModule, AuthModule, RoleModule, EmailModule, PanierModule, ActivateModule, ImageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

