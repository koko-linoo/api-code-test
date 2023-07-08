import { Injectable } from '@nestjs/common';
import { UpdateStateDto } from './dto/update-state-dto';
import { CreateStateDto } from './dto/create-state-dto';
import { StateEntity } from './entities/state.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatesService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createStateDto: CreateStateDto): Promise<StateEntity> {

    return this.prisma.stateDivision.create({
      data: createStateDto,
    })
  }

  findAll(filter?: string): Promise<Partial<StateEntity>[]> {
    return this.prisma.stateDivision.findMany({
      where: {
        name: {
          contains: filter,
        }
      },
    })
  }

  findOne(id: number): Promise<StateEntity> {
    return this.prisma.stateDivision.findUnique({
      where: { id },
    });
  }

  update(id: number, updateStateDto: UpdateStateDto): Promise<StateEntity> {
    return this.prisma.stateDivision.update({ where: { id }, data: updateStateDto });
  }

  remove(id: number) {
    return this.prisma.stateDivision.delete({ where: { id } });
  }
}
