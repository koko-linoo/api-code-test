import { Injectable } from '@nestjs/common';
import { UpdateTownshipDto } from './dto/update-township-dto';
import { CreateTownshipDto } from './dto/create-township-dto';
import { TownshipEntity } from './entities/township.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TownshipsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createTownshipDto: CreateTownshipDto): Promise<TownshipEntity> {

    return this.prisma.township.create({
      data: createTownshipDto,
    })
  }

  findAll(filter?: string): Promise<Partial<TownshipEntity>[]> {
    return this.prisma.township.findMany({
      where: {
        name: {
          contains: filter,
        }
      },
      include: {
        state: true,
      }
    })
  }

  findOne(id: number): Promise<TownshipEntity> {
    return this.prisma.township.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTownshipDto: UpdateTownshipDto): Promise<TownshipEntity> {
    return this.prisma.township.update({ where: { id }, data: updateTownshipDto });
  }

  remove(id: number) {
    return this.prisma.township.delete({ where: { id } });
  }
}
