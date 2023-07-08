import { PartialType } from '@nestjs/mapped-types';
import { CreateStateDto } from './create-state-dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStateDto extends PartialType(CreateStateDto) {
    @ApiProperty({
        description: "Name of State",
        example: "Mandalay",
    })
    @IsString()
    @IsOptional()
    name?: string;
}
