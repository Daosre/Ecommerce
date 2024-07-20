import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { InsertCategoryDto, UpdateCategoryDto } from './dto/insert-category.dto';
import { JwtGuard } from 'src/auth/Guards';
import { AdminGuard } from 'src/auth/Guards/admin.guards';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  // @UseGuards(JwtGuard, AdminGuard)
  @Post('/new')
  AddCategory(@Body() dto: InsertCategoryDto) {
    return this.categoryService.InsertCategory(dto)
  }
  
  // @UseGuards(JwtGuard, AdminGuard)
  @Patch('/update/:id')
  UpdateCategory(@Body() dto: UpdateCategoryDto, @Param('id') id:string) {
    return this.categoryService.UpdateCategory(dto, id)
    }

  @Get('/all')
  GetAllCategory() {
    return this.categoryService.GetAllCategory()
  }
  
  // @UseGuards(JwtGuard, AdminGuard)
  @Delete('/delete/:id')
  DeleteCategory(@Param('id') id: string) {
    return this.categoryService.DeleteCategory(id)
  }

}
