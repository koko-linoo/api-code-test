import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Prisma } from '@prisma/client';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import PaginatedResponse from 'src/common/types';

@Injectable()
export class CategoriesService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {

    return this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
      },
    }).catch(e => {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
        throw new ConflictException();
      }
      throw e;
    });
  }

  async findAll(args: Prisma.CategoryFindManyArgs): Promise<PaginatedResponse<CategoryEntity>> {
    const result = await this.prisma.category.findMany({
      ...args,
    });
    const count = await this.prisma.category.count({
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

  findOne(id: number): Promise<CategoryEntity> {
    return this.prisma.category.findUnique({ where: { id } });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
    return this.prisma.category.update({ where: { id }, data: updateCategoryDto });
  }

  remove(id: number): Promise<CategoryEntity> {
    return this.prisma.category.delete({ where: { id } });
  }
}
