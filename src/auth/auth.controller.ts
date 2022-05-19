import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// will need to call the auth service via post request, then it will got the service and call the login function. Once request is completed
// it will return to controller again
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // post/auth/signup
  @Post('signup')
  // nestjs use DTO: data transfer object which is used to transfer data between modules
  signup(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
