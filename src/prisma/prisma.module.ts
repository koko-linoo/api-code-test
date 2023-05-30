import { Logger, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
    providers: [Logger, PrismaService],
    exports: [PrismaService],
})
export class PrismaModule { }
