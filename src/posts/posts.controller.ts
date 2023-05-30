import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, UseGuards, DefaultValuePipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './entities/post.entity';
import { AuthGuard } from '@nestjs/passport';
import { PostOrderByPipe, PostWhereInputPipe } from './transform-pipe';
import { Prisma } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip?: number,
    @Query('take', new DefaultValuePipe(10), ParseIntPipe) take?: number,
    @Query('filter', PostWhereInputPipe) filter?: Prisma.PostWhereInput,
    @Query('orderBy', PostOrderByPipe) orderBy?: Prisma.PostOrderByWithRelationInput,
  ) {
    return this.postsService.findAll({
      skip: skip,
      take: take,
      where: filter,
      orderBy: orderBy,
    })
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard("jwt"))
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePostDto: Partial<PostEntity>) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard("jwt"))
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.remove(id);
  }
}
