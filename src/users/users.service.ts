import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {

    let password = await hash(createUserDto.password, await genSalt(10));
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password,
        role: "ADMIN",
      },
    })
  }

  findAll(filter?: string): Promise<Partial<UserEntity>[]> {
    return this.prisma.user.findMany({
      where: {
        fullName: {
          contains: filter,
        }
      },
    })
  }

  findOne(id: number): Promise<UserEntity> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  findByUsername(username: string): Promise<UserEntity> {
    return this.prisma.user.findUniqueOrThrow({ where: { username } });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
