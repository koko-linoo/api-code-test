import { Module } from '@nestjs/common';
import { FocalPersonsService } from './focal-persons.service';
import { FocalPersonsController } from './focal-persons.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [FocalPersonsService],
  controllers: [FocalPersonsController],
  providers: [
    FocalPersonsService,
  ],
})
export class FocalPersonsModule { }
