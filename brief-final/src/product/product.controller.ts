import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { InsertProductDto, UpdateProductDto } from './dto';
import { JwtGuard } from 'src/auth/Guards';
import { AdminGuard } from 'src/auth/Guards/admin.guards';
import { FilterProductDto } from './dto/filter-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }
  
  @Get('/all')
  getAllProduct() {
    return this.productService.getAllProduct()
  }

  @UseGuards(JwtGuard, AdminGuard)
  @Post('/new')
  AddProduct(@Body() dto: InsertProductDto) {
    console.log(dto);
    return this.productService.addProduct(dto)
  }

  @Get('/filter')
  FilterProduct(@Query() dto:FilterProductDto ) {
    return this.productService.FilterProduct(dto)
  }

  @UseGuards(JwtGuard, AdminGuard)
  @Patch('/update/:id')
  UpdateProduct(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.UpdateProduct(dto, id)
  }

  @UseGuards(JwtGuard, AdminGuard)
  @Delete('/delete/:id')
  DeleteProduct(@Param('id') id: string) {
    return this.productService.DeleteProduct(id)
  }

  @Get('/search/:product')
  SearchProduct(@Param('product') product: string) {
    return this.productService.searchproduct(product)
  }

}
