import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
// if we have a particular module that is needed in multiple other module than we can use global decorator to make it available to all modules
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
