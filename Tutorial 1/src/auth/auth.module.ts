import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

// new module can be created using CLI as well "nest g module MOUDLE_NAME";
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  
})
export class AuthModule {}
