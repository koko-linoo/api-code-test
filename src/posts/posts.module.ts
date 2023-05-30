import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [PostsService],
  controllers: [PostsController],
  providers: [
    PostsService,
  ],
})
export class PostsModule { }
