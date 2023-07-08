import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [StatesService],
  controllers: [StatesController],
  providers: [
    StatesService,
  ],
})
export class StatesModule { }
