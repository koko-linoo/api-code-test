import { Module } from '@nestjs/common';
import { TownshipsService } from './townships.service';
import { TownshipsController } from './townships.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [TownshipsService],
  controllers: [TownshipsController],
  providers: [
    TownshipsService,
  ],
})
export class TownshipsModule { }
