import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

// this file is similar to app.js in react, this will be the main module that will import another modules 
@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
  
})
export class AppModule {}
