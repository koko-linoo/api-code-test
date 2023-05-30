import { BadRequestException, ConflictException, HttpException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto): Promise<Omit<UserEntity, "password">> {

    let password = await hash(createUserDto.password, await genSalt(10));
    return this.prisma.user.create({
      data: {
        username: createUserDto.username,
        password,
        role: "ADMIN",
      },
    }).catch(e => {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
        throw new ConflictException();
      }
      throw e;
    });
  }

  findAll(args: Prisma.UserFindManyArgs): Promise<UserEntity[]> {
    return this.prisma.user.findMany(args)
  }

  findOne(id: number): Promise<UserEntity> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findByUsername(username: string): Promise<UserEntity> {
    return this.prisma.user.findUnique({ where: { username } });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: number): Promise<UserEntity> {
    return this.prisma.user.delete({ where: { id } });
  }
}
