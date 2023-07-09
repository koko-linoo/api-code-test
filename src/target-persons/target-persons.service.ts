import { Injectable } from '@nestjs/common';
import { UpdateTargetPersonDto } from './dto/update-target-person-dto';
import { CreateTargetPersonDto } from './dto/create-target-person-dto';
import { TargetPersonEntity } from './entities/target-person.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TargetPersonsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createTargetPersonDto: CreateTargetPersonDto): Promise<TargetPersonEntity> {

    return this.prisma.targetPerson.create({
      data: createTargetPersonDto,
    })
  }

  findAll(filter?: string): Promise<Partial<TargetPersonEntity>[]> {
    return this.prisma.targetPerson.findMany({
      where: {
        name: {
          contains: filter,
        }
      },
    })
  }

  findOne(id: number): Promise<TargetPersonEntity> {
    return this.prisma.targetPerson.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTargetPersonDto: UpdateTargetPersonDto): Promise<TargetPersonEntity> {
    return this.prisma.targetPerson.update({ where: { id }, data: updateTargetPersonDto });
  }

  remove(id: number) {
    return this.prisma.targetPerson.delete({ where: { id } });
  }
}
