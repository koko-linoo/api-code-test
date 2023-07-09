import { Module } from '@nestjs/common';
import { TargetPersonsService } from './target-persons.service';
import { TargetPersonsController } from './target-persons.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [TargetPersonsService],
  controllers: [TargetPersonsController],
  providers: [
    TargetPersonsService,
  ],
})
export class TargetPersonsModule { }
