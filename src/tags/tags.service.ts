import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Prisma } from '@prisma/client';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagEntity } from './entities/tag.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import PaginatedResponse from 'src/common/types';

@Injectable()
export class TagsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createTagDto: CreateTagDto): Promise<TagEntity> {

    return this.prisma.tag.create({
      data: {
        ...createTagDto
      },
    }).catch(e => {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
        throw new ConflictException();
      }
      throw e;
    });
  }

  async findAll(args: Prisma.TagFindManyArgs): Promise<PaginatedResponse<TagEntity>> {
    const result = await this.prisma.tag.findMany({
      ...args,
    });
    const count = await this.prisma.tag.count({
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

  findOne(id: number): Promise<TagEntity> {
    return this.prisma.tag.findUnique({ where: { id } });
  }

  update(id: number, updateTagDto: UpdateTagDto): Promise<TagEntity> {
    return this.prisma.tag.update({ where: { id }, data: updateTagDto });
  }

  remove(id: number): Promise<TagEntity> {
    return this.prisma.tag.delete({ where: { id } });
  }
}
