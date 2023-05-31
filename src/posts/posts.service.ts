import { ConflictException, Injectable } from '@nestjs/common';
import { UpdatePostDto } from './dto/update-post.dto';
import { Prisma } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './entities/post.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import PaginatedResponse from 'src/common/types';

@Injectable()
export class PostsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createPostDto: CreatePostDto): Promise<Omit<PostEntity, "password">> {

    return this.prisma.post.create({
      data: createPostDto,
    }).catch(e => {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
        throw new ConflictException();
      }
      throw e;
    });
  }

  async findAll(args: Prisma.PostFindManyArgs): Promise<PaginatedResponse<PostEntity>> {
    const result = await this.prisma.post.findMany({
      ...args,
      include: {
        user: {
          select: {
            username: true,
          }
        },
        category: {
          select: {
            name: true,
          }
        }
      }
    });
    const count = await this.prisma.post.count({
      where: args.where,
    });
    return {
      message: "success",
      status: 200,
      response: {
        list: result,
        total: count,
      }
    }
  }

  findOne(id: number): Promise<PostEntity> {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            username: true,
          }
        }
      }
    });
  }

  update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    return this.prisma.post.update({ where: { id }, data: updatePostDto });
  }

  remove(id: number): Promise<PostEntity> {
    return this.prisma.post.delete({ where: { id } });
  }
}
