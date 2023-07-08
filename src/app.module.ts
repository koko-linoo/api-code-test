import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { FocalPersonsModule } from './focal-persons/focal-persons.module';
import { TownshipsModule } from './townships/townships.module';
import { StatesModule } from './state/states.module';

@Module({
  imports: [
    UsersModule,
    StatesModule,
    TownshipsModule,
    PrismaModule,
    FocalPersonsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
