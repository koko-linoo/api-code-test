import { Injectable } from '@nestjs/common';
import { UpdateFocalPersonDto } from './dto/update-focal-person-dto';
import { CreateFocalPersonDto } from './dto/create-focal-person-dto';
import { FocalPersonEntity } from './entities/focal-person.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FocalPersonsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createFocalPersonDto: CreateFocalPersonDto): Promise<FocalPersonEntity> {

    return this.prisma.focalPerson.create({
      data: createFocalPersonDto,
    })
  }

  findAll(filter?: string): Promise<Partial<FocalPersonEntity>[]> {
    return this.prisma.focalPerson.findMany({
      where: {
        name: {
          contains: filter,
        }
      },
    })
  }

  findOne(id: number): Promise<FocalPersonEntity> {
    return this.prisma.focalPerson.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFocalPersonDto: UpdateFocalPersonDto): Promise<FocalPersonEntity> {
    return this.prisma.focalPerson.update({ where: { id }, data: updateFocalPersonDto });
  }

  remove(id: number) {
    return this.prisma.focalPerson.delete({ where: { id } });
  }
}
