import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostWhereInputPipe implements PipeTransform<string, Prisma.PostWhereInput>{
    transform(value: string): Prisma.PostWhereInput {
        if (!value) return undefined;
        const parsedValue = JSON.parse(value);
        if (!parsedValue || typeof parsedValue !== 'object') {
            throw new BadRequestException('Invalid estateWhere input parameter');
        }
        return parsedValue as Prisma.PostWhereInput;
    }
}

@Injectable()
export class PostOrderByPipe implements PipeTransform<string, Prisma.PostOrderByWithRelationInput>{
    transform(value: string): Prisma.PostOrderByWithRelationInput {
        if (!value) return undefined;
        const parsedValue = JSON.parse(value);
        if (!parsedValue || typeof parsedValue !== 'object') {
            throw new BadRequestException('Invalid estateWhere input parameter');
        }
        return parsedValue as Prisma.PostOrderByWithRelationInput;
    }
}