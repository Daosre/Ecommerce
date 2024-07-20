import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
import { JwtGuard } from './Guards';
import { AdminGuard } from './Guards/admin.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/SignUp')
  SignUp(@Body() dto: SignUpDto) {
    return this.authService.SignUp(dto)
  }

  @Post('/SignIn')
  SignIn(@Body() dto: SignInDto) {
    return this.authService.SignIn(dto)
  }

  // @UseGuards(JwtGuard, AdminGuard)
  @Delete('/delete/:id')
  DeleteUser(@Param('id') id: string) {
    return this.authService.DeleteUser(id)
  }

  @UseGuards(JwtGuard, AdminGuard)
  @Get('/all')
  getAllUser() {
    return this.authService.getAllUser()
  }

}
