import { Controller, Get, Param, Res } from '@nestjs/common';
import { ActivateService } from './activate.service';

@Controller('activate')
export class ActivateController {
  constructor(private readonly activateService: ActivateService) { }
  
  @Get('/:token')
  activateAccount(@Param('token') token: string, @Res() res: any) {
    return this.activateService.activateToken(token, res)
  }
}
