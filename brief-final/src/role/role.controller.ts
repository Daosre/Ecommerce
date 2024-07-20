import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { InsertRole } from './dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) { }
  
  @Post('/new')
  CreateRole(@Body() dto: InsertRole) {
    return this.roleService.CreateRole(dto)
  }

  @Delete('/delete/:id')
  DeleteRole(@Param('id') id: string) {
    return this.roleService.DeleteRole(id)
  }
}
